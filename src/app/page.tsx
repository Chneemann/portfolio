import Hero from "../components/Hero";
import Aboutme from "@/components/Aboutme";
import Skills from "@/components/Skills";

export default function Home() {
  return (
    <main className="min-h-screen bg-slate-950 text-slate-100 selection:bg-blue-500/30 selection:text-blue-200">
      <Hero />
      <Aboutme />
      <Skills />
    </main>
  );
}
