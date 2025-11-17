// src/app/components/HeroSection.tsx
"use client";

import React, { useCallback, useEffect, useRef, useState } from "react";
import { motion, useReducedMotion, type Variants } from "framer-motion";

function hasCalendly(
  w: Window
): w is Window & Required<Pick<Window, "Calendly">> {
  return typeof w.Calendly?.initPopupWidget === "function";
}

export default function HeroSection() {
  const ACCENT = "#3354A5";
  const BG_IMAGE = "/images/bg.jpg";

  const CALENDLY_INLINE =
    "https://calendly.com/dom-stratoscontent/30min?embed_domain=book.stratoscontent.com&embed_type=Inline&hide_gdpr_banner=1";
  const CALENDLY_POPUP = "https://calendly.com/dom-stratoscontent/30min";

  const [inlineOpen, setInlineOpen] = useState(false);
  const overlayRef = useRef<HTMLDivElement | null>(null);

  useEffect(() => {
    const onKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") {
        setInlineOpen(false);
        document.documentElement.classList.remove("cal-blur");
      }
    };
    document.addEventListener("keydown", onKey);
    return () => document.removeEventListener("keydown", onKey);
  }, []);

  const openCalendly = useCallback(
    (e?: React.MouseEvent<HTMLAnchorElement | HTMLButtonElement>) => {
      e?.preventDefault();
      document.documentElement.classList.add("cal-blur");

      if (typeof window !== "undefined" && hasCalendly(window)) {
        window.Calendly.initPopupWidget({ url: CALENDLY_POPUP });
        return;
      }
      setInlineOpen(true);
    },
    []
  );

  const closeInlineCalendly = useCallback(() => {
    setInlineOpen(false);
    document.documentElement.classList.remove("cal-blur");
  }, []);

  const prefersReducedMotion = useReducedMotion();

  const container: Variants = {
    hidden: {},
    visible: { transition: { staggerChildren: 0.12, delayChildren: 0.15 } },
  };

  const rise: Variants = {
    hidden: {
      opacity: 0,
      y: prefersReducedMotion ? 0 : 20,
      filter: "blur(6px)",
    },
    visible: {
      opacity: 1,
      y: 0,
      filter: "blur(0px)",
      transition: { duration: 0.6, ease: [0.22, 1, 0.36, 1] },
    },
  };

  const pop: Variants = {
    hidden: { opacity: 0, y: prefersReducedMotion ? 0 : 14, scale: 0.98 },
    visible: {
      opacity: 1,
      y: 0,
      scale: 1,
      transition: { duration: 0.45, ease: [0.22, 1, 0.36, 1] },
    },
  };

  return (
    <section
      className="relative isolate w-full text-neutral-900"
      style={{
        backgroundImage: `url(${BG_IMAGE})`,
        backgroundSize: "cover",
        backgroundPosition: "center",
      }}
    >
      <div
        aria-hidden
        className="absolute inset-0"
        style={{
          background:
            "linear-gradient(180deg, rgba(0,0,0,0.70) 100%, rgba(0,0,0,0.25) 100%, rgba(0,0,0,0.30) 10%)",
          opacity: 0.98,
        }}
      />

      <motion.div
        aria-hidden
        className="pointer-events-none absolute -top-40 -left-40 h-[34rem] w-[34rem] rounded-full blur-3xl opacity-40"
        style={{
          background: `radial-gradient(60% 60% at 50% 50%, ${ACCENT}33 0%, transparent 70%)`,
        }}
        animate={
          prefersReducedMotion
            ? undefined
            : {
                scale: [1, 1.05, 1],
                opacity: [0.4, 0.52, 0.4],
                transition: {
                  duration: 6,
                  repeat: Infinity,
                  ease: "easeInOut",
                },
              }
        }
      />

      <motion.div
        className="relative mx-auto flex min-h-screen max-w-7xl flex-col items-center justify-center px-4 sm:px-6 lg:px-10 text-center pb-8"
        variants={container}
        initial="hidden"
        animate="visible"
      >
        <motion.h1
          variants={rise}
          className="mt-4 font-bold text-white drop-shadow-[0_1px_0_rgba(0,0,0,0.25)] text-4xl sm:text-5xl md:text-7xl max-w-6xl"
        >
          Stratos: A Creator&apos;s{" "}
          <span className="shine-text-accent font-bold">ULTIMATE Shortcut</span>
        </motion.h1>

        <motion.p
          variants={rise}
          className="mt-5 text-white/90 text-base sm:text-lg md:text-xl max-w-5xl"
        >
          Done-for-you content production — AI avatars, bulletproof strategy,
          professional scripting and editing — all designed to remove your
          biggest content headaches so you can focus on what matters most
        </motion.p>

        <motion.div
          variants={rise}
          className="mt-8 flex flex-wrap items-center justify-center gap-3"
        >
          {/* CTA with NAVBAR-LIKE hover-only shimmer fill */}
          <motion.a
            variants={pop}
            href="#featured"
            className="inline-flex items-center justify-center rounded-full px-6 py-3 text-sm font-semibold text-white shadow-sm relative overflow-hidden cta-shine"
            whileHover={{ scale: 1.02 }}
            whileTap={{ scale: 0.98 }}
            style={{ ["--brand" as string]: ACCENT }}
          >
            See Featured Work
          </motion.a>

          <motion.button
            variants={pop}
            onClick={openCalendly}
            className="inline-flex items-center justify-center rounded-full border border-white/70 bg-white/20 px-6 py-3 text-sm font-medium text-white backdrop-blur hover:bg-white/30 transition"
            whileHover={{ scale: 1.02 }}
            whileTap={{ scale: 0.98 }}
          >
            Book a Free Call
          </motion.button>
        </motion.div>
      </motion.div>

      {inlineOpen && (
        <div
          ref={overlayRef}
          className="fixed inset-0 z-[60] flex items-center justify-center bg-black/60 backdrop-blur-sm"
          onClick={(e) => {
            if (e.target === e.currentTarget) closeInlineCalendly();
          }}
        >
          <div className="relative w-[94vw] max-w-5xl rounded-2xl border border-neutral-200 bg-white shadow-[0_6px_30px_rgba(0,0,0,0.25)]">
            <button
              aria-label="Close"
              onClick={closeInlineCalendly}
              className="absolute right-3 top-3 rounded-full bg-black/5 px-3 py-1 text-sm text-neutral-700 hover:bg-black/10"
            >
              ✕
            </button>
            <div className="h-[75vh] min-h-[560px]">
              <iframe
                title="Book a Free Call – Calendly"
                src={CALENDLY_INLINE}
                className="h-full w-full rounded-2xl"
                frameBorder={0}
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
              />
            </div>
            <p className="pb-3 pt-2 text-center text-xs text-neutral-500">
              Scheduling provided by Calendly.
            </p>
          </div>
        </div>
      )}

      <style jsx global>{`
        /* Heading shimmer (keeps 3354A5 fill with a thin bright band) */
        @keyframes shine-move {
          0% {
            background-position: -200% 0;
          }
          100% {
            background-position: 200% 0;
          }
        }

        .shine-text-accent {
          position: relative;
          display: inline-block;
          color: transparent;
          background-image: linear-gradient(
            110deg,
            #3354a5 0%,
            #3354a5 42%,
            rgba(255, 255, 255, 0.98) 50%,
            #3354a5 58%,
            #3354a5 100%
          );
          -webkit-background-clip: text;
          background-clip: text;
          background-size: 220% 100%;
          animation: shine-move 2.8s linear infinite;
        }

        /* === NAVBAR-LIKE CTA HOVER SHIMMER (fill) === */
        @keyframes navbar-fill-shine {
          0% {
            background-position: -200% 0;
          }
          100% {
            background-position: 200% 0;
          }
        }

        .cta-shine {
          /* static gradient so it looks good at rest */
          background: linear-gradient(
            110deg,
            var(--brand, ${ACCENT}) 0%,
            var(--brand, ${ACCENT}) 40%,
            #4a67c5 50%,
            var(--brand, ${ACCENT}) 60%,
            var(--brand, ${ACCENT}) 100%
          );
          background-size: 200% 100%;
        }

        /* Hover-capable devices: animate ONLY on hover */
        @media (hover: hover) and (pointer: fine) {
          .cta-shine:hover {
            animation: navbar-fill-shine 2s linear infinite;
          }
        }

        /* Respect reduced motion */
        @media (prefers-reduced-motion: reduce) {
          .shine-text-accent,
          .cta-shine {
            animation: none !important;
            background-position: 0 0 !important;
          }
        }
      `}</style>
    </section>
  );
}
