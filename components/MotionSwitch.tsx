"use client";

import { FiPause, FiPlay } from "react-icons/fi";
import { useMotionPause } from "@/context/MotionContext";

/** Pauses every looping animation on the site: the cars, the trains, the galaxy, the descent line. */
export default function MotionSwitch() {
  const { paused, togglePaused } = useMotionPause();
  const label = paused ? "Play animations" : "Pause animations";

  return (
    <button
      type="button"
      onClick={togglePaused}
      aria-label={label}
      aria-pressed={paused}
      title={label}
      className="grid h-9 w-9 place-items-center rounded-full border border-line bg-surface/70 text-muted transition-colors hover:text-fg active:translate-y-px"
    >
      {paused ? <FiPlay size={14} aria-hidden /> : <FiPause size={14} aria-hidden />}
    </button>
  );
}
