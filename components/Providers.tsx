"use client";

import { MotionConfig } from "motion/react";
import ThemeContextProvider from "@/context/ThemeContext";
import ActiveSectionContextProvider from "@/context/ActiveSectionContext";
import MotionContextProvider from "@/context/MotionContext";

export default function Providers({ children }: { children: React.ReactNode }) {
  return (
    <ThemeContextProvider>
      <MotionContextProvider>
        <ActiveSectionContextProvider>
          <MotionConfig reducedMotion="user">{children}</MotionConfig>
        </ActiveSectionContextProvider>
      </MotionContextProvider>
    </ThemeContextProvider>
  );
}
