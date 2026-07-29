import Hero from "../components/Hero";
import About from "../components/About";
import Skills from "../components/Skills";
import Contact from "../components/Contact";
import Portfolio from "../components/Portfolio";

/**
 * Main portfolio landing page assembling all key sections in sequence
 */
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
