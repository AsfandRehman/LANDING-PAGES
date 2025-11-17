// components/TestimonialsSection.tsx
"use client";

import { useRef, useState } from "react";
import { motion, Variants } from "framer-motion";

type TestimonialVid = {
  src: string;        // e.g. "/videos/t1.mp4"
  poster?: string;    // e.g. "/videos/t1.jpg"
  caption?: string;   // optional label
};

const VIDEOS: TestimonialVid[] = [
  { src: "/videos/t1.mp4", poster: "/videos/t1.jpg", caption: "Scale w/ systems" },
  { src: "/videos/t2.mp4", poster: "/videos/t2.jpg", caption: "Automation wins" },
  { src: "/videos/t3.mp4", poster: "/videos/t3.jpg", caption: "Clarity → revenue" },
];

const easeOutExpo = [0.22, 1, 0.36, 1] as const;

const fadeUp: Variants = {
  hidden: { opacity: 0, y: 18 },
  show: {
    opacity: 1, y: 0,
    transition: { duration: 0.6, ease: easeOutExpo }
  },
};

function VideoCard({ src, poster, caption, i }: TestimonialVid & { i: number }) {
  const videoRef = useRef<HTMLVideoElement | null>(null);
  const [isPlaying, setPlaying] = useState(false);

  const play = () => {
    const v = videoRef.current;
    if (!v) return;
    // iOS requires setting currentTime on repeated plays to re-show poster correctly
    v.play().catch(() => {});
    setPlaying(true);
  };

  const pause = () => {
    const v = videoRef.current;
    if (!v) return;
    v.pause();
    v.currentTime = 0;
    setPlaying(false);
  };

  const toggleTap = () => (isPlaying ? pause() : play());

  return (
    <motion.figure
      variants={fadeUp}
      className="group"
    >
      {/* 9:16 card */}
      <div
        className="relative w-full overflow-hidden rounded-2xl border border-black/[0.06]
                   bg-white shadow-[0_20px_60px_-25px_rgba(0,0,0,0.25)]
                   transition-transform duration-300 group-hover:-translate-y-1"
        onMouseEnter={play}
        onMouseLeave={pause}
        onTouchStart={toggleTap}
      >
        {/* intrinsic ratio (9:16) */}
        <div className="pointer-events-none block pt-[177.78%]" />
        <video
          ref={videoRef}
          className="absolute inset-0 h-full w-full object-cover"
          src={src}
          poster={poster}
          muted
          playsInline
          // no autoplay; we control via hover/tap
          controls={false}
          preload="metadata"
          aria-label={caption ?? "Client testimonial"}
        />
        {/* subtle top gradient so captions on posters stay readable if needed */}
        <div className="pointer-events-none absolute inset-x-0 top-0 h-16 bg-gradient-to-b from-black/10 to-transparent" />
      </div>

      {caption && (
        <figcaption className="mt-3 text-center text-sm text-neutral-500">
          {caption}
        </figcaption>
      )}
    </motion.figure>
  );
}

export default function TestimonialsSection() {
  return (
    <section className="bg-white py-20 md:py-28">
      <div className="mx-auto max-w-6xl px-6">
        {/* Heading only */}
   <motion.h2
  initial={{ opacity: 0, y: 20 }}
  whileInView={{ opacity: 1, y: 0 }}
  viewport={{ once: true, amount: 0.4 }}
  transition={{ duration: 0.6, ease: easeOutExpo }}
  className="mx-auto max-w-4xl text-center font-extrabold leading-[0.96] tracking-tight
             text-[clamp(36px,6.5vw,72px)] text-[var(--color-text)]"
>
  Client results in their{" "}
  <span className="italic text-[var(--color-accent)] whitespace-nowrap">
     own words
  </span>
</motion.h2>



        {/* Mobile: horizontal snap; Desktop: 3-column grid */}
        <motion.div
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, amount: 0.2 }}
          className="mt-12"
        >
          <div className="grid grid-cols-1 gap-6 sm:gap-8 md:grid-cols-3 md:gap-8
                          md:[&>*]:snap-none
                          -mx-4 px-4 md:mx-0 md:px-0
                          overflow-x-auto md:overflow-visible
                          snap-x snap-mandatory"
          >
            {VIDEOS.map((v, i) => (
              <div key={i} className="min-w-[75%] sm:min-w-[55%] md:min-w-0 snap-center">
                <VideoCard {...v} i={i} />
              </div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
}
