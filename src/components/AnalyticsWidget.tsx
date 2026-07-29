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

  useEffect(() => {
    setMounted(true);

    // Track current page view and fetch live analytics data
    fetch("https://andre-kempf.com/backend/analytics.php?track=true")
      .then((res) => res.json())
      .then((data) => {
        if (!data.error) setStats(data);
      })
      .catch(() => null);
  }, []);

  // Skeleton badge while metrics are loading
  if (!stats) {
    return (
      <div className="h-6.75 w-52.5 font-mono text-[11px] text-slate-500/80 bg-slate-900/40 rounded-md border border-slate-800/60 flex items-center px-2.5 gap-1.5 select-none">
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
        onClick={() => setIsOpen(true)}
        className="font-mono text-xs text-slate-500 hover:text-slate-300 transition-all flex items-center gap-1.5 cursor-pointer group bg-slate-900/40 hover:bg-slate-900 px-2.5 py-1 rounded-md border border-slate-800/60 hover:border-blue-500/40 shadow-xs"
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
