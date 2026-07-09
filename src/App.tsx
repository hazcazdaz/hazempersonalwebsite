import React, { useEffect } from "react";
import Lenis from "lenis";
import Nav from "./components/Nav";
import Hero from "./components/Hero";
import About from "./components/About";
import Projects from "./components/Projects";
import Experience from "./components/Experience";
import Education from "./components/Education";
import Stack from "./components/Stack";
import Resume from "./components/Resume";
import Contact from "./components/Contact";

const App: React.FC = () => {
  useEffect(() => {
    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) return;

    const lenis = new Lenis({ lerp: 0.1 });
    let raf = 0;
    const loop = (time: number) => {
      lenis.raf(time);
      raf = requestAnimationFrame(loop);
    };
    raf = requestAnimationFrame(loop);

    const onClick = (e: MouseEvent) => {
      const a = (e.target as HTMLElement).closest?.('a[href^="#"]');
      if (!a) return;
      const hash = a.getAttribute("href");
      if (!hash || hash.length < 2) return;
      const el = document.querySelector(hash);
      if (el) {
        e.preventDefault();
        lenis.scrollTo(el as HTMLElement, { offset: -64, duration: 1.1 });
      }
    };
    document.addEventListener("click", onClick);

    return () => {
      document.removeEventListener("click", onClick);
      cancelAnimationFrame(raf);
      lenis.destroy();
    };
  }, []);

  return (
    <>
      <Nav />
      <Hero />
      <main>
        <About />
        <Projects />
        <Experience />
        <Education />
        <Stack />
        <Resume />
        <Contact />
      </main>
      <footer className="border-t border-rule">
        <div className="mx-auto flex max-w-6xl flex-wrap items-baseline justify-between gap-2 px-5 py-8">
          <p className="font-mono text-xs text-faint">
            © {new Date().getFullYear()} Hazem Salem · designed & built by hand, College Station, TX
          </p>
          <a href="#top" className="font-mono text-xs text-faint transition-colors hover:text-accent">
            Back to top ↑
          </a>
        </div>
      </footer>
    </>
  );
};

export default App;
