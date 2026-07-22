export default function Skills() {
  return (
    <section
      id="myskills"
      className="relative py-6 px-4 md:px-6 max-w-5xl mx-auto border-t border-slate-900/50 scroll-mt-15"
    >
      {/* Titel */}
      <div className="mb-6 space-y-1 text-right flex flex-col items-end">
        <p className="text-xs font-mono text-blue-500 tracking-wider uppercase">
          // 02. Technical Stack
        </p>
        <h2 className="text-3xl font-bold text-white tracking-tight">
          My Skills<span className="text-blue-500">.</span>
        </h2>
      </div>

      {/* Description */}
      <div className="mb-8 text-slate-200 text-base leading-relaxed">
        <p>
          Through hands-on experience in various projects, I continuously expand
          and refine my full-stack development skills. Here is an overview of
          the technologies, frameworks, and tools I work with:
          {/* 
          German:
          Durch die praktische Arbeit an verschiedenen Projekten erweitere 
          und vertiefe ich meine Fähigkeiten in der Full-Stack-Entwicklung kontinuierlich. 
          Hier ist eine Übersicht der Technologien, Frameworks und Tools, mit denen ich arbeite:
          */}
        </p>
      </div>
    </section>
  );
}
