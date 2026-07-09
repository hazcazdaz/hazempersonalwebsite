import React from "react";
import Section from "./Section";
import { experience } from "../data/content";

const Experience: React.FC = () => (
  <Section id="experience" num="03" title="Experience">
    <ul>
      {experience.map((e) => (
        <li
          key={e.role + e.org}
          className="grid gap-2 border-b border-rule py-7 first:pt-0 last:border-b-0 md:grid-cols-12 md:gap-6"
        >
          <div className="md:col-span-4">
            <p className="font-mono text-xs text-faint">{e.period}</p>
            <p className="mt-1 font-mono text-xs text-faint">{e.location}</p>
          </div>
          <div className="md:col-span-8">
            <h3 className="text-lg font-semibold tracking-tight">{e.role}</h3>
            <p className="mt-0.5 font-mono text-xs uppercase tracking-wider text-accent">
              {e.org}
            </p>
            <ul className="mt-3 space-y-1.5 text-sm leading-relaxed">
              {e.bullets.map((b, i) => (
                <li key={i} className="flex gap-2">
                  <span className="text-accent">·</span>
                  <span>{b}</span>
                </li>
              ))}
            </ul>
          </div>
        </li>
      ))}
    </ul>
  </Section>
);

export default Experience;
