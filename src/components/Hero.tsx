import React, { useEffect, useState } from "react";
import { profile } from "../data/content";

const Hero: React.FC = () => {
  const [i, setI] = useState(0);

  useEffect(() => {
    const t = setInterval(() => setI((n) => (n + 1) % profile.roles.length), 2200);
    return () => clearInterval(t);
  }, []);

  return (
    <header id="top" className="mx-auto max-w-5xl px-5 pb-20 pt-20 text-center md:pb-28 md:pt-28">
      <p className="font-mono text-xs uppercase tracking-[0.2em] text-faint">
        Hazem Salem · {profile.location}
      </p>

      <h1 className="mt-8 text-6xl font-bold leading-[1.02] tracking-tight sm:text-7xl md:text-8xl">
        <span
          key={i}
          className="word-swap font-serif font-normal italic text-accent"
        >
          {profile.roles[i]}
        </span>
        <br />
        Developer.
      </h1>

      <p className="mx-auto mt-8 max-w-2xl text-lg leading-relaxed text-faint">
        {profile.tagline}
      </p>

      <div className="mt-10 flex flex-wrap items-center justify-center gap-3 font-mono text-sm">
        <a
          href="#projects"
          className="rounded-full border border-ink bg-ink px-6 py-3 text-paper transition-colors hover:border-accent hover:bg-accent"
        >
          See work ↓
        </a>
        <a
          href={`mailto:${profile.email}`}
          className="rounded-full border border-rule px-6 py-3 text-faint transition-colors hover:border-accent hover:text-accent"
        >
          Connect
        </a>
      </div>

      <div className="mt-10 flex flex-wrap items-center justify-center gap-x-6 gap-y-2 font-mono text-xs">
        <a href={profile.github} target="_blank" rel="noreferrer" className="underline decoration-rule underline-offset-4 transition-colors hover:text-accent hover:decoration-accent">
          GitHub
        </a>
        <a href={profile.linkedin} target="_blank" rel="noreferrer" className="underline decoration-rule underline-offset-4 transition-colors hover:text-accent hover:decoration-accent">
          LinkedIn
        </a>
        <span className="text-faint">{profile.availability}</span>
      </div>
    </header>
  );
};

export default Hero;
