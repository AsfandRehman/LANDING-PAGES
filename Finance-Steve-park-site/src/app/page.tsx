import HeroFinance from "@/components/Hero";
import PainSolutions from "@/components/PainSolutions";
import TestimonialsMarquee from "@/components/TestimonialsMarquee";
import ThreeStepProcess from "@/components/ThreeStepProcess";
import ConsultCTA from "@/components/ConsultCTA";
import AboutUs from "@/components/AboutUs";
import ServicesShowcase from "@/components/ServicesShowcase";
import VSLSection from "@/components/VSL";
import FAQ from "@/components/Faq";
export default function Page() {
  return (
    <>
      <HeroFinance />
      <PainSolutions />
      <VSLSection />
      <AboutUs />
      <ThreeStepProcess />
      <ServicesShowcase />
      <TestimonialsMarquee />
      <ConsultCTA />
      <FAQ />
    </>
  );
}
