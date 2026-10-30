import Image from "next/image";
import { FiArrowUpRight } from "react-icons/fi";
import { olderProjects, webProjects } from "@/lib/data";
import SectionHeader from "./SectionHeader";
import Reveal from "./Reveal";

export default function WebWork() {
  return (
    <section aria-labelledby="web-title" className="border-t border-line py-24 sm:py-32">
      <div className="shell">
        <SectionHeader
          id="web-title"
          index="02"
          label="Full-stack roots"
          title={
            <>
              Before the models, <em className="text-accent-ink">the web</em>.
            </>
          }
          intro="I started out shipping full-stack apps. It's why my AI projects come with real interfaces, APIs and guardrails, not just a notebook."
        />

        <div className="grid gap-6 md:grid-cols-3">
          {webProjects.map((p, i) => (
            <Reveal key={p.title} delay={i * 0.08} className="h-full">
              <a
                href={p.href}
                target="_blank"
                rel="noopener noreferrer"
                className="group flex h-full flex-col overflow-hidden rounded-[1.5rem] border border-line bg-surface/70 transition-colors hover:border-fg/25"
              >
                <div className="relative overflow-hidden border-b border-line bg-bg">
                  <div className="flex items-center gap-1.5 border-b border-line px-3 py-2" aria-hidden>
                    <span className="h-2 w-2 rounded-full bg-fg/20" />
                    <span className="h-2 w-2 rounded-full bg-fg/20" />
                    <span className="h-2 w-2 rounded-full bg-fg/20" />
                  </div>
                  <Image
                    src={p.image}
                    alt={`Screenshot of ${p.title}`}
                    sizes="(min-width: 768px) 33vw, 100vw"
                    placeholder="blur"
                    className="aspect-[16/10] w-full object-cover object-top transition-transform duration-700 ease-out group-hover:scale-[1.04]"
                  />
                </div>
                <div className="flex flex-1 flex-col p-6">
                  <div className="flex items-start justify-between gap-3">
                    <h3 className="font-display text-[1.9rem] leading-none">{p.title}</h3>
                    <span className="inline-flex shrink-0 items-center gap-1 pt-1 font-mono text-[0.7rem] uppercase tracking-widest text-muted transition-colors group-hover:text-accent-ink">
                      {p.linkLabel}
                      <FiArrowUpRight className="transition-transform group-hover:-translate-y-0.5 group-hover:translate-x-0.5" />
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
                <p className="font-mono text-[0.72rem] uppercase tracking-widest text-muted md:col-span-2 md:pt-2">{p.meta}</p>
                <p className="text-[0.95rem] leading-relaxed text-muted md:col-span-6 md:pt-1">{p.description}</p>
              </li>
            ))}
          </ul>
        </Reveal>
      </div>
    </section>
  );
}
