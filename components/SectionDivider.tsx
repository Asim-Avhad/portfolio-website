import { marqueeItems } from "@/lib/data";

/** A slow ticker of tools that divides the hero from the work. */
export default function SectionDivider() {
  const row = [...marqueeItems, ...marqueeItems];
  return (
    <div className="relative border-y border-line bg-surface/40 py-4" aria-hidden>
      <div className="flex overflow-hidden [mask-image:linear-gradient(90deg,transparent,#000_10%,#000_90%,transparent)]">
        <ul className="flex shrink-0 animate-marquee items-center gap-8 pr-8 font-mono text-[0.8rem] uppercase tracking-[0.16em] text-muted">
          {row.map((item, i) => (
            <li key={i} className="flex items-center gap-8 whitespace-nowrap">
              {item}
              <span className="text-accent-ink">✦</span>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}
