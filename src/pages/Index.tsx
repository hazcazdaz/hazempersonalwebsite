import Hero from "@/components/portfolio/Hero";
import Projects from "@/components/portfolio/Projects";
import Experience from "@/components/portfolio/Experience";
import Education from "@/components/portfolio/Education";
import About from "@/components/portfolio/About";
import Skills from "@/components/portfolio/Skills";
import Resume from "@/components/portfolio/Resume";
import Contact from "@/components/portfolio/Contact";
import { Helmet } from "react-helmet-async";

const Index = () => {
  const canonical = typeof window !== 'undefined' ? `${window.location.origin}${window.location.pathname}` : "/";
  const ld = {
    "@context": "https://schema.org",
    "@type": "Person",
    name: "Hazem Salem",
    email: "mailto:hazemhhasalem@gmail.com",
    telephone: "+1-832-812-4643",
    url: canonical,
    jobTitle: "Software Engineer",
    address: { "@type": "PostalAddress", addressLocality: "Katy", addressRegion: "TX", addressCountry: "US" },
    sameAs: [
      "https://www.linkedin.com/in/hhasalem",
      "https://github.com/hazcazdaz"
    ],
    alumniOf: {
      "@type": "CollegeOrUniversity",
      name: "Texas A&M University",
      address: { "@type": "PostalAddress", addressLocality: "College Station", addressRegion: "TX" }
    }
  };

  return (
    <>
      <Helmet>
        <title>Hazem Salem | Software Engineer</title>
        <meta name="description" content="Portfolio of Hazem Salem — Full-stack software engineer building fast, reliable systems and real-time apps." />
        <link rel="canonical" href={canonical} />
        <meta property="og:title" content="Hazem Salem | Software Engineer" />
        <meta property="og:description" content="Full-stack software engineer crafting reliable systems and real-time apps." />
        <script type="application/ld+json">{JSON.stringify(ld)}</script>
      </Helmet>

      <a id="top" />
      <Hero />
      <main>
        <About />
        <Projects />
        <Experience />
        <Education />
        <Skills />
        <Resume />
        <Contact />
      </main>
      <footer className="container py-8 text-center text-sm text-muted-foreground">
        © {new Date().getFullYear()} Hazem Salem · Built with React & Tailwind
      </footer>
    </>
  );
};

export default Index;
