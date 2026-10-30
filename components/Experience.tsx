import { experience } from "@/lib/data";
import SectionHeader from "./SectionHeader";
import Reveal from "./Reveal";
import { cn } from "@/lib/utils";

const kindStyle = {
  Study: "border-fg/25 text-fg",
  Work: "border-accent/60 text-accent-ink",
  Teaching: "border-emerald-500/50 text-emerald-600 dark:text-emerald-400",
} as const;

export default function Experience() {
  return (
    <section id="experience" aria-labelledby="exp-title" className="border-t border-line py-24 sm:py-32">
      <div className="shell">
        <SectionHeader
          id="exp-title"
          index="04"
          label="Experience"
          title={
            <>
              Where I&apos;ve <em className="text-accent-ink">learned</em> &amp; taught.
            </>
          }
          intro="Study, teaching and industry, from a live hotel's IT floor in Dubai to the lecture hall."
        />

        <ol className="border-t border-line">
          {experience.map((e, i) => (
            <li key={e.title + e.date} className="border-b border-line">
              <Reveal delay={i * 0.04} className="group grid gap-3 py-8 md:grid-cols-12 md:gap-8 md:py-10">
                <div className="md:col-span-3">
                  <p className="font-mono text-[0.78rem] tracking-wide text-muted">{e.date}</p>
                  <span className={cn("mt-3 inline-block rounded-full border px-2.5 py-0.5 font-mono text-[0.65rem] uppercase tracking-widest", kindStyle[e.kind])}>
                    {e.kind}
                  </span>
                </div>
                <div className="md:col-span-4">
                  <h3 className="font-display text-[1.75rem] leading-[1.1] transition-colors group-hover:text-accent-ink sm:text-[2rem]">{e.title}</h3>
                  <p className="mt-2 text-[0.92rem]">
                    {e.org} <span className="text-muted">· {e.location}</span>
                  </p>
                </div>
                <ul className="space-y-2.5 md:col-span-5 md:pt-1.5">
                  {e.points.map((p) => (
                    <li key={p} className="text-[0.95rem] leading-relaxed text-muted">
                      {p}
                    </li>
                  ))}
                </ul>
              </Reveal>
            </li>
          ))}
        </ol>
      </div>
    </section>
  );
}
