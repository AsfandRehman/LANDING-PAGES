"use client";

import React, { useMemo, useRef, useState } from "react";

// Primary brand & CTA color
const BRAND = { hex: "#3354A5" };

// —— Types
type Reel = {
  src: string; // video file path (e.g., public/videos/..)
  poster?: string; // optional poster image
  title?: string; // optional label for accessibility
};

// —— Demo data (replace with your files). Ensure these exist in /public/videos and /public/posters
const REELS: Reel[] = [
  { src: "/images/v1.mp4", poster: "/images/poster.png", title: "Reel 1" },
  { src: "/images/v1.mp4", poster: "/images/poster.png", title: "Reel 2" },
  { src: "/images/v1.mp4", poster: "/images/poster.png", title: "Reel 3" },
  { src: "/images/v1.mp4", poster: "/images/poster.png", title: "Reel 4" },
  { src: "/images/v1.mp4", poster: "/images/poster.png", title: "Reel 5" },
  { src: "/images/v1.mp4", poster: "/images/poster.png", title: "Reel 6" },
  { src: "/images/v1.mp4", poster: "/images/poster.png", title: "Reel 7" },
  { src: "/images/v1.mp4", poster: "/images/poster.png", title: "Reel 8" },
  { src: "/images/v1.mp4", poster: "/images/poster.png", title: "Reel 9" },
  { src: "/images/v1.mp4", poster: "/images/poster.png", title: "Reel 10" },
];

// —— Reel card (no 3D/tilt)
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
    <div className="group relative w-[76vw] sm:w-64 md:w-72 lg:w-80 xl:w-[22rem] aspect-[9/16] shrink-0 rounded-2xl overflow-hidden ring-1 ring-white/8 shadow-[0_10px_40px_rgba(0,0,0,0.45)] transition-transform duration-200">
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
      {/* subtle gradient gloss + focus ring on hover */}
      <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-black/40 via-transparent to-white/0 opacity-60 mix-blend-soft-light" />
      <div className="pointer-events-none absolute inset-0 ring-0 group-hover:ring-2 group-focus:ring-2 ring-[--brand] transition-all" />
    </div>
  );
}

export default function VideoShowreelSection() {
  // expose brand color as CSS var for Tailwind arbitrary usage
  const brandStyle = useMemo<React.CSSProperties>(
    () => ({ ["--brand" as string]: BRAND.hex }),
    []
  );

  return (
    <section
      style={brandStyle}
      className="
        relative isolate overflow-hidden
        px-4 sm:px-6 lg:px-8 py-16 sm:py-20 lg:py-28
        text-white
        bg-[#0B0B12]
      "
      aria-label="Video Showreel"
    >
      {/* Decorative background: gradients + faint grid */}
      <div
        className="
          absolute inset-0 -z-10
          bg-[radial-gradient(1200px_600px_at_20%_-10%,rgba(51,84,165,0.35),transparent_60%),radial-gradient(900px_500px_at_80%_10%,rgba(164,120,255,0.25),transparent_50%)]
        "
      />
      <div
        className="
          absolute inset-0 -z-10 opacity-[0.18]
          bg-[linear-gradient(0deg,rgba(255,255,255,0.08)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.08)_1px,transparent_1px)]
          bg-[size:44px_44px]
          mask-image:[linear-gradient(to_bottom,transparent,black_10%,black_90%,transparent)]
        "
      />

      {/* Header */}
      <div className="mx-auto max-w-6xl text-center space-y-4 sm:space-y-5">
        <h2 className="text-3xl sm:text-4xl lg:text-6xl font-bold tracking-tight leading-tight">
          Optimize Your Marketing <br className="hidden sm:block" />
          <span className="bg-[--brand] bg-clip-text text-transparent [background-image:linear-gradient(90deg,var(--brand),#7c9bff)]">
            With Video
          </span>
        </h2>
        <p className="mx-auto max-w-2xl text-sm sm:text-base text-white/80">
          High-performing videos crafted to connect, convert, and drive results.
        </p>
        <div className="pt-2">
          <a
            href="#showreel"
            className="inline-flex items-center gap-2 rounded-full px-5 py-3 text-sm font-semibold bg-[--brand] hover:brightness-110 active:brightness-95 transition-shadow shadow-[0_8px_30px_rgba(51,84,165,0.45)]"
          >
            View Showreel
          </a>
        </div>
      </div>

      {/* Carousel / Grid — remains consistent on mobile */}
      <div id="showreel" className="mt-10 sm:mt-12 lg:mt-16" />

      <div className="mx-auto max-w-7xl relative">
        {/* Gradient edges for nicer overflow fade */}
        <div className="pointer-events-none absolute inset-y-0 left-0 w-12 sm:w-16 bg-gradient-to-r from-[#0B0B12] to-transparent z-10" />
        <div className="pointer-events-none absolute inset-y-0 right-0 w-12 sm:w-16 bg-gradient-to-l from-[#0B0B12] to-transparent z-10" />

        <div
          className="
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
    </section>
  );
}
