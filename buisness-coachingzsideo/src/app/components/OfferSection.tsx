// components/OfferSection.tsx
"use client";

import Image from "next/image";
import { useEffect, useState, useCallback } from "react";
import { motion, Variants, AnimatePresence } from "framer-motion";
import { BarChart3, Clock, CheckCircle2, LucideIcon } from "lucide-react";
import Script from "next/script";

declare global {
  interface Window {
    Calendly?: {
      initPopupWidget: (opts: { url: string }) => void;
      closePopupWidget?: () => void;
    };
  }
}

/* ---------- Motion helpers ---------- */
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

const imgVariants: Variants = {
  initial: { opacity: 0, scale: 1.04 },
  enter: {
    opacity: 1,
    scale: 1,
    transition: { duration: 0.7, ease: easeOutExpo },
  },
  exit: { opacity: 0, scale: 1.02, transition: { duration: 0.35 } },
};

/* ---------- Data ---------- */
export type Item = {
  t: string;
  d: string;
  icon: LucideIcon;
  img: string;
};

const ITEMS: Item[] = [
  {
    t: "Clients Coming to You",
    d: "We’ll help you build a system that brings clients straight to your inbox,  no cold DMs, no cold calling…just a steady flow of people who want to work with you.",
    icon: BarChart3,
    img: "/images/client.jpg",
  },
  {
    t: "Your Time Back",
    d: "We’ll automate the boring stuff, follow-ups, reminders, onboarding — so you can stop babysitting your business and spend your time where it actually grows revenue.",
    icon: Clock,
    img: "/images/automation.jpg",
  },
  {
    t: "Progress That Doesn’t Stall",
    d: "No more starting strong and losing momentum. We’ll guide you week by week with clear goals, personal check-ins, and direct feedback — so you’re always moving forward and never stuck",
    icon: CheckCircle2,
    img: "/images/road.png",
  },
];

/* ---------- Component ---------- */
export default function OfferSection() {
  const [active, setActive] = useState(0);
  const activeItem = ITEMS[active];
  const idPrefix = "offer-tab";

  // Calendly blur/open/close
  useEffect(() => {
    const onMsg = (e: MessageEvent) => {
      if (typeof e.data !== "object" || !e.data?.event) return;
      if (e.data.event === "calendly.ui.opened") {
        document.documentElement.classList.add("cal-blur");
      }
      if (e.data.event === "calendly.ui.closed") {
        document.documentElement.classList.remove("cal-blur");
      }
    };
    window.addEventListener("message", onMsg);
    return () => window.removeEventListener("message", onMsg);
  }, []);

  const openCalendly = useCallback((e?: React.MouseEvent) => {
    e?.preventDefault();
    document.documentElement.classList.add("cal-blur");
    window.Calendly?.initPopupWidget({
      url: "https://calendly.com/zsideo/zsideo-content",
    });
  }, []);

  // keyboard arrows
  useEffect(() => {
    const onKey = (e: KeyboardEvent) => {
      if (e.key === "ArrowRight") setActive((i) => (i + 1) % ITEMS.length);
      if (e.key === "ArrowLeft")
        setActive((i) => (i - 1 + ITEMS.length) % ITEMS.length);
    };
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, []);

  return (
    <section
      id="about"
      className="relative bg-white text-black"
      aria-labelledby="offer-heading"
    >
      {/* Calendly assets */}
      <Script
        src="https://assets.calendly.com/assets/external/widget.js"
        strategy="afterInteractive"
      />
      <link
        rel="stylesheet"
        href="https://assets.calendly.com/assets/external/widget.css"
      />

      <div className="mx-auto max-w-6xl px-6 py-24 md:py-32">
        {/* Header */}
        <motion.div
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, amount: 0.35 }}
          className="text-center"
        >
          <motion.h2
            id="offer-heading"
            variants={fadeUp}
            className="mx-auto max-w-4xl font-extrabold leading-[0.96] tracking-tight text-[clamp(32px,6.2vw,68px)]"
          >
            What Most Freelancers{" "}
            <span className="italic text-[var(--color-accent)] whitespace-nowrap">
              Don’t Realize.
            </span>
          </motion.h2>

          <motion.p
            variants={fadeUp}
            className="mx-auto mt-5 max-w-6xl text-base sm:text-lg text-neutral-700"
          >
            Most freelancers keep trying to “work harder” to grow. They take on
            more clients, offer more services, reply to more DMs — but at the
            end of the month, they’re still stuck around the same income. It’s
            not because you’re not good enough… …it’s because freelancing is
            built with a ceiling. And unless you change the way you run your
            business, you’ll always be stuck under it. That’s where we come in.
          </motion.p>
        </motion.div>

        {/* Tabbed media split */}
        <div className="mt-14 grid grid-cols-1 lg:grid-cols-12 gap-8">
          {/* Left: Large media panel */}
          <div className="relative lg:col-span-7 rounded-3xl overflow-hidden border border-neutral-200 shadow-[0_20px_40px_-24px_rgba(0,0,0,0.25)] bg-white">
            <div className="relative lg:h-full lg:min-h-[480px] bg-white">
              <AnimatePresence mode="wait">
                <motion.div
                  key={active}
                  variants={imgVariants}
                  initial="initial"
                  animate="enter"
                  exit="exit"
                  className="absolute inset-0"
                >
                  <Image
                    src={activeItem.img}
                    alt={activeItem.t}
                    fill
                    priority
                    className="object-contain" // shows full image, no crop
                    sizes="(max-width: 1024px) 100vw, 58vw"
                  />
                </motion.div>
              </AnimatePresence>
            </div>
          </div>

          {/* Right: Vertical tabs */}
          <div className="lg:col-span-5">
            <div
              role="tablist"
              aria-label="Program outcomes"
              className="flex flex-col gap-3"
            >
              {ITEMS.map((item, i) => {
                const Icon = item.icon;
                const selected = i === active;
                return (
                  <button
                    key={item.t}
                    role="tab"
                    aria-selected={selected}
                    aria-controls={`${idPrefix}-panel-${i}`}
                    id={`${idPrefix}-tab-${i}`}
                    onClick={() => setActive(i)}
                    onMouseEnter={() => setActive(i)}
                    className={`group w-full text-left rounded-2xl border transition-all outline-none focus-visible:ring-4 focus-visible:ring-[var(--color-accent)]/30
                    ${
                      selected
                        ? "border-[var(--color-accent)] bg-[var(--color-accent)]/5"
                        : "border-neutral-200 bg-white hover:bg-neutral-50"
                    }`}
                  >
                    <div className="flex items-start gap-4 p-5 md:p-6">
                      <span
                        className="grid h-11 w-11 shrink-0 place-items-center rounded-xl"
                        style={{ backgroundColor: "var(--color-accent)" }}
                      >
                        <Icon className="h-5 w-5 text-white" />
                      </span>
                      <div className="flex-1">
                        <div className="flex items-center gap-3">
                          <h3 className="text-lg md:text-xl font-semibold tracking-tight">
                            {item.t}
                          </h3>
                          {selected && (
                            <motion.span
                              layoutId="offer-dot"
                              className="h-2 w-2 rounded-full"
                              style={{ backgroundColor: "var(--color-accent)" }}
                            />
                          )}
                        </div>
                        <p className="mt-2 text-neutral-700 leading-relaxed">
                          {item.d}
                        </p>
                        <motion.span
                          layout
                          className="mt-4 block h-[3px] w-16 origin-left"
                          style={{
                            backgroundColor: "var(--color-accent)",
                            opacity: selected ? 1 : 0.2,
                            transform: `scaleX(${selected ? 1 : 0.4})`,
                          }}
                        />
                      </div>
                    </div>
                  </button>
                );
              })}
            </div>

            {/* Active panel for SR */}
            <div
              className="sr-only"
              id={`${idPrefix}-panel-${active}`}
              role="tabpanel"
              aria-labelledby={`${idPrefix}-tab-${active}`}
            >
              {activeItem.d}
            </div>

            {/* Progress dots */}
            <div className="mt-6 flex items-center gap-2" aria-hidden="true">
              {ITEMS.map((_, i) => (
                <button
                  key={i}
                  onClick={() => setActive(i)}
                  className={`h-2.5 w-2.5 rounded-full transition-all ${
                    i === active ? "scale-110" : "opacity-40"
                  }`}
                  style={{ backgroundColor: "var(--color-accent)" }}
                />
              ))}
            </div>
          </div>
        </div>

        {/* CTA block */}
        <motion.div
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, amount: 0.3 }}
          className="mt-16 text-center"
        >
          <motion.div
            variants={fadeUp}
            className="inline-flex flex-wrap items-center justify-center gap-4"
          >
            <motion.button
              onClick={openCalendly}
              whileTap={{ scale: 0.98 }}
              whileHover={{ scale: 1.02, y: -1 }}
              className="group relative inline-flex items-center gap-2 rounded-xl bg-[var(--color-accent)] px-8 py-4 text-lg font-medium text-white shadow-sm outline-none transition-transform focus-visible:ring-4 focus-visible:ring-[var(--color-accent)]/30"
              aria-label="Book your free strategy call"
              id="cta"
            >
              <span className="relative z-10">Book Your Free Call</span>
              <svg
                className="relative z-10 size-5 transition-transform duration-300 group-hover:translate-x-0.5"
                viewBox="0 0 24 24"
                fill="none"
                aria-hidden="true"
              >
                <path
                  d="M5 12h14M13 5l7 7-7 7"
                  stroke="currentColor"
                  strokeWidth="1.8"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
              </svg>
              <motion.span
                aria-hidden
                whileHover={{ x: ["-140%", "140%"] }}
                transition={{ duration: 0.9, ease: "easeOut" }}
                className="pointer-events-none absolute inset-0 overflow-hidden rounded-xl"
              >
                <span className="absolute left-0 top-0 h-full w-1/3 -skew-x-12 opacity-20 bg-white blur-md" />
              </motion.span>
            </motion.button>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}
