'use client';

import MagicBento from './MagicBento/MagicBento';

export default function ServicesSection() {
  return (
    <section className="w-full min-h-screen flex flex-col overflow-x-hidden justify-center items-center px-4 py-32 bg-white relative">
      <div className="text-center mb-20">
        <h2 className="text-4xl sm:text-6xl lg:text-7xl font-light leading-tight text-black tracking-tight max-w-4xl mx-auto">
          From <span className="text-blue-600 font-semibold italic">Concept</span> to <span className="text-blue-600 font-semibold italic">Conversions</span>
        </h2>
        <p className="mt-6 text-lg sm:text-xl font-light text-black max-w-xl mx-auto">
          Zsideo builds, hosts, and manages your site like a full-time tech team.
        </p>
      </div>

      <MagicBento
        glowColor="255, 255, 255"
        enableSpotlight
        enableBorderGlow
        enableStars
        enableTilt
        clickEffect
        enableMagnetism
      />
    </section>
  );
}
