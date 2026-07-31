import { playSudoEasterEgg } from "./playSudoEasterEgg";

/**
 * Command item structure for the Cmd+K palette
 */
export type CommandItem = {
  id: string;
  label: string;
  category: "Quick Actions" | "System & Info" | "Social / Links";
  icon?: string;
  action: () => void;
};

/**
 * Returns the array of registered palette actions, including dynamic label state and event triggers.
 */
export const getCommands = (
  copied: boolean,
  setCopied: (value: boolean) => void,
): CommandItem[] => [
  {
    id: "copy-email",
    label: copied ? "Email Copied!" : "Copy Email (dev@andre-kempf.com)",
    category: "Quick Actions",
    icon: copied ? "✓" : "✉️",
    action: () => {
      navigator.clipboard.writeText("dev@andre-kempf.com");
      setCopied(true);
      setTimeout(() => setCopied(false), 2000);
    },
  },
  {
    id: "download-cv",
    label: "Download CV (PDF)",
    category: "Quick Actions",
    icon: "📄",
    action: () => {
      window.open(
        "/assets/downloads/Andre_Kempf_Lebenslauf.pdf",
        "_blank",
        "noopener,noreferrer",
      );
    },
  },
  {
    id: "terminal",
    label: "Open Analytics Terminal",
    category: "Quick Actions",
    icon: "⚡",
    action: () => {
      window.dispatchEvent(new CustomEvent("open-analytics"));
    },
  },
  {
    id: "forgejo",
    label: "View Self-Hosted Git Profile",
    category: "Social / Links",
    icon: "🔨",
    action: () => {
      window.open(
        "https://git.andre-kempf.com/Chneemann",
        "_blank",
        "noopener,noreferrer",
      );
    },
  },
  {
    id: "github",
    label: "View GitHub (Legacy) Profile",
    category: "Social / Links",
    icon: "🐙",
    action: () => {
      window.open(
        "https://github.com/Chneemann",
        "_blank",
        "noopener,noreferrer",
      );
    },
  },
  {
    id: "linkedin",
    label: "View LinkedIn Profile",
    category: "Social / Links",
    icon: "💼",
    action: () => {
      window.open(
        "https://linkedin.com/in/andre-kempf",
        "_blank",
        "noopener,noreferrer",
      );
    },
  },
  {
    id: "source-code",
    label: "View Site Source Code (Self-Hosted Git)",
    category: "Social / Links",
    icon: "💻",
    action: () => {
      window.open(
        "https://git.andre-kempf.com/Chneemann/portfolio",
        "_blank",
        "noopener,noreferrer",
      );
    },
  },
  {
    id: "sudo-egg",
    label: "sudo rm -rf --no-preserve-root /",
    category: "System & Info",
    icon: "💀",
    action: playSudoEasterEgg,
  },
];
