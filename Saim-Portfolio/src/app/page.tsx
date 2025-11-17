import Hero from './components/Hero';

import ImpactTimeline from './components/ImpactTimeline';


import AboutSection from './components/About';
import VisionSection from './components/VisionSection';
import FinalCTA from './components/CTA';

export default function Page() {
  return (
    <>
    <Hero/>
    <AboutSection/>
    <VisionSection/>
   

    <ImpactTimeline/>
   
    <FinalCTA/>
    </>
  );
}
