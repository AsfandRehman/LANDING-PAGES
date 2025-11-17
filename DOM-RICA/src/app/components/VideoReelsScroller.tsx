// app/components/VideoReelScroller.tsx
"use client";

import * as React from "react";
import { useRef, useEffect } from "react";

type ReelItem = {
  src: string; // /videos/foo.mp4
  poster: string; // /posters/foo.jpg
  title: string; // visible caption
  credit?: string;
};

const DEFAULT_ITEMS: ReelItem[] = [
  {
    src: "/videos/reel-1.mp4",
    poster: "/posters/reel-1.jpg",
    title: "I Took Advice to Help Me Succeed",
    credit: "Dr. Eli Coleman, PhD",
  },
  {
    src: "/videos/reel-2.mp4",
    poster: "/posters/reel-2.jpg",
    title: "Dynamic Product Cut",
    credit: "Edit: ZSIDEO",
  },
  {
    src: "/videos/reel-3.mp4",
    poster: "/posters/reel-3.jpg",
    title: "Kinetic Captions Reel",
    credit: "Edit: ZSIDEO",
  },
];

export default function VideoReelScroller({
  items = DEFAULT_ITEMS,
  heading = "Featured Video Reels",
}: {
  items?: ReelItem[];
  heading?: string;
}) {
  const trackRef = useRef<HTMLDivElement | null>(null);

  const scroll = (dir: "left" | "right") => {
    const el = trackRef.current;
    if (!el) return;
    const amt = Math.min(800, Math.floor(el.clientWidth * 0.9));
    el.scrollBy({ left: dir === "left" ? -amt : amt, behavior: "smooth" });
  };

  return (
    <section className="relative isolate bg-[#0C0C12] text-white py-12 sm:py-16">
      {/* soft glow background */}
      <div className="pointer-events-none absolute inset-0 -z-10">
        <div className="absolute inset-0 opacity-90 [background:radial-gradient(900px_420px_at_20%_-10%,rgba(110,75,255,.22),transparent_60%),radial-gradient(900px_420px_at_80%_0%,rgba(177,140,255,.18),transparent_55%)]" />
      </div>

      <div className="mx-auto max-w-[1200px] px-4 sm:px-6">
        <div className="flex items-end justify-between gap-6">
          <h2 className="text-xl sm:text-2xl md:text-3xl font-semibold tracking-tight">
            {heading}
          </h2>

          <div className="hidden sm:flex gap-2">
            <IconBtn label="Scroll left" onClick={() => scroll("left")}>
              <ArrowLeft className="h-5 w-5" />
            </IconBtn>
            <IconBtn label="Scroll right" onClick={() => scroll("right")}>
              <ArrowRight className="h-5 w-5" />
            </IconBtn>
          </div>
        </div>

        <div className="relative mt-6">
          {/* edge fades */}
          <div className="pointer-events-none absolute inset-y-0 left-0 z-10 w-16 bg-gradient-to-r from-[#0C0C12] to-transparent" />
          <div className="pointer-events-none absolute inset-y-0 right-0 z-10 w-16 bg-gradient-to-l from-[#0C0C12] to-transparent" />

          <div
            ref={trackRef}
            className="no-scrollbar flex gap-4 sm:gap-6 overflow-x-auto snap-x snap-mandatory scroll-smooth pb-3"
          >
            {items.map((it, i) => (
              <ReelCard key={`${i}-${it.src}`} item={it} />
            ))}
          </div>

          {/* embed component-scoped CSS for hiding scrollbar */}
          <style jsx>{`
            .no-scrollbar {
              -ms-overflow-style: none; /* IE/Edge */
              scrollbar-width: none; /* Firefox */
            }
            .no-scrollbar::-webkit-scrollbar {
              display: none; /* Chrome/Safari */
            }
          `}</style>
        </div>
      </div>
    </section>
  );
}

/* -------- Card -------- */
function ReelCard({ item }: { item: ReelItem }) {
  const { src, poster, title, credit } = item;
  const vRef = useRef<HTMLVideoElement | null>(null);

  const play = () => {
    const v = vRef.current;
    if (!v) return;
    v.currentTime = 0;
    v.play().catch(() => {});
  };
  const stop = () => {
    const v = vRef.current;
    if (!v) return;
    v.pause();
    v.currentTime = 0;
  };

  // pause if card leaves viewport
  useEffect(() => {
    const v = vRef.current;
    if (!v) return;
    const io = new IntersectionObserver(
      (ents) => ents.forEach((e) => !e.isIntersecting && stop()),
      { threshold: 0.25 }
    );
    io.observe(v);
    return () => io.disconnect();
  }, []);

  return (
    <article
      className="group relative snap-start shrink-0 w-[88vw] sm:w-[520px] md:w-[560px] aspect-video"
      style={{ minWidth: 280 }}
    >
      <div className="relative h-full w-full overflow-hidden rounded-2xl bg-white/5 ring-1 ring-white/10 shadow-[0_10px_30px_rgba(0,0,0,.35)]">
        <video
          ref={vRef}
          muted
          playsInline
          preload="metadata"
          poster={poster}
          onMouseEnter={play}
          onMouseLeave={stop}
          onTouchStart={play}
          onTouchEnd={stop}
          className="h-full w-full object-cover transition-transform duration-300 group-hover:scale-[1.02]"
        >
          <source src={src} type="video/mp4" />
        </video>

        {/* bottom overlay */}
        <div className="pointer-events-none absolute inset-0 rounded-2xl">
          <div className="absolute inset-x-0 bottom-0 h-24 bg-gradient-to-t from-black/65 via-black/25 to-transparent" />
          <div className="absolute left-0 right-0 bottom-0 p-4 pr-12">
            <p className="text-[15px] sm:text-base font-medium leading-tight line-clamp-1">
              {ensureQuotes(title)}
            </p>
            {credit && (
              <p className="mt-0.5 text-xs text-white/85 line-clamp-1">
                {credit}
              </p>
            )}
          </div>

          <div className="absolute right-3 bottom-3 grid place-items-center h-9 w-9 rounded-full bg-white/18 ring-1 ring-white/25 backdrop-blur-sm transition-transform duration-200 group-hover:scale-105">
            <PlayIcon className="h-4 w-4 text-white" />
          </div>
        </div>
      </div>
    </article>
  );
}

/* -------- Small bits -------- */
function IconBtn({
  label,
  onClick,
  children,
}: {
  label: string;
  onClick: () => void;
  children: React.ReactNode;
}) {
  return (
    <button
      aria-label={label}
      onClick={onClick}
      className="h-10 w-10 rounded-full bg-white/10 hover:bg-white/15 grid place-items-center ring-1 ring-white/15"
    >
      {children}
    </button>
  );
}

function ensureQuotes(s: string) {
  return /[“”]/.test(s) ? s : `“${s}”`;
}

/* -------- Icons -------- */
function ArrowLeft(props: React.SVGProps<SVGSVGElement>) {
  return (
    <svg
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth={1.8}
      {...props}
    >
      <path d="M15 6l-6 6 6 6" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
  );
}
function ArrowRight(props: React.SVGProps<SVGSVGElement>) {
  return (
    <svg
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth={1.8}
      {...props}
    >
      <path d="M9 6l6 6-6 6" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
  );
}
function PlayIcon(props: React.SVGProps<SVGSVGElement>) {
  return (
    <svg viewBox="0 0 24 24" fill="currentColor" aria-hidden="true" {...props}>
      <path d="M8 5v14l11-7z" />
    </svg>
  );
}
