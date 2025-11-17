"use client";

import Image from "next/image";
import Link from "next/link";

type LinkItem = { label: string; href: string };
type Column = { title: string; links: LinkItem[] };

const ACCENT = "#3354A5";

const SITE: Column = {
  title: "Site",
  links: [
    { label: "Home", href: "#home" },
    { label: "About", href: "#about" },
    { label: "Work", href: "#show" },

    { label: "Contact", href: "#call" },
  ],
};

const SERVICES: Column = {
  title: "Services",
  links: [
    { label: "Short-Form Video", href: "#services" },
    { label: "Websites", href: "#services" },
    { label: "Hosting & Care", href: "#services" },
    { label: "AI Cloning", href: "#services" },
  ],
};

const socials = [
  { name: "Instagram", href: "https://instagram.com", icon: InstagramIcon },
  { name: "YouTube", href: "https://youtube.com", icon: YoutubeIcon },
  { name: "TikTok", href: "https://tiktok.com", icon: TiktokIcon },
  { name: "X", href: "https://x.com", icon: XIcon },
];

export default function Footer({
  logoSrc = "/images/logo-negative.png",
  logoAlt = "Brand Logo",
  tagline = "We craft cinematic content & high-end content.",
  /** quick single-number control (px). Overridden by logoWidth/Height if provided */
  logoSize = 100,
  /** precise control (px) */
  logoWidth = 100,
  logoHeight = 100,
}: {
  logoSrc?: string;
  logoAlt?: string;
  tagline?: string;
  logoSize?: number;
  logoWidth?: number;
  logoHeight?: number;
}) {
  const w = logoWidth ?? logoSize;
  const h = logoHeight ?? logoSize;

  return (
    <footer className="relative mt-24 text-sm text-white">
      {/* background: top→bottom black → 231F20 → 3354A5 */}
      <div
        className="absolute inset-0 -z-10"
        style={{
          background:
            "linear-gradient(to bottom, #000000 0%, #231F20 55%, #3354A5 140%)",
        }}
      />

      <div className="relative mx-auto w-full max-w-7xl px-4 sm:px-6 lg:px-8 py-12">
        {/* --- 3 columns in one row --- */}
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-12 items-start">
          {/* COL 1: Brand + socials */}
          <div className="flex flex-col items-start gap-5">
            <div className="flex items-center gap-3">
              <Image
                src={logoSrc}
                alt={logoAlt}
                width={w}
                height={h}
                priority
                className="object-contain"
                style={{ width: w, height: h }} // ensures exact pixel size
              />
              {/* ⛔️ removed the accent dot/pill next to the logo */}
            </div>

            {/* tagline under logo */}
            <p className="max-w-xs text-zinc-300/90 leading-relaxed">
              {tagline}
            </p>

            {/* social row */}
            <div className="flex items-center gap-4">
              {socials.map(({ name, href, icon: Icon }) => (
                <Link
                  key={name}
                  href={href}
                  aria-label={name}
                  className="group relative grid h-10 w-10 place-items-center rounded-full border border-white/10 bg-white/5 backdrop-blur-sm transition
                             hover:scale-105 hover:border-white/20"
                >
                  <Icon className="h-5 w-5 text-zinc-200 transition group-hover:drop-shadow-glow" />
                  <span
                    aria-hidden
                    className="pointer-events-none absolute inset-0 rounded-full opacity-0 transition-opacity group-hover:opacity-100"
                    style={{
                      boxShadow: `0 0 24px ${ACCENT}66, inset 0 0 14px ${ACCENT}22`,
                    }}
                  />
                </Link>
              ))}
            </div>
          </div>

          {/* COL 2: Site */}
          <FooterColumn column={SITE} />

          {/* COL 3: Services */}
          <FooterColumn column={SERVICES} />
        </div>
      </div>

      {/* shiny full-width separator */}
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="relative h-px w-full overflow-hidden rounded-full bg-zinc-700/50">
          <span className="pointer-events-none absolute inset-0 h-px w-full animate-shine-full" />
        </div>
      </div>

      {/* bottom row with Terms & Privacy on right */}
      <div className="mx-auto w-full max-w-7xl px-4 sm:px-6 lg:px-8 py-6 flex flex-col sm:flex-row items-center justify-between gap-4">
        <p className="text-zinc-300/80">
          © {new Date().getFullYear()} Your Company. All rights reserved.
        </p>
        <div className="flex items-center gap-6 text-zinc-300/80">
          <Link href="/privacy" className="hover:text-white transition-colors">
            Privacy
          </Link>
          <Link href="/terms" className="hover:text-white transition-colors">
            Terms
          </Link>
        </div>
      </div>
    </footer>
  );
}

/* ------- Small components & icons ------- */
function FooterColumn({ column }: { column: Column }) {
  return (
    <nav aria-label={column.title} className="sm:justify-self-start">
      <h4
        className="mb-4 font-semibold uppercase tracking-wider"
        style={{ color: ACCENT }}
      >
        {column.title}
      </h4>
      <ul className="space-y-3">
        {column.links.map((item) => (
          <li key={item.label}>
            <Link
              href={item.href}
              className="text-zinc-300 hover:text-white transition-colors"
            >
              {item.label}
            </Link>
          </li>
        ))}
      </ul>
    </nav>
  );
}

// inline SVG icons
function InstagramIcon(props: React.SVGProps<SVGSVGElement>) {
  return (
    <svg viewBox="0 0 24 24" fill="none" {...props}>
      <rect x="3" y="3" width="18" height="18" rx="5" stroke="currentColor" />
      <circle cx="12" cy="12" r="4.5" stroke="currentColor" />
      <circle cx="17.5" cy="6.5" r="1" fill="currentColor" />
    </svg>
  );
}
function YoutubeIcon(props: React.SVGProps<SVGSVGElement>) {
  return (
    <svg viewBox="0 0 24 24" fill="none" {...props}>
      <rect x="3" y="6" width="18" height="12" rx="3" stroke="currentColor" />
      <path d="M11 10.2v3.6l3.2-1.8L11 10.2Z" fill="currentColor" />
    </svg>
  );
}
function TiktokIcon(props: React.SVGProps<SVGSVGElement>) {
  return (
    <svg viewBox="0 0 24 24" fill="none" {...props}>
      <path
        d="M14 4v7.2a4.2 4.2 0 1 1-3.6-2.1V12a2.1 2.1 0 1 0 2.1 2.1V4h1.5c1 1.8 2.6 3 4.7 3.2V9C16.8 8.8 15.1 7.9 14 6.4V4Z"
        fill="currentColor"
      />
    </svg>
  );
}
function XIcon(props: React.SVGProps<SVGSVGElement>) {
  return (
    <svg viewBox="0 0 24 24" fill="none" {...props}>
      <path
        d="M4 4l7.6 8.7L4.9 20h2.2l4.9-5.6 4.5 5.6H20l-8-9.8L18.7 4h-2.2l-4.4 5-4-5H4Z"
        fill="currentColor"
      />
    </svg>
  );
}
