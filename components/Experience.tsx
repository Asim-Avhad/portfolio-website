import { experience } from "@/lib/data";
import SectionHeader from "./SectionHeader";
import Reveal from "./Reveal";
import { cn } from "@/lib/utils";

const kindStyle = {
  Study: "border-line text-muted",
  Work: "border-accent/60 text-accent-ink",
  Teaching: "border-fg/25 text-muted",
} as const;

export default function Experience() {
  return (
    <section id="experience" aria-labelledby="exp-title" className="border-t border-line py-24 sm:py-32">
      <div className="shell">
        <SectionHeader
          id="exp-title"
          title="Experience"
          intro="Where I've learned and taught, from a live hotel's IT floor in Dubai to the lecture hall."
        />

        <ol className="border-t border-line">
          {experience.map((e, i) => (
            <li key={e.title + e.date} className="border-b border-line">
              <Reveal delay={i * 0.04} className="group grid gap-3 py-8 md:grid-cols-12 md:gap-8 md:py-10">
                <div className="md:col-span-3">
                  <p className="figures text-[0.92rem] text-muted">{e.date}</p>
                  <span className={cn("mt-3 inline-block rounded-full border px-2.5 py-0.5 text-[0.8rem]", kindStyle[e.kind])}>
                    {e.kind}
                  </span>
                </div>
                <div className="md:col-span-4">
                  <h3 className="font-display text-[1.75rem] leading-[1.1] transition-colors group-hover:text-accent-ink sm:text-[2rem]">{e.title}</h3>
                  <p className="mt-2 text-[0.92rem]">
                    {e.org}<span className="text-muted">, {e.location}</span>
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
