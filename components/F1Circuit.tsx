"use client";

import { useEffect, useRef, useState } from "react";
import { useInView, useReducedMotion } from "motion/react";
import F1Car from "./F1Car";
import { cn } from "@/lib/utils";

// An original circuit (not a real track): long main straight, a hairpin and a twisty middle sector.
const TRACK =
  "M70 160 L300 160 C360 160 385 120 360 85 C345 62 310 62 290 75 L250 100 C232 112 215 100 222 80 L232 52 C240 30 220 18 198 26 L120 52 C98 60 92 80 75 86 C52 94 40 112 42 130 C44 150 54 160 70 160 Z";

const LAP_SECONDS = 6;
const TOTAL_LAPS = 57;
const PIT_EVERY = 5;

/** A car lapping a circuit, with a race-engineer HUD counting down to the next pit stop. */
export default function F1Circuit() {
  const ref = useRef<HTMLDivElement>(null);
  const motionRef = useRef<SVGAnimateMotionElement>(null);
  const inView = useInView(ref, { once: true, margin: "-10% 0px" });
  const reduce = useReducedMotion();
  const [lap, setLap] = useState(1);

  useEffect(() => {
    if (!inView || reduce) return;
    motionRef.current?.beginElement();
    const id = window.setInterval(() => setLap((l) => (l % TOTAL_LAPS) + 1), LAP_SECONDS * 1000);
    return () => window.clearInterval(id);
  }, [inView, reduce]);

  const lapsToBox = PIT_EVERY - ((lap - 1) % PIT_EVERY) - 1;
  const boxing = lapsToBox === 0;

  return (
    <div ref={ref} className="relative">
      <div className="flex items-center justify-between font-mono text-[0.68rem] uppercase tracking-widest text-muted">
        <span>
          Lap <span className="text-fg tabular-nums">{String(lap).padStart(2, "0")}</span>/{TOTAL_LAPS}
        </span>
        <span className={cn("rounded-full px-2 py-0.5 transition-colors", boxing ? "animate-pulse bg-accent text-on-accent" : "")}>
          {boxing ? "Box, box" : (
            <>
              Box in <span className="text-fg tabular-nums">{lapsToBox}</span>
            </>
          )}
        </span>
      </div>

      <svg viewBox="20 10 380 180" className="mt-3 h-auto w-full" role="img" aria-label="A Formula 1 car lapping a race circuit">
        <defs>
          <pattern id="chequer" width="4" height="4" patternUnits="userSpaceOnUse">
            <rect width="4" height="4" className="fill-bg" />
            <rect width="2" height="2" className="fill-fg" />
            <rect x="2" y="2" width="2" height="2" className="fill-fg" />
          </pattern>
        </defs>
        {/* run-off and tarmac */}
        <path d={TRACK} fill="none" className="stroke-line" strokeWidth={22} strokeLinejoin="round" opacity={0.45} />
        <path d={TRACK} fill="none" className="stroke-elev" strokeWidth={16} strokeLinejoin="round" />
        <path d={TRACK} fill="none" className="stroke-muted" strokeWidth={0.8} strokeDasharray="3 6" opacity={0.6} />
        {/* start / finish */}
        <rect x={67} y={152} width={6} height={16} fill="url(#chequer)" />
        <text x={70} y={182} textAnchor="middle" className="fill-muted font-mono" fontSize={7} letterSpacing={1}>
          S/F
        </text>
        {/* the car */}
        <g transform={reduce || !inView ? "translate(135 160)" : undefined}>
          <F1Car scale={0.55} />
          {!reduce && (
            <animateMotion ref={motionRef} dur={`${LAP_SECONDS}s`} begin="indefinite" repeatCount="indefinite" rotate="auto" path={TRACK} />
          )}
        </g>
      </svg>
    </div>
  );
}
