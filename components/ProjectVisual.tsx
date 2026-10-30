"use client";

import { useEffect, useMemo, useState } from "react";
import { motion, useInView, useReducedMotion } from "motion/react";
import { useRef } from "react";
import type { Visual } from "@/lib/data";
import { cn } from "@/lib/utils";

/* ------------------------------------------------------------------ */
/* Support Ticket Copilot: the request flowing through the pipeline   */
/* ------------------------------------------------------------------ */

const steps = [
  { tag: "input", title: "Customer message", body: "“I think I was charged twice for my coffee this morning?”" },
  { tag: "classify", title: "Intent · fine-tuned DistilBERT", body: "transaction_charged_twice", mono: true },
  { tag: "retrieve", title: "BM25 ⊕ embeddings → RRF", body: "help-centre §4.2 · §4.5 · §7.1", mono: true },
  { tag: "draft", title: "Gemini / Ollama drafts reply", body: "“…a duplicate charge usually drops off within 2 days [1]…”" },
  { tag: "guard", title: "Guardrails", body: "confident → send  ·  unsure → human  ·  fraud → escalate", mono: true },
];

function Pipeline({ active }: { active: boolean }) {
  const [step, setStep] = useState(0);
  const reduce = useReducedMotion();

  useEffect(() => {
    if (!active || reduce) return;
    const id = window.setInterval(() => setStep((s) => (s + 1) % steps.length), 1500);
    return () => window.clearInterval(id);
  }, [active, reduce]);

  return (
    <ol className="relative flex flex-col gap-2.5">
      <span className="absolute bottom-6 left-[1.05rem] top-6 w-px bg-line" aria-hidden />
      {steps.map((s, i) => {
        const on = reduce || i === step;
        const done = i < step;
        return (
          <li key={s.tag} className="relative flex items-start gap-3">
            <span
              className={cn(
                "relative z-10 mt-2.5 grid h-[0.9rem] w-[0.9rem] shrink-0 translate-x-[0.6rem] place-items-center rounded-full border transition-colors duration-500",
                on ? "border-accent bg-accent" : done ? "border-accent bg-bg" : "border-line bg-bg",
              )}
            />
            <div
              className={cn(
                "ml-3 flex-1 rounded-xl border px-3.5 py-2.5 transition-all duration-500",
                on ? "border-accent/60 bg-accent/[0.08]" : "border-line bg-bg/60",
              )}
            >
              <div className="flex items-center justify-between gap-3">
                <p className="text-[0.8rem] font-medium">{s.title}</p>
                <span className="font-mono text-[0.62rem] uppercase tracking-widest text-muted">{s.tag}</span>
              </div>
              <p className={cn("mt-1 text-[0.78rem] leading-snug text-muted", s.mono && "font-mono text-[0.72rem]")}>{s.body}</p>
            </div>
          </li>
        );
      })}
    </ol>
  );
}

/* ------------------------------------------------------------------ */
/* Flatland: trains on a shared grid, planned in space-time           */
/* ------------------------------------------------------------------ */

const COLS = 16;
const ROWS = 10;
const CELL = 30;
// Class names are spelled out in full so Tailwind can see them.
const routes: { pts: [number, number][]; stroke: string; fill: string; dur: number }[] = [
  { pts: [[0, 2], [6, 2], [6, 6], [15, 6]], stroke: "stroke-accent", fill: "fill-accent", dur: 6 },
  { pts: [[2, 9], [2, 4], [10, 4], [10, 0]], stroke: "stroke-fg", fill: "fill-fg", dur: 7 },
  { pts: [[15, 1], [12, 1], [12, 8], [4, 8]], stroke: "stroke-muted", fill: "fill-muted", dur: 6.5 },
  { pts: [[0, 7], [8, 7], [8, 3], [14, 3], [14, 9]], stroke: "stroke-fg/50", fill: "fill-fg/50", dur: 8 },
];

const toPath = (pts: [number, number][]) =>
  "M" + pts.map(([x, y]) => `${x * CELL + CELL / 2} ${y * CELL + CELL / 2}`).join(" L");

function Rail({ active }: { active: boolean }) {
  const reduce = useReducedMotion();
  const W = COLS * CELL;
  const H = ROWS * CELL;
  return (
    <div>
      <svg viewBox={`0 0 ${W} ${H}`} className="h-auto w-full" role="img" aria-label="Four trains routed across a shared rail grid without collisions">
        {Array.from({ length: COLS * ROWS }).map((_, i) => (
          <circle key={i} cx={(i % COLS) * CELL + CELL / 2} cy={Math.floor(i / COLS) * CELL + CELL / 2} r={1.2} className="fill-muted/40" />
        ))}
        {routes.map((r, i) => {
          const d = toPath(r.pts);
          return (
            <g key={i}>
              <path d={d} fill="none" className="stroke-line" strokeWidth={6} strokeLinecap="round" strokeLinejoin="round" />
              <motion.path
                d={d}
                fill="none"
                className={r.stroke}
                strokeWidth={2}
                strokeLinecap="round"
                strokeLinejoin="round"
                initial={{ pathLength: reduce ? 1 : 0 }}
                animate={active ? { pathLength: 1 } : undefined}
                transition={{ duration: 1.6, delay: 0.25 * i, ease: [0.22, 1, 0.36, 1] }}
              />
              <circle cx={r.pts[0][0] * CELL + CELL / 2} cy={r.pts[0][1] * CELL + CELL / 2} r={4} className="fill-bg stroke-muted" strokeWidth={1.5} />
              <rect
                x={r.pts[r.pts.length - 1][0] * CELL + CELL / 2 - 4.5}
                y={r.pts[r.pts.length - 1][1] * CELL + CELL / 2 - 4.5}
                width={9}
                height={9}
                className="fill-none stroke-muted"
                strokeWidth={1.5}
              />
              {active && !reduce && (
                <rect x={-5} y={-5} width={10} height={10} rx={2} className={r.fill}>
                  <animateMotion dur={`${r.dur}s`} repeatCount="indefinite" path={d} begin={`${0.4 * i}s`} />
                </rect>
              )}
            </g>
          );
        })}
      </svg>
      <div className="mt-4 flex flex-wrap items-center gap-x-5 gap-y-2 font-mono text-[0.68rem] uppercase tracking-widest text-muted">
        <span className="flex items-center gap-2">
          <span className="h-2 w-2 rounded-full border border-muted" /> origin
        </span>
        <span className="flex items-center gap-2">
          <span className="h-2 w-2 border border-muted" /> target
        </span>
        <span>space-time A* · LNS repair</span>
      </div>
    </div>
  );
}

/* ------------------------------------------------------------------ */
/* Galaxy: a spiral, a bounding box, and the CNN → MLP head           */
/* ------------------------------------------------------------------ */

function mulberry32(seed: number) {
  return () => {
    seed |= 0;
    seed = (seed + 0x6d2b79f5) | 0;
    let t = Math.imul(seed ^ (seed >>> 15), 1 | seed);
    t = (t + Math.imul(t ^ (t >>> 7), 61 | t)) ^ t;
    return ((t ^ (t >>> 14)) >>> 0) / 4294967296;
  };
}

function Galaxy({ active }: { active: boolean }) {
  const reduce = useReducedMotion();
  const stars = useMemo(() => {
    const rand = mulberry32(42);
    const pts: { x: number; y: number; r: number; o: number }[] = [];
    for (let i = 0; i < 520; i++) {
      const arm = i % 2;
      const t = rand() * 4.2;
      const radius = 6 + t * 26;
      const angle = t * 1.55 + arm * Math.PI + (rand() - 0.5) * 0.55;
      const spread = (rand() - 0.5) * (6 + t * 4);
      pts.push({
        x: Math.cos(angle) * radius + spread,
        y: (Math.sin(angle) * radius + spread) * 0.62,
        r: rand() * 1.3 + 0.35,
        o: Math.max(0.25, 1 - t / 4.6) * (0.55 + rand() * 0.45),
      });
    }
    return pts;
  }, []);

  return (
    <div className="grid gap-5">
      <div className="relative">
        <svg viewBox="-160 -90 320 180" className="h-auto w-full" role="img" aria-label="A spiral galaxy inside a detection box labelled with its predicted class">
          <motion.g
            animate={active && !reduce ? { rotate: 360 } : undefined}
            transition={{ duration: 120, repeat: Infinity, ease: "linear" }}
            style={{ originX: "0px", originY: "0px" }}
          >
            {stars.map((s, i) => (
              <circle key={i} cx={s.x} cy={s.y} r={s.r} className="fill-fg" opacity={s.o} />
            ))}
            <circle r={7} className="fill-accent" opacity={0.9} />
            <circle r={16} className="fill-accent" opacity={0.12} />
          </motion.g>
          <g className="stroke-accent" strokeWidth={1} fill="none">
            <path d="M-118 -70 h14 M-118 -70 v14 M118 -70 h-14 M118 -70 v14 M-118 70 h14 M-118 70 v-14 M118 70 h-14 M118 70 v-14" />
          </g>
          <g className="fill-accent font-mono" fontSize={8} letterSpacing={0.8}>
            <text x={-118} y={-76}>class: spiral</text>
            <text x={118} y={82} textAnchor="end">
              redshift: ẑ
            </text>
          </g>
        </svg>
      </div>

      <div className="flex items-center justify-between gap-2 rounded-xl border border-line bg-bg/60 px-4 py-3">
        <div className="flex items-end gap-1.5" aria-hidden>
          {[28, 24, 20, 16, 12].map((h, i) => (
            <span key={i} className="block w-2.5 rounded-sm border border-fg/30 bg-fg/[0.06]" style={{ height: h }} />
          ))}
        </div>
        <span className="font-mono text-[0.68rem] uppercase tracking-widest text-muted">CNN features</span>
        <span className="text-accent-ink">→</span>
        <div className="flex flex-col gap-1" aria-hidden>
          {[0, 1, 2].map((r) => (
            <div key={r} className="flex gap-1">
              {[0, 1, 2].map((c) => (
                <span key={c} className="h-1.5 w-1.5 rounded-full bg-accent/70" />
              ))}
            </div>
          ))}
        </div>
        <span className="font-mono text-[0.68rem] uppercase tracking-widest text-muted">MLP → z</span>
      </div>
    </div>
  );
}

export default function ProjectVisual({ type }: { type: Visual }) {
  const ref = useRef<HTMLDivElement>(null);
  const inView = useInView(ref, { once: true, margin: "-15% 0px" });

  return (
    <div ref={ref} className="w-full">
      {type === "pipeline" && <Pipeline active={inView} />}
      {type === "rail" && <Rail active={inView} />}
      {type === "galaxy" && <Galaxy active={inView} />}
    </div>
  );
}
