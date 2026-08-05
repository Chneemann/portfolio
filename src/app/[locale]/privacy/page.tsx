import Link from "next/link";

/**
 * GDPR privacy policy page outlining data collection, self-hosted analytics, and user rights
 */
export default function PrivacyPage() {
  return (
    <section className="relative pt-18 py-6 px-4 md:px-6 md:pt-24 max-w-5xl mx-auto">
      {/* Page Heading & Navigation */}
      <h1 className="text-3xl font-bold text-white mb-2 tracking-tight">
        Privacy Policy<span className="text-blue-500">.</span>
      </h1>
      <Link
        href="/"
        className="text-sm font-mono text-blue-400 hover:underline mb-8 inline-flex items-center gap-2 transition-colors"
      >
        ← Back to Homepage
      </Link>

      <div className="space-y-8 text-slate-300 leading-relaxed text-sm">
        {/* Executive Summary */}
        <div className="group relative rounded-2xl border border-slate-700/60 bg-slate-900/95 p-6 shadow-2xl shadow-black/60 border-t-slate-600/50 space-y-3 overflow-hidden">
          <div className="absolute -top-12 -right-12 w-24 h-24 bg-blue-500/10 rounded-full blur-xl pointer-events-none" />
          <h2 className="text-lg font-semibold text-white flex items-center gap-2">
            <span className="text-blue-500 font-mono text-sm">//</span> Data
            Protection at a Glance
          </h2>

          <div className="space-y-1">
            <h3 className="font-semibold ">General Information</h3>
            <p className="text-slate-300 text-xs leading-relaxed">
              The following notes provide a simple overview of what happens to
              your personal data when you visit this website. Personal data is
              any data that can be used to personally identify you.
            </p>
          </div>

          <div className="space-y-1">
            <h3 className="font-semibold pt-2">
              Data Collection on This Website
            </h3>
            <p className="text-slate-300 text-xs leading-relaxed">
              Data processing on this website is carried out by the website
              operator. Your data is collected when you provide it to us, or
              automatically by our IT systems when you visit the site.
            </p>
          </div>
        </div>

        {/* Data Controller Information */}
        <div className="group relative rounded-2xl border border-slate-700/60 bg-slate-900/95 p-6 shadow-2xl shadow-black/60 border-t-slate-600/50 space-y-2 overflow-hidden">
          <div className="absolute -top-12 -right-12 w-24 h-24 bg-blue-500/10 rounded-full blur-xl pointer-events-none" />
          <h2 className="text-lg font-semibold text-white mb-2 flex items-center gap-2">
            <span className="text-blue-500 font-mono text-sm">//</span>
            Responsible Party (Controller)
          </h2>
          <p>
            The controller responsible for data processing on this website is:
          </p>
          <div className="pt-2 font-mono text-xs space-y-1 bg-slate-950/60 p-4 rounded-xl border border-slate-800/80">
            <p className="font-semibold text-slate-100 text-sm">André Kempf</p>
            <p>Großschneidersweg 2a</p>
            <p>76149 Karlsruhe, Germany</p>
            <p className="pt-2">
              Email:{" "}
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
            Hosting & Server Infrastructure
          </h2>
          <p>
            This website is hosted externally on web servers operated by Netcup
            GmbH. Personal data processed on this website is stored on the
            host&apos;s secure servers.
          </p>
          <p>
            The hosting provider automatically processes technical access data
            in server environment variables necessary to establish a stable
            connection and deliver page assets securely.
          </p>
        </div>

        {/* Privacy-Preserving Analytics Principles */}
        <div className="group relative rounded-2xl border border-slate-700/60 bg-slate-900/95 p-6 shadow-2xl shadow-black/60 border-t-slate-600/50 space-y-3 overflow-hidden">
          <div className="absolute -top-12 -right-12 w-24 h-24 bg-blue-500/10 rounded-full blur-xl pointer-events-none" />
          <h2 className="text-lg font-semibold text-white flex items-center gap-2">
            <span className="text-blue-500 font-mono text-sm">//</span>
            Server Analytics & Privacy-First Tracking
          </h2>
          <p>
            To evaluate website reach and optimize user experience, this website
            processes minimal access metrics (e.g., total daily views, coarse
            device category, and daily visitor counts).
          </p>
          <div className="p-4 rounded-xl bg-slate-950/60 border border-slate-800/80 space-y-2 text-xs font-mono">
            <p className="text-emerald-400 font-semibold">
              // Key privacy guarantees:
            </p>
            <ul className="list-disc list-inside space-y-1 text-slate-400">
              <li>
                <strong>No Cookies:</strong> We do not store cookies or local
                storage identifiers on your device.
              </li>
              <li>
                <strong>Anonymized IPs:</strong> IP addresses are instantly
                hashed with a daily salt and never stored in plain text.
              </li>
              <li>
                <strong>Zero Third Parties:</strong> Analytics data is processed
                locally on our own server and never shared with external
                tracking services.
              </li>
            </ul>
          </div>
          <p className="text-xs text-slate-400 pt-1">
            The legal basis for this processing is our legitimate interest in
            maintaining and optimizing our online portfolio (Art. 6(1)(f) GDPR).
          </p>
        </div>

        {/* Statutory Data Subject Rights */}
        <div className="group relative rounded-2xl border border-slate-700/60 bg-slate-900/95 p-6 shadow-2xl shadow-black/60 border-t-slate-600/50 space-y-3 overflow-hidden">
          <div className="absolute -top-12 -right-12 w-24 h-24 bg-blue-500/10 rounded-full blur-xl pointer-events-none" />
          <h2 className="text-lg font-semibold text-white flex items-center gap-2">
            <span className="text-blue-500 font-mono text-sm">//</span> Your
            Rights
          </h2>
          <p>
            You have the right at any time to receive information free of charge
            about the origin, recipient, and purpose of your stored personal
            data. You also have a right to request the correction or deletion of
            this data.
          </p>
        </div>
      </div>
    </section>
  );
}
