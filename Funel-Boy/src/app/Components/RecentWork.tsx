// components/RecentWork.tsx
"use client";

import { useEffect, useMemo, useState } from "react";
import Image from "next/image";
import { ArrowRight, ChevronLeft, ChevronRight } from "lucide-react";
import { motion } from "framer-motion";
import FeaturesMarquee from "./FeaturesMarquee";

const YELLOW = "#FFEB3B";

type Project = {
  title: string;
  tag: string;
  img: string; // /public path
  href?: string;
};

const PROJECTS: Project[] = [
  {
    title: "Financial Dashboard SME",
    tag: "SOFTWARE DEVELOPMENT",
    img: "/images/dash.webp",
  },
  {
    title: "Real Estate Platform",
    tag: "WEB DEVELOPMENT",
    img: "/images/dev.jpg",
  },
  { title: "SEO Analytics", tag: "PRODUCT SEO", img: "/images/seo.jpg" },
  {
    title: "AI Customer Desk",
    tag: "AI / AUTOMATION",
    img: "/images/auto.jpg",
  },
  {
    title: "Marketing Site Sprint",
    tag: "Business Growth",
    img: "/images/grow.jpg",
  },
];

export default function RecentWork() {
  const [index, setIndex] = useState(0);

  const next = () => setIndex((i) => (i + 1) % PROJECTS.length);
  const prev = () =>
    setIndex((i) => (i - 1 + PROJECTS.length) % PROJECTS.length);

  // keyboard arrows
  useEffect(() => {
    const onKey = (e: KeyboardEvent) => {
      if (e.key === "ArrowRight") next();
      if (e.key === "ArrowLeft") prev();
    };
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, []);

  // pre-compute circular offsets for transforms
  const withOffsets = useMemo(
    () =>
      PROJECTS.map((p, i) => {
        const raw = i - index;
        const len = PROJECTS.length;
        const off =
          ((raw + len + Math.floor(len / 2)) % len) - Math.floor(len / 2);
        return { ...p, off };
      }),
    [index]
  );

  return (
    <section className="relative isolate overflow-hidden py-16 sm:py-20">
      {/* Enhanced BG: soft vignette + layered yellow glows */}
      <div className="pointer-events-none absolute inset-0 -z-10">
        {/* subtle dark vignette */}
        <div
          className="absolute inset-0"
          style={{ boxShadow: "inset 0 0 160px rgba(0,0,0,0.55)" }}
        />
        {/* central yellow haze */}
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,rgba(255,235,59,0.12),transparent_60%)] blur-3xl" />
        {/* lower offset glow */}
        <div className="absolute left-1/2 top-[72%] h-[600px] w-[600px] -translate-x-1/2 rounded-full bg-[radial-gradient(ellipse_at_center,rgba(255,235,59,0.10),transparent_60%)] blur-2xl" />
      </div>
      <FeaturesMarquee />
      <div className="mx-auto max-w-7xl px-4">
        {/* Heading row */}
        <div className="mb-10 flex items-center justify-between">
          <div>
            <h2 className="text-3xl font-bold tracking-tight text-white sm:text-4xl">
              Discover Our <span style={{ color: YELLOW }}>Recent Work</span>
            </h2>
          </div>

          <a
            href="/work"
            className="hidden md:inline-flex items-center gap-2 rounded-full border border-white/10 bg-neutral-900/80 px-5 py-2.5 text-sm font-semibold text-white ring-1 ring-white/10"
          >
            Explore Our Work
            <span
              className="grid size-8 place-items-center rounded-full ring-1 ring-black/10"
              style={{ background: YELLOW, color: "#0f0f0f" }}
            >
              <ArrowRight className="h-4 w-4" />
            </span>
          </a>
        </div>

        {/* Carousel */}
        <div
          className="relative mx-auto h-[420px] max-w-5xl"
          style={{ perspective: "1200px" }}
        >
          {/* Prev / Next — THEME YELLOW */}
          <button
            aria-label="Previous"
            onClick={prev}
            className="group absolute left-0 top-1/2 z-10 -translate-y-1/2 rounded-full p-2 text-black shadow-sm transition focus:outline-none focus-visible:ring-4"
            style={{
              background: YELLOW,
              boxShadow: `0 8px 24px ${hexA(YELLOW, 0.35)}`,
            }}
          >
            <ChevronLeft className="h-5 w-5 transition-transform group-hover:-translate-x-0.5" />
          </button>
          <button
            aria-label="Next"
            onClick={next}
            className="group absolute right-0 top-1/2 z-10 -translate-y-1/2 rounded-full p-2 text-black shadow-sm transition focus:outline-none focus-visible:ring-4"
            style={{
              background: YELLOW,
              boxShadow: `0 8px 24px ${hexA(YELLOW, 0.35)}`,
            }}
          >
            <ChevronRight className="h-5 w-5 transition-transform group-hover:translate-x-0.5" />
          </button>

          {/* Draggable layer that advances on swipe */}
          <motion.div
            className="absolute inset-0"
            drag="x"
            dragConstraints={{ left: 0, right: 0 }}
            onDragEnd={(_, info) => {
              if (info.offset.x < -60) next();
              if (info.offset.x > 60) prev();
            }}
          />

          {/* Cards */}
          <div className="absolute inset-0 grid place-items-center">
            {withOffsets.map((p, i) => {
              const d = p.off; // -2, -1, 0, 1, 2, ...
              const isActive = d === 0;

              // layout numbers
              const translateX = d * 220;
              const rotateY = -d * 18;
              const translateZ = -Math.abs(d) * 80;
              const scale = 1 - Math.min(Math.abs(d) * 0.06, 0.25);
              const opacity = isActive ? 1 : 0.55;

              return (
                <button
                  key={i}
                  onClick={() => setIndex(i)}
                  className="absolute"
                  style={{ zIndex: 100 - Math.abs(d) }}
                >
                  <div
                    className="group relative h-[360px] w-[260px] overflow-hidden rounded-[22px] border border-white/10 shadow-2xl"
                    style={{
                      transform: `translateX(${translateX}px) translateZ(${translateZ}px) rotateY(${rotateY}deg) scale(${scale})`,
                      transition:
                        "transform 500ms cubic-bezier(.2,.7,.1,1), opacity 400ms, filter 400ms",
                      opacity,
                      filter: isActive ? "none" : "grayscale(30%)",
                      background:
                        "linear-gradient(to top,#0a0a0a 0%,rgba(10,10,10,.2) 40%)",
                    }}
                  >
                    {/* Cover image */}
                    <Image
                      src={p.img}
                      alt={p.title}
                      fill
                      className="object-cover"
                      sizes="260px"
                      priority={i < 3}
                    />

                    {/* UNIVERSAL DARKEN OVERLAY (applies to all slides) */}
                    <div className="pointer-events-none absolute inset-0 bg-black/45 sm:bg-black/55 transition-opacity duration-300" />

                    {/* SOFT YELLOW TINT (subtle radial from bottom) */}
                    <div className="pointer-events-none absolute inset-0 opacity-70 bg-[radial-gradient(150px_120px_at_50%_100%,rgba(255,235,59,0.22),transparent_70%)] transition-opacity duration-300 group-hover:opacity-90" />

                    {/* Yellow bottom→top gradient overlay (kept, slightly tuned) */}
                    <div
                      className="pointer-events-none absolute inset-0"
                      style={{
                        background:
                          "linear-gradient(to top, rgba(255,235,59,0.24) 10%, rgba(255,235,59,0.12) 35%, rgba(255,235,59,0.0) 65%)",
                      }}
                    />

                    {/* Active glow + border */}
                    {isActive && (
                      <>
                        <div
                          className="pointer-events-none absolute inset-0 rounded-[22px]"
                          style={{
                            boxShadow: `0 0 60px ${hexA(YELLOW, 0.35)}`,
                          }}
                        />
                        <div
                          className="pointer-events-none absolute inset-0 rounded-[22px]"
                          style={{
                            outline: `2px solid ${hexA(YELLOW, 0.9)}`,
                            outlineOffset: "-2px",
                          }}
                        />
                      </>
                    )}

                    {/* Bottom label card */}
                    <div className="absolute bottom-4 left-1/2 w-[85%] -translate-x-1/2">
                      <div className="rounded-xl bg-white px-4 py-3 text-center shadow-lg">
                        <p className="text-[11px] font-semibold tracking-[.08em] text-neutral-600">
                          {p.tag}
                        </p>
                        <p className="mt-1 text-sm font-semibold text-neutral-900">
                          {p.title}
                        </p>
                      </div>
                    </div>
                  </div>
                </button>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}

/* util: RGBA from hex */
function hexA(hex: string, a: number) {
  const n = hex.replace("#", "");
  const r = parseInt(n.slice(0, 2), 16);
  const g = parseInt(n.slice(2, 4), 16);
  const b = parseInt(n.slice(4, 6), 16);
  return `rgba(${r}, ${g}, ${b}, ${a})`;
}
