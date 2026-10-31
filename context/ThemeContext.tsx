"use client";

import React, { createContext, useCallback, useContext, useEffect, useState } from "react";

export type Theme = "light" | "dark";

type ThemeContextType = {
  theme: Theme;
  toggleTheme: () => void;
};

const ThemeContext = createContext<ThemeContextType | null>(null);

/**
 * Runs before React hydrates (inlined in <head>) so the right theme paints
 * on the very first frame, with no flash of the wrong colours.
 */
export const themeScript = `(function(){try{var t=localStorage.getItem('theme');if(t!=='light'&&t!=='dark'){t=window.matchMedia('(prefers-color-scheme: light)').matches?'light':'dark'}var d=document.documentElement;d.classList.remove('light','dark');d.classList.add(t,'js');if(localStorage.getItem('motion')==='paused')d.setAttribute('data-motion','paused')}catch(e){document.documentElement.classList.add('dark','js')}})();`;

export default function ThemeContextProvider({ children }: { children: React.ReactNode }) {
  const [theme, setTheme] = useState<Theme>("dark");

  useEffect(() => {
    setTheme(document.documentElement.classList.contains("light") ? "light" : "dark");
  }, []);

  const toggleTheme = useCallback(() => {
    setTheme((prev) => {
      const next: Theme = prev === "dark" ? "light" : "dark";
      const root = document.documentElement;
      root.classList.remove("light", "dark");
      root.classList.add(next);
      try {
        localStorage.setItem("theme", next);
      } catch {
        /* storage unavailable; theme still applies for this visit */
      }
      return next;
    });
  }, []);

  return <ThemeContext.Provider value={{ theme, toggleTheme }}>{children}</ThemeContext.Provider>;
}

export function useTheme() {
  const context = useContext(ThemeContext);
  if (!context) throw new Error("useTheme must be used within a ThemeContextProvider");
  return context;
}
