"use client";

import { useEffect, useState } from "react";

/** Live clock for a given IANA timezone, e.g. "Australia/Melbourne". */
export function useLocalTime(timeZone: string) {
  const [time, setTime] = useState<string | null>(null);

  useEffect(() => {
    const fmt = new Intl.DateTimeFormat("en-AU", {
      timeZone,
      hour: "numeric",
      minute: "2-digit",
      hour12: true,
    });
    const tick = () => setTime(fmt.format(new Date()).toLowerCase());
    tick();
    const id = window.setInterval(tick, 15_000);
    return () => window.clearInterval(id);
  }, [timeZone]);

  return time;
}

/** True once the page has scrolled past `offset` pixels. */
export function useScrolled(offset = 8) {
  const [scrolled, setScrolled] = useState(false);
  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > offset);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, [offset]);
  return scrolled;
}

/** "⌘" on Apple platforms, "Ctrl" elsewhere. */
export function useModKey() {
  const [mod, setMod] = useState("Ctrl");
  useEffect(() => {
    if (/Mac|iPhone|iPad/i.test(navigator.platform || navigator.userAgent)) setMod("⌘");
  }, []);
  return mod;
}

/**
 * prefers-reduced-motion, read after hydration. Motion's own hook answers on the
 * first client render, which can differ from the server's HTML and throw a
 * hydration error (React #418) for visitors who reduce motion.
 */
export function useReducedMotionSafe() {
  const [reduce, setReduce] = useState(false);
  useEffect(() => {
    const mq = window.matchMedia("(prefers-reduced-motion: reduce)");
    const update = () => setReduce(mq.matches);
    update();
    mq.addEventListener("change", update);
    return () => mq.removeEventListener("change", update);
  }, []);
  return reduce;
}
