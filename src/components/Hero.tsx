import Link from "next/link";

export default function Hero() {
  return (
    <section className="relative flex items-start pt-32 py-8 px-6 md:px-12 max-w-5xl mx-auto overflow-hidden">
      {/* Blue background glow */}
      <div className="absolute top-2/4 left-1/6 -translate-x-1/2 -translate-y-1/2 w-72 h-72 bg-blue-500/10 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute bottom-2/4 right-2/4 translate-x-1/2 translate-y-1/2 w-96 h-96 bg-blue-600/5 rounded-full blur-3xl pointer-events-none" />

      <div className="grid grid-cols-1 md:grid-cols-12 gap-12 items-center z-10 w-full">
        {/* Left column */}
        <div className="md:col-span-7 space-y-6 text-left">
          <span className="text-blue-500 font-mono text-sm tracking-wider uppercase">
            // Hi, my name is
          </span>

          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold tracking-tight text-white leading-none">
            André Kempf<span className="text-blue-500">.</span>
          </h1>

          <h2 className="text-3xl sm:text-5xl font-semibold text-slate-400">
            Full-Stack Developer
          </h2>

          <p className="text-base sm:text-lg text-slate-200 leading-relaxed max-w-xl">
            I conceptualize and develop modern web applications. With a sharp
            eye for detail and a focus on clean code, I bring digital ideas to
            life.
            {/* 
            German:
            Ich konzipiere und entwickle moderne Web-Anwendungen. Mit einem klaren
            Auge fürs Detail und einem Fokus auf sauberen Code erwecke ich
            digitale Ideen zum Leben.
             */}
          </p>

          {/* Buttons */}
          <div className="flex flex-wrap gap-4 pt-4">
            <Link
              href="#contactme"
              className="px-6 py-3 border border-blue-700/30 hover:bg-blue-500 active:bg-blue-700 text-white font-semibold rounded-lg shadow-lg shadow-blue-500/40 transition-all hover:-translate-y-0.5 duration-200"
            >
              Contact me
            </Link>
            <Link
              href="https://andre-kempf.com/assets/downloads/Andre_Kempf_Lebenslauf_2025.pdf"
              className="px-6 py-3 bg-slate-900 border border-slate-800 hover:border-slate-700 hover:bg-slate-850 text-slate-200 font-semibold rounded-lg transition-all hover:-translate-y-0.5 duration-200"
            >
              Download CV
            </Link>
          </div>
        </div>

        {/* Right column */}
        <div className="md:col-span-5 flex justify-center">
          <div className="relative group w-64 md:w-74 aspect-5/6">
            <div className="relative w-full h-full rounded-2xl border-5 border-slate-800 bg-slate-900 overflow-hidden flex items-center justify-center group-hover:border-blue-500/50 transition-colors duration-300">
              <img
                src="/me.png"
                alt="André Kempf"
                className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
