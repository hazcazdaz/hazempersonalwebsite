import React from "react";
import { useTheme } from "../hooks/useTheme";

const links = [
  { href: "#about", label: "About" },
  { href: "#projects", label: "Projects" },
  { href: "#experience", label: "Experience" },
  { href: "#education", label: "Education" },
  { href: "#stack", label: "Stack" },
  { href: "#resume", label: "Resume" },
  { href: "#contact", label: "Contact" },
];

const Nav: React.FC = () => {
  const { dark, toggle } = useTheme();

  return (
    <nav className="sticky top-0 z-40 border-b border-rule bg-paper/90 backdrop-blur">
      <div className="mx-auto flex max-w-6xl items-center justify-between px-5 py-3">
        <a href="#top" className="font-serif text-lg italic">
          Hazem Salem
        </a>
        <ul className="hidden items-center gap-5 md:flex">
          {links.map((l) => (
            <li key={l.href}>
              <a
                href={l.href}
                className="font-mono text-xs uppercase tracking-wider text-faint transition-colors hover:text-accent"
              >
                {l.label}
              </a>
            </li>
          ))}
        </ul>
        <button
          onClick={toggle}
          aria-label="Toggle theme"
          className="rounded-full border border-rule px-3 py-1 font-mono text-xs text-faint transition-colors hover:border-accent hover:text-accent"
        >
          {dark ? "light" : "dark"}
        </button>
      </div>
    </nav>
  );
};

export default Nav;
