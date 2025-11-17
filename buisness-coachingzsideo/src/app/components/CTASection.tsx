// components/CtaSection.tsx
"use client";

import { motion, type Variants } from "framer-motion";
import { useCallback, useEffect } from "react";
import Script from "next/script";

declare global {
  interface Window {
    Calendly?: {
      initPopupWidget: (opts: { url: string }) => void;
      closePopupWidget?: () => void;
    };
  }
}

const EASE = [0.22, 1, 0.36, 1] as const;

const fadeUp = {
  hidden: { opacity: 0, y: 16 },
  visible: (i: number = 0) => ({
    opacity: 1,
    y: 0,
    transition: { duration: 0.5, delay: 0.08 * i, ease: EASE },
  }),
} satisfies Variants;

export default function CtaSection() {
  // Calendly blur/open/close (only once)
  useEffect(() => {
    const onMsg = (e: MessageEvent) => {
      if (typeof e.data !== "object" || !e.data?.event) return;
      if (e.data.event === "calendly.ui.opened") {
        document.documentElement.classList.add("cal-blur");
      }
      if (e.data.event === "calendly.ui.closed") {
        document.documentElement.classList.remove("cal-blur");
      }
    };
    window.addEventListener("message", onMsg);
    return () => window.removeEventListener("message", onMsg);
  }, []);

  const openCalendly = useCallback((e?: React.MouseEvent) => {
    e?.preventDefault();
    document.documentElement.classList.add("cal-blur");
    window.Calendly?.initPopupWidget({
      url: "https://calendly.com/zsideo/zsideo-content",
    });
  }, []);

  return (
    <section
      id="cta"
      className="relative overflow-hidden bg-white py-24 md:py-32"
      aria-labelledby="cta-heading"
    >
      {/* If loaded globally already, remove these two lines */}
      <Script
        src="https://assets.calendly.com/assets/external/widget.js"
        strategy="afterInteractive"
      />
      <link
        rel="stylesheet"
        href="https://assets.calendly.com/assets/external/widget.css"
      />

      {/* soft spotlight background */}
      <div
        aria-hidden
        className="pointer-events-none absolute inset-0 -z-10"
      >
        <div className="absolute inset-0 bg-[radial-gradient(60%_50%_at_50%_-10%,rgba(37,99,235,0.08),transparent_60%)]" />
      </div>

      <div className="mx-auto max-w-[1200px] px-6 text-center">
        {/* --- Heading (same size) --- */}
        <motion.h2
          id="cta-heading"
          className="font-extrabold leading-[0.98] tracking-tight text-[clamp(36px,6.5vw,72px)] text-[var(--color-text)]"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.5 }}
          variants={fadeUp}
          custom={0}
        >
          We Don’t Do “Buy Now” Buttons, Because We Don’t Work With Everyone
        </motion.h2>

        {/* --- Supporting copy (cleaner measure & contrast) --- */}
        <motion.p
          className="mx-auto mt-5 max-w-[900px] text-[clamp(16px,1.4vw,20px)] text-slate-700 leading-relaxed [text-wrap:pretty]"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.6 }}
          variants={fadeUp}
          custom={1}
        >
          If we’re going to build your business with you, we need to make sure
          it’s the right fit on both sides. Book a free call and we’ll look at
          where you are now, map where you want to go, and show the exact plan
          to reach a consistent <span className="font-semibold">$5K+/month</span>.
        </motion.p>

        <motion.p
          className="mx-auto mt-3 max-w-[820px] text-[clamp(14px,1.2vw,18px)] text-slate-600 leading-relaxed"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.6 }}
          variants={fadeUp}
          custom={2}
        >
          Your current skills are enough. You don’t need 10 new things—you need
          structure that scales. That’s what we do every day.
        </motion.p>

        {/* --- Quick benefits row --- */}
        <motion.ul
          className="mx-auto mt-8 grid max-w-[900px] grid-cols-1 gap-3 sm:grid-cols-3 text-left"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.6 }}
          variants={fadeUp}
          custom={2.5}
        >
          {[
            "Custom growth plan in the first call",
            "Done-with-you systems & automation",
            "No fluff — clear weekly milestones",
          ].map((item, i) => (
            <li
              key={i}
              className="flex items-start gap-2 rounded-lg border border-slate-200/70 bg-white/60 px-4 py-3 text-sm text-slate-700 shadow-[0_1px_0_0_rgba(15,23,42,0.04)]"
            >
              <span className="mt-0.5 inline-flex h-5 w-5 shrink-0 items-center justify-center rounded-full bg-[var(--color-accent,#2563eb)]/10 text-[var(--color-accent,#2563eb)]">
                ✓
              </span>
              <span className="leading-relaxed">{item}</span>
            </li>
          ))}
        </motion.ul>

        {/* --- CTA block --- */}
        <motion.div
          className="mt-10"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.6 }}
          variants={fadeUp}
          custom={3}
        >
          <motion.button
            onClick={openCalendly}
            className="group relative inline-flex items-center gap-2 rounded-full bg-[var(--color-accent,#2563eb)] px-8 py-4 text-lg font-medium text-white shadow-sm outline-none transition-transform focus-visible:ring-4 focus-visible:ring-[var(--color-accent,#2563eb)]/30"
            whileHover={{ scale: 1.02, y: -1 }}
            whileTap={{ scale: 0.98, y: 0 }}
            aria-label="Book your free strategy call"
          >
            <span className="relative z-10">Book Your Free Call</span>
            <svg
              className="relative z-10 size-5 transition-transform duration-300 group-hover:translate-x-0.5"
              viewBox="0 0 24 24"
              fill="none"
              aria-hidden="true"
            >
              <path
                d="M5 12h14M13 5l7 7-7 7"
                stroke="currentColor"
                strokeWidth="1.8"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
            </svg>

            {/* glossy sweep */}
            <span
              aria-hidden
              className="pointer-events-none absolute inset-0 overflow-hidden rounded-full"
            >
              <motion.span
                className="absolute left-0 top-0 h-full w-1/3 -skew-x-12 opacity-20 bg-white blur-md"
                whileHover={{ x: ["-140%", "140%"] }}
                transition={{ duration: 0.9, ease: "easeOut" }}
              />
            </span>
          </motion.button>

          {/* subtle secondary */}
          <div className="mt-3 text-sm text-slate-500">
            30 minutes. Pure value. No BS.{" "}
          
          </div>
        </motion.div>


        {/* divider */}
        <motion.div
          className="mx-auto mt-12 h-px w-24 bg-gradient-to-r from-transparent via-slate-300 to-transparent"
          initial={{ opacity: 0, scaleX: 0.6 }}
          whileInView={{ opacity: 1, scaleX: 1 }}
          transition={{ duration: 0.6, ease: EASE }}
          viewport={{ once: true }}
        />
      </div>
    </section>
  );
}
