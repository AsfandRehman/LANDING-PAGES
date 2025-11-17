// src/components/VSLSection.tsx
"use client";

import Link from "next/link";
import Image from "next/image";
import { useEffect, useRef, useState } from "react";

export default function VSLSection() {
  const ACCENT = "#FFEB3B";

  const videoRef = useRef<HTMLVideoElement | null>(null);
  const [playing, setPlaying] = useState(false);

  // autoplay (muted), loop forever, state sync
  useEffect(() => {
    const v = videoRef.current;
    if (!v) return;

    const onPlay = () => setPlaying(true);
    const onPause = () => setPlaying(false);

    v.addEventListener("play", onPlay);
    v.addEventListener("pause", onPause);

    const tryPlay = () => {
      v.play()
        .then(() => setPlaying(true))
        .catch(() => setPlaying(false));
    };
    if (v.readyState >= 2) tryPlay();
    else v.addEventListener("loadedmetadata", tryPlay, { once: true });

    return () => {
      v.removeEventListener("play", onPlay);
      v.removeEventListener("pause", onPause);
    };
  }, []);

  // Click = unmute & ensure playing (no pause toggle)
  const handleVideoClick = () => {
    const v = videoRef.current;
    if (!v) return;
    v.muted = false;
    if (v.paused) v.play().catch(() => {});
  };

  return (
    // Overhang into the hero above
    <section className="relative isolate px-4 pb-16 md:pb-0">
      {/* Background image */}
      <div className="absolute inset-0 -z-10">
        <Image
          src="/images/hero.jpg"
          alt="Background"
          fill
          priority
          className="object-cover"
          sizes="100vw"
        />
        {/* Top→bottom black fade that reveals the image downward */}
        <div className="pointer-events-none absolute inset-0 bg-gradient-to-b from-black via-black/70 to-transparent" />
      </div>

      {/* Wrapper: translate up so the card (and CTA below it) sit ~inside the hero */}
      <div className="relative z-10 mx-auto max-w-5xl -translate-y-[35%] md:-translate-y-1/4">
        {/* Video Card */}
        <div className="rounded-3xl border border-white/10 bg-neutral-900/80 p-2 shadow-[0_20px_60px_rgba(0,0,0,0.5)] backdrop-blur animate-vsl-pop">
          <div
            className="relative aspect-video cursor-pointer overflow-hidden rounded-2xl bg-neutral-950 animate-vsl-float"
            onClick={handleVideoClick}
          >
            {/* frame */}
            <div className="pointer-events-none absolute inset-0 rounded-2xl ring-1 ring-white/10" />
            {/* scanlines */}
            <div className="pointer-events-none absolute inset-0 scanlines" />
            {/* looping sheen sweep */}
            <div className="pointer-events-none absolute inset-y-0 -left-1/3 w-1/3 sheen" />

            {/* video */}
            <video
              ref={videoRef}
              poster="/vsl-thumb.jpg"
              preload="metadata"
              autoPlay
              muted
              loop
              playsInline
              className={`block h-full w-full object-cover transition duration-300 ${
                playing
                  ? "grayscale-0 hue-rotate-0"
                  : "grayscale-[75%] hue-rotate-[320deg]"
              }`}
              controls={false}
            >
              <source src="/videos/v1.mp4" type="video/mp4" />
            </video>

            {/* centered play only when paused */}
            {!playing && (
              <div className="pointer-events-none absolute inset-0 grid place-items-center">
                <span
                  className="relative grid size-16 place-items-center rounded-full ring-1 ring-black/15"
                  style={{ background: ACCENT, color: "#000" }}
                >
                  {/* ping ring */}
                  <span
                    className="absolute inset-0 rounded-full animate-vsl-ping"
                    style={{ boxShadow: `0 0 0 2px ${ACCENT}` }}
                  />
                  <svg
                    viewBox="0 0 24 24"
                    className="ml-0.5 h-7 w-7"
                    fill="currentColor"
                  >
                    <path d="M8 5v14l11-7z" />
                  </svg>
                </span>
              </div>
            )}
          </div>
        </div>

        {/* CTA (separate from the card, matches Hero button theme) */}
        <div className="mt-4 md:mt-5 flex justify-center">
          <Link href="#contact" className="relative inline-flex rounded-full">
            <span className="group inline-flex items-center gap-3 rounded-full border border-white/10 bg-neutral-900/80 px-6 py-3 text-sm font-semibold text-white shadow-[inset_0_1px_0_rgba(255,255,255,0.06)] ring-1 ring-white/10 backdrop-blur">
              Book A Free Demo
              <span
                className="grid size-9 place-items-center rounded-full ring-1 ring-black/10 transition-transform group-hover:translate-x-0.5"
                style={{ background: ACCENT, color: "#000" }}
              >
                <svg
                  viewBox="0 0 24 24"
                  className="h-5 w-5"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M5 12h14M13 5l7 7-7 7"
                  />
                </svg>
              </span>
            </span>
            {/* faint yellow ring */}
            <span
              className="pointer-events-none absolute inset-0 -z-10 rounded-full"
              style={{ border: `1px solid rgba(255,235,59,.45)` }}
            />
          </Link>
        </div>
      </div>
    </section>
  );
}
