
import React from 'react';
// Import your components below (e.g., HeroSection, Showcase, etc.)
import HeroSection from '@/components/HeroSection';
import TechStackSection from '@/app/components/TechStackSection';
import ServicesSection from '@/app/components/ServicesSection';
import CounterSection from './components/CounterSection';
import FeaturedSection from '@/app/components/FeaturedSection';

import ThreeDCTASection from '@/app/components/ThreeDCtaSection';



export default function HomePage() {
  return (
    <>
      <HeroSection />
     <TechStackSection/>
      <ServicesSection />
      <CounterSection />
      <FeaturedSection />
      <ThreeDCTASection/>
      
     
    </>
  );
}
