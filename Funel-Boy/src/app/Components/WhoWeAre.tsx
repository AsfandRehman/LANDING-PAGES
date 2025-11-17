// src/components/WhoWeAre.tsx
"use client";

import Image from "next/image";
import Link from "next/link";
import { useEffect, useRef, useState } from "react";
import {
  motion,
  useAnimation,
  useInView,
  useScroll,
  useTransform,
} from "framer-motion";
import LogoMarquee from "./LogoMarquee";

/* ---------- small helpers ---------- */

function FadeInOut({
  children,
  className,
  delay = 0,
  y = 16,
  blur = 4,
}: {
  children: React.ReactNode;
  className?: string;
  delay?: number;
  y?: number;
  blur?: number;
}) {
  const ref = useRef<HTMLDivElement | null>(null);
  const inView = useInView(ref, { amount: 0.35, margin: "-10% 0px" });
  const controls = useAnimation();

  useEffect(() => {
    controls.start(inView ? "visible" : "hidden");
  }, [inView, controls]);

  return (
    <motion.div
      ref={ref}
      className={className}
      initial="hidden"
      animate={controls}
      variants={{
        hidden: { opacity: 0, y, filter: `blur(${blur}px)` },
        visible: {
          opacity: 1,
          y: 0,
          filter: "blur(0px)",
          transition: {
            duration: 0.6,
            ease: [0.2, 0.7, 0.1, 1],
            delay,
          },
        },
      }}
    >
      {children}
    </motion.div>
  );
}

function HoverCard({
  children,
  className = "",
}: {
  children: React.ReactNode;
  className?: string;
}) {
  return (
    <motion.div
      className={`group relative will-change-transform ${className}`}
      whileHover={{ y: -6, scale: 1.02 }}
      whileTap={{ scale: 0.995 }}
      transition={{ type: "spring", stiffness: 300, damping: 22 }}
    >
      {children}
    </motion.div>
  );
}

/* ---------- main ---------- */

export default function WhoWeAre() {
  const LIME = "#FFEB3B"; // lime accent
  const YELL = "#FFEB3B"; // yellow glow

  // Section parallax for the center seal
  const sectionRef = useRef<HTMLElement | null>(null);
  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ["start end", "end start"], // when section enters → when it leaves
  });

  const sealY = useTransform(scrollYProgress, [0, 1], [0, 64]); // float down slightly
  const sealRotate = useTransform(scrollYProgress, [0, 1], [0, 12]); // tiny spin

  return (
    <section
      ref={sectionRef}
      id="about"
      className="relative isolate overflow-hidden py-20 md:py-28"
    >
      {/* solid base */}
      <div className="absolute inset-0 bg-black" />

      {/* CENTER radial glow to all sides (matches shot) */}
      <div
        className="pointer-events-none absolute inset-0"
        style={{
          background: `radial-gradient(1000px 1000px at 50% 50%,
            ${YELL}26 0%,
            ${LIME}14 32%,
            rgba(0,0,0,.65) 62%,
            rgba(0,0,0,1) 100%)`,
        }}
      />

      <div className="relative z-10 mx-auto max-w-7xl px-4">
        {/* headline / copy */}
        <FadeInOut className="mt-4 max-w-3xl" delay={0.05} y={18}>
          {/* Words reveal (one by one) */}
          <WordsReveal
            text="We’re a software agency helping brands ship faster and grow smarter."
            className="text-3xl font-extrabold tracking-tight text-white sm:text-4xl"
          />

          {/* Shimmering tagline */}
          <FadeInOut delay={0.15} y={10} blur={2}>
            <h2 className="mt-2 text-3xl font-extrabold tracking-tight sm:text-4xl">
              <ShineText text="Business Forward" />
            </h2>
          </FadeInOut>

          <FadeInOut delay={0.22} y={10}>
            <p className="mt-3 text-white/70">
              From modern web & app development to SEO, performance
              optimization, CRO, and marketing automation—we build reliable
              systems that scale. This is the snapshot; deeper service details
              come next.
            </p>
          </FadeInOut>

          {/* CTA pill with arrow bubble */}
          <FadeInOut delay={0.3} y={12} blur={2}>
            <Link
              href="#process"
              className="relative mt-7 inline-flex rounded-full"
            >
              <motion.span
                className="group inline-flex items-center gap-3 rounded-full border border-white/10 bg-neutral-900/80 px-5 py-2.5 text-sm font-semibold text-white ring-1 ring-white/10 shadow-[inset_0_1px_0_rgba(255,255,255,0.06)]"
                whileHover={{ scale: 1.02 }}
                transition={{ type: "spring", stiffness: 250, damping: 18 }}
              >
                See How We Work
                <motion.span
                  className="grid size-8 place-items-center rounded-full ring-1 ring-black/10"
                  style={{ background: LIME, color: "#000" }}
                  whileHover={{ x: 2, rotate: 10 }}
                  transition={{ type: "spring", stiffness: 300, damping: 16 }}
                >
                  <svg
                    viewBox="0 0 24 24"
                    className="h-4 w-4"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M5 12h14M13 5l7 7-7 7"
                    />
                  </svg>
                </motion.span>
              </motion.span>
              {/* faint lime ring */}
              <motion.span
                aria-hidden
                className="pointer-events-none absolute inset-0 -z-10 rounded-full"
                style={{ border: `1px solid rgba(163,230,53,.45)` }}
                whileHover={{ scale: 1.06, opacity: 0.9 }}
                transition={{ type: "spring", stiffness: 180, damping: 14 }}
              />
            </Link>
          </FadeInOut>
        </FadeInOut>

        {/* cards row */}
        <div className="relative mt-12 grid grid-cols-1 gap-8 md:mt-16 md:grid-cols-[1.1fr_0.9fr]">
          {/* LEFT big card */}
          <FadeInOut delay={0.05} y={24}>
            <HoverCard className="rounded-3xl border border-white/10 bg-white/5 p-2 ring-1 ring-white/10 backdrop-blur shadow-[0_10px_40px_rgba(163,230,53,0.02)] hover:shadow-[0_14px_50px_rgba(163,230,53,0.12)]">
              <div className="relative h-[320px] w-full overflow-hidden rounded-2xl md:h-[360px]">
                <Image
                  src="/images/work.jpg" // put your image in /public
                  alt="Team at work"
                  fill
                  className="object-cover grayscale hue-rotate-[320deg] transition-transform duration-500 group-hover:scale-[1.05]"
                  priority
                />
              </div>
            </HoverCard>
          </FadeInOut>

          {/* RIGHT smaller card */}
          <FadeInOut delay={0.12} y={26}>
            <HoverCard className="rounded-3xl border border-white/10 bg-white/5 p-2 ring-1 ring-white/10 backdrop-blur shadow-[0_10px_40px_rgba(163,230,53,0.02)] hover:shadow-[0_14px_50px_rgba(163,230,53,0.12)]">
              <div className="relative h-[280px] w-full overflow-hidden rounded-2xl md:h-[320px]">
                <Image
                  src="/images/colab.jpg" // put your image in /public
                  alt="Collaboration"
                  fill
                  className="object-cover grayscale hue-rotate-[320deg] transition-transform duration-500 group-hover:scale-[1.05]"
                />
              </div>
            </HoverCard>
          </FadeInOut>

          {/* circular SEAL centered between cards (floats + parallax) */}
          <motion.div
            className="pointer-events-none absolute left-1/2 top-[72%] -translate-x-1/2 -translate-y-1/2"
            style={{ y: sealY, rotate: sealRotate }}
          >
            <Seal accent={LIME} />
          </motion.div>
        </div>
      </div>

      {/* Local styles: words reveal + shine text */}
      <style jsx>{`
        .words-reveal span {
          display: inline-block;
          opacity: 0;
          transform: translate3d(0, 0.6em, 0) scale(0.98);
          filter: blur(2px);
          transition: opacity 600ms cubic-bezier(0.2, 0.7, 0.1, 1),
            transform 600ms cubic-bezier(0.2, 0.7, 0.1, 1),
            filter 600ms cubic-bezier(0.2, 0.7, 0.1, 1);
          will-change: transform, opacity, filter;
        }
        .words-reveal.show span {
          opacity: 1;
          transform: none;
          filter: blur(0);
        }

        .shine-text {
          background-image: linear-gradient(
            120deg,
            rgba(255, 255, 255, 0.25) 0%,
            rgba(255, 255, 255, 0.85) 15%,
            #ffeb3b 32%,
            rgba(255, 255, 255, 0.85) 52%,
            rgba(255, 255, 255, 0.25) 70%
          );
          background-size: 200% 100%;
          background-position: -100% 0;
          -webkit-background-clip: text;
          background-clip: text;
          color: transparent;
          animation: shine 3.2s linear infinite;
          letter-spacing: -0.01em;
        }
        @keyframes shine {
          0% {
            background-position: -120% 0;
          }
          100% {
            background-position: 120% 0;
          }
        }

        @media (prefers-reduced-motion: reduce) {
          .words-reveal span {
            opacity: 1 !important;
            transform: none !important;
            filter: none !important;
          }
          .shine-text {
            animation: none !important;
            color: #ffeb3b !important;
          }
        }
      `}</style>
    </section>
  );
}
/* ---------- existing helpers (kept) ---------- */

/** Reveal a sentence word-by-word when in view */
function WordsReveal({
  text,
  className,
}: {
  text: string;
  className?: string;
}) {
  const ref = useRef<HTMLHeadingElement | null>(null);
  const [show, setShow] = useState(false);
  const words = text.split(" ");

  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    const io = new IntersectionObserver(
      ([e]) => {
        if (e.isIntersecting) {
          setShow(true);
          io.disconnect();
        }
      },
      { threshold: 0.4 }
    );
    io.observe(el);
    return () => io.disconnect();
  }, []);

  return (
    <h2
      ref={ref}
      className={`${className ?? ""} words-reveal ${show ? "show" : ""}`}
    >
      {words.map((w, i) => (
        <span key={i} style={{ transitionDelay: `${i * 70}ms` }}>
          {w}
          {i < words.length - 1 ? " " : ""}
        </span>
      ))}
    </h2>
  );
}

/** Infinite shiny fill on the given text */
function ShineText({ text }: { text: string }) {
  return <span className="shine-text">{text}</span>;
}

/** Circular “SUCCESS BRAND” seal */
function Seal({ accent = "#FFEB3B" }: { accent?: string }) {
  return (
    <div className="relative h-40 w-40">
      <svg viewBox="0 0 200 200" className="h-full w-full" aria-hidden>
        <defs>
          <path
            id="circlePath"
            d="M100,100 m-70,0 a70,70 0 1,1 140,0 a70,70 0 1,1 -140,0"
          />
        </defs>
        <circle
          cx="100"
          cy="100"
          r="78"
          fill="none"
          stroke="rgba(255,255,255,.12)"
          strokeWidth="2"
        />
        <circle cx="100" cy="100" r="68" fill={accent} />
        <text fill="#ffffffff" fontSize="12" fontWeight="700" letterSpacing="2">
          <textPath href="#circlePath" startOffset="0%">
            • SUCCESS BRAND • BUILD WITH INNOVATION •
          </textPath>
        </text>
        <g transform="translate(100,100)">
          <circle r="18" fill="#0a0a0a" />
          <path
            d="M-4 0 H10 M4 -6 L10 0 L4 6"
            stroke={accent}
            strokeWidth="3"
            strokeLinecap="round"
            strokeLinejoin="round"
            fill="none"
          />
        </g>
      </svg>
    </div>
  );
}
