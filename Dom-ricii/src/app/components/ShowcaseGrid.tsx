// components/TestimonialGrid.tsx
"use client";

import React from "react";
import Image from "next/image";
import { motion, type Variants } from "framer-motion";
import CalendlyCTA from "./CalendlyCTA";

const DARK = "#231F20";
const BRAND = "#3354A5";

type Item = {
  id: string;
  poster: string;
  src?: string;
  title?: string;
};

type Props = {
  items?: Item[];
  /** Max row height in viewport units (default 33 => 33vh) */
  maxRowVh?: number;
};

const DEFAULT_ITEMS: Item[] = [
  {
    id: "v1",
    poster: "/images/1.jpg",
    src: "/videos/vid1.mp4",
    title: "Repeat",
  },
  {
    id: "v2",
    poster: "/images/2.jpg",
    src: "/videos/vid2.mp4",
    title: "here's how",
  },
  {
    id: "v3",
    poster: "/images/1.jpg",
    src: "/videos/vid3.mp4",
    title: "Repeat",
  },
  {
    id: "v4",
    poster: "/images/2.jpg",
    src: "/videos/vid4.mp4",
    title: "here's how",
  },
  {
    id: "v5",
    poster: "/images/3.jpg",
    src: "/videos/vid5.mp4",
    title: "Little Permission",
  },
  {
    id: "v6",
    poster: "/images/4.jpg",
    src: "/videos/vid6.mp4",
    title: "Repeat",
  },
  {
    id: "v7",
    poster: "/images/5.jpg",
    src: "/videos/vid7.mp4",
    title: "here's how",
  },
  {
    id: "v8",
    poster: "/images/6.jpg",
    src: "/videos/vid8.mp4",
    title: "Repeat",
  },
  {
    id: "v9",
    poster: "/images/7.jpg",
    src: "/videos/vid9.mp4",
    title: "Little Permission",
  },
  {
    id: "v10",
    poster: "/images/8.jpg",
    src: "/videos/vid10.mp4",
    title: "here's how",
  },
  {
    id: "v11",
    poster: "/images/9.jpg",
    src: "/videos/vid11.mp4",
    title: "Repeat",
  },
  {
    id: "v12",
    poster: "/images/10.jpg",
    src: "/videos/vid12.mp4",
    title: "here's how",
  },
];

/* -------- Animations -------- */
const rowsVariant: Variants = {
  hidden: { opacity: 0 },
  show: {
    opacity: 1,
    transition: { staggerChildren: 0.12, delayChildren: 0.05 },
  },
};

const rowVariant = (dir: "left" | "right"): Variants => ({
  hidden: { opacity: 0, x: dir === "left" ? -20 : 20 },
  show: {
    opacity: 1,
    x: 0,
    transition: { duration: 0.45, ease: [0.2, 0.8, 0.2, 1] },
  },
});

const thumbVariant: Variants = {
  hidden: { opacity: 0, y: 12, scale: 0.98 },
  show: {
    opacity: 1,
    y: 0,
    scale: 1,
    transition: { duration: 0.38, ease: [0.22, 1, 0.36, 1] },
  },
};
/* -------------------------------- */

export default function ShowGrid({
  items = DEFAULT_ITEMS,
  maxRowVh = 33,
}: Props) {
  const half = Math.ceil(items.length / 2);
  const rows: Item[][] = [items.slice(0, half), items.slice(half)];

  const rowStyle = {
    "--rowH": `clamp(160px, 34vh, ${maxRowVh}vh)`,
  } as React.CSSProperties;

  return (
    <section id="featured" className="w-full mb-16 md:mb-24 overflow-x-hidden">
      <motion.header
        className="mb-8 md:mb-12 text-center"
        initial={{ opacity: 0, y: 12 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, amount: 0.25 }}
        transition={{ delay: 0.05, duration: 0.45, ease: [0.2, 0.8, 0.2, 1] }}
      >
        <h2
          className="font-extrabold tracking-tight leading-[0.98] text-[clamp(28px,6vw,56px)]"
          style={{ color: DARK }}
        >
          Optimize Your Marketing{" "}
          <span className="shimmer-text">With Video</span>
        </h2>
        <p className="mt-3 italic" style={{ color: "rgba(35,31,32,0.72)" }}>
          High-performing videos crafted to connect, convert, and drive results.
        </p>
      </motion.header>

      <motion.div
        className="w-full max-w-[100vw] flex flex-col gap-4 md:gap-6"
        variants={rowsVariant}
        initial="hidden"
        whileInView="show"
        viewport={{ once: true, amount: 0.2 }}
      >
        {rows.map((row, rIdx) => (
          <motion.div
            key={`row-${rIdx}`}
            style={rowStyle}
            className="w-full max-w-[100vw] flex flex-wrap items-center justify-center gap-3 md:gap-4"
            variants={rowVariant(rIdx === 0 ? "left" : "right")}
          >
            {row.map((item) => (
              <Thumb key={`${rIdx}-${item.id}`} item={item} />
            ))}
          </motion.div>
        ))}
      </motion.div>

      <section className="py-16">
        <CalendlyCTA />
      </section>

      {/* Shimmer effect fix */}
      <style jsx>{`
        @keyframes shimmer-scan {
          0% {
            background-position: 200% 0;
          }
          100% {
            background-position: -200% 0;
          }
        }
        .shimmer-text {
          display: inline-block;
          color: transparent !important;
          -webkit-text-fill-color: transparent;
          background-image: linear-gradient(
            110deg,
            ${BRAND} 0%,
            ${BRAND} 35%,
            #ffffff 50%,
            ${BRAND} 65%,
            ${BRAND} 100%
          );
          background-size: 200% 100%;
          -webkit-background-clip: text;
          background-clip: text;
          animation: shimmer-scan 2.4s linear infinite;
          text-shadow: 0 0 0.25px rgba(0, 0, 0, 0.06);
        }
      `}</style>
    </section>
  );
}

function Thumb({ item }: { item: Item }) {
  return (
    <motion.div
      variants={thumbVariant}
      className={[
        "group relative overflow-hidden rounded-lg md:rounded-xl shadow-sm hover:shadow-lg",
        "h-[var(--rowH)] aspect-[9/16]",
        "will-change-transform [transform:translateZ(0)]",
      ].join(" ")}
    >
      {item.src ? (
        <video
          className="absolute inset-0 h-full w-full object-cover object-center transition-transform duration-300 ease-out group-hover:scale-[1.06] [backface-visibility:hidden]"
          src={item.src}
          poster={item.poster}
          preload="metadata"
          muted
          loop
          playsInline
          onMouseEnter={(e) =>
            (e.currentTarget as HTMLVideoElement).play().catch(() => {})
          }
          onMouseLeave={(e) => {
            const v = e.currentTarget as HTMLVideoElement;
            v.pause();
            v.currentTime = 0;
          }}
          onTouchStart={(e) =>
            (e.currentTarget as HTMLVideoElement).play().catch(() => {})
          }
        />
      ) : (
        <Image
          src={item.poster}
          alt={item.title || ""}
          fill
          sizes="(max-width: 768px) 40vw, 14vw"
          className="absolute inset-0 object-cover object-center transition-transform duration-300 ease-out group-hover:scale-[1.06] [backface-visibility:hidden]"
        />
      )}

      <div className="pointer-events-none absolute inset-0 bg-gradient-to-b from-black/15 via-transparent to-black/15 transition-opacity duration-300 group-hover:opacity-80" />

      {item.title && (
        <span className="absolute left-3 top-3 text-white text-sm font-semibold tracking-wide drop-shadow">
          {item.title}
        </span>
      )}
    </motion.div>
  );
}
