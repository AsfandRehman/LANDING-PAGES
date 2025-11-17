"use client";

import Image from "next/image";
import { Poppins } from "next/font/google";
import { useMemo, useState } from "react";
import {
  motion,
  AnimatePresence,
  MotionConfig,
  useReducedMotion,
} from "framer-motion";

const poppins = Poppins({
  subsets: ["latin"],
  weight: ["400", "600", "700", "800"],
});

const ACCENT = "#FFE241";

// Prefer web-friendly formats; avoid .heic
const WORK_IMAGES = [
  {
    src: "/images/1.jpg",
    alt: "Modern kitchen remodel with matte cabinetry",
    caption: "Kitchen remodel — matte cabinetry & stone island",
  },
  {
    src: "/images/2.jpg",
    alt: "Bathroom renovation with walk-in glass shower",
    caption: "Bathroom renovation — walk-in glass shower",
  },
  {
    src: "/images/3.jpg",
    alt: "Open-plan living area with oak floors",
    caption: "Open-plan living — oak floors",
  },
  {
    src: "/images/4.jpg",
    alt: "Exterior facade upgrade with new siding",
    caption: "Exterior facade upgrade",
  },
  {
    src: "/images/5.jpg",
    alt: "Backyard deck with rail lighting",
    caption: "Backyard deck + lighting",
  },
  {
    src: "/images/6.jpg",
    alt: "Custom staircase with metal balustrade",
    caption: "Custom staircase",
  },
  {
    src: "/images/7.jpg",
    alt: "Minimalist bedroom with wall paneling",
    caption: "Bedroom wall paneling",
  },
  {
    src: "/images/8.jpg",
    alt: "Home office built-in shelving",
    caption: "Home office built-ins",
  },
  {
    src: "/images/9.jpg",
    alt: "Duplex exterior with landscaped entry",
    caption: "Duplex exterior",
  },
  {
    src: "/images/10.jpg",
    alt: "Laundry room with stacked units",
    caption: "Laundry upgrade",
  },
  {
    src: "/images/1.jpg",
    alt: "Dining nook with banquette seating",
    caption: "Dining nook",
  },
  {
    src: "/images/2.jpg",
    alt: "Shower niche tiling close-up",
    caption: "Shower niche detail",
  },
  {
    src: "/images/4.jpg",
    alt: "Concrete patio and pergola",
    caption: "Patio + pergola",
  },
];

export default function OurWorkSection() {
  const [active, setActive] = useState<number | null>(null);
  const prefersReduced = useReducedMotion();

  const items = useMemo(() => WORK_IMAGES, []);
  const onCardClick = (i: number) =>
    setActive((prev) => (prev === i ? null : i));

  // JSON-LD to describe the gallery as an ItemList of ImageObject
  const galleryLd = {
    "@context": "https://schema.org",
    "@type": "ItemList",
    name: "Our Work Gallery",
    itemListElement: items.map((img, idx) => ({
      "@type": "ListItem",
      position: idx + 1,
      item: {
        "@type": "ImageObject",
        contentUrl: `https://www.ridgebackbuilders.com${img.src}`,
        name: img.caption || img.alt,
        description: img.alt,
      },
    })),
  };

  return (
    <MotionConfig
      transition={{ type: "spring", stiffness: 140, damping: 22, mass: 0.6 }}
      reducedMotion={prefersReduced ? "always" : "user"}
    >
      <section
        className={`${poppins.className} bg-white py-14 md:py-20`}
        aria-labelledby="our-work-heading"
      >
        <div className="mx-auto max-w-7xl px-5 md:px-10">
          {/* Heading */}
          <header className="text-center">
            <h2
              id="our-work-heading"
              className="text-3xl md:text-5xl font-extrabold tracking-tight text-black"
            >
              Our{" "}
              <span
                className="underline decoration-8 underline-offset-[10px]"
                style={{ textDecorationColor: ACCENT }}
              >
                Work
              </span>
            </h2>
            <p className="mx-auto mt-3 md:mt-4 max-w-2xl text-xs md:text-sm italic text-neutral-500">
              A selection of recent builds and renovations across Florida.
            </p>
          </header>

          {/* Equal gutters grid */}
          <div className="mt-10 md:mt-14 grid grid-cols-12 gap-x-5 gap-y-5 md:gap-x-6 md:gap-y-6">
            {items.map((img, i) => {
              // map your original layout spans/ratios by index:
              const config: Record<number, { span: string; ratio: string }> = {
                0: { span: "col-span-4", ratio: "aspect-[4/5]" },
                1: { span: "col-span-4", ratio: "aspect-[4/5]" },
                2: { span: "col-span-4", ratio: "aspect-[4/5]" },
                3: { span: "col-span-8", ratio: "aspect-[16/7]" },
                4: { span: "col-span-4", ratio: "aspect-[8/7]" },
                5: { span: "col-span-6", ratio: "aspect-[16/10]" },
                6: { span: "col-span-3", ratio: "aspect-[4/5]" },
                7: { span: "col-span-3", ratio: "aspect-[4/5]" },
                8: { span: "col-span-8", ratio: "aspect-[16/7]" },
                9: { span: "col-span-4", ratio: "aspect-[8/7]" },
                10: { span: "col-span-4", ratio: "aspect-[4/5]" },
                11: { span: "col-span-4", ratio: "aspect-[4/5]" },
                12: { span: "col-span-4", ratio: "aspect-[4/5]" },
              };
              return (
                <Figure
                  key={img.src}
                  src={img.src}
                  alt={img.alt}
                  caption={img.caption}
                  index={i}
                  isActive={active === i}
                  onClick={() => onCardClick(i)}
                  className={config[i]?.span ?? "col-span-4"}
                  ratio={config[i]?.ratio ?? "aspect-[4/5]"}
                />
              );
            })}
          </div>

          {/* JSON-LD */}
          <script
            type="application/ld+json"
            dangerouslySetInnerHTML={{ __html: JSON.stringify(galleryLd) }}
          />
        </div>
      </section>
    </MotionConfig>
  );
}

type FigureProps = {
  src: string;
  alt: string;
  caption?: string;
  className?: string;
  ratio?: string;
  index: number;
  isActive: boolean;
  onClick: () => void;
};

function Figure({
  src,
  alt,
  caption = "Project highlight",
  className = "",
  ratio = "aspect-[4/5]",
  index,
  isActive,
  onClick,
}: FigureProps) {
  const item = {
    hidden: { opacity: 0, y: 20, scale: 0.98 },
    show: (i: number) => ({
      opacity: 1,
      y: 0,
      scale: 1,
      transition: { delay: i * 0.06 },
    }),
    exit: { opacity: 0, y: -12, scale: 0.98, transition: { duration: 0.25 } },
  };

  // keyboard toggle (accessibility)
  const onKeyDown: React.KeyboardEventHandler<HTMLElement> = (e) => {
    if (e.key === "Enter" || e.key === " ") {
      e.preventDefault();
      onClick();
    }
  };

  return (
    <motion.figure
      custom={index}
      variants={item}
      initial="hidden"
      whileInView="show"
      viewport={{ amount: 0.25, once: false }}
      exit="exit"
      whileTap={{ scale: 0.995 }}
      onClick={onClick}
      onKeyDown={onKeyDown}
      tabIndex={0}
      role="button"
      aria-pressed={isActive}
      aria-label={`${caption} (image ${index + 1} of ${12})`}
      className={[
        "group relative w-full",
        ratio,
        "overflow-hidden rounded-2xl bg-neutral-200",
        "shadow-[0_10px_30px_rgba(0,0,0,0.10)] ring-1 ring-black/5",
        "transition-all duration-300 will-change-transform",
        isActive
          ? "ring-2 ring-[color:var(--accent)] shadow-[0_30px_80px_rgba(0,0,0,0.35)]"
          : "",
        className,
      ].join(" ")}
      style={{ "--accent": ACCENT } as React.CSSProperties}
    >
      {/* Image (hover scale on inner layer only) */}
      <motion.div
        className="absolute inset-0"
        animate={{ scale: isActive ? 1.03 : 1 }}
        whileHover={{ scale: isActive ? 1.04 : 1.02 }}
        transition={{ type: "spring", stiffness: 160, damping: 18 }}
      >
        <Image
          src={src}
          alt={alt}
          fill
          decoding="async"
          className="object-cover"
          // Mobile: full width, Desktop: about half width each in grid context
          sizes="(max-width: 768px) 100vw, 50vw"
          // Let Next lazy-load by default; no priority here
        />
      </motion.div>

      {/* Shine */}
      <span
        aria-hidden
        className="pointer-events-none absolute inset-y-0 -left-1/2 w-1/1 translate-x-[-120%] bg-[linear-gradient(110deg,transparent,rgba(255,255,255,.5),transparent)] opacity-0 transition-all duration-700 group-hover:translate-x-[240%] group-hover:opacity-100"
      />

      {/* Subtle top gradient */}
      <div
        className="pointer-events-none absolute inset-0 opacity-0 transition-opacity duration-300 group-hover:opacity-100"
        style={{
          background:
            "linear-gradient(to top, rgba(0,0,0,0.15), transparent 60%)",
        }}
      />

      {/* Active overlay + caption */}
      <AnimatePresence>
        {isActive && (
          <motion.figcaption
            key="activeOverlay"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="pointer-events-none absolute inset-0 flex flex-col items-center justify-end p-4 text-center"
          >
            <div
              className="absolute inset-0 rounded-2xl"
              style={{
                boxShadow: `0 0 0 2px ${ACCENT}, 0 20px 50px rgba(0,0,0,0.35)`,
              }}
            />
            <div
              className="absolute inset-0 rounded-2xl"
              style={{
                background:
                  "radial-gradient(400px at 50% 65%, rgba(255,226,65,0.18), transparent 60%)",
              }}
            />
            <span className="relative z-10 mt-auto rounded bg-black/55 px-3 py-1.5 text-xs font-medium text-white backdrop-blur">
              {caption}
            </span>
          </motion.figcaption>
        )}
      </AnimatePresence>
    </motion.figure>
  );
}
