import React, { useEffect, useMemo, useRef, useState } from "react";
import Section from "./Section";
import { skills, skillCategories } from "../data/content";

type Category = (typeof skillCategories)[number];
type Mode = "playground" | Category;

const TILE = 60;
const CELL_W = 96;
const CELL_H = 104;

function isTouchDevice() {
  return typeof window !== "undefined" && window.matchMedia("(pointer: coarse)").matches;
}

const Stack: React.FC = () => {
  const [mode, setMode] = useState<Mode>(() => (isTouchDevice() ? "All" : "playground"));
  const containerRef = useRef<HTMLDivElement>(null);
  const tileRefs = useRef<(HTMLDivElement | null)[]>([]);
  const labelRefs = useRef<(HTMLDivElement | null)[]>([]);
  const mouse = useRef({ x: -9999, y: -9999, inside: false });
  const positions = useRef(skills.map(() => ({ x: 0, y: 0 })));
  const modeRef = useRef<Mode>(mode);
  const [containerH, setContainerH] = useState(440);

  const homes = useMemo(
    () =>
      skills.map((_, i) => ({
        seedX: (i * 137.508) % 360,
        seedY: (i * 97.13) % 360,
      })),
    []
  );

  const offsets = useMemo(
    () =>
      skills.map((_, i) => {
        const angle = (i / skills.length) * Math.PI * 2;
        const ring = 60 + (i % 4) * 34;
        return { x: Math.cos(angle) * ring, y: Math.sin(angle) * ring };
      }),
    []
  );

  useEffect(() => {
    modeRef.current = mode;
    const el = containerRef.current;
    if (!el) return;
    const w = el.clientWidth;
    if (mode !== "playground") {
      const active = mode === "All" ? skills : skills.filter((s) => s.category === mode);
      const cols = Math.max(2, Math.floor((w - 24) / CELL_W));
      const rows = Math.ceil(active.length / cols);
      setContainerH(Math.max(300, rows * CELL_H + 48));
    } else {
      setContainerH(440);
    }
  }, [mode]);

  useEffect(() => {
    const el = containerRef.current;
    if (!el) return;

    const onMove = (e: MouseEvent) => {
      const r = el.getBoundingClientRect();
      mouse.current = {
        x: e.clientX - r.left,
        y: e.clientY - r.top,
        inside:
          e.clientX >= r.left && e.clientX <= r.right && e.clientY >= r.top && e.clientY <= r.bottom,
      };
    };
    window.addEventListener("mousemove", onMove);

    let raf = 0;
    let t = 0;
    const reduced = window.matchMedia("(prefers-reduced-motion: reduce)").matches;

    const frame = () => {
      t += 0.016;
      const w = el.clientWidth;
      const h = el.clientHeight;
      const m = modeRef.current;
      const active = m === "playground" || m === "All" ? skills : skills.filter((s) => s.category === m);
      const activeIdx = new Set(active.map((s) => skills.indexOf(s)));
      const cols = Math.max(2, Math.floor((w - 24) / CELL_W));
      const gridW = Math.min(active.length, cols) * CELL_W;
      const x0 = (w - gridW) / 2 + (CELL_W - TILE) / 2;

      skills.forEach((s, i) => {
        const tile = tileRefs.current[i];
        const label = labelRefs.current[i];
        if (!tile) return;
        const p = positions.current[i];
        let tx: number;
        let ty: number;
        let visible = true;

        if (m === "playground") {
          if (mouse.current.inside) {
            tx = mouse.current.x + offsets[i].x - TILE / 2;
            ty = mouse.current.y + offsets[i].y - TILE / 2;
          } else {
            tx =
              w / 2 +
              Math.sin(t * 0.4 + homes[i].seedX) * (w * 0.36) -
              TILE / 2;
            ty = h / 2 + Math.sin(t * 0.3 + homes[i].seedY) * (h * 0.32) - TILE / 2;
          }
          tx = Math.max(4, Math.min(w - TILE - 4, tx));
          ty = Math.max(4, Math.min(h - TILE - 4, ty));
        } else {
          if (activeIdx.has(i)) {
            const k = active.indexOf(s);
            tx = x0 + (k % cols) * CELL_W;
            ty = 20 + Math.floor(k / cols) * CELL_H;
          } else {
            tx = w / 2 - TILE / 2;
            ty = h + 80;
            visible = false;
          }
        }

        const ease = reduced ? 1 : m === "playground" ? 0.035 + (i % 5) * 0.012 : 0.12;
        p.x += (tx - p.x) * ease;
        p.y += (ty - p.y) * ease;
        tile.style.transform = `translate3d(${p.x}px, ${p.y}px, 0)`;
        tile.style.opacity = visible ? "1" : "0";
        if (label) {
          label.style.transform = `translate3d(${p.x + TILE / 2 - 44}px, ${p.y + TILE + 6}px, 0)`;
          label.style.opacity = m !== "playground" && visible ? "1" : "0";
        }
      });
      raf = requestAnimationFrame(frame);
    };
    raf = requestAnimationFrame(frame);

    return () => {
      window.removeEventListener("mousemove", onMove);
      cancelAnimationFrame(raf);
    };
  }, [homes, offsets]);

  const buttons: Mode[] = ["playground", ...skillCategories];

  return (
    <Section id="stack" num="05" title="Tech Stack">
      <div className="mb-6 flex flex-wrap gap-2">
        {buttons.map((b) => (
          <button
            key={b}
            onClick={() => setMode(b)}
            aria-pressed={mode === b}
            className={`rounded-full border px-4 py-1.5 font-mono text-xs transition-colors ${
              mode === b
                ? "border-accent bg-accent text-paper"
                : "border-rule text-faint hover:border-accent hover:text-accent"
            }`}
          >
            {b === "playground" ? "Playground" : b}
          </button>
        ))}
      </div>

      <div
        ref={containerRef}
        className="relative overflow-hidden rounded-2xl border border-rule transition-[height] duration-300"
        style={{ height: containerH }}
      >
        {skills.map((s, i) => (
          <React.Fragment key={s.name}>
            <div
              ref={(el) => (tileRefs.current[i] = el)}
              className="absolute left-0 top-0 flex items-center justify-center rounded-2xl bg-ink shadow-sm will-change-transform"
              style={{ width: TILE, height: TILE, opacity: 0 }}
              title={s.name}
            >
              {s.iconUrl ? (
                <img
                  src={s.iconUrl}
                  alt={s.name}
                  className="h-9 w-9"
                  draggable={false}
                  onError={(e) => {
                    const img = e.target as HTMLImageElement;
                    img.outerHTML = `<span class="font-serif italic text-2xl text-paper">${s.name[0]}</span>`;
                  }}
                />
              ) : (
                <span className="font-serif text-2xl italic text-paper">{s.name[0]}</span>
              )}
            </div>
            <div
              ref={(el) => (labelRefs.current[i] = el)}
              className="pointer-events-none absolute left-0 top-0 w-[88px] text-center font-mono text-[11px] leading-tight text-faint transition-opacity"
              style={{ opacity: 0 }}
            >
              {s.name}
            </div>
          </React.Fragment>
        ))}

        {mode === "playground" && (
          <p className="pointer-events-none absolute bottom-4 left-0 right-0 text-center font-mono text-xs text-faint">
            move your cursor · pick a category to sort
          </p>
        )}
      </div>
    </Section>
  );
};

export default Stack;
