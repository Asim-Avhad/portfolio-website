"use client";

import { useEffect, useState } from "react";
import { AnimatePresence, motion } from "motion/react";
import { FiArrowUpRight, FiMenu, FiX, FiCommand } from "react-icons/fi";
import { links, site } from "@/lib/data";
import { useActiveSectionContext } from "@/context/ActiveSectionContext";
import { useModKey, useScrolled } from "@/lib/hooks";
import { cn } from "@/lib/utils";
import ThemeSwitch from "./ThemeSwitch";
import { openCommandMenu } from "./CommandMenu";

export default function Header() {
  const { activeSection } = useActiveSectionContext();
  const scrolled = useScrolled(24);
  const mod = useModKey();
  const [open, setOpen] = useState(false);

  useEffect(() => {
    document.body.style.overflow = open ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [open]);

  return (
    <header className="fixed inset-x-0 top-0 z-50">
      <div
        className={cn(
          "transition-[background-color,border-color,backdrop-filter] duration-300",
          scrolled || open ? "border-b border-line bg-bg/75 backdrop-blur-xl" : "border-b border-transparent",
        )}
      >
        <div className="shell flex h-16 items-center justify-between gap-4">
          <a href="#main" className="group flex items-center gap-2.5" aria-label={`${site.name}, back to top`}>
            <span className="grid h-8 w-8 place-items-center rounded-full bg-accent font-display text-[1.15rem] italic leading-none text-on-accent transition-transform group-hover:-rotate-12">
              a
            </span>
            <span className="text-[0.95rem] font-medium tracking-tight">{site.name}</span>
          </a>

          <nav aria-label="Primary" className="hidden md:block">
            <ul className="flex items-center gap-1 rounded-full border border-line bg-surface/60 p-1 backdrop-blur">
              {links.map((link) => {
                const active = activeSection === link.name;
                return (
                  <li key={link.hash} className="relative">
                    <a
                      href={link.hash}
                      aria-current={active ? "true" : undefined}
                      className={cn(
                        "relative z-10 block rounded-full px-3.5 py-1.5 text-[0.85rem] transition-colors",
                        active ? "text-fg" : "text-muted hover:text-fg",
                      )}
                    >
                      {link.name}
                    </a>
                    {active && (
                      <motion.span
                        layoutId="nav-pill"
                        className="absolute inset-0 rounded-full bg-elev ring-1 ring-line"
                        transition={{ type: "spring", stiffness: 420, damping: 34 }}
                      />
                    )}
                  </li>
                );
              })}
            </ul>
          </nav>

          <div className="flex items-center gap-2">
            <button
              type="button"
              onClick={openCommandMenu}
              className="hidden h-9 items-center gap-2 rounded-full border border-line bg-surface/70 pl-3 pr-2 text-[0.8rem] text-muted transition hover:text-fg sm:flex"
              aria-label="Open command menu"
            >
              <FiCommand size={13} />
              <span>Quick nav</span>
              <kbd className="rounded-md border border-line bg-bg px-1.5 py-0.5 font-mono text-[0.68rem]">{mod} K</kbd>
            </button>
            <ThemeSwitch />
            <a
              href={site.resume}
              target="_blank"
              rel="noopener noreferrer"
              className="hidden h-9 items-center gap-1 rounded-full bg-fg px-4 text-[0.85rem] font-medium text-bg transition hover:bg-accent hover:text-on-accent lg:flex"
            >
              Résumé <FiArrowUpRight size={14} />
            </a>
            <button
              type="button"
              className="grid h-9 w-9 place-items-center rounded-full border border-line bg-surface/70 md:hidden"
              onClick={() => setOpen((v) => !v)}
              aria-expanded={open}
              aria-controls="mobile-nav"
              aria-label={open ? "Close menu" : "Open menu"}
            >
              {open ? <FiX size={16} /> : <FiMenu size={16} />}
            </button>
          </div>
        </div>
      </div>

      <AnimatePresence>
        {open && (
          <motion.nav
            id="mobile-nav"
            aria-label="Mobile"
            initial={{ opacity: 0, y: -8 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -8 }}
            transition={{ duration: 0.2 }}
            className="h-[calc(100dvh-4rem)] border-b border-line bg-bg/95 backdrop-blur-xl md:hidden"
          >
            <ul className="shell flex flex-col pt-6">
              {links.map((link, i) => (
                <motion.li
                  key={link.hash}
                  initial={{ opacity: 0, x: -12 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: 0.04 * i }}
                  className="border-b border-line"
                >
                  <a
                    href={link.hash}
                    onClick={() => setOpen(false)}
                    className="flex items-baseline justify-between py-4 font-display text-4xl"
                  >
                    {link.name}
                    <span className="font-mono text-xs text-muted">0{i + 1}</span>
                  </a>
                </motion.li>
              ))}
            </ul>
            <div className="shell mt-8 flex gap-3">
              <a
                href={site.resume}
                target="_blank"
                rel="noopener noreferrer"
                className="flex h-11 items-center gap-1.5 rounded-full bg-accent px-5 text-sm font-medium text-on-accent"
              >
                Résumé <FiArrowUpRight />
              </a>
              <a href={`mailto:${site.email}`} className="flex h-11 items-center rounded-full border border-line px-5 text-sm">
                Email me
              </a>
            </div>
          </motion.nav>
        )}
      </AnimatePresence>
    </header>
  );
}
