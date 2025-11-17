"use client";

import React, { useEffect, useRef, useState } from "react";
import ParallaxBackdrop from "./ParallaxBackdrop";
import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";

const CONTENT_FADE_MS = 250;
const PANEL_SHIFT_MS = 500;
const OVERLAY_FADE_MS = 250;

// per-item animation length + stagger gap
const ITEM_ANIM_MS = 280;
const ITEM_STAGGER_MS = 90;

const NAV_ITEMS = [
  { label: "WORK", href: "/work" },
  { label: "SERVICES", href: "/services" },
  { label: "STUDIO", href: "/studio" },
  { label: "CONTACT", href: "/contact" },
];

export default function AppShell({ children }: { children: React.ReactNode }) {
  const [menuOpen, setMenuOpen] = useState(false); // overlay visibility (legacy flag)
  const [overlayVisible, setOverlayVisible] = useState(false); // replaces menuOpen for opacity
  const [menuStaggerOn, setMenuStaggerOn] = useState(false); // controls item drop in/out
  const [contentHidden, setContentHidden] = useState(false);
  const [offsetY, setOffsetY] = useState<string>("0px"); // panel position
  const awaitingShiftEnd = useRef<null | "open" | "close">(null);

  const pathname = usePathname();

  // scroll lock while menu is visible or during the open/close choreography
  useEffect(() => {
    const lock =
      menuOpen || contentHidden || offsetY !== "0px" || overlayVisible;
    const html = document.documentElement;
    const body = document.body;
    if (lock) {
      html.style.overflow = "hidden";
      body.style.overflow = "hidden";
    } else {
      html.style.overflow = "";
      body.style.overflow = "";
    }
  }, [menuOpen, contentHidden, offsetY, overlayVisible]);

  const handleOpen = () => {
    setContentHidden(true);
    window.setTimeout(() => {
      awaitingShiftEnd.current = "open";
      setOffsetY("70vh");
    }, CONTENT_FADE_MS);
  };

  const handleClose = () => {
    setMenuStaggerOn(false);
    window.setTimeout(() => {
      setOverlayVisible(false);
      window.setTimeout(() => {
        awaitingShiftEnd.current = "close";
        setOffsetY("0px");
      }, OVERLAY_FADE_MS);
    }, ITEM_ANIM_MS + ITEM_STAGGER_MS * 3);
  };

  // Called by ParallaxBackdrop when panel shift ends
  const onOffsetTransitionEnd = () => {
    if (awaitingShiftEnd.current === "open") {
      awaitingShiftEnd.current = null;
      setOverlayVisible(true);
      window.setTimeout(() => setMenuStaggerOn(true), 50);
    } else if (awaitingShiftEnd.current === "close") {
      awaitingShiftEnd.current = null;
      setContentHidden(false);
    }
  };

  return (
    <>
      {/* Backdrop + page content (we control fade & offset) */}
      <ParallaxBackdrop
        offsetY={offsetY}
        contentHidden={contentHidden}
        onOffsetTransitionEnd={onOffsetTransitionEnd}
      >
        {children}
      </ParallaxBackdrop>

      {/* Transparent fixed navbar */}
      <header className="fixed inset-x-0 top-0 z-30 flex items-center justify-between px-8 md:px-12 py-6 pointer-events-none">
        {/* Logo (left) */}
        <Link
          href="/"
          className="pointer-events-auto inline-flex items-center"
          aria-label="Home"
        >
          <Image
            src="/logo.png"
            alt="Brand Logo"
            width={72}
            height={72}
            className="h-16 w-16 md:h-20 md:w-20 object-contain"
            priority
          />
        </Link>

        {/* Menu button (right) – image swaps when overlay is visible */}
        <button
          className="pointer-events-auto inline-flex items-center justify-center h-16 w-16 md:h-20 md:w-20 transition-colors"
          aria-label={overlayVisible ? "Close menu" : "Open menu"}
          aria-pressed={overlayVisible}
          onClick={overlayVisible ? handleClose : handleOpen}
        >
          <span className="relative block h-8 w-8">
            <Image
              src="/menuopen.png"
              alt="Menu"
              fill
              className={`object-contain transition-all duration-500 ease-out ${
                overlayVisible ? "opacity-0 scale-95" : "opacity-100 scale-100"
              }`}
            />
            <Image
              src="/menuclose.png"
              alt="Close"
              fill
              className={`object-contain transition-all duration-500 ease-out ${
                overlayVisible
                  ? "opacity-100 rotate-90 scale-100"
                  : "opacity-0 -rotate-90 scale-95"
              }`}
            />
          </span>
        </button>
      </header>

      {/* Menu overlay (appears only after panel finishes dropping) */}
      <div
        className={`fixed inset-0 z-40 transition-opacity duration-200 ${
          overlayVisible
            ? "opacity-100 pointer-events-auto"
            : "opacity-0 pointer-events-none"
        }`}
      >
        {/* click-away */}
        <div className="absolute inset-0" onClick={handleClose} />

        {/* ====== TOP HORIZONTAL MENU (centered near top) ====== */}
        <nav
          className="absolute left-1/2 -translate-x-1/2 w-full max-w-[1400px] flex items-baseline justify-center gap-10 md:gap-16 px-8 md:px-12"
          style={{ top: "10vh" }}
        >
          {NAV_ITEMS.map(({ label, href }, i) => {
            const isActive = pathname === href;
            return (
              <Link
                key={href}
                href={href}
                prefetch
                onClick={handleClose}
                aria-current={isActive ? "page" : undefined}
                className={`
                  text-5xl md:text-7xl font-black tracking-wide drop-shadow
                  transition-all
                  ${
                    menuStaggerOn
                      ? "opacity-100 translate-y-0"
                      : "opacity-0 -translate-y-6"
                  }
                  ${isActive ? "text-rose-600" : "text-slate-900"}
                `}
                style={{
                  transitionDuration: `${ITEM_ANIM_MS}ms`,
                  transitionDelay: `${i * ITEM_STAGGER_MS}ms`,
                }}
              >
                {label}
                <span className="align-super text-rose-600"> ·</span>
              </Link>
            );
          })}
        </nav>

        {/* ====== SOCIAL LINKS (hug the cropped edge) ====== */}
        <div
          className={`absolute left-1/2 -translate-x-1/2 w-full max-w-[900px] px-8 md:px-12 text-center text-[10px] md:text-xs tracking-[0.25em] text-slate-700 transition-all duration-200 ${
            menuStaggerOn
              ? "opacity-100 translate-y-0"
              : "opacity-0 -translate-y-2"
          }`}
          style={{ top: `calc(${offsetY} - 48px)` }}
        >
          <a className="mx-4 hover:underline" href="#" onClick={handleClose}>
            LINKEDIN
          </a>
          <a className="mx-4 hover:underline" href="#" onClick={handleClose}>
            INSTAGRAM
          </a>
          <a className="mx-4 hover:underline" href="#" onClick={handleClose}>
            TWITTER
          </a>
          <a className="mx-4 hover:underline" href="#" onClick={handleClose}>
            BEHANCE
          </a>
          <a className="mx-4 hover:underline" href="#" onClick={handleClose}>
            DRIBBBLE
          </a>
        </div>
      </div>

      {/* Global FAB — matches header spacing exactly */}
      <button
        onClick={() => console.log("FAB click")}
        aria-label="Action"
        className="fixed z-50 bottom-6 right-8 md:right-12 inline-grid place-items-center h-16 w-16 md:h-20 md:w-20 rounded-full bg-black shadow-lg ring-1 ring-black/10 transition-transform hover:scale-[1.03]"
      >
        <Image
          src="/icon-pencil.svg"
          alt="Compose"
          width={28}
          height={28}
          className="opacity-95"
          priority
        />
      </button>
    </>
  );
}
