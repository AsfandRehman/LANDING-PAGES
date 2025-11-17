"use client";

import { useCallback, useMemo, useRef, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ChevronLeft, ChevronRight, Play } from "lucide-react";

const TESTIMONIALS = [
  {
    quote:
      "I was losing sales opportunities & hours keeping track but not anymore.",
    name: "Matt Lucero",
    title: "Founder, Aveno Marketing",
    video: "/videos/matt.mp4",
    poster: "/images/s1.png",
  },
  {
    quote:
      "We were able to provide better results to our clients working with RevFuel.",
    name: "Alex Welch",
    title: "Founder, Lift Media",
    video: "/videos/alex.mp4",
    poster: "/images/s2.png",
  },
  {
    quote:
      "RevFuel respected all my CRM guidelines, worked super efficiently, and the process was seamless from A to Z.",
    name: "Adrianna Zakher",
    title: "Founder, Kordial Media",
    video: "/videos/adrianna.mp4",
    poster: "/images/s3.png",
  },
  {
    quote:
      "My sales process was a mess. RevFuel made it seamless and added automations that save me hours every week.",
    name: "Ayman Arab",
    title: "Founder, Tikscale",
    video: "/videos/ayman.mp4",
    poster: "/images/s4.png",
  },
];

const red = "#E50914";

export default function TestimonialsSection() {
  const [index, setIndex] = useState(0);
  const current = TESTIMONIALS[index];
  const vidRef = useRef<HTMLVideoElement | null>(null);

  const next = useCallback(
    () => setIndex((i) => (i + 1) % TESTIMONIALS.length),
    []
  );
  const prev = useCallback(
    () => setIndex((i) => (i - 1 + TESTIMONIALS.length) % TESTIMONIALS.length),
    []
  );

  const blurbs = useMemo(() => {
    const parts = current.quote
      .split(/[.?!]\s+|&/g)
      .map((s) => s.trim())
      .filter(Boolean);
    return parts.length ? parts : [current.quote];
  }, [current.quote]);

  return (
    <section
      id="testimonial"
      className="relative isolate overflow-hidden"
      style={{
        background: `radial-gradient(120% 120% at 70% 0%, rgba(229,9,20,0.10), rgba(11,11,18,0.8) 40%, #0B0B12 75%)`,
      }}
    >
      {/* animated glow */}
      <motion.div
        aria-hidden
        className="pointer-events-none absolute -top-36 -right-40 h-[520px] w-[520px] rounded-full blur-[120px]"
        style={{ background: red, opacity: 0.28 }}
        animate={{ opacity: [0.22, 0.32, 0.22] }}
        transition={{ duration: 6, repeat: Infinity, ease: "easeInOut" }}
      />

      {/* beams */}
      <AnimatedBeam
        className="top-10 left-[-20%] w-[140%]"
        rotate={18}
        from="rgba(229,9,20,0.16)"
        to="rgba(229,9,20,0.0)"
      />
      <AnimatedBeam
        className="top-36 left-[-10%] w-[130%]"
        rotate={-14}
        from="rgba(255,255,255,0.08)"
        to="rgba(0,0,0,0)"
      />

      {/* vignette */}
      <div className="pointer-events-none absolute inset-0">
        <div className="absolute inset-0 opacity-20 [background-image:linear-gradient(rgba(255,255,255,0.06)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.06)_1px,transparent_1px)] [background-size:28px_28px]" />
        <div className="absolute inset-0 shadow-[inset_0_0_160px_80px_rgba(0,0,0,0.75)]" />
      </div>

      {/* heading */}
      <div className="mx-auto max-w-6xl px-6 pt-14 md:pt-16">
        <motion.h2
          initial={{ y: 14, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.4 }}
          className="text-center text-[clamp(28px,4vw,48px)] font-semibold leading-tight text-white"
        >
          <span className="opacity-90">Video</span>{" "}
          <span style={{ color: red }}>Testimonials</span>
        </motion.h2>
      </div>

      <div className="mx-auto grid max-w-6xl grid-cols-1 gap-10 px-6 py-10 md:grid-cols-2 md:py-14">
        {/* Left: Video */}
        <motion.div
          key={index}
          initial={{ y: 24, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ type: "spring", stiffness: 120, damping: 18 }}
        >
          <div className="relative overflow-hidden rounded-3xl shadow-2xl ring-1 ring-white/10">
            <VideoCard
              src={current.video}
              poster={current.poster}
              refObj={vidRef}
            />
          </div>

          <div className="mt-4 flex items-center justify-between">
            <button
              onClick={prev}
              className="group inline-flex items-center gap-2 rounded-full border border-white/15 px-4 py-2 text-sm text-white/80 transition hover:border-white/30 hover:bg-white/5"
            >
              <ChevronLeft className="h-4 w-4" /> Prev
            </button>
            <div className="flex items-center gap-2">
              {TESTIMONIALS.map((_, i) => (
                <button
                  key={i}
                  onClick={() => setIndex(i)}
                  aria-label={`Go to testimonial ${i + 1}`}
                  className={`h-2.5 w-6 rounded-full transition ${
                    i === index ? "bg-white" : "bg-white/30 hover:bg-white/60"
                  }`}
                />
              ))}
            </div>
            <button
              onClick={next}
              className="group inline-flex items-center gap-2 rounded-full border border-white/15 px-4 py-2 text-sm text-white/80 transition hover:border-white/30 hover:bg-white/5"
            >
              Next <ChevronRight className="h-4 w-4" />
            </button>
          </div>
        </motion.div>

        {/* Right: Text */}
        <div>
          <div className="mb-5 inline-flex rounded-full border border-white/10 bg-white/5 px-4 py-1.5 text-[11px] tracking-[0.22em] text-white/80">
            WHAT OUR CUSTOMERS ARE SAYING
          </div>

          <AnimatePresence mode="popLayout">
            <motion.h3
              key={`h-${index}`}
              initial={{ y: 14, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              exit={{ y: -14, opacity: 0 }}
              transition={{ duration: 0.35 }}
              className="text-[clamp(22px,3.2vw,36px)] font-bold leading-tight text-white"
            >
              Productivity up. Chaos down.
            </motion.h3>
          </AnimatePresence>

          {/* Just show all blurbs (no auto-rotation) */}
          <div className="mt-4 max-w-xl text-[15px] leading-relaxed text-white/85 space-y-2">
            {blurbs.map((b, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 6 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: i * 0.1 }}
              >
                {b}
              </motion.div>
            ))}
          </div>

          <motion.div
            key={`f-${index}`}
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1 }}
            className="mt-6"
          >
            <div className="text-white font-semibold">{current.name}</div>
            <div className="text-white/70 text-sm">{current.title}</div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}

/* -------------------------------- Helpers -------------------------------- */

function AnimatedBeam({
  className,
  rotate = 0,
  from,
  to,
}: {
  className?: string;
  rotate?: number;
  from: string;
  to: string;
}) {
  return (
    <motion.div
      aria-hidden
      className={`pointer-events-none absolute h-40 ${className || ""}`}
      style={{
        transformOrigin: "left center",
        rotate,
        background: `linear-gradient(90deg, ${from}, ${to})`,
        filter: "blur(14px)",
      }}
      animate={{ x: ["-5%", "5%", "-5%"] }}
      transition={{ duration: 10, repeat: Infinity, ease: "easeInOut" }}
    />
  );
}

function VideoCard({
  src,
  poster,
  refObj,
}: {
  src: string;
  poster?: string;
  refObj: React.MutableRefObject<HTMLVideoElement | null>;
}) {
  const [hover, setHover] = useState(false);

  return (
    <div
      onMouseEnter={() => {
        setHover(true);
        refObj.current?.play().catch(() => {});
      }}
      onMouseLeave={() => {
        setHover(false);
        refObj.current?.pause();
      }}
      className="group relative aspect-[16/10] bg-black"
    >
      <video
        ref={refObj}
        className="h-full w-full object-cover"
        src={src}
        poster={poster}
        muted
        playsInline
        preload="metadata"
      />

      <div className="pointer-events-none absolute inset-0">
        <div className="absolute inset-0 bg-gradient-to-tr from-black/50 via-transparent to-transparent opacity-90" />
        <motion.div
          initial={false}
          animate={{ opacity: hover ? 0 : 1 }}
          transition={{ duration: 0.25 }}
          className="absolute inset-0 grid place-items-center"
        >
          <div className="flex items-center gap-2 rounded-full bg-white/10 px-3 py-2 text-white backdrop-blur-md">
            <Play className="h-4 w-4" />
            <span className="text-xs">Hover to play</span>
          </div>
        </motion.div>
        <motion.div
          className="absolute inset-0 rounded-3xl"
          initial={false}
          animate={{
            boxShadow: hover ? `0 0 0 3px ${red}` : "0 0 0 0 transparent",
          }}
          transition={{ type: "spring", stiffness: 220, damping: 22 }}
        />
      </div>
    </div>
  );
}
