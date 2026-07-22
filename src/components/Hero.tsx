import Link from "next/link";

export default function Hero() {
  return (
    <section className="relative pt-20 py-6 px-4 md:px-6 md:pt-24 max-w-5xl mx-auto border-t border-slate-900/50">
      <div className="grid grid-cols-1 md:grid-cols-12 gap-12 items-center z-10 w-full">
        {/* Left column */}
        <div className="md:col-span-7 lg:space-y-5 md:space-y-4 space-y-3 text-left">
          <span className="text-blue-500 font-mono text-sm tracking-wider uppercase">
            // Hi, my name is
          </span>

          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold tracking-tight text-white leading-none">
            André Kempf<span className="text-blue-500">.</span>
          </h1>

          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-semibold text-slate-400 tracking-tight">
            Full-Stack{" "}
            <span className="text-blue-400/80 font-medium">Developer</span>
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
          <div className="flex flex-wrap gap-4">
            <Link
              href="#contactme"
              className="px-6 py-3 bg-slate-900 text-blue-500 font-semibold rounded-lg border border-blue-500/40 hover:border-blue-400 hover:bg-blue-600 hover:text-white shadow-md shadow-blue-950/50 transition-all duration-200 hover:-translate-y-0.5 hover:shadow-lg hover:shadow-blue-500/20"
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
          <div className="relative group h-auto w-64 aspect-5/6">
            <div className="relative w-full h-full rounded-2xl border-5 border-slate-800 bg-slate-900 overflow-hidden flex items-center justify-center group-hover:border-blue-500/50 transition-colors duration-300">
              <img
                src="/me.png"
                alt="André Kempf"
                className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-102"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
