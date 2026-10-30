import Reveal from "./Reveal";

type Props = {
  index: string;
  label: string;
  title: React.ReactNode;
  intro?: React.ReactNode;
  id?: string;
};

export default function SectionHeader({ index, label, title, intro, id }: Props) {
  return (
    <Reveal className="mb-12 grid gap-6 md:mb-16 md:grid-cols-12 md:items-end">
      <div className="md:col-span-7">
        <p className="eyebrow mb-5 flex items-center gap-3">
          <span className="text-accent-ink">{index}</span>
          <span className="h-px w-8 bg-line" />
          {label}
        </p>
        <h2 id={id} className="font-display text-[2.6rem] leading-[1] tracking-[-0.01em] sm:text-6xl">
          {title}
        </h2>
      </div>
      {intro && <p className="max-w-md text-[0.98rem] leading-relaxed text-muted md:col-span-5 md:justify-self-end">{intro}</p>}
    </Reveal>
  );
}
