"use client";

import { FiGithub } from "react-icons/fi";
import type { FeaturedProject } from "@/lib/data";
import { cn } from "@/lib/utils";
import ProjectVisual from "./ProjectVisual";
import Reveal from "./Reveal";

type Props = FeaturedProject & { index: number };

export default function Project({ index, title, kicker, year, context, summary, highlights, metrics, stack, visual, repo, demo }: Props) {
  const flip = index % 2 === 1;

  return (
    <Reveal>
      <article
        aria-labelledby={`project-${index}`}
        className="relative grid overflow-hidden rounded-[1.75rem] border border-line bg-surface/70 lg:grid-cols-12"
      >
        {/* Copy */}
        <div className={cn("flex flex-col p-6 sm:p-9 lg:col-span-7 lg:p-11", flip && "lg:order-2")}>
          <h3 id={`project-${index}`} className="font-display text-[2.4rem] leading-[1.02] sm:text-5xl">
            {title}
          </h3>

          <div className="mt-4 flex flex-wrap gap-2">
            <span className="chip figures">{year}</span>
            <span className="chip">{context}</span>
            <span className="chip">{kicker}</span>
          </div>

          <p className="mt-6 max-w-[58ch] text-[1.02rem] leading-relaxed text-fg/85">{summary}</p>

          <ul className="mt-6 space-y-3">
            {highlights.map((h) => (
              <li key={h} className="flex gap-3 text-[0.92rem] leading-relaxed text-muted">
                <span className="mt-[0.6rem] h-1 w-3 shrink-0 rounded-full bg-accent" aria-hidden />
                {h}
              </li>
            ))}
          </ul>

          <dl className={cn("mt-8 grid border-t border-line", metrics.length === 3 ? "grid-cols-1 sm:grid-cols-3" : "grid-cols-2")}>
            {metrics.map((m) => (
              <div key={m.label} className="border-line py-4 pr-4 sm:[&:not(:first-child)]:border-l sm:[&:not(:first-child)]:pl-4 [&:not(:first-child)]:border-t sm:[&:not(:first-child)]:border-t-0">
                <dt className="sr-only">{m.label}</dt>
                <dd>
                  <span className="figures block whitespace-nowrap font-display text-[1.9rem] leading-none sm:text-[1.7rem] xl:text-[2rem]">{m.value}</span>
                  <span className="mt-2 block text-[0.8rem] leading-snug text-muted">{m.label}</span>
                </dd>
              </div>
            ))}
          </dl>

          <ul className="mt-7 flex flex-wrap gap-1.5" aria-label="Tech stack">
            {stack.map((t) => (
              <li key={t} className="chip">
                {t}
              </li>
            ))}
          </ul>

          {(repo || demo) && (
            <div className="mt-7 flex gap-3">
              {demo && (
                <a href={demo} target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-1.5 text-sm font-medium link-underline">
                  Live demo
                </a>
              )}
              {repo && (
                <a href={repo} target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-1.5 text-sm font-medium link-underline">
                  <FiGithub aria-hidden /> Source
                </a>
              )}
            </div>
          )}
        </div>

        {/* Visual */}
        <div
          className={cn(
            "relative flex items-center border-t border-line bg-bg/50 p-6 sm:p-9 lg:col-span-5 lg:border-t-0",
            flip ? "lg:order-1 lg:border-r" : "lg:border-l",
          )}
        >
          <div className="relative w-full">
            <ProjectVisual type={visual} />
          </div>
        </div>
      </article>
    </Reveal>
  );
}
