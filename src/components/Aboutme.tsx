export default function Aboutme() {
  return (
    <section
      id="aboutme"
      className="relative py-14 px-6 md:px-12 max-w-5xl mx-auto border-t border-slate-900/50 scroll-mt-20"
    >
      {/* Titel */}
      <div className="flex items-center gap-4 mb-6">
        <h2 className="text-3xl font-bold text-white tracking-tight">
          About me<span className="text-blue-500">.</span>
        </h2>
        <div className="h-1px bg-slate-800 grow max-w-md" />
      </div>

      <div className="grid grid-cols-1 md:grid-cols-12 gap-12 items-start">
        {/* Left column */}
        <div className="md:col-span-7 space-y-6 text-slate-400 leading-relaxed text-base">
          <p>
            Hey there! I'm André, a full-stack developer from Karlsruhe. I had a
            passion for coding since childhood when I first got my hands on a
            computer. Over the years, that fascination has grown into a genuine
            love for the craft.
            {/* 
            German:
            Hey! Ich bin Andre, ein Full-Stack-Entwickler aus Karlsruhe. 
            Schon seit meiner Kindheit habe ich mich fürs Programmieren begeistert, 
            als ich das erste Mal einen Computer in die Hände bekam. Diese Faszination 
            hat sich im Laufe der Jahre zu einer echten Leidenschaft entwickelt. 
             */}
          </p>
          <p>
            During my training at Developer Akademie, I gained plenty of
            practical experience through projects and code reviews. I was able
            to deepen and implement this knowledge in many of my own projects as
            well as group projects. Symbol of problem-solving
            {/* 
            German:
            Während meiner Ausbildung an der Developer Akademie habe ich viel praktische 
            Erfahrung durch Projekte und Code-Reviews gesammelt. Ich konnte dieses Wissen 
            in vielen meiner eigenen Projekte sowie in Gruppenprojekten vertiefen und umsetzen. 
             */}
          </p>
          <p>
            In case I've piqued your curiosity, I warmly invite you to take a
            look at my previous works. This way, you can gain an impression of
            my skills.
            {/* 
            German:
            Falls ich deine Neugier geweckt habe, lade ich dich herzlich ein, 
            einen Blick auf meine bisherigen Arbeiten zu werfen. So kannst du 
            dir einen Eindruck von meinen Fähigkeiten verschaffen. 
             */}
          </p>
        </div>

        {/* Right column */}
        <div className="md:col-span-5">
          <div className="relative group p-6 rounded-2xl border border-slate-800 bg-slate-900/50 backdrop-blur-sm space-y-6 hover:border-slate-700/80 transition-colors duration-300">
            <div className="absolute top-0 right-0 w-24 h-24 bg-blue-500/5 rounded-full blur-2xl pointer-events-none group-hover:bg-blue-500/10 transition-colors duration-300" />

            <h3 className="text-lg font-semibold text-white">Quick Facts</h3>

            <ul className="space-y-4 text-sm">
              <li className="flex items-center gap-3">
                <span className="text-blue-500 font-mono">▸</span>
                <span className="text-slate-400 font-medium">Location:</span>
                <span className="text-slate-200 ml-auto">Germany</span>
              </li>
              <li className="flex items-center gap-3">
                <span className="text-blue-500 font-mono">▸</span>
                <span className="text-slate-400 font-medium">Languages:</span>
                <span className="text-slate-200 ml-auto">German, English</span>
              </li>
              <li className="flex items-center gap-3">
                <span className="text-blue-500 font-mono">▸</span>
                <span className="text-slate-400 font-medium">Core Stack:</span>
                <span className="text-slate-200 ml-auto text-right">
                  Angular (TS), React (Next.js)
                </span>
              </li>
              <li className="flex items-center gap-3">
                <span className="text-blue-500 font-mono">▸</span>
                <span className="text-slate-400 font-medium">Core Focus:</span>
                <span className="text-slate-200 ml-auto">
                  Clean Code & Architecture
                </span>
              </li>
              <li className="flex items-center gap-3">
                <span className="text-blue-500 font-mono">▸</span>
                <span className="text-slate-400 font-medium">Status:</span>
                <span className="text-emerald-400 font-medium ml-auto flex items-center gap-1.5">
                  <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse" />
                  Available for projects
                </span>
              </li>
            </ul>

            <div className="pt-4 border-t border-slate-800/80 text-xs text-slate-500 font-mono text-center">
              `Keep it simple, keep it clean.`
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
