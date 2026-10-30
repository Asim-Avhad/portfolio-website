import { skillGroups } from "@/lib/data";
import SectionHeader from "./SectionHeader";
import Reveal from "./Reveal";

export default function Skills() {
  return (
    <section id="toolkit" aria-labelledby="toolkit-title" className="border-t border-line py-24 sm:py-32">
      <div className="shell">
        <SectionHeader
          id="toolkit-title"
          index="05"
          label="Toolkit"
          title={
            <>
              What I reach <em className="text-accent-ink">for</em>.
            </>
          }
          intro="Python and PyTorch for the models, a full web stack for everything around them, and Figma for when it needs to make sense to a person."
        />

        <div className="grid gap-px overflow-hidden rounded-[1.75rem] border border-line bg-line sm:grid-cols-2 lg:grid-cols-3">
          {skillGroups.map((g, i) => (
            <Reveal key={g.title} delay={(i % 3) * 0.06} className="bg-surface p-7 sm:p-8">
              <div className="flex items-baseline justify-between">
                <h3 className="font-display text-[1.7rem] leading-none">{g.title}</h3>
                <span className="font-mono text-[0.7rem] text-muted">{String(g.items.length).padStart(2, "0")}</span>
              </div>
              <ul className="mt-6 flex flex-wrap gap-1.5">
                {g.items.map((s) => (
                  <li key={s} className="rounded-full border border-line bg-bg/60 px-3 py-1.5 text-[0.82rem] transition-colors hover:border-accent hover:text-accent-ink">
                    {s}
                  </li>
                ))}
              </ul>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
