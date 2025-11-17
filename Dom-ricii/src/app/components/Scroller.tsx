"use client";

import React, { useMemo, useRef, useState } from "react";
import CalendlyCTA from "./CalendlyCTA";

// —— Brand tokens
const BRAND = { hex: "#3354A5" }; // CTA / accents
const INK = { hex: "#231F20" }; // Primary text on light

// —— Types
type Reel = {
  src: string;
  poster?: string;
  title?: string;
};

// —— Demo data
const REELS: Reel[] = [
  { src: "/images/v1.mp4", poster: "/images/1.jpg", title: "Reel 1" },
  { src: "/images/v1.mp4", poster: "/images/2.jpg", title: "Reel 2" },
  { src: "/images/v1.mp4", poster: "/images/3.jpg", title: "Reel 3" },
  { src: "/images/v1.mp4", poster: "/images/4.jpg", title: "Reel 4" },
  { src: "/images/v1.mp4", poster: "/images/5.jpg", title: "Reel 5" },
  { src: "/images/v1.mp4", poster: "/images/6.jpg", title: "Reel 6" },
  { src: "/images/v1.mp4", poster: "/images/7.jpg", title: "Reel 7" },
  { src: "/images/v1.mp4", poster: "/images/8.jpg", title: "Reel 8" },
  { src: "/images/v1.mp4", poster: "/images/9.jpg", title: "Reel 9" },
  { src: "/images/v1.mp4", poster: "/images/10.jpg", title: "Reel 10" },
];

// —— Reel card (light theme)
function ReelCard({ reel }: { reel: Reel }) {
  const vref = useRef<HTMLVideoElement | null>(null);
  const [isPlaying, setIsPlaying] = useState(false);

  const play = () => {
    const v = vref.current;
    if (!v) return;
    v.play().catch(() => void 0);
    setIsPlaying(true);
  };
  const pause = () => {
    const v = vref.current;
    if (!v) return;
    v.pause();
    setIsPlaying(false);
  };

  return (
    <div
      className="
        group relative
        w-[76vw] sm:w-64 md:w-72 lg:w-80 xl:w-[22rem]
        aspect-[9/16] shrink-0
        rounded-2xl overflow-hidden
        border border-black/5
        bg-white
        shadow-[0_8px_28px_rgba(16,24,40,0.08)]
        transition-transform duration-200
        hover:shadow-[0_16px_44px_rgba(16,24,40,0.14)]
      "
    >
      <video
        ref={vref}
        src={reel.src}
        poster={reel.poster}
        muted
        playsInline
        preload="metadata"
        className="h-full w-full object-cover"
        onMouseEnter={play}
        onMouseLeave={pause}
        onTouchStart={() => (isPlaying ? pause() : play())}
        aria-label={reel.title ?? "Video reel"}
      />
      {/* soft top gloss for depth (light theme) */}
      <div className="pointer-events-none absolute inset-0 bg-gradient-to-b from-white/35 via-transparent to-transparent" />
      {/* focus/hover ring in brand */}
      <div className="pointer-events-none absolute inset-0 ring-0 group-hover:ring-2 group-focus:ring-2 ring-[--brand] transition-all" />
    </div>
  );
}

export default function VideoShowreelSection() {
  // Expose brand + ink colors as CSS vars for Tailwind arbitrary usage
  const cssVars = useMemo<React.CSSProperties>(
    () => ({
      ["--brand" as string]: BRAND.hex,
      ["--ink" as string]: INK.hex,
    }),
    []
  );

  return (
    <section
      style={cssVars}
      className="
        relative isolate overflow-hidden
        px-4 sm:px-6 lg:px-8 py-16 sm:py-20 lg:py-28
        text-[--ink]
        bg-[#F7F8FB]
      "
      aria-label="Video Showreel"
    >
      {/* Decorative background (light): soft radial color washes */}
      <div
        className="
          absolute inset-0 -z-10
          bg-[radial-gradient(1200px_600px_at_20%_-10%,rgba(51,84,165,0.12),transparent_60%),radial-gradient(900px_500px_at_80%_10%,rgba(35,31,32,0.08),transparent_55%)]
        "
      />
      {/* faint grid masked vertically for structure */}
      <div
        className="
          absolute inset-0 -z-10 opacity-[0.22]
          bg-[linear-gradient(0deg,rgba(0,0,0,0.04)_1px,transparent_1px),linear-gradient(90deg,rgba(0,0,0,0.04)_1px,transparent_1px)]
          bg-[size:44px_44px]
          [mask-image:linear-gradient(to_bottom,transparent,black_12%,black_88%,transparent)]
        "
      />

      {/* Header */}
      <div className="mx-auto max-w-6xl text-center space-y-4 sm:space-y-5">
        <h2
          className="
            text-3xl sm:text-8xl md:text-6xl lg:text-6xl font-extrabold tracking-tight leading-tight
            text-[--ink]
          "
        >
          Optimize Your Marketing <br className="hidden sm:block" />
          <span className="bg-[--brand] bg-clip-text text-transparent [background-image:linear-gradient(90deg,var(--brand),#6F8CFF)]">
            With Video
          </span>
        </h2>

        <p className="mx-auto max-w-2xl text-sm sm:text-base text-[color:rgba(35,31,32,0.72)]">
          High-performing videos crafted to connect, convert, and drive results.
        </p>
      </div>

      {/* Carousel / Grid */}
      <div id="showreel" className="mt-10 sm:mt-12 lg:mt-16" />

      <div className="mx-auto max-w-7xl relative">
        {/* Edge fades for overflow */}
        <div className="pointer-events-none absolute inset-y-0 left-0 w-12 sm:w-16 bg-gradient-to-r from-[#F7F8FB] to-transparent z-10" />
        <div className="pointer-events-none absolute inset-y-0 right-0 w-12 sm:w-16 bg-gradient-to-l from-[#F7F8FB] to-transparent z-10" />

        <div
          className="
            hide-scroll
            flex gap-4 sm:gap-6
            overflow-x-auto scroll-smooth snap-x snap-mandatory
            pb-2 sm:pb-3
            [-ms-overflow-style:none] [scrollbar-width:none]
          "
          style={{ WebkitOverflowScrolling: "touch" }}
        >
          {/* hide scrollbar for webkit (scoped) */}
          <style>{`.hide-scroll::-webkit-scrollbar{display:none}`}</style>

          {REELS.map((reel, idx) => (
            <div
              key={idx}
              className="snap-start first:ml-2 last:mr-2 sm:first:ml-4 sm:last:mr-4"
            >
              <ReelCard reel={reel} />
            </div>
          ))}
        </div>
      </div>
      <section className="py-16">
        {/* Centered by default */}
        <CalendlyCTA />
      </section>
    </section>
  );
}
