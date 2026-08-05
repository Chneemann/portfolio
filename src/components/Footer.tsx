"use client";

import Link from "next/link";
import { useTranslations } from "next-intl";
import AnalyticsWidget from "./AnalyticsWidget";

/**
 * Page footer with copyright notice, live analytics widget, and legal links
 */
export default function Footer() {
  const tCommon = useTranslations("Common");
  const tFooter = useTranslations("Footer");

  const currentYear = new Date().getFullYear();

  return (
    <footer className="w-full bg-slate-950/50 text-xs text-slate-500 px-4 py-4 border-t border-slate-900/40">
      <div className="max-w-5xl mx-auto flex flex-col md:flex-row justify-between items-center gap-4">
        {/* Left: Copyright Notice */}
        <p className="order-1 md:order-1">
          &copy; {currentYear} André Kempf. {tFooter("rights")}
        </p>

        {/* Center: Live System Metrics Badge */}
        <div className="order-3 md:order-2 opacity-70 hover:opacity-100 transition-opacity">
          <AnalyticsWidget />
        </div>

        {/* Right: Legal & Compliance Links */}
        <div className="flex gap-4 order-2 md:order-3">
          <Link
            href="/imprint"
            className="hover:text-slate-300 transition-colors"
          >
            {tCommon("imprint")}
          </Link>
          <span className="text-slate-800">|</span>
          <Link
            href="/privacy"
            className="hover:text-slate-300 transition-colors"
          >
            {tCommon("privacy")}
          </Link>
        </div>
      </div>
    </footer>
  );
}
