/**
 * Triggers a simulated terminal kernel panic overlay ("sudo rm -rf").
 * Appends a full-screen DOM overlay, streams logs with delayed timeouts, and cleans up automatically.
 */
export function playSudoEasterEgg() {
  // Create full-screen terminal overlay element
  const flashOverlay = document.createElement("div");
  flashOverlay.className =
    "fixed inset-0 z-[99999] bg-black text-xs font-mono flex flex-col justify-between p-6 md:p-12 selection:bg-red-500 selection:text-white select-none backdrop-blur-xl animate-in fade-in duration-75 overflow-hidden";

  flashOverlay.innerHTML = `
    <div id="terminal-logs" class="max-w-3xl space-y-1.5 text-slate-300"></div>
    <div id="terminal-footer" class="flex justify-between items-center text-[10px] text-red-500 font-bold border-t border-red-900/60 pt-3 opacity-0 transition-opacity duration-300">
      <span class="animate-pulse">CRITICAL_SYSTEM_FAILURE // NO_OPERATING_SYSTEM_FOUND</span>
      <span>RECOVERING SNAPSHOT...</span>
    </div>
  `;

  document.body.appendChild(flashOverlay);

  const logsContainer = flashOverlay.querySelector("#terminal-logs");
  const footer = flashOverlay.querySelector("#terminal-footer");

  // Helper to append formatted log HTML strings to the container
  const appendLog = (htmlString: string) => {
    if (!logsContainer) return;
    const temp = document.createElement("div");
    temp.innerHTML = htmlString.trim();
    if (temp.firstElementChild)
      logsContainer.appendChild(temp.firstElementChild);
  };

  // Timed output lines simulating system destruction and resolution
  const lines = [
    {
      html: `<p class="text-slate-500">[ 0.000000] Linux kernel init sequence started...</p>`,
      delay: 100,
    },
    {
      html: `<p class="text-red-500 font-bold pt-2">root@andre-kempf-portfolio:~# sudo rm -rf --no-preserve-root /</p>`,
      delay: 400,
    },
    {
      html: `<p class="text-red-400 font-mono">rm: unlinking '/etc/shadow'...</p>`,
      delay: 700,
    },
    {
      html: `<p class="text-red-400 font-mono">rm: unlinking '/boot/vmlinuz-6.8.0-generic'...</p>`,
      delay: 900,
    },
    {
      html: `<p class="text-red-400 font-mono">rm: unlinking '/var/www/portfolio/index.html'...</p>`,
      delay: 1100,
    },
    {
      html: `<p class="text-red-600 font-bold bg-red-950/80 px-2 py-1 rounded my-1 border border-red-800">Kernel panic - not syncing: Attempted to kill init! exitcode=0x00000009</p>`,
      delay: 1500,
    },
    {
      html: `
        <div class="p-4 rounded bg-red-950/90 border border-red-600 text-red-200 space-y-2 my-4 shadow-2xl animate-pulse">
          <p class="font-bold text-sm text-red-400 flex items-center gap-2">
            <span>🚨</span> CRITICAL SECURITY ALERT: HARD DRIVE WIPED
          </p>
          <p class="text-xs leading-relaxed text-red-300/90">
            Wiping process executed on <code class="bg-red-900/60 px-1 rounded text-white">/dev/nvme0n1</code>. All system files, database records, and site assets have been purged.
          </p>
          <p class="text-[10px] text-red-400/80 border-t border-red-900/80 pt-2 font-mono">
            [Incident logged. IP & Session details sent to administrator.]
          </p>
        </div>`,
      delay: 2000,
    },
    {
      html: `<p class="text-emerald-400 font-bold pt-2 animate-bounce">✓ ...Just kidding! System is write-protected. Relax!</p>`,
      delay: 5200,
    },
  ];

  // Stream terminal lines sequentially
  lines.forEach(({ html, delay }) => setTimeout(() => appendLog(html), delay));

  // Show footer warning message
  setTimeout(() => footer?.classList.remove("opacity-0"), 2200);

  // Fade out and remove overlay element from DOM
  setTimeout(() => {
    flashOverlay.classList.add("animate-out", "fade-out", "duration-500");
    setTimeout(() => flashOverlay.remove(), 500);
  }, 7500);
}
