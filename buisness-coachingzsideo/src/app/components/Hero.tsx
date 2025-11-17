"use client";

import { motion, Variants } from "framer-motion";
import { useCallback } from "react";

type HeroCleanProps = {
  youtubeId?: string;
  eyebrow?: string;
  headingAccent?: string;
  trailing?: string;
};

const easeOutExpo = [0.22, 1, 0.36, 1] as const;

const containerStagger: Variants = {
  hidden: {},
  show: { transition: { staggerChildren: 0.08, delayChildren: 0.05 } },
};

const fadeUp: Variants = {
  hidden: { opacity: 0, y: 22, filter: "blur(3px)" },
  show: {
    opacity: 1,
    y: 0,
    filter: "blur(0px)",
    transition: { duration: 0.7, ease: easeOutExpo },
  },
};

const scaleIn: Variants = {
  hidden: { opacity: 0, scale: 0.975, filter: "blur(6px)" },
  show: {
    opacity: 1,
    scale: 1,
    filter: "blur(0px)",
    transition: { duration: 0.95, ease: easeOutExpo },
  },
};

function words(str: string) {
  return str.trim().split(/\s+/);
}

const wordRise: Variants = {
  hidden: { opacity: 0, y: 16, skewY: 5, filter: "blur(2px)" },
  show: (i: number) => ({
    opacity: 1,
    y: 0,
    skewY: 0,
    filter: "blur(0px)",
    transition: { duration: 0.55, ease: easeOutExpo, delay: i * 0.028 },
  }),
};

export default function HeroClean({
  youtubeId = "dQw4w9WgXcQ",
  eyebrow = "SAIM-ZSIDEO — Systems • Automation • Growth",
  headingAccent = "I’ll help you go from a freelancer stuck at $0–$2K a month chasing clients…",
  trailing = "to running an agency like mine that brings in $200K a month within 6 months or less, without you needing to figure any of it out by yourself.",
}: HeroCleanProps) {
  const brandTxt = "text-[var(--brand,#2563eb)] italic";
  const brandBg = "bg-[var(--brand,#2563eb)]";
  const brandRing = "ring-[color:var(--brand,#2563eb)]";

  const openCalendly = useCallback((e?: React.MouseEvent) => {
    e?.preventDefault();
    if (typeof window !== "undefined") {
      document.documentElement.classList.add("cal-blur");
      if (window.Calendly?.initPopupWidget) {
        window.Calendly.initPopupWidget({
          url: "https://calendly.com/zsideo/zsideo-content",
        });
      } else {
        window.open("https://calendly.com/zsideo/zsideo-content", "_blank");
      }
    }
  }, []);

  const accentWords = words(headingAccent);
  const trailingWords = words(trailing);

  return (
    <section
      id="hero"
      className="relative overflow-clip bg-[var(--color-bg)] text-[var(--color-text)] antialiased"
      aria-label="Hero"
    >
      {/* wider container + better top spacing */}
      <div className="relative mx-auto max-w-[1440px] px-4 sm:px-6 lg:px-10 pt-10 sm:pt-10">
        <motion.div
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, amount: 0.3 }}
          variants={containerStagger}
          className="mx-auto max-w-[1200px] text-center pt-14 sm:pt-16"
        >
          {/* Eyebrow — slightly larger, looser tracking */}
          <motion.p
            variants={fadeUp}
            className="mb-4 text-[12px] sm:text-[13px] tracking-[0.18em] uppercase text-black/70"
          >
            {eyebrow}
          </motion.p>

          {/* Headline */}
         <div
  className={[
    "mx-auto max-w-[1280px]",
    "leading-[1.08] md:leading-[1.06]",
    "tracking-[-0.012em] md:tracking-[-0.016em]",
    "text-[clamp(28px,4.6vw,56px)]", // smaller headline
    "font-bold",
    "text-balance ",
  ].join(" ")}
>
  {/* Headline (accent) */}
  <motion.span className={`block ${brandTxt}`}>
    {accentWords.map((w, i) => (
      <motion.span
        key={`a-${i}-${w}`}
        custom={i}
        initial="hidden"
        whileInView="show"
        viewport={{ once: true, amount: 0.7 }}
        variants={wordRise}
        className="inline-block mr-[0.35ch]"
      >
        {w}
      </motion.span>
    ))}
  </motion.span>

  {/* Trailing line — smaller, lighter, not italic */}
  <span className="block mt-3 md:mt-4 md:text-[clamp(20px,2.6vw,30px)] font-medium text-black/85 not-italic">
    {trailingWords.map((w, i) => (
      <motion.span
        key={`t-${i}-${w}`}
        custom={i + accentWords.length}
        initial="hidden"
        whileInView="show"
        viewport={{ once: true, amount: 0.7 }}
        variants={wordRise}
        className="inline-block mr-[0.35ch]"
      >
        {w}
      </motion.span>
    ))}
  </span>
</div>


          {/* Subheadline — wider measure + softer color */}
          <motion.p
            variants={fadeUp}
            className="mx-auto mt-6 max-w-[980px] text-[clamp(15px,1.4vw,18px)] text-black/80 leading-[1.7] [text-wrap:pretty]"
          >
            I built my agency from $0 to $200K in just 12 months — and I’ll work
            with you 1:1 to build yours too, completely done for you, in the
            next 6 months… without you chasing clients or waiting forever to see
            results.
          </motion.p>
        </motion.div>

        {/* VSL — wider, stronger shadow, same aspect */}
        <motion.div
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, amount: 0.25 }}
          variants={scaleIn}
          className="relative mx-auto mt-10 sm:mt-14 max-w-[1200px]"
        >
          <div
            aria-hidden
            className="pointer-events-none absolute inset-0 -z-10 translate-y-6 rounded-[24px]
               bg-[radial-gradient(50%_60%_at_50%_100%,rgba(0,0,0,0.07),transparent_70%)]
               blur-2xl"
          />
          <div className="rounded-[24px] p-[1.5px] bg-gradient-to-b from-white/40 via-white/20 to-white/10">
            <div
              className="relative aspect-[16/9] w-full overflow-hidden rounded-[22px]
                 bg-black ring-1 ring-black/10 shadow-[0_40px_120px_-30px_rgba(0,0,0,0.55)]
                 transition-transform duration-500 will-change-transform
                 hover:-translate-y-1 hover:shadow-[0_50px_140px_-28px_rgba(0,0,0,0.6)]"
            >
              <div
                aria-hidden
                className="pointer-events-none absolute inset-0 bg-[linear-gradient(120deg,rgba(255,255,255,0.08),transparent_30%)]"
              />
              <iframe
                title="VSL"
                src={`https://www.youtube-nocookie.com/embed/${youtubeId}?modestbranding=1&rel=0`}
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                allowFullScreen
                loading="lazy"
                className="h-full w-full"
              />
            </div>
          </div>
        </motion.div>

        {/* CTA */}
        <div className="mt-14 md:mt-18 flex justify-center">
          <motion.button
            onClick={openCalendly}
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.98, y: 1 }}
            className={[
              "inline-flex items-center gap-2 rounded-full px-8 py-4 md:px-9 md:py-4.5",
              "text-base md:text-lg font-medium text-white shadow-sm",
              brandBg,
              "transition-transform duration-300 ease-out",
              "focus-visible:outline-none focus-visible:ring-4",
              brandRing,
              "focus-visible:ring-opacity-30",
            ].join(" ")}
            aria-label="Book your free strategy call"
          >
            See How Can We Help You Scale
            <svg className="size-5" viewBox="0 0 24 24" fill="none" aria-hidden="true">
              <path
                d="M5 12h14M13 5l7 7-7 7"
                stroke="currentColor"
                strokeWidth="1.8"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
            </svg>
          </motion.button>
        </div>
      </div>
    </section>
  );
}

declare global {
  interface Window {
    Calendly?: {
      initPopupWidget: (opts: { url: string }) => void;
      closePopupWidget?: () => void;
    };
  }
}
