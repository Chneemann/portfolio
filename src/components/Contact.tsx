"use client";

import { useState } from "react";
import { useTranslations } from "next-intl";

/**
 * Contact section with interactive form, bot anti-spam protection, and Formspree integration
 */
export default function Contact() {
  const tCommon = useTranslations("Common");
  const tContact = useTranslations("Contact");

  // Form input states
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");
  const [honeypot, setHoneypot] = useState("");

  // Submission UI states
  const [submitted, setSubmitted] = useState(false);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(false);

  // Bot detection timestamp (form interaction speed check)
  const [formLoadTime] = useState(Date.now());

  // Handles contact form submission with bot verification & Formspree dispatch
  const handleSubmit = async (e: React.SubmitEvent<HTMLFormElement>) => {
    e.preventDefault();

    // Anti-spam check 1: Submissions faster than 1 seconds are treated as automated bots
    const timeTaken = (Date.now() - formLoadTime) / 1000;
    if (timeTaken < 1) {
      setSubmitted(true);
      return;
    }

    // Anti-spam check 2: Honeypot field filled out by bots
    if (honeypot !== "") {
      setSubmitted(true);
      return;
    }

    setLoading(true);
    setError(false);

    try {
      // Direct POST request to Formspree
      const response = await fetch(`https://formspree.io/f/mojgbbzp`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Accept: "application/json",
        },
        body: JSON.stringify({
          name,
          email,
          message,
          _subject: `Portfolio Contact: ${name}`,
        }),
      });

      if (response.ok) {
        setSubmitted(true);
        setName("");
        setEmail("");
        setMessage("");
        setHoneypot("");
      } else {
        setError(true);
      }
    } catch (err) {
      console.error("Mail send error:", err);
      setError(true);
    } finally {
      setLoading(false);
    }
  };

  return (
    <section
      id="contactme"
      className="relative py-6 px-4 md:px-6 max-w-5xl mx-auto scroll-mt-15"
    >
      {/* Section Header */}
      <div className="mb-6 space-y-1 text-right flex flex-col items-end">
        <p className="text-xs font-mono text-blue-500 tracking-wider uppercase">
          // 04. {tContact("sectionSub")}
        </p>
        <h2 className="text-3xl font-bold text-white tracking-tight">
          {tCommon("contact")}
          <span className="text-blue-500">.</span>
        </h2>
      </div>

      <div className="grid md:grid-cols-12 gap-8 items-start">
        {/* Left Column: Direct Info & Terminal Card */}
        <div className="md:col-span-5 flex flex-col justify-between p-5 rounded-2xl border border-slate-700/60 bg-slate-900/90 backdrop-blur-md shadow-lg shadow-black/40 border-t-slate-600/50 relative overflow-hidden space-y-6">
          <div className="absolute -top-12 -right-12 w-24 h-24 bg-blue-500/15 rounded-full blur-xl pointer-events-none" />

          <div className="space-y-4">
            <div className="flex items-center justify-between">
              <h3 className="text-lg font-semibold text-white flex items-center gap-2">
                <span className="text-blue-500 font-mono text-sm">//</span>{" "}
                {tContact("cardTitle")}
              </h3>
            </div>

            <p className="text-xs text-slate-300 leading-relaxed">
              {tContact("cardDescription")}
            </p>

            {/* Terminal Status Display */}
            <div className="p-3.5 rounded-xl bg-slate-950/80 border border-slate-800/80 font-mono text-[11px] space-y-1.5 shadow-inner">
              <div className="text-slate-500">// Terminal Direct Contact</div>
              <div className="text-slate-300 flex items-center gap-1">
                <span className="text-blue-400">chneemann@portfolio</span>:
                <span className="text-emerald-400">~</span>$ mail --send
              </div>
              <div className="text-slate-400 pl-2.5 border-l-2 border-blue-500/40 text-[10px] py-0.5">
                Status:{" "}
                <span className="text-emerald-400">
                  Ready to receive messages
                </span>
              </div>
            </div>
          </div>

          {/* Email Shortcut */}
          <div className="pt-3 border-t border-slate-800/80 font-mono text-xs">
            <span className="text-slate-500 block text-[10px] mb-1">
              // {tContact("preferEmail")}
            </span>
            <span className="text-slate-300 hover:text-blue-400 transition-colors flex items-center gap-1.5 text-xs cursor-pointer">
              <span className="text-blue-500">▸</span> dev@andre-kempf.com
            </span>
          </div>
        </div>

        {/* Right Column: Contact Form / Success Message */}
        <div className="md:col-span-7">
          <div
            className="relative p-4 md:p-6 rounded-2xl border border-slate-700/60 bg-slate-900/90 backdrop-blur-md 
                       shadow-lg shadow-black/40 border-t-slate-600/50 overflow-hidden"
          >
            <div className="absolute -top-12 -right-12 w-24 h-24 bg-blue-500/10 rounded-full blur-xl pointer-events-none" />

            {submitted ? (
              /* Success Message */
              <div className="py-12 text-center space-y-3">
                <div className="inline-flex items-center justify-center w-12 h-12 rounded-full bg-blue-500/10 text-blue-400 font-mono text-4xl mb-2 border border-blue-500/20">
                  ✓
                </div>
                <h3 className="text-xl font-bold text-white">
                  {tContact("successTitle")}
                </h3>
                <p className="text-sm max-w-sm mx-auto">
                  {tContact("successText")}
                </p>
              </div>
            ) : (
              /* Form Container */
              <form onSubmit={handleSubmit} className="space-y-4">
                {/* Visual Hidden Honeypot Field */}
                <div
                  className="absolute opacity-0 pointer-events-none -z-10 h-0 w-0 overflow-hidden"
                  aria-hidden="true"
                >
                  <label htmlFor="website_hp">Website</label>
                  <input
                    type="text"
                    id="website_hp"
                    name="website_hp"
                    tabIndex={-1}
                    autoComplete="off"
                    value={honeypot}
                    onChange={(e) => setHoneypot(e.target.value)}
                  />
                </div>

                {/* Name Input */}
                <div>
                  <label className="block text-xs mb-1.5" htmlFor="name">
                    {tContact("formName")}
                  </label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    required
                    value={name}
                    onChange={(e) => setName(e.target.value)}
                    placeholder="John Doe"
                    className="w-full px-4 py-2.5 rounded-xl bg-slate-950/60 border border-slate-800 text-slate-100 placeholder:text-slate-600 focus:outline-none focus:border-blue-500/80 focus:ring-1 focus:ring-blue-500/80 transition-colors text-sm"
                  />
                </div>

                {/* Email Input */}
                <div>
                  <label className="block text-xs mb-1.5" htmlFor="email">
                    {tCommon("emailLabel")}
                  </label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    required
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    placeholder="john@example.com"
                    className="w-full px-4 py-2.5 rounded-xl bg-slate-950/60 border border-slate-800 text-slate-100 placeholder:text-slate-600 focus:outline-none focus:border-blue-500/80 focus:ring-1 focus:ring-blue-500/80 transition-colors text-sm"
                  />
                </div>

                {/* Message Input */}
                <div>
                  <label className="block text-xs mb-1.5" htmlFor="message">
                    {tContact("formMessage")}
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    rows={4}
                    required
                    value={message}
                    onChange={(e) => setMessage(e.target.value)}
                    placeholder={tContact("formMessagePlaceholder")}
                    className="w-full px-4 py-2.5 rounded-xl bg-slate-950/60 border border-slate-800 text-slate-100 placeholder:text-slate-600 focus:outline-none focus:border-blue-500/80 focus:ring-1 focus:ring-blue-500/80 transition-colors text-sm resize-none"
                  />
                </div>

                {/* Submission Error Banner */}
                {error && (
                  <p className="text-red-400 text-xs font-mono">
                    {tContact("errorMessage")}
                  </p>
                )}

                {/* Submit Button */}
                <button
                  type="submit"
                  disabled={loading}
                  className="w-full px-6 py-3 bg-slate-900 border border-slate-800 hover:border-slate-700 hover:bg-slate-850 rounded-lg transition-all hover:-translate-y-0.5 duration-200 cursor-pointer disabled:opacity-50 text-slate-100 text-sm font-medium"
                >
                  {loading ? tContact("submitting") : tContact("submit")}
                </button>
              </form>
            )}
          </div>
        </div>
      </div>
    </section>
  );
}
