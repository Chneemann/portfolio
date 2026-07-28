"use client";

import { useState } from "react";
import Link from "next/link";

/**
 * Main navigation header with desktop/mobile views and Command Palette trigger
 */
export default function Header() {
  const [isOpen, setIsOpen] = useState(false);

  // Smooth scroll navigation targets
  const navLinks = [
    { label: "About me", href: "#aboutme" },
    { label: "My Skills", href: "#myskills" },
    { label: "Portfolio", href: "#portfolio" },
    { label: "Contact me", href: "#contactme" },
  ];

  // Dispatches global custom event to open Cmd+K palette
  const triggerCmdK = () => {
    window.dispatchEvent(new CustomEvent("toggle-cmd-k"));
  };

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

        {/* Right Area: Desktop Nav & Cmd+K Trigger */}
        <div className="hidden md:flex items-center gap-8">
          <nav className="flex gap-8 font-medium text-white text-sm">
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
            <span className="text-[11px]">Search</span>
            <kbd className="bg-slate-800 text-[10px] text-slate-300 px-1.5 py-0.5 rounded border border-slate-700/80 font-mono">
              ⌘K
            </kbd>
          </button>
        </div>

        {/* Mobile Hamburger Toggle */}
        <button
          onClick={(e) => {
            e.stopPropagation();
            setIsOpen(!isOpen);
          }}
          className="md:hidden flex flex-col justify-center items-center w-8 h-8 space-y-1.5 z-50 focus:outline-none cursor-pointer group"
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

        {/* Mobile Fullscreen Navigation Overlay */}
        <div
          onClick={() => setIsOpen(false)}
          className={`fixed inset-0 w-full h-screen bg-slate-950/98 flex flex-col items-center justify-center gap-8 text-2xl font-semibold transition-all duration-300 md:hidden ${
            isOpen
              ? "opacity-100 pointer-events-auto"
              : "opacity-0 pointer-events-none"
          }`}
        >
          {navLinks.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              className="hover:text-blue-400 text-white transition-colors"
            >
              {link.label}
            </Link>
          ))}

          {/* Mobile Cmd+K Trigger inside Overlay */}
          <button
            onClick={triggerCmdK}
            className="flex items-center gap-2 px-4 py-2 rounded-xl bg-slate-900 border border-slate-800 text-slate-300 text-sm font-mono mt-4"
          >
            <span>Open Commands</span>
            <kbd className="bg-slate-800 text-xs px-2 py-0.5 rounded border border-slate-700">
              ⌘K
            </kbd>
          </button>
        </div>
      </div>
    </header>
  );
}
