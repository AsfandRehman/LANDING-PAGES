"use client";

import { useState } from "react";
import FloatingCtaBar from "./FloatingCtaBar";
export default function Hero() {
  const [playing, setPlaying] = useState(true);

  return (
    <section className="relative w-full h-screen overflow-hidden bg-[var(--background)]">
      <div className="absolute inset-0 w-full h-full">
        <VideoSlide playing={playing} setPlaying={setPlaying} />
      </div>
    </section>
  );
}
function VideoSlide({
 
}: {
  playing: boolean;
  setPlaying: (p: boolean) => void;
}) {
  return (
    <div className="relative w-full h-full">
      {/* === Background Video === */}
      <video
        src="/videos/bgvid.mp4"
        autoPlay
        loop
        muted
        playsInline
        className="absolute inset-0 w-full h-full object-cover"
      />

      {/* === Dark Overlay === */}
      <div className="absolute inset-0 bg-[rgba(2,1,0,0.8)]" />

      {/* === Foreground Content over video === */}
      <div className="relative z-10 flex flex-col justify-between h-full px-6 md:px-24 py-10 pointer-events-none">
        {/* Hero Text Block */}
        <div className="mt-24 max-w-3xl pointer-events-auto">
          <h1 className="text-5xl md:text-8xl font-bold font-cinzel tracking-wide uppercase leading-tight text-[var(--primary)]">
            Canela
          </h1>
          <p className="font-cormorant text-2xl md:text-3xl text-[var(--accent)] italic mt-2">
            No liars were harmed during the making of this song
          </p>
        </div>

        {/* CTA on top of video */}
        <div className="pointer-events-auto">
          <FloatingCtaBar />
        </div>
      </div>
    </div>
  );
}
