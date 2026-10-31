"use client";

import { useRef } from "react";
import { motion, useInView } from "motion/react";
import F1Car from "./F1Car";
import { useReducedMotionSafe } from "@/lib/hooks";

/** A chequered strip at the bottom of the page; the car crosses it once when it scrolls into view. */
export default function FinishLine() {
  const ref = useRef<HTMLDivElement>(null);
  const inView = useInView(ref, { once: true, margin: "0px 0px -10% 0px" });
  const reduce = useReducedMotionSafe();

  return (
    <div ref={ref} className="relative h-14 overflow-hidden border-t border-line" aria-hidden>
      {/* chequered flag strip */}
      <div
        className="absolute inset-x-0 bottom-0 h-3 opacity-[0.22]"
        style={{
          backgroundImage: "repeating-conic-gradient(rgb(var(--fg)) 0 25%, transparent 0 50%)",
          backgroundSize: "12px 12px",
        }}
      />
      <motion.div
        className="absolute inset-x-0 top-1"
        initial={{ x: reduce ? "70%" : "-20%" }}
        animate={inView ? { x: reduce ? "70%" : "110%" } : undefined}
        transition={{ duration: 2.4, ease: [0.65, 0, 0.35, 1], delay: 0.3 }}
      >
        <div className="flex w-fit items-center">
          <span className="h-px w-28 bg-gradient-to-r from-transparent to-accent" />
          <svg viewBox="-32 -15 64 30" className="h-8 w-[4.3rem]">
            <F1Car />
          </svg>
        </div>
      </motion.div>
    </div>
  );
}
