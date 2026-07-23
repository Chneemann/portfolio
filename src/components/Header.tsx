"use client";

import { useState } from "react";
import Link from "next/link";

export default function Header() {
  const [isOpen, setIsOpen] = useState(false);

  const navLinks = [
    { label: "About me", href: "#aboutme" },
    { label: "My Skills", href: "#myskills" },
    { label: "Portfolio", href: "#portfolio" },
    { label: "Contact me", href: "#contactme" },
  ];

  return (
    <header className="fixed top-0 left-0 w-full bg-slate-950/50 backdrop-blur-md z-50 px-4 sm:px-4 py-4">
      <div className="max-w-5xl mx-auto flex justify-between items-center">
        <Link
          href="/"
          className="text-xl font-bold text-white hover:text-blue-400 transition-colors tracking-wider z-50"
          onClick={() => setIsOpen(false)}
        >
          ANDRÉ KEMPF<span className="text-blue-500">.</span>
        </Link>

        {/* Desktop navigation */}
        <nav className="hidden md:flex gap-8 font-medium text-white">
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

        {/* Mobile burger button */}
        <button
          onClick={() => setIsOpen(!isOpen)}
          className="md:hidden flex flex-col justify-center items-center w-8 h-8 space-y-1.5 z-50 focus:outline-none cursor-pointer group"
          aria-label="Toggle Menu"
        >
          {/* Animated burger icon lines */}
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

        {/* Mobile fullscreen overlay */}
        <div
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
