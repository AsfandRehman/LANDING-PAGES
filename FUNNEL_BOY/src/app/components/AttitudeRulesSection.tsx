"use client";

import { useLayoutEffect, useMemo, useRef, useState } from "react";
import { motion, useScroll, useSpring, useTransform } from "framer-motion";

type Card = { id: number | string; title: string; body: string };

type Props = {
  word?: string;
  cards?: Card[];
  letterStiffness?: number;
  letterDamping?: number;
  /** optional extra classes for each card (e.g., bg-black/40 text-white) */
  cardClassName?: string;
  /** ensure the horizontal section has at least this much scroll distance */
  minScrollLen?: number; // px
};

export default function AttitudeScroller({
  word = "Attitude",
  cards: cardsProp,
  letterStiffness = 140,
  letterDamping = 22,
  cardClassName = "",
  minScrollLen = 1400, // <- key fix: give enough runway for h to move
}: Props) {
  const WORD = useMemo(() => word.split(""), [word]);

  /* ========== PART 1 — Vertical letter-by-letter ========== */
  const vRef = useRef<HTMLDivElement | null>(null);
  const { scrollYProgress: vRaw } = useScroll({
    target: vRef,
    offset: ["start end", "end start"],
  });
  const v = useSpring(vRaw, {
    stiffness: letterStiffness,
    damping: letterDamping,
    mass: 0.25,
  });

  const settleScale = useTransform(v, [0, 0.65, 1], [0.96, 1, 1.02]);
  const settleOpacity = useTransform(v, [0, 0.12, 1], [0, 1, 1]);
  const letterSpacing = useTransform(v, [0, 1], [0.16, -0.02]);

  const per = 1 / Math.max(WORD.length, 1);
  const letterStyles = WORD.map((_, i) => {
    const start = i * per * 0.9;
    const end = start + per * 0.9;
    return {
      y: useTransform(v, [start, end], [40, 0]),
      o: useTransform(v, [start, end], [0, 1]),
      r: useTransform(v, [start, end], [6, 0]),
    };
  });

  /* ========== PART 2 — Sticky horizontal scroller ========== */
  const wrapRef = useRef<HTMLDivElement | null>(null);
  const stickyRef = useRef<HTMLDivElement | null>(null);
  const trackRef = useRef<HTMLDivElement | null>(null);

  const [scrollLen, setScrollLen] = useState(minScrollLen);
  const [maxShift, setMaxShift] = useState(0);

  useLayoutEffect(() => {
    const measure = () => {
      if (!stickyRef.current || !trackRef.current) return;
      const vw = stickyRef.current.clientWidth;
      const trackW = trackRef.current.scrollWidth;
      const extra = Math.max(trackW - vw, 0);
      // ensure we never go below minScrollLen so there is *always* horizontal progress
      const computed = extra + window.innerHeight;
      setScrollLen(Math.max(computed, minScrollLen));
      setMaxShift(extra);
    };

    // measure a few times to catch late layout/font changes
    const rafMeasure = () => {
      measure();
      const id = requestAnimationFrame(() => {
        measure();
        requestAnimationFrame(measure);
      });
      return () => cancelAnimationFrame(id);
    };

    const cancel = rafMeasure();
    const ro = new ResizeObserver(measure);
    if (stickyRef.current) ro.observe(stickyRef.current);
    if (trackRef.current) ro.observe(trackRef.current);
    window.addEventListener("resize", measure);
    return () => {
      cancel?.();
      ro.disconnect();
      window.removeEventListener("resize", measure);
    };
  }, [minScrollLen]);

  const { scrollYProgress: hRaw } = useScroll({
    target: wrapRef,
    offset: ["start start", "end end"],
  });
  const h = useSpring(hRaw, { stiffness: 140, damping: 22, mass: 0.25 });

  const x = useTransform(h, [0, 1], [0, -maxShift]);
  const fillPct = useTransform(h, (p) => Math.round(p * 100));

  const cards = useMemo<Card[]>(
    () =>
      cardsProp ?? [
        {
          id: 1,
          title: "DISCIPLINE",
          body: "Thorough process, passionate craft, consistent excellence.",
        },
        {
          id: 2,
          title: "TRUST",
          body: "We lead decisions with expertise—your success is our focus.",
        },
        {
          id: 3,
          title: "CLARITY",
          body: "Simple plans, visible milestones, no surprises.",
        },
        {
          id: 4,
          title: "SPEED",
          body: "Tight feedback loops, momentum without chaos.",
        },
        { id: 5, title: "CRAFT", body: "Details matter—finish is the brand." },
      ],
    [cardsProp]
  );

  const cardX = cards.map((_, i) =>
    useTransform(h, [i * 0.12, i * 0.12 + 0.22], [80, 0])
  );
  const cardO = cards.map((_, i) =>
    useTransform(h, [i * 0.12, i * 0.12 + 0.22], [0, 1])
  );

  const prefersReduced =
    typeof window !== "undefined" &&
    window.matchMedia &&
    window.matchMedia("(prefers-reduced-motion: reduce)").matches;

  return (
    <section
      className="relative w-full"
      aria-label="Word letters + horizontal cards"
    >
      {/* PART 1 — letters */}
      <div ref={vRef} className="relative min-h-[180vh]">
        <div className="sticky top-0 flex h-screen items-center justify-center">
          <motion.div
            style={{
              scale: prefersReduced ? 1 : settleScale,
              opacity: prefersReduced ? 1 : settleOpacity,
              ["--ls" as any]: prefersReduced ? 0 : letterSpacing,
            }}
            className="select-none leading-none font-black"
          >
            <div
              className="flex items-baseline justify-center"
              style={{ letterSpacing: "var(--ls, 0em)" }}
            >
              {WORD.map((ch, i) => (
                <motion.span
                  key={`${ch}-${i}`}
                  style={{
                    y: prefersReduced ? 0 : letterStyles[i].y,
                    opacity: prefersReduced ? 1 : letterStyles[i].o,
                    rotate: prefersReduced ? 0 : letterStyles[i].r,
                  }}
                  className="block will-change-transform
                             text-[16vw] sm:text-[14vw] md:text-[12vw] lg:text-[10vw] xl:text-[9vw]"
                >
                  {ch === " " ? "\u00A0" : ch}
                </motion.span>
              ))}
            </div>
          </motion.div>
        </div>
      </div>

      {/* PART 2 — horizontal scroller */}
      <div ref={wrapRef} style={{ height: scrollLen }} className="relative">
        <div ref={stickyRef} className="sticky top-0 h-screen overflow-hidden">
          {/* word backdrop */}
          <div className="pointer-events-none absolute inset-0 flex items-center justify-center">
            <h1
              className="select-none font-black leading-none tracking-tight opacity-10
                           text-[22vw] sm:text-[20vw] md:text-[18vw] lg:text-[16vw]"
            >
              {word}
            </h1>
            <motion.h1
              className="absolute select-none font-black leading-none tracking-tight
                         text-[22vw] sm:text-[20vw] md:text-[18vw] lg:text-[16vw]"
              style={
                {
                  ["--fill" as any]: prefersReduced ? 100 : fillPct,
                  WebkitMaskImage:
                    "linear-gradient(to right, #000 0%, #000 var(--fill,0)%, transparent var(--fill,0)%)",
                  maskImage:
                    "linear-gradient(to right, #000 0%, #000 var(--fill,0)%, transparent var(--fill,0)%)",
                } as React.CSSProperties
              }
            >
              {word}
            </motion.h1>
          </div>

          {/* cards track — now above backdrop and guaranteed to animate */}
          <motion.div
            ref={trackRef}
            style={{ x: prefersReduced ? 0 : x }}
            className="relative z-10 h-full flex items-center gap-8 px-6 will-change-transform"
          >
            <div className="shrink-0 w-[12vw]" />
            {cards.map((c, i) => (
              <motion.article
                key={c.id}
                style={{
                  x: prefersReduced ? 0 : cardX[i],
                  opacity: prefersReduced ? 1 : cardO[i],
                }}
                className={[
                  "shrink-0 w-[78vw] sm:w-[56vw] md:w-[44vw] lg:w-[36vw] xl:w-[32vw]",
                  "p-6 md:p-8 rounded-2xl border border-white/10 backdrop-blur",
                  // small baseline surface so they’re visible on both light/dark pages; override via prop
                  "bg-black/20 text-white",
                  cardClassName,
                ].join(" ")}
              >
                <div className="mb-3 text-[10px] tracking-[0.25em] uppercase opacity-60">
                  Rule No.{i + 1}
                </div>
                <h3 className="mb-3 text-2xl md:text-3xl font-extrabold">
                  {c.title}
                </h3>
                <p className="text-sm md:text-base leading-relaxed opacity-90">
                  {c.body}
                </p>
              </motion.article>
            ))}
            <div className="shrink-0 w-[30vw]" />
          </motion.div>
        </div>
      </div>
    </section>
  );
}
