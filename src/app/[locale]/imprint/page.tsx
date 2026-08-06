"use client";

import { useTranslations } from "next-intl";
import { Link } from "@/i18n/navigation";

/**
 * Legal notice page pursuant to German telemedia law (§ 5 DDG & § 18 MStV)
 */
export default function ImprintPage() {
  const tCommon = useTranslations("Common");
  const tImprint = useTranslations("Imprint");

  return (
    <section className="relative pt-18 py-6 px-4 md:px-6 md:pt-24 max-w-5xl mx-auto">
      {/* Page Heading & Back Navigation */}
      <h1 className="text-3xl font-bold text-white mb-2 tracking-tight">
        {tCommon("imprint")}
        <span className="text-blue-500">.</span>
      </h1>
      <Link
        href="/"
        className="text-sm font-mono text-blue-400 hover:underline mb-8 inline-flex items-center gap-2 transition-colors"
      >
        ← {tCommon("backHome")}
      </Link>

      <div className="space-y-8 text-slate-300 leading-relaxed text-sm">
        {/* Publisher Identification (§ 5 DDG & § 18 MStV) */}
        <div className="group relative rounded-2xl border border-slate-700/60 bg-slate-900/95 p-6 shadow-2xl shadow-black/60 border-t-slate-600/50 space-y-3 overflow-hidden">
          <div className="absolute -top-12 -right-12 w-24 h-24 bg-blue-500/10 rounded-full blur-xl pointer-events-none" />
          <h2 className="text-lg font-semibold text-white mb-2 flex items-center gap-2">
            <span className="text-blue-500 font-mono text-sm">//</span>{" "}
            {tImprint("section1Title")}
          </h2>
          <div className=" font-mono text-xs space-y-1 bg-slate-950/60 p-4 rounded-xl border border-slate-800/80">
            <p className="font-semibold text-slate-100 text-sm">André Kempf</p>
            <p className="text-blue-400">
              {tCommon("rolePrefix")} {tCommon("roleSuffix")}
            </p>
            <p>Großschneidersweg 2a</p>
            <p>76149 Karlsruhe, Germany</p>
          </div>
          <p className="text-slate-300 text-xs pt-1">
            {tImprint("section1Sub")}
          </p>
        </div>

        {/* Direct Contact Info */}
        <div className="group relative rounded-2xl border border-slate-700/60 bg-slate-900/95 p-6 shadow-2xl shadow-black/60 border-t-slate-600/50 space-y-3 overflow-hidden">
          <div className="absolute -top-12 -right-12 w-24 h-24 bg-blue-500/10 rounded-full blur-xl pointer-events-none" />
          <h2 className="text-lg font-semibold text-white flex items-center gap-2">
            <span className="text-blue-500 font-mono text-sm">//</span>{" "}
            {tImprint("section2Title")}
          </h2>
          <div className="p-4 rounded-xl bg-slate-950/60 border border-slate-800/80 font-mono text-xs">
            <p className="text-slate-300">
              <span className="text-slate-500">{tCommon("emailLabel")}:</span>{" "}
              <span className="text-blue-400 hover:underline cursor-pointer">
                dev@andre-kempf.com
              </span>
            </p>
          </div>
        </div>

        {/* Legal Disclaimer (Content, Links, Copyright) */}
        <div className="group relative rounded-2xl border border-slate-700/60 bg-slate-900/95 p-6 shadow-2xl shadow-black/60 border-t-slate-600/50 space-y-5 overflow-hidden">
          <div className="absolute -top-12 -right-12 w-24 h-24 bg-blue-500/10 rounded-full blur-xl pointer-events-none" />
          <h2 className="text-lg font-semibold text-white flex items-center gap-2">
            <span className="text-blue-500 font-mono text-sm">//</span>{" "}
            {tImprint("section3Title")}
          </h2>

          <div className="space-y-1">
            <h3 className="font-semibold">
              {tImprint("liabilityContentTitle")}
            </h3>
            <p className="text-slate-300 text-xs leading-relaxed">
              {tImprint("liabilityContentText")}
            </p>
          </div>

          <div className="space-y-1 pt-2 border-t border-slate-800/60">
            <h3 className="font-semibold">{tImprint("liabilityLinksTitle")}</h3>
            <p className="text-slate-300 text-xs leading-relaxed">
              {tImprint("liabilityLinksText")}
            </p>
          </div>

          <div className="space-y-1 pt-2 border-t border-slate-800/60">
            <h3 className="font-semibold text-slate-200">
              {tImprint("copyrightTitle")}
            </h3>
            <p className="text-slate-300 text-xs leading-relaxed">
              {tImprint("copyrightText")}
            </p>
          </div>
        </div>

        {/* Consumer Dispute Resolution Disclaimer */}
        <div className="group relative rounded-2xl border border-slate-700/60 bg-slate-900/95 p-6 shadow-2xl shadow-black/60 border-t-slate-600/50 space-y-3 overflow-hidden">
          <div className="absolute -top-12 -right-12 w-24 h-24 bg-blue-500/10 rounded-full blur-xl pointer-events-none" />
          <h2 className="text-lg font-semibold text-white flex items-center gap-2">
            <span className="text-blue-500 font-mono text-sm">//</span>{" "}
            {tImprint("section4Title")}
          </h2>
          <p className="text-xs text-slate-400 leading-relaxed">
            {tImprint("disputeText1")}{" "}
            <a
              href="https://ec.europa.eu/consumers/odr/"
              target="_blank"
              rel="noopener noreferrer"
              className="text-blue-400 hover:underline font-mono"
            >
              https://ec.europa.eu/consumers/odr/
            </a>
            .<br />
            {tImprint("disputeText2")}
          </p>
        </div>
      </div>
    </section>
  );
}
