import Hero from "../components/Hero";
import About from "../components/About";
import Skills from "../components/Skills";
import Contact from "../components/Contact";
import Portfolio from "../components/Portfolio";

export default function Home() {
  return (
    <section>
      <Hero />
      <About />
      <Skills />
      <Portfolio />
      <Contact />
    </section>
  );
}
