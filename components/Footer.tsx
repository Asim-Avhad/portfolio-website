"use client";

import { FiArrowUp } from "react-icons/fi";
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
              Asim <em className="text-accent-ink">Avhad</em>
            </p>
            <p className="mt-4 text-sm text-muted">
              Designed &amp; built by me in Melbourne
              {time && <span suppressHydrationWarning> · it&apos;s {time} here</span>}.
            </p>
          </div>
          <a
            href="#main"
            className="group inline-flex items-center gap-2 self-start rounded-full border border-line px-4 py-2 text-sm text-muted transition hover:text-fg md:self-auto"
          >
            Back to top <FiArrowUp className="transition-transform group-hover:-translate-y-0.5" />
          </a>
        </div>
        <div className="mt-10 flex flex-col gap-2 border-t border-line pt-6 font-mono text-[0.7rem] uppercase tracking-widest text-muted sm:flex-row sm:justify-between">
          <span>© {new Date().getFullYear()} {site.name} · Chequered flag, thanks for reading to the end</span>
          <span>Next.js · Tailwind · Motion · Resend</span>
        </div>
      </div>
    </footer>
  );
}
