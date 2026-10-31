"use client";

import { useEffect, useRef } from "react";
import { cn } from "@/lib/utils";

type Props = React.HTMLAttributes<HTMLDivElement> & { delay?: number };

/**
 * Lifts its children into view once. Visible by default: the hiding rule only
 * applies under html.js (globals.css), so the page never ships blank if a script fails.
 */
export default function Reveal({ delay = 0, className, style, children, ...rest }: Props) {
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    const io = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          el.classList.add("is-in");
          io.disconnect();
        }
      },
      { rootMargin: "0px 0px -10% 0px" },
    );
    io.observe(el);
    return () => io.disconnect();
  }, []);

  return (
    <div ref={ref} className={cn("reveal", className)} style={{ ...style, ["--d" as string]: `${delay}s` }} {...rest}>
      {children}
    </div>
  );
}
