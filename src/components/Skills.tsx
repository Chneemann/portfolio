export default function Skills() {
  return (
    <section
      id="myskills"
      className="relative py-6 px-6 md:px-12 max-w-5xl mx-auto border-t border-slate-900/50 scroll-mt-20"
    >
      {/* Titel */}
      <div className="flex items-center justify-end gap-4 mb-6">
        <div className="h-px bg-slate-800 grow max-w-md" />
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
