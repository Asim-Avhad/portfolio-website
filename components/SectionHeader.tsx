import Reveal from "./Reveal";

type Props = {
  title: React.ReactNode;
  intro?: React.ReactNode;
  id?: string;
};

/** The heading announces its section; no label above it. */
export default function SectionHeader({ title, intro, id }: Props) {
  return (
    <Reveal className="mb-12 grid gap-6 md:mb-16 md:grid-cols-12 md:items-end">
      <h2 id={id} className="font-display text-[2.6rem] leading-[1.02] tracking-[-0.01em] sm:text-6xl md:col-span-7">
        {title}
      </h2>
      {intro && <p className="max-w-md text-[0.98rem] leading-relaxed text-muted md:col-span-5 md:justify-self-end">{intro}</p>}
    </Reveal>
  );
}
