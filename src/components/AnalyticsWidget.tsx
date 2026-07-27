"use client";

import { useEffect, useState } from "react";

export interface AnalyticsData {
  totalViews: number;
  todayViews: number;
  uniqueVisitors: number;
  devices: {
    Desktop: number;
    Mobile: number;
  };
}

export default function AnalyticsWidget() {
  const [stats, setStats] = useState<AnalyticsData | null>(null);

  useEffect(() => {
    fetch("https://andre-kempf.com/backend/analytics.php?track=true")
      .then((res) => res.json())
      .then((data) => {
        if (!data.error) setStats(data);
      })
      .catch(() => null);
  }, []);

  if (!stats) {
    return (
      <div className="h-6 w-52.5 font-mono text-xs text-slate-500/80 bg-slate-900/40 rounded-md border border-slate-800/60 flex items-center px-2.5 gap-1.5 select-none">
        <span className="w-1.5 h-1.5 rounded-full bg-amber-400/80 animate-pulse" />
        <span className="text-blue-400 font-semibold">$</span>
        <span className="text-slate-400 animate-pulse">loading_stats...</span>
      </div>
    );
  }

  return (
    <div className="h-6 font-mono text-xs text-slate-500 flex items-center gap-1.5 bg-slate-900/40 px-2.5 py-1 rounded-md border border-slate-800/60 select-none shadow-xs">
      <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 animate-pulse" />
      <span className="text-blue-400 font-semibold">$</span>
      <span className="text-slate-400">sys.metrics</span>
      <span className="text-slate-600">[</span>
      <span className="text-slate-300">
        today:
        <span className="text-emerald-400 font-medium">{stats.todayViews}</span>
      </span>
      <span className="text-slate-600">|</span>
      <span className="text-slate-300">
        total:
        <span className="text-blue-400 font-medium">{stats.totalViews}</span>
      </span>
      <span className="text-slate-600">]</span>
    </div>
  );
}
