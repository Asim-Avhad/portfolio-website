import { site } from "@/lib/data";
import SectionHeader from "./SectionHeader";
import Reveal from "./Reveal";

const facts = [
  { k: "Now", v: "Master of AI, Monash University" },
  { k: "Based in", v: "Melbourne, VIC" },
  { k: "Route so far", v: "Nashik → Dubai → Melbourne" },
  { k: "Focus", v: "NLP, GenAI, deep learning, planning" },
  { k: "Speaks", v: "English, Marathi" },
];

export default function About() {
  return (
    <section id="about" aria-labelledby="about-title" className="border-t border-line py-24 sm:py-32">
      <div className="shell">
        <SectionHeader
          id="about-title"
          title="About me"
          intro="Designer's eye, engineer's habits."
        />

        <div className="grid gap-12 lg:grid-cols-12 lg:gap-16">
          <Reveal className="lg:col-span-5">
            <blockquote className="relative border-l-2 border-accent pl-6 font-display text-[1.9rem] italic leading-[1.15] sm:text-[2.3rem]">
              Design taught me to start with the person. Engineering taught me to measure. AI is where I get to do both.
            </blockquote>

            <dl className="mt-12 divide-y divide-line border-y border-line">
              {facts.map((f) => (
                <div key={f.k} className="flex items-baseline justify-between gap-6 py-3.5">
                  <dt className="shrink-0 text-[0.88rem] text-muted">{f.k}</dt>
                  <dd className="text-right text-[0.92rem]">{f.v}</dd>
                </div>
              ))}
            </dl>
          </Reveal>

          <Reveal delay={0.1} className="space-y-6 text-[1.05rem] leading-[1.75] text-muted lg:col-span-7 lg:pt-1">
            <p>
              I grew up in <span className="text-fg">Nashik, India</span> and studied{" "}
              <span className="text-fg">Computer Science &amp; Design</span>, a degree that put Figma and algorithms in the
              same semester. I started out building full-stack web apps with React, Next.js and MongoDB, and the
              problem-solving hooked me. There&apos;s nothing quite like the moment a stubborn bug finally gives.
            </p>
            <p>
              Machine learning pulled me in from there. After graduating in 2025 I was invited back to my old college, more
              than once, to teach final-year students <span className="text-fg">deep learning</span>: CNNs, Transformers and
              generative AI. Teaching sharpened me as much as it helped them: if I can&apos;t explain a model simply, I
              don&apos;t understand it well enough yet.
            </p>
            <p>
              Now I&apos;m in <span className="text-fg">Melbourne</span> doing a Master of AI at{" "}
              <span className="text-fg">Monash</span>, working across NLP, retrieval, deep learning and multi-agent planning.
              I like problems where an AI system has to be <em className="text-fg">trustworthy</em>, not just clever. It
              should know when it&apos;s unsure, cite where it got its answer, and hand off gracefully.
            </p>
            <p>
              I&apos;m looking for a team that builds AI people rely on.{" "}
              <a href={`mailto:${site.email}`} className="text-fg underline decoration-accent decoration-2 underline-offset-4 transition hover:text-accent-ink">
                Say hello
              </a>{" "}
              and my inbox is always open.
            </p>
          </Reveal>
        </div>
      </div>
    </section>
  );
}
