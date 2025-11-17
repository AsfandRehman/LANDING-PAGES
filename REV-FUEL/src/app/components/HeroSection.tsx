"use client";

import Image from "next/image";
import Link from "next/link";
import StepsPills from "./StepsPills";
import CTAButton from "./CTAButton";
import { motion } from "framer-motion";
import { Briefcase, TrendingUp, Users, Play } from "lucide-react";
import { useEffect, useMemo, useState } from "react";

/* -------- Red Theme Tokens -------- */
const BRAND_RED = "#EF4444";

/* How far down the background image starts (more top margin) */
const TOP_BG_OFFSET_PX = 80;

/* Small rotating text line under the H1 */
function RotatingLine() {
  const messages = useMemo(
    () => [
      "Landing pages, VSLs, email, CRM & funnels — all handled.",
      "You focus on clients. We run the growth machine.",
      "Acquisition → Nurture → Conversion → Ascension.",
    ],
    []
  );
  const [idx, setIdx] = useState(0);

  useEffect(() => {
    const t = setInterval(() => setIdx((i) => (i + 1) % messages.length), 2600);
    return () => clearInterval(t);
  }, [messages.length]);

  return (
    <motion.p
      key={idx}
      initial={{ opacity: 0, y: 8 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.35 }}
      className="mt-3 text-center text-sm sm:text-base md:text-lg text-white/80 italic"
    >
      {messages[idx]}
    </motion.p>
  );
}

/* A subtle shimmer span for highlights */
function Shimmer({ children }: { children: React.ReactNode }) {
  return (
    <span className="relative inline-block">
      <span
        className="bg-clip-text text-transparent"
        style={{
          backgroundImage:
            "linear-gradient(90deg, rgba(255,255,255,0.6) 0%, " +
            `${BRAND_RED} 45%, rgba(255,255,255,0.9) 100%)`,
          backgroundSize: "200% 100%",
          animation: "shimmerX 2.2s linear infinite",
        }}
      >
        {children}
      </span>
      <style jsx>{`
        @keyframes shimmerX {
          0% {
            background-position: 200% 0;
          }
          100% {
            background-position: 0% 0;
          }
        }
      `}</style>
    </span>
  );
}
/* ------- Inline VSL (poster → iframe on play) ------- */
function InlineVSL() {
  const VIDEO_ID = "XXGpK2owtok"; // your YouTube video ID
  const [showPlayer, setShowPlayer] = useState(false);
  const [poster, setPoster] = useState<string>(
    `https://i.ytimg.com/vi/${VIDEO_ID}/maxresdefault.jpg`
  );
  const [embedUrl, setEmbedUrl] = useState<string>("");

  useEffect(() => {
    if (!showPlayer) return;
    const base = `https://www.youtube.com/embed/${VIDEO_ID}`;
    const params = new URLSearchParams({
      autoplay: "1",
      rel: "0",
      modestbranding: "1",
      playsinline: "1",
      enablejsapi: "1",
      origin: typeof window !== "undefined" ? window.location.origin : "",
    });
    setEmbedUrl(`${base}?${params.toString()}`);
  }, [showPlayer]);

  const handlePosterError = () => {
    if (!poster.includes("hqdefault")) {
      setPoster(`https://i.ytimg.com/vi/${VIDEO_ID}/hqdefault.jpg`);
    }
  };

  return (
    <div className="relative mx-auto w-full max-w-4xl">
      <div className="relative rounded-3xl p-[2px] bg-[linear-gradient(90deg,rgba(239,68,68,0.75),rgba(255,26,26,0.6),rgba(127,29,29,0.75))] shadow-[0_20px_80px_rgba(255,26,26,0.25)]">
        <div className="relative overflow-hidden rounded-[20px] border border-white/10 bg-black/50 backdrop-blur-md">
          <div
            className="pointer-events-none absolute left-1/2 top-0 h-[6px] w-[80%] -translate-x-1/2"
            style={{
              background:
                "linear-gradient(90deg, transparent 0%, #EF4444 50%, transparent 100%)",
              filter: "drop-shadow(0 0 18px rgba(239,68,68,.65))",
            }}
          />
          <div
            className="pointer-events-none absolute left-1/2 bottom-0 h-[6px] w-[80%] -translate-x-1/2"
            style={{
              background:
                "linear-gradient(90deg, transparent 0%, #7F1D1D 50%, transparent 100%)",
            }}
          />

          <div className="relative aspect-video">
            {!showPlayer && (
              <>
                {/* ✅ Fixed remote Image issue */}
                <Image
                  src={poster}
                  alt="Video poster"
                  fill
                  unoptimized
                  onError={handlePosterError}
                  className="object-cover"
                  sizes="(max-width: 1024px) 100vw, 1024px"
                />

                {/* red overlay */}
                <div className="pointer-events-none absolute inset-0 mix-blend-screen opacity-60 bg-[radial-gradient(80%_60%_at_50%_0%,rgba(255,26,26,0.45),transparent_70%)]" />

                {/* play button overlay */}
                <button
                  onClick={() => setShowPlayer(true)}
                  aria-label="Play video"
                  className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 inline-flex items-center justify-center rounded-full border border-white/20 bg-black/60 backdrop-blur-sm p-6 transition hover:bg-black/70 hover:scale-105 active:scale-95"
                >
                  <Play className="h-7 w-7 text-white translate-x-[2px]" />
                </button>
              </>
            )}

            {showPlayer && embedUrl && (
              <iframe
                className="absolute inset-0 h-full w-full"
                src={embedUrl}
                title="YouTube video player"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share; fullscreen"
                referrerPolicy="strict-origin-when-cross-origin"
                allowFullScreen
              />
            )}
          </div>

          <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(60%_60%_at_50%_50%,transparent,rgba(0,0,0,0.6))]" />
        </div>
      </div>
    </div>
  );
}

/* ---------------- HERO SECTION ---------------- */
export default function HeroSection() {
  return (
    <section
      id="hero"
      className="relative min-h-screen md:min-h-[140vh] w-full overflow-hidden text-white bg-black"
    >
      {/* --------- TOP-RED LIGHTED BACKDROP --------- */}
      <div
        className="pointer-events-none absolute inset-x-0 bottom-0 z-0"
        style={{ top: `${TOP_BG_OFFSET_PX}px` }}
      >
        <Image
          src="/images/custom.png"
          alt="Red background"
          fill
          priority
          className="object-cover opacity-95"
        />
      </div>

      {/* Red glow edges */}
      <div
        className="pointer-events-none absolute inset-x-[-10%] h-[26vmin] opacity-80"
        style={{
          top: `${TOP_BG_OFFSET_PX}px`,
          background: `
            radial-gradient(120% 60% at 16% 0%, rgba(255,26,26,0.70) 0%, rgba(255,26,26,0.35) 36%, transparent 68%),
            radial-gradient(120% 60% at 84% 0%, rgba(255,26,26,0.70) 0%, rgba(255,26,26,0.35) 36%, transparent 68%)
          `,
          filter: "blur(24px)",
          mixBlendMode: "screen",
        }}
      />

      {/* Top sweeping conic beam */}
      <div
        className="pointer-events-none absolute left-1/2 -translate-x-1/2 w-[140vmin] h-[140vmin] opacity-32 [animation:spinSlow_22s_linear_infinite]"
        style={{
          top: `${Math.max(TOP_BG_OFFSET_PX - 55, 0)}px`,
          background: `conic-gradient(from 260deg at 50% 0%,
            rgba(239,68,68,0.65) 10deg,
            transparent 70deg,
            rgba(127,29,29,0.55) 120deg,
            transparent 190deg,
            rgba(239,68,68,0.65) 260deg)`,
          borderRadius: "50%",
          filter: "blur(90px)",
          mixBlendMode: "screen",
        }}
      />

      {/* Grid + vignette */}
      <div className="pointer-events-none absolute inset-0 opacity-[0.18] [background-image:linear-gradient(rgba(255,26,26,.18)_1px,transparent_1px),linear-gradient(90deg,rgba(255,26,26,.18)_1px,transparent_1px)] [background-size:52px_52px] [mask-image:radial-gradient(60%_60%_at_50%_45%,#000,transparent)]" />
      <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(70%_60%_at_50%_42%,transparent,rgba(0,0,0,.55))]" />

      <style jsx>{`
        @keyframes spinSlow {
          to {
            transform: translateX(-50%) rotate(360deg);
          }
        }
      `}</style>

      {/* ---------------- CONTENT ---------------- */}
      <div className="relative z-10 mx-auto flex max-w-7xl flex-col items-center px-4 sm:px-6 pt-20 md:pt-28">
        <motion.h1
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
          className="text-center font-bold tracking-tight mt-16 text-[clamp(26px,6vw,56px)] leading-[1.08]"
        >
          We build & operate your{" "}
          <em className="not-italic md:italic">Sales + Marketing</em> engine to
          scale your coaching offer to{" "}
          <span className="font-semibold" style={{ color: BRAND_RED }}>
            <Shimmer>$100k/Mo</Shimmer>
          </span>
        </motion.h1>

        <RotatingLine />

        <motion.div
          initial={{ opacity: 0, y: 22 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.1, duration: 0.7 }}
          className="relative mt-8 md:mt-10 w-full"
        >
          <InlineVSL />

          <Link href="#cta">
            <div className="flex justify-center my-8 md:my-12 px-2">
              <CTAButton />
            </div>
          </Link>

          <div className="my-6 md:my-10 px-2">
            <StepsPills
              steps={[
                {
                  id: 1,
                  label: "Content Engine",
                  title: "Done-For-You Creation",
                  icon: <Briefcase className="h-5 w-5" />,
                },
                {
                  id: 2,
                  label: "Premium Service",
                  title: "High-Touch Execution",
                  icon: <TrendingUp className="h-5 w-5" />,
                },
                {
                  id: 3,
                  label: "Brand Growth",
                  title: "Scale With Authority",
                  icon: <Users className="h-5 w-5" />,
                },
              ]}
              iconColorFrom="from-red-500"
              iconColorTo="to-rose-900"
            />
          </div>
        </motion.div>
      </div>
    </section>
  );
}
