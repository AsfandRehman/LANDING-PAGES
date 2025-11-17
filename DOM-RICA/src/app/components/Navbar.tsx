"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { Menu, X } from "lucide-react";
import Image from "next/image";

type NavItem = { label: string; href: string };
type Props = {
  logoSrc?: string;
  logoAlt?: string;
  items?: NavItem[];
  cta?: { label: string; href: string };
};

export default function PillNavbar({
  items = [
    { label: "Home", href: "#hero" },
    { label: "About", href: "#about" },
    { label: "How It Works", href: "#steps" },
    { label: "Testimonials", href: "#testimonials" },
    { label: "Get Coached", href: "#cta" },
  ],
  cta = { label: "Book Session", href: "#cta" },
  logoSrc = "/images/log.png",
  logoAlt = "",
}: Props) {
  const [open, setOpen] = useState(false);
  const pathname = usePathname();

  // close mobile sheet on route change
  useEffect(() => setOpen(false), [pathname]);

  // lock body scroll when mobile menu open
  useEffect(() => {
    if (!open) return;
    const prev = document.body.style.overflow;
    document.body.style.overflow = "hidden";
    return () => {
      document.body.style.overflow = prev;
    };
  }, [open]);

  const isActive = (href: string) =>
    href === "/" ? pathname === "/" : pathname.startsWith(href);

  return (
    <header
      className="pill-navbar fixed inset-x-0 top-0 z-50 is-glassy"
      role="banner"
      aria-label="Primary"
    >
      <nav className="mx-auto max-w-7xl transition-[filter,background,box-shadow,border-color] duration-300 will-change-[filter,background]">
        <div className="pill-navbar__shell">
          <div className="grid grid-cols-[auto_1fr_auto] items-center gap-1 md:gap-3 px-2.5 py-2 md:px-4 md:py-2.5">
            {/* Logo */}
            <Link
              href="/"
              className="flex items-center gap-2 rounded-full focus:outline-none focus-visible:ring-2 focus-visible:ring-white/40"
              aria-label="Stratos"
            >
             
              <span className="text-lg md:text-xl font-bold tracking-wide text-white">
                Stratos
              </span>
            </Link>

            {/* Center links */}
            <ul className="hidden md:flex items-center justify-center gap-1">
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
                            "nav-underline",
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
              {/* Desktop CTA */}
              <Link
                href={cta.href}
                className="hidden sm:inline-flex items-center rounded-full px-4 py-2 text-sm font-semibold text-white relative overflow-hidden btn-animated-bg"
              >
                <span className="relative z-10">{cta.label}</span>
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
          "md:hidden transition-[max-height,opacity] duration-300 overflow-hidden",
          open ? "max-h-[80vh] opacity-100" : "max-h-0 opacity-0",
        ].join(" ")}
        aria-hidden={!open}
      >
        <div className="mt-3 mx-auto max-w-7xl rounded-3xl border border-white/15 bg-white/10 backdrop-blur-xl p-2.5">
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
                className="relative overflow-hidden flex items-center justify-center rounded-2xl px-4 py-3 text-sm font-semibold text-white btn-animated-bg"
              >
                <span className="relative z-10">{cta.label}</span>
              </Link>
            </li>
          </ul>
        </div>
      </div>
    </header>
  );
}
