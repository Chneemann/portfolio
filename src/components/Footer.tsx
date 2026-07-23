import Link from "next/link";

export default function Footer() {
  return (
    <footer className="w-full bg-slate-950/50 text-center text-xs text-slate-500 px-4 sm:px-4 py-4">
      <div className="max-w-5xl mx-auto flex flex-col md:flex-row justify-between items-center gap-4">
        <p>© {new Date().getFullYear()} André Kempf. All rights reserved.</p>
        <div className="flex gap-4">
          <Link
            href="/imprint"
            className="hover:text-slate-300 transition-colors"
          >
            Legal Notice
          </Link>
          <span>|</span>
          <Link
            href="/privacy"
            className="hover:text-slate-300 transition-colors"
          >
            Privacy Policy
          </Link>
        </div>
      </div>
    </footer>
  );
}
