// app/page.tsx
import Hero from "./components/Hero";

import LatestReleases from "./components/LatestReleases";
import SecretInvitation from "./components/SecretInvitation";
import ConnectSection from "./components/ConnectSection";



export default function HomePage() {
  return (
    <main>
      <Hero />
      <LatestReleases />
        <ConnectSection/>
     <SecretInvitation/>
   
    </main>
  );
}
