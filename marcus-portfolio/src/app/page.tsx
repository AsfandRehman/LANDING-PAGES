// app/page.tsx
import HeroShowcase from "./components/HeroShowcase";
import ThumbnailShowcase from "./components/ThumbnailShowcase";
import About from "./components/About";
import Process from "./components/Process";
import CTA from "./components/CTA";
import Footer from "./components/Footer";
export default function Page() {
  return (
    <>
      <HeroShowcase />
      <About />
      <Process />
      <ThumbnailShowcase />
      <CTA />
      <Footer />
    </>
  );
}
