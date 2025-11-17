// app/components/WorkShowcase.tsx
"use client";

import { motion, AnimatePresence } from "framer-motion";
import { useMemo } from "react";

/* ---------------- Types ---------------- */
type WorkItem = {
  id: string;
  title: string;
  tag: string;
  src: string;
  layout: string;
  isHero?: boolean;
};

export default function WorkShowcase() {
  const items = useMemo<WorkItem[]>(
    () => [
      {
        id: "hero",
        title: "Bud Light : Spot",
        tag: "Commercial / Film",
        src: "/one.jpg",
        layout: "col-span-12 lg:col-span-7 lg:col-start-6 aspect-[4/3]",
        isHero: true,
      },
      {
        id: "astro",
        title: "Deep Space Title",
        tag: "CG / Motion",
        src: "/one.jpg",
        layout: "col-span-12 lg:col-span-5 lg:col-start-1 aspect-[16/10]",
      },
      {
        id: "hoodie",
        title: "Interactive Fashion",
        tag: "3D / Apparel",
        src: "/one.jpg",
        layout: "col-span-12 lg:col-span-6 lg:col-start-2 aspect-[4/5]",
      },
      {
        id: "beach",
        title: "Destination Brand",
        tag: "Travel / Brand",
        src: "/one.jpg",
        layout: "col-span-12 lg:col-span-5 lg:col-start-9 aspect-[16/10]",
      },
    ],
    []
  );

  return (
    <section className="w-full bg-transparent py-10 md:py-16">
      <div className="mx-auto w-[92vw] max-w-[1400px]">
        {/* Thin top rail with dots */}
        <TopRail />

        {/* Heading */}
        <header className="relative z-20 mb-10 md:mb-14">
          <div className="mt-3 flex items-center gap-3 text-[11px] uppercase tracking-[0.26em] text-black/60">
            <span className="inline-block h-2 w-2 rounded-full bg-rose-500" />
            Projects
          </div>
          <h2 className="mt-4 text-left font-black uppercase leading-[0.9] text-black text-[clamp(42px,10vw,128px)]">
            Recent
          </h2>
          <h2 className="mt-4 text-left font-black uppercase leading-[0.9] text-black text-[clamp(42px,10vw,128px)]">
            <span className="text-black/70">Work.</span>
          </h2>
        </header>

        {/* Grid */}
        <div className="grid grid-cols-12 gap-x-8 gap-y-14">
          {items.map((it, i) => (
            <Card key={it.id} item={it} index={i} />
          ))}
        </div>

        {/* CTA */}
        <div className="mt-16 flex justify-center lg:justify-end">
          <a href="#" className="group inline-flex flex-col text-black">
            <span className="text-sm font-semibold uppercase tracking-[0.22em]">
              View All Work
            </span>
            <span className="mt-1 h-[2px] w-24 bg-black/60 transition-all group-hover:w-36" />
          </a>
        </div>
      </div>
    </section>
  );
}

/* ---------- TopRail ---------- */
function TopRail() {
  return (
    <div className="relative mb-6">
      <div className="h-[2px] w-full bg-black/20" />
      <div className="absolute -top-[7px] left-0 h-3 w-3 rounded-full border border-black/40" />
      <div className="absolute -top-[7px] right-0 h-3 w-3 rounded-full border border-black/40" />
    </div>
  );
}

/* ---------- Card ---------- */
function Card({ item, index }: { item: WorkItem; index: number }) {
  const delay = 0.12 + index * 0.06;
  const baseZ = item.isHero
    ? "z-10 hover:z-30 transition-[z-index] duration-200"
    : "z-0";

  return (
    <article className={`${item.layout} relative ${baseZ}`}>
      <SpillRevealVertical src={item.src} delay={delay} />

      <motion.div
        initial={{ opacity: 0, y: 12 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, amount: 0.4 }}
        transition={{
          duration: 0.55,
          ease: [0.22, 1, 0.36, 1],
          delay: delay + 0.2,
        }}
        className="pointer-events-none mt-4 select-none text-black"
      >
        <div className="text-[11px] uppercase tracking-[0.26em] text-black/60">
          {item.tag}
        </div>
        <h3 className="mt-1 font-extrabold uppercase leading-[0.95] text-[clamp(22px,4.8vw,56px)]">
          {item.title}
        </h3>
      </motion.div>
    </article>
  );
}

/* -----------------------------------------------------------
   SpillRevealVertical – image fills card; clipPath “wave”
   spills downward on scroll. Works across modern browsers.
   ----------------------------------------------------------- */
function SpillRevealVertical({
  src,
  delay = 0,
}: {
  src: string;
  delay?: number;
}) {
  // Build a wave-topped rectangle (0..100 coordinate space)
  const waveRect = (y: number, amp: number) => {
    const y0 = y.toFixed(2);
    const a = amp.toFixed(2);
    return `
      M0 0 H100
      V${y0}
      C85 ${(+y0 + +a).toFixed(2)} 65 ${(+y0 - +a).toFixed(2)} 50 ${y0}
      C35 ${(+y0 + +a).toFixed(2)} 15 ${(+y0 - +a).toFixed(2)} 0 ${y0}
      Z
    `;
  };

  // Start above frame; end below it for full reveal
  const startD = waveRect(-20, 10);
  const endD = waveRect(120, 4);

  // Unique id per src
  const clipId = `clip-${src.replace(/[^\w-]/g, "-")}`;

  return (
    <div className="relative h-full w-full">
      {/* Inline SVG defs with animated clipPath */}
      <svg viewBox="0 0 100 100" className="absolute inset-0 h-0 w-0">
        <defs>
          {/* Use objectBoundingBox so CSS url(#id) works on HTML elements */}
          <clipPath id={clipId} clipPathUnits="objectBoundingBox">
            {/* Scale 100→1 so our path coords (0..100) fit the OBB space */}
            <motion.path
              transform="scale(0.01,0.01)"
              initial={{ d: startD }}
              whileInView={{ d: endD }}
              viewport={{ once: true, amount: 0.55 }}
              transition={{ delay, duration: 1.1, ease: [0.22, 1, 0.36, 1] }}
            />
          </clipPath>
        </defs>
      </svg>

      <AnimatePresence>
        <motion.img
          src={src}
          alt="work"
          className="block h-full w-full rounded-[20px] object-cover"
          style={{
            clipPath: `url(#${clipId})`,
            WebkitClipPath: `url(#${clipId})`, // Safari
          }}
          initial={{ opacity: 0, scale: 1.06 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true, amount: 0.55 }}
          transition={{
            duration: 0.8,
            ease: [0.22, 1, 0.36, 1],
            delay: delay + 0.05,
          }}
        />
      </AnimatePresence>

      {/* subtle ring for definition */}
      <div className="pointer-events-none absolute inset-0 rounded-[20px] ring-1 ring-black/5" />
    </div>
  );
}
