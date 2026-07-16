import Link from "next/link";

export default function Header() {
  const navLinks = [
    { label: "About me", href: "#aboutme" },
    { label: "My Skills", href: "#myskills" },
    { label: "Portfolio", href: "#portfolio" },
    { label: "Contact me", href: "#contactme" },
  ];

  return (
    <header className="fixed top-0 left-0 w-full bg-slate-900 backdrop-blur-md border-b border-slate-800 z-50 px-6 py-4">
      <div className="max-w-5xl mx-auto flex justify-between items-center">
        <Link
          href="/"
          className="text-xl font-bold text-white hover:text-blue-400 transition-colors tracking-wider"
        >
          ANDRÉ KEMPF<span className="text-blue-500">.</span>
        </Link>

        <nav className="flex gap-8 text-base font-medium text-slate-200">
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
      </div>
    </header>
  );
}
