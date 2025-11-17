// app/page.tsx
import HeroSection from "./components/HeroSection";
import CTASection from "./components/CTASection";
import VideoShowreelSection from "./components/VideoShowreelSection";
import ServicesSection from "./components/ServicesSection";
import ProcessSection from "./components/ProcessSection";
import PricingSection from "./components/PricingSection";
import SimpleAboutSection from "./components/AboutTabsSection";

export default function HomePage() {
  return (
    <>
      <HeroSection />
      <SimpleAboutSection />
      <VideoShowreelSection />
      <ServicesSection />
      <ProcessSection />
      <PricingSection />
      <CTASection />
    </>
  );
}
