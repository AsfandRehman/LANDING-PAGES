'use client';

import { useEffect, useRef, useState } from 'react';
import { useInView } from 'framer-motion';

const stats = [
  { value: 60, label: 'Happy Clients' },
  { value: 120, label: 'Projects Completed' },
  { value: 55, label: 'Awards Won' },
  { value: 100, label: 'Team Members' },
];

export default function CounterSection() {
  const ref = useRef<HTMLDivElement>(null);
  const inView = useInView(ref, { once: true });
  const [hasStarted, setHasStarted] = useState(false);
  const [counts, setCounts] = useState(stats.map(() => 0));

  useEffect(() => {
    if (inView && !hasStarted) {
      setHasStarted(true);

      const duration = 1200;
      const steps = 30;
      const interval = duration / steps;
      let currentStep = 0;

      const intervalId = setInterval(() => {
        currentStep++;
        setCounts(
          stats.map((stat) =>
            Math.floor((stat.value * currentStep) / steps)
          )
        );
        if (currentStep >= steps) clearInterval(intervalId);
      }, interval);
    }
  }, [inView, hasStarted]);

  return (
    <section
      id="stats"
      ref={ref}
      className="relative w-full bg-gradient-to-br from-white to-blue-50 py-28 px-6 sm:px-10 lg:px-20"
    >
      {/* Heading */}
      <div className="max-w-4xl mx-auto text-center mb-20">
        <h2 className="text-4xl sm:text-5xl lg:text-6xl font-light text-gray-900 leading-tight tracking-tight">
          Our Journey in <span className="text-blue-600 italic font-bold">Numbers</span>
        </h2>
        <p className="mt-6 text-lg sm:text-xl font-light text-gray-700">
          These aren’t just numbers — they’re stories of trust, success, and impact.
        </p>
      </div>

      {/* Counter Box */}
      <div className="max-w-7xl mx-auto bg-white/90 border border-white/30 shadow-[0_20px_40px_rgba(0,0,0,0.1),0_0_0_1px_rgba(0,0,0,0.04)] backdrop-blur-md rounded-3xl overflow-hidden">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-y-12 text-center py-20 px-6 sm:px-12">
          {stats.map((stat, index) => (
            <div key={stat.label}>
              <p className="text-4xl sm:text-5xl font-semibold text-blue-600 transition-all duration-300">
                {counts[index]}+
              </p>
              <p className="mt-2 text-sm sm:text-base font-light text-gray-800">
                {stat.label}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
