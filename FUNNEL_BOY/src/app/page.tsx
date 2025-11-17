// src/app/page.tsx
import AttitudeScroller from "./components/AttitudeRulesSection";
import AttitudeRulesSection from "./components/AttitudeRulesSection";
import AwardsSection from "./components/AwardsSection";
import FooterContact from "./components/FooterContact";
import Hero from "./components/Hero";
import PartnerMarqueeOnScroll from "./components/PartnerMarqueeOnScroll";
import TestimonialsSection from "./components/TestimonialsSection";
import Vision from "./components/Vision";
import WorkShowcase from "./components/WorkShowcase";
import Services3D from "./services/page";
import ServicesHero3D from "./work/page";
import ProjectHero from "./work/page";
export default function HomePage() {
  return (
    <main className="relative z-10">
      <Hero />
      <Vision />
      <WorkShowcase />
      <AttitudeScroller cardClassName="bg-white/80 text-black border-black/10 backdrop-blur" />
      <>
        <PartnerMarqueeOnScroll />
        <AwardsSection />
        <TestimonialsSection />
        <FooterContact />
      </>
    </main>
  );
}
