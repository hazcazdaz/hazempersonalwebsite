import React from "react";
import { useReveal } from "../hooks/useReveal";

type Props = {
  id: string;
  num: string;
  title: string;
  children: React.ReactNode;
};

/** Numbered catalog-entry section: sticky index label left, content right. */
const Section: React.FC<Props> = ({ id, num, title, children }) => {
  const ref = useReveal<HTMLDivElement>();

  return (
    <section id={id} className="border-t border-rule">
      <div
        ref={ref}
        className="reveal mx-auto max-w-6xl px-5 py-16 md:grid md:grid-cols-12 md:gap-8 md:py-24"
      >
        <header className="mb-8 md:col-span-3 md:mb-0">
          <div className="md:sticky md:top-24">
            <p className="font-mono text-xs text-faint">№ {num}</p>
            <h2 className="mt-1 text-2xl font-semibold tracking-tight">{title}</h2>
          </div>
        </header>
        <div className="md:col-span-9">{children}</div>
      </div>
    </section>
  );
};

export default Section;
