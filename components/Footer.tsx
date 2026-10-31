"use client";

import { site } from "@/lib/data";
import { useLocalTime } from "@/lib/hooks";
import FinishLine from "./FinishLine";

export default function Footer() {
  const time = useLocalTime(site.timezone);

  return (
    <footer>
      <FinishLine />
      <div className="shell py-10">
        <div className="flex flex-col gap-8 md:flex-row md:items-end md:justify-between">
          <div>
            <p className="font-display text-[clamp(3rem,10vw,7.5rem)] leading-[0.85] tracking-[-0.02em]">
              Asim Avhad
            </p>
            <p className="mt-4 text-sm text-muted">
              Designed and built by me in Melbourne
              {time && <span suppressHydrationWarning>, where it&apos;s {time}</span>}.
            </p>
          </div>
          <a
            href="#main"
            className="inline-flex items-center self-start rounded-full border border-line px-4 py-2 text-sm text-muted transition hover:text-fg active:translate-y-px md:self-auto"
          >
            Back to top
          </a>
        </div>
        <div className="mt-10 grid gap-2 border-t border-line pt-6 text-[0.85rem] text-muted sm:grid-cols-3">
          <span>© {new Date().getFullYear()} {site.name}</span>
          <span className="sm:text-center">Chequered flag. Thanks for reading to the end.</span>
          <span className="sm:text-right">Built with Next.js, Tailwind, Motion and Resend</span>
        </div>
      </div>
    </footer>
  );
}
