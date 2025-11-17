import RealStarfield from './components/RealStarfield'
import HeroSection from './components/HeroSection'
import HowItWorksSection from './components/HowItWorksSection'
import WhoThisIsForSection from './components/WhoThisIsForSection'
import CloneDemoSection from './components/CloneDemoSection'
import CTABookingSection from './components/CTABookingSection'
export default function Home() {
  return (
    <main className="min-h-[500vh] relative">
      <RealStarfield />
       <HeroSection />
       <HowItWorksSection/>
       <CloneDemoSection/>
       <WhoThisIsForSection/>
       <CTABookingSection/>
       
  
    
    </main>
  )
}
