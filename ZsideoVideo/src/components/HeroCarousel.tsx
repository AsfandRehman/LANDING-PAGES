'use client';

import { useEffect, useState } from 'react';
import { motion, useMotionValue, useTransform, animate } from 'framer-motion';
import Image from 'next/image';

import morningShowImg from '@/assets/morning-show.jpg';
import youImg from '@/assets/you.jpg';
import vikingsImg from '@/assets/vikings.jpg';
import breakingBadImg from '@/assets/breaking-bad.jpg';
import strangerThingsImg from '@/assets/stranger-things.jpg';
import witcherImg from '@/assets/witcher.jpg';
import sherlockImg from '@/assets/sherlock.jpg';

const videoData = [
  {
    image: morningShowImg,
    title: 'The Morning Show',
    description: 'Drama series exploring media and power dynamics',
    video: 'https://commondatastorage.googleapis.com/gtv-videos-bucket/sample/BigBuckBunny.mp4',
  },
  {
    image: youImg,
    title: 'You',
    description: 'Psychological thriller about obsession and technology',
    video: 'https://commondatastorage.googleapis.com/gtv-videos-bucket/sample/ElephantsDream.mp4',
  },
  {
    image: vikingsImg,
    title: 'Vikings',
    description: 'Epic historical drama of Norse warriors',
    video: 'https://commondatastorage.googleapis.com/gtv-videos-bucket/sample/ForBiggerBlazes.mp4',
  },
  {
    image: breakingBadImg,
    title: 'Breaking Bad',
    description: "Crime drama following a chemistry teacher's transformation",
    video: 'https://commondatastorage.googleapis.com/gtv-videos-bucket/sample/ForBiggerEscapes.mp4',
  },
  {
    image: strangerThingsImg,
    title: 'Stranger Things',
    description: 'Supernatural thriller set in 1980s Indiana',
    video: 'https://commondatastorage.googleapis.com/gtv-videos-bucket/sample/ForBiggerFun.mp4',
  },
  {
    image: witcherImg,
    title: 'The Witcher',
    description: 'Fantasy adventure in a world of magic and monsters',
    video: 'https://commondatastorage.googleapis.com/gtv-videos-bucket/sample/ForBiggerJoyrides.mp4',
  },
  {
    image: sherlockImg,
    title: 'Sherlock',
    description: 'Modern adaptation of the classic detective stories',
    video: 'https://commondatastorage.googleapis.com/gtv-videos-bucket/sample/SubaruOutbackOnStreetAndDirt.mp4',
  },
];

// Default card sizes
const CARD_WIDTH = 220;
const CARD_HEIGHT = 320;

export default function HeroCarousel() {
  const [hoveredIndex, setHoveredIndex] = useState<number | null>(null);
  const [cardSize, setCardSize] = useState({ width: CARD_WIDTH, height: CARD_HEIGHT });
  const rotate = useMotionValue(0);
  const counterRotate = useTransform(rotate, (v) => -v);

  useEffect(() => {
    const controls = animate(rotate, 360, {
      duration: 40,
      repeat: Infinity,
      ease: 'linear',
    });
    return controls.stop;
  }, [rotate]);

  useEffect(() => {
    const handleResize = () => {
      const isLarge = window.innerWidth >= 1024;
      setCardSize({
        width: isLarge ? 280 : CARD_WIDTH,
        height: isLarge ? 400 : CARD_HEIGHT,
      });
    };
    handleResize(); // Initial check
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  const RADIUS = 400;

  const visibleCards = videoData.map((item, index, arr) => {
    const angleDeg = (index / arr.length) * 360;
    const angleRad = (angleDeg * Math.PI) / 180;
    const x = RADIUS * Math.cos(angleRad);
    const y = RADIUS * Math.sin(angleRad);
    return { ...item, x, y, angle: angleDeg };
  });

  return (
    <section id='showcase' className="relative w-full h-screen bg-background overflow-hidden">
      <div className="absolute inset-0 bg-gradient-radial" />

      <div className="relative z-10 pt-16 text-center px-4">
        <motion.h1
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-4xl sm:text-6xl lg:text-8xl font-bold bg-gradient-primary bg-clip-text text-black mb-4"
        >
          Featured <span className="shiny-text">Videos</span>
        </motion.h1>
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="text-base sm:text-lg lg:text-xl text-muted-foreground max-w-2xl mx-auto"
        >
          Quality content recorded at your convenience
        </motion.p>
      </div>

      <div className="absolute bottom-0 w-full h-[60vh] overflow-hidden pointer-events-none">
        <motion.div
          style={{ rotate }}
          className="absolute left-1/2 bottom-[-100px] -translate-x-1/2"
        >
          {visibleCards.map((card, index) => (
            <motion.div
              key={index}
              style={{
                position: 'absolute',
                width: cardSize.width,
                height: cardSize.height,
                x: card.x - cardSize.width / 2,
                y: -card.y - cardSize.height / 2,
                rotate: counterRotate,
              }}
              onMouseEnter={() => setHoveredIndex(index)}
              onMouseLeave={() => setHoveredIndex(null)}
              className="pointer-events-auto cursor-pointer"
              whileHover={{ scale: 1.1, zIndex: 20 }}
              transition={{ type: 'spring', stiffness: 300, damping: 30 }}
            >
              <motion.div
                className={`relative w-full h-full rounded-xl overflow-hidden shadow-card transition-all duration-300 ${
                  hoveredIndex === index ? 'shadow-glow' : ''
                }`}
                animate={{
                  opacity: hoveredIndex === null || hoveredIndex === index ? 1 : 0.6,
                }}
                transition={{ duration: 0.3 }}
              >
                <Image
                  src={card.image}
                  alt={card.title}
                  fill
                  className={`absolute inset-0 object-cover transition-opacity duration-300 ${
                    hoveredIndex === index ? 'opacity-0' : 'opacity-100'
                  }`}
                  priority
                />
                <video
                  src={card.video}
                  className={`absolute inset-0 w-full h-full object-cover transition-opacity duration-300 ${
                    hoveredIndex === index ? 'opacity-100' : 'opacity-0'
                  }`}
                  autoPlay
                  loop
                  muted
                  playsInline
                />
              </motion.div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
