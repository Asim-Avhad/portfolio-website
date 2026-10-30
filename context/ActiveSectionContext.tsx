"use client";

import React, { createContext, useContext, useEffect, useState } from "react";
import { links } from "@/lib/data";
import type { SectionName } from "@/lib/types";

type ActiveSectionContextType = {
  activeSection: SectionName | null;
};

const ActiveSectionContext = createContext<ActiveSectionContextType | null>(null);

/** Tracks which section is in the middle of the viewport so the nav can highlight it. */
export default function ActiveSectionContextProvider({ children }: { children: React.ReactNode }) {
  const [activeSection, setActiveSection] = useState<SectionName | null>(null);

  useEffect(() => {
    const sections = links
      .map((l) => ({ name: l.name, el: document.querySelector<HTMLElement>(l.hash) }))
      .filter((s): s is { name: SectionName; el: HTMLElement } => Boolean(s.el));

    const observer = new IntersectionObserver(
      (entries) => {
        for (const entry of entries) {
          if (entry.isIntersecting) {
            const match = sections.find((s) => s.el === entry.target);
            if (match) setActiveSection(match.name);
          }
        }
      },
      { rootMargin: "-45% 0px -50% 0px" },
    );

    sections.forEach((s) => observer.observe(s.el));

    const onScroll = () => {
      if (window.scrollY < window.innerHeight * 0.5) setActiveSection(null);
    };
    window.addEventListener("scroll", onScroll, { passive: true });

    return () => {
      observer.disconnect();
      window.removeEventListener("scroll", onScroll);
    };
  }, []);

  return <ActiveSectionContext.Provider value={{ activeSection }}>{children}</ActiveSectionContext.Provider>;
}

export function useActiveSectionContext() {
  const context = useContext(ActiveSectionContext);
  if (!context) throw new Error("useActiveSectionContext must be used within ActiveSectionContextProvider");
  return context;
}
