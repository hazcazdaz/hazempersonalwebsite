import React from "react";
import Section from "./Section";
import { about } from "../data/content";

const About: React.FC = () => (
  <Section id="about" num="01" title="About">
    <div className="grid gap-10 lg:grid-cols-12">
      <div className="space-y-5 text-lg leading-relaxed lg:col-span-8">
        {about.paragraphs.map((p, i) => (
          <p key={i} className={i === 0 ? "" : "text-faint"}>
            {p}
          </p>
        ))}
      </div>
      <figure className="lg:col-span-4">
        <img
          src={about.photo}
          alt="Hazem Salem"
          className="aspect-[3/4] w-full max-w-xs rounded-sm border border-rule object-cover grayscale transition-all duration-500 hover:grayscale-0"
        />
      </figure>
    </div>
  </Section>
);

export default About;
