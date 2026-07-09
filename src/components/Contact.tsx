import React from "react";
import Section from "./Section";
import { profile } from "../data/content";

const rows = [
  { label: "Email", value: profile.email, href: `mailto:${profile.email}` },
  { label: "Phone", value: profile.phone, href: `tel:+18328124643` },
  { label: "GitHub", value: "github.com/hazcazdaz", href: profile.github },
  { label: "LinkedIn", value: "linkedin.com/in/hhasalem", href: profile.linkedin },
];

const Contact: React.FC = () => (
  <Section id="contact" num="07" title="Contact">
    <p className="max-w-xl text-lg leading-relaxed">
      {profile.availability}. If something here caught your eye, or you just
      want to talk games, backends, or bouldering, reach out.
    </p>
    <ul className="mt-8">
      {rows.map((r) => (
        <li key={r.label} className="border-b border-rule last:border-b-0">
          <a
            href={r.href}
            target={r.href.startsWith("http") ? "_blank" : undefined}
            rel="noreferrer"
            className="group flex flex-wrap items-baseline justify-between gap-2 py-4 transition-colors hover:text-accent"
          >
            <span className="font-mono text-xs uppercase tracking-wider text-faint group-hover:text-accent">
              {r.label}
            </span>
            <span className="text-lg font-medium tracking-tight md:text-xl">
              {r.value} <span className="text-faint group-hover:text-accent">↗</span>
            </span>
          </a>
        </li>
      ))}
    </ul>
  </Section>
);

export default Contact;
