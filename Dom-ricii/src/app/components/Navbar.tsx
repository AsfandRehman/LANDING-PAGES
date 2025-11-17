// components/Navbar.tsx
"use client";

import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useEffect, useState, useCallback, useRef } from "react";
import Script from "next/script";

declare global {
  interface Window {
    Calendly?: {
      initPopupWidget: (opts: { url: string }) => void;
      closePopupWidget?: () => void;
    };
  }
}

// --------- EDIT THESE TO YOUR LOGO ----------
const LOGO_SRC = "/images/logo.png";
const LOGO_ALT = "ZSIDEO";
const LOGO_WIDTH = 148;
const LOGO_HEIGHT = 42;
// -------------------------------------------

const BRAND = "#3354A5";

// Use the link from your CalendlySection (can change anytime)
const CALENDLY_URL =
  "https://calendly.com/dom-stratoscontent/30min?embed_domain=book.stratoscontent.com&embed_type=Inline&hide_gdpr_banner=1";

const LINKS = [
  { href: "/", label: "Home" },
  { href: "#about", label: "About" },
  { href: "#call", label: "Contact" },
];

function cx(...c: Array<string | false | null | undefined>) {
  return c.filter(Boolean).join(" ");
}

export default function Navbar() {
  const pathname = usePathname();
  const [open, setOpen] = useState(false); // mobile menu
  const [inlineOpen, setInlineOpen] = useState(false); // inline Calendly modal
  const overlayRef = useRef<HTMLDivElement | null>(null);

  // close mobile menu on route change
  useEffect(() => setOpen(false), [pathname]);

  // Listen for Calendly open/close to toggle background blur
  useEffect(() => {
    const onMsg = (e: MessageEvent) => {
      if (typeof e.data !== "object" || !e.data?.event) return;
      if (e.data.event === "calendly.ui.opened") {
        document.documentElement.classList.add("cal-blur");
      }
      if (e.data.event === "calendly.ui.closed") {
        document.documentElement.classList.remove("cal-blur");
      }
    };
    window.addEventListener("message", onMsg);
    return () => window.removeEventListener("message", onMsg);
  }, []);

  // ESC to close inline modal
  useEffect(() => {
    const onKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") {
        setInlineOpen(false);
        document.documentElement.classList.remove("cal-blur");
      }
    };
    document.addEventListener("keydown", onKey);
    return () => document.removeEventListener("keydown", onKey);
  }, []);

  const openCalendly = useCallback((e?: React.MouseEvent) => {
    e?.preventDefault();
    if (window.Calendly?.initPopupWidget) {
      document.documentElement.classList.add("cal-blur");
      const popupUrl = CALENDLY_URL.split("?")[0];
      window.Calendly.initPopupWidget({ url: popupUrl });
      return;
    }
    document.documentElement.classList.add("cal-blur");
    setInlineOpen(true);
  }, []);

  const closeInlineCalendly = useCallback(() => {
    setInlineOpen(false);
    document.documentElement.classList.remove("cal-blur");
  }, []);

  // Brand-tinted utilities
  const brandTxt = "text-[var(--brand,#3354A5)]";
  const brandBg = "bg-[var(--brand,#3354A5)]";
  const brandRing = "ring-[color:var(--brand,#3354A5)]";

  const linkBase = cx(
    "group relative inline-block transition-colors",
    brandTxt,
    "hover:opacity-90"
  );

  // CTA desktop
  const ctaClasses = cx(
    "hidden md:inline-flex items-center justify-center rounded-full px-5 py-2 text-sm font-medium",
    "text-white shadow-sm transition-transform duration-300 ease-out hover:scale-105 active:translate-y-[1px]",
    "focus-visible:outline-none focus-visible:ring-4",
    brandRing,
    "focus-visible:ring-opacity-30",
    "relative overflow-hidden cta-shine"
  );

  return (
    <>
      {/* Calendly popup script */}
      <Script
        src="https://assets.calendly.com/assets/external/widget.js"
        strategy="afterInteractive"
      />
      <link
        rel="stylesheet"
        href="https://assets.calendly.com/assets/external/widget.css"
      />

      <nav
        aria-label="Primary"
        className={cx(
          "fixed top-4 left-0 right-0 z-50 w-full px-4 pointer-events-none"
        )}
        style={{ ["--brand" as string]: BRAND }}
      >
        <div
          className={cx(
            "mx-auto flex max-w-7xl items-center justify-between",
            "rounded-full bg-white/70 backdrop-blur-md",
            "ring-1 ring-black/5 shadow-lg",
            "px-4 py-2 sm:px-6",
            "pointer-events-auto"
          )}
        >
          {/* Left: Logo */}
          <Link
            href="/"
            className="select-none inline-flex items-center"
            aria-label="Go to homepage"
          >
            <Image
              src={LOGO_SRC}
              alt={LOGO_ALT}
              width={LOGO_WIDTH}
              height={LOGO_HEIGHT}
              priority
              className="h-8 w-auto md:h-10"
            />
          </Link>

          {/* Center: Desktop Links */}
          <ul className="absolute left-1/2 hidden -translate-x-1/2 items-center gap-8 md:flex">
            {LINKS.map(({ href, label }) => {
              const active =
                pathname === href ||
                (href !== "/" && pathname?.startsWith(href));
              return (
                <li key={href}>
                  <Link href={href} className={cx(linkBase)}>
                    <span className="relative">
                      {label}
                      <span
                        className={cx(
                          "pointer-events-none absolute -bottom-1 left-0 h-[2px] w-full origin-left bg-current",
                          "transition-transform duration-300 ease-out",
                          href === "/"
                            ? "scale-x-0 group-hover:scale-x-100"
                            : active
                            ? "scale-x-100"
                            : "scale-x-0 group-hover:scale-x-100"
                        )}
                      />
                    </span>
                  </Link>
                </li>
              );
            })}
          </ul>

          {/* Right: CTA (desktop) + Hamburger (mobile) */}
          <div className="flex items-center gap-3">
            <button onClick={openCalendly} className={ctaClasses}>
              <span className="relative z-[1]">Book a free Call</span>
            </button>

            <button
              aria-label="Toggle menu"
              onClick={() => setOpen((v) => !v)}
              className={cx(
                "md:hidden inline-flex h-10 w-10 items-center justify-center rounded-md transition",
                brandTxt,
                "ring-1 ring-black/10 hover:bg-black/5 relative"
              )}
            >
              <span
                className={cx(
                  "relative block h-0.5 w-6 bg-current transition-all",
                  open ? "translate-y-0 rotate-45" : "-translate-y-2"
                )}
              />
              <span
                className={cx(
                  "absolute h-0.5 w-6 bg-current transition-opacity",
                  open ? "opacity-0" : "opacity-100"
                )}
              />
              <span
                className={cx(
                  "relative block h-0.5 w-6 bg-current transition-all",
                  open ? "translate-y-[-2px] -rotate-45" : "translate-y-2"
                )}
              />
            </button>
          </div>
        </div>

        {/* Mobile panel */}
        <div
          className={cx(
            "md:hidden transition-[grid-template-rows] duration-300",
            open
              ? "grid [grid-template-rows:1fr]"
              : "grid [grid-template-rows:0fr]",
            "pointer-events-auto",
            "rounded-b-xl bg-white/70 backdrop-blur-md ring-1 ring-black/5 shadow-lg"
          )}
        >
          <div className="overflow-hidden">
            <ul className="mx-auto mt-2 flex max-w-7xl flex-col gap-1 px-4 sm:px-6 pb-3">
              {LINKS.map(({ href, label }) => {
                const active =
                  pathname === href ||
                  (href !== "/" && pathname?.startsWith(href));
                return (
                  <li key={href}>
                    <Link
                      href={href}
                      className={cx(
                        "group relative block rounded-md px-3 py-2 transition-colors",
                        brandTxt,
                        active && "bg-black/5"
                      )}
                    >
                      <span className="relative">
                        {label}
                        <span
                          className={cx(
                            "pointer-events-none absolute -bottom-1 left-0 h-[2px] w-full origin-left bg-current",
                            "transition-transform duration-300 ease-out",
                            active
                              ? "scale-x-100"
                              : "scale-x-0 group-hover:scale-x-100"
                          )}
                        />
                      </span>
                    </Link>
                  </li>
                );
              })}

              {/* Mobile CTA */}
              <li>
                <button
                  onClick={openCalendly}
                  className={cx(
                    "mt-3 w-full rounded-full px-4 py-3 text-center text-white",
                    brandBg,
                    "shadow hover:opacity-95 active:translate-y-px transition"
                  )}
                >
                  Book a free Call
                </button>
              </li>
            </ul>
          </div>
        </div>
      </nav>

      {/* Inline Calendly Modal */}
      {inlineOpen && (
        <div
          ref={overlayRef}
          className="fixed inset-0 z-[60] flex items-center justify-center bg-black/60 backdrop-blur-sm"
          onClick={(e) => {
            if (e.target === overlayRef.current) closeInlineCalendly();
          }}
        >
          <div className="relative w-[94vw] max-w-5xl rounded-2xl border border-neutral-200 bg-white shadow-[0_6px_30px_rgba(0,0,0,0.25)]">
            <button
              aria-label="Close"
              onClick={closeInlineCalendly}
              className="absolute right-3 top-3 rounded-full bg-black/5 px-3 py-1 text-sm text-neutral-700 hover:bg-black/10"
            >
              ✕
            </button>
            <div className="h-[75vh] min-h-[560px]">
              <iframe
                title="Book a 30 Minute Meeting – Calendly"
                src={CALENDLY_URL}
                className="h-full w-full rounded-2xl"
                frameBorder="0"
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
              />
            </div>
            <p className="pb-3 pt-2 text-center text-xs text-neutral-500">
              Scheduling provided by Calendly.
            </p>
          </div>
        </div>
      )}

      {/* CTA shimmer fill */}
      <style jsx global>{`
        @keyframes navbar-fill-shine {
          0% {
            background-position: -200% 0;
          }
          100% {
            background-position: 200% 0;
          }
        }
        .cta-shine {
          background: linear-gradient(
            110deg,
            var(--brand, ${BRAND}) 0%,
            var(--brand, ${BRAND}) 40%,
            #4a67c5 50%,
            var(--brand, ${BRAND}) 60%,
            var(--brand, ${BRAND}) 100%
          );
          background-size: 200% 100%;
        }
        @media (hover: hover) and (pointer: fine) {
          .cta-shine:hover {
            animation: navbar-fill-shine 2s linear infinite;
          }
        }
        @media (prefers-reduced-motion: reduce) {
          .cta-shine {
            animation: none !important;
            background-position: 0 0 !important;
          }
        }
      `}</style>
    </>
  );
}
