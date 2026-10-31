"use client";

import { motion } from "motion/react";
import { useReducedMotionSafe } from "@/lib/hooks";

// A gradient-descent trajectory computed on the same height field that
// generated /public/contours.svg, a nod to both trekking and loss landscapes.
const DESCENT = "M1000 380 L1004 392 L1006 402 L1008 412 L1008 422 L1008 432 L1007 442 L1005 451 L1002 461 L998 470 L994 480 L990 489 L985 497 L980 506 L974 514 L968 522 L962 530 L955 537 L948 544 L941 551 L933 558 L925 564 L917 570 L909 575 L900 580 L892 585 L883 589 L873 594 L864 597 L855 601 L845 604 L836 607 L826 610 L817 613 L807 616 L798 619 L788 621 L778 624 L769 626 L759 628 L749 631 L739 633 L729 635 L720 636 L710 638 L700 639 L690 641 L680 642 L670 642 L660 642 L650 642 L641 641 L651 639 L660 641 L650 640";

export default function Contours({ className = "" }: { className?: string }) {
  const reduce = useReducedMotionSafe();

  return (
    <div aria-hidden className={`pointer-events-none absolute inset-0 overflow-hidden ${className}`}>
      <div
        className="absolute inset-0 bg-fg/[0.13]"
        style={{
          WebkitMaskImage: "url(/contours.svg)",
          maskImage: "url(/contours.svg)",
          WebkitMaskSize: "cover",
          maskSize: "cover",
          WebkitMaskPosition: "center",
          maskPosition: "center",
          WebkitMaskRepeat: "no-repeat",
          maskRepeat: "no-repeat",
        }}
      />
      <svg viewBox="0 0 1200 900" preserveAspectRatio="xMidYMid slice" className="absolute inset-0 hidden h-full w-full md:block">
        <motion.path
          id="descent"
          d={DESCENT}
          fill="none"
          className="stroke-accent"
          strokeWidth={1.5}
          strokeOpacity={0.75}
          strokeLinecap="round"
          vectorEffect="non-scaling-stroke"
          initial={{ pathLength: reduce ? 1 : 0, opacity: 0 }}
          animate={{ pathLength: 1, opacity: 1 }}
          transition={{ duration: 2.4, delay: 0.6, ease: [0.22, 1, 0.36, 1] }}
        />
        {!reduce && (
          <circle r="5" className="fill-accent">
            <animateMotion dur="7s" begin="0s" repeatCount="indefinite" path={DESCENT} keyPoints="0;1;1" keyTimes="0;0.7;1" calcMode="linear" />
          </circle>
        )}
        <g className="fill-muted font-mono" fontSize="13">
          <text x="1014" y="372">θ₀</text>
          <text x="610" y="672">argmin</text>
        </g>
        <circle cx="650" cy="640" r="9" fill="none" className="stroke-accent" strokeWidth="1.5" vectorEffect="non-scaling-stroke" />
      </svg>
    </div>
  );
}
