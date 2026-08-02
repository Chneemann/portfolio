"use client";

import { useState } from "react";
import { Link, usePathname } from "@/i18n/navigation";
import { useTranslations, useLocale } from "next-intl";

/**
 * Main navigation header with desktop/mobile views, Command Palette trigger and Language Switcher
 */
export default function Header() {
  const [isOpen, setIsOpen] = useState(false);
  const tCommon = useTranslations("Common");
  const tHeader = useTranslations("Header");

  const locale = useLocale();
  const pathname = usePathname();

  // Smooth scroll navigation targets mapped to translations
  const navLinks = [
    { label: tCommon("about"), href: "#aboutme" },
    { label: tCommon("skills"), href: "#myskills" },
    { label: tCommon("portfolio"), href: "#portfolio" },
    { label: tCommon("contact"), href: "#contactme" },
  ];

  // Dispatches global custom event to open Cmd+K palette
  const triggerCmdK = () => {
    window.dispatchEvent(new CustomEvent("toggle-cmd-k"));
  };

  // Toggle between de and en while staying on the current page
  const nextLocale = locale === "de" ? "en" : "de";

  // Reusable language switcher
  const LanguageSwitcher = () => (
    <Link
      href={pathname}
      locale={nextLocale}
      className="flex items-center gap-1.5 px-2.5 py-1 rounded-lg bg-slate-900/80 border border-slate-800 text-slate-300 hover:text-white hover:border-slate-700 hover:bg-slate-900 transition-all font-mono text-xs shadow-xs cursor-pointer"
      title="Switch Language"
    >
      <svg
        className="w-3.5 h-3.5 text-blue-400"
        fill="none"
        stroke="currentColor"
        viewBox="0 0 24 24"
      >
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth={2}
          d="M3.055 11H5a2 2 0 012 2v1a2 2 0 002 2 2 2 0 012 2v2.945M8 3.935V5.5A2.5 2.5 0 0010.5 8h.5a2 2 0 012 2 2 2 0 104 0 2 2 0 012-2h1.064M15 20.488V18a2 2 0 012-2h3.064M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
        />
      </svg>
      <span>{locale === "de" ? "EN" : "DE"}</span>
    </Link>
  );

  return (
    <header className="fixed top-0 left-0 w-full bg-slate-950/60 backdrop-blur-md z-50 px-4 py-4 border-b border-slate-900/50">
      <div className="max-w-5xl mx-auto flex justify-between items-center">
        {/* Brand Logo */}
        <Link
          href="/"
          className="text-xl font-bold text-white hover:text-blue-400 transition-colors tracking-wider z-50"
          onClick={() => setIsOpen(false)}
        >
          ANDRÉ KEMPF<span className="text-blue-500">.</span>
        </Link>

        {/* Right Area: Desktop Nav, Language Switcher & Cmd+K Trigger */}
        <div className="hidden md:flex items-center gap-6">
          <nav className="flex gap-6 font-medium text-white text-sm">
            {navLinks.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className="hover:text-blue-400 transition-colors"
              >
                {link.label}
              </Link>
            ))}
          </nav>

          <div className="flex items-center gap-2">
            <LanguageSwitcher />

            {/* Integrated Cmd+K Pill */}
            <button
              onClick={triggerCmdK}
              className="flex items-center gap-2 px-2.5 py-1 rounded-lg bg-slate-900/80 border border-slate-800 text-slate-400 hover:text-white hover:border-slate-700 hover:bg-slate-900 transition-all cursor-pointer font-mono text-xs shadow-xs"
              title="Open command palette (⌘K)"
            >
              <svg
                className="w-3.5 h-3.5 text-blue-400"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"
                />
              </svg>
              <span className="text-[11px]">{tHeader("search")}</span>
              <kbd className="bg-slate-800 text-[10px] text-slate-300 px-1.5 py-0.5 rounded border border-slate-700/80 font-mono">
                ⌘K
              </kbd>
            </button>
          </div>
        </div>

        {/* Mobile Right Area: Language Switcher & Hamburger */}
        <div className="flex items-center gap-3 md:hidden z-50">
          <LanguageSwitcher />

          {/* Mobile Hamburger Toggle */}
          <button
            onClick={(e) => {
              e.stopPropagation();
              setIsOpen(!isOpen);
            }}
            className="flex flex-col justify-center items-center w-8 h-8 space-y-1.5 focus:outline-none cursor-pointer group"
            aria-label="Toggle Menu"
          >
            <span
              className={`block w-6 h-0.5 bg-slate-100 transition-all duration-300 group-hover:bg-blue-400 ${
                isOpen ? "rotate-45 translate-y-2" : ""
              }`}
            />
            <span
              className={`block w-6 h-0.5 bg-slate-100 transition-all duration-300 group-hover:bg-blue-400 ${
                isOpen ? "opacity-0" : ""
              }`}
            />
            <span
              className={`block w-6 h-0.5 bg-slate-100 transition-all duration-300 group-hover:bg-blue-400 ${
                isOpen ? "-rotate-45 -translate-y-2" : ""
              }`}
            />
          </button>
        </div>

        {/* Mobile Fullscreen Navigation Overlay */}
        <div
          onClick={() => setIsOpen(false)}
          className={`fixed inset-0 w-full h-screen bg-slate-950/98 flex flex-col items-center justify-center gap-8 text-2xl font-semibold transition-all duration-300 md:hidden z-40 ${
            isOpen
              ? "opacity-100 pointer-events-auto"
              : "opacity-0 pointer-events-none"
          }`}
        >
          {navLinks.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              onClick={() => setIsOpen(false)}
              className="hover:text-blue-400 text-white transition-colors"
            >
              {link.label}
            </Link>
          ))}
        </div>
      </div>
    </header>
  );
}
