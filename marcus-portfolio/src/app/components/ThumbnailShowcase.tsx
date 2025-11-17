// components/ThumbnailShowcase.tsx
"use client";

import Carousel3DImages from "./Carousel3DImages";

const thumbnails = [
  { id: 1, src: "/gallery/1.jpg", alt: "Work 1" },
  { id: 2, src: "/gallery/2.jpg", alt: "Work 2" },
  { id: 3, src: "/gallery/3.jpg", alt: "Work 3" },
  { id: 4, src: "/gallery/4.jpg", alt: "Work 4" },
  { id: 5, src: "/gallery/5.jpg", alt: "Work 5" },
  { id: 6, src: "/gallery/6.jpg", alt: "Work 6" },
  { id: 7, src: "/gallery/7.jpg", alt: "Work 7" },
  { id: 8, src: "/gallery/8.jpg", alt: "Work 8" },
  { id: 9, src: "/gallery/9.jpg", alt: "Work 9" },

];

export default function ThumbnailShowcase() {
  const carH = 600;

  return (
    <section
      className="
        relative isolate w-screen max-w-none overflow-hidden bg-white
        flex flex-col items-center justify-center
        min-h-screen py-0 -mx-4 sm:-mx-6 lg:-mx-8
      "
      id="thumbnailshowcase"
    >
      {/* Heading */}
      <header className="z-10 w-full text-center mb-10">
        <h2
          className="
            mx-auto text-[9vw] md:text-5xl lg:text-7xl
            font-semibold leading-[0.95] tracking-tight text-neutral-900
          "
        >
          Our Work
        </h2>
      </header>

      {/* Carousel */}
      <div
        className="relative w-screen max-w-none flex items-center justify-center overflow-visible"
        style={{ height: `${carH}px` }}
      >
       <Carousel3DImages
  items={thumbnails}
  speedSec={20}
  overlapPx={16}
  cardWidth={320}     // wider
  cardHeight={560}    // taller (≈ 70–80vh feel in a row)
  radiusClass="rounded-2xl shadow-xl"
/>

      </div>
    </section>
  );
}
