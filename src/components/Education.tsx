import React from "react";
import Section from "./Section";
import { education } from "../data/content";

const Education: React.FC = () => (
  <Section id="education" num="04" title="Education">
    <div className="grid gap-8 md:grid-cols-12">
      <div className="md:col-span-7">
        <h3 className="text-2xl font-semibold tracking-tight">{education.school}</h3>
        <p className="mt-2">{education.degree}</p>
        <p className="text-faint">{education.minors}</p>
        <p className="mt-1 font-mono text-xs uppercase tracking-wider text-accent">
          {education.extra}
        </p>
      </div>
      <dl className="grid grid-cols-2 gap-6 md:col-span-5">
        <div>
          <dt className="font-mono text-xs text-faint">GPA</dt>
          <dd className="mt-1 text-2xl font-semibold">{education.gpa}</dd>
        </div>
        <div>
          <dt className="font-mono text-xs text-faint">Graduated</dt>
          <dd className="mt-1 text-2xl font-semibold">{education.grad}</dd>
        </div>
      </dl>
      <div className="md:col-span-12">
        <p className="font-mono text-xs text-faint">Selected coursework</p>
        <p className="mt-2 max-w-3xl text-sm leading-relaxed text-faint">
          {education.coursework.join(" · ")}
        </p>
      </div>
    </div>
  </Section>
);

export default Education;
