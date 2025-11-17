import Hero from "./components/Hero";
import OfferSection from "./components/OfferSection";
import TestimonialsSection from "./components/Testimonials";
import WhyChooseUs from "./components/WhyChooseUs";
import CTASection from "./components/CTASection";
import FaqSection from "./components/FaqSection";

export default function Home() {
  return (
    <main>
      <Hero />
      <OfferSection />
      <TestimonialsSection />
      <WhyChooseUs />
      <CTASection />
      <FaqSection />
    </main>
  );
}
