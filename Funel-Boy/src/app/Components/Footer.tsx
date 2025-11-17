// src/components/Footer.tsx
"use client";

import Image from "next/image";
import Link from "next/link";

export default function Footer() {
  const ACCENT = "#FFEB3B"; // your brand yellow

  const quickLinks = [
    { label: "About Us", href: "/#about" },
    { label: "Our Project", href: "/#projects" },
    { label: "Our Services", href: "/#services" },
    { label: "Testimonial", href: "/#testimonials" },
    { label: "Contact Us", href: "/#contact" },
  ];

  const contact = [
    {
      label: "+1 123 456 7890",
      href: "tel:+11234567890",
      icon: (
        <svg
          viewBox="0 0 24 24"
          className="h-5 w-5"
          fill="none"
          stroke="currentColor"
          strokeWidth="1.8"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            d="M2 5.5C2 15 9 22 18.5 22c1 0 1.9-.1 2.5-.3.5-.2.8-.7.8-1.2v-3a1 1 0 0 0-1.1-1c-1.6.1-3.2-.2-4.7-.9a2 2 0 0 0-2.1.2l-1.2.8a14.7 14.7 0 0 1-6-6l.8-1.2a2 2 0 0 0 .2-2.1 12 12 0 0 1-.9-4.7A1 1 0 0 0 4.8 2H2.5C2.1 2 2 2.4 2 2.8V5.5Z"
          />
        </svg>
      ),
    },
    {
      label: "421 Allen, Mexico 4233",
      href: "https://maps.google.com?q=421+Allen+Mexico+4233",
      icon: (
        <svg
          viewBox="0 0 24 24"
          className="h-5 w-5"
          fill="none"
          stroke="currentColor"
          strokeWidth="1.8"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            d="M12 21s7-5.1 7-11a7 7 0 1 0-14 0c0 5.9 7 11 7 11Z"
          />
          <circle cx="12" cy="10" r="2.5" />
        </svg>
      ),
    },
    {
      label: "technioai@gmail.com",
      href: "mailto:technioai@gmail.com",
      icon: (
        <svg
          viewBox="0 0 24 24"
          className="h-5 w-5"
          fill="none"
          stroke="currentColor"
          strokeWidth="1.8"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            d="M4 6h16a1 1 0 0 1 1 1v10a1 1 0 0 1-1 1H4a1 1 0 0 1-1-1V7a1 1 0 0 1 1-1Z"
          />
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            d="M3.5 7.5 12 13l8.5-5.5"
          />
        </svg>
      ),
    },
    {
      label: "technioartificial.com",
      href: "https://technioartificial.com",
      icon: (
        <svg
          viewBox="0 0 24 24"
          className="h-5 w-5"
          fill="none"
          stroke="currentColor"
          strokeWidth="1.8"
        >
          <circle cx="12" cy="12" r="9" />
          <path d="M3 12h18M12 3a16 16 0 0 1 0 18M12 3a16 16 0 0 0 0 18" />
        </svg>
      ),
    },
  ];

  const socials = [
    { name: "Facebook", href: "#", solid: true, glyph: fb },
    { name: "LinkedIn", href: "#", glyph: ln },
    { name: "Instagram", href: "#", glyph: ig },
    { name: "YouTube", href: "#", glyph: yt },
  ];

  return (
    <footer className="relative isolate">
      {/* background image */}
      <Image
        src="/images/footer-bg.jpg"
        alt="Footer background"
        fill
        priority
        sizes="100vw"
        className="object-cover"
        aria-hidden
      />
      {/* dark overlay */}
      <div className="absolute inset-0 bg-black/75" />
      {/* subtle vignette & diagonal lights */}
      <div
        className="pointer-events-none absolute inset-0 opacity-60 mix-blend-overlay"
        style={{
          background:
            "radial-gradient(80% 100% at 50% 120%, rgba(0,0,0,.6) 0%, transparent 60%), linear-gradient(120deg, rgba(255,255,255,.06), transparent 40%), linear-gradient(-120deg, rgba(255,255,255,.06), transparent 40%)",
        }}
      />

      <div className="relative z-10">
        {/* content */}
        <div className="mx-auto max-w-7xl px-4 pt-16 pb-10">
          {/* FIX: 3 columns on large screens to avoid empty right space */}
          <div className="grid gap-10 md:grid-cols-2 lg:grid-cols-3 items-start">
            {/* Brand + blurb */}
            <div className="space-y-5">
              <Link
                href="/"
                className="flex items-center gap-3 shrink-0"
                aria-label="Home"
              >
                <Image
                  src="/images/funel.png"
                  alt="FUNELBOY"
                  width={140}
                  height={40}
                  className="h-10 w-auto object-contain"
                  priority
                />
              </Link>

              <p className="max-w-xs text-sm leading-6 text-white/70">
                We create powerful AI solutions that drive results. Backed by
                innovation built for performance — we are here to help.
              </p>

              <div className="flex items-center gap-3 pt-2">
                {socials.map((s) => (
                  <Link
                    key={s.name}
                    href={s.href}
                    aria-label={s.name}
                    className={[
                      "grid size-10 place-items-center rounded-full transition",
                      s.solid ? "" : "ring-1 ring-white/15 hover:bg-white/10",
                    ].join(" ")}
                    style={s.solid ? { background: ACCENT, color: "#000" } : {}}
                  >
                    {s.glyph("h-5 w-5")}
                  </Link>
                ))}
              </div>
            </div>

            {/* Quick links */}
            <div className="min-w-0">
              <h4 className="mb-4 text-sm font-semibold text-white/90">
                Quick Links
              </h4>
              <ul className="space-y-2">
                {quickLinks.map((l) => (
                  <li key={l.label}>
                    <Link
                      href={l.href}
                      className="text-sm text-white/70 hover:text-white"
                    >
                      {l.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>

            {/* Contact info */}
            <div className="min-w-0">
              <h4 className="mb-4 text-sm font-semibold text-white/90">
                Contact Info
              </h4>
              <ul className="space-y-3">
                {contact.map((c) => (
                  <li key={c.label} className="flex items-center gap-3">
                    <span className="text-white/70">{c.icon}</span>
                    <Link
                      href={c.href}
                      className="text-sm text-white/70 hover:text-white"
                    >
                      {c.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>

            {/* (If you later add a newsletter, switch back to lg:grid-cols-4) */}
          </div>

          {/* divider */}
          <div className="mt-10 h-px w-full bg-white/10" />

          {/* bottom row */}
          <div className="mt-6 flex flex-col items-start justify-between gap-3 text-xs text-white/60 sm:flex-row">
            <p>©Copyright 2025 Techneo. All Rights Reserved</p>
            <div className="flex items-center gap-4">
              <Link href="/terms-and-conditions" className="hover:text-white">
                Terms And Conditions
              </Link>
              <span className="text-white/30">|</span>
              <Link href="/privacypolicy" className="hover:text-white">
                Privacy Policy
              </Link>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}

/* ====== tiny inline social glyphs ====== */
function fb(cls = "h-5 w-5") {
  return (
    <svg viewBox="0 0 24 24" className={cls} fill="currentColor">
      <path d="M13 10h3.5l-.5 4H13v9h-4v-9H7v-4h2V8.5C9 5.5 10.5 4 13.8 4H17v4h-2.4c-1 0-1.6.5-1.6 1.5V10Z" />
    </svg>
  );
}
function ln(cls = "h-5 w-5") {
  return (
    <svg viewBox="0 0 24 24" className={cls} fill="currentColor">
      <path d="M6.94 6.5a1.94 1.94 0 1 1 0-3.88 1.94 1.94 0 0 1 0 3.88ZM3.5 8.25h6.88v12.25H3.5zM13 8.25h6.6v2.13c.95-1.7 2.38-2.46 4.4-2.46v7.5c0 3.1-1.64 5.02-4.8 5.02-1.96 0-3.34-.76-4.2-2.3v1.9H13V8.25Zm6.18 10.7c1.64 0 2.42-1.06 2.42-3.2v-3.72c-1.52-.2-2.74.35-3.54 1.65v5.27c.35.2.73.3 1.12.3Z" />
    </svg>
  );
}
function ig(cls = "h-5 w-5") {
  return (
    <svg viewBox="0 0 24 24" className={cls} fill="currentColor">
      <path d="M7 2h10a5 5 0 0 1 5 5v10a5 5 0 0 1-5 5H7a5 5 0 0 1-5-5V7a5 5 0 0 1 5-5Zm0 2a3 3 0 0 0-3 3v10a3 3 0 0 0 3 3h10a3 3 0 0 0 3-3V7a3 3 0 0 0-3-3H7Zm5 3.5A5.5 5.5 0 1 1 6.5 13 5.5 5.5 0 0 1 12 7.5Zm0 2A3.5 3.5 0 1 0 15.5 13 3.5 3.5 0 0 0 12 9.5Zm5.25-3.25a1 1 0 1 1-1 1 1 0 0 1 1-1Z" />
    </svg>
  );
}
function yt(cls = "h-5 w-5") {
  return (
    <svg viewBox="0 0 24 24" className={cls} fill="currentColor">
      <path d="M23 7.5a4 4 0 0 0-2.8-2.8C18.3 4 12 4 12 4s-6.3 0-8.2.7A4 4 0 0 0 1 7.5 41.7 41.7 0 0 0 1 12a41.7 41.7 0 0 0 .8 4.5A4 4 0 0 0 4.6 19C6.5 19.7 12 19.7 12 19.7s6.3 0 8.2-.7a4 4 0 0 0 2.8-2.8A41.7 41.7 0 0 0 23 12a41.7 41.7 0 0 0 0-4.5ZM10 15.5v-7l6 3.5-6 3.5Z" />
    </svg>
  );
}
