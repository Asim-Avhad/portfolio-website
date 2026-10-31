import Image from "next/image";
import himalaya from "@/public/Profile.jpg";
import { beyond } from "@/lib/data";
import Reveal from "./Reveal";

export default function Beyond() {
  return (
    <section aria-labelledby="beyond-title" className="border-t border-line py-24 sm:py-32">
      <div className="shell">
        <Reveal>
          <figure className="relative overflow-hidden rounded-[2rem] border border-line">
            <Image
              src={himalaya}
              alt="Asim, in a yellow jacket, looking up at a snow-covered Himalayan massif"
              placeholder="blur"
              sizes="(min-width: 1216px) 1216px, 100vw"
              className="h-[22rem] w-full object-cover object-[42%_70%] sm:h-[38rem]"
            />
            {/* The scrim lives on the caption itself, so the shade always sits under its words. */}
            <figcaption className="bg-surface p-6 sm:absolute sm:inset-0 sm:flex sm:flex-col sm:items-end sm:justify-end sm:bg-transparent sm:bg-gradient-to-tl sm:from-photo-shade/90 sm:via-photo-shade/45 sm:to-transparent sm:p-10 sm:text-right sm:text-photo-fg">
              <h2 id="beyond-title" className="font-display text-[2.6rem] leading-[1.02] sm:text-6xl">
                Off the clock
              </h2>
              <p className="mt-3 text-[1.05rem] text-muted sm:text-photo-fg">My best thinking happens above the treeline.</p>
            </figcaption>
          </figure>
        </Reveal>

        <ul className="mt-6 grid gap-px overflow-hidden rounded-[1.5rem] border border-line bg-line sm:grid-cols-2 lg:grid-cols-4">
          {beyond.map((b, i) => (
            <li key={b.label} className="bg-surface p-6 sm:p-7">
              <Reveal delay={i * 0.06}>
                <p className="font-display text-[2.6rem] leading-none">
                  {b.value} <span className="text-[1.3rem] italic text-muted">{b.label}</span>
                </p>
                <p className="mt-4 text-[0.88rem] leading-relaxed text-muted">{b.detail}</p>
              </Reveal>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}
