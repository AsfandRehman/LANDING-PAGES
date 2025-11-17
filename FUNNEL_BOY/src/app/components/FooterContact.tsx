"use client";

import Link from "next/link";

const SERVICES = [
  "Website Design",
  "Motion Design",
  "Front-End Development",
  "Back-End Development",
  "Shopify Development",
  "Website Support",
  "Paid Search Advertising",
  "Social Media Advertising",
  "Email Marketing",
  "SEO",
];

export default function FooterContact() {
  return (
    <footer className="relative w-full bg-transparent">
      <div className="mx-auto max-w-7xl px-6 md:px-10 pt-10 md:pt-14">
        {/* Top right tiny glyph (optional decoration) */}

        {/* Top row: LET'S TALK + red hex */}
        <div className="flex items-start justify-center md:justify-center">
          <h2 className="text-center font-extrabold leading-[0.9] tracking-tight uppercase text-[18vw] md:text-[9.2vw] lg:text-[7.8vw]">
            Let’s Talk
          </h2>
          <HexDot className="ml-3 mt-7 md:mt-5 h-4 w-4 md:h-5 md:w-5" />
        </div>

        {/* Middle grid */}
        <div className="grid grid-cols-1 md:grid-cols-12 gap-10 md:gap-12 mt-10 md:mt-14">
          {/* STUDIO (left) */}
          <div className="md:col-span-5 lg:col-span-4">
            <div className="flex items-start gap-3">
              <h3 className="font-extrabold tracking-tight uppercase text-[18vw] md:text-[9vw] lg:text-[7.2vw] leading-none">
                Studio
              </h3>
              <HexDot className="mt-3 h-4 w-4 md:h-5 md:w-5" />
            </div>

            <address className="not-italic mt-8 text-[12px] md:text-[13px] leading-relaxed tracking-[0.03em] text-white/85">
              81 Prospect St, Suite 9069,
              <br />
              Brooklyn, NY 11201
            </address>

            {/* Newsletter */}
            <div className="mt-16">
              <div className="uppercase text-[10px] tracking-[0.28em] text-white/70 mb-3">
                Newsletter
              </div>
              <form
                onSubmit={(e) => e.preventDefault()}
                className="group relative"
              >
                <input
                  type="email"
                  placeholder="Your Email"
                  className="w-full bg-transparent outline-none border-0 border-b border-white/30 focus:border-white/70 transition placeholder:text-white/70 text-white/95 py-3 pr-10"
                  required
                />
                <button
                  aria-label="Submit email"
                  className="absolute right-0 top-1/2 -translate-y-1/2 p-2 opacity-90 group-hover:opacity-100"
                >
                  <ArrowNarrow />
                </button>
              </form>
            </div>
          </div>

          {/* SERVICES (right column title) */}
          <div className="md:col-span-7 lg:col-span-8 md:order-last order-last">
            <div className="flex items-center justify-end md:justify-end">
              <h3 className="font-extrabold tracking-tight uppercase text-[18vw] md:text-[9vw] lg:text-[7.2vw] leading-none">
                Services
              </h3>
              <HexDot className="ml-3 h-4 w-4 md:h-5 md:w-5" />
            </div>
          </div>

          {/* Services list (center column) */}
          <div className="md:col-span-7 lg:col-span-4 md:order-[-1]">
            <ul className="text-[12px] md:text-[13px] leading-7 md:leading-8 tracking-[0.02em] uppercase">
              {SERVICES.map((s) => (
                <li key={s} className="text-white/90">
                  {s}
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* Lower rule */}
        <div className="mt-10 md:mt-14">
          <Rule smallGap />
        </div>

        {/* WORK heading aligned left under lower rule */}
        <div className="mt-6 md:mt-8 flex items-center">
          <h3 className="font-extrabold tracking-tight uppercase text-[18vw] md:text-[9vw] lg:text-[7.2vw] leading-none">
            Work
          </h3>
          <HexDot className="ml-3 h-4 w-4 md:h-5 md:w-5" />
        </div>

        {/* Bottom bar: copyright + socials */}
        <div className="mt-10 md:mt-14 mb-12 flex flex-col md:flex-row items-start md:items-center justify-between gap-6">
          <div className="text-white/80 text-sm">
            ©{new Date().getFullYear()} Buzzworthy Studio
          </div>

          <nav className="flex flex-wrap items-center gap-x-8 gap-y-3 text-white/85 text-sm">
            <Social href="#" label="Linkedin" />
            <Social href="#" label="Instagram" />
            <Social href="#" label="Twitter" />
            <Social href="#" label="Behance" />
            <Social href="#" label="Dribbble" />
          </nav>
        </div>
      </div>

      {/* Top-left brand bubble */}
    </footer>
  );
}

/* Helpers */

function Rule({ smallGap = false }: { smallGap?: boolean }) {
  return (
    <div className={`relative ${smallGap ? "mt-6" : "mt-8"}`}>
      <div className="absolute left-0 right-0 top-1/2 -translate-y-1/2 border-t border-white/35" />
      <div className="absolute left-0 top-1/2 -translate-y-1/2 h-3 w-3 rounded-full border border-white/60" />
      <div className="absolute right-0 top-1/2 -translate-y-1/2 h-3 w-3 rounded-full border border-white/60" />
      <div className="h-6" />
    </div>
  );
}

function Social({ href, label }: { href: string; label: string }) {
  return (
    <Link href={href} className="hover:text-white transition">
      {label}
    </Link>
  );
}

function HexDot({ className = "" }: { className?: string }) {
  return (
    <svg
      className={className}
      viewBox="0 0 24 24"
      aria-hidden
      fill="#E73852"
      width="20"
      height="20"
    >
      <path d="M12 2.5 20 7v10l-8 4.5L4 17V7l8-4.5Z" />
    </svg>
  );
}

function ArrowNarrow() {
  return (
    <svg width="22" height="22" viewBox="0 0 24 24" fill="none" aria-hidden>
      <path
        d="M5 12h14M13 6l6 6-6 6"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
}

function TinyGlyph() {
  return (
    <svg width="22" height="32" viewBox="0 0 22 32" fill="none">
      <circle cx="3" cy="3" r="2" stroke="white" opacity=".9" />
      <circle cx="19" cy="7" r="2" stroke="white" opacity=".9" />
      <path d="M3 5v24M19 9v20M3 29h16" stroke="white" opacity=".9" />
    </svg>
  );
}
