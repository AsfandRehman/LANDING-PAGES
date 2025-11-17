// app/page.tsx
import HeroSection from "./components/HeroSection";
import CTASection from "./components/CTASection";

import ServicesSection from "./components/ServicesSection";
import ProcessSection from "./components/ProcessSection";

import SimpleAboutSection from "./components/AboutTabsSection";
import FAQSection from "./faq";
import TestimonialsSection from "./components/testimonial";
import StruggleSection from "./components/StruggleSection";

export default function HomePage() {
  return (
    <>
      <HeroSection />
      <SimpleAboutSection />
      <ServicesSection />
      <StruggleSection />
      <ProcessSection />
      <TestimonialsSection />
      <FAQSection />
      <CTASection />
    </>
  );
}
