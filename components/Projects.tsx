import { featuredProjects, moreAiProjects } from "@/lib/data";
import Project from "./Project";
import SectionHeader from "./SectionHeader";
import Reveal from "./Reveal";
import F1Circuit from "./F1Circuit";

export default function Projects() {
  return (
    <section id="work" aria-labelledby="work-title" className="py-24 sm:py-32">
      <div className="shell">
        <SectionHeader
          id="work-title"
          title="Recent AI work, measured."
          intro="I care about whether a model actually helps, so every project here comes with the number that proves it, and a plan for when it's unsure."
        />

        <div className="flex flex-col gap-6 sm:gap-8">
          {featuredProjects.map((p, i) => (
            <Project key={p.slug} index={i} {...p} />
          ))}
        </div>

        <div className="mt-6 grid items-start gap-6 sm:mt-8 sm:gap-8 md:grid-cols-2">
          {moreAiProjects.map((p, i) => (
            <Reveal key={p.title} delay={i * 0.08}>
              <article className="flex h-full flex-col rounded-[1.5rem] border border-line bg-surface/70 p-6 sm:p-8">
                {p.visual === "circuit" && (
                  <div className="mb-6 border-b border-line pb-6">
                    <F1Circuit />
                  </div>
                )}
                <h3 className="font-display text-3xl leading-tight">{p.title}</h3>
                <p className="mt-1 text-[0.88rem] text-muted">{p.meta}</p>
                <p className="mt-3 flex-1 text-[0.95rem] leading-relaxed text-muted">{p.description}</p>
                <ul className="mt-6 flex flex-wrap gap-1.5">
                  {p.stack.map((t) => (
                    <li key={t} className="chip">
                      {t}
                    </li>
                  ))}
                </ul>
              </article>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
