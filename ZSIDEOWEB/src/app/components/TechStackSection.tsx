'use client';

import Image from 'next/image';
import { useRef } from 'react';

const techs = [
  { name: 'HTML5', src: '/tech/html.png' },
  { name: 'CSS3', src: '/tech/css.png' },
  { name: 'JavaScript', src: '/tech/javascript.svg' },
  { name: 'TypeScript', src: '/tech/typescript.png' },
  { name: 'React', src: '/tech/react.svg' },
  { name: 'Next.js', src: '/tech/next.svg' },
  { name: 'TailwindCSS', src: '/tech/tailwind.png' },
  { name: 'Node.js', src: '/tech/node.png' },
  { name: 'Firebase', src: '/tech/firebase.png' },
  { name: 'Webflow', src: '/tech/webflow.svg' },
  { name: 'WordPress', src: '/tech/wordpress.png' },
  { name: 'Vercel', src: '/tech/vercel.svg' },
  { name: 'DJango', src: '/tech/django.svg' }
];

const duplicatedTechs = [...techs, ...techs];

export default function TechStackSection() {
  const scrollRef = useRef<HTMLDivElement>(null);

  return (
    <section
      id="tech-stack"
      className="relative w-full bg-gradient-to-tr from-[#f9f9ff] via-white to-[#e8f1ff] py-24 overflow-x-hidden min-h-screen"
    >
      {/* Heading */}
      <div className="relative z-10 max-w-5xl mx-auto text-center px-6">
        <h2 className="text-4xl md:text-6xl font-light text-gray-900 leading-tight tracking-tight mt-10 mb-20">
          Forged by <span className="text-blue-600 font-bold">World-Class Tech</span>
        </h2>
        <p className="mt-6 text-lg sm:text-xl text-gray-600 font-light max-w-3xl mx-auto">
          A future-proof stack that blends performance, scalability, and creativity — for brands who never settle.
        </p>
      </div>

      {/* Scrolling Tech Icons */}
      <div className="relative mt-60 overflow-hidden w-full">
        <div
          ref={scrollRef}
          className="flex gap-10 animate-marquee whitespace-nowrap px-6"
          aria-label="Technology icons carousel"
        >
          {duplicatedTechs.map((tech, index) => (
            <div
              key={`${tech.name}-${index}`}
              className="flex flex-col items-center min-w-[110px] group transition-transform hover:scale-110"
            >
              <div className="w-24 h-24 sm:w-28 sm:h-28 flex items-center justify-center bg-white border border-gray-200 shadow-lg rounded-2xl transition-colors group-hover:shadow-blue-200">
                <Image
                  src={tech.src}
                  alt={`${tech.name} logo`}
                  width={56}
                  height={56}
                  className="object-contain"
                />
              </div>
              <span className="mt-2 text-sm text-gray-700 font-medium">{tech.name}</span>
            </div>
          ))}
        </div>
      </div>

      {/* Blur Gradient Accent */}
      <div className="absolute top-0 left-0 w-[40vw] h-[40vw] bg-blue-400/10 rounded-full blur-3xl -z-10 animate-pulse-slow" />
    </section>
  );
}
