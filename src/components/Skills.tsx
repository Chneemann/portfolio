export default function Skills() {
  /**
   * Technical skill matrix grouped by stack category and highlight priority
   */
  const skillCategories = [
    {
      title: "Frontend",
      skills: [
        { name: "Angular (RxJS)", featured: true },
        { name: "HTML5 / SCSS", featured: false },
        { name: "React (Next.js)", featured: true },
        { name: "Tailwind CSS", featured: false },
        { name: "TypeScript", featured: true },
        { name: "JavaScript (ES6+)", featured: true },
      ],
    },
    {
      title: "Backend & Data",
      skills: [
        { name: "Python", featured: true },
        { name: "Django", featured: true },
        { name: "Redis", featured: false },
        { name: "PostgreSQL / SQL", featured: true },
        { name: "Firebase", featured: false },
        { name: "REST APIs", featured: false },
      ],
    },
    {
      title: "DevOps & Workflow",
      skills: [
        { name: "Git / GitHub", featured: true },
        { name: "Scrum / Agile", featured: false },
        { name: "Linux", featured: false },
        { name: "Docker", featured: true },
        { name: "CI / CD", featured: false },
        { name: "Cloud Services", featured: false },
      ],
    },
  ];

  /**
   * Render the technical skills section with responsive category cards and styled skill tags.
   */
  return (
    <section
      id="myskills"
      className="relative py-6 px-4 md:px-6 max-w-5xl mx-auto scroll-mt-15"
    >
      {/* Section Header */}
      <div className="mb-4 space-y-1 text-right flex flex-col items-end">
        <p className="text-xs font-mono text-blue-500 tracking-wider uppercase">
          // 02. Technical Stack
        </p>
        <h2 className="text-3xl font-bold text-white tracking-tight">
          My Skills<span className="text-blue-500">.</span>
        </h2>
      </div>

      {/* Intro Description */}
      <div className="mb-6 leading-relaxed">
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

      {/* Skill Category Cards */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        {skillCategories.map((category) => (
          <div
            key={category.title}
            className="group relative p-5 rounded-2xl border border-slate-700/60 bg-slate-900/90 backdrop-blur-md 
             shadow-lg shadow-black/40 border-t-slate-600/50
             hover:border-blue-500/50 hover:bg-slate-800/90 
             hover:shadow-2xl hover:shadow-blue-500/10 hover:-translate-y-0.5 
             transition-all duration-300 ease-out flex flex-col justify-between overflow-hidden"
          >
            {/* Subtle glow effect */}
            <div className="absolute -top-12 -right-12 w-24 h-24 bg-blue-500/15 rounded-full blur-xl group-hover:bg-blue-500/25 transition-all duration-500 pointer-events-none" />

            <div>
              {/* Category Header */}
              <div className="flex items-center justify-between mb-4">
                <h3 className="text-lg font-semibold text-white flex items-center gap-2">
                  <span className="text-blue-500 font-mono text-sm">//</span>{" "}
                  {category.title}
                </h3>
                <span className="w-2 h-2 rounded-full bg-blue-500/40 group-hover:bg-blue-400 group-hover:shadow-[0_0_8px_rgba(96,165,250,0.8)] transition-all duration-300" />
              </div>

              {/* Skill Badges */}
              <div className="flex flex-wrap gap-2 justify-center sm:justify-start">
                {category.skills.map((skill) => (
                  <span
                    key={skill.name}
                    className={`px-3 py-1.5 text-xs font-mono rounded-lg transition-all duration-200 cursor-default hover:-translate-y-0.5 shadow-sm ${
                      skill.featured
                        ? "bg-blue-500/10 text-blue-300 border border-blue-500/40 shadow-blue-500/5 hover:bg-blue-500/20 hover:border-blue-400 hover:text-white"
                        : "bg-slate-800/60 text-slate-400 border border-slate-700/40 hover:border-slate-500 hover:text-slate-200 hover:bg-slate-800"
                    }`}
                  >
                    {skill.name}
                  </span>
                ))}
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
