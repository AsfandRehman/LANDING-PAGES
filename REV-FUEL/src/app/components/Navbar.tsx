"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { Menu, X } from "lucide-react";

type NavItem = { label: string; href: string };
type Props = {
  logoSrc?: string;
  logoAlt?: string;
  items?: NavItem[];
  cta?: { label: string; href: string };
};

export default function PillNavbar({
  items = [
    { label: "About", href: "/#about" },
    { label: "How It Works", href: "/#steps" },
    { label: "Testimonials", href: "/#testimonial" },
    { label: "Get Coached", href: "#cta" },
  ],
  cta = { label: "Book Session", href: "#cta" },
}: Props) {
  const [open, setOpen] = useState(false);
  const pathname = usePathname();

  useEffect(() => setOpen(false), [pathname]);

  useEffect(() => {
    if (!open) return;
    const prev = document.body.style.overflow;
    document.body.style.overflow = "hidden";
    return () => void (document.body.style.overflow = prev);
  }, [open]);

  const isActive = (href: string) =>
    href === "/" ? pathname === "/" : pathname.startsWith(href);

  return (
    <header
      className={[
        "fixed inset-x-0 top-4 z-50",
        "bg-transparent border-0",
        "pointer-events-none",
      ].join(" ")}
      role="banner"
      aria-label="Primary"
    >
      <nav className="mx-auto max-w-7xl">
        {/* full width pill container */}
        <div className="mx-auto w-full max-w-7xl px-3 md:px-6 pointer-events-auto">
          <div
            className={[
              "pill-navbar__shell on-hero-shell",
              "grid grid-cols-[auto_1fr_auto] items-center gap-1 md:gap-3",
              "px-4 md:px-6 py-3 md:py-3.5", // restored height + padding
            ].join(" ")}
          >
            {/* Brand */}
            <Link
              href="/"
              className="flex items-center gap-2 rounded-full focus:outline-none focus-visible:ring-2 focus-visible:ring-white/40"
              aria-label="Stratos"
            >
              <span className="text-lg md:text-xl font-bold tracking-wide text-white">
                RavFuel
              </span>
            </Link>

            {/* Center links */}
            <ul className="hidden md:flex items-center justify-center gap-2">
              {items.map((item) => {
                const active = isActive(item.href);
                return (
                  <li key={item.href}>
                    <Link
                      href={item.href}
                      className={[
                        "group inline-flex items-center rounded-full px-3 py-2 text-sm font-medium transition",
                        "focus:outline-none focus-visible:ring-2 focus-visible:ring-white/40",
                        active
                          ? "text-white bg-white/15"
                          : "text-white/80 hover:text-white hover:bg-white/10",
                      ].join(" ")}
                      aria-current={active ? "page" : undefined}
                    >
                      <span className="relative">
                        {item.label}
                        <span
                          className={[
                            "nav-underline-red",
                            active ? "scale-x-100" : "group-hover:scale-x-100",
                          ].join(" ")}
                        />
                      </span>
                    </Link>
                  </li>
                );
              })}
            </ul>

            {/* Right cluster */}
            <div className="flex items-center justify-end gap-1 md:gap-2">
              <Link
                href={cta.href}
                className="hidden sm:inline-flex items-center rounded-full px-4 py-2 text-sm font-semibold text-white relative overflow-hidden btn-animated-red group"
              >
                <span className="relative z-10">{cta.label}</span>
                <span
                  aria-hidden
                  className="pointer-events-none absolute inset-0 -translate-x-full bg-gradient-to-r from-transparent via-white/50 to-transparent group-hover:animate-shimmer"
                />
              </Link>

              {/* Mobile trigger */}
              <button
                type="button"
                onClick={() => setOpen((s) => !s)}
                className={[
                  "inline-flex h-10 w-10 items-center justify-center rounded-full border bg-white/10",
                  "border-white/15 focus:outline-none focus-visible:ring-2 focus-visible:ring-white/40 md:hidden",
                ].join(" ")}
                aria-label={open ? "Close menu" : "Open menu"}
                aria-expanded={open}
                aria-controls="mobile-nav-sheet"
              >
                {open ? <X size={18} /> : <Menu size={18} />}
              </button>
            </div>
          </div>
        </div>
      </nav>

      {/* Mobile Sheet */}
      <div
        id="mobile-nav-sheet"
        className={[
          "md:hidden transition-[max-height,opacity] duration-300 overflow-hidden mt-3",
          open ? "max-h-[80vh] opacity-100" : "max-h-0 opacity-0",
          "pointer-events-auto",
        ].join(" ")}
        aria-hidden={!open}
      >
        <div className="mx-auto max-w-7xl rounded-3xl border border-white/15 bg-white/10 backdrop-blur-xl p-2.5">
          <ul className="flex flex-col">
            {items.map((item) => {
              const active = isActive(item.href);
              return (
                <li key={item.href}>
                  <Link
                    href={item.href}
                    className={[
                      "block rounded-2xl px-4 py-3 text-[15px] font-medium transition",
                      "focus:outline-none focus-visible:ring-2 focus-visible:ring-white/40",
                      active
                        ? "bg-white/15 text-white"
                        : "text-white/90 hover:bg-white/10 hover:text-white",
                    ].join(" ")}
                  >
                    {item.label}
                  </Link>
                </li>
              );
            })}
            <li className="pt-2">
              <Link
                href={cta.href}
                className="relative overflow-hidden flex items-center justify-center rounded-2xl px-4 py-3 text-sm font-semibold text-white btn-animated-red group"
              >
                <span className="relative z-10">{cta.label}</span>
                <span
                  aria-hidden
                  className="pointer-events-none absolute inset-0 -translate-x-full bg-gradient-to-r from-transparent via-white/50 to-transparent group-hover:animate-shimmer"
                />
              </Link>
            </li>
          </ul>
        </div>
      </div>

      {/* Styles */}
      <style jsx global>{`
        .pill-navbar__shell {
          border-radius: 9999px;
          border: 1px solid rgba(255, 255, 255, 0.16);
          background: linear-gradient(
            to right,
            rgba(255, 255, 255, 0.08),
            rgba(255, 255, 255, 0.04)
          );
          box-shadow: 0 24px 64px rgba(0, 0, 0, 0.25),
            inset 0 1px 0 rgba(255, 255, 255, 0.08);
          backdrop-filter: blur(10px) saturate(150%);
          transition: background 250ms ease, box-shadow 250ms ease,
            border-color 250ms ease;
        }

        .btn-animated-red {
          background-image: linear-gradient(
            90deg,
            rgba(239, 68, 68, 1) 0%,
            rgba(220, 38, 38, 1) 50%,
            rgba(185, 28, 28, 1) 100%
          );
          box-shadow: 0 10px 20px rgba(220, 38, 38, 0.35),
            inset 0 1px 0 rgba(255, 255, 255, 0.18);
        }

        .nav-underline-red {
          position: absolute;
          left: 0;
          right: 0;
          bottom: -0.3rem;
          height: 2px;
          border-radius: 2px;
          transform-origin: left;
          transform: scaleX(0);
          transition: transform 200ms ease;
          background: linear-gradient(
            to right,
            rgba(248, 113, 113, 1),
            rgba(190, 18, 60, 1)
          );
        }

        @keyframes shimmer {
          0% {
            transform: translateX(-100%);
          }
          100% {
            transform: translateX(100%);
          }
        }
        .animate-shimmer {
          animation: shimmer 1s ease-in-out forwards;
        }
      `}</style>
    </header>
  );
}
