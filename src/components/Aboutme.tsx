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
      </div>
    </section>
  );
}
