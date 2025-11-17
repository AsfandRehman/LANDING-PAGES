// components/BrandIcon.tsx
"use client";
import * as React from "react";
// Simple Icons exports brand SVG data (path + viewBox)
import { siInstagram, siYoutube, siTiktok } from "simple-icons/icons";

type Brand = "instagram" | "youtube" | "tiktok";

const MAP: Record<Brand, { path: string; viewBox: string }> = {
  instagram: { path: siInstagram.path, viewBox: "0 0 24 24" },
  youtube: { path: siYoutube.path, viewBox: "0 0 24 24" },
  tiktok: { path: siTiktok.path, viewBox: "0 0 24 24" },
};

/** Minimal, Lucide‑like SVG wrapper so it feels native in your UI */
export function BrandIcon({
  name,
  className = "h-4 w-4",
  title,
  ariaLabel,
}: {
  name: Brand;
  className?: string;
  title?: string;
  ariaLabel?: string;
}) {
  const ico = MAP[name];
  return (
    <svg
      role="img"
      aria-label={ariaLabel || name}
      viewBox={ico.viewBox}
      className={className}
      fill="currentColor"
      focusable="false"
    >
      {title ? <title>{title}</title> : null}
      <path d={ico.path} />
    </svg>
  );
}
