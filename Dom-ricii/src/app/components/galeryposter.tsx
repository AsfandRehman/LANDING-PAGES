"use client";

import React from "react";
import { motion, type Variants } from "framer-motion";

type VideoKind = "landscape" | "reel";
type VideoItem = {
  kind: VideoKind;
  src: string;
  poster: string;
  title?: string;
};

type Items = {
  heroLeft: { vsl: VideoItem; reel: VideoItem };
  gridA: VideoItem[]; // 4 reels
  heroRight: { reel: VideoItem; vsl: VideoItem };
  gridB: VideoItem[]; // 4 reels
};

type Props = {
  accent?: string;
  items?: Items; // we'll safely coalesce below to remove TS “possibly undefined” errors
};

/* --- Defaults (replace with your actual videos/posters) --- */
const DEFAULTS: Items = {
  heroLeft: {
    vsl: {
      kind: "landscape",
      src: "/videos/hero-vsl.mp4",
      poster: "/posters/hero-vsl.jpg",
      title: "",
    },
    reel: {
      kind: "reel",
      src: "/videos/reel-hero.mp4",
      poster: "/posters/reel-hero.jpg",
      title: "",
    },
  },
  gridA: [
    { kind: "reel", src: "/videos/r1.mp4", poster: "/images/1.jpg" },
    { kind: "reel", src: "/videos/r2.mp4", poster: "/images/2.jpg" },
    { kind: "reel", src: "/videos/r3.mp4", poster: "/images/3.jpg" },
    { kind: "reel", src: "/videos/r4.mp4", poster: "/images/4.jpg" },
  ],
  heroRight: {
    reel: {
      kind: "reel",
      src: "/videos/reel-hero-2.mp4",
      poster: "/posters/reel-hero-2.jpg",
      title: "",
    },
    vsl: {
      kind: "landscape",
      src: "/videos/hero-vsl-2.mp4",
      poster: "/posters/hero-vsl-2.jpg",
      title: "",
    },
  },
  gridB: [
    { kind: "reel", src: "/videos/r5.mp4", poster: "/images/5.jpg" },
    { kind: "reel", src: "/videos/r6.mp4", poster: "/images/6.jpg" },
    { kind: "reel", src: "/videos/r7.mp4", poster: "/images/7.jpg" },
    { kind: "reel", src: "/videos/r8.mp4", poster: "/images/8.jpg" },
  ],
};
/* -------------------------------------------------------- */

/** Helpers to build soft accent-tinted backgrounds */
function hexToRgb(hex: string) {
  const raw = hex.replace("#", "");
  const bigint = parseInt(
    raw.length === 3
      ? raw
          .split("")
          .map((c) => c + c)
          .join("")
      : raw,
    16
  );
  return { r: (bigint >> 16) & 255, g: (bigint >> 8) & 255, b: bigint & 255 };
}
function alpha(hex: string, a: number) {
  const { r, g, b } = hexToRgb(hex);
  return `rgba(${r}, ${g}, ${b}, ${a})`;
}

export default function FeaturedVideosBoard({
  accent = "#3354A5",
  items: itemsProp,
}: Props) {
  // ✅ Remove TS “possibly undefined” by coalescing and narrowing
  const items = (itemsProp ?? DEFAULTS) as Items;

  // Section backgrounds: gentle accent tints (not dull)
  const bgBase = "#F7F8FB";
  const band1 = `linear-gradient(180deg, ${alpha(accent, 0.03)} 0%, ${alpha(
    accent,
    0.015
  )} 100%)`;
  const band2 = `linear-gradient(180deg, ${alpha(accent, 0.045)} 0%, ${alpha(
    accent,
    0.02
  )} 100%)`;

  // ✅ Strong typing for variants fixes TS errors on variants={} props
  const sectionVar: Variants = {
    hidden: { opacity: 0, y: 18 },
    show: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.5,
        // use a cubic-bezier tuple to satisfy stricter type checks
        ease: [0.22, 1, 0.36, 1],
      },
    },
  };

  // Equal heights for Row A & Row B (md+). Tweak values if you want taller/shorter.
  const ROW_H_MD = 520; // px for md and up
  const ROW_H_SM = 380; // px for small screens

  return (
    <section
      aria-label="Featured Videos"
      className="w-full text-neutral-900"
      style={{
        // Soft layered background using your accent shades (no flat dull gray)
        background: `${band1}, ${bgBase}`,
      }}
    >
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-10 py-10 md:py-16">
        {/* Heading */}
        <div className="text-center mb-8 md:mb-12">
          <h2 className="text-2xl md:text-5xl font-bold tracking-tight text-neutral-900">
            Movie Trailers &amp; Making Of
          </h2>
          <div
            className="mx-auto mt-3 h-1 w-16 rounded-full"
            style={{ backgroundColor: accent }}
            aria-hidden
          />
        </div>

        {/* ---------- Row A: Big VSL (left) + Reel (right) ---------- */}
        <motion.div
          variants={sectionVar}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, amount: 0.3 }}
          className="grid grid-cols-1 md:grid-cols-12 gap-4 md:gap-5 mb-6 md:mb-10"
          // Slightly deeper accent shade behind this row
          style={{ background: band2, borderRadius: 16, padding: 8 }}
        >
          <div className="md:col-span-8">
            <VideoCard
              item={items.heroLeft.vsl}
              accent={accent}
              fixedHeightSm={ROW_H_SM}
              fixedHeightMd={ROW_H_MD}
            />
          </div>
          <div className="md:col-span-4">
            <VideoCard
              item={items.heroLeft.reel}
              accent={accent}
              fixedHeightSm={ROW_H_SM}
              fixedHeightMd={ROW_H_MD}
            />
          </div>
        </motion.div>

        {/* ---------- 4 Reels Grid A (unchanged as requested) ---------- */}
        <motion.div
          variants={sectionVar}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, amount: 0.2 }}
          className="grid grid-cols-2 md:grid-cols-4 gap-4 md:gap-5 mb-10"
        >
          {items.gridA.map((v, i) => (
            <VideoCard key={`ga-${i}`} item={v} accent={accent} />
          ))}
        </motion.div>

        {/* ---------- Row B: Reel (left) + Big VSL (right) ---------- */}
        <motion.div
          variants={sectionVar}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, amount: 0.3 }}
          className="grid grid-cols-1 md:grid-cols-12 gap-4 md:gap-5 mb-6 md:mb-10"
          style={{ background: band2, borderRadius: 16, padding: 8 }}
        >
          <div className="md:col-span-4">
            <VideoCard
              item={items.heroRight.reel}
              accent={accent}
              fixedHeightSm={ROW_H_SM}
              fixedHeightMd={ROW_H_MD}
            />
          </div>
          <div className="md:col-span-8">
            <VideoCard
              item={items.heroRight.vsl}
              accent={accent}
              fixedHeightSm={ROW_H_SM}
              fixedHeightMd={ROW_H_MD}
            />
          </div>
        </motion.div>

        {/* ---------- 4 Reels Grid B (unchanged as requested) ---------- */}
        <motion.div
          variants={sectionVar}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, amount: 0.2 }}
          className="grid grid-cols-2 md:grid-cols-4 gap-4 md:gap-5"
        >
          {items.gridB.map((v, i) => (
            <VideoCard key={`gb-${i}`} item={v} accent={accent} />
          ))}
        </motion.div>
      </div>
    </section>
  );
}

/* -------------------- Video Card -------------------- */
function VideoCard({
  item,
  accent,
  fixedHeightSm,
  fixedHeightMd,
}: {
  item: VideoItem;
  accent: string;
  /** Force equal heights for paired cards (Row A/B). If omitted, uses aspect ratio box. */
  fixedHeightSm?: number;
  fixedHeightMd?: number;
}) {
  const ref = React.useRef<HTMLVideoElement | null>(null);
  const [hovered, setHovered] = React.useState(false);

  const ratio =
    item.kind === "landscape" ? 56.25 /* 16:9 */ : 177.78; /* 9:16 */

  // Inline responsive height using CSS vars (keeps TS happy, no class plugin needed)
  const wrapperStyle: React.CSSProperties =
    fixedHeightSm || fixedHeightMd
      ? {
          // mobile / default
          height: fixedHeightSm ?? fixedHeightMd ?? undefined,
        }
      : {};

  return (
    <motion.article
      initial={{ opacity: 0, y: 14 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.3 }}
      transition={{ duration: 0.45, ease: [0.22, 1, 0.36, 1] }}
      whileHover={{ scale: 1.015 }}
      whileTap={{ scale: 0.99 }}
      className="group relative rounded-xl overflow-hidden bg-white border border-neutral-200 shadow-sm"
      style={{
        boxShadow: hovered
          ? "0 14px 40px rgba(20,20,40,0.14)"
          : "0 8px 24px rgba(20,20,40,0.08)",
        transition: "box-shadow 220ms ease",
      }}
      onMouseEnter={() => {
        setHovered(true);
        if (ref.current) {
          ref.current.currentTime = 0;
          ref.current.play().catch(() => {});
        }
      }}
      onMouseLeave={() => {
        setHovered(false);
        if (ref.current) ref.current.pause();
      }}
    >
      {/* Responsive height wrapper:
          - If fixedHeight* provided → equal heights across the row
          - Else → aspect-ratio padding box */}
      <div
        className="relative w-full"
        style={
          fixedHeightSm || fixedHeightMd
            ? {
                ...wrapperStyle,
                // media query for md+ height
                // @ts-expect-error: custom CSS var for md height
                "--h-md": `${
                  fixedHeightMd ?? (wrapperStyle.height as number)
                }px`,
              }
            : { position: "relative", paddingTop: `${ratio}%` }
        }
      >
        {/* Simple CSS for md breakpoint height override */}
        <style>{`
          @media (min-width: 768px) {
            .group > .relative[style*="--h-md"] { height: var(--h-md); }
          }
        `}</style>

        <video
          ref={ref}
          src={item.src}
          poster={item.poster}
          muted
          loop
          playsInline
          preload="metadata"
          className="absolute inset-0 h-full w-full object-cover"
          style={{
            transform: hovered ? "scale(1.03)" : "scale(1)",
            transition: "transform 260ms ease",
          }}
        />

        {/* Soft overlay & info chips */}
        <div
          className="pointer-events-none absolute inset-0"
          style={{
            background:
              "linear-gradient(180deg, rgba(255,255,255,0.00) 0%, rgba(255,255,255,0.06) 100%)",
            mixBlendMode: "normal",
          }}
        />
        <div className="absolute right-3 top-3 rounded-full bg-white/90 backdrop-blur px-2 py-1 text-[10px] font-medium text-neutral-700">
          {item.kind === "reel" ? "" : ""}
        </div>

        {item.title && (
          <div className="absolute left-3 bottom-3">
            <span
              className="inline-block rounded-md bg-white/90 px-2.5 py-1 text-xs font-semibold text-neutral-900"
              style={{ border: "1px solid rgba(0,0,0,0.06)" }}
            >
              {item.title}
            </span>
          </div>
        )}

        {/* Accent focus ring on hover */}
        <span
          aria-hidden
          className="absolute inset-0 rounded-xl ring-0 transition-[box-shadow] duration-200"
          style={{
            boxShadow: hovered ? `inset 0 0 0 2px ${accent}` : "none",
          }}
        />
      </div>
    </motion.article>
  );
}
