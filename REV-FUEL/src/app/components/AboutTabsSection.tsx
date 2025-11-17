"use client";

import React, { useEffect, useMemo, useState } from "react";
import { AnimatePresence, motion } from "framer-motion";

const BRAND = "#dc2626"; // red-600
const BRAND_LIGHT = "#f87171"; // red-400
const BG = "#0B0B12";

type Props = {
  /** Optional background image (full-bleed) */
  bgImage?: string;
};

export default function AboutSimpleSection({ bgImage = "" }: Props) {
  // Slides: Overview, Quote, Capabilities
  const slides = useMemo<Array<{ key: string; content: React.ReactNode }>>(
    () => [
      {
        key: "overview",
        content: (
          <p className="text-white/85 text-base sm:text-lg md:text-xl leading-7 sm:leading-8">
            RevFuel is built for B2B teams that want growth without the chaos.
            Led by Andrew—the mastermind behind our systems and a 6+ year SaaS
            specialist—we design and implement sales engines that save time and
            drive revenue. From building high-performing pipelines and
            tightening CRM workflows to uncovering and recovering missed
            opportunities, we turn leaky processes into predictable profit. If
            you’re ready to streamline, scale, and close more with less effort,
            you’re in the right place.
          </p>
        ),
      },
      {
        key: "quote",
        content: (
          <blockquote className="relative pl-4 sm:pl-0 text-lg sm:text-xl md:text-2xl font-medium italic text-white/90">
            <span className="absolute left-0 top-0 h-full w-1 bg-[var(--brand)] hidden sm:block" />
            “We turned our internal playbook into a done-for-you growth engine.
            Clients focus on creating—our team ships everything else.”
          </blockquote>
        ),
      },
      {
        key: "bullets",
        content: (
          <ul className="grid grid-cols-1 sm:grid-cols-2 gap-3 sm:gap-4 text-left">
            {[
              "Landing pages & VSLs built for conversion",
              "End-to-end funnel architecture & testing",
              "Email marketing & nurture sequences",
              "CRM setup, tagging, and automation",
              "Calendar & pipeline management",
              "Weekly optimization & reporting",
            ].map((line) => (
              <li
                key={line}
                className="flex items-start gap-3 rounded-2xl border border-white/10 bg-white/5 px-4 py-3"
              >
                <span
                  aria-hidden
                  className="mt-1 h-2.5 w-2.5 rounded-full"
                  style={{
                    background: `linear-gradient(90deg, ${BRAND}, ${BRAND_LIGHT})`,
                    boxShadow: "0 0 0 4px rgba(220,38,38,0.15)",
                  }}
                />
                <span className="text-sm sm:text-base text-white/90">
                  {line}
                </span>
              </li>
            ))}
          </ul>
        ),
      },
    ],
    []
  );

  const [i, setI] = useState(0);
  const [paused, setPaused] = useState(false);
  const reduced = usePrefersReducedMotion();
  const advance = () => setI((n) => (n + 1) % slides.length);
  const back = () => setI((n) => (n - 1 + slides.length) % slides.length);

  // Auto-advance ~7.5s (readable) unless reduced-motion, or while paused/hovered/focused
  useEffect(() => {
    if (reduced || paused) return;
    const t = setInterval(advance, 7500);
    return () => clearInterval(t);
  }, [reduced, paused]);

  return (
    <section
      id="about"
      className="relative w-full px-4 sm:px-6 lg:px-12 py-14 sm:py-18 lg:py-20 overflow-hidden"
      style={
        {
          backgroundColor: BG,
          color: "white",
          ["--brand" as string]: BRAND,
        } as React.CSSProperties
      }
      onMouseEnter={() => setPaused(true)}
      onMouseLeave={() => setPaused(false)}
      onFocus={() => setPaused(true)}
      onBlur={() => setPaused(false)}
    >
      {/* Background image */}
      <div
        aria-hidden
        className="absolute inset-0 bg-cover bg-center"
        style={{ backgroundImage: `url(${bgImage})` }}
      />

      {/* Smoother black↔red stack (gradient + beams + vignette) */}
      <div aria-hidden className="absolute inset-0">
        {/* base gradient (soft red to deep black) */}
        <div
          className="absolute inset-0"
          style={{
            background:
              "radial-gradient(120% 120% at 70% 0%, rgba(220,38,38,0.15), rgba(11,11,18,0.85) 45%, rgba(11,11,18,1) 75%)",
          }}
        />
        {/* animated red glow pulse */}
        <motion.div
          className="absolute -top-40 -right-32 h-[560px] w-[560px] rounded-full blur-[130px]"
          style={{ background: BRAND_LIGHT, opacity: 0.28 }}
          animate={{ opacity: [0.2, 0.34, 0.2] }}
          transition={{ duration: 7, repeat: Infinity, ease: "easeInOut" }}
        />
        {/* sweeping beams */}
        <Beam
          className="top-10 left-[-20%] w-[140%]"
          rotate={16}
          from="rgba(220,38,38,0.16)"
          to="rgba(220,38,38,0.0)"
        />
        <Beam
          className="top-40 left-[-10%] w-[130%]"
          rotate={-14}
          from="rgba(255,255,255,0.06)"
          to="rgba(0,0,0,0)"
        />
        {/* subtle grid + vignette for contrast */}
        <div className="absolute inset-0 opacity-15 [background-image:linear-gradient(rgba(255,255,255,0.06)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.06)_1px,transparent_1px)] [background-size:28px_28px]" />
        <div className="absolute inset-0 shadow-[inset_0_0_180px_90px_rgba(0,0,0,0.85)]" />
      </div>

      <div className="relative mx-auto max-w-5xl text-center">
        {/* Eyebrow */}
        <p className="text-xs sm:text-sm tracking-[0.3em] uppercase text-white/60">
          Done-For-You Growth Engine
        </p>

        {/* Heading (smaller + touch of white in gradient) */}
        <h2 className="mt-3 text-[clamp(26px,6vw,52px)] font-extrabold tracking-tight leading-[1.07]">
          <span
            className="bg-clip-text text-transparent"
            style={{
              // white → red → light red for a crisp pop
              backgroundImage: `linear-gradient(90deg, #ffffff, ${BRAND}, ${BRAND_LIGHT})`,
            }}
          >
            We Build & Run Your Sales + Marketing
          </span>
        </h2>

        {/* Subhead (kept concise) */}
        <p className="mt-4 sm:mt-5 text-base sm:text-lg md:text-xl text-white/80">
          Scale your coaching offer to{" "}
          <span className="font-semibold text-white">at least $100k/mo</span>{" "}
          with a complete, managed system—landing pages, VSLs, emails, CRM
          automations, and funnels. You create. We handle the rest.
        </p>

        {/* Divider */}
        <div className="mx-auto my-7 sm:my-9 h-px w-24 rounded bg-white/10" />

        {/* Rotating body (3 slides) */}
        <div className="mx-auto max-w-3xl text-left sm:text-center min-h-[140px]">
          <AnimatePresence mode="wait">
            <motion.div
              key={slides[i].key}
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -10 }}
              transition={{ duration: 0.35 }}
            >
              {slides[i].content}
            </motion.div>
          </AnimatePresence>

          {/* Controls */}
          <div className="mt-6 flex items-center justify-center gap-2">
            <button
              aria-label="Previous"
              onClick={back}
              className="rounded-full border border-white/10 bg-white/5 px-3 py-1.5 text-xs text-white/80 hover:bg-white/10 transition"
            >
              Prev
            </button>
            <div className="flex items-center gap-2">
              {slides.map((s, idx) => (
                <button
                  key={s.key}
                  aria-label={`Go to ${s.key}`}
                  onClick={() => setI(idx)}
                  className={`h-2.5 w-6 rounded-full transition ${
                    i === idx ? "bg-white" : "bg-white/30 hover:bg-white/60"
                  }`}
                />
              ))}
            </div>
            <button
              aria-label="Next"
              onClick={advance}
              className="rounded-full border border-white/10 bg-white/5 px-3 py-1.5 text-xs text-white/80 hover:bg-white/10 transition"
            >
              Next
            </button>
          </div>
        </div>

        {/* Promise strip */}
        <div className="mt-9 sm:mt-10 rounded-3xl border border-white/10 bg-white/[0.04] p-5 sm:p-6">
          <p className="text-sm sm:text-base md:text-lg text-white/90">
            <span
              className="font-semibold"
              style={{
                backgroundImage: `linear-gradient(90deg, #ffffff, ${BRAND}, ${BRAND_LIGHT})`,
                WebkitBackgroundClip: "text",
                color: "transparent",
              }}
            >
              Our promise:
            </span>{" "}
            a complete, managed growth system engineered to take your coaching
            offer to <span className="font-semibold">$100k+/mo</span>—without
            duct-taped tools or endless guesswork.
          </p>
        </div>
      </div>
    </section>
  );
}

/* ---------------------------- Helpers ---------------------------- */

function Beam({
  className,
  rotate = 0,
  from,
  to,
}: {
  className?: string;
  rotate?: number;
  from: string;
  to: string;
}) {
  return (
    <motion.div
      aria-hidden
      className={`pointer-events-none absolute h-40 ${className || ""}`}
      style={{
        transformOrigin: "left center",
        rotate,
        background: `linear-gradient(90deg, ${from}, ${to})`,
        filter: "blur(14px)",
      }}
      animate={{ x: ["-5%", "5%", "-5%"] }}
      transition={{ duration: 10, repeat: Infinity, ease: "easeInOut" }}
    />
  );
}

function usePrefersReducedMotion() {
  const [prefers, setPrefers] = useState(false);
  useEffect(() => {
    const mq = window.matchMedia("(prefers-reduced-motion: reduce)");
    setPrefers(mq.matches);
    const handler = () => setPrefers(mq.matches);
    mq.addEventListener?.("change", handler);
    return () => mq.removeEventListener?.("change", handler);
  }, []);
  return prefers;
}
