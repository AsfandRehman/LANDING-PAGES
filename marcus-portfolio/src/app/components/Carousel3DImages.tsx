"use client";

import { useEffect, useRef } from "react";

type CarouselItem = { id: number; src: string; alt: string };

type Carousel3DImagesProps = {
  items: CarouselItem[];
  /** total loop time (seconds) */
  speedSec?: number;
  /** negative overlap between cards (px) */
  overlapPx?: number;
  /** tailwind radius classes */
  radiusClass?: string;
  /** width of each card in px (default 280) */
  cardWidth?: number;
  /** height of each card in px (default 480) */
  cardHeight?: number;
  /** gap between cards before overlap is applied (px) */
  gapPx?: number;
};

export default function Carousel3DImages({
  items,
  speedSec = 24,
  overlapPx = 12,
  radiusClass = "rounded-2xl",
  cardWidth = 280,     // was 192 (w-48). Increased
  cardHeight = 480,    // was 256 (h-64). Increased
  gapPx = 16,
}: Carousel3DImagesProps) {
  const containerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const el = containerRef.current;
    if (!el) return;
    el.style.animation = `scroll ${speedSec}s linear infinite`;
  }, [speedSec, items.length]);

  // Duplicate items for seamless loop
  const duplicatedItems = [...items, ...items];

  // Each card contributes (cardWidth - overlapPx) to the total visible span
  const stride = Math.max(1, cardWidth - overlapPx);
  const totalWidth = duplicatedItems.length * stride + overlapPx;

  return (
    <div className="relative w-full overflow-hidden">
      <div
        ref={containerRef}
        className="flex items-center"
        style={{ width: `${totalWidth}px`, gap: `${gapPx}px` }}
      >
        {duplicatedItems.map((item, index) => (
          <div
            key={`${item.id}-${index}`}
            className={`flex-shrink-0 overflow-hidden bg-neutral-200 ${radiusClass}`}
            style={{
              width: `${cardWidth}px`,
              height: `${cardHeight}px`,
              marginRight: `-${overlapPx}px`,
            }}
          >
            <img
              src={item.src}
              alt={item.alt}
              className="h-full w-full object-cover"
              loading="lazy"
            />
          </div>
        ))}
      </div>

      <style jsx>{`
        @keyframes scroll {
          0% { transform: translateX(0); }
          100% { transform: translateX(-50%); }
        }
      `}</style>
    </div>
  );
}
