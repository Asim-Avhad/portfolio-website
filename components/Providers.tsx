"use client";

import { MotionConfig } from "motion/react";
import ThemeContextProvider from "@/context/ThemeContext";
import ActiveSectionContextProvider from "@/context/ActiveSectionContext";

export default function Providers({ children }: { children: React.ReactNode }) {
  return (
    <ThemeContextProvider>
      <ActiveSectionContextProvider>
        <MotionConfig reducedMotion="user">{children}</MotionConfig>
      </ActiveSectionContextProvider>
    </ThemeContextProvider>
  );
}
