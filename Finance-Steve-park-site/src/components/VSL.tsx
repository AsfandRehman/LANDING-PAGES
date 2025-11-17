// app/components/VSLSection.tsx
"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import Link from "next/link";
import Image from "next/image";

const BG_IMAGE = "/images/5.jpg"; // section bg (image)
const VIDEO_POSTER = "/images/vsl-poster.jpg"; // poster shown before play
const VIDEO_MP4 = "/images/video.mp4"; // optional: local MP4 in /public/videos
const YT_EMBED = ""; // fallback if you prefer YouTube

export default function VSLSection() {
  const [open, setOpen] = useState(false);
  const useMp4 = true; // set false to use YouTube/Vimeo embed

  return (
    <section className="relative overflow-hidden text-white">
      {/* Background image */}
      <div
        className="absolute inset-0 -z-30 bg-cover bg-center"
        style={{ backgroundImage: `url(${BG_IMAGE})` }}
        aria-hidden
      />
      {/* Dark vertical overlay (bottom → top) */}
      <div
        className="absolute inset-0 -z-20 bg-gradient-to-t from-black via-black/70 to-transparent"
        aria-hidden
      />
      {/* Cyan/amber mesh */}
      <div
        className="absolute inset-0 -z-10 opacity-70 mix-blend-screen"
        style={{
          background:
            "radial-gradient(40% 33% at 18% 25%, rgba(0,199,190,.28) 0%, rgba(0,0,0,0) 60%)," +
            "radial-gradient(38% 36% at 84% 70%, rgba(255,140,0,.28) 0%, rgba(0,0,0,0) 60%)",
        }}
        aria-hidden
      />
      {/* Subtle grid */}
      <div
        className="absolute inset-0 -z-10 opacity-[0.08]"
        style={{
          backgroundImage:
            "linear-gradient(to right, rgba(255,255,255,.6) 1px, transparent 1px),linear-gradient(to bottom, rgba(255,255,255,.6) 1px, transparent 1px)",
          backgroundSize: "22px 22px",
        }}
        aria-hidden
      />

      <div className="relative mx-auto max-w-7xl px-6 py-20 lg:py-28">
        {/* Headline + sub */}
        <motion.div
          initial={{ opacity: 0, y: 10 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-80px" }}
          transition={{ duration: 0.5, ease: "easeOut" }}
          className="text-center max-w-3xl mx-auto"
        >
          <h2 className="text-3xl md:text-5xl font-semibold leading-tight tracking-tight">
            <span className="shine-inside">
              Your Path to Credit Confidence—Explained in 2 Minutes
            </span>
          </h2>
          <p className="mt-4 text-zinc-300">
            Learn how CreditWise helps you build responsible credit, unlock
            better approvals, and fund your goals—without the guesswork.
          </p>
        </motion.div>

        {/* Video card */}
        <motion.div
          initial={{ opacity: 0, y: 12, scale: 0.98 }}
          whileInView={{ opacity: 1, y: 0, scale: 1 }}
          viewport={{ once: true, margin: "-80px" }}
          transition={{ duration: 0.55, ease: "easeOut" }}
          className="mt-10 md:mt-12"
        >
          <div className="relative mx-auto max-w-5xl rounded-3xl overflow-hidden border border-white/10 bg-white/5 backdrop-blur">
            {/* ambient glow */}
            <div className="pointer-events-none absolute -inset-8 blur-3xl opacity-25 bg-gradient-to-br from-[#00C7BE] to-[#FF8C00]" />
            {/* aspect ratio box */}
            <div className="relative w-full" style={{ paddingTop: "56.25%" }}>
              {/* Poster (Next/Image) */}
              {!open && (
                <Image
                  src={VIDEO_POSTER}
                  alt="Watch how CreditWise works"
                  fill
                  sizes="(max-width: 1024px) 100vw, 1024px"
                  className="absolute inset-0 object-cover opacity-95"
                  priority
                />
              )}

              {/* Play overlay */}
              {!open && (
                <button
                  onClick={() => setOpen(true)}
                  className="absolute inset-0 flex items-center justify-center"
                  aria-label="Play video"
                >
                  <span className="relative inline-flex h-16 w-16 items-center justify-center rounded-full bg-white text-black shadow-lg transition hover:scale-105">
                    <span className="absolute -z-10 h-16 w-16 rounded-full animate-ping bg-white/40" />
                    <svg
                      width="22"
                      height="22"
                      viewBox="0 0 24 24"
                      fill="currentColor"
                      className="ml-0.5"
                      aria-hidden
                    >
                      <path d="M8 5v14l11-7z" />
                    </svg>
                  </span>
                </button>
              )}

              {/* Player */}
              {open &&
                (useMp4 ? (
                  <video
                    className="absolute inset-0 h-full w-full"
                    src={VIDEO_MP4}
                    poster={VIDEO_POSTER}
                    controls
                    autoPlay
                    playsInline
                  />
                ) : (
                  <iframe
                    className="absolute inset-0 h-full w-full"
                    src={YT_EMBED}
                    title="CreditWise Video"
                    allow="autoplay; encrypted-media; picture-in-picture"
                    allowFullScreen
                  />
                ))}
            </div>
          </div>
        </motion.div>

        {/* CTAs */}
        <motion.div
          initial={{ opacity: 0, y: 8 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.45, ease: "easeOut", delay: 0.05 }}
          className="mt-8 md:mt-10 flex flex-wrap items-center justify-center gap-3"
        >
          <Link
            href="/book"
            className="group inline-flex items-center justify-center rounded-2xl bg-[#FF8C00] px-5 py-3 text-sm font-semibold text-black shadow-lg shadow-orange-500/10 transition hover:translate-y-[-1px] hover:shadow-orange-500/20 focus:outline-none focus-visible:ring-2 focus-visible:ring-offset-2 focus-visible:ring-orange-400 focus-visible:ring-offset-black"
          >
            Apply Now
            <svg
              className="ml-2 h-4 w-4 transition group-hover:translate-x-[2px]"
              viewBox="0 0 24 24"
              fill="none"
              aria-hidden
            >
              <path
                d="M5 12h14M13 5l7 7-7 7"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
              />
            </svg>
          </Link>

          <Link
            href="/learn"
            className="inline-flex items-center justify-center rounded-2xl border border-white/10 bg-white/5 px-5 py-3 text-sm font-medium text-white/90 backdrop-blur transition hover:bg-white/10 focus:outline-none focus-visible:ring-2 focus-visible:ring-offset-2 focus-visible:ring-white/30 focus-visible:ring-offset-black"
          >
            Learn More
          </Link>
        </motion.div>
      </div>

      {/* local CSS: headline shine INSIDE text fill */}
      <style jsx>{`
        .shine-inside {
          background-image: linear-gradient(
              90deg,
              #9ee7df 0%,
              #53e0cf 25%,
              #ff8c00 55%,
              #ffd39a 75%,
              #9ee7df 100%
            ),
            linear-gradient(
              115deg,
              transparent 0%,
              rgba(255, 255, 255, 0.65) 50%,
              transparent 60%
            );
          background-size: 220% 100%, 300% 100%;
          background-position: 0% 50%, -200% 50%;
          -webkit-background-clip: text;
          background-clip: text;
          color: transparent;
          animation: shineBase 6s linear infinite,
            shineSweep 3s ease-in-out infinite;
        }
        @keyframes shineBase {
          0% {
            background-position: 0% 50%, -200% 50%;
          }
          100% {
            background-position: 200% 50%, 200% 50%;
          }
        }
        @keyframes shineSweep {
          0%,
          8% {
            background-position: 200% 50%, -200% 50%;
          }
          40% {
            background-position: 200% 50%, 0% 50%;
          }
          100% {
            background-position: 200% 50%, 200% 50%;
          }
        }
      `}</style>
    </section>
  );
}
