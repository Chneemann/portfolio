"use client";

import Link from "next/link";
import AnalyticsWidget from "./AnalyticsWidget";

export default function Footer() {
  return (
    <footer className="w-full bg-slate-950/50 text-xs text-slate-500 px-4 py-4 border-t border-slate-900/40">
      <div className="max-w-5xl mx-auto flex flex-col md:flex-row justify-between items-center gap-4">
        {/* Left: Copyright */}
        <p className="order-1 md:order-1">
          © {new Date().getFullYear()} André Kempf. All rights reserved.
        </p>

        {/* Center: Analytics */}
        <div className="order-3 md:order-2 opacity-70 hover:opacity-100 transition-opacity">
          <AnalyticsWidget />
        </div>

        {/* Right: Links */}
        <div className="flex gap-4 order-2 md:order-3">
          <Link
            href="/imprint"
            className="hover:text-slate-300 transition-colors"
          >
            Legal Notice
          </Link>
          <span className="text-slate-800">|</span>
          <Link
            href="/privacy"
            className="hover:text-slate-300 transition-colors"
          >
            Privacy Policy
          </Link>
        </div>
      </div>
    </footer>
  );
}
