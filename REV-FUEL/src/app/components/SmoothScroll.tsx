// components/SmoothScroll.tsx
"use client";

import { useEffect } from "react";
import Lenis from "@studio-freight/lenis";

// ✅ Local interface for Lenis options (based on Lenis source)
interface LenisOptions {
  duration?: number;
  easing?: (t: number) => number;
  direction?: "vertical" | "horizontal";
  gestureDirection?: "vertical" | "horizontal";
  smoothWheel?: boolean;
  touchMultiplier?: number;
  wheelMultiplier?: number;
  normalizeWheel?: boolean;
}

export default function SmoothScroll() {
  useEffect(() => {
    const isTouch = typeof window !== "undefined" && "ontouchstart" in window;

    const lenis = new Lenis({
      duration: 1.2,
      easing: (t: number) => Math.min(1, 1.001 - Math.pow(2, -10 * t)),
      direction: "vertical",
      gestureDirection: "vertical",
      smoothWheel: true,
      touchMultiplier: 1.25,
      wheelMultiplier: 1,
      normalizeWheel: true,
    } as LenisOptions); // ✅ now safely typed

    if (isTouch) {
      // Uncomment if you want to disable Lenis on touch devices
      // lenis.destroy();
      // return;
    }

    let rafId = 0;
    const raf = (time: number) => {
      lenis.raf(time);
      rafId = requestAnimationFrame(raf);
    };
    rafId = requestAnimationFrame(raf);

    return () => {
      cancelAnimationFrame(rafId);
      lenis.destroy();
    };
  }, []);

  return null;
}
