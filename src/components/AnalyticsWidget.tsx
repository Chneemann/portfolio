"use client";

import { useEffect, useState } from "react";
import AnalyticsModal, { AnalyticsData } from "./AnalyticsModal";

/**
 * Footer badge widget that fetches live metrics and triggers the analytics modal
 */
export default function AnalyticsWidget() {
  const [stats, setStats] = useState<AnalyticsData | null>(null);
  const [isOpen, setIsOpen] = useState(false);
  const [mounted, setMounted] = useState(false);

  // Helper function to fetch stats (optionally tracking the view)
  const fetchStats = (shouldTrack: boolean = false) => {
    fetch(`/api/analytics?track=${shouldTrack}`, { cache: "no-store" })
      .then((res) => {
        if (!res.ok) throw new Error(`HTTP error! Status: ${res.status}`);
        return res.json();
      })
      .then((data) => {
        if (data && typeof data.todayViews === "number") setStats(data);
      })
      .catch((err) => console.error("Analytics Widget Fetch Error:", err));
  };

  // Open modal and silently refresh stats without incrementing view count
  const handleOpenModal = () => {
    fetchStats(false); // track=false when clicking badge
    setIsOpen(true);
  };

  // Hydrate client, fetch initial page metrics, and listen for custom Cmd+K palette events
  useEffect(() => {
    setMounted(true);
    fetchStats(true); // Track initial page view

    // Listen for custom trigger event fired from CommandPalette
    const handleCustomOpen = () => handleOpenModal();
    window.addEventListener("open-analytics", handleCustomOpen);

    return () => {
      window.removeEventListener("open-analytics", handleCustomOpen);
    };
  }, []);

  // Skeleton badge while client hydration occurs or metrics are loading
  if (!mounted || !stats) {
    return (
      <div className="h-7 w-52 font-mono text-[11px] text-slate-500/80 bg-slate-900/40 rounded-md border border-slate-800/60 flex items-center px-2.5 gap-1.5 select-none">
        <span className="w-1.5 h-1.5 rounded-full bg-amber-400/80 animate-pulse" />
        <span className="text-blue-400 font-semibold">$</span>
        <span className="text-slate-400 animate-pulse">loading_stats...</span>
      </div>
    );
  }

  return (
    <>
      {/* Interactive terminal badge in footer */}
      <button
        onClick={handleOpenModal}
        className="font-mono text-xs text-slate-500 hover:text-slate-300 transition-all flex items-center gap-1.5 cursor-pointer group bg-slate-900/40 hover:bg-slate-900 px-2.5 py-1 rounded-md border border-slate-800/60 hover:border-blue-500/40 shadow-sm"
        title="Open analytics terminal"
      >
        <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 animate-pulse" />
        <span className="text-blue-400 font-semibold">$</span>
        <span className="text-slate-400 group-hover:text-slate-300">
          sys.metrics
        </span>
        <span className="text-slate-600">[</span>
        <span className="text-slate-300 group-hover:text-blue-400 transition-colors">
          today:
          <span className="text-emerald-400 font-medium">
            {stats.todayViews}
          </span>
        </span>
        <span className="text-slate-600">|</span>
        <span className="text-slate-300 group-hover:text-blue-400 transition-colors">
          total:
          <span className="text-blue-400 font-medium">{stats.totalViews}</span>
        </span>
        <span className="text-slate-600">]</span>
      </button>

      {/* Render modal only on client after hydration */}
      {mounted && (
        <AnalyticsModal
          isOpen={isOpen}
          onClose={() => setIsOpen(false)}
          stats={stats}
        />
      )}
    </>
  );
}
