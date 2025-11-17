"use client";

import Link from "next/link";
import Image from "next/image";
import { useState } from "react";

/**
 * Responsive Navbar (Next.js 15 + Tailwind + TS)
 * - Logo left (image only)
 * - Centered links
 * - Pill CTA with yellow arrow on the right
 * - Mobile slide-over menu
 * - Improved desktop spacing via a centered container (max-w) + padding
 */
export default function Navbar() {
  const [open, setOpen] = useState(false);

  const ACCENT = "#FFEB3B";

  const NAV = [
    { label: "About Us", href: "#about" },
    { label: "Our Service", href: "#services" },
    { label: "Our Work", href: "/work" },
    { label: "Contact", href: "#contact" },
  ];

  return (
    <header className="fixed inset-x-0 z-50">
      {/* Centered container to pull logo/CTA away from corners */}
      <div className="mx-auto w-full max-w-screen-xl px-4 sm:px-6 lg:px-8">
        <div className="relative mt-3 flex items-center justify-between rounded-full border border-white/10 bg-neutral-900/80 px-3 py-2 shadow-2xl backdrop-blur-md">
          {/* subtle outer glow */}
          <div className="pointer-events-none absolute inset-0 -z-10 rounded-full shadow-[0_0_0_1px_rgba(255,255,255,0.05),0_8px_30px_rgba(0,0,0,0.35)]" />

          {/* left: logo image only */}
          <Link href="/" className="flex items-center gap-2" aria-label="Home">
            <Image
              src="/images/funel.png"
              alt="FUNELBOY Logo"
              width={100}
              height={100}
              className="h-9 w-auto object-contain"
              priority
            />
          </Link>

          {/* center: links (desktop) */}
          <nav className="absolute left-1/2 hidden -translate-x-1/2 md:block">
            <ul className="flex items-center gap-8">
              {NAV.map((i) => (
                <li key={i.href}>
                  <a
                    href={i.href}
                    className="text-sm font-medium text-white/80 transition hover:text-white"
                  >
                    {i.label}
                  </a>
                </li>
              ))}
            </ul>
          </nav>

          {/* right: CTA + menu */}
          <div className="flex items-center gap-1 md:gap-2">
            {/* CTA (desktop) */}
            <Link href="#contact" className="relative hidden md:inline-flex">
              <span className="group inline-flex items-center gap-3 rounded-full border border-white/10 bg-neutral-900/80 px-5 py-2.5 text-sm font-medium text-white shadow-[inset_0_1px_0_rgba(255,255,255,0.06)] ring-1 ring-white/10 transition">
                Get Started
                <span
                  className="grid size-8 place-items-center rounded-full ring-1 ring-black/10 transition-transform group-hover:translate-x-0.5"
                  style={{ background: ACCENT, color: "#000" }}
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
                </span>
              </span>
              <span
                className="pointer-events-none absolute inset-0 -z-10 rounded-full"
                style={{ border: `1px solid ${hexWithAlpha(ACCENT, 0.4)}` }}
              />
            </Link>

            {/* mobile menu button */}
            <button
              aria-label="Open menu"
              className="grid size-9 place-items-center rounded-full text-white/80 hover:bg-white/5 hover:text-white md:hidden"
              onClick={() => setOpen(true)}
            >
              <svg
                viewBox="0 0 24 24"
                className="h-5 w-5"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
              >
                <path strokeLinecap="round" d="M4 6h16M4 12h16M4 18h16" />
              </svg>
            </button>
          </div>
        </div>
      </div>

      {/* mobile drawer */}
      {open && (
        <div
          className="fixed inset-0 z-50 md:hidden"
          role="dialog"
          aria-modal="true"
        >
          <div
            className="absolute inset-0 bg-black/50 backdrop-blur-sm"
            onClick={() => setOpen(false)}
          />
          <div className="absolute right-3 top-3 w-[88vw] max-w-sm overflow-hidden rounded-2xl border border-white/10 bg-neutral-900 p-4 shadow-2xl">
            <div className="mb-3 flex items-center justify-between">
              <span className="text-sm font-semibold text-white">Menu</span>
              <button
                aria-label="Close menu"
                className="grid size-9 place-items-center rounded-full text-white/80 hover:bg-white/5 hover:text-white"
                onClick={() => setOpen(false)}
              >
                <svg
                  viewBox="0 0 24 24"
                  className="h-5 w-5"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M6 6l12 12M18 6l-12 12"
                  />
                </svg>
              </button>
            </div>

            <nav>
              <ul className="grid gap-2">
                {NAV.map((i) => (
                  <li key={i.href}>
                    <a
                      href={i.href}
                      className="block rounded-lg px-3 py-2 text-base font-medium text-white/90 hover:bg-white/5"
                      onClick={() => setOpen(false)}
                    >
                      {i.label}
                    </a>
                  </li>
                ))}
              </ul>
            </nav>

            <div className="mt-4">
              <Link
                href="#contact"
                onClick={() => setOpen(false)}
                className="group relative inline-flex w-full items-center justify-between rounded-full border border-white/10 bg-neutral-800 px-5 py-3 text-sm font-semibold text-white ring-1 ring-white/10"
              >
                <span>Get Started</span>
                <span
                  className="grid size-9 place-items-center rounded-full ring-1 ring-black/10"
                  style={{ background: ACCENT, color: "#000" }}
                >
                  <svg
                    viewBox="0 0 24 24"
                    className="h-5 w-5"
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
                </span>
                <span
                  className="pointer-events-none absolute inset-0 -z-10 rounded-full"
                  style={{ border: `1px solid ${hexWithAlpha(ACCENT, 0.4)}` }}
                />
              </Link>
            </div>
          </div>
        </div>
      )}
    </header>
  );
}

/** helpers */
function hexWithAlpha(hex: string, alpha: number) {
  const n = hex.replace("#", "");
  const r = parseInt(n.substring(0, 2), 16);
  const g = parseInt(n.substring(2, 4), 16);
  const b = parseInt(n.substring(4, 6), 16);
  return `rgba(${r}, ${g}, ${b}, ${alpha})`;
}
