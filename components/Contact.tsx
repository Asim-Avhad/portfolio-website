"use client";

import { useActionState, useEffect, useRef, useState } from "react";
import { AnimatePresence, motion } from "motion/react";
import { FiArrowUpRight, FiCheck, FiCopy, FiGithub, FiLinkedin } from "react-icons/fi";
import { sendEmail } from "@/actions/SendEmail";
import { site } from "@/lib/data";
import { cn } from "@/lib/utils";
import Reveal from "./Reveal";
import SubmitBtn from "./SubmitBtn";

const field =
  "w-full rounded-xl border border-line bg-bg/60 px-4 py-3.5 text-[0.95rem] outline-none transition placeholder:text-muted/70 focus:border-accent focus:bg-bg focus:ring-0";

export default function Contact() {
  const [state, formAction] = useActionState(sendEmail, null);
  const [copied, setCopied] = useState(false);
  const formRef = useRef<HTMLFormElement>(null);

  useEffect(() => {
    if (state?.ok) formRef.current?.reset();
  }, [state]);

  const copy = async () => {
    try {
      await navigator.clipboard.writeText(site.email);
      setCopied(true);
      window.setTimeout(() => setCopied(false), 1800);
    } catch {
      window.location.href = `mailto:${site.email}`;
    }
  };

  return (
    <section id="contact" aria-labelledby="contact-title" className="border-t border-line py-24 sm:py-32">
      <div className="shell grid gap-14 lg:grid-cols-12 lg:gap-16">
        <Reveal className="lg:col-span-6">
          <p className="eyebrow mb-5 flex items-center gap-3">
            <span className="text-accent-ink">08</span>
            <span className="h-px w-8 bg-line" />
            Contact
          </p>
          <h2 id="contact-title" className="font-display text-[3rem] leading-[0.95] tracking-[-0.01em] sm:text-7xl">
            Let&apos;s build something <em className="text-accent-ink">useful</em>.
          </h2>
          <p className="mt-6 max-w-md text-[1.02rem] leading-relaxed text-muted">
            Hiring for AI, ML or software roles in Melbourne? Or just want to talk retrieval, planning or Himalayan trails?
            I&apos;d love to hear from you.
          </p>

          <div className="mt-10 flex flex-wrap items-center gap-3">
            <button
              type="button"
              onClick={copy}
              className="group inline-flex h-12 items-center gap-3 rounded-full border border-line bg-surface/70 pl-5 pr-4 transition hover:border-accent"
              aria-label={`Copy email address ${site.email}`}
            >
              <span className="font-mono text-[0.9rem]">{site.email}</span>
              <span className={cn("grid h-7 w-7 place-items-center rounded-full transition", copied ? "bg-emerald-500 text-white" : "bg-elev text-muted group-hover:text-fg")}>
                {copied ? <FiCheck size={14} /> : <FiCopy size={13} />}
              </span>
            </button>
            <span className="sr-only" role="status">
              {copied ? "Email copied to clipboard" : ""}
            </span>
          </div>

          <ul className="mt-8 flex flex-wrap gap-x-6 gap-y-3 text-[0.95rem]">
            <li>
              <a href={site.linkedin} target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-2 text-muted transition hover:text-fg">
                <FiLinkedin /> LinkedIn <FiArrowUpRight size={13} />
              </a>
            </li>
            <li>
              <a href={site.github} target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-2 text-muted transition hover:text-fg">
                <FiGithub /> GitHub <FiArrowUpRight size={13} />
              </a>
            </li>
            <li>
              <a href={site.resume} target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-2 text-muted transition hover:text-fg">
                Résumé (PDF) <FiArrowUpRight size={13} />
              </a>
            </li>
          </ul>
        </Reveal>

        <Reveal delay={0.1} className="lg:col-span-6">
          <form ref={formRef} action={formAction} className="rounded-[1.75rem] border border-line bg-surface/70 p-6 sm:p-8" noValidate={false}>
            <div className="grid gap-4 sm:grid-cols-2">
              <label className="block">
                <span className="eyebrow mb-2 block">Name</span>
                <input name="name" required maxLength={120} autoComplete="name" placeholder="Jane Smith" className={field} />
              </label>
              <label className="block">
                <span className="eyebrow mb-2 block">Email</span>
                <input name="senderEmail" type="email" required maxLength={320} autoComplete="email" placeholder="jane@company.com" className={field} />
              </label>
            </div>
            <label className="mt-4 block">
              <span className="eyebrow mb-2 block">Message</span>
              <textarea name="message" required maxLength={5000} rows={6} placeholder="What are you working on?" className={cn(field, "resize-y")} />
            </label>
            {/* honeypot */}
            <input type="text" name="company" tabIndex={-1} autoComplete="off" className="hidden" aria-hidden />

            <div className="mt-6 flex flex-wrap items-center justify-between gap-4">
              <SubmitBtn />
              <AnimatePresence mode="wait">
                {state && (
                  <motion.p
                    key={state.message}
                    role="status"
                    initial={{ opacity: 0, y: 6 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0 }}
                    className={cn("text-[0.88rem]", state.ok ? "text-emerald-600 dark:text-emerald-400" : "text-red-600 dark:text-red-400")}
                  >
                    {state.message}
                  </motion.p>
                )}
              </AnimatePresence>
            </div>
          </form>
        </Reveal>
      </div>
    </section>
  );
}
