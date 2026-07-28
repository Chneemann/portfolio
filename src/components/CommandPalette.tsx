"use client";

import { useState, useEffect, useRef } from "react";
import { getCommands } from "../lib/paletteCommands";

/**
 * Interactive Cmd+K modal for quick navigation, actions, and social links
 */
export default function CommandPalette() {
  const [isOpen, setIsOpen] = useState(false);
  const [search, setSearch] = useState("");
  const [selectedIndex, setSelectedIndex] = useState(0);
  const [copied, setCopied] = useState(false);
  const inputRef = useRef<HTMLInputElement>(null);

  // Load action definitions from lib helper
  const commands = getCommands(copied, setCopied);

  // Filter commands dynamically by search query or category
  const filteredCommands = commands.filter(
    (cmd) =>
      cmd.label.toLowerCase().includes(search.toLowerCase()) ||
      cmd.category.toLowerCase().includes(search.toLowerCase()),
  );

  // Global hotkeys listener (Cmd/Ctrl + K to toggle, ESC to close)
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if ((e.metaKey || e.ctrlKey) && e.key === "k") {
        e.preventDefault();
        window.dispatchEvent(new CustomEvent("toggle-cmd-k"));
      } else if (e.key === "Escape") {
        setIsOpen(false);
      }
    };

    const handleCustomToggle = () => setIsOpen((prev) => !prev);

    window.addEventListener("keydown", handleKeyDown);
    window.addEventListener("toggle-cmd-k", handleCustomToggle);

    return () => {
      window.removeEventListener("keydown", handleKeyDown);
      window.removeEventListener("toggle-cmd-k", handleCustomToggle);
    };
  }, []);

  // Reset input and focus search field when opened
  useEffect(() => {
    if (isOpen) {
      setSearch("");
      setSelectedIndex(0);
      setTimeout(() => inputRef.current?.focus(), 30);
    }
  }, [isOpen]);

  // Keyboard navigation for command selection (Up/Down/Enter)
  const handleInputKeyDown = (e: React.KeyboardEvent) => {
    if (e.key === "ArrowDown") {
      e.preventDefault();
      setSelectedIndex((prev) => (prev + 1) % (filteredCommands.length || 1));
    } else if (e.key === "ArrowUp") {
      e.preventDefault();
      setSelectedIndex((prev) =>
        prev === 0 ? filteredCommands.length - 1 : prev - 1,
      );
    } else if (e.key === "Enter") {
      e.preventDefault();
      if (filteredCommands[selectedIndex]) {
        filteredCommands[selectedIndex].action();
        if (filteredCommands[selectedIndex].id !== "copy-email") {
          setIsOpen(false);
        }
      }
    }
  };

  if (!isOpen) return null;

  return (
    <div
      className="fixed inset-0 z-52 flex items-start justify-center pt-24 bg-slate-950/90 backdrop-blur-md p-4 animate-in fade-in duration-150"
      onClick={() => setIsOpen(false)}
    >
      <div
        className="w-full max-w-xl bg-slate-900/95 border border-slate-800 rounded-2xl shadow-2xl shadow-black/80 overflow-hidden border-t-slate-700/60 font-sans"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Search Input Bar */}
        <div className="flex items-center px-4 py-3.5 border-b border-slate-800/80 bg-slate-950/50">
          <svg
            className="w-4 h-4 text-blue-400 mr-3 shrink-0"
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
          <input
            ref={inputRef}
            type="text"
            placeholder="Type a command or action..."
            value={search}
            onChange={(e) => {
              setSearch(e.target.value);
              setSelectedIndex(0);
            }}
            onKeyDown={handleInputKeyDown}
            className="w-full bg-transparent text-slate-100 placeholder-slate-500 outline-none text-sm tracking-wide font-mono"
          />
          <kbd className="text-[10px] font-mono bg-slate-800 text-slate-400 px-2 py-0.5 rounded border border-slate-700">
            ESC
          </kbd>
        </div>

        {/* Command List */}
        <div className="max-h-100 overflow-y-auto p-2 space-y-1">
          {filteredCommands.length === 0 ? (
            <p className="p-4 text-center text-xs font-mono text-slate-500">
              No matching commands found.
            </p>
          ) : (
            filteredCommands.map((cmd, index) => {
              const isSelected = index === selectedIndex;
              return (
                <button
                  key={cmd.id}
                  onClick={() => {
                    cmd.action();
                    if (cmd.id !== "copy-email") setIsOpen(false);
                  }}
                  onMouseEnter={() => setSelectedIndex(index)}
                  className={`w-full flex items-center justify-between px-3.5 py-2.5 rounded-xl text-xs transition-all duration-150 font-mono cursor-pointer ${
                    isSelected
                      ? "bg-slate-800/80 text-white border-l-2 border-blue-500 pl-4"
                      : "text-slate-400 hover:text-slate-200"
                  }`}
                >
                  <div className="flex items-center space-x-3">
                    <span className="text-sm">{cmd.icon}</span>
                    <span className="font-medium tracking-wide">
                      {cmd.label}
                    </span>
                  </div>

                  <div className="flex items-center space-x-2">
                    <span className="text-[10px] text-slate-500 uppercase tracking-wider">
                      {cmd.category}
                    </span>
                    {isSelected && (
                      <kbd className="text-[10px] text-slate-300 bg-slate-800 px-1.5 py-0.5 rounded border border-slate-700">
                        ↵
                      </kbd>
                    )}
                  </div>
                </button>
              );
            })
          )}
        </div>

        {/* Footer Hint */}
        <div className="px-4 py-2.5 border-t border-slate-800/60 bg-slate-950/60 flex items-center justify-between text-[11px] font-mono text-slate-500">
          <span>
            Use{" "}
            <kbd className="text-slate-400 bg-slate-900 px-1 rounded border border-slate-800">
              ↑
            </kbd>{" "}
            <kbd className="text-slate-400 bg-slate-900 px-1 rounded border border-slate-800">
              ↓
            </kbd>{" "}
            to navigate
          </span>
          <span>
            <kbd className="text-slate-400 bg-slate-900 px-1 rounded border border-slate-800">
              ⌘K
            </kbd>{" "}
            /{" "}
            <kbd className="text-slate-400 bg-slate-900 px-1 rounded border border-slate-800">
              Ctrl+K
            </kbd>
          </span>
        </div>
      </div>
    </div>
  );
}
