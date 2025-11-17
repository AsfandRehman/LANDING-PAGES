"use client";

import { useLayoutEffect, useMemo, useRef, useState } from "react";
import { motion, useScroll, useSpring, useTransform } from "framer-motion";

type Item = { id: string | number; label: string };

type Props = {
  heading?: string;
  blurb?: string;
  row1?: Item[];
  row2?: Item[];
  /** px — ensures the sticky part always has enough vertical runway */
  minScrollLen?: number;
  /** speed multipliers for each row (higher = travels farther per same vertical) */
  speedRow1?: number;
  speedRow2?: number;
  /** extra classes for each card (surface stays transparent by default) */
  cardClassName?: string;
};

export default function PartnerMarqueeOnScroll({
  heading = "JOIN THE BUZZWORTHY FAMILY.",
  blurb = `At Buzzworthy, our goal is to exceed expectations and build lasting partnerships.
Through open communication, trust, and shared aspirations, we establish relationships
built on mutual respect, fostering collaborative journeys toward greatness.`,
  row1,
  row2,
  minScrollLen = 1400,
  speedRow1 = 1, // left→right
  speedRow2 = 1.25, // right→left a bit faster for parallax feel
  cardClassName = "",
}: Props) {
  /* -------- data (fallback demo items) -------- */
  const R1 = useMemo<Item[]>(
    () =>
      row1 ?? [
        { id: 1, label: "THE OCEAN AGENCY" },
        { id: 2, label: "wework" },
        { id: 3, label: "SELENE AVIATION" },
        { id: 4, label: "SLINGSHOT" },
        { id: 5, label: "HELIAS" },
        { id: 6, label: "AWESTRUCK" },
        { id: 7, label: "MODERNMD" },
      ],
    [row1]
  );

  const R2 = useMemo<Item[]>(
    () =>
      row2 ?? [
        { id: "a", label: "COINVERSE" },
        { id: "b", label: "RARE AIR" },
        { id: "c", label: "SOLACE" },
        { id: "d", label: "BOLD STUDIO" },
        { id: "e", label: "SUNDIAL" },
        { id: "f", label: "LYNX MEDIA" },
        { id: "g", label: "ORBITAL" },
      ],
    [row2]
  );

  /* -------- measurement + scroll plumbing -------- */
  const wrapRef = useRef<HTMLDivElement | null>(null); // tall wrapper
  const stickyRef = useRef<HTMLDivElement | null>(null); // sticky viewport
  const track1Ref = useRef<HTMLDivElement | null>(null); // first row
  const track2Ref = useRef<HTMLDivElement | null>(null); // second row

  const [scrollLen, setScrollLen] = useState(minScrollLen);
  const [shift1, setShift1] = useState(0);
  const [shift2, setShift2] = useState(0);

  useLayoutEffect(() => {
    const measure = () => {
      if (!stickyRef.current) return;
      const vw = stickyRef.current.clientWidth;

      const w1 = track1Ref.current?.scrollWidth ?? 0;
      const w2 = track2Ref.current?.scrollWidth ?? 0;

      // how much each row can slide (beyond viewport)
      const extra1 = Math.max(w1 - vw, 0) * speedRow1;
      const extra2 = Math.max(w2 - vw, 0) * speedRow2;

      setShift1(extra1);
      setShift2(extra2);

      // vertical length should cover the larger of the two slides + viewport height
      const computed = Math.max(extra1, extra2) + window.innerHeight;
      setScrollLen(Math.max(computed, minScrollLen));
    };

    // measure a few times to catch fonts/layout settling
    const multimeasure = () => {
      measure();
      const id1 = requestAnimationFrame(measure);
      const id2 = requestAnimationFrame(measure);
      return () => {
        cancelAnimationFrame(id1);
        cancelAnimationFrame(id2);
      };
    };

    const cancel = multimeasure();
    const ro = new ResizeObserver(measure);
    stickyRef.current && ro.observe(stickyRef.current);
    track1Ref.current && ro.observe(track1Ref.current);
    track2Ref.current && ro.observe(track2Ref.current);
    window.addEventListener("resize", measure);

    return () => {
      cancel?.();
      ro.disconnect();
      window.removeEventListener("resize", measure);
    };
  }, [minScrollLen, speedRow1, speedRow2]);

  // vertical progress across the wrapper drives horizontal x transforms
  const { scrollYProgress: hRaw } = useScroll({
    target: wrapRef,
    offset: ["start start", "end end"],
  });
  const h = useSpring(hRaw, { stiffness: 140, damping: 22, mass: 0.25 });

  // row translations (opposite directions)
  const x1 = useTransform(h, [0, 1], [0, shift1]); // left → right
  const x2 = useTransform(h, [0, 1], [0, -shift2]); // right → left

  return (
    <section className="relative w-full">
      {/* --------- Intro text area (transparent) ---------- */}
      <div className="mx-auto w-full max-w-7xl px-6 md:px-10">
        <div className="grid grid-cols-1 md:grid-cols-12 gap-8 md:gap-10 py-24 md:py-32">
          <div className="md:col-span-7">
            <h2
              className="font-black leading-[0.9] tracking-tight
                           text-[12vw] md:text-[8vw] lg:text-[7vw]"
            >
              {heading}
            </h2>
          </div>
          <div className="md:col-span-5 md:self-end">
            <p className="max-w-sm text-sm md:text-base opacity-80">{blurb}</p>
          </div>
        </div>
      </div>

      {/* --------- Sticky scroller with two opposing rows ---------- */}
      <div ref={wrapRef} style={{ height: scrollLen }} className="relative">
        <div
          ref={stickyRef}
          className="sticky top-0 h-screen overflow-hidden"
          aria-label="Partner marquee scroller"
        >
          <div className="absolute inset-0 flex flex-col items-stretch justify-center gap-10 md:gap-14 px-6 md:px-10">
            {/* Row 1 */}
            <motion.div
              ref={track1Ref}
              style={{ x: x1 }}
              className="flex items-center gap-6 md:gap-8 will-change-transform"
            >
              <div className="shrink-0 w-[8vw]" />
              {R1.map((it) => (
                <Card key={it.id} label={it.label} className={cardClassName} />
              ))}
              <div className="shrink-0 w-[8vw]" />
            </motion.div>

            {/* Row 2 (opposite direction) */}
            <motion.div
              ref={track2Ref}
              style={{ x: x2 }}
              className="flex items-center gap-6 md:gap-8 will-change-transform"
            >
              <div className="shrink-0 w-[8vw]" />
              {R2.map((it) => (
                <Card key={it.id} label={it.label} className={cardClassName} />
              ))}
              <div className="shrink-0 w-[8vw]" />
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
}

/* ---------- Presentational card (kept neutral/transparent) ---------- */
function Card({
  label,
  className = "",
}: {
  label: string;
  className?: string;
}) {
  return (
    <div
      className={[
        "shrink-0 w-[68vw] sm:w-[48vw] md:w-[40vw] lg:w-[32vw] xl:w-[28vw]",
        "aspect-[16/10] rounded-2xl border border-white/10",
        "backdrop-blur will-change-transform",
        "flex items-center justify-center",
        "text-base md:text-xl font-semibold opacity-90",
        // a minimal default surface so it’s visible on any page; override via prop
        "bg-black/10 text-current",
        className,
      ].join(" ")}
    >
      <span className="tracking-wide">{label}</span>
    </div>
  );
}
