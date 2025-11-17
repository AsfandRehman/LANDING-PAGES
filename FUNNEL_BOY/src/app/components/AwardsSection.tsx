"use client";

import React from "react";

/**
 * AwardsSection — transparent background, dark-friendly styling
 * Tailwind required. No external icon libs.
 */
export default function AwardsSection() {
  return (
    <section className="relative w-full overflow-hidden py-20 md:py-28">
      {/* WATERMARK: "awards" */}
      <div
        aria-hidden
        className="pointer-events-none select-none absolute inset-x-0 -top-8 md:-top-14 text-center"
      >
        <span
          className="font-extrabold tracking-tight uppercase"
          style={{
            fontSize: "22vw", // very large, scales with viewport
            lineHeight: 0.8,
            letterSpacing: "-0.04em",
            color: "rgba(255,255,255,0.04)", // subtle on dark
            display: "inline-block",
          }}
        >
          awards
        </span>
      </div>

      <div className="relative mx-auto w-full max-w-7xl px-6 md:px-10">
        {/* TIMELINE + LABEL */}
        <div className="mt-[24vw] md:mt-[14vw]">
          <div className="relative h-8">
            {/* line */}
            <div className="absolute left-0 right-0 top-1/2 -translate-y-1/2 border-t border-white/30" />
            {/* end caps */}
            <div className="absolute left-0 top-1/2 -translate-y-1/2 h-3 w-3 rounded-full border border-white/60" />
            <div className="absolute right-0 top-1/2 -translate-y-1/2 h-3 w-3 rounded-full border border-white/60" />
          </div>

          {/* latest award pill */}
          <div className="mt-3 flex items-center gap-3 text-[11px] tracking-[0.18em] uppercase">
            <span className="relative grid place-items-center h-4 w-4 rounded-full">
              {/* tiny ring with inner dot */}
              <span className="absolute inset-0 rounded-full border border-white/40" />
              <span className="relative h-1.5 w-1.5 rounded-full bg-pink-500 shadow-[0_0_0_2px_rgba(255,255,255,0.15)]" />
            </span>
            <span className="text-white/70">Latest Award</span>
          </div>
        </div>

        {/* CONTENT ROW */}
        <div className="mt-10 md:mt-14 grid grid-cols-1 md:grid-cols-12 gap-10 md:gap-12 items-start">
          {/* LEFT: SLING SHOT + CTA DOT */}
          <div className="md:col-span-5 lg:col-span-4">
            <div className="flex items-start gap-5">
              <div className="leading-[0.86]">
                <h2 className="text-[16vw] md:text-[8vw] lg:text-[6.8vw] font-extrabold tracking-tight uppercase">
                  <span className="block">Sling</span>
                  <span className="block">Shot</span>
                </h2>
              </div>

              {/* Red circular CTA with arrow NE */}
              <button
                aria-label="Open latest award"
                className="shrink-0 mt-4 grid place-items-center h-16 w-16 md:h-20 md:w-20 rounded-full bg-[#E73852] hover:brightness-110 transition"
              >
                {/* inline SVG arrow (no extra deps) */}
                <svg
                  width="28"
                  height="28"
                  viewBox="0 0 24 24"
                  fill="none"
                  aria-hidden
                >
                  <path
                    d="M7 17L17 7M17 7H9M17 7V15"
                    stroke="white"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                </svg>
              </button>
            </div>
          </div>

          {/* RIGHT: 3 circular badges */}
          <div className="md:col-span-7 lg:col-span-8">
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-6 md:gap-8">
              <AwardBubble
                title="W."
                count={8}
                titleClass="text-3xl md:text-4xl font-extrabold tracking-tight"
              />
              <AwardBubble
                // stylized S-like mark; you can replace with an inline SVG if you have one
                title="S"
                count={9}
                titleClass="text-3xl md:text-4xl font-extrabold tracking-[0.02em]"
              />
              <AwardBubble
                title="FWA"
                count={3}
                titleClass="text-2xl md:text-3xl font-extrabold tracking-[0.08em]"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

/* --------- Badge bubble --------- */
function AwardBubble({
  title,
  count,
  titleClass = "",
}: {
  title: string;
  count: number;
  titleClass?: string;
}) {
  return (
    <div className="relative aspect-square rounded-full bg-white/5 ring-1 ring-white/8 backdrop-blur-[1px] grid place-items-center">
      <div className="text-center">
        <div className={`text-white ${titleClass}`}>{title}</div>
        <div className="mt-1 text-[10px] tracking-[0.28em] text-white/70">
          x {count}
        </div>
      </div>

      {/* soft inner vignette */}
      <div
        className="pointer-events-none absolute inset-0 rounded-full"
        style={{
          boxShadow: "inset 0 0 120px rgba(0,0,0,0.25)",
        }}
      />
    </div>
  );
}
