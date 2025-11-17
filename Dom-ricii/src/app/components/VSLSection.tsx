// components/VSLSection.tsx
"use client";

import { useEffect, useRef, useState, KeyboardEvent } from "react";
import { motion, type Variants } from "framer-motion";

const BRAND = "#3354A5";
const DARK = "#231F20";

const listVariants: Variants = {
  hidden: {},
  show: { transition: { staggerChildren: 0.06, delayChildren: 0.05 } },
};
const itemVariant: Variants = {
  hidden: { opacity: 0, y: 12 },
  show: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.45, ease: [0.2, 0.8, 0.2, 1] },
  },
};

export default function VSLSection() {
  // ── Video inside the component ────────────────────────────────────────────────
  const VIDEO_SRC = "/images/video.mp4";

  const videoRef = useRef<HTMLVideoElement | null>(null);
  const containerRef = useRef<HTMLDivElement | null>(null);
  const [isPlaying, setIsPlaying] = useState(false);
  const [muted, setMuted] = useState(false); // Play with sound after click
  const [duration, setDuration] = useState(0);
  const [current, setCurrent] = useState(0);
  const [speed, setSpeed] = useState<1 | 1.25 | 1.5>(1);
  const [posterDataUrl, setPosterDataUrl] = useState<string | null>(null);

  // Capture first frame as poster
  useEffect(() => {
    const v = videoRef.current;
    if (!v) return;

    const onLoaded = async () => {
      try {
        // Seek to first frame (small offset to ensure data)
        v.currentTime = 0.01;
      } catch {
        /* noop */
      }
    };

    const onSeeked = () => {
      try {
        const canvas = document.createElement("canvas");
        canvas.width = v.videoWidth || 1280;
        canvas.height = v.videoHeight || 720;
        const ctx = canvas.getContext("2d");
        if (ctx) {
          ctx.drawImage(v, 0, 0, canvas.width, canvas.height);
          const url = canvas.toDataURL("image/jpeg", 0.86);
          setPosterDataUrl(url);
        }
      } catch {
        /* noop */
      }
    };

    const onPlay = () => setIsPlaying(true);
    const onPause = () => setIsPlaying(false);
    const onTime = () => setCurrent(v.currentTime);
    const onMeta = () => setDuration(v.duration || 0);

    v.addEventListener("loadedmetadata", onMeta);
    v.addEventListener("loadeddata", onLoaded);
    v.addEventListener("seeked", onSeeked);
    v.addEventListener("play", onPlay);
    v.addEventListener("pause", onPause);
    v.addEventListener("timeupdate", onTime);

    return () => {
      v.removeEventListener("loadedmetadata", onMeta);
      v.removeEventListener("loadeddata", onLoaded);
      v.removeEventListener("seeked", onSeeked);
      v.removeEventListener("play", onPlay);
      v.removeEventListener("pause", onPause);
      v.removeEventListener("timeupdate", onTime);
    };
  }, []);

  // Controls
  const togglePlay = () => {
    const v = videoRef.current;
    if (!v) return;
    if (v.paused) {
      v.muted = muted; // respect current mute state
      v.play().catch(() => {});
    } else {
      v.pause();
    }
  };

  const toggleMute = () => {
    const v = videoRef.current;
    if (!v) return;
    const next = !muted;
    setMuted(next);
    v.muted = next;
  };

  const seekBy = (secs: number) => {
    const v = videoRef.current;
    if (!v) return;
    v.currentTime = Math.max(
      0,
      Math.min((v.currentTime || 0) + secs, v.duration || 0)
    );
  };

  const cycleSpeed = () => {
    const next = speed === 1 ? 1.25 : speed === 1.25 ? 1.5 : 1;
    setSpeed(next);
    if (videoRef.current) videoRef.current.playbackRate = next;
  };

  const toggleFullscreen = () => {
    const el = containerRef.current;
    if (!el) return;
    if (!document.fullscreenElement) {
      el.requestFullscreen?.();
    } else {
      document.exitFullscreen?.();
    }
  };

  const onKey = (e: KeyboardEvent<HTMLDivElement>) => {
    if (e.key === " " || e.key === "Enter") {
      e.preventDefault();
      togglePlay();
    }
  };

  const fmt = (s: number) => {
    const mm = Math.floor(s / 60);
    const ss = Math.floor(s % 60);
    return `${mm}:${ss.toString().padStart(2, "0")}`;
  };

  return (
    <motion.section
      id="vsl"
      className="relative overflow-hidden isolate"
      style={{
        background:
          "linear-gradient(180deg, rgba(51,84,165,0.06) 0%, rgba(51,84,165,0.02) 100%)",
      }}
      initial={{ opacity: 0, y: 18 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.15 }}
      transition={{ type: "spring", stiffness: 140, damping: 18 }}
    >
      <div className="mx-auto w-full max-w-6xl px-4 sm:px-6 lg:px-8 py-6 sm:py-8 md:py-10">
        {/* Header */}
        <motion.header
          className="mb-4 md:mb-6 text-center"
          initial={{ opacity: 0, y: 10 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.25 }}
          transition={{ delay: 0.03, duration: 0.38, ease: [0.2, 0.8, 0.2, 1] }}
        >
          <h2
            className="font-extrabold tracking-tight leading-[1.02] text-[clamp(22px,4.8vw,42px)]"
            style={{ color: DARK }}
          >
            AI{" "}
            <span className="shimmer-text" style={{ color: BRAND }}>
              video Cloning
            </span>
          </h2>
          <p
            className="mt-2 text-[clamp(13px,2.4vw,15px)] italic text-balance"
            style={{ color: "rgba(35,31,32,0.72)" }}
          >
            Provide voice & facial data once — generate studio-quality videos on
            demand.
          </p>
        </motion.header>

        {/* Centered player card */}
        <motion.div
          className="mx-auto flex justify-center"
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, amount: 0.2 }}
          variants={listVariants}
          style={{ maxWidth: 1120 }}
        >
          <motion.div
            ref={containerRef}
            variants={itemVariant}
            className="relative mx-auto overflow-hidden rounded-2xl"
            tabIndex={0}
            onKeyDown={onKey}
            style={{
              height: "min(72vh, 780px)",
              aspectRatio: "16 / 9",
              boxShadow:
                "0 14px 40px -12px rgba(0,0,0,0.28), 0 0 0 1px rgba(35,31,32,0.06) inset",
              background:
                "radial-gradient(80% 120% at 50% 0%, rgba(51,84,165,0.14) 0%, rgba(51,84,165,0.04) 60%, rgba(51,84,165,0.02) 100%)",
            }}
          >
            {/* Glow drop shadow behind card */}
            <div
              aria-hidden
              className="absolute -inset-10 rounded-[28px]"
              style={{
                zIndex: 0,
                background:
                  "radial-gradient(60% 50% at 50% 30%, rgba(138,92,255,0.20), rgba(49,64,139,0.10) 45%, rgba(0,0,0,0) 70%)",
                filter: "blur(24px)",
              }}
            />
            {/* gradient ring */}
            <div
              className="pointer-events-none absolute inset-0 rounded-2xl"
              style={{
                padding: 1,
                background:
                  "linear-gradient(180deg, rgba(51,84,165,0.35), rgba(51,84,165,0.12))",
                WebkitMask:
                  "linear-gradient(#000 0 0) content-box, linear-gradient(#000 0 0)",
                WebkitMaskComposite: "xor",
                maskComposite: "exclude",
              }}
            />

            {/* Video (object-contain to avoid cropping) */}
            <video
              ref={videoRef}
              className="relative z-[1] h-full w-full object-contain bg-black"
              src={VIDEO_SRC}
              playsInline
              preload="metadata"
              // Start unmuted (user click will allow sound)
              muted={muted}
              aria-label="AI Clone VSL"
              onClick={togglePlay}
            />
            {/* Center Play overlay (hide while playing) */}
            {!isPlaying && (
              <button
                type="button"
                onClick={togglePlay}
                className="group absolute inset-0 z-[2] grid place-items-center"
                aria-label="Play video"
              >
                <span
                  className="rounded-full p-4 sm:p-5 md:p-6 backdrop-blur-[2px] transition transform group-active:scale-95"
                  style={{
                    background:
                      "radial-gradient(60% 60% at 50% 50%, rgba(255,255,255,0.9), rgba(255,255,255,0.7))",
                    boxShadow:
                      "0 12px 40px rgba(0,0,0,0.35), 0 0 0 1px rgba(35,31,32,0.08) inset",
                  }}
                >
                  {/* Play icon */}
                  <svg
                    width="44"
                    height="44"
                    viewBox="0 0 24 24"
                    fill="none"
                    aria-hidden="true"
                  >
                    <circle
                      cx="12"
                      cy="12"
                      r="11"
                      stroke="rgba(35,31,32,0.18)"
                    />
                    <path d="M9 7l8 5-8 5V7z" fill={DARK} />
                  </svg>
                </span>
              </button>
            )}
            {/* ==== Custom Controls Bar (like your screenshot) ==== */}
            <div className="absolute inset-x-2 sm:inset-x-4 bottom-2 sm:bottom-3 z-[3] flex items-center justify-between gap-2">
              {/* Left cluster: Play + back/forward + time */}
              <div className="flex items-center gap-2">
                <button
                  onClick={togglePlay}
                  className="h-11 sm:h-12 px-5 rounded-full bg-white text-black flex items-center justify-center"
                  aria-label={isPlaying ? "Pause" : "Play"}
                >
                  {isPlaying ? (
                    // Pause
                    <svg
                      width="18"
                      height="18"
                      viewBox="0 0 24 24"
                      fill="currentColor"
                      aria-hidden="true"
                    >
                      <rect x="6" y="5" width="4" height="14" rx="1"></rect>
                      <rect x="14" y="5" width="4" height="14" rx="1"></rect>
                    </svg>
                  ) : (
                    // Play
                    <svg
                      width="18"
                      height="18"
                      viewBox="0 0 24 24"
                      fill="currentColor"
                      aria-hidden="true"
                    >
                      <path d="M8 5l12 7-12 7V5z"></path>
                    </svg>
                  )}
                </button>

                <div
                  className="hidden sm:flex items-center gap-4 h-11 px-4 rounded-2xl"
                  style={{ background: "rgba(0,0,0,0.72)", color: "white" }}
                >
                  {/* back 10s */}
                  <button
                    onClick={() => seekBy(-10)}
                    className="opacity-90 hover:opacity-100"
                    aria-label="Back 10 seconds"
                  >
                    <svg
                      width="22"
                      height="22"
                      viewBox="0 0 24 24"
                      fill="currentColor"
                    >
                      <path d="M11 5V2L6 6l5 4V7a6 6 0 1 1-5.917 7h2.04A4 4 0 1 0 11 7z"></path>
                      <text
                        x="8.6"
                        y="16.5"
                        fontSize="7"
                        fill="#fff"
                        fontFamily="sans-serif"
                      >
                        10
                      </text>
                    </svg>
                  </button>
                  {/* forward 10s */}
                  <button
                    onClick={() => seekBy(10)}
                    className="opacity-90 hover:opacity-100"
                    aria-label="Forward 10 seconds"
                  >
                    <svg
                      width="22"
                      height="22"
                      viewBox="0 0 24 24"
                      fill="currentColor"
                    >
                      <path d="M13 5V2l5 4-5 4V7a6 6 0 1 0 5.917 7h-2.04A4 4 0 1 1 13 7z"></path>
                      <text
                        x="8.6"
                        y="16.5"
                        fontSize="7"
                        fill="#fff"
                        fontFamily="sans-serif"
                      >
                        10
                      </text>
                    </svg>
                  </button>

                  <span className="text-sm font-medium tabular-nums">
                    {fmt(current)} / {fmt(duration || 0)}
                  </span>
                </div>
              </div>

              {/* Right cluster: mute, CC (placeholder), speed, settings (placeholder), fullscreen */}
              <div
                className="flex items-center gap-4 h-11 sm:h-12 px-4 rounded-2xl"
                style={{ background: "rgba(0,0,0,0.72)", color: "white" }}
              >
                {/* Mute */}
                <button
                  onClick={toggleMute}
                  aria-label={muted ? "Unmute" : "Mute"}
                  className="opacity-90 hover:opacity-100"
                >
                  {muted ? (
                    <svg
                      width="22"
                      height="22"
                      viewBox="0 0 24 24"
                      fill="currentColor"
                    >
                      <path d="M16.5 12l3.5 3.5-1.5 1.5L15 13.5 11.5 17H8v-6h3.5l3.5-3.5 1.5 1.5L16.5 12zM19 5l-1.5 1.5L19 8l1.5-1.5L19 5z" />
                    </svg>
                  ) : (
                    <svg
                      width="22"
                      height="22"
                      viewBox="0 0 24 24"
                      fill="currentColor"
                    >
                      <path d="M3 10v4h4l5 5V5L7 10H3zm13.5 2a4.5 4.5 0 0 0-3.5-4.385v8.77A4.5 4.5 0 0 0 16.5 12z"></path>
                    </svg>
                  )}
                </button>

                {/* CC placeholder */}
                <button
                  title="Captions (coming soon)"
                  className="hidden sm:inline opacity-90 hover:opacity-100"
                  aria-label="Captions"
                >
                  <svg
                    width="22"
                    height="22"
                    viewBox="0 0 24 24"
                    fill="currentColor"
                  >
                    <path d="M3 5h18v14H3V5zm4 4h4v2H9c-.6 0-1 .4-1 1s.4 1 1 1h2v2H9a3 3 0 0 1 0-6zm7 0h4v2h-2c-.6 0-1 .4-1 1s.4 1 1 1h2v2h-2a3 3 0 0 1 0-6z"></path>
                  </svg>
                </button>

                {/* Speed */}
                <button
                  onClick={cycleSpeed}
                  className="text-sm font-semibold tabular-nums opacity-90 hover:opacity-100"
                  aria-label="Playback speed"
                >
                  {speed}x
                </button>

                {/* Settings placeholder */}
                <button
                  title="Settings (coming soon)"
                  className="hidden sm:inline opacity-90 hover:opacity-100"
                  aria-label="Settings"
                >
                  <svg
                    width="22"
                    height="22"
                    viewBox="0 0 24 24"
                    fill="currentColor"
                  >
                    <path d="M12 8a4 4 0 1 0 0 8 4 4 0 0 0 0-8zm10 4l-2.1-1.2.2-2.4-2.4-.5-.9-2.2-2.1.9L12 3l-1.7 2.6-2.1-.9-.9 2.2-2.4.5.2 2.4L2 12l1.2 2.1-.2 2.4 2.4.5.9 2.2 2.1-.9L12 21l1.7-2.6 2.1.9.9-2.2 2.4-.5-.2-2.4L22 12z"></path>
                  </svg>
                </button>

                {/* Fullscreen */}
                <button
                  onClick={toggleFullscreen}
                  className="opacity-90 hover:opacity-100"
                  aria-label="Fullscreen"
                >
                  <svg
                    width="22"
                    height="22"
                    viewBox="0 0 24 24"
                    fill="currentColor"
                  >
                    <path d="M7 14H5v5h5v-2H7v-3zm12 5h-5v-2h3v-3h2v5zM7 5h3V3H5v5h2V5zm12 3h-2V5h-3V3h5v5z"></path>
                  </svg>
                </button>
              </div>
            </div>
          </motion.div>
        </motion.div>
      </div>

      {/* Shimmer style */}
      <style jsx>{`
        @keyframes shimmer-scan {
          0% {
            background-position: 200% 0;
          }
          100% {
            background-position: -200% 0;
          }
        }
        .shimmer-text {
          color: transparent !important;
          background-image: linear-gradient(
            110deg,
            ${BRAND} 0%,
            ${BRAND} 35%,
            #ffffff 50%,
            ${BRAND} 65%,
            ${BRAND} 100%
          );
          background-size: 200% 100%;
          -webkit-background-clip: text;
          background-clip: text;
          animation: shimmer-scan 2.4s linear infinite;
          text-shadow: 0 0 0.25px rgba(0, 0, 0, 0.06);
        }
      `}</style>
    </motion.section>
  );
}
