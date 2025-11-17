// components/HeroFlow.tsx
"use client";

import Link from "next/link";
import { useEffect, useMemo, useRef, useState } from "react";
import Image from "next/image";
import { AnimatePresence, motion } from "framer-motion";

type MediaItem =
  | string // backward-compat: plain image path
  | {
      poster: string;       // required cover image
      video?: string;       // optional video src (mp4/webm)
      type?: string;        // e.g. "video/mp4"
    };

type HeroFlowProps = {
  images?: MediaItem[]; // 9:16 portraits or objects with {poster, video}
  titleTop?: string;
  titleBold?: string;
  subtext?: string;
  cta?: { label: string; href: string };
};

const DEFAULT_MEDIA: MediaItem[] = [
  { poster: "/images/p1.png", video: "/videos/v1.mp4", type: "video/mp4" },
  { poster: "/images/p1.png", video: "/videos/v2.mp4", type: "video/mp4" },
  { poster: "/images/p1.png", video: "/videos/v3.mp4", type: "video/mp4" },
  { poster: "/images/p1.png", video: "/videos/v4.mp4", type: "video/mp4" },
  { poster: "/images/p1.png", video: "/videos/v5.mp4", type: "video/mp4" },
  { poster: "/images/p1.png", video: "/videos/v6.mp4", type: "video/mp4" },
];

export default function HeroFlow({
  images = DEFAULT_MEDIA,
  titleTop = "Bring Stories to Life,",
  titleBold = "One Edit at a Time",
  subtext = "Crafting cinematic, scroll-stopping short-form videos for TikTok, Reels, and YouTube Shorts.",
  cta = { label: "Let's Create Together", href: "https://calendly.com/marcusedits/meeting" },
}: HeroFlowProps) {
  const roll = 0;

  // normalize input: if a string is provided, treat it as an image-only poster
  const pics = useMemo<Array<{ poster: string; video?: string; type?: string }>>(
    () =>
      (images?.length ? images : DEFAULT_MEDIA).map((m) =>
        typeof m === "string" ? { poster: m } : m
      ),
    [images]
  );

  const ordered = useMemo(() => {
    return pics.map((_, i) => pics[(i + roll) % pics.length]);
  }, [pics, roll]);

  // subtle arc positions & tilts to mimic the reference UI
  const offsets = [-10, -18, -22, -18, -10, -4]; // translateY (px)
  const tilts = [-7, -4, -1, 1, 4, 7]; // rotate (deg)
  const opac = [0.9, 0.95, 1, 1, 0.95, 0.9];

  return (
    <section id="heroshowcase" className="relative mx-auto w-full max-w-9xl px-4 sm:px-6 lg:px-8">
      <div className="relative overflow-hidden rounded-[28px] bg-white px-6 pb-14 pt-16 shadow-[0_10px_40px_rgba(0,0,0,0.06)] sm:px-10">
        <div className="pointer-events-none absolute inset-0 rounded-[28px] ring-1 ring-black/5" />

        {/* Heading */}
        <div className="mx-auto max-w-7xl text-center">
          <h1 className="text-4xl font-light leading-tight text-neutral-900 sm:text-5xl">
            {titleTop}
            <br />
            <span className="font-semibold">{titleBold}</span>
          </h1>

          <p className="mt-4 text-base text-neutral-600 sm:text-lg">{subtext}</p>

          <div className="mt-6 flex items-center justify-center gap-3">
            <Link
              href={cta.href}
              className="inline-flex items-center justify-center rounded-full bg-neutral-900 px-5 py-3 text-sm font-medium text-white shadow-[0_6px_18px_rgba(0,0,0,0.15)] transition hover:opacity-90"
            >
              {cta.label}
            </Link>
          </div>
        </div>

        {/* Curved "carousel" of portrait cards */}
        <div className="relative mx-auto mt-12 flex w-ful max-w-9xl items-end justify-center gap-4 sm:gap-6">
          {ordered.slice(0, 6).map((m, i) => (
            <Card
              key={`${m.poster}-${i}`}
              media={m}
              tilt={tilts[i]}
              offsetY={offsets[i]}
              opacity={opac[i]}
            />
          ))}
        </div>
      </div>
    </section>
  );
}

function Card({
  media,
  tilt = 0,
  offsetY = 0,
  opacity = 1,
}: {
  media: { poster: string; video?: string; type?: string };
  tilt?: number;
  offsetY?: number;
  opacity?: number;
}) {
  const ref = useRef<HTMLDivElement>(null);
  const videoRef = useRef<HTMLVideoElement | null>(null);
  const [inView, setInView] = useState(false);
  const [loaded, setLoaded] = useState(false); // when metadata is ready

  // Lazy-init when in viewport
  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    const io = new IntersectionObserver(
      (entries) => {
        entries.forEach((e) => {
          if (e.isIntersecting) {
            setInView(true);
          }
        });
      },
      { rootMargin: "200px" }
    );
    io.observe(el);
    return () => io.disconnect();
  }, []);

  // Autoplay when loaded and in view
  useEffect(() => {
    if (loaded && inView && videoRef.current) {
      if (!window.matchMedia?.("(prefers-reduced-motion: reduce)")?.matches) {
        videoRef.current.play().catch(() => {});
      }
    }
  }, [loaded, inView]);

  // Hover / tap controls
  const play = () => {
    if (!videoRef.current) return;
    // Respect prefers-reduced-motion
    if (window.matchMedia?.("(prefers-reduced-motion: reduce)")?.matches) return;
    videoRef.current.play().catch(() => {});
  };
  const pauseAndReset = () => {
    const v = videoRef.current;
    if (!v) return;
    v.pause();
    v.currentTime = 0;
  };

  return (
    <div
      ref={ref}
      className="relative shrink-0 overflow-hidden rounded-2xl bg-white ring-1 ring-black/5 shadow-[0_12px_30px_rgba(0,0,0,0.12)]"
      style={{
        transform: `translateY(${offsetY}px) rotate(${tilt}deg)`,
        opacity,
        transition: "transform 600ms ease, opacity 600ms ease",
      }}
      onMouseEnter={play}
      onMouseLeave={pauseAndReset}
      onTouchStart={play}
      onTouchEnd={pauseAndReset}
    >
      {/* Maintain EXACT mobile aspect ratio */}
      <div className="relative aspect-[9/16] w-[140px] sm:w-[160px] md:w-[280px]">
        {/* If there's a video, render it with poster; else render poster-only fallback */}
        {media.video ? (
          <video
            ref={videoRef}
            src={media.video}
            playsInline
            muted
            loop
            preload="auto"
            onLoadedMetadata={() => setLoaded(true)}
            className="absolute inset-0 h-full w-full object-cover"
          ></video>
        ) : (
          // Poster-only fallback (no next/image to keep it lean in same component)
          // Still keeps visuals identical to your original layout
          <Image
            src={media.poster}
            alt=""
            fill
            className="object-cover"
            loading="lazy"
          />
        )}
      </div>

      {/* Subtle overlay for depth */}
      <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-black/10 via-transparent to-transparent" />

      {/* Optional tiny loaded indicator for dev (not visible in UI) */}
      <span className="sr-only">{loaded ? "Video ready" : "Loading…"}</span>
    </div>
  );
}