// app/page.tsx
import HeroSection from "./components/HeroSection";

import StepsSection from "./components/StepSection";
import TestimonialsReelsSection from "./components/TestimonialsReelsSection";
import CTASection from "./components/CTASection";
import AboutSection from "./components/AboutSection";

export default function HomePage() {
  return (
    <>
      <HeroSection />
          
            <AboutSection />
            <StepsSection />
            <TestimonialsReelsSection />
            <CTASection />
     
    </>
  );
}
