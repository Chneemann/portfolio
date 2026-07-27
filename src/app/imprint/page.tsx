import Link from "next/link";

export default function ImprintPage() {
  return (
    <section className="relative pt-18 py-6 px-4 md:px-6 md:pt-24 max-w-5xl mx-auto">
      <h1 className="text-3xl font-bold text-white mb-2 tracking-tight">
        Legal Notice<span className="text-blue-500">.</span>
      </h1>
      <Link
        href="/"
        className="text-sm font-mono text-blue-400 hover:underline mb-8 inline-flex items-center gap-2 transition-colors"
      >
        ← Back to Homepage
      </Link>

      <div className="space-y-8 text-slate-300 leading-relaxed text-sm">
        {/* Information in accordance with § 5 DDG & § 18 MStV */}
        <div className="group relative rounded-2xl border border-slate-700/60 bg-slate-900/95 p-6 shadow-2xl shadow-black/60 border-t-slate-600/50 space-y-3 overflow-hidden">
          <div className="absolute -top-12 -right-12 w-24 h-24 bg-blue-500/10 rounded-full blur-xl pointer-events-none" />
          <h2 className="text-lg font-semibold text-white mb-2 flex items-center gap-2">
            <span className="text-blue-500 font-mono text-sm">//</span>{" "}
            Information Pursuant to § 5 DDG
          </h2>
          <div className=" font-mono text-xs space-y-1 bg-slate-950/60 p-4 rounded-xl border border-slate-800/80">
            <p className="font-semibold text-slate-100 text-sm">André Kempf</p>
            <p className="text-blue-400">Full-Stack Web Developer</p>
            <p>Großschneidersweg 2a</p>
            <p>76149 Karlsruhe, Germany</p>
          </div>
          <p className="text-slate-300 text-xs pt-1">
            Also responsible for content pursuant to § 18 Abs. 2 MStV.
          </p>
        </div>

        {/* Contact */}
        <div className="group relative rounded-2xl border border-slate-700/60 bg-slate-900/95 p-6 shadow-2xl shadow-black/60 border-t-slate-600/50 space-y-3 overflow-hidden">
          <div className="absolute -top-12 -right-12 w-24 h-24 bg-blue-500/10 rounded-full blur-xl pointer-events-none" />
          <h2 className="text-lg font-semibold text-white flex items-center gap-2">
            <span className="text-blue-500 font-mono text-sm">//</span> Contact
          </h2>
          <div className="p-4 rounded-xl bg-slate-950/60 border border-slate-800/80 font-mono text-xs">
            <p className="text-slate-300">
              <span className="text-slate-500">Email:</span>{" "}
              <span className="text-blue-400 hover:underline cursor-pointer">
                dev@andre-kempf.com
              </span>
            </p>
          </div>
        </div>

        {/* Disclaimer */}
        <div className="group relative rounded-2xl border border-slate-700/60 bg-slate-900/95 p-6 shadow-2xl shadow-black/60 border-t-slate-600/50 space-y-5 overflow-hidden">
          <div className="absolute -top-12 -right-12 w-24 h-24 bg-blue-500/10 rounded-full blur-xl pointer-events-none" />
          <h2 className="text-lg font-semibold text-white flex items-center gap-2">
            <span className="text-blue-500 font-mono text-sm">//</span>{" "}
            Disclaimer & Legal Notes
          </h2>

          <div className="space-y-1">
            <h3 className="font-semibold">Liability for Content</h3>
            <p className="text-slate-300 text-xs leading-relaxed">
              As a service provider, I am responsible for my own content on
              these pages according to general laws pursuant to § 7 Abs. 1 DDG.
              However, according to §§ 8 to 10 DDG, I am not obligated to
              monitor transmitted or stored third-party information or to
              investigate circumstances that indicate illegal activity.
            </p>
          </div>

          <div className="space-y-1 pt-2 border-t border-slate-800/60">
            <h3 className="font-semibold">Liability for Links</h3>
            <p className="text-slate-300 text-xs leading-relaxed">
              My website contains links to external third-party websites over
              whose content I have no control. Therefore, I cannot accept any
              liability for these external contents. The respective provider or
              operator of the pages is always responsible for the content of the
              linked pages.
            </p>
          </div>

          <div className="space-y-1 pt-2 border-t border-slate-800/60">
            <h3 className="font-semibold text-slate-200">Copyright</h3>
            <p className="text-slate-300 text-xs leading-relaxed">
              The content and works created on these pages are subject to German
              copyright law. Duplication, processing, distribution, or any form
              of commercialization beyond the scope of copyright law require the
              prior written consent of the author or creator.
            </p>
          </div>
        </div>

        {/* Dispute Resolution */}
        <div className="group relative rounded-2xl border border-slate-700/60 bg-slate-900/95 p-6 shadow-2xl shadow-black/60 border-t-slate-600/50 space-y-3 overflow-hidden">
          <div className="absolute -top-12 -right-12 w-24 h-24 bg-blue-500/10 rounded-full blur-xl pointer-events-none" />
          <h2 className="text-lg font-semibold text-white flex items-center gap-2">
            <span className="text-blue-500 font-mono text-sm">//</span> Dispute
            Resolution
          </h2>
          <p className="text-xs text-slate-400 leading-relaxed">
            The European Commission provides a platform for online dispute
            resolution (OS):{" "}
            <a
              href="https://ec.europa.eu/consumers/odr/"
              target="_blank"
              rel="noopener noreferrer"
              className="text-blue-400 hover:underline font-mono"
            >
              https://ec.europa.eu/consumers/odr/
            </a>
            .<br />I am neither willing nor obligated to participate in dispute
            resolution proceedings before a consumer arbitration board.
          </p>
        </div>
      </div>
    </section>
  );
}
