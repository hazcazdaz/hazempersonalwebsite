import { Button } from "@/components/ui/button";
import { Github, Linkedin, Mail, Phone } from "lucide-react";
import React from "react";
import ThemeToggle from "@/components/ThemeToggle";
import profileImage from "@/assets/profile-professional.jpg";

const navItems = [
  { href: "#projects", label: "Projects" },
  { href: "#about", label: "About" },
  { href: "#experience", label: "Experience" },
  { href: "#education", label: "Education" },
  { href: "#skills", label: "Skills" },
  { href: "#resume", label: "Resume" },
  { href: "#contact", label: "Contact" },
];

const Hero: React.FC = () => {
  const onMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    const el = e.currentTarget;
    const rect = el.getBoundingClientRect();
    const x = e.clientX - rect.left;
    const y = e.clientY - rect.top;
    el.style.setProperty("--glow-x", `${x}px`);
    el.style.setProperty("--glow-y", `${y}px`);
  };

  return (
    <header className="pointer-glow" onMouseMove={onMouseMove}>
      <nav className="container flex items-center justify-between py-6">
        <a href="#top" className="font-semibold tracking-tight">
          HS
        </a>
        <ul className="hidden gap-6 md:flex">
          {navItems.map((item) => (
            <li key={item.href}>
              <a
                href={item.href}
                className="text-sm text-muted-foreground hover:text-foreground transition-colors"
              >
                {item.label}
              </a>
            </li>
          ))}
        </ul>
        <div className="flex items-center gap-2">
          <ThemeToggle />
          <Button asChild variant="ghost" size="sm" aria-label="Email">
            <a href="mailto:hazemhhasalem@gmail.com" title="Email Hazem">
              <Mail />
            </a>
          </Button>
          <Button asChild variant="ghost" size="sm" aria-label="Call">
            <a href="tel:+18328124643" title="Call Hazem">
              <Phone />
            </a>
          </Button>
          <Button asChild variant="ghost" size="sm" aria-label="GitHub">
            <a href="https://github.com/hazcazdaz" target="_blank" rel="noreferrer">
              <Github />
            </a>
          </Button>
          <Button asChild variant="ghost" size="sm" aria-label="LinkedIn">
            <a href="https://www.linkedin.com/in/hhasalem" target="_blank" rel="noreferrer">
              <Linkedin />
            </a>
          </Button>
        </div>

      </nav>

      <div className="container grid gap-6 py-16 md:py-24 lg:grid-cols-12 lg:items-center">
        <div className="lg:col-span-7">
          <h1 className="text-4xl font-bold tracking-tight sm:text-5xl md:text-6xl">
            Hazem Salem — Software Engineer
          </h1>
          <p className="mt-4 max-w-2xl text-lg text-muted-foreground">
            Software engineer crafting fast, reliable systems. I build
            real-time apps, refactor schemas, and ship resilient pipelines with
            crisp UX.
          </p>
          <div className="mt-8 flex flex-wrap gap-3">
            <Button asChild variant="hero" size="xl">
              <a href="#contact">Get in touch</a>
            </Button>
            <Button asChild variant="outline" size="xl">
              <a href="#projects">View projects</a>
            </Button>
          </div>
        </div>
        <div className="lg:col-span-5 flex flex-col gap-6">
          <div className="flex justify-center">
            <img 
              src={profileImage} 
              alt="Hazem Salem professional headshot" 
              className="w-48 h-48 rounded-full object-cover border-4 border-border shadow-lg"
            />
          </div>
          <div className="rounded-xl border bg-card/60 p-6 shadow-sm backdrop-blur">
            <dl className="grid grid-cols-2 gap-6 text-sm">
              <div>
                <dt className="text-muted-foreground">Location</dt>
                <dd>Katy, TX</dd>
              </div>
              <div>
                <dt className="text-muted-foreground">Education</dt>
                <dd>Texas A&M University</dd>
              </div>
              <div>
                <dt className="text-muted-foreground">Degree</dt>
                <dd>B.S. Computer Engineering</dd>
              </div>
              <div>
                <dt className="text-muted-foreground">Grad</dt>
                <dd>May 2026</dd>
              </div>
            </dl>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Hero;
