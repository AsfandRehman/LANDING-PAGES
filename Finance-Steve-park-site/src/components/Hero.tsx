// app/components/HeroFinance.tsx
"use client";

import { useEffect, useMemo, useState } from "react";
import Link from "next/link";
import { AnimatePresence, motion } from "framer-motion";

const BG_IMAGE = "/images/bg.png"; // place PNG in public/images

const PHRASES = [
  "Unlock Your Financial Potential with CreditWise.",
  "Building responsible credit and securing smart funding solutions for your dreams.",
  "Low-stress credit building with transparent guidance.",
  "From first card to funding—grow with confidence.",
  "Personalized plans, smarter approvals, better rates.",
];

export default function HeroFinance() {
  const [index, setIndex] = useState(0);

  useEffect(() => {
    const id = setInterval(
      () => setIndex((i) => (i + 1) % PHRASES.length),
      3500
    );
    return () => clearInterval(id);
  }, []);

  const current = useMemo(() => PHRASES[index], [index]);

  return (
    <section
      className="relative isolate overflow-hidden bg-[#0D0D0D] min-h-screen flex items-center"
      aria-label="CreditWise finance hero"
    >
      {/* === LAYER 1: Animated gradient mesh === */}
      <div className="pointer-events-none absolute inset-0 -z-30 opacity-95">
        <div
          className="absolute -inset-[10%] animate-mesh [filter:saturate(130%)]"
          style={{
            background:
              "radial-gradient(44% 38% at 15% 30%, rgba(0,199,190,0.55) 0%, rgba(0,0,0,0) 60%)," +
              "radial-gradient(40% 40% at 85% 70%, rgba(255,140,0,0.50) 0%, rgba(0,0,0,0) 62%)," +
              "radial-gradient(36% 28% at 65% 18%, rgba(83,224,207,0.38) 0%, rgba(0,0,0,0) 60%)," +
              "radial-gradient(120% 90% at 50% 100%, rgba(0,0,0,0.55) 0%, rgba(0,0,0,0.0) 45%)",
          }}
        />
      </div>

      {/* === LAYER 2: Grid lines === */}
      <div className="pointer-events-none absolute inset-0 -z-20 opacity-[0.12] mix-blend-screen">
        <div
          className="absolute inset-0 bg-[length:22px_22px]"
          style={{
            backgroundImage:
              "linear-gradient(to right, rgba(255,255,255,0.7) 1px, transparent 1px)," +
              "linear-gradient(to bottom, rgba(255,255,255,0.7) 1px, transparent 1px)",
          }}
        />
      </div>

      {/* === LAYER 3: Background PNG reveal === */}
      <motion.div
        className="absolute inset-0 -z-10 bg-center bg-no-repeat bg-contain md:bg-cover"
        style={{ backgroundImage: `url(${BG_IMAGE})` }}
        initial={{ opacity: 0, scale: 1.06, filter: "blur(6px)" }}
        animate={{ opacity: 0.45, scale: 1, filter: "blur(0px)" }}
        transition={{ duration: 1.2, ease: "easeOut" }}
      />

      {/* === LAYER 4: Darken + noise overlays === */}
      <div className="absolute inset-0 -z-10 bg-gradient-to-b from-black/80 via-black/55 to-black/80" />
      <div className="pointer-events-none absolute inset-0 -z-10 opacity-[0.10] mix-blend-overlay bg-noise" />

      {/* === LAYER 5: Floating orbs === */}
      <div aria-hidden className="absolute inset-0 -z-10">
        <div className="orb orb-cyan" />
        <div className="orb orb-amber" />
      </div>

      {/* === CONTENT === */}
      <div className="mx-auto max-w-7xl w-full px-4 sm:px-6 lg:px-8">
        <div className="max-w-3xl py-16 sm:py-20">
          <motion.h1
            className="text-4xl font-semibold leading-tight tracking-tight text-white sm:text-5xl lg:text-6xl"
            initial={{ opacity: 0, y: 8 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, ease: "easeOut" }}
          >
            <span className="bg-gradient-to-r from-[#00C7BE] via-[#53E0CF] to-[#FF8C00] bg-clip-text text-transparent">
              Unlock Your Financial Potential with CreditWise.
            </span>
          </motion.h1>

          <div className="mt-5 h-[3.6rem] sm:h-[3.9rem] lg:h-[4.2rem] relative">
            <AnimatePresence mode="wait">
              <motion.p
                key={index}
                className="absolute inset-0 text-base leading-relaxed text-zinc-300 sm:text-lg lg:text-xl"
                initial={{ opacity: 0, y: 6 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -6 }}
                transition={{ duration: 0.35, ease: "easeOut" }}
                aria-live="polite"
              >
                {current}
              </motion.p>
            </AnimatePresence>
          </div>

          <motion.div
            className="mt-8 flex flex-wrap gap-3"
            initial={{ opacity: 0, y: 8 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.15, ease: "easeOut" }}
          >
            <Link
              href="#apply"
              className="group inline-flex items-center justify-center rounded-2xl bg-[#FF8C00] px-5 py-3 text-sm font-semibold text-black shadow-lg shadow-orange-500/10 transition will-change-transform hover:translate-y-[-1px] hover:shadow-orange-500/20 focus:outline-none focus-visible:ring-2 focus-visible:ring-offset-2 focus-visible:ring-orange-400 focus-visible:ring-offset-[#0D0D0D]"
            >
              Apply Now
              <svg
                viewBox="0 0 24 24"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
                className="ml-2 h-4 w-4 transition group-hover:translate-x-[2px]"
              >
                <path
                  d="M5 12h14M13 5l7 7-7 7"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
              </svg>
            </Link>
            <Link
              href="#learn"
              className="inline-flex items-center justify-center rounded-2xl border border-white/10 bg-white/5 px-5 py-3 text-sm font-medium text-white/90 backdrop-blur transition hover:bg-white/10 focus:outline-none focus-visible:ring-2 focus-visible:ring-offset-2 focus-visible:ring-white/30 focus-visible:ring-offset-[#0D0D0D]"
            >
              Learn More
            </Link>
          </motion.div>

          <motion.div
            className="mt-10 grid grid-cols-2 gap-6 text-sm text-zinc-400 sm:grid-cols-4"
            initial={{ opacity: 0, y: 8 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.25, ease: "easeOut" }}
          >
            <Feature
              k="fees"
              title="0% Hidden Fees"
              body="Transparent pricing"
            />
            <Feature k="rating" title="4.8★" body="Average rating" />
            <Feature k="funding" title="$50M+" body="Funding facilitated" />
            <Feature k="security" title="PCI-DSS" body="Grade security" />
          </motion.div>
        </div>
      </div>

      {/* === STYLES === */}
      <style jsx>{`
        @keyframes mesh {
          0% {
            transform: translateY(0px) translateX(0px) scale(1);
          }
          50% {
            transform: translateY(-18px) translateX(12px) scale(1.02);
          }
          100% {
            transform: translateY(0px) translateX(0px) scale(1);
          }
        }
        .animate-mesh {
          animation: mesh 16s ease-in-out infinite;
        }
        .bg-noise {
          background-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='140' height='140' viewBox='0 0 140 140'%3E%3Cfilter id='n'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.8' numOctaves='4' stitchTiles='stitch'/%3E%3CfeColorMatrix type='saturate' values='0'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23n)' opacity='0.40'/%3E%3C/svg%3E");
          background-size: 180px 180px;
        }
        .orb {
          position: absolute;
          border-radius: 9999px;
          filter: blur(28px) saturate(135%);
          opacity: 0.35;
          mix-blend-mode: screen;
          animation: float 20s ease-in-out infinite;
        }
        .orb-cyan {
          width: 40vmin;
          height: 40vmin;
          left: 6%;
          top: 18%;
          background: radial-gradient(
            circle at 30% 30%,
            rgba(0, 199, 190, 1),
            transparent 62%
          );
          animation-delay: -4s;
        }
        .orb-amber {
          width: 52vmin;
          height: 52vmin;
          right: 4%;
          bottom: 10%;
          background: radial-gradient(
            circle at 60% 40%,
            rgba(255, 140, 0, 0.95),
            transparent 68%
          );
        }
        @keyframes float {
          0% {
            transform: translate3d(0, 0, 0) scale(1);
          }
          50% {
            transform: translate3d(12px, -16px, 0) scale(1.03);
          }
          100% {
            transform: translate3d(0, 0, 0) scale(1);
          }
        }
      `}</style>
    </section>
  );
}

function Feature({
  k,
  title,
  body,
}: {
  k: string;
  title: string;
  body: string;
}) {
  return (
    <motion.div
      layoutId={`feat-${k}`}
      className="relative"
      whileHover={{ scale: 1.02 }}
      transition={{ type: "spring", stiffness: 300, damping: 22 }}
    >
      <div className="absolute -inset-px rounded-xl bg-gradient-to-br from-white/6 via-white/2 to-transparent" />
      <div className="relative rounded-xl border border-white/10 bg-white/5 px-4 py-3 backdrop-blur">
        <p className="font-semibold text-white">{title}</p>
        <p className="text-zinc-400">{body}</p>
      </div>
    </motion.div>
  );
}
