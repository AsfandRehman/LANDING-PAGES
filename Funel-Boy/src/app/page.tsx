import HeroBanner from "./Components/Hero";
import WhoWeAre from "./Components/WhoWeAre";
import ServicesSection from "./Components/ServicesSection";
import ProcessSection from "./Components/ProcessSection";
import RecentWork from "./Components/RecentWork";
import ExpertiseSection from "./Components/ExpertiseSection";
import TestimonialsSection from "./Components/TestimonialsSection";
import ContactNewsletter from "./Components/ContactNewsletter";

export default function Home() {
  return (
    <>
      <HeroBanner />
      <WhoWeAre />
      <ServicesSection />
      <ProcessSection />
      <RecentWork />
      <ExpertiseSection />
      <TestimonialsSection />
      <ContactNewsletter />
    </>
  );
}
