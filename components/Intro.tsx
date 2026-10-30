"use client";

import { useEffect, useState } from "react";
import { motion } from "motion/react";
import { FiArrowDown, FiArrowUpRight, FiGithub, FiLinkedin, FiMail } from "react-icons/fi";
import { heroStats, site } from "@/lib/data";
import { useLocalTime } from "@/lib/hooks";
import Contours from "./Contours";

const ease = [0.22, 1, 0.36, 1] as const;

// The old site's typewriter, kept as a small homage.
const commands = [
  "python train.py --epochs 30 --amp",
  "retrieve(query, k=5, fuse='rrf')",
  "plan(trains=152, algo='space-time A*')",
  "crafting-solutions --on-the-go",
];

function Terminal() {
  const [line, setLine] = useState(0);
  const [chars, setChars] = useState(0);

  useEffect(() => {
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
  }, [chars, line]);

  return (
    <p className="font-mono text-[0.8rem] text-muted" aria-hidden>
      <span className="text-accent-ink">~/asim</span> <span className="opacity-60">❯</span> {commands[line].slice(0, chars)}
      <span className="ml-0.5 inline-block h-[1.05em] w-[0.55em] translate-y-[0.18em] animate-pulse bg-accent" />
    </p>
  );
}

const headline: { text: string; em?: boolean }[] = [
  { text: "I" },
  { text: "teach" },
  { text: "machines" },
  { text: "to" },
  { text: "read,", em: true },
  { text: "see", em: true },
  { text: "&" },
  { text: "plan.", em: true },
];

export default function Intro() {
  const time = useLocalTime(site.timezone);

  return (
    <section aria-labelledby="hero-title" className="relative overflow-hidden pt-28 sm:pt-32">
      <Contours className="opacity-60 [mask-image:linear-gradient(180deg,#000_55%,transparent)] md:opacity-100 md:[mask-image:linear-gradient(90deg,transparent_15%,#000_55%)]" />

      <div className="shell relative">
        <motion.div
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, ease }}
          className="flex flex-wrap items-center gap-x-4 gap-y-2"
        >
          {site.status.open && (
            <span className="inline-flex items-center gap-2 rounded-full border border-line bg-surface/80 py-1 pl-2 pr-3 text-[0.8rem] backdrop-blur">
              <span className="relative flex h-2 w-2">
                <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-emerald-400 opacity-60" />
                <span className="relative inline-flex h-2 w-2 rounded-full bg-emerald-400" />
              </span>
              {site.status.text}
            </span>
          )}
          <span className="font-mono text-[0.75rem] uppercase tracking-[0.14em] text-muted">
            {site.location}
            {time && <span suppressHydrationWarning> · {time}</span>}
          </span>
        </motion.div>

        <h1
          id="hero-title"
          className="mt-8 max-w-[14ch] font-display text-[3.5rem] leading-[0.92] tracking-[-0.02em] sm:text-[5.5rem] lg:text-[7.25rem]"
        >
          <span className="sr-only">Asim Avhad. </span>
          {headline.map((w, i) => (
            <motion.span
              key={i}
              className="inline-block pr-[0.22em]"
              initial={{ opacity: 0, y: "0.5em", filter: "blur(8px)" }}
              animate={{ opacity: 1, y: 0, filter: "blur(0px)" }}
              transition={{ duration: 0.8, delay: 0.1 + i * 0.06, ease }}
            >
              {w.em ? <em className="text-accent-ink">{w.text}</em> : w.text}
            </motion.span>
          ))}
        </h1>

        <motion.div
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.6, ease }}
          className="mt-8 max-w-xl"
        >
          <p className="text-[1.08rem] leading-relaxed text-muted sm:text-lg">
            I&apos;m <span className="text-fg">Asim Avhad</span>, a Master of AI student at{" "}
            <span className="text-fg">Monash University</span>. I build NLP, generative-AI, vision and planning systems.
            Thanks to a full-stack and design background, they ship as products people can actually use.
          </p>

          <div className="mt-9 flex flex-wrap items-center gap-3">
            <a
              href="#work"
              className="group inline-flex h-12 items-center gap-2 rounded-full bg-accent px-6 font-medium text-on-accent transition hover:brightness-105"
            >
              See selected work
              <FiArrowDown className="transition-transform group-hover:translate-y-0.5" />
            </a>
            <a
              href={site.resume}
              target="_blank"
              rel="noopener noreferrer"
              className="group inline-flex h-12 items-center gap-2 rounded-full border border-line bg-surface/70 px-6 font-medium backdrop-blur transition hover:border-fg/40"
            >
              Résumé
              <FiArrowUpRight className="transition-transform group-hover:-translate-y-0.5 group-hover:translate-x-0.5" />
            </a>
            <div className="flex items-center gap-1 pl-1">
              {[
                { href: site.github, label: "GitHub", icon: <FiGithub /> },
                { href: site.linkedin, label: "LinkedIn", icon: <FiLinkedin /> },
                { href: `mailto:${site.email}`, label: "Email", icon: <FiMail /> },
              ].map((s) => (
                <a
                  key={s.label}
                  href={s.href}
                  target={s.href.startsWith("http") ? "_blank" : undefined}
                  rel="noopener noreferrer"
                  aria-label={s.label}
                  className="grid h-12 w-12 place-items-center rounded-full text-[1.1rem] text-muted transition hover:bg-surface hover:text-fg"
                >
                  {s.icon}
                </a>
              ))}
            </div>
          </div>

          <div className="mt-10">
            <Terminal />
          </div>
        </motion.div>

        <motion.dl
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1, delay: 0.9 }}
          className="relative mt-20 grid grid-cols-2 border-t border-line md:mt-24 md:grid-cols-4"
        >
          {heroStats.map((s, i) => (
            <div
              key={s.label}
              className={`py-6 pr-4 md:py-8 ${i % 2 === 1 ? "pl-4 md:pl-6" : ""} ${i >= 2 ? "border-t border-line md:border-t-0" : ""} ${i > 0 ? "md:border-l md:border-line md:pl-6" : ""} ${i % 2 === 1 ? "border-l border-line" : ""}`}
            >
              <dt className="sr-only">{s.label}</dt>
              <dd>
                <span className="block font-display text-5xl leading-none sm:text-6xl">{s.value}</span>
                <span className="mt-3 block max-w-[22ch] text-[0.85rem] leading-snug text-muted">{s.label}</span>
              </dd>
            </div>
          ))}
        </motion.dl>
      </div>
    </section>
  );
}
