'use client'



import WhatWeDo from '@/components/WhatWeDo'
import HeroSection from '@/components/HeroSection'
import StatsCounterSection from '@/components/StatsCounterSection'
import HeroCarousel from '@/components/HeroCarousel'



import BenefitSection from '@/components/BenefitSection';
import PersonasShowcase from '@/components/PersonasShowcase'
import CTABookingSection from '@/components/CTABookingSection'




export default function HomePage() {
  return (
  <main>
       < HeroSection/>
      
    
        
        <BenefitSection />
        <HeroCarousel />
  
        <WhatWeDo />
        <StatsCounterSection />
        <PersonasShowcase />
      
    <CTABookingSection/>
      
   
    </main>
  );
}
