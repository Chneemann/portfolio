import { playSudoEasterEgg } from "./playSudoEasterEgg";

/**
 * Command item structure for the Cmd+K palette
 */
export type CommandItem = {
  id: string;
  label: string;
  category: string;
  icon?: string;
  action: () => void;
};

/**
 * Returns the array of registered palette actions, including dynamic label state and event triggers.
 */
export const getCommands = (
  copied: boolean,
  setCopied: (value: boolean) => void,
  tCommands: (key: string) => string,
): CommandItem[] => [
  {
    id: "copy-email",
    label: copied ? tCommands("emailCopied") : tCommands("copyEmail"),
    category: tCommands("catQuickActions"),
    icon: copied ? "✓" : "✉️",
    action: () => {
      navigator.clipboard.writeText("dev@andre-kempf.com");
      setCopied(true);
      setTimeout(() => setCopied(false), 2000);
    },
  },
  {
    id: "download-cv",
    label: tCommands("downloadCV"),
    category: tCommands("catQuickActions"),
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
    label: tCommands("openTerminal"),
    category: tCommands("catQuickActions"),
    icon: "⚡",
    action: () => {
      window.dispatchEvent(new CustomEvent("open-analytics"));
    },
  },
  {
    id: "forgejo",
    label: tCommands("viewForgejo"),
    category: tCommands("catSocial"),
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
    label: tCommands("viewGitHub"),
    category: tCommands("catSocial"),
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
    label: tCommands("viewLinkedIn"),
    category: tCommands("catSocial"),
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
    label: tCommands("viewSource"),
    category: tCommands("catSocial"),
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
    category: tCommands("catSystem"),
    icon: "💀",
    action: playSudoEasterEgg,
  },
];
