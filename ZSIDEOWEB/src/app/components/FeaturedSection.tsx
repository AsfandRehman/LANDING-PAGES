'use client';

import Image from 'next/image';
import CardSwap, { Card } from './CardSwap/CardSwap';

const FeaturedProjectsSection = () => {
  return (
    <section
      id="featured-projects"
      className="w-full min-h-screen bg-gradient-to-br from-white to-blue-50 px-6 py-24 flex items-center justify-center text-black"
    >
      <div className="max-w-7xl w-full flex flex-col-reverse md:flex-row items-center gap-16">
        {/* Right Side: Cards */}
        <div className="w-full md:w-1/2 flex justify-center items-center">
          <CardSwap
            width={400}
            height={300}
            pauseOnHover
            delay={3000}
            
          >
            {[
              { src: '/images/project1.jpg', alt: 'Creative Web App Project' },
              { src: '/images/project2.jpeg', alt: 'Modern Branding Project' },
              { src: '/images/project3.png', alt: 'Ecommerce Platform UI' },
              { src: '/images/project4.webp', alt: 'Content Studio Website' },
            ].map(({ src, alt }, i) => (
              <Card key={i}>
                <Image
                  src={src}
                  alt={alt}
                  width={400}
                  height={300}
                  className="w-full h-full object-cover rounded-2xl shadow-lg"
                />
              </Card>
            ))}
          </CardSwap>
        </div>

        {/* Left Side: Heading */}
        <div className="w-full md:w-1/2 text-center md:text-left">
          <h2 className="text-4xl sm:text-5xl lg:text-6xl font-bold leading-tight text-[#0A1128]">
            Handpicked <br /><span className="text-blue-600 italic">Featured Projects</span>
          </h2>
          <p className="mt-6 text-lg sm:text-xl text-gray-700 font-light max-w-md">
            Showcasing some of our most impactful and visually captivating creations across branding, web, and content.
          </p>
        </div>
      </div>
    </section>
  );
};

export default FeaturedProjectsSection;
