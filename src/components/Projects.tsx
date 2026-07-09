import React from "react";
import Section from "./Section";
import { projects } from "../data/content";

const Projects: React.FC = () => (
  <Section id="projects" num="02" title="Projects">
    <div className="grid gap-6 md:grid-cols-2">
      {projects.map((p) => (
        <article
          key={p.num}
          className="group flex flex-col overflow-hidden rounded-2xl border border-rule bg-paper transition-all hover:-translate-y-1 hover:border-accent"
        >
          {p.image && (
            <div className="overflow-hidden border-b border-rule">
              <img
                src={p.image}
                alt={`${p.title} preview`}
                className="aspect-video w-full object-cover transition-transform duration-500 group-hover:scale-[1.03]"
                loading="lazy"
              />
            </div>
          )}
          <div className="flex grow flex-col p-6">
            <div className="flex flex-wrap items-baseline justify-between gap-2">
              <h3 className="text-xl font-semibold tracking-tight md:text-2xl">
                <span className="mr-2 font-mono text-sm font-normal text-faint">{p.num}</span>
                {p.title}
              </h3>
              <p className="font-mono text-xs text-faint">{p.period}</p>
            </div>
            <p className="mt-1 font-mono text-xs uppercase tracking-wider text-accent">{p.role}</p>
            <p className="mt-3 text-sm leading-relaxed text-faint">{p.description}</p>
            <ul className="mt-3 space-y-1.5 text-sm leading-relaxed">
              {p.bullets.map((b, i) => (
                <li key={i} className="flex gap-2">
                  <span className="text-accent">·</span>
                  <span>{b}</span>
                </li>
              ))}
            </ul>
            <div className="mt-auto pt-4">
              <div className="flex flex-wrap gap-1.5">
                {p.stack.map((s) => (
                  <span
                    key={s}
                    className="rounded-full border border-rule px-2.5 py-0.5 font-mono text-[11px] text-faint"
                  >
                    {s}
                  </span>
                ))}
              </div>
              {p.links.length > 0 && (
                <div className="mt-3 flex flex-wrap gap-x-4 gap-y-1">
                  {p.links.map((l) => (
                    <a
                      key={l.url}
                      href={l.url}
                      target="_blank"
                      rel="noreferrer"
                      className="font-mono text-xs text-accent underline decoration-rule underline-offset-4 hover:decoration-accent"
                    >
                      {l.label} ↗
                    </a>
                  ))}
                </div>
              )}
            </div>
          </div>
        </article>
      ))}
    </div>
  </Section>
);

export default Projects;
