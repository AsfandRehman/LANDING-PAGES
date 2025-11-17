"use client";

import React, { useEffect, useRef } from "react";

type Props = {
  children: React.ReactNode;
  intensity?: number;
  offsetY?: string; // how much to drop the yellow panel (e.g. "40vh")
  contentHidden?: boolean; // fades inner scroll content out/in
  onOffsetTransitionEnd?: () => void; // fires when panel shift finishes
};

export default function ParallaxBackdrop({
  children,
  intensity = 0.15,
  offsetY = "0px",
  contentHidden = false,
  onOffsetTransitionEnd,
}: Props) {
  const decorationRef = useRef<HTMLDivElement | null>(null);
  const yellowPanelRef = useRef<HTMLDivElement | null>(null);

  // parallax shimmer
  useEffect(() => {
    const el = decorationRef.current;
    if (!el) return;
    let rafId = 0;
    const onScroll = () => {
      const frame = document.getElementById("content-scroll-frame");
      const base = frame ? frame.scrollTop : window.scrollY;
      const translate = Math.max(-200, Math.min(200, base * intensity));
      el.style.transform = `translate3d(0, ${translate}px, 0)`;
    };
    const loop = () => {
      onScroll();
      rafId = requestAnimationFrame(loop);
    };
    rafId = requestAnimationFrame(loop);
    return () => cancelAnimationFrame(rafId);
  }, [intensity]);

  // apply controlled vertical shift
  useEffect(() => {
    if (!yellowPanelRef.current) return;
    yellowPanelRef.current.style.transform = `translate3d(0, ${offsetY}, 0)`;
  }, [offsetY]);

  // notify when the shift animation completes
  useEffect(() => {
    const el = yellowPanelRef.current;
    if (!el || !onOffsetTransitionEnd) return;
    const handler = (e: TransitionEvent) => {
      if (e.propertyName === "transform") onOffsetTransitionEnd();
    };
    el.addEventListener("transitionend", handler);
    return () => el.removeEventListener("transitionend", handler);
  }, [onOffsetTransitionEnd]);

  return (
    <div className="relative">
      {/* FIXED YELLOW BACKDROP */}
      <div className="pointer-events-none fixed inset-0 z-0 flex items-center justify-center">
        <div
          ref={yellowPanelRef}
          className="relative w-[99vw] h-[98vh] rounded-3xl overflow-hidden
                     transition-transform duration-500 ease-[cubic-bezier(.22,.61,.36,1)]"
        >
          <div className="absolute inset-0 bg-yellow-400" />
          <div
            ref={decorationRef}
            className="absolute inset-0 will-change-transform"
            style={{
              background:
                "radial-gradient(120% 120% at 50% 20%, rgba(255,255,255,0.25) 0%, rgba(255,255,255,0) 60%), linear-gradient(180deg, rgba(0,0,0,0.06) 0%, rgba(0,0,0,0) 60%)",
              mixBlendMode: "soft-light",
            }}
          />
        </div>
      </div>

      {/* FIXED CLIPPED FRAME */}
      <div className="fixed inset-0 z-10 flex items-center justify-center">
        <div
          id="content-scroll-frame"
className="w-[99vw] h-[98vh] rounded-3xl overflow-hidden overscroll-contain bg-transparent"
        >
          <div className="h-full w-full overflow-y-auto overflow-x-hidden no-scrollbar">
            <div
              className={`min-h-full w-full px-6 py-8 md:px-10 md:py-12 transition-opacity duration-250 ${
                contentHidden ? "opacity-0 pointer-events-none" : "opacity-100"
              }`}
              style={{ transitionDuration: "250ms" }}
            >
              {children}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
