"use client";

import React, { createContext, useCallback, useContext, useEffect, useState } from "react";

type MotionContextType = {
  paused: boolean;
  togglePaused: () => void;
};

const MotionContext = createContext<MotionContextType | null>(null);

/** Freeze every SMIL animation (the trains, the cars, the descent dot) on the page. */
function setSvgClocks(paused: boolean) {
  document.querySelectorAll<SVGSVGElement>("svg").forEach((svg) => {
    if (paused) svg.pauseAnimations();
    else svg.unpauseAnimations();
  });
}

/**
 * One switch for every looping animation on the site (WCAG 2.2.2: anything
 * moving for more than five seconds can be paused). CSS loops stop through
 * html[data-motion="paused"]; SVG loops through pauseAnimations(); the
 * interval-driven diagrams read `paused` directly.
 */
export default function MotionContextProvider({ children }: { children: React.ReactNode }) {
  const [paused, setPaused] = useState(false);

  useEffect(() => {
    const initial = document.documentElement.getAttribute("data-motion") === "paused";
    setPaused(initial);
    if (initial) setSvgClocks(true);
  }, []);

  const togglePaused = useCallback(() => {
    setPaused((prev) => {
      const next = !prev;
      const root = document.documentElement;
      if (next) root.setAttribute("data-motion", "paused");
      else root.removeAttribute("data-motion");
      setSvgClocks(next);
      try {
        localStorage.setItem("motion", next ? "paused" : "running");
      } catch {
        /* storage unavailable; the choice still holds for this visit */
      }
      return next;
    });
  }, []);

  return <MotionContext.Provider value={{ paused, togglePaused }}>{children}</MotionContext.Provider>;
}

export function useMotionPause() {
  const context = useContext(MotionContext);
  if (!context) throw new Error("useMotionPause must be used within MotionContextProvider");
  return context;
}

/** Hover or focus on a looping diagram pauses it, on top of the site-wide switch. */
export function useHoverPause<T extends HTMLElement>() {
  const { paused } = useMotionPause();
  const [held, setHeld] = useState(false);
  const bind = {
    onMouseEnter: (e: React.MouseEvent<T>) => {
      setHeld(true);
      e.currentTarget.querySelectorAll("svg").forEach((s) => s.pauseAnimations());
    },
    onMouseLeave: (e: React.MouseEvent<T>) => {
      setHeld(false);
      if (!paused) e.currentTarget.querySelectorAll("svg").forEach((s) => s.unpauseAnimations());
    },
    onFocus: (e: React.FocusEvent<T>) => {
      setHeld(true);
      e.currentTarget.querySelectorAll("svg").forEach((s) => s.pauseAnimations());
    },
    onBlur: (e: React.FocusEvent<T>) => {
      setHeld(false);
      if (!paused) e.currentTarget.querySelectorAll("svg").forEach((s) => s.unpauseAnimations());
    },
  };
  return { stopped: paused || held, bind };
}
