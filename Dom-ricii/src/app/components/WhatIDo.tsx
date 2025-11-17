// src/app/components/WhatIDo.tsx
"use client";

import React from "react";
import { motion, type Variants } from "framer-motion";

type Item = {
  title: string;
  subtitle: string;
  icon: React.ReactNode;
};

export default function WhatIDo({
  accent = "#3354A5",
  dark = "#231F20",
  items = DEFAULT_ITEMS,
}: {
  accent?: string;
  dark?: string;
  items?: Item[];
}) {
  const [hovered, setHovered] = React.useState<number | null>(null);

  // divider highlight logic
  const line1Active = hovered !== null && (hovered === 0 || hovered === 1);
  const line2Active = hovered !== null && (hovered === 1 || hovered === 2);

  // Use cubic-bezier tuple easing (typed)
  const EASE_OUT: [number, number, number, number] = [0.22, 1, 0.36, 1];

  const container: Variants = {
    hidden: {},
    show: {
      transition: { staggerChildren: 0.08, delayChildren: 0.1 },
    },
  };

  const itemVar: Variants = {
    hidden: { opacity: 0, y: 14 },
    show: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.4, ease: EASE_OUT },
    },
  };

  return (
    <section
      aria-label="What I Do"
      className="w-full bg-white text-neutral-900"
    >
      <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-10 py-10 md:py-14">
        <div className="mb-6 text-xs font-semibold uppercase tracking-[0.22em] text-neutral-700">
          What we Do
        </div>

        {/* Grid with absolute dividers (no boxed background) */}
        <div className="relative">
          {/* vertical divider 1 (between col 1 & 2) */}
          <span
            aria-hidden
            className="pointer-events-none absolute top-0 hidden h-full w-px md:block"
            style={{
              left: "33.3333%",
              backgroundColor: `${dark}22`,
              boxShadow: line1Active
                ? `0 0 0 0.5px ${accent}66, 0 0 18px ${accent}80`
                : "none",
              transition: "box-shadow 220ms ease",
            }}
          />
          {/* vertical divider 2 (between col 2 & 3) */}
          <span
            aria-hidden
            className="pointer-events-none absolute top-0 hidden h-full w-px md:block"
            style={{
              left: "66.6667%",
              backgroundColor: `${dark}22`,
              boxShadow: line2Active
                ? `0 0 0 0.5px ${accent}66, 0 0 18px ${accent}80`
                : "none",
              transition: "box-shadow 220ms ease",
            }}
          />

          <motion.div
            variants={container}
            initial="hidden"
            whileInView="show"
            viewport={{ once: true, amount: 0.3 }}
            className="grid grid-cols-1 md:grid-cols-3"
          >
            {items.map((item, i) => (
              <motion.div
                key={i}
                variants={itemVar}
                onMouseEnter={() => setHovered(i)}
                onMouseLeave={() => setHovered(null)}
                className="group p-6 md:p-8 transition-transform duration-200"
              >
                <div className="mx-auto flex max-w-xs flex-col items-start">
                  <div
                    className="mb-3 rounded-xl border p-2 transition-all duration-300"
                    style={{
                      borderColor: accent,
                      backgroundColor: "white",
                      boxShadow:
                        hovered === i
                          ? "0 8px 22px rgba(0,0,0,0.12)"
                          : "0 6px 18px rgba(0,0,0,0.08)",
                    }}
                    aria-hidden
                  >
                    {item.icon}
                  </div>

                  <h3 className="text-base font-semibold text-[#231F20]">
                    {item.title}
                  </h3>

                  <p className="mt-1 text-sm text-neutral-600">
                    {item.subtitle}
                  </p>

                  <span
                    className="mt-4 inline-block h-[3px] w-16 rounded-full transition-all duration-300"
                    style={{
                      backgroundColor: accent,
                      boxShadow:
                        hovered === i
                          ? `0 0 0 1px ${accent}55, 0 0 12px ${accent}88`
                          : "none",
                    }}
                    aria-hidden
                  />
                </div>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </div>
    </section>
  );
}

/* Default content & icons */
const DEFAULT_ITEMS: Item[] = [
  {
    title: "Syncing the footage with music & audio",
    subtitle: "Beat-matched pacing for retention.",
    icon: <PlayIcon />,
  },
  {
    title: "Dynamic transitions & motion graphics",
    subtitle: "Tasteful, modern, and on-brand effects.",
    icon: <SparkIcon />,
  },
  {
    title: "Subtitling for media streaming platform",
    subtitle: "Readable, on-brand captions that convert.",
    icon: <CaptionIcon />,
  },
];

function PlayIcon() {
  return (
    <svg width="22" height="22" viewBox="0 0 24 24" fill="none" aria-hidden>
      <circle cx="12" cy="12" r="10" stroke="#3354A5" />
      <path d="M10 8l6 4-6 4V8z" fill="#231F20" />
    </svg>
  );
}
function SparkIcon() {
  return (
    <svg width="22" height="22" viewBox="0 0 24 24" fill="none" aria-hidden>
      <path
        d="M12 2l2.2 5.5L20 10l-5.8 2.5L12 18l-2.2-5.5L4 10l5.8-2.5L12 2z"
        stroke="#3354A5"
        fill="#231F20"
      />
    </svg>
  );
}
function CaptionIcon() {
  return (
    <svg width="22" height="22" viewBox="0 0 24 24" fill="none" aria-hidden>
      <rect
        x="3"
        y="6"
        width="18"
        height="12"
        rx="2"
        stroke="#3354A5"
        strokeWidth="1.5"
      />
      <path d="M7 10h6M7 14h10" stroke="#231F20" strokeWidth="1.5" />
    </svg>
  );
}
