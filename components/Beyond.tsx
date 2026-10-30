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
            <div className="absolute inset-0 hidden bg-gradient-to-tl from-black/80 via-black/20 to-transparent sm:block" aria-hidden />
            <figcaption className="bg-surface p-6 sm:absolute sm:bottom-0 sm:right-0 sm:max-w-[34rem] sm:bg-transparent sm:p-10 sm:text-right sm:text-white">
              <p className="font-mono text-[0.72rem] uppercase tracking-[0.18em] text-muted sm:text-white/70">
                <span className="text-accent-ink sm:text-[#FF5C52]">07</span> / Off the clock
              </p>
              <h2 id="beyond-title" className="mt-4 font-display text-[2.4rem] leading-[1] sm:ml-auto sm:max-w-[14ch] sm:text-6xl">
                My best thinking happens <em className="text-accent-ink sm:text-[#FF5C52]">above the treeline</em>.
              </h2>
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
