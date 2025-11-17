"use client";

import Link from "next/link";

const BG_IMAGE = "/images/6.jpg"; // replace with your actual image path

export default function ConsultCTA() {
  return (
    <section className="relative overflow-hidden text-white">
      {/* Background image */}
      <div
        className="absolute inset-0 -z-30 bg-cover bg-center"
        style={{ backgroundImage: `url(${BG_IMAGE})` }}
      />

      {/* Dark overlay: pure black (top) → transparent (bottom) */}
      <div className="absolute inset-0 -z-20 bg-gradient-to-b from-black to-transparent" />

      <div className="relative mx-auto max-w-5xl px-6 py-16 md:py-24 text-center">
        <h2
          className={[
            "font-serif font-semibold leading-[1.05]",
            "text-4xl md:text-6xl lg:text-7xl",
            "tracking-tight",
          ].join(" ")}
        >
          Ready to Transform Your
          <br className="hidden md:block" />
          Financial Future?
        </h2>

        <p className="mx-auto mt-5 max-w-3xl text-base md:text-lg text-white/85">
          Book a free, no-obligation consultation with our experts today and
          take the first step towards financial mastery.
        </p>

        <div className="mt-8 md:mt-10">
          <Link
            href="/book"
            className={[
              "inline-flex items-center justify-center rounded-xl",
              "bg-white text-black font-semibold",
              "px-6 md:px-8 py-3 md:py-3.5",
              "shadow-[0_6px_20px_rgba(0,0,0,0.25)]",
              "transition-transform duration-200 hover:translate-y-[-2px]",
              "focus:outline-none focus:ring-2 focus:ring-white/70",
            ].join(" ")}
          >
            Book Your Free Consultation Now
          </Link>
        </div>
      </div>
    </section>
  );
}
