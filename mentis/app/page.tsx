'use client';

import { useEffect } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import Navigation from '@/components/uii/navigation';
import Hero from '@/components/sections/hero';
import Method from '@/components/sections/method';
import Transformation from '@/components/sections/transformation';
import Proof from '@/components/sections/proof';
import Packages from '@/components/sections/packages';
import Community from '@/components/sections/community';
import Footer from '@/components/uii/Footer';

gsap.registerPlugin(ScrollTrigger);

export default function Home() {
  useEffect(() => {
    // Smooth scrolling setup
    const lenis = (window as any).lenis;
    if (lenis) {
      lenis.on('scroll', ScrollTrigger.update);
    }

    // Refresh ScrollTrigger on load
    ScrollTrigger.refresh();

    // Clean up
    return () => {
      ScrollTrigger.getAll().forEach(trigger => trigger.kill());
    };
  }, []);

  return (
    <main className="relative">
      <Navigation />
      <Hero />
      <Method />
      <Transformation />
      <Proof />
      <Packages />
      <Community />
      
      <Footer />
    </main>
  );
}