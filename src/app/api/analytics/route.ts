import { NextResponse } from "next/server";
import fs from "fs";
import path from "path";

export const dynamic = "force-dynamic";

const dataFilePath = path.join(process.cwd(), "data", "analytics.json");

interface AnalyticsData {
  totalViews: number;
  todayViews: number;
  lastDate: string;
  lastPing: number;
  visitors: string[];
  devices: { Desktop: number; Mobile: number };
}

// In-memory cache to prevent redundant disk reads and race condition overrides
let cachedData: AnalyticsData | null = null;

// Mutex flag to serialize disk write operations during high concurrent traffic
let isWriting = false;

/**
 * Loads analytics data from memory cache or reads from persistent disk storage.
 */
function loadAnalyticsData(): AnalyticsData {
  const today = new Date().toISOString().split("T")[0];
  const defaultData: AnalyticsData = {
    totalViews: 0,
    todayViews: 0,
    lastDate: today,
    lastPing: Math.floor(Date.now() / 1000),
    visitors: [],
    devices: { Desktop: 0, Mobile: 0 },
  };

  // Return from memory if available to ensure sub-millisecond read access
  if (cachedData) {
    return cachedData;
  }

  try {
    if (fs.existsSync(dataFilePath)) {
      const fileContent = fs.readFileSync(dataFilePath, "utf-8");
      const parsed = JSON.parse(fileContent);
      cachedData = { ...defaultData, ...parsed };
      return cachedData;
    }
  } catch (err) {
    console.error("Error reading analytics file:", err);
  }

  cachedData = defaultData;
  return cachedData;
}

/**
 * Persists analytics data to memory cache and asynchronously flushes to disk.
 */
function saveAnalyticsData(data: AnalyticsData) {
  // Update memory state immediately so concurrent requests see the latest state
  cachedData = data;

  // Prevent overlapping disk writes if another write is currently in progress
  if (isWriting) return;
  isWriting = true;

  try {
    const dir = path.dirname(dataFilePath);
    if (!fs.existsSync(dir)) {
      fs.mkdirSync(dir, { recursive: true });
    }
    // Asynchronous write keeps the event loop non-blocking
    fs.writeFile(
      dataFilePath,
      JSON.stringify(data, null, 2),
      "utf-8",
      (err) => {
        isWriting = false;
        if (err) console.error("Error writing analytics file:", err);
      },
    );
  } catch (err) {
    isWriting = false;
    console.error("Error initiating analytics file write:", err);
  }
}

/**
 * Simple string hashing function for IP anonymization (replaces md5).
 */
function simpleHash(str: string): string {
  let hash = 0;
  for (let i = 0; i < str.length; i++) {
    const char = str.charCodeAt(i);
    hash = (hash << 5) - hash + char;
    hash |= 0;
  }
  return Math.abs(hash).toString(36);
}

export async function GET(request: Request) {
  const startTime = performance.now();
  const { searchParams } = new URL(request.url);
  const track = searchParams.get("track") === "true";

  // Load state from memory cache (or disk on cold start)
  const data = loadAnalyticsData();
  const today = new Date().toISOString().split("T")[0];

  // Daily reset logic for views and visitor hashes
  if (data.lastDate !== today) {
    data.todayViews = 0;
    data.lastDate = today;
    data.visitors = [];
  }

  // Extract client metadata from headers forwarded by Caddy reverse proxy
  const referer = request.headers.get("referer") || "";
  const host = request.headers.get("host") || "";
  const userAgent = request.headers.get("user-agent") || "";
  const forwardedFor = request.headers.get("x-forwarded-for") || "0.0.0.0";
  const ip = forwardedFor.split(",")[0].trim();

  const isLocalhost =
    host.includes("localhost") ||
    referer.includes("localhost") ||
    ip === "127.0.0.1" ||
    ip === "::1";

  // Process tracking request
  if (track && !isLocalhost) {
    data.totalViews++;
    data.todayViews++;
    data.lastPing = Math.floor(Date.now() / 1000);

    // Categorize device type
    const isMobile = /mobile|android|iphone|ipad|tablet/i.test(userAgent);
    const deviceType = isMobile ? "Mobile" : "Desktop";
    data.devices[deviceType] = (data.devices[deviceType] || 0) + 1;

    // Anonymize visitor IP + date to track unique visits per day
    const visitorHash = simpleHash(ip + today);
    if (!data.visitors.includes(visitorHash)) {
      data.visitors.push(visitorHash);
    }

    // Atomic update of cache and deferred disk write
    saveAnalyticsData(data);
  }

  const latencyMs = parseFloat((performance.now() - startTime).toFixed(2));

  return NextResponse.json({
    totalViews: data.totalViews,
    todayViews: data.todayViews,
    uniqueVisitors: data.visitors.length,
    devices: data.devices,
    lastPing: data.lastPing,
    latencyMs,
  });
}
