// src/components/ProcessSection.tsx
"use client";

import Image from "next/image";
import { useEffect, useState } from "react";
import { motion, AnimatePresence, type Variants } from "framer-motion";
import { Lightbulb, Ruler, Hammer, type LucideIcon } from "lucide-react";
import type React from "react";

const YELLOW = "#FFEB3B";

/* ---------- Typed CSS vars ---------- */
type CSSVars = React.CSSProperties & { ["--accent"]?: string };

/* ---------- Motion helpers ---------- */
const easeOutExpo = [0.22, 1, 0.36, 1] as const;

const fadeUp: Variants = {
  hidden: { opacity: 0, y: 18, filter: "blur(4px)" },
  show: {
    opacity: 1,
    y: 0,
    filter: "blur(0px)",
    transition: { duration: 0.6, ease: easeOutExpo },
  },
};

const imgVariants: Variants = {
  initial: { opacity: 0, scale: 1.04 },
  enter: {
    opacity: 1,
    scale: 1,
    transition: { duration: 0.7, ease: easeOutExpo },
  },
  exit: { opacity: 0, scale: 1.02, transition: { duration: 0.35 } },
};

/* ---------- Data (icons + images per step) ---------- */
type StepItem = {
  t: string;
  d: string;
  icon: LucideIcon;
  img: string;
};

const STEPS: StepItem[] = [
  {
    t: "Discover & Define",
    d: "We audit your current presence, clarify goals, and identify quick wins + long-term opportunities.",
    icon: Lightbulb,
    img: "/images/D&D.jpg",
  },
  {
    t: "Plan & Design",
    d: "Roadmap, wireframes, and SEO-first content architecture aligned to your offer and audience.",
    icon: Ruler,
    img: "/images/P&D.jpg",
  },
  {
    t: "Build & Launch",
    d: "High-quality implementation, QA, analytics, and iteration to hit measurable growth targets.",
    icon: Hammer,
    img: "/images/B&D.jpg",
  },
];

/* ---------- Component ---------- */
export default function ProcessSection() {
  const [active, setActive] = useState(0);
  const activeItem = STEPS[active];
  const idPrefix = "process-tab";

  // Keyboard arrows for tab switch
  useEffect(() => {
    const onKey = (e: KeyboardEvent) => {
      if (e.key === "ArrowRight") setActive((i) => (i + 1) % STEPS.length);
      if (e.key === "ArrowLeft") setActive((i) => (i - 1 + STEPS.length) % STEPS.length);
    };
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, []);

  const sectionVars: CSSVars = { "--accent": YELLOW };

  return (
    <section
      id="process"
      className="relative isolate overflow-hidden py-24 sm:py-28 text-white"
      style={sectionVars}
    >
      {/* Subtle background image */}
      <Image
        src="/images/op.jpg"
        alt=""
        fill
        priority
        className="pointer-events-none -z-20 object-cover opacity-40"
      />

      {/* Softer yellow sweep */}
      <div className="absolute inset-0 -z-10 bg-[linear-gradient(to_left,rgba(255,235,59,0.16)_0%,rgba(255,235,59,0.10)_22%,rgba(0,0,0,0.88)_65%,rgba(0,0,0,0.96)_100%)]" />

      {/* Gentle radial glow */}
      <div className="pointer-events-none absolute right-[8%] top-1/2 -z-10 hidden h-[520px] w-[520px] -translate-y-1/2 rounded-full lg:block">
        <div className="absolute inset-0 rounded-full ring-1 ring-yellow-300/15" />
        <div className="absolute inset-6 rounded-full ring-1 ring-yellow-300/12" />
        <div className="absolute inset-12 rounded-full ring-1 ring-yellow-300/10" />
        <div className="absolute inset-0 rounded-full bg-[radial-gradient(circle_at_center,rgba(255,235,59,0.12),transparent_60%)] blur-xl" />
      </div>

      <div className="mx-auto max-w-7xl px-4">
        {/* Heading */}
        <motion.div
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, amount: 0.45 }}
          className="text-center"
        >
          <motion.h2
            variants={fadeUp}
            className="mx-auto max-w-4xl text-3xl font-bold tracking-tight sm:text-4xl"
          >
            Our Process, Your <span style={{ color: YELLOW }}>Results</span>
          </motion.h2>
          <motion.p
            variants={fadeUp}
            className="mx-auto mt-4 max-w-2xl text-sm sm:text-base text-white/75"
          >
            Clear steps. High standards. Transparent execution. See each phase
            and what you’ll get.
          </motion.p>
        </motion.div>

        {/* Tabbed media split */}
        <div className="mt-12 grid grid-cols-1 gap-8 lg:grid-cols-12">
          {/* Left: Large media panel with BLACK + YELLOW overlay */}
          <div className="relative lg:col-span-7 rounded-3xl overflow-hidden border border-white/10 shadow-[0_20px_40px_-24px_rgba(0,0,0,0.45)] bg-black/40 backdrop-blur group">
            <div className="relative lg:h-full lg:min-h=[480px]">
              <AnimatePresence mode="wait">
                <motion.div
                  key={active}
                  variants={imgVariants}
                  initial="initial"
                  animate="enter"
                  exit="exit"
                  className="absolute inset-0"
                >
                  {/* BACKGROUND FILL (cover + blur) */}
                  <Image
                    src={activeItem.img}
                    alt=""
                    fill
                    priority
                    aria-hidden
                    className="object-cover scale-105 blur-[10px] opacity-55"
                    sizes="(max-width: 1024px) 100vw, 58vw"
                  />

                  {/* --- OVERLAYS ADDED HERE --- */}
                  {/* Black darken overlay (stronger on hover) */}
                  <div className="pointer-events-none absolute inset-0 bg-black/45 sm:bg-black/55 transition-opacity duration-300 group-hover:opacity-70" />
                  {/* Yellow glow overlay (soft radial tint, stronger on hover) */}
                  <div className="pointer-events-none absolute inset-0 opacity-60 transition-opacity duration-300 group-hover:opacity-85 bg-[radial-gradient(60%_60%_at_20%_15%,rgba(255,235,59,0.22),transparent_60%)]" />
                  {/* --- /overlays --- */}

                  {/* FOREGROUND IMAGE (contain) */}
                  <div className="absolute inset-0 grid place-items-center p-4 md:p-6">
                    <div className="relative w-full h-full">
                      <Image
                        src={activeItem.img}
                        alt={activeItem.t}
                        fill
                        priority
                        className="object-contain"
                        sizes="(max-width: 1024px) 100vw, 58vw"
                      />
                    </div>
                  </div>

                  {/* Soft inner edge vignette */}
                  <div
                    aria-hidden
                    className="pointer-events-none absolute inset-0"
                    style={{ boxShadow: "inset 0 0 120px rgba(0,0,0,0.35)" }}
                  />
                </motion.div>
              </AnimatePresence>
            </div>
          </div>

          {/* Right: Vertical tabs (steps) */}
          <div className="lg:col-span-5">
            <div role="tablist" aria-label="Process steps" className="flex flex-col gap-3">
              {STEPS.map((item, i) => {
                const Icon = item.icon;
                const selected = i === active;
                return (
                  <button
                    key={item.t}
                    role="tab"
                    aria-selected={selected}
                    aria-controls={`${idPrefix}-panel-${i}`}
                    id={`${idPrefix}-tab-${i}`}
                    onClick={() => setActive(i)}
                    onMouseEnter={() => setActive(i)}
                    className={`group w-full text-left rounded-2xl border transition-all outline-none focus-visible:ring-4 ${
                      selected
                        ? "border-[var(--accent)]/80 bg-[var(--accent)]/10 focus-visible:ring-[var(--accent)]/25"
                        : "border-white/10 bg-neutral-900/60 hover:bg-neutral-900/75 focus-visible:ring-white/10"
                    }`}
                  >
                    <div className="flex items-start gap-4 p-5 md:p-6">
                      <span
                        className="grid h-11 w-11 shrink-0 place-items-center rounded-xl ring-1 ring-black/10"
                        style={{ backgroundColor: "var(--accent)" }}
                      >
                        <Icon className="h-5 w-5 text-black" />
                      </span>
                      <div className="flex-1">
                        <div className="flex items-center gap-3">
                          <h3 className="text-lg md:text-xl font-semibold tracking-tight">
                            {item.t}
                          </h3>
                          {selected && (
                            <motion.span
                              layoutId="process-dot"
                              className="h-2 w-2 rounded-full"
                              style={{ backgroundColor: "var(--accent)" }}
                            />
                          )}
                        </div>
                        <p className="mt-2 text-white/75 leading-relaxed">{item.d}</p>
                        <motion.span
                          layout
                          className="mt-4 block h-[3px] w-16 origin-left"
                          style={{
                            backgroundColor: "var(--accent)",
                            opacity: selected ? 1 : 0.25,
                            transform: `scaleX(${selected ? 1 : 0.45})`,
                          }}
                        />
                      </div>
                    </div>
                  </button>
                );
              })}
            </div>

            {/* Active panel for a11y/SSR stability */}
            <div
              className="sr-only"
              id={`${idPrefix}-panel-${active}`}
              role="tabpanel"
              aria-labelledby={`${idPrefix}-tab-${active}`}
            >
              {activeItem.d}
            </div>

            {/* Progress dots */}
            <div className="mt-6 flex items-center gap-2" aria-hidden="true">
              {STEPS.map((_, i) => (
                <button
                  key={i}
                  onClick={() => setActive(i)}
                  className={`h-2.5 w-2.5 rounded-full transition-all ${
                    i === active ? "scale-110" : "opacity-40"
                  }`}
                  style={{ backgroundColor: "var(--accent)" }}
                />
              ))}
            </div>
          </div>
        </div>

        {/* CTA (optional) */}
        <motion.div
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, amount: 0.3 }}
          className="mt-16 text-center"
        >
          <motion.div
            variants={fadeUp}
            className="inline-flex flex-wrap items-center justify-center gap-4"
          />
        </motion.div>
      </div>
    </section>
  );
}
