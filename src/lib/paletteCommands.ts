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
    label: copied ? "Email Copied! ✓" : "Copy Email (dev@andre-kempf.com)",
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
    label: "Download Resume / CV (PDF)",
    category: "Quick Actions",
    icon: "📄",
    action: () => {
      const link = document.createElement("a");
      link.href =
        "https://andre-kempf.com/assets/downloads/Andre_Kempf_Lebenslauf_2025.pdf";
      link.download = "Andre_Kempf_Lebenslauf.pdf";
      link.click();
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
    id: "codeberg",
    label: "View Codeberg Profile",
    category: "Social / Links",
    icon: "🏔️",
    action: () => {
      window.open("https://codeberg.org/Chneemann", "_blank");
    },
  },
  {
    id: "github",
    label: "View GitHub (Legacy) Profile",
    category: "Social / Links",
    icon: "🐙",
    action: () => {
      window.open("https://github.com/andre-kempf", "_blank");
    },
  },
  {
    id: "linkedin",
    label: "View LinkedIn Profile",
    category: "Social / Links",
    icon: "💼",
    action: () => {
      window.open("https://linkedin.com/in/andre-kempf", "_blank");
    },
  },
  {
    id: "source-code",
    label: "View Site Source Code (Codeberg)",
    category: "Social / Links",
    icon: "💻",
    action: () => {
      window.open("https://codeberg.org/Chneemann/portfolio", "_blank");
    },
  },
];
