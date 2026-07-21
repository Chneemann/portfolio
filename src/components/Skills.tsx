export default function Skills() {
  return (
    <section
      id="myskills"
      className="relative py-16 px-6 md:px-12 max-w-5xl mx-auto border-t border-slate-900/50 scroll-mt-20"
    >
      {/* Titel */}
      <div className="flex items-center gap-4 mb-6">
        <h2 className="text-3xl font-bold text-white tracking-tight">
          My Skills<span className="text-blue-500">.</span>
        </h2>
        <div className="h-px bg-slate-800 grow max-w-md" />
      </div>

      {/* Description */}
      <div className=" mb-6 text-slate-200 leading-relaxed text-base">
        <p>
          Through hands-on experience in various projects, I have continuously
          expanded and deepened my full-stack development skills. I specialize
          in core web technologies like TypeScript, JavaScript, and Python,
          leveraging modern frameworks such as Angular, React, Next.js, and
          Django to build robust applications.
          {/* 
          German:
          Durch die Arbeit an
          verschiedenen Projekten konnte ich mein Wissen und meine Fähigkeiten
          im Bereich Full-Stack Entwicklung kontinuierlich erweitern und
          vertiefen. Ich habe umfangreiche Erfahrungen im Umgang mit
          Technologien wie TypeScript, JavaScript und Python gesammelt sowie in
          der Arbeit mit modernen Frameworks wie Angular, React und Django.
          */}
        </p>
      </div>
    </section>
  );
}
