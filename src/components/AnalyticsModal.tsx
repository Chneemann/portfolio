"use client";

import { useEffect } from "react";
import { createPortal } from "react-dom";

/** Analytics metrics payload returned by the custom backend API */
export interface AnalyticsData {
  totalViews: number;
  todayViews: number;
  uniqueVisitors: number;
  lastPing?: number;
  latencyMs?: number;
  devices: {
    Desktop: number;
    Mobile: number;
  };
}

interface AnalyticsModalProps {
  isOpen: boolean;
  onClose: () => void;
  stats: AnalyticsData;
}

/** Formats unix timestamps into relative time strings (e.g., "5s ago", "2m ago") */
function getTimeAgo(timestamp?: number): string {
  if (!timestamp) return "just now";
  const seconds = Math.floor((Date.now() - timestamp * 1000) / 1000);
  if (seconds < 10) return "just now";
  if (seconds < 60) return `${seconds}s ago`;
  const minutes = Math.floor(seconds / 60);
  if (minutes < 60) return `${minutes}m ago`;
  const hours = Math.floor(minutes / 60);
  return `${hours}h ago`;
}

/** Terminal-style modal inspector for viewing live traffic and system health metrics */
export default function AnalyticsModal({
  isOpen,
  onClose,
  stats,
}: AnalyticsModalProps) {
  // Global hotkeys to dismiss the modal (ESC)
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === "Escape") onClose();
    };
    if (isOpen) window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, [isOpen, onClose]);

  if (!isOpen) return null;

  // Calculate device traffic ratio percentages
  const desktopCount = stats.devices?.Desktop || 0;
  const mobileCount = stats.devices?.Mobile || 0;
  const totalDeviceCount = desktopCount + mobileCount || 1;
  const desktopPercent = Math.round((desktopCount / totalDeviceCount) * 100);

  // Render modal into document.body via portal to escape parent z-index constraints
  return createPortal(
    <div
      className="fixed inset-0 w-screen h-screen z-51 flex items-center justify-center p-4 bg-slate-950/85 backdrop-blur-md touch-none animate-in fade-in duration-150"
      onClick={onClose}
    >
      {/* Terminal Card Container */}
      <div
        className="group relative w-full max-w-md rounded-2xl border border-slate-800/80 bg-slate-900/95 p-6 text-slate-300 shadow-2xl shadow-black/80 border-t-slate-700/60 font-mono text-xs overflow-hidden"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Glow Effects */}
        <div className="absolute -top-16 -right-16 w-32 h-32 bg-blue-500/15 rounded-full blur-2xl pointer-events-none" />
        <div className="absolute -bottom-16 -left-16 w-32 h-32 bg-emerald-500/10 rounded-full blur-2xl pointer-events-none" />

        {/* Top Window Bar */}
        <div className="flex items-center justify-between pb-3 mb-4 border-b border-slate-800/80 relative z-10 select-none">
          <div className="flex items-center gap-2">
            {/* Window Controls */}
            <div className="flex gap-1.5 group/dots">
              <button
                onClick={onClose}
                className="w-2.5 h-2.5 rounded-full bg-rose-500/80 hover:bg-rose-500 transition-colors cursor-pointer"
                title="Close window"
              />
              <button
                onClick={onClose}
                className="w-2.5 h-2.5 rounded-full bg-amber-500/80 hover:bg-amber-500 transition-colors cursor-pointer"
                title="Minimize window"
              />
              <span
                className="w-2.5 h-2.5 rounded-full bg-emerald-500/80 hover:bg-emerald-500 transition-colors cursor-default"
                title="Active Process"
              />
            </div>

            {/* Simulated process header */}
            <span className="text-slate-500 ml-2 font-mono text-[11px] flex items-center gap-1.5">
              <span className="text-slate-600">~/</span>
              <span className="text-slate-400">analytics.sh</span>
              <span className="text-emerald-400 text-[9px] px-1 py-0.2 rounded bg-emerald-500/10 border border-emerald-500/20">
                PID: {Math.floor(Math.random() * 8000 + 1000)}
              </span>
            </span>
          </div>

          <button
            onClick={onClose}
            className="text-slate-500 hover:text-rose-400 transition-colors font-mono text-[11px] px-1.5 py-0.5 rounded hover:bg-rose-500/10 border border-transparent hover:border-rose-500/20 cursor-pointer"
            title="Close modal (Esc)"
          >
            [esc ✕]
          </button>
        </div>

        {/* System Command Header */}
        <div className="mb-5 relative z-10">
          <div className="flex items-center gap-2 text-sm font-semibold text-white">
            <span className="text-blue-400 font-bold">$</span>
            <span>sys.analytics --inspect</span>
          </div>
          <div className="text-[10px] text-slate-500 mt-1 flex items-center gap-2">
            <span className="inline-block w-1.5 h-1.5 rounded-full bg-emerald-400 animate-pulse" />
            <span>STATUS: ONLINE</span>
            <span className="text-slate-700">•</span>
            <span className="text-slate-500">
              LATENCY:{" "}
              <span className="text-slate-300">
                {stats.latencyMs ?? "<1"}ms
              </span>
            </span>
          </div>
        </div>

        {/* Primary Traffic Metrics Grid */}
        <div className="grid grid-cols-2 gap-3 mb-4 relative z-10">
          <div className="p-3.5 rounded-xl bg-slate-950/80 border border-slate-800/80 hover:border-slate-700/80 transition-colors">
            <div className="flex justify-between items-center text-[10px] text-slate-500 mb-1">
              <span>views_today</span>
              <span className="text-blue-400/80">#1</span>
            </div>
            <div className="text-2xl font-bold text-blue-400 tracking-tight">
              {stats.todayViews}
            </div>
          </div>

          <div className="p-3.5 rounded-xl bg-slate-950/80 border border-slate-800/80 hover:border-slate-700/80 transition-colors">
            <div className="flex justify-between items-center text-[10px] text-slate-500 mb-1">
              <span>unique_visitors</span>
              <span className="text-emerald-400/80">#2</span>
            </div>
            <div className="text-2xl font-bold text-emerald-400 tracking-tight">
              {stats.uniqueVisitors}
            </div>
          </div>
        </div>

        {/* Total Hits & Device Breakdown */}
        <div className="p-3.5 rounded-xl bg-slate-950/80 border border-slate-800/80 space-y-3 relative z-10">
          <div className="flex justify-between items-center text-xs">
            <span className="text-slate-400">total_hits:</span>
            <span className="font-bold text-slate-100 bg-slate-900 px-2 py-0.5 rounded border border-slate-800">
              {stats.totalViews}
            </span>
          </div>

          {/* Device ratio progress bar */}
          <div className="pt-2 border-t border-slate-800/80 space-y-1.5">
            <div className="flex justify-between text-[11px]">
              <span className="text-slate-500">device_ratio:</span>
              <span className="text-slate-300 font-medium">
                💻 {desktopCount} <span className="text-slate-600">/</span> 📱{" "}
                {mobileCount}
              </span>
            </div>

            <div className="w-full h-1.5 bg-slate-900 rounded-full overflow-hidden flex border border-slate-800/60">
              <div
                className="bg-blue-500 h-full transition-all duration-500"
                style={{ width: `${desktopPercent}%` }}
                title={`Desktop: ${desktopPercent}%`}
              />
              <div
                className="bg-emerald-500 h-full transition-all duration-500"
                style={{ width: `${100 - desktopPercent}%` }}
                title={`Mobile: ${100 - desktopPercent}%`}
              />
            </div>
          </div>
        </div>

        {/* GDPR & Activity Footer */}
        <div className="mt-4 text-[10px] text-slate-600 flex justify-between items-center relative z-10 pt-2 border-t border-slate-800/40">
          <span>GDPR_ANONYMIZED: TRUE</span>
          <span className="text-slate-400 font-medium">
            LAST_PING:{" "}
            <span className="text-slate-300">{getTimeAgo(stats.lastPing)}</span>
          </span>
        </div>
      </div>
    </div>,
    document.body,
  );
}
