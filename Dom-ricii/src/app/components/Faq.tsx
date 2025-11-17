// components/FAQSection.tsx
"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

type FaqItem = { q: string; a: string };

// Only 6 concise FAQs
const items: FaqItem[] = [
  {
    q: "What’s the turnaround?",
    a: "48–72 hours per reel/short after we receive your assets and brief. Rush (24h) is available on request.",
  },
  {
    q: "Which platforms & formats?",
    a: "Instagram Reels, TikTok, YouTube Shorts, Facebook—1080×1920 H.264 by default. We can also supply 1:1 and 16:9 cuts.",
  },
  {
    q: "Hooks, scripts & captions?",
    a: "Yes—short scripts, retention-focused hooks, and burned-in captions (with emphasis highlights). SRT/VTT available on request.",
  },
  {
    q: "Can you match our brand?",
    a: "Absolutely. We create a mini brand kit (colors, fonts, motion style, lower thirds) from your samples and use it across edits.",
  },
  {
    q: "Thumbnails included?",
    a: "Yes—CTR-focused thumbnails (1280×720) with clean subject isolation and bold type. We can supply 2–3 variations if needed.",
  },
  {
    q: "How do we start?",
    a: "Book a call, pick a plan, share your assets/brand kit. We deliver your first edited reel/thumbnail within 48–72 hours.",
  },
];

const BRAND = "#3354A5";
const DARK = "#231F20";

const cx = (...c: Array<string | false | undefined>) =>
  c.filter(Boolean).join(" ");

export default function FAQSection() {
  const [openIndex, setOpenIndex] = useState<number | null>(0); // first one open

  return (
    <motion.section
      id="faq"
      className="relative bg-white overflow-hidden isolate"
      initial={{ opacity: 0, y: 24 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.2 }}
      transition={{ type: "spring", stiffness: 120, damping: 20 }}
    >
      <div className="mx-auto w-full max-w-7xl px-4 sm:px-6 lg:px-8 py-10 sm:py-14 md:py-20">
        {/* Heading */}
        <motion.header
          className="mb-8 md:mb-12 text-center"
          initial={{ opacity: 0, y: 12 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.25 }}
          transition={{ delay: 0.05, duration: 0.45, ease: [0.2, 0.8, 0.2, 1] }}
        >
          <h2
            className="font-extrabold tracking-tight leading-[0.98] text-[clamp(28px,6vw,56px)]"
            style={{ color: DARK }}
          >
            Frequently Asked{" "}
            <span className="shimmer-text" style={{ color: BRAND }}>
              Questions
            </span>
          </h2>
          <p className="mt-3 italic" style={{ color: "rgba(35,31,32,0.72)" }}>
            Everything you need to know about working with us
          </p>
        </motion.header>

        {/* Wider list to reduce side whitespace */}
        <motion.ol
          className="space-y-5 min-w-0 mx-auto max-w-5xl"
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, amount: 0.25 }}
          variants={{
            hidden: {},
            show: { transition: { staggerChildren: 0.08 } },
          }}
        >
          {items.map((item, idx) => {
            const isOpen = openIndex === idx;
            const contentId = `faq-content-${idx}`;
            return (
              <motion.li
                key={idx}
                variants={{
                  hidden: { opacity: 0, y: 16 },
                  show: { opacity: 1, y: 0 },
                }}
              >
                <motion.div
                  className={cx(
                    "group relative rounded-xl border p-4 sm:p-5 w-full bg-white",
                    "transition-all"
                  )}
                  style={{
                    borderColor: "rgba(35,31,32,0.08)",
                    boxShadow: isOpen
                      ? "0 28px 56px -28px rgba(0,0,0,0.45)"
                      : "0 20px 40px -28px rgba(0,0,0,0.35)",
                  }}
                  whileHover={{
                    y: -2,
                    boxShadow: "0 28px 56px -28px rgba(0,0,0,0.40)",
                  }}
                >
                  {/* Left rail (solid brand color when open) */}
                  <motion.span
                    aria-hidden
                    className="absolute left-0 top-0 h-full w-[4px] rounded-l-xl hidden sm:block"
                    initial={false}
                    animate={{ opacity: isOpen ? 1 : 0 }}
                    style={{ background: BRAND }}
                  />

                  <motion.button
                    type="button"
                    onClick={() => setOpenIndex(isOpen ? null : idx)}
                    aria-expanded={isOpen}
                    aria-controls={contentId}
                    className="flex w-full items-center gap-3 text-left"
                    whileTap={{ scale: 0.985 }}
                    transition={{ type: "spring", stiffness: 400, damping: 24 }}
                  >
                    {/* Number badge — solid brand color, always visible */}
                    <span
                      className="inline-grid place-items-center rounded-full font-bold text-[11px] leading-none text-white select-none"
                      style={{
                        background: BRAND,
                        minWidth: 32,
                        height: 32,
                        padding: "0 6px",
                      }}
                    >
                      {(idx + 1).toString().padStart(2, "0")}
                    </span>

                    {/* Question */}
                    <span
                      className="flex-1 min-w-0 text-sm sm:text-base font-medium leading-snug break-words"
                      style={{ color: DARK }}
                    >
                      {item.q}
                    </span>

                    {/* Plus / minus */}
                    <motion.span
                      className="ml-3 grid w-7 h-7 place-items-center rounded-full border bg-white"
                      style={{
                        borderColor: "rgba(35,31,32,0.10)",
                        color: DARK,
                      }}
                      animate={{ rotate: 0 }}
                      transition={{
                        type: "spring",
                        stiffness: 260,
                        damping: 20,
                      }}
                      aria-hidden
                    >
                      {isOpen ? <MinusIcon /> : <PlusIcon />}
                    </motion.span>
                  </motion.button>

                  {/* Answer */}
                  <AnimatePresence initial={false}>
                    {isOpen && (
                      <motion.div
                        id={contentId}
                        key="content"
                        initial={{ height: 0, opacity: 0 }}
                        animate={{ height: "auto", opacity: 1 }}
                        exit={{ height: 0, opacity: 0 }}
                        transition={{ duration: 0.28, ease: "easeOut" }}
                        className="overflow-hidden"
                      >
                        <motion.p
                          className="mt-3 pl-10 text-sm text-pretty break-words"
                          style={{ color: "rgba(35,31,32,0.75)" }}
                          initial={{ y: -6, opacity: 0 }}
                          animate={{ y: 0, opacity: 1 }}
                          transition={{ delay: 0.05, duration: 0.2 }}
                        >
                          {item.a}
                        </motion.p>
                      </motion.div>
                    )}
                  </AnimatePresence>
                </motion.div>
              </motion.li>
            );
          })}
        </motion.ol>
        <style jsx>{`
          @keyframes shimmer-scan {
            0% {
              background-position: 200% 0;
            }
            100% {
              background-position: -200% 0;
            }
          }
          .shimmer-text {
            color: transparent !important;
            background-image: linear-gradient(
              110deg,
              ${BRAND} 0%,
              ${BRAND} 35%,
              #ffffff 50%,
              ${BRAND} 65%,
              ${BRAND} 100%
            );
            background-size: 200% 100%;
            -webkit-background-clip: text;
            background-clip: text;
            animation: shimmer-scan 2.4s linear infinite;
            text-shadow: 0 0 0.25px rgba(0, 0, 0, 0.06);
          }
        `}</style>
      </div>
    </motion.section>
  );
}

/* ---- Icons ---- */
function PlusIcon() {
  return (
    <svg
      width="16"
      height="16"
      viewBox="0 0 20 20"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
    >
      <path d="M10 4v12M4 10h12" strokeLinecap="round" />
    </svg>
  );
}
function MinusIcon() {
  return (
    <svg
      width="16"
      height="16"
      viewBox="0 0 20 20"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
    >
      <path d="M4 10h12" strokeLinecap="round" />
    </svg>
  );
}
