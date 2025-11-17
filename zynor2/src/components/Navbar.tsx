"use client";

import { useState, useEffect } from "react";
import Link from "next/link";

const PURPLE = "#6c1898";

export default function Navbar() {
  const [mobileOpen, setMobileOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  // detect scroll to switch to solid background if desired
  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 30);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <header
      className={`fixed top-0 z-50 w-full transition-all duration-300 ${
        scrolled
          ? "bg-[#6c1898] border-b border-white/10 shadow-md"
          : "bg-transparent"
      }`}
      style={{
        borderBottomLeftRadius: scrolled ? "1.5rem" : "0rem",
        borderBottomRightRadius: scrolled ? "1.5rem" : "0rem",
      }}
    >
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="flex h-16 items-center justify-between">
          {/* Logo */}
          <div className="flex items-center">
            <Link href="/" className="flex items-center">
              <h1 className="text-3xl font-bold tracking-tight text-white">
                Zynor.
              </h1>
            </Link>
          </div>

         

          {/* Desktop Nav */}
          <nav className="hidden lg:flex lg:items-center lg:gap-6">
            {[
              ["Home", "#top"],
              ["Services", "#services"],
              ["Courses", "#courses"],
              ["Team", "#team"],
              ["Events", "#events"],
            ].map(([label, href]) => (
              <Link
                key={label}
                href={href}
                className="text-m font-medium text-white hover:text-gray-200 transition-colors"
              >
                {label}
              </Link>
            ))}

            <Link
              href="#contact"
              className="inline-flex items-center rounded-full border border-transparent px-4 py-2 text-m font-semibold text-[#6c1898] bg-white shadow-sm hover:opacity-90 transition"
              style={{
                boxShadow: "0 12px 24px rgba(255,255,255,0.2)",
              }}
            >
              Register Now!
            </Link>
          </nav>

          {/* Mobile Menu Button */}
          <button
            className="lg:hidden inline-flex items-center rounded-md border border-white/40 bg-transparent px-3 py-2 text-sm font-medium text-white hover:bg-white/10 active:scale-[0.98] transition"
            onClick={() => setMobileOpen((o) => !o)}
            aria-label="Toggle menu"
          >
            <span className="mr-2">Menu</span>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-4 w-4 text-white"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
              strokeWidth={2}
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M4 6h16M4 12h16M4 18h16"
              />
            </svg>
          </button>
        </div>

        {/* Mobile dropdown */}
        {mobileOpen && (
          <div className="lg:hidden pb-6 px-3 border-t border-white/20 bg-[#6c1898]/95 backdrop-blur-md">
          

            <div className="mt-4 flex flex-col gap-3 text-white">
              {[
                ["Home", "#top"],
                ["Services", "#services"],
                ["Courses", "#courses"],
                ["Team", "#team"],
                ["Events", "#events"],
              ].map(([label, href]) => (
                <Link
                  key={label}
                  href={href}
                  className="text-sm font-medium hover:text-gray-200 transition-colors"
                  onClick={() => setMobileOpen(false)}
                >
                  {label}
                </Link>
              ))}

              <Link
                href="#contact"
                className="mt-3 inline-flex w-max items-center rounded-full border border-transparent px-4 py-2 text-sm font-semibold text-[#6c1898] bg-white shadow-sm hover:opacity-90 transition"
                onClick={() => setMobileOpen(false)}
              >
                Register Now!
              </Link>
            </div>
          </div>
        )}
      </div>
    </header>
  );
}
