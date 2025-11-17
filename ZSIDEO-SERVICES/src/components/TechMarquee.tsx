"use client";

import Image from "next/image";

const logos = [
  { src: "/images/tech.jpg", alt: "Node.js" },
  { src: "/images/tech.jpg", alt: "React" },
  { src: "/images/tech.jpg", alt: "Xamarin" },
  { src: "/images/tech.jpg", alt: "Shopify" },
  { src: "/images/tech.jpg", alt: "Vue.js" },
  { src: "/images/tech.jpg", alt: "PHP" },
  { src: "/images/tech.jpg", alt: "Angular" },
];

export default function TechMarquee() {
  return (
    <section className="relative overflow-hidden py-16 bg-white">
      {/* Heading */}
      <div className="text-center mb-10">
        <h2 className="text-5xl font-extrabold text-gray-900">
          Your Potential, <span className="text-blue-600">Our Mission</span>
        </h2>
        <p className="text-gray-600 text-2xl font-bold mt-2">
          We Transform Imaginations Into Reality
        </p>
      </div>

      {/* Marquee container */}
      <div className="relative w-full overflow-hidden">
        <div className="flex animate-marquee space-x-16">
          {logos.concat(logos).map((logo, idx) => (
            <div key={idx} className="flex-shrink-0 w-48 h-42 relative">
              <Image
                src={logo.src}
                alt={logo.alt}
                fill
                className="object-contain"
              />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
