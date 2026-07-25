import Image from "next/image";

const socialLinks = [
  {
    name: "Codeberg",
    href: "https://codeberg.org/chneemann",
    icon: "/assets/icons/codeberg.svg",
  },
  {
    name: "LinkedIn",
    href: "https://linkedin.com/in/andre-kempf",
    icon: "/assets/icons/linkedin.svg",
  },
  {
    name: "GitHub (Legacy)",
    href: "https://github.com/chneemann",
    icon: "/assets/icons/github.svg",
  },
];

export default function SocialLinks() {
  return (
    <div className="flex items-center justify-center md:justify-start gap-4 pt-3 md:pt-0">
      {socialLinks.map((link) => (
        <a
          key={link.name}
          href={link.href}
          target="_blank"
          rel="noopener noreferrer"
          aria-label={link.name}
          className="flex items-center justify-center gap-2 px-2 py-2 sm:px-3 sm:py-2 bg-slate-900 border border-slate-800 hover:border-blue-500/40 hover:bg-blue-600/10 text-slate-300 hover:text-blue-400 font-medium text-sm rounded-lg shadow-md shadow-blue-950/30 transition-all duration-200 hover:-translate-y-0.5 group"
        >
          <div className="relative w-7 h-7 sm:w-6 sm:h-6 opacity-80 group-hover:opacity-100 transition-opacity flex items-center justify-center">
            <Image
              src={link.icon}
              alt={link.name}
              width={28}
              height={28}
              className="object-contain invert"
            />
          </div>
          <span className="hidden sm:inline font-mono text-xs">
            {link.name}
          </span>
        </a>
      ))}
    </div>
  );
}
