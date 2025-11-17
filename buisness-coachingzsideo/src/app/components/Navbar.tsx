// components/Navbar.tsx
"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useEffect, useState, useCallback } from "react";
import Script from "next/script";

declare global {
  interface Window {
    Calendly?: {
      initPopupWidget: (opts: { url: string }) => void;
      closePopupWidget?: () => void;
    };
  }
}

function cx(...c: Array<string | false | null | undefined>) {
  return c.filter(Boolean).join(" ");
}

export default function Navbar() {
  const pathname = usePathname();
  const [open, setOpen] = useState(false);

  useEffect(() => setOpen(false), [pathname]);

  // Handle Calendly blur
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

  const openCalendly = useCallback((e?: React.MouseEvent) => {
    e?.preventDefault();
    document.documentElement.classList.add("cal-blur");
    window.Calendly?.initPopupWidget({
      url: "https://calendly.com/zsideo/zsideo-content",
    });
  }, []);

  // Gradient text for brand
  const brandTxt =
    "bg-gradient-to-r from-purple-500 via-pink-500 to-blue-500 bg-clip-text text-transparent";

  // Sleek CTA button
  const ctaClasses = cx(
    "inline-flex items-center justify-center rounded-full px-6 py-2.5 text-sm font-semibold",
    "bg-gradient-to-r from-purple-600 to-blue-500",
    "text-white shadow-md hover:shadow-lg",
    "transition-transform duration-300 ease-out hover:scale-105 active:scale-95"
  );

  return (
    <>
      {/* Calendly script */}
      <Script
        src="https://assets.calendly.com/assets/external/widget.js"
        strategy="afterInteractive"
      />
      <link
        rel="stylesheet"
        href="https://assets.calendly.com/assets/external/widget.css"
      />

      <nav aria-label="Primary" className="w-full px-4">
        <div className="mx-auto flex max-w-7xl items-center justify-between px-4 py-3 sm:px-6">
          {/* Left: Logo */}
          <Link
            href="/"
            className={cx(
              "select-none text-2xl md:text-3xl font-extrabold tracking-tight",
              brandTxt
            )}
          >
            SAIM ZSIDEO
          </Link>

          {/* Right: CTA */}
          <div className="flex items-center gap-3">
            <button onClick={openCalendly} className={ctaClasses}>
              Book a Free Call
            </button>
          </div>
        </div>
      </nav>
    </>
  );
}
