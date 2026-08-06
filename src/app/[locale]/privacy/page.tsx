"use client";

import { useTranslations } from "next-intl";
import { Link } from "@/i18n/navigation";

/**
 * GDPR privacy policy page outlining data collection, self-hosted analytics, and user rights
 */
export default function PrivacyPage() {
  const tCommon = useTranslations("Common");
  const tPrivacy = useTranslations("Privacy");

  return (
    <section className="relative pt-18 py-6 px-4 md:px-6 md:pt-24 max-w-5xl mx-auto">
      {/* Page Heading & Navigation */}
      <h1 className="text-3xl font-bold text-white mb-2 tracking-tight">
        {tCommon("privacy")}
        <span className="text-blue-500">.</span>
      </h1>
      <Link
        href="/"
        className="text-sm font-mono text-blue-400 hover:underline mb-8 inline-flex items-center gap-2 transition-colors"
      >
        ← {tCommon("backHome")}
      </Link>

      <div className="space-y-8 text-slate-300 leading-relaxed text-sm">
        {/* Executive Summary */}
        <div className="group relative rounded-2xl border border-slate-700/60 bg-slate-900/95 p-6 shadow-2xl shadow-black/60 border-t-slate-600/50 space-y-3 overflow-hidden">
          <div className="absolute -top-12 -right-12 w-24 h-24 bg-blue-500/10 rounded-full blur-xl pointer-events-none" />
          <h2 className="text-lg font-semibold text-white flex items-center gap-2">
            <span className="text-blue-500 font-mono text-sm">//</span>{" "}
            {tPrivacy("section1Title")}
          </h2>

          <div className="space-y-1">
            <h3 className="font-semibold ">{tPrivacy("generalInfoTitle")}</h3>
            <p className="text-slate-300 text-xs leading-relaxed">
              {tPrivacy("generalInfoText")}
            </p>
          </div>

          <div className="space-y-1">
            <h3 className="font-semibold pt-2">
              {tPrivacy("dataCollectionTitle")}
            </h3>
            <p className="text-slate-300 text-xs leading-relaxed">
              {tPrivacy("dataCollectionText")}
            </p>
          </div>
        </div>

        {/* Data Controller Information */}
        <div className="group relative rounded-2xl border border-slate-700/60 bg-slate-900/95 p-6 shadow-2xl shadow-black/60 border-t-slate-600/50 space-y-2 overflow-hidden">
          <div className="absolute -top-12 -right-12 w-24 h-24 bg-blue-500/10 rounded-full blur-xl pointer-events-none" />
          <h2 className="text-lg font-semibold text-white mb-2 flex items-center gap-2">
            <span className="text-blue-500 font-mono text-sm">//</span>
            {tPrivacy("section2Title")}
          </h2>
          <p>{tPrivacy("section2Intro")}</p>
          <div className="pt-2 font-mono text-xs space-y-1 bg-slate-950/60 p-4 rounded-xl border border-slate-800/80">
            <p className="font-semibold text-slate-100 text-sm">André Kempf</p>
            <p>Großschneidersweg 2a</p>
            <p>76149 Karlsruhe, Germany</p>
            <p className="pt-2">
              {tCommon("emailLabel")}:{" "}
              <span className="text-blue-400 hover:underline cursor-pointer">
                dev@andre-kempf.com
              </span>
            </p>
          </div>
        </div>

        {/* External Web Hosting Details */}
        <div className="group relative rounded-2xl border border-slate-700/60 bg-slate-900/95 p-6 shadow-2xl shadow-black/60 border-t-slate-600/50 space-y-3 overflow-hidden">
          <div className="absolute -top-12 -right-12 w-24 h-24 bg-blue-500/10 rounded-full blur-xl pointer-events-none" />
          <h2 className="text-lg font-semibold text-white flex items-center gap-2">
            <span className="text-blue-500 font-mono text-sm">//</span>
            {tPrivacy("section3Title")}
          </h2>
          <p>{tPrivacy("hostingText1")}</p>
          <p>{tPrivacy("hostingText2")}</p>
        </div>

        {/* Privacy-Preserving Analytics Principles */}
        <div className="group relative rounded-2xl border border-slate-700/60 bg-slate-900/95 p-6 shadow-2xl shadow-black/60 border-t-slate-600/50 space-y-3 overflow-hidden">
          <div className="absolute -top-12 -right-12 w-24 h-24 bg-blue-500/10 rounded-full blur-xl pointer-events-none" />
          <h2 className="text-lg font-semibold text-white flex items-center gap-2">
            <span className="text-blue-500 font-mono text-sm">//</span>
            {tPrivacy("section4Title")}
          </h2>
          <p>{tPrivacy("analyticsText1")}</p>
          <div className="p-4 rounded-xl bg-slate-950/60 border border-slate-800/80 space-y-2 text-xs font-mono">
            <p className="text-emerald-400 font-semibold">
              // {tPrivacy("analyticsGuaranteesTitle")}
            </p>
            <ul className="list-disc list-inside space-y-1 text-slate-400">
              <li>
                <strong>{tPrivacy("cookieTitle")}:</strong>{" "}
                {tPrivacy("cookieText")}
              </li>
              <li>
                <strong>{tPrivacy("ipTitle")}:</strong> {tPrivacy("ipText")}
              </li>
              <li>
                <strong>{tPrivacy("thirdPartyTitle")}:</strong>{" "}
                {tPrivacy("thirdPartyText")}
              </li>
            </ul>
          </div>
          <p className="text-xs text-slate-400 pt-1">
            {tPrivacy("analyticsText2")}
          </p>
        </div>

        {/* Statutory Data Subject Rights */}
        <div className="group relative rounded-2xl border border-slate-700/60 bg-slate-900/95 p-6 shadow-2xl shadow-black/60 border-t-slate-600/50 space-y-3 overflow-hidden">
          <div className="absolute -top-12 -right-12 w-24 h-24 bg-blue-500/10 rounded-full blur-xl pointer-events-none" />
          <h2 className="text-lg font-semibold text-white flex items-center gap-2">
            <span className="text-blue-500 font-mono text-sm">//</span>{" "}
            {tPrivacy("section5Title")}
          </h2>
          <p>{tPrivacy("section5Text")}</p>
        </div>
      </div>
    </section>
  );
}
