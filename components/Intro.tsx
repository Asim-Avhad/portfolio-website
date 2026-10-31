"use client";

import { useEffect, useState } from "react";
import { FiGithub, FiLinkedin, FiMail } from "react-icons/fi";
import { heroStats, site } from "@/lib/data";
import { useMotionPause } from "@/context/MotionContext";
import Contours from "./Contours";

// The old site's typewriter, kept as a small homage.
const commands = [
  "python train.py --epochs 30",
  "retrieve(query, k=5)",
  "plan(trains=152)",
  "crafting-solutions --on-the-go",
];

function Terminal() {
  const [line, setLine] = useState(0);
  const [chars, setChars] = useState(0);
  const { paused } = useMotionPause();

  useEffect(() => {
    if (paused) return;
    const full = commands[line];
    if (chars < full.length) {
      const t = window.setTimeout(() => setChars((c) => c + 1), 38);
      return () => window.clearTimeout(t);
    }
    const t = window.setTimeout(() => {
      setLine((l) => (l + 1) % commands.length);
      setChars(0);
    }, 2200);
    return () => window.clearTimeout(t);
  }, [chars, line, paused]);

  return (
    <p className="whitespace-nowrap text-[0.85rem] text-muted" aria-hidden>
      <code className="font-mono">
      <span className="text-accent-ink">~/asim</span> <span className="opacity-60">❯</span> {commands[line].slice(0, chars)}
      <span className="ml-0.5 inline-block h-[1.05em] w-[0.55em] translate-y-[0.18em] animate-pulse bg-accent" />
      </code>
    </p>
  );
}


export default function Intro() {
  return (
    <section aria-labelledby="hero-title" className="relative overflow-hidden pt-28 sm:pt-36">
      <Contours className="bottom-[9.5rem] opacity-60 md:bottom-[11rem] [mask-image:linear-gradient(180deg,rgb(var(--fg))_55%,transparent)] md:opacity-100 md:[mask-image:linear-gradient(90deg,transparent_15%,rgb(var(--fg))_55%)]" />

      <div className="shell relative">
        <h1
          id="hero-title"
          className="max-w-[14ch] font-display text-[3.5rem] leading-[0.95] tracking-[-0.02em] sm:text-[5.25rem] lg:text-[6.75rem]"
        >
          <span className="sr-only">Asim Avhad. </span>
          <span className="rise block" style={{ ["--d" as string]: "0.05s" }}>
            I teach machines
          </span>{" "}
          {/* The one accented line on the site, on its own line (waived in globals.css). */}
          <span className="rise block italic text-accent-ink" style={{ ["--d" as string]: "0.2s" }}>
            to read, see &amp; plan.
          </span>
        </h1>

        <div className="rise mt-8 max-w-xl" style={{ ["--d" as string]: "0.4s" }}>
          <p className="text-[1.15rem] leading-relaxed text-muted sm:text-xl">{site.intro}</p>

          <div className="mt-9 flex flex-wrap items-center gap-3">
            <a
              href="#work"
              className="inline-flex h-12 items-center rounded-full bg-accent px-6 font-medium text-on-accent transition hover:brightness-110 active:translate-y-px"
            >
              See my work
            </a>
            <a
              href={site.resume}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex h-12 items-center rounded-full border border-line px-6 font-medium transition hover:border-fg/40 active:translate-y-px"
            >
              Résumé
            </a>
            <div className="flex items-center gap-1 pl-1">
              {[
                { href: site.github, label: "GitHub", icon: <FiGithub aria-hidden /> },
                { href: site.linkedin, label: "LinkedIn", icon: <FiLinkedin aria-hidden /> },
                { href: `mailto:${site.email}`, label: "Email", icon: <FiMail aria-hidden /> },
              ].map((s) => (
                <a
                  key={s.label}
                  href={s.href}
                  target={s.href.startsWith("http") ? "_blank" : undefined}
                  rel="noopener noreferrer"
                  aria-label={s.label}
                  className="grid h-12 w-12 place-items-center rounded-full text-[1.1rem] text-muted transition hover:bg-surface hover:text-fg active:translate-y-px"
                >
                  {s.icon}
                </a>
              ))}
            </div>
          </div>

          <div className="mt-10">
            <Terminal />
          </div>
        </div>

        <dl className="rise relative mt-16 grid grid-cols-2 border-t border-line md:mt-20 md:grid-cols-4" style={{ ["--d" as string]: "0.6s" }}>
          {heroStats.map((s, i) => (
            <div
              key={s.label}
              className={`py-6 pr-4 md:py-8 ${i % 2 === 1 ? "pl-4 md:pl-6" : ""} ${i >= 2 ? "border-t border-line md:border-t-0" : ""} ${i > 0 ? "md:border-l md:border-line md:pl-6" : ""} ${i % 2 === 1 ? "border-l border-line" : ""}`}
            >
              <dt className="sr-only">{s.label}</dt>
              <dd>
                <span className="figures block font-display text-5xl leading-none sm:text-6xl">{s.value}</span>
                <span className="mt-3 block max-w-[22ch] text-[0.88rem] leading-snug text-muted">{s.label}</span>
              </dd>
            </div>
          ))}
        </dl>
      </div>
    </section>
  );
}
