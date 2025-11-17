// app/page.tsx
import  HeroSection  from "@/components/HeroSection";
import  FeaturesSection  from "@/components/FeaturesSection";
import AboutSection from "@/components/AboutSection";
import LatestCoursesSection from "@/components/LatestCourseSection";
import StatsStrip from "@/components/StatsStrip";
import TeachersSection from "@/components/TeachersSection";
import TestimonialsSection from "@/components/Testimonial";
import UpcomingEventsSection from "@/components/UpcomingEventsSection";
import ContactSection from "@/components/ContactSection";



export default function HomePage() {
  return (
    <div className="space-y-24 md:space-y-40">
      <HeroSection />
      <FeaturesSection/>
      <AboutSection />
      <LatestCoursesSection />
      <StatsStrip />
     
      <TestimonialsSection />
      <UpcomingEventsSection />
      <ContactSection />
    </div>
  );
}
