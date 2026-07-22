import Link from "next/link";

export default function ImprintPage() {
  return (
    <section className="min-h-screen py-24 px-6 md:px-12 max-w-4xl mx-auto">
      <h1 className="text-3xl font-bold text-white mb-2 tracking-tight">
        Legal Notice<span className="text-blue-500">.</span>
      </h1>
      <Link
        href="/"
        className="text-sm font-mono text-blue-400 hover:underline mb-8 inline-flex items-center gap-2"
      >
        ← Back to Homepage
      </Link>

      <div className="space-y-8 text-slate-300 leading-relaxed text-sm">
        {/* Angaben gemäß § 5 DDG & § 18 MStV */}
        <div className="p-6 rounded-2xl border border-slate-800/80 bg-slate-900/40 space-y-2">
          <h2 className="text-lg font-semibold text-white mb-4 flex items-center gap-2">
            <span className="text-blue-500 font-mono text-sm">//</span>{" "}
            Information pursuant to § 5 DDG
          </h2>
          <p className="font-semibold text-slate-100">André Kempf</p>
          <p>Full-Stack Web Developer</p>
          <p>Großschneidersweg 2a</p>
          <p>76149 Karlsruhe</p>
          <p>Germany</p>
          <p className="text-slate-400 text-xs pt-2 border-t border-slate-800/60 mt-3">
            Also responsible for content pursuant to § 18 Abs. 2 MStV.
          </p>
        </div>

        {/* Contact */}
        <div className="p-6 rounded-2xl border border-slate-800/80 bg-slate-900/40">
          <h2 className="text-lg font-semibold text-white mb-4 flex items-center gap-2">
            <span className="text-blue-500 font-mono text-sm">//</span> Contact
          </h2>
          <p>
            <strong className="text-slate-200">Email:</strong>{" "}
            <span className="text-blue-400 hover:underline">
              dev@andre-kempf.com
            </span>
          </p>
        </div>

        {/* Disclaimer */}
        <div className="p-6 rounded-2xl border border-slate-800/80 bg-slate-900/40 space-y-4">
          <h2 className="text-lg font-semibold text-white flex items-center gap-2">
            <span className="text-blue-500 font-mono text-sm">//</span>{" "}
            Disclaimer & Legal Notes
          </h2>

          <div>
            <h3 className="font-semibold text-slate-200 mb-1">
              Liability for Content
            </h3>
            <p className="text-slate-400 text-xs leading-relaxed">
              As a service provider, I am responsible for my own content on
              these pages according to general laws pursuant to § 7 Abs. 1 DDG.
              However, according to §§ 8 to 10 DDG, I am not obligated to
              monitor transmitted or stored third-party information or to
              investigate circumstances that indicate illegal activity.
            </p>
          </div>

          <div>
            <h3 className="font-semibold text-slate-200 mb-1">
              Liability for Links
            </h3>
            <p className="text-slate-400 text-xs leading-relaxed">
              My website contains links to external third-party websites over
              whose content I have no control. Therefore, I cannot accept any
              liability for these external contents. The respective provider or
              operator of the pages is always responsible for the content of the
              linked pages.
            </p>
          </div>

          <div>
            <h3 className="font-semibold text-slate-200 mb-1">Copyright</h3>
            <p className="text-slate-400 text-xs leading-relaxed">
              The content and works created on these pages are subject to German
              copyright law. Duplication, processing, distribution, or any form
              of commercialization beyond the scope of copyright law require the
              prior written consent of the author or creator.
            </p>
          </div>
        </div>

        {/* Dispute Resolution */}
        <div className="p-6 rounded-2xl border border-slate-800/80 bg-slate-900/40">
          <h2 className="text-lg font-semibold text-white mb-4 flex items-center gap-2">
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
              className="text-blue-400 hover:underline"
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
