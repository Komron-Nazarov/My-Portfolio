import Hero from "./components/Hero";
import Projects from "./projects/page";
import About from "./about/page";
import Contact from "./contact/page";

export default function Home() {
  return (
    <main>

      <section id="home">
        <Hero />
      </section>

      <section id="about">
        <About />
      </section>

      <section id="projects">
        <Projects />
      </section>

      <section id="contact">
        <Contact />
      </section>

    </main>
  );
}