// components/Footer.tsx
"use client";

import Link from "next/link";
import { Mail, Phone, MapPin, Instagram } from "lucide-react";

export default function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer className="relative text-slate-200">
      <div className="absolute inset-0 -z-10 bg-black" />

      <div className="mx-auto max-w-7xl px-6 py-16 lg:py-20">
        {/* Top grid */}
        <div className="grid grid-cols-1 gap-12 md:grid-cols-12">
          {/* Brand + blurb */}
          <div className="md:col-span-5">
            <div className="text-3xl font-semibold tracking-tight text-white">
              SAIM ZSIDEO
            </div>
            <p className="mt-4 max-w-md text-slate-400">
              We build systems that turn attention into appointments and
              appointments into revenue — reliably.
            </p>

            {/* Socials (kept here) */}
            <div className="mt-6 flex items-center gap-3">
              <a
                href="https://www.instagram.com/saimzsideo/"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Instagram"
                className="inline-flex h-10 w-10 items-center justify-center rounded-full bg-white/5 text-slate-200 ring-1 ring-white/10 transition hover:bg-white/10 hover:text-white focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[var(--color-accent)]/40"
              >
                <Instagram className="h-5 w-5" aria-hidden />
              </a>
            </div>
          </div>

          {/* Disclaimer */}
          <div className="md:col-span-7 self-start">
            <h1 className="text-3xl font-semibold tracking-tight text-white">
              Disclaimer
            </h1>
            <p className="mt-2 text-sm leading-6 text-white md:text-[15px]">
              We do not make any guarantees or promises about your ability to
              get results or earn money with our coaching, programs, or
              strategies. Building a real business takes time, effort,
              consistency, and action, and your success ultimately depends on
              you. Our clients have achieved success because of the tools,
              systems, and support we provide and the effort they put in. What
              you achieve will always come down to the work you’re willing to
              do.
            </p>
          </div>

          {/* NEW: full-width contact row under both columns */}
          <div className="md:col-span-12">
            <ul className="mt-2 flex flex-wrap items-center gap-x-10 gap-y-3 text-slate-300">
              <li className="flex items-center gap-3">
                <Mail
                  className="h-5 w-5 text-[var(--color-accent)]"
                  aria-hidden
                />
                <a
                  href="mailto:hello@zsideo.com"
                  className="hover:text-white focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[var(--color-accent)]/40 rounded"
                >
                  hello@zsideo.com
                </a>
              </li>
              <li className="flex items-center gap-3">
                <Phone
                  className="h-5 w-5 text-[var(--color-accent)]"
                  aria-hidden
                />
                <a
                  href="tel:+16475405090"
                  className="hover:text-white focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[var(--color-accent)]/40 rounded"
                >
                  +1 (647) 540-5090
                </a>
              </li>
              <li className="flex items-center gap-3">
                <MapPin
                  className="h-5 w-5 text-[var(--color-accent)]"
                  aria-hidden
                />
                <span>Texas, US</span>
              </li>
            </ul>
          </div>
        </div>

     

        {/* Bottom bar */}
        <div className="mt-10 flex flex-col justify-between gap-4 border-t border-white/10 pt-6 text-sm text-slate-400 md:flex-row">
          <p>© {year} ZSIDEO. All rights reserved.</p>
          <div className="flex flex-wrap items-center gap-x-6 gap-y-2">
            <Link
              href="/privacy"
              className="hover:text-white focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[var(--color-accent)]/40 rounded"
            >
              Privacy Policy
            </Link>
            <Link
              href="/terms"
              className="hover:text-white focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[var(--color-accent)]/40 rounded"
            >
              Terms
            </Link>
            <Link
              href="/cookies"
              className="hover:text-white focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[var(--color-accent)]/40 rounded"
            >
              Cookies
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
