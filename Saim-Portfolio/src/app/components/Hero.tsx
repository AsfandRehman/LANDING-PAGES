"use client";

import { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { motion, cubicBezier, useReducedMotion } from "framer-motion";

type HeroProps = {
  imageAlt?: string;
  calendlyUrl?: string;
  proofVideoUrl?: string;
};

const easeOutCustom = cubicBezier(0.22, 1, 0.36, 1);
const fadeUp = (delay = 0, noMotion = false) => ({
  initial: { y: noMotion ? 0 : 20, opacity: noMotion ? 1 : 0 },
  animate: {
    y: 0,
    opacity: 1,
    transition: noMotion ? { duration: 0 } : { duration: 0.5, ease: easeOutCustom, delay },
  },
});

export default function Hero({
  imageAlt = "Saim Ali Ahmad",
  proofVideoUrl = "https://www.youtube.com/embed/dQw4w9WgXcQ?rel=0",
}: HeroProps) {
  const [open, setOpen] = useState(false);
  const prefersReducedMotion = useReducedMotion() ?? false;


  return (
    <section
      aria-label="Hero"
      className="relative isolate overflow-hidden bg-[#0B0B10] text-white"
    >
      {/* background glows/grid */}
      <div aria-hidden="true" className="pointer-events-none absolute inset-0">
        <div className="absolute inset-0 bg-[radial-gradient(900px_520px_at_20%_22%,rgba(56,189,248,0.22),transparent_60%)]" />
        <div className="absolute inset-0 bg-[radial-gradient(700px_420px_at_88%_26%,rgba(168,85,247,0.12),transparent_60%)]" />
        <div className="absolute inset-0 bg-[linear-gradient(to_bottom,rgba(255,255,255,0.05),transparent_30%)] mix-blend-overlay" />
        <div className="absolute inset-0 opacity-80 [background-image:linear-gradient(to_right,rgba(255,255,255,0.10)_1px,transparent_1px),linear-gradient(to_bottom,rgba(255,255,255,0.10)_1px,transparent_1px)] [background-size:36px_36px] [mask-image:radial-gradient(900px_520px_at_20%_22%,#000_0%,transparent_60%)] [mask-mode:alpha] [mask-repeat:no-repeat]" />
      </div>

      {/* content wrapper — add top padding for fixed navbar */}
      <div className="relative mx-auto max-w-7xl px-5 lg:px-8 pt-24 sm:pt-24">
        {/* min height accounts for 80px navbar on mobile */}
        <div className="grid min-h-[calc(100svh-80px)] grid-cols-1 items-center gap-8 pb-14 md:grid-cols-12 md:gap-12">
          {/* text */}
          <div className="md:col-span-7">
           <div className="flex justify-center md:justify-start mb-4">
            <motion.div
              {...fadeUp(0, prefersReducedMotion)}
              className="inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/5 
                        px-3 py-[6px] text-[11px] font-medium text-white/80"
            >
              <span className="block h-2 w-2 rounded-full bg-gradient-to-r from-indigo-500 to-sky-400" />
              <span className="leading-none whitespace-nowrap">
                From $1M at 19 to Operator at 20
              </span>
            </motion.div>
          </div>




            <motion.h1
              {...fadeUp(0.05, prefersReducedMotion)}
              className="relative text-center text-[28px] leading-[1.1] font-bold tracking-tight sm:text-4xl md:text-left md:text-6xl xl:text-7xl"
            >
              Started Young. <br/> Built Big. <br/>
              <span className="block sm:inline bg-gradient-to-r from-indigo-500 to-sky-400 bg-clip-text font-extrabold text-transparent">
               Still Scaling.
              </span>
            </motion.h1>

            <motion.p
              {...fadeUp(0.1, prefersReducedMotion)}
              className="mx-auto mt-5 max-w-2xl text-center text-[15px] leading-relaxed text-white/80 sm:text-base md:mx-0 md:text-left"
            >
              Founder of ZSIDEO CONTENT and Multiple Other Service Based Businesses. Self‑made by 19, operator at 20.
              Verified results across the US, CA, UK, AU, and AE. Revenue from services,
              not selling courses. Proof over promises.
            </motion.p>

            <motion.div
              {...fadeUp(0.16, prefersReducedMotion)}
              className="mt-7 flex flex-col gap-3 sm:flex-row sm:items-center"
            >
              
             
                
             <Link
                href= "https://www.instagram.com/saimzsideo/"
                 >

              <button
                type="button"
                
                className="w-full rounded-full border border-white/15 bg-white/10 px-5 py-3 text-sm font-semibold text-white backdrop-blur transition-colors hover:bg-white/15 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-white sm:w-auto"
                aria-haspopup="dialog"
                aria-controls="proof-video-dialog"
              >
                Watch Proof
              </button> </Link>
            </motion.div>

            <motion.div
              {...fadeUp(0.22, prefersReducedMotion)}
              className="mt-5 text-center text-[11px] uppercase tracking-[0.18em] text-white/60 md:text-left"
            >
              US • CA • UK • AU • UAE
            </motion.div>
          </div>

          {/* image */}
          <div className="md:col-span-5">
            <motion.div
              initial={prefersReducedMotion ? false : { opacity: 0, x: 40 }}
              animate={
                prefersReducedMotion
                  ? { opacity: 1 }
                  : { opacity: 1, x: 0, transition: { duration: 0.7, ease: easeOutCustom, delay: 0.12 } }
              }
              whileHover={prefersReducedMotion ? undefined : { scale: 1.02, rotateX: 1, rotateY: -1 }}
              className="relative mx-auto aspect-[4/5] w-full max-w-[22rem] sm:max-w-sm"
            >
              <div className="absolute -inset-0.5 rounded-[28px] bg-[conic-gradient(at_20%_50%,#6366F1,#22D3EE_30%,#60A5FA_60%,#6366F1)] opacity-70 blur-md" />
              <div className="relative h-full w-full overflow-hidden rounded-[24px] border border-white/10 bg-white/5 backdrop-blur-md">
                <Image
                  src="/images/saim.jpg"
                  alt={imageAlt}
                  fill
                  priority
                  sizes="(max-width: 640px) 90vw, (max-width: 1024px) 40vw, 420px"
                  className="object-cover"
                />
                <motion.div
                  aria-hidden="true"
                  initial={prefersReducedMotion ? false : { x: "-120%" }}
                  animate={
                    prefersReducedMotion
                      ? { opacity: 1 }
                      : { x: "120%", transition: { delay: 0.8, duration: 1.1, ease: easeOutCustom } }
                  }
                  className="pointer-events-none absolute inset-y-0 left-0 w-[140%] bg-gradient-to-r from-transparent via-white/30 to-transparent"
                />
                <div className="absolute inset-x-0 bottom-0 bg-gradient-to-t from-[#0B0B10]/80 to-transparent p-4">
                  <div className="text-sm font-medium">Saim Ali Ahmad</div>
                  <div className="text-xs text-white/70">Founder & CEO</div>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </div>

      {/* video dialog */}
      {open && (
        <div
          id="proof-video-dialog"
          className="fixed inset-0 z-50 grid place-items-center bg-black/70 px-4"
          role="dialog"
          aria-modal="true"
          aria-label="Proof video"
        >
          <div className="relative w-full max-w-3xl overflow-hidden rounded-2xl border border-white/10 bg-[#0B0B10] shadow-2xl">
            <button
              onClick={() => setOpen(false)}
              className="absolute right-3 top-3 rounded-full bg-white/10 px-3 py-1 text-sm text-white transition-colors hover:bg-white/20 focus:outline-none focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-white"
              aria-label="Close"
            >
              Close
            </button>
            <div className="aspect-video w-full">
              <iframe
                className="h-full w-full"
                src={proofVideoUrl}
                title="Proof Video"
                allow="autoplay; encrypted-media; picture-in-picture"
                loading="lazy"
              />
            </div>
          </div>
        </div>
      )}
    </section>
  );
}
