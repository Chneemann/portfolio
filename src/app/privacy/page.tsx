import Link from "next/link";

export default function PrivacyPage() {
  return (
    <section className="min-h-screen py-24 px-6 md:px-12 max-w-4xl mx-auto">
      <h1 className="text-3xl font-bold text-white mb-2 tracking-tight">
        Privacy Policy<span className="text-blue-500">.</span>
      </h1>
      <Link
        href="/"
        className="text-sm font-mono text-blue-400 hover:underline mb-8 inline-flex items-center gap-2"
      >
        ← Back to Homepage
      </Link>

      <div className="space-y-8 text-slate-300 leading-relaxed text-sm">
        {/* 1. Overview */}
        <div className="p-6 rounded-2xl border border-slate-800/80 bg-slate-900/40 space-y-3">
          <h2 className="text-lg font-semibold text-white flex items-center gap-2">
            <span className="text-blue-500 font-mono text-sm">//</span> 1. Data
            Protection at a Glance
          </h2>
          <h3 className="font-semibold text-slate-200">General Information</h3>
          <p>
            The following notes provide a simple overview of what happens to
            your personal data when you visit this website. Personal data is any
            data that can be used to personally identify you.
          </p>
          <h3 className="font-semibold text-slate-200 pt-2">
            Data Collection on This Website
          </h3>
          <p>
            Data processing on this website is carried out by the website
            operator. Your data is collected when you provide it to us, or
            automatically by our IT systems when you visit the site.
          </p>
        </div>

        {/* 2. Responsible Party */}
        <div className="p-6 rounded-2xl border border-slate-800/80 bg-slate-900/40 space-y-2">
          <h2 className="text-lg font-semibold text-white mb-2 flex items-center gap-2">
            <span className="text-blue-500 font-mono text-sm">//</span> 2.
            Responsible Party (Controller)
          </h2>
          <p>
            The controller responsible for data processing on this website is:
          </p>
          <div className="pt-2 text-slate-200">
            <p className="font-semibold">André Kempf</p>
            <p>Großschneidersweg 2a</p>
            <p>76149 Karlsruhe, Germany</p>
            <p className="mt-2">
              Email:{" "}
              <span className="text-blue-400 hover:underline">
                dev@andre-kempf.com
              </span>
            </p>
          </div>
        </div>

        {/* 3. Hosting & Log Files */}
        <div className="p-6 rounded-2xl border border-slate-800/80 bg-slate-900/40 space-y-3">
          <h2 className="text-lg font-semibold text-white flex items-center gap-2">
            <span className="text-blue-500 font-mono text-sm">//</span> 3.
            Hosting & Server Log Files
          </h2>
          <p>
            This website is hosted externally. The personal data collected on
            this website is stored on the host&apos;s servers.
          </p>
          <p>
            The provider automatically collects and stores information in
            so-called server log files, which your browser automatically
            transmits to us (e.g., browser type, operating system, IP address,
            time of request).
          </p>
        </div>

        {/* 4. Your Rights */}
        <div className="p-6 rounded-2xl border border-slate-800/80 bg-slate-900/40 space-y-3">
          <h2 className="text-lg font-semibold text-white flex items-center gap-2">
            <span className="text-blue-500 font-mono text-sm">//</span> 4. Your
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
