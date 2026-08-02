"use client";

import { useTranslations } from "next-intl";

/**
 * Section presenting personal background information, education, and key overview facts
 */
export default function About() {
  const tCommon = useTranslations("Common");
  const tAbout = useTranslations("About");

  return (
    <section
      id="aboutme"
      className="relative py-6 px-4 md:px-6 max-w-5xl mx-auto scroll-mt-15"
    >
      {/* Section Header */}
      <div className="mb-4 space-y-1">
        <p className="text-xs font-mono text-blue-500 tracking-wider uppercase">
          // 01. {tAbout("sectionSub")}
        </p>
        <h2 className="text-3xl font-bold text-white tracking-tight">
          {tCommon("about")}
          <span className="text-blue-500">.</span>
        </h2>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-12 gap-12 items-start">
        {/* Personal Bio Paragraphs */}
        <div className="md:col-span-7 space-y-6 leading-relaxed">
          <p>{tAbout("bio1")}</p>
          <p>{tAbout("bio2")}</p>
          <p>{tAbout("bio3")}</p>
        </div>

        {/* Quick Facts Card */}
        <div className="md:col-span-5">
          <div
            className="group relative p-5 rounded-2xl border border-slate-700/60 bg-slate-900/90 backdrop-blur-md 
             shadow-lg shadow-black/40 border-t-slate-600/50
             hover:border-blue-500/50 hover:bg-slate-800/90 
             hover:shadow-2xl hover:shadow-blue-500/10 hover:-translate-y-0.5 
             transition-all duration-300 ease-out flex flex-col justify-between overflow-hidden space-y-6"
          >
            <div className="absolute -top-12 -right-12 w-24 h-24 bg-blue-500/15 rounded-full blur-xl group-hover:bg-blue-500/25 transition-all duration-500 pointer-events-none" />

            <div>
              {/* Card Header */}
              <div className="flex items-center justify-between mb-6">
                <h3 className="text-lg font-semibold text-white flex items-center gap-2">
                  <span className="text-blue-500 font-mono text-sm">//</span>{" "}
                  {tAbout("quickFactsTitle")}
                </h3>
              </div>

              {/* Key Highlights List */}
              <ul className="space-y-4 text-sm">
                <li className="flex items-center gap-3">
                  <span className="text-blue-500 font-mono">▸</span>
                  <span className="text-slate-400 font-medium">
                    {tAbout("languagesLabel")}:
                  </span>
                  <span className="ml-auto text-right font-mono text-xs">
                    {tAbout("languagesValue")}
                  </span>
                </li>
                <li className="flex items-center gap-3">
                  <span className="text-blue-500 font-mono">▸</span>
                  <span className="text-slate-400 font-medium">
                    {tAbout("stackLabel")}:
                  </span>
                  <span className="ml-auto text-right font-mono text-xs">
                    Angular&nbsp;(TS), React&nbsp;(Next.js)
                  </span>
                </li>
                <li className="flex items-center gap-3">
                  <span className="text-blue-500 font-mono">▸</span>
                  <span className="text-slate-400 font-medium">
                    {tAbout("focusLabel")}:
                  </span>
                  <span className="ml-auto text-right font-mono text-xs">
                    {tAbout("focusValue")}:
                  </span>
                </li>
                <li className="flex items-center gap-3">
                  <span className="text-blue-500 font-mono">▸</span>
                  <span className="text-slate-400 font-medium">Status:</span>
                  <span className="text-emerald-400 ml-auto text-right flex items-center gap-1.5 font-mono text-xs">
                    <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse" />
                    {tAbout("statusValue")}
                  </span>
                </li>
              </ul>
            </div>

            {/* Footer Tagline */}
            <div className="pt-4 border-t border-slate-800/80 text-xs text-slate-500 font-mono text-center">
              `Keep it simple, keep it clean.`
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
