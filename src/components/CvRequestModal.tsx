"use client";

import { useState, useEffect, useRef } from "react";
import { useTranslations } from "next-intl";

interface CvRequestModalProps {
  isOpen: boolean;
  onClose: () => void;
}

/**
 * Interactive modal dialog for requesting CV via email with anti-spam protection
 */
export default function CvRequestModal({
  isOpen,
  onClose,
}: CvRequestModalProps) {
  const tCommon = useTranslations("Common");
  const tContact = useTranslations("Contact");
  const tCvModal = useTranslations("CvModal");

  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [honeypot, setHoneypot] = useState("");

  const [loading, setLoading] = useState(false);
  const [submitted, setSubmitted] = useState(false);
  const [error, setError] = useState(false);

  const [formLoadTime] = useState(Date.now());
  const modalRef = useRef<HTMLDivElement>(null);

  // Reset the modal state when closing
  const handleClose = () => {
    setSubmitted(false);
    setError(false);
    setName("");
    setEmail("");
    onClose();
  };

  // Close via Escape key & Click Outside
  useEffect(() => {
    if (!isOpen) return;

    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === "Escape") {
        handleClose();
      }
    };

    const handleClickOutside = (e: MouseEvent) => {
      if (modalRef.current && !modalRef.current.contains(e.target as Node)) {
        handleClose();
      }
    };

    window.addEventListener("keydown", handleKeyDown);
    document.addEventListener("mousedown", handleClickOutside);

    return () => {
      window.removeEventListener("keydown", handleKeyDown);
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, [isOpen]);

  if (!isOpen) return null;

  const handleSubmit = async (e: React.SubmitEvent<HTMLFormElement>) => {
    e.preventDefault();

    // Anti-Spam checks
    if ((Date.now() - formLoadTime) / 1000 < 1 || honeypot !== "") {
      setSubmitted(true);
      return;
    }

    setLoading(true);
    setError(false);

    try {
      const response = await fetch("https://formspree.io/f/mojgbbzp", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Accept: "application/json",
        },
        body: JSON.stringify({
          name,
          email,
          _subject: `CV Request from ${name}`,
        }),
      });

      if (response.ok) {
        setSubmitted(true);
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
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-slate-950/80 backdrop-blur-sm transition-opacity">
      {/* Modal Container with ref */}
      <div
        ref={modalRef}
        className="relative w-full max-w-lg p-6 sm:p-8 rounded-2xl border border-slate-700/60 bg-slate-900 shadow-2xl shadow-black/80 overflow-hidden"
      >
        {/* Close Button */}
        <button
          onClick={handleClose}
          className="absolute top-4 right-4 text-slate-400 hover:text-white transition-colors text-xl cursor-pointer p-1"
          aria-label="Close modal"
        >
          ✕
        </button>

        {submitted ? (
          <div className="py-8 text-center space-y-4">
            <div className="inline-flex items-center justify-center w-14 h-14 rounded-full bg-blue-500/10 text-blue-400 font-mono text-3xl border border-blue-500/20">
              ✓
            </div>
            <h3 className="text-2xl font-bold text-white">
              {tCvModal("successTitle")}
            </h3>
            <p className="text-sm sm:text-base text-slate-300 max-w-sm mx-auto leading-relaxed">
              {tCvModal("successText")}
            </p>
            <button
              onClick={handleClose}
              className="mt-4 px-6 py-2.5 text-sm font-medium bg-slate-800 hover:bg-slate-700 text-slate-200 rounded-lg transition-colors cursor-pointer"
            >
              {tCvModal("close")}
            </button>
          </div>
        ) : (
          <div className="space-y-5">
            <div>
              <span className="text-blue-500 font-mono text-sm tracking-wider uppercase">
                {tCvModal("badge")}
              </span>
              <h3 className="text-2xl font-bold text-white mt-1">
                {tCvModal("title")}
              </h3>
              <p className="text-sm sm:text-base text-slate-300 mt-2 leading-relaxed">
                {tCvModal("privacyNotice")}
              </p>
            </div>

            <form onSubmit={handleSubmit} className="space-y-4">
              {/* Honeypot field for bot detection */}
              <div className="hidden" aria-hidden="true">
                <input
                  type="text"
                  tabIndex={-1}
                  value={honeypot}
                  onChange={(e) => setHoneypot(e.target.value)}
                />
              </div>

              {/* Name Input */}
              <div>
                <label
                  className="block text-sm font-medium mb-1.5 text-slate-200"
                  htmlFor="cv-name"
                >
                  {tContact("formName")}
                </label>
                <input
                  type="text"
                  id="cv-name"
                  required
                  value={name}
                  onChange={(e) => setName(e.target.value)}
                  placeholder="John Doe"
                  className="w-full px-4 py-2.5 rounded-xl bg-slate-950/60 border border-slate-800 text-slate-100 placeholder:text-slate-500 focus:outline-none focus:border-blue-500/80 text-sm sm:text-base"
                />
              </div>

              {/* Email Input */}
              <div>
                <label
                  className="block text-sm font-medium mb-1.5 text-slate-200"
                  htmlFor="cv-email"
                >
                  {tCommon("emailLabel")}
                </label>
                <input
                  type="email"
                  id="cv-email"
                  required
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  placeholder="john@example.com"
                  className="w-full px-3.5 py-2.5 rounded-xl bg-slate-950/60 border border-slate-800 text-slate-100 placeholder:text-slate-500 focus:outline-none focus:border-blue-500/80 text-sm sm:text-base"
                />
              </div>

              {error && (
                <p className="text-red-400 text-sm font-mono">
                  {tContact("errorMessage")}
                </p>
              )}

              <button
                type="submit"
                disabled={loading}
                className="w-full py-3 bg-blue-600 hover:bg-blue-500 text-white font-semibold rounded-lg transition-colors text-sm sm:text-base disabled:opacity-50 mt-2 cursor-pointer shadow-md shadow-blue-950/50"
              >
                {loading ? tCvModal("submitting") : tCvModal("submit")}
              </button>
            </form>
          </div>
        )}
      </div>
    </div>
  );
}
