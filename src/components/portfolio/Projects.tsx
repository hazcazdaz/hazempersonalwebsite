import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import React from "react";

const projects = [
  {
    id: "aggieseek",
    title: "AggieSeek",
    period: "Apr 2025 – May 2025",
    stack: ["AWS", "Discord", "Twilio", "Tailwind CSS", "Next.js", "React Native"],
    url: "https://aggieseek.net/",
    description:
      "Cross‑platform app that streamlines course registration tracking for 500+ students with real-time alerts.",
    bullets: [
      "Engineered Python/TypeScript backend for instant, accurate notifications (20% faster registration)",
      "Implemented real-time course availability alerts to boost engagement",
    ],
  },
  {
    id: "bobashop",
    title: "BobaShop POS",
    period: "Feb 2025 – May 2025",
    stack: ["Java", "PostgreSQL", "React", "Node.js", "APIs"],
    url: "https://github.com/hazcazdaz/BobashopPOSSystem",
    description:
      "Full‑stack POS with real-time order tracking, collaboration tools, and accessibility-first UI.",
    bullets: [
      "Integrated Google Translate and Weather APIs for personalized experiences",
      "Architected collaborative features and ensured accessibility compliance",
    ],
  },
  {
    id: "portfolio",
    title: "Personal Portfolio Website",
    period: "2025 – Present",
    stack: ["React", "Vite", "TypeScript", "Tailwind CSS", "shadcn/ui", "SEO"],
    url: "/",
    description:
      "This site — a fast, accessible portfolio with SEO, semantic HTML, and a polished design system.",
    bullets: [
      "Built responsive sections with semantic, accessible components",
      "Implemented SEO (title, meta, JSON‑LD) and performance best practices",
    ],
  },
  {
    id: "roblox",
    title: "Roblox Multiplayer Games",
    period: "Jul 2021 – Dec 2022",
    stack: ["LUA", "Roblox Studio", "Jira", "Discord"],
    description:
      "Led programming for a real-time multiplayer game amassing 450,000 visits and 5,000+ active users.",
    bullets: [
      "Shipped admin, spectator, and movement systems increasing engagement by 60%",
      "Designed robust real-time mechanics and team processes",
    ],
    links: [
      { label: "Kazuhiko Academy", url: "https://www.roblox.com/games/14168494606/MDM-Kazuhiko-Academy" },
      { label: "60 Seconds", url: "https://www.roblox.com/games/14113363085/MB-60-Seconds" },
      { label: "Village of Rire", url: "https://www.roblox.com/games/14062983214/MB-Village-of-Rire" },
    ],
  },
];

const Projects: React.FC = () => {
  return (
    <section id="projects" className="container py-16 md:py-24">
      <header className="mb-8">
        <h2 className="text-3xl font-semibold tracking-tight">Projects</h2>
        <p className="mt-2 text-muted-foreground">
          Selected work highlighting real-time systems, backend performance, and polished UX.
        </p>
        <p className="mt-1 text-sm text-muted-foreground">Hover and Click the Tab you want to see!</p>
      </header>

      <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
        {projects.map((p) => {
          const card = (
            <Card className="transition-transform hover:-translate-y-1">
              <CardHeader>
                <CardTitle className="flex items-center justify-between">
                  <span>{p.title}</span>
                  <span className="text-sm font-normal text-muted-foreground">{p.period}</span>
                </CardTitle>
                <CardDescription>{p.description}</CardDescription>
              </CardHeader>
              <CardContent>
                <ul className="list-disc space-y-2 pl-5 text-sm">
                  {p.bullets.map((b, i) => (
                    <li key={i}>{b}</li>
                  ))}
                </ul>
                {"links" in p && p.links ? (
                  <div className="mt-4 space-y-2">
                    <p className="text-sm font-medium">Play:</p>
                    <ul className="list-disc pl-5 text-sm">
                      {p.links.map((l) => (
                        <li key={l.url}>
                          <a href={l.url} target="_blank" rel="noreferrer" className="underline underline-offset-4 hover:text-foreground">
                            {l.label}
                          </a>
                        </li>
                      ))}
                    </ul>
                  </div>
                ) : null}
                <div className="mt-4 flex flex-wrap gap-2">
                  {p.stack.map((s) => (
                    <Badge key={s} variant="secondary">{s}</Badge>
                  ))}
                </div>
              </CardContent>
            </Card>
          );

          return p.url && !("links" in p) ? (
            <a key={p.id} href={p.url} target="_blank" rel="noreferrer" className="block">
              {card}
            </a>
          ) : (
            <div key={p.id}>{card}</div>
          );
        })}
      </div>
    </section>
  );
};

export default Projects;
