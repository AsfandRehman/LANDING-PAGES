"use client";

import { motion, useReducedMotion, type Variants } from "framer-motion";
import type { ComponentType } from "react";
import { Rocket, Bot, Timer, Check, X } from "lucide-react";

type Row = {
  label: string;
  us: string | boolean;
  others: string | boolean;
  icon: ComponentType<{ className?: string }>;
  tag?: string;
};

const ACCENT = "#2563eb";

const ROWS: Row[] = [
  {
    label: " A Real Business, Not Just a Bunch of Tactics",
    us: "We help you turn your current service into a real, scalable offer people are excited to buy.",
    others:
      "Random strategies that don’t connect and fall apart after a few weeks.",
    icon: Rocket,
    tag: "90 Days",
  },
  {
    label: " Everything That Should Be Automated — Is",
    us: "We build the backend systems so delivery, onboarding, and fulfillment don’t depend on you.",
    others:
      " Manual follow-ups, missed leads, and a whole lot of stuff slipping through the cracks.",
    icon: Bot,
  },
  {
    label: "Hours Back Every Week",
    us: "We create the client acquisition structure that consistently brings in new customers not leads.",
    others:
      "You’re the one doing everything — DMing leads, handling follow ups, and putting on stress instead of revenue.",
    icon: Timer,
  },
];

const easeOutExpo = [0.22, 1, 0.36, 1] as const;

export default function WhyChooseUs() {
  const prefersReduced = useReducedMotion();

  const container: Variants | undefined = prefersReduced
    ? undefined
    : {
        hidden: { opacity: 0 },
        show: {
          opacity: 1,
          transition: { staggerChildren: 0.12, delayChildren: 0.08 },
        },
      };

  const rowVariant: Variants | undefined = prefersReduced
    ? undefined
    : {
        hidden: { opacity: 0, y: 22, scale: 0.99 },
        show: {
          opacity: 1,
          y: 0,
          scale: 1,
          transition: { duration: 0.5, ease: easeOutExpo },
        },
      };

  return (
    <section className="bg-white py-14 md:py-16" id="services">
      <div className="mx-auto max-w-6xl px-4 sm:px-6">
        {/* Heading */}
        <motion.h2
          className="mx-auto max-w-4xl text-center font-extrabold leading-[0.96] tracking-tight text-black text-[clamp(30px,6.5vw,72px)]"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.4 }}
          transition={{ duration: 0.6, ease: easeOutExpo }}
        >
          What Makes This Different From{" "}
          <span className="italic" style={{ color: ACCENT }}>
            Anything Else You’ve Seen
          </span>{" "}
        </motion.h2>

        <motion.p
          className="mx-auto mt-3 max-w-6xl text-center text-neutral-700 text-[15px] sm:text-base"
          initial={{ opacity: 0, y: 6 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.7 }}
          transition={{ duration: 0.4, ease: "easeOut", delay: 0.05 }}
        >
          This isn’t a course, where I throw a 16 hour course at your face and
          let you figure it out yourself, instead this is a full DFY program
          where me and my team help you build a agency with our expertise and
          help. All you have to do is walk in the path we’ve already laid out,
          Our job is simple: we take everything that’s working for us inside a
          $100K–$200K/month agency — and build that same structure around your
          business. So instead of being a freelancer who trades time for money,
          you become a business owner with a scalable offer, predictable
          revenue, and a system that keeps growing without you constantly
          chasing the next client. We’re in the trenches with you — 1:1 —
          building everything with you and for you.
        </motion.p>

        {/* Legend */}
        <div className="mt-6 flex flex-wrap items-center justify-center gap-4 sm:gap-6 text-sm text-neutral-700">
          <LegendDot color="#ef4444" label="Typical Alternatives" icon="x" />
          <LegendDot color={ACCENT} label="Our Operating System" icon="check" />
        </div>

        {/* Timeline grid */}
        <div className="relative mt-10">
          {/* Center spine (desktop only) */}
          <div className="pointer-events-none absolute left-1/2 top-0 hidden h-full w-[2px] -ml-px bg-neutral-200 md:block" />

          <motion.div
            className="space-y-6 sm:space-y-7"
            variants={container}
            initial="hidden"
            whileInView="show"
            viewport={{ once: true, amount: 0.25 }}
          >
            {ROWS.map((row, i) => (
              <motion.div
                key={row.label}
                variants={rowVariant}
                className="
                  grid
                  grid-cols-1
                  gap-4
                  md:grid-cols-[1fr_56px_1fr]
                  md:items-stretch
                "
              >
                {/* Left: Others */}
                <SidePanel kind="others" row={row} index={i} />

                {/* Spine node (hidden on mobile, scaled down on tablet) */}
                <div className="hidden md:grid">
                  <SpineNode row={row} index={i} />
                </div>

                {/* Right: Us */}
                <SidePanel kind="us" row={row} index={i} />
              </motion.div>
            ))}
          </motion.div>
        </div>
      </div>
    </section>
  );
}

/* ------------------------------ Subcomponents ----------------------------- */

function LegendDot({
  color,
  label,
  icon,
}: {
  color: string;
  label: string;
  icon: "check" | "x";
}) {
  return (
    <div className="flex items-center gap-2">
      <span
        className="inline-flex h-5 w-5 items-center justify-center rounded-full text-[11px] font-bold text-white"
        style={{ backgroundColor: color }}
      >
        {icon === "check" ? "✓" : "✕"}
      </span>
      <span className="text-sm sm:text-base">{label}</span>
    </div>
  );
}

function SpineNode({ row, index }: { row: Row; index: number }) {
  const Icon = row.icon;
  return (
    <div className="relative grid place-items-center">
      {/* subtle ping/ripple behind icon */}
      <span className="pointer-events-none absolute h-14 w-14 rounded-full bg-neutral-200/40 animate-ping md:h-16 md:w-16" />
      <motion.div
        whileHover={{ rotate: -2, scale: 1.03 }}
        whileTap={{ scale: 0.98 }}
        className="z-10 grid h-12 w-12 place-items-center rounded-full bg-white shadow-[0_8px_22px_-12px_rgba(0,0,0,0.25)] border border-neutral-200 md:h-14 md:w-14"
      >
        <Icon className="h-5 w-5 text-neutral-700 md:h-6 md:w-6" />
      </motion.div>
      {/* connector lines (top/bottom) */}
      <div className="pointer-events-none absolute left-1/2 top-0 -z-10 h-1/2 w-px -translate-x-1/2 bg-neutral-200" />
      <div className="pointer-events-none absolute left-1/2 bottom-0 -z-10 h-1/2 w-px -translate-x-1/2 bg-neutral-200" />
      {/* index badge */}
      <div className="absolute -bottom-2 left-1/2 -translate-x-1/2 rounded-full bg-black text-white text-[10px] px-2 py-0.5">
        {index + 1}
      </div>
    </div>
  );
}

function SidePanel({
  kind,
  row,
  index,
}: {
  kind: "us" | "others";
  row: Row;
  index: number;
}) {
  const isUs = kind === "us";
  const tone = isUs
    ? {
        bg: "bg-[rgba(37,99,235,0.06)]",
        ring: "ring-[rgba(37,99,235,0.22)]",
        title: "text-neutral-900",
        chip: ACCENT,
      }
    : {
        bg: "bg-[rgba(239,68,68,0.06)]",
        ring: "ring-[rgba(239,68,68,0.18)]",
        title: "text-neutral-900",
        chip: "#ef4444",
      };

  const value = isUs ? row.us : row.others;

  // Disable aggressive hover transforms on touch devices to avoid overlap
  const hoverTransforms = {
    y: -2,
    scale: 1.01,
    boxShadow: "0 20px 38px -16px rgba(0,0,0,0.28)",
  } as const;

  return (
    <motion.article
      tabIndex={0}
      // Apply lift effect only for non-touch pointers via media query
      whileHover={hoverTransforms}
      whileTap={{ scale: 0.995 }}
      whileFocus={{ y: -2, scale: 1.01 }}
      transition={{ type: "spring", stiffness: 260, damping: 20 }}
      className={`
        relative rounded-2xl ${tone.bg} ring-1 ${tone.ring}
        shadow-[0_10px_30px_-16px_rgba(0,0,0,0.18)]
        p-4 sm:p-5 md:p-6 outline-none focus-visible:ring-2
      `}
      aria-label={`${isUs ? "Our" : "Alternatives"} view for ${row.label}`}
      style={{
        // Prevent overlap on small screens when lifting
        willChange: "transform",
        contain: "layout paint",
      }}
    >
      {/* Header */}
      <div className="flex items-start sm:items-center gap-3">
        <motion.span
          initial={false}
          animate={{ y: [0, -2, 0] }}
          transition={{
            duration: 3,
            repeat: Infinity,
            ease: "easeInOut",
            delay: (index % 3) * 0.2,
          }}
          className="grid h-8 w-8 sm:h-9 sm:w-9 place-items-center rounded-xl text-white shrink-0"
          style={{ backgroundColor: tone.chip }}
        >
          {isUs ? (
            <Check className="h-4 w-4 sm:h-5 sm:w-5 text-white" />
          ) : (
            <X className="h-4 w-4 sm:h-5 sm:w-5 text-white" />
          )}
        </motion.span>

        <h3 className={`text-[15px] sm:text-base font-semibold ${tone.title}`}>
          {row.label}
        </h3>

        {isUs && row.tag && (
          <span className="ml-auto inline-flex items-center rounded-full border border-neutral-200 bg-white px-2 py-0.5 sm:px-2.5 text-[10px] sm:text-[11px] font-medium text-neutral-700">
            {row.tag}
          </span>
        )}
      </div>

      {/* Body */}
      <div className="mt-2 text-[14px] sm:text-[14.5px] leading-relaxed text-neutral-800">
        {typeof value === "boolean" ? (
          value ? (
            <span className="font-medium text-neutral-900">Included</span>
          ) : (
            <span className="text-neutral-700">Not included</span>
          )
        ) : (
          <span
            className={
              isUs ? "font-medium text-neutral-900" : "text-neutral-800"
            }
          >
            {value}
          </span>
        )}
      </div>
    </motion.article>
  );
}
