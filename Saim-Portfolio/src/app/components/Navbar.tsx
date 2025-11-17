"use client";

import Link from "next/link";
import { useEffect, useMemo, useState } from "react";
import type { JSX } from "react";

type LinkItem = { name: string; href: `#${string}` };

const LINKS: LinkItem[] = [
  { name: "Story", href: "#story" },
  { name: "Vision", href: "#vision" },
  { name: "Timeline", href: "#timeline" },
 
  { name: "Connect", href: "#cta" },
];

export default function Navbar(): JSX.Element {
  const [scrolled, setScrolled] = useState(false);
  const [activeHash, setActiveHash] = useState<string>("");
  const [menuOpen, setMenuOpen] = useState(false);
  const [progress, setProgress] = useState(0);

  const sectionIds = useMemo(() => LINKS.map(l => l.href.slice(1)), []);

  // Header style + page progress
  useEffect(() => {
    const onScroll = () => {
      const y = window.scrollY;
      setScrolled(y > 8);

      const doc = document.documentElement;
      const max = doc.scrollHeight - window.innerHeight;
      setProgress(max > 0 ? Math.min(100, (y / max) * 100) : 0);
    };
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  // Scroll spy with IntersectionObserver
  useEffect(() => {
    const els = sectionIds
      .map(id => document.getElementById(id))
      .filter((el): el is HTMLElement => Boolean(el));

    if (els.length === 0) return;

    const observer = new IntersectionObserver(
      entries => {
        // Pick the most visible section
        const visible = entries
          .filter(e => e.isIntersecting)
          .sort((a, b) => (b.intersectionRatio ?? 0) - (a.intersectionRatio ?? 0))[0];

        if (visible?.target?.id) {
          setActiveHash(`#${visible.target.id}`);
        }
      },
      {
        root: null,
        rootMargin: "-45% 0px -45% 0px", // center‑biased
        threshold: [0, 0.25, 0.5, 0.75, 1],
      }
    );

    els.forEach(el => observer.observe(el));
    return () => observer.disconnect();
  }, [sectionIds]);

  // Respect hash changes (e.g., direct links)
  useEffect(() => {
    const onHash = () => setActiveHash(window.location.hash);
    window.addEventListener("hashchange", onHash);
    onHash();
    return () => window.removeEventListener("hashchange", onHash);
  }, []);

  const handleSmoothScroll = (href: string) => (e: React.MouseEvent) => {
    if (!href.startsWith("#")) return;
    e.preventDefault();
    const id = href.slice(1);
    const el = document.getElementById(id);
    if (el) {
      el.scrollIntoView({ behavior: "smooth", block: "start" });
      history.pushState(null, "", href);
      setMenuOpen(false);
    }
  };

  return (
    <header
      className={`fixed inset-x-0 top-0 z-50 transition-all duration-300 ${
        scrolled ? "backdrop-blur-md bg-black/30" : "bg-transparent"
      }`}
      role="banner"
    >
      {/* Progress bar */}
      <div
        aria-hidden="true"
        className="pointer-events-none absolute left-0 top-0 h-[2px] w-full bg-transparent"
      >
        <div
          className="h-[2px] origin-left bg-gradient-to-r from-white/80 to-white/40 transition-[width]"
          style={{ width: `${progress}%` }}
        />
      </div>

      <div className="mx-auto flex h-20 max-w-7xl items-center justify-between px-4 sm:px-6">
        {/* Logo */}
        <Link
          href="/"
          aria-label="ZSIDEO — Home"
          className="select-none text-lg sm:text-xl font-semibold tracking-tight text-white"
        >
          Saim Ali Ahmad
        </Link>

        {/* Center glass pill */}
        <nav aria-label="Primary" className="hidden md:block">
          <ul className="flex items-center gap-8 rounded-full border border-white/15 bg-white/5 px-8 py-3 backdrop-blur supports-[backdrop-filter]:bg-white/5">
            {LINKS.map(item => {
              const isActive = activeHash === item.href;
              return (
                <li key={item.name} className="relative group">
                  <Link
                    href={item.href}
                    onClick={handleSmoothScroll(item.href)}
                    aria-current={isActive ? "page" : undefined}
                    className={`text-[13px] font-semibold uppercase tracking-[0.14em] transition-colors ${
                      isActive ? "text-white" : "text-white/80 hover:text-white"
                    }`}
                  >
                    {item.name}
                  </Link>
                  <span
                    className={`absolute left-0 right-0 -bottom-2 mx-auto h-[2px] rounded-full bg-white transition-all duration-300 ${
                      isActive ? "w-full" : "w-0 group-hover:w-full"
                    }`}
                  />
                </li>
              );
            })}
          </ul>
        </nav>

        {/* CTA */}
        <Link
          href="https://www.zsideocontentllc.com/"
          onClick={handleSmoothScroll("#connect")}
          className="group inline-flex items-center rounded-full border border-white/15 bg-white/10 px-5 py-2 text-sm font-semibold text-white backdrop-blur transition-all hover:bg-white/15 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-white"
        >
          <span className="translate-y-px">Work With Saim</span>
          <span className="ml-2 inline-block h-1.5 w-1.5 rounded-full bg-white transition-transform group-hover:translate-x-0.5" />
        </Link>

        {/* Mobile menu button */}
        <button
          type="button"
          aria-label="Open menu"
          aria-controls="mobile-menu"
          aria-expanded={menuOpen}
          onClick={() => setMenuOpen(v => !v)}
          className="md:hidden inline-flex h-10 w-10 items-center justify-center rounded-full border border-white/15 bg-white/10 text-white backdrop-blur transition-colors hover:bg-white/15 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-white"
        >
          <span className="sr-only">Toggle menu</span>
          <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
            <path d="M4 7h16M4 12h16M4 17h16" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" />
          </svg>
        </button>
      </div>

      {/* Mobile drawer */}
      <div
        id="mobile-menu"
        className={`md:hidden fixed inset-0 z-40 bg-black/70 backdrop-blur-sm transition-opacity ${
          menuOpen ? "opacity-100 pointer-events-auto" : "opacity-0 pointer-events-none"
        }`}
        onClick={() => setMenuOpen(false)}
      >
        <div
          className={`absolute right-3 top-3 w-[86%] max-w-xs rounded-2xl border border-white/15 bg-[#0B0B10]/95 p-6 shadow-xl transition-transform ${
            menuOpen ? "translate-y-0" : "-translate-y-4"
          }`}
          onClick={e => e.stopPropagation()}
        >
          <div className="mb-4 flex items-center justify-between">
            <div className="text-base font-semibold text-white">Menu</div>
            <button
              type="button"
              aria-label="Close menu"
              onClick={() => setMenuOpen(false)}
              className="inline-flex h-9 w-9 items-center justify-center rounded-full border border-white/15 bg-white/10 text-white hover:bg-white/15"
            >
              <svg width="18" height="18" viewBox="0 0 24 24" fill="none" aria-hidden="true">
                <path d="M6 6l12 12M18 6l-12 12" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" />
              </svg>
            </button>
          </div>

          <ul className="space-y-2">
            {LINKS.map(item => {
              const isActive = activeHash === item.href;
              return (
                <li key={item.name}>
                  <Link
                    href={item.href}
                    onClick={handleSmoothScroll(item.href)}
                    className={`block rounded-xl px-4 py-3 text-sm font-semibold uppercase tracking-[0.14em] transition-colors ${
                      isActive ? "bg-white/10 text-white" : "text-white/80 hover:text-white hover:bg-white/5"
                    }`}
                  >
                    {item.name}
                  </Link>
                </li>
              );
            })}
          </ul>

          <div className="mt-4 border-t border-white/10 pt-4">
            <Link
              href="#connect"
              onClick={handleSmoothScroll("#connect")}
              className="block rounded-xl border border-white/15 bg-white/10 px-4 py-3 text-center text-sm font-semibold text-white hover:bg-white/15"
            >
              Work With Saim
            </Link>
          </div>
        </div>
      </div>
    </header>
  );
}
