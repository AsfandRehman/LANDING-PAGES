// components/StruggleSection.tsx
"use client";

import Image from "next/image";
import { useState } from "react";
import { motion, Variants, AnimatePresence } from "framer-motion";
import {
  MessageSquare,
  BarChart3,
  ZapOff,
  ClipboardX,
  LucideIcon,
} from "lucide-react";

const RED = "#ef4444";
const easeOutExpo = [0.22, 1, 0.36, 1] as const;

const fadeUp: Variants = {
  hidden: { opacity: 0, y: 22, filter: "blur(4px)" },
  show: {
    opacity: 1,
    y: 0,
    filter: "blur(0px)",
    transition: { duration: 0.6, ease: easeOutExpo },
  },
};

const mediaVariants: Variants = {
  initial: { opacity: 0, scale: 1.03 },
  enter: {
    opacity: 1,
    scale: 1,
    transition: { duration: 0.7, ease: easeOutExpo },
  },
  exit: { opacity: 0, scale: 1.01, transition: { duration: 0.35 } },
};

type Card = {
  t: string;
  icon: LucideIcon;
  k: string;
  img: string; // NEW: image path for this card
  alt: string; // NEW: alt text for this card
};

const CARDS: Card[] = [
  {
    t: "They Are NOT Consistently Nurturing Their Audience",
    icon: MessageSquare,
    k: "cards-1",
    img: "/images/s7.jpg",
    alt: "Unread messages and ignored notifications on a coach's screen",
  },
  {
    t: "They Have No Reporting To Know What's Working",
    icon: BarChart3,
    k: "cards-2",
    img: "/images/s8.jpg",
    alt: "Confusing analytics dashboard with missing data",
  },
  {
    t: "They Let Leads Slip Through The Cracks",
    icon: ZapOff,
    k: "cards-3",
    img: "/images/s9.jpg",
    alt: "Leads leaking through a funnel concept",
  },
  {
    t: "They Have Terrible Sales Management Systems",
    icon: ClipboardX,
    k: "cards-4",
    img: "/images/s10.jpg",
    alt: "Disorganized sales spreadsheets and tasks",
  },
];

export default function StruggleSection() {
  const [active, setActive] = useState(0);

  return (
    <section
      id="why-struggle"
      className="relative isolate"
      aria-labelledby="struggle-heading"
      style={{
        background:
          "radial-gradient(1200px 600px at 20% -10%, rgba(239,68,68,0.22), transparent 60%), linear-gradient(180deg, #0B0B12 0%, #0B0B12 35%, #09090b 100%)",
      }}
    >
      {/* Top vignette */}
      <div
        aria-hidden
        className="pointer-events-none absolute inset-x-0 -top-px h-10 opacity-70"
        style={{
          background:
            "linear-gradient(180deg, rgba(0,0,0,0.55), rgba(0,0,0,0))",
        }}
      />

      <div className="mx-auto max-w-6xl px-6 py-20 md:py-28 text-white">
        {/* Header */}
        <motion.div
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, amount: 0.35 }}
          className="mb-10 md:mb-14 text-center"
        >
          <motion.h2
            id="struggle-heading"
            variants={fadeUp}
            className="mx-auto max-w-5xl font-extrabold leading-[0.98] tracking-tight text-[clamp(28px,5.2vw,56px)]"
          >
            Here’s why most coaching offers{" "}
            <span className="italic" style={{ color: RED }}>
              STRUGGLE
            </span>{" "}
            to hit $100k+/mo
          </motion.h2>

          <motion.p
            variants={fadeUp}
            className="mx-auto mt-4 max-w-2xl text-white/75"
          >
            These are the silent revenue leaks we fix first. Clean these up and
            growth stops feeling random.
          </motion.p>
        </motion.div>

        {/* Split layout */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8">
          {/* Left: Media with 40% dark overlay */}
          <div className="relative lg:col-span-7 rounded-3xl overflow-hidden border border-white/10 bg-[#111114] shadow-[0_24px_60px_-20px_rgba(0,0,0,0.5)]">
            {/* red glow */}
            <div className="absolute inset-0 pointer-events-none mix-blend-screen opacity-40">
              <div
                className="absolute -left-32 -top-40 h-[480px] w-[480px] rounded-full blur-[80px]"
                style={{ background: RED }}
              />
            </div>

            <div className="relative lg:h-full lg:min-h-[480px]">
              <AnimatePresence mode="wait">
                <motion.div
                  key={active}
                  variants={mediaVariants}
                  initial="initial"
                  animate="enter"
                  exit="exit"
                  className="absolute inset-0"
                >
                  <Image
                    src={CARDS[active].img}
                    alt={CARDS[active].alt}
                    fill
                    className="object-cover"
                    sizes="(max-width: 1024px) 100vw, 58vw"
                    priority
                  />
                  {/* 40% dark overlay */}
                  <div className="absolute inset-0 bg-black/40" />
                </motion.div>
              </AnimatePresence>
            </div>
          </div>

          {/* Right: Cards */}
          <div className="lg:col-span-5">
            <div role="list" className="grid grid-cols-1 gap-4">
              {CARDS.map((c, i) => {
                const Icon = c.icon;
                const selected = i === active;
                return (
                  <motion.button
                    key={c.k}
                    role="listitem"
                    onMouseEnter={() => setActive(i)}
                    onFocus={() => setActive(i)}
                    whileHover={{ y: -2, scale: 1.01 }}
                    whileTap={{ scale: 0.99 }}
                    className={[
                      "group text-left w-full rounded-2xl border transition-all outline-none",
                      selected
                        ? "border-red-500/60 bg-red-500/10 shadow-[0_10px_30px_-12px_rgba(239,68,68,0.35)]"
                        : "border-white/10 bg-white/5 hover:bg-white/[0.08]",
                      "backdrop-blur-md",
                    ].join(" ")}
                  >
                    <div className="flex items-start gap-4 p-5 md:p-6">
                      <span
                        className="grid h-12 w-12 shrink-0 place-items-center rounded-xl ring-1 ring-white/15"
                        style={{
                          background:
                            "linear-gradient(180deg, rgba(239,68,68,0.9), rgba(153,27,27,0.9))",
                        }}
                      >
                        <Icon className="h-5 w-5 text-white" />
                      </span>
                      <div className="flex-1">
                        <h3 className="text-base md:text-lg font-semibold leading-snug">
                          {c.t}
                        </h3>
                        <div className="mt-3 h-1.5 w-16 rounded-full bg-white/15 overflow-hidden">
                          <motion.span
                            className="block h-full"
                            style={{
                              background:
                                "linear-gradient(90deg, #ef4444, #991b1b)",
                            }}
                            animate={{ width: selected ? "100%" : "30%" }}
                            transition={{ duration: 0.5, ease: easeOutExpo }}
                          />
                        </div>
                      </div>
                    </div>
                  </motion.button>
                );
              })}
            </div>

            {/* Dots */}
            <div className="mt-6 flex items-center gap-2" aria-hidden="true">
              {CARDS.map((_, i) => (
                <button
                  key={i}
                  onClick={() => setActive(i)}
                  className={`h-2.5 w-2.5 rounded-full transition-all ${
                    i === active ? "scale-110" : "opacity-40"
                  }`}
                  style={{
                    background: i === active ? RED : "rgba(255,255,255,0.6)",
                  }}
                  aria-label={`Show item ${i + 1}`}
                />
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
