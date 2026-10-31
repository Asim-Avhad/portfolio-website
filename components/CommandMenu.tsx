"use client";

import { useCallback, useEffect, useMemo, useRef, useState } from "react";
import { AnimatePresence, motion } from "motion/react";
import { FiArrowRight, FiCopy, FiFileText, FiGithub, FiLinkedin, FiMail, FiPause, FiSearch, FiSun } from "react-icons/fi";
import { links, site } from "@/lib/data";
import { useTheme } from "@/context/ThemeContext";
import { useMotionPause } from "@/context/MotionContext";
import { cn } from "@/lib/utils";

const OPEN_EVENT = "command-menu:open";

/** Open the palette from anywhere (e.g. the header button). */
export function openCommandMenu() {
  window.dispatchEvent(new Event(OPEN_EVENT));
}

type Item = {
  id: string;
  label: string;
  group: "Navigate" | "Actions" | "Elsewhere";
  icon: React.ReactNode;
  hint?: string;
  run: () => void;
};

export default function CommandMenu() {
  const [open, setOpen] = useState(false);
  const [query, setQuery] = useState("");
  const [index, setIndex] = useState(0);
  const [toast, setToast] = useState<string | null>(null);
  const inputRef = useRef<HTMLInputElement>(null);
  const { toggleTheme } = useTheme();
  const { paused, togglePaused } = useMotionPause();

  const close = useCallback(() => {
    setOpen(false);
    setQuery("");
    setIndex(0);
  }, []);

  const flash = (msg: string) => {
    setToast(msg);
    window.setTimeout(() => setToast(null), 1800);
  };

  const items = useMemo<Item[]>(
    () => [
      ...links.map((l) => ({
        id: l.hash,
        label: l.name,
        group: "Navigate" as const,
        icon: <FiArrowRight />,
        run: () => document.querySelector(l.hash)?.scrollIntoView({ behavior: "smooth" }),
      })),
      {
        id: "copy-email",
        label: "Copy email address",
        group: "Actions",
        icon: <FiCopy />,
        hint: site.email,
        run: () => {
          navigator.clipboard?.writeText(site.email).then(
            () => flash("Email copied"),
            () => flash(site.email),
          );
        },
      },
      { id: "email", label: "Write me an email", group: "Actions", icon: <FiMail />, run: () => (window.location.href = `mailto:${site.email}`) },
      { id: "resume", label: "Open résumé (PDF)", group: "Actions", icon: <FiFileText />, run: () => window.open(site.resume, "_blank") },
      { id: "theme", label: "Switch light and dark", group: "Actions", icon: <FiSun />, run: toggleTheme },
      { id: "motion", label: paused ? "Play animations" : "Pause animations", group: "Actions", icon: <FiPause />, run: togglePaused },
      { id: "github", label: "GitHub", group: "Elsewhere", icon: <FiGithub />, hint: "Asim-Avhad", run: () => window.open(site.github, "_blank") },
      { id: "linkedin", label: "LinkedIn", group: "Elsewhere", icon: <FiLinkedin />, hint: "asim-avhad", run: () => window.open(site.linkedin, "_blank") },
    ],
    [toggleTheme, togglePaused, paused],
  );

  const filtered = useMemo(() => {
    const q = query.trim().toLowerCase();
    return q ? items.filter((i) => `${i.label} ${i.group} ${i.hint ?? ""}`.toLowerCase().includes(q)) : items;
  }, [items, query]);

  useEffect(() => {
    const onKey = (e: KeyboardEvent) => {
      if ((e.metaKey || e.ctrlKey) && e.key.toLowerCase() === "k") {
        e.preventDefault();
        setOpen((v) => !v);
      }
    };
    const onOpen = () => setOpen(true);
    window.addEventListener("keydown", onKey);
    window.addEventListener(OPEN_EVENT, onOpen);
    return () => {
      window.removeEventListener("keydown", onKey);
      window.removeEventListener(OPEN_EVENT, onOpen);
    };
  }, []);

  useEffect(() => {
    if (open) requestAnimationFrame(() => inputRef.current?.focus());
  }, [open]);

  useEffect(() => setIndex(0), [query]);

  const select = (item: Item) => {
    close();
    // let the dialog unmount before scrolling / opening
    window.setTimeout(item.run, 60);
  };

  const onKeyDown = (e: React.KeyboardEvent) => {
    if (e.key === "ArrowDown") {
      e.preventDefault();
      setIndex((i) => (i + 1) % Math.max(filtered.length, 1));
    } else if (e.key === "ArrowUp") {
      e.preventDefault();
      setIndex((i) => (i - 1 + filtered.length) % Math.max(filtered.length, 1));
    } else if (e.key === "Enter" && filtered[index]) {
      e.preventDefault();
      select(filtered[index]);
    } else if (e.key === "Escape") {
      close();
    }
  };

  let lastGroup = "";

  return (
    <>
      <AnimatePresence>
        {open && (
          <motion.div
            className="fixed inset-0 z-[80] flex items-start justify-center bg-bg/60 px-4 pt-[14vh] backdrop-blur-sm"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onMouseDown={(e) => e.target === e.currentTarget && close()}
          >
            <motion.div
              role="dialog"
              aria-modal="true"
              aria-label="Command menu"
              initial={{ opacity: 0, y: -10, scale: 0.98 }}
              animate={{ opacity: 1, y: 0, scale: 1 }}
              exit={{ opacity: 0, y: -10, scale: 0.98 }}
              transition={{ duration: 0.18 }}
              className="w-full max-w-lg overflow-hidden rounded-2xl border border-line bg-elev"
              onKeyDown={onKeyDown}
            >
              <div className="flex items-center gap-3 border-b border-line px-4">
                <FiSearch className="text-muted" />
                <input
                  ref={inputRef}
                  value={query}
                  onChange={(e) => setQuery(e.target.value)}
                  placeholder="Jump to a section or run an action…"
                  className="h-14 w-full bg-transparent text-[0.95rem] outline-none placeholder:text-muted"
                  aria-controls="command-list"
                  aria-activedescendant={filtered[index] ? `cmd-${filtered[index].id}` : undefined}
                  role="combobox"
                  aria-expanded="true"
                />
                <kbd className="rounded-md border border-line px-1.5 py-0.5 font-mono text-[0.75rem] text-muted">Esc</kbd>
              </div>
              <ul id="command-list" role="listbox" className="max-h-[50vh] overflow-y-auto p-2">
                {filtered.length === 0 && <li className="px-3 py-8 text-center text-sm text-muted">Nothing matches “{query}”.</li>}
                {filtered.map((item, i) => {
                  const header = item.group !== lastGroup ? item.group : null;
                  lastGroup = item.group;
                  return (
                    <li key={item.id} role="presentation">
                      {header && <p className="px-3 pb-1.5 pt-3 text-[0.8rem] text-muted">{header}</p>}
                      <button
                        id={`cmd-${item.id}`}
                        role="option"
                        aria-selected={i === index}
                        onMouseMove={() => setIndex(i)}
                        onClick={() => select(item)}
                        className={cn(
                          "flex w-full items-center gap-3 rounded-lg px-3 py-2.5 text-left text-[0.9rem] transition-colors",
                          i === index ? "bg-accent text-on-accent" : "text-fg",
                        )}
                      >
                        <span className={cn(i === index ? "text-on-accent" : "text-muted")}>{item.icon}</span>
                        <span className="flex-1">{item.label}</span>
                        {item.hint && <span className={cn("text-[0.8rem]", i === index ? "text-on-accent/80" : "text-muted")}>{item.hint}</span>}
                      </button>
                    </li>
                  );
                })}
              </ul>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>

      <AnimatePresence>
        {toast && (
          <motion.div
            role="status"
            initial={{ opacity: 0, y: 12 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: 12 }}
            className="fixed inset-x-0 bottom-6 z-[90] mx-auto w-fit rounded-full bg-fg px-4 py-2 text-sm text-bg shadow-lg"
          >
            {toast}
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
