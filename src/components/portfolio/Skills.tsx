import { Badge } from "@/components/ui/badge";
import React from "react";

const lang = ["LUA", "LUA‑U", "JavaScript", "HTML", "CSS", "Python", "Go", "C/C++", "SQL", "Java", "Verilog", "Assembly"];
const tech = ["React", "Next.js", "React Native", "Spring Boot", "PostgreSQL", "Supabase", "Tailwind CSS", "Git", "GitHub", "AWS", "Google Cloud", "Docker"];

const Skills: React.FC = () => {
  return (
    <section id="skills" className="container py-16 md:py-24">
      <header className="mb-8">
        <h2 className="text-3xl font-semibold tracking-tight">Technical Skills</h2>
      </header>
      <div className="grid gap-10 lg:grid-cols-2">
        <div>
          <h3 className="mb-3 text-sm font-medium text-muted-foreground">Programming Languages</h3>
          <div className="flex flex-wrap gap-2">
            {lang.map((s) => (
              <Badge key={s} variant="secondary">{s}</Badge>
            ))}
          </div>
        </div>
        <div>
          <h3 className="mb-3 text-sm font-medium text-muted-foreground">Technologies</h3>
          <div className="flex flex-wrap gap-2">
            {tech.map((s) => (
              <Badge key={s} variant="secondary">{s}</Badge>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Skills;