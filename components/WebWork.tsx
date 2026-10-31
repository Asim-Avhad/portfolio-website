import Image from "next/image";
import { olderProjects, webProjects } from "@/lib/data";
import SectionHeader from "./SectionHeader";
import Reveal from "./Reveal";

export default function WebWork() {
  return (
    <section aria-labelledby="web-title" className="border-t border-line py-24 sm:py-32">
      <div className="shell">
        <SectionHeader
          id="web-title"
          title="Full-stack roots"
          intro="Before the models, the web. I started out shipping full-stack apps, which is why my AI projects come with real interfaces, APIs and guardrails, not just a notebook."
        />

        <div className="grid gap-6 md:grid-cols-3">
          {webProjects.map((p, i) => (
            <Reveal key={p.title} delay={i * 0.08} className="h-full">
              <a
                href={p.href}
                target="_blank"
                rel="noopener noreferrer"
                className="group flex h-full flex-col overflow-hidden rounded-[1.5rem] border border-line bg-surface/70 transition-colors hover:border-fg/40 active:translate-y-px"
              >
                <figure className="relative overflow-hidden border-b border-line bg-bg">
                  <Image
                    src={p.image}
                    alt={`Screenshot of ${p.title}`}
                    sizes="(min-width: 768px) 33vw, 100vw"
                    placeholder="blur"
                    className="aspect-[16/10] w-full object-cover object-top"
                  />
                </figure>
                <div className="flex flex-1 flex-col p-6">
                  <div className="flex items-start justify-between gap-3">
                    <h3 className="font-display text-[1.9rem] leading-none">{p.title}</h3>
                    <span className="shrink-0 pt-1 text-[0.85rem] text-muted underline decoration-transparent underline-offset-4 transition-colors group-hover:text-accent-ink group-hover:decoration-current">
                      {p.linkLabel}
                    </span>
                  </div>
                  <p className="mt-3 flex-1 text-[0.92rem] leading-relaxed text-muted">{p.description}</p>
                  <ul className="mt-5 flex flex-wrap gap-1.5">
                    {p.tags.map((t) => (
                      <li key={t} className="chip">
                        {t}
                      </li>
                    ))}
                  </ul>
                </div>
              </a>
            </Reveal>
          ))}
        </div>

        <Reveal className="mt-10">
          <ul className="divide-y divide-line border-y border-line">
            {olderProjects.map((p) => (
              <li key={p.title} className="grid gap-2 py-6 md:grid-cols-12 md:gap-6">
                <h3 className="font-display text-2xl md:col-span-4">{p.title}</h3>
                <p className="text-[0.88rem] text-muted md:col-span-2 md:pt-2">{p.meta}</p>
                <p className="text-[0.95rem] leading-relaxed text-muted md:col-span-6 md:pt-1">{p.description}</p>
              </li>
            ))}
          </ul>
        </Reveal>
      </div>
    </section>
  );
}
