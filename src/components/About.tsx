export default function About() {
  return (
    <section
      id="aboutme"
      className="relative py-6 px-4 md:px-6 max-w-5xl mx-auto border-t border-slate-900/50 scroll-mt-15"
    >
      {/* Titel */}
      <div className="mb-6 space-y-1">
        <p className="text-xs font-mono text-blue-500 tracking-wider uppercase">
          // 01. Introduction
        </p>
        <h2 className="text-3xl font-bold text-white tracking-tight">
          About me<span className="text-blue-500">.</span>
        </h2>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-12 gap-12 items-start">
        {/* Left column */}
        <div className="md:col-span-7 space-y-6 text-slate-200 leading-relaxed text-base">
          <p>
            Hey there! André here—a full-stack developer based in Karlsruhe. A
            childhood fascination with computers sparked this journey, which has
            since evolved into a true passion for software development.
            {/* 
            German:
            Hey! Hier ist André – ein Full-Stack-Entwickler aus Karlsruhe. 
            Eine Faszination für Computer seit meiner Kindheit hat diesen Weg geebnet, 
            der sich seitdem zu einer echten Leidenschaft für Softwareentwicklung entwickelt hat.
            */}
          </p>
          <p>
            Through my training at Developer Akademie, I gained hands-on
            experience building real-world software, backed by rigorous code
            reviews. This technical background has been put into practice and
            expanded across a variety of solo and collaborative group projects.
            {/* 
            German:
            Während meiner Ausbildung an der Developer Akademie habe ich viel praktische 
            Erfahrung beim Bauen von echter Software gesammelt, unterstützt durch gründliche Code-Reviews. 
            Diesen technischen Hintergrund konnte ich in vielen eigenen Projekten sowie in 
            Gruppenprojekten direkt in die Praxis umsetzen und vertiefen.
            */}
          </p>
          <p>
            Feel free to explore my recent work below to see these skills and
            problem-solving approaches in action.
            {/* 
            German:
            Schau dir gerne unten meine aktuellen Arbeiten an, um meine Fähigkeiten 
            und Lösungsansätze in Aktion zu sehen.
            */}
          </p>
        </div>

        {/* Right column */}
        <div className="md:col-span-5">
          <div
            className="group relative p-6 rounded-2xl border border-slate-800/80 bg-slate-900/40 backdrop-blur-sm 
                       hover:border-blue-500/30 hover:bg-slate-900/80 hover:shadow-xl hover:shadow-blue-500/5 
                       transition-all duration-300 flex flex-col justify-between overflow-hidden space-y-6"
          >
            <div className="absolute -top-12 -right-12 w-24 h-24 bg-blue-500/10 rounded-full blur-xl group-hover:bg-blue-500/20 transition-all duration-500 pointer-events-none" />

            <div>
              {/* Header Titel */}
              <div className="flex items-center justify-between mb-6">
                <h3 className="text-lg font-semibold text-white flex items-center gap-2">
                  <span className="text-blue-500 font-mono text-sm">//</span>{" "}
                  Quick Facts
                </h3>
              </div>

              {/* List Container */}
              <ul className="space-y-4 text-sm">
                <li className="flex items-center gap-3">
                  <span className="text-blue-500 font-mono">▸</span>
                  <span className="text-slate-400 font-medium">Languages:</span>
                  <span className="text-slate-200 ml-auto text-right font-mono text-xs">
                    German, English
                  </span>
                </li>
                <li className="flex items-center gap-3">
                  <span className="text-blue-500 font-mono">▸</span>
                  <span className="text-slate-400 font-medium">
                    Core Stack:
                  </span>
                  <span className="text-slate-200 ml-auto text-right font-mono text-xs">
                    Angular&nbsp;(TS), React&nbsp;(Next.js)
                  </span>
                </li>
                <li className="flex items-center gap-3">
                  <span className="text-blue-500 font-mono">▸</span>
                  <span className="text-slate-400 font-medium">
                    Core Focus:
                  </span>
                  <span className="text-slate-200 ml-auto text-right font-mono text-xs">
                    Clean&nbsp;Code & Architecture
                  </span>
                </li>
                <li className="flex items-center gap-3">
                  <span className="text-blue-500 font-mono">▸</span>
                  <span className="text-slate-400 font-medium">Status:</span>
                  <span className="text-emerald-400 ml-auto text-right flex items-center gap-1.5 font-mono text-xs">
                    <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse" />
                    Available for projects
                  </span>
                </li>
              </ul>
            </div>

            {/* Footer Quote */}
            <div className="pt-4 border-t border-slate-800/80 text-xs text-slate-500 font-mono text-center">
              `Keep it simple, keep it clean.`
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
