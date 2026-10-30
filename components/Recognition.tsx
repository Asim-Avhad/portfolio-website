import { awards, certifications } from "@/lib/data";
import SectionHeader from "./SectionHeader";
import Reveal from "./Reveal";

export default function Recognition() {
  return (
    <section aria-labelledby="rec-title" className="border-t border-line py-24 sm:py-32">
      <div className="shell">
        <SectionHeader
          id="rec-title"
          index="06"
          label="Recognition"
          title={
            <>
              Podiums &amp; <em className="text-accent-ink">paperwork</em>.
            </>
          }
        />

        <div className="grid gap-12 lg:grid-cols-12">
          <Reveal className="lg:col-span-8">
            <ul className="grid gap-px overflow-hidden rounded-[1.5rem] border border-line bg-line sm:grid-cols-2">
              {awards.map((a) => (
                <li key={a.title} className="flex items-center gap-5 bg-surface p-5 sm:p-6">
                  <span className="w-[5.25rem] shrink-0 whitespace-nowrap font-display text-[2rem] leading-none text-accent-ink">{a.place}</span>
                  <div className="min-w-0">
                    <p className="font-medium leading-tight">{a.title}</p>
                    <p className="mt-1 text-[0.82rem] text-muted">
                      {a.detail}
                      {a.date && <> · {a.date}</>}
                    </p>
                  </div>
                </li>
              ))}
            </ul>
          </Reveal>

          <Reveal delay={0.1} className="lg:col-span-4">
            <p className="eyebrow mb-4">Certifications</p>
            <ul className="divide-y divide-line border-y border-line">
              {certifications.map((c) => (
                <li key={c.title} className="py-4">
                  <p className="leading-tight">{c.title}</p>
                  <p className="mt-1 font-mono text-[0.72rem] uppercase tracking-wider text-muted">{c.issuer}</p>
                </li>
              ))}
            </ul>
          </Reveal>
        </div>
      </div>
    </section>
  );
}
