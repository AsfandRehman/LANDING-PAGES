import AboutUsSection from "./components/AboutUs";
import CalendlySection from "./components/BookCallSection";
import FAQSection from "./components/Faq";
import Hero from "./components/HeroSection";
import PricingSection from "./components/Pricing";
import TestimonialsReelGrid from "./components/ReelGrid";
import VideoShowreelSection from "./components/Scroller";
import ShowGrid from "./components/ShowcaseGrid";
import VSLSection from "./components/VSLSection";

export default function Home() {
  return (
    <>
      <Hero />
      <TestimonialsReelGrid />
      <VSLSection />
      <AboutUsSection />
      <ShowGrid />
      <VideoShowreelSection />
      <PricingSection />
      <CalendlySection />
      <FAQSection />
    </>
  );
}
