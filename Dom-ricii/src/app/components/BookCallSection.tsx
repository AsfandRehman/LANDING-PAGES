// app/components/CalendlySection.tsx
"use client";

import React from "react";
import { motion } from "framer-motion";
type Props = {
  title?: string;
  subtitle?: string;
  url?: string;
};
const BRAND = "#3354A5";
const DARK = "#231F20";

export default function CalendlySection({
  title = "BOOK A CALL Now",
  subtitle = "You will speak directly with me, 1-1",
  url = "https://calendly.com/dom-stratoscontent/30min?embed_domain=book.stratoscontent.com&embed_type=Inline&hide_gdpr_banner=1",
}: Props) {
  return (
    <section id="call" className="relative w-full bg-white">
      <div className="mx-auto max-w-screen-xl px-4 py-12 sm:py-16 lg:py-20">
        {/* Heading */}
        <motion.header
          className="mb-8 md:mb-12 text-center"
          initial={{ opacity: 0, y: 12 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.25 }}
          transition={{ delay: 0.05, duration: 0.45, ease: [0.2, 0.8, 0.2, 1] }}
        >
          <h2
            className="font-extrabold tracking-tight leading-[0.98] text-[clamp(28px,6vw,56px)]"
            style={{ color: DARK }}
          >
            Frequently Asked{" "}
            <span className="shimmer-text" style={{ color: BRAND }}>
              Questions
            </span>
          </h2>
          <p
            className="mt-3 italic"
            style={{ color: "rgba(35,31,32,0.72)" }}
          ></p>
        </motion.header>

        {/* Card wrapper for nice edges + shadow */}
        <div className="rounded-2xl border border-neutral-200 bg-white shadow-[0_6px_30px_rgba(0,0,0,0.07)]">
          {/* Responsive height: phones → desktops */}
          <div className="h-[600px] sm:h-[680px] md:h-[740px] lg:h-[800px] xl:h-[860px]">
            <iframe
              title="Book a 30 Minute Meeting – Calendly"
              src={url}
              className="h-full w-full rounded-2xl"
              frameBorder="0"
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
            />
          </div>
        </div>

        {/* tiny footer note, optional */}
        <p className="mt-4 text-center text-xs text-neutral-500">
          Scheduling provided by Calendly.
        </p>
      </div>
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
    </section>
  );
}
