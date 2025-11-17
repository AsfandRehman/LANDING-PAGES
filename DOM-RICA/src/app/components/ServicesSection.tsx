// app/components/ServicesSection.tsx
"use client";

import * as React from "react";

type ServiceSection = {
  heading: string;
  text?: string;
  images?: string[];
};
type Service = {
  title: string;
  summary: string;
  sections: ServiceSection[];
};

const BRAND = "#3354A5";
const BG = "#0B0B12";

// Keep or import your existing SERVICES array. Included here for completeness.
const SERVICES: Service[] = [
  {
    title: "Content Strategy",
    summary:
      "End-to-end content planning engineered for your audience, offers, and platforms.",
    sections: [],
  },
  {
    title: "AI Cloning",
    summary:
      "Voice/face cloning pipelines to scale your short-form presence while staying on-brand.",
    sections: [],
  },
  {
    title: "Video Editing",
    summary:
      "High-velocity edits for Reels, TikTok, and Shorts with tight hooks, pacing, and captions.",
    sections: [],
  },
  {
    title: "Publishing",
    summary:
      "Platform-native scheduling, metadata, and distribution to maximize reach and consistency.",
    sections: [],
  },
];

export default function ServicesSection() {
  // Subtle icon colors that sit well on dark theme
  const ICONS = ["#5EEAD4", "#FCA5A5", "#93C5FD", "#D8B4FE"]; // teal/rose/blue/purple

  return (
    <section
      aria-label="Services"
      className="w-full px-4 sm:px-6 lg:px-10 py-16 sm:py-20 lg:py-24 relative isolate"
      style={{
        backgroundColor: BG,
        color: "white",
        ["--brand" as string]: BRAND,
      }}
    >
      {/* soft background grid + glow like AboutSimpleSection */}
      <div className="absolute inset-0 -z-10">
        <div className="absolute inset-0 opacity-[0.14] bg-[linear-gradient(0deg,rgba(255,255,255,0.08)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.08)_1px,transparent_1px)] bg-[size:44px_44px]" />
        <div className="absolute inset-0 bg-[radial-gradient(1200px_600px_at_20%_-10%,rgba(51,84,165,0.35),transparent_60%),radial-gradient(900px_500px_at_80%_10%,rgba(164,120,255,0.25),transparent_50%)]" />
      </div>

      <div className="mx-auto max-w-6xl">
        {/* Heading + subheading (same gradient style as About) */}
        <div className="text-center">
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold tracking-tight">
            <span
              className="bg-clip-text text-transparent"
              style={{
                backgroundImage: `linear-gradient(90deg, ${BRAND}, #7C9BFF)`,
              }}
            >
              Our Services
            </span>
          </h2>
          <p className="mt-3 text-white/70 max-w-2xl mx-auto">
            Plan, clone, edit, and publish short-form content—clean, consistent,
            on-brand.
          </p>
        </div>

        {/* Cards */}
        <div className="mt-10 sm:mt-12 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5">
          {SERVICES.map((svc, i) => {
            const color = ICONS[i % ICONS.length];
            return (
              <article
                key={svc.title}
                className="
                  rounded-2xl
                  bg-white/[0.035] backdrop-blur-[2px]
                  ring-1 ring-white/10
                  shadow-[0_10px_40px_rgba(0,0,0,0.35)]
                  p-6
                  transition
                  hover:bg-white/[0.06]
                  hover:ring-[--brand]/40
                "
              >
                {/* Icon dot */}
                <div className="mb-4">
                  <span
                    aria-hidden
                    className="inline-grid place-items-center w-10 h-10 rounded-full text-[#0B0B12] font-semibold"
                    style={{ backgroundColor: color }}
                  >
                    {svc.title.charAt(0)}
                  </span>
                </div>

                {/* Title */}
                <h3 className="text-lg font-semibold">{svc.title}</h3>

                {/* Summary */}
                <p className="mt-2 text-sm text-white/75 leading-relaxed">
                  {svc.summary}
                </p>

                {/* CTA */}
                <div className="mt-5">
                  <button
                    type="button"
                    className="
                      inline-flex items-center justify-center
                      rounded-md border border-white/15
                      px-3 py-2 text-sm font-medium
                      text-white
                      hover:bg-white/5
                      focus:outline-none focus:ring-2 focus:ring-[--brand]/40
                    "
                  >
                    View more
                  </button>
                </div>
              </article>
            );
          })}
        </div>
      </div>
    </section>
  );
}
