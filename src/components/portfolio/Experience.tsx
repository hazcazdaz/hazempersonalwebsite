import { HoverCard, HoverCardContent, HoverCardTrigger } from "@/components/ui/hover-card";
import React from "react";

const experiences = [
  {
    role: "Backend Engineer Intern",
    org: "Aggie Nexus",
    period: "Apr 2025 – May 2025 | Remote",
    bullets: [
      "Cut API response times 50% by adopting Next.js and eliminating type errors",
      "Improved PostgreSQL queries by 40% via schema refactors and advanced indexes",
      "Enabled realtime for 10k+ records with 99.99% uptime and <150 ms sync latency",
      "Scaled CI/CD to daily releases with 0 critical rollbacks; +60% cross‑team velocity",
    ],
  },
  {
    role: "Software Engineering Intern",
    org: "Karate Fox Studios",
    period: "Oct 2024 – Jan 2025 | College Station, TX",
    bullets: [
      "Refactored navigation logic in JS/Node; reduced errors by 40%",
      "Spearheaded input handling fixes to boost responsiveness and UI consistency by 15%",
      "Migrated 5% of legacy code to modular XState patterns, improving maintainability",
    ],
  },
  {
    role: "Teaching Assistant for Data Structures & Algorithms",
    org: "Texas A&M University",
    period: "Aug 2024 – Dec 2024 | College Station, TX",
    bullets: [
      "Assisted in developing course material for 150+ students; taught abstract concepts in lab and graded assignments.",
      "Held weekly office hours (1–2 days) to tutor students needing additional help.",
      "Collaborated with TAs to create 6 programming assignments and 10 lab exercises in C++."
    ],
  },
  {
    role: "Undergrad Research Assistant",
    org: "Texas A&M University",
    period: "Nov 2023 – Jan 2025 | College Station, TX",
    bullets: [
      "Contributed to iPTFlist from Swift satellite data; screened 10k objects, flagged 104 supernovae",
      "Collaborated in a 5‑person research team using Python, NumPy, Matplotlib, and Git",
    ],
  },
];

const Experience: React.FC = () => {
  return (
    <section id="experience" className="container py-16 md:py-24">
      <header className="mb-8">
        <h2 className="text-3xl font-semibold tracking-tight">Experience</h2>
        <p className="mt-2 text-muted-foreground">Recent roles and impact.</p>
      </header>
      <div className="relative mx-auto max-w-3xl">
        <div className="absolute left-4 top-0 bottom-0 w-px bg-border/60 md:left-1/2" aria-hidden="true" />
        <ul className="space-y-8">
          {experiences.map((e) => (
            <li key={e.role} className="relative md:grid md:grid-cols-2 md:gap-8">
              <div className="pl-12 md:order-1 md:pl-0 md:pr-8 md:text-right">
                <p className="text-sm text-muted-foreground">{e.period}</p>
              </div>
              <div className="pl-12 md:pl-8">
                <span className="absolute left-4 top-2 size-3 -translate-x-1/2 rounded-full bg-primary shadow md:left-1/2" aria-hidden="true" />
                <HoverCard openDelay={50}>
                  <HoverCardTrigger asChild>
                    <button className="text-left focus:outline-none" aria-label={`${e.role} at ${e.org}`}>
                      <h3 className="font-medium">{e.role}</h3>
                      <p className="text-sm text-muted-foreground">{e.org}</p>
                    </button>
                  </HoverCardTrigger>
                  <HoverCardContent className="w-96">
                    <h4 className="font-semibold">{e.role} · {e.org}</h4>
                    <p className="mt-1 text-xs text-muted-foreground">{e.period}</p>
                    <ul className="mt-3 list-disc space-y-2 pl-5 text-sm">
                      {e.bullets.map((b, i) => (
                        <li key={i}>{b}</li>
                      ))}
                    </ul>
                  </HoverCardContent>
                </HoverCard>
              </div>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
};

export default Experience;
