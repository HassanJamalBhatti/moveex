
import HeroSlider from "@/components/HeroSlider";
import Navbar from "@/components/Navbar";
import StatsTicker from "@/components/StatsTicker";
import Services from "@/components/Services";
import Tracking from "@/components/Tracking";
import About from "@/components/About";
import Network from "@/components/Network";
import Testimonials from "@/components/Testimonials";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <>
      <Navbar />

      <main>
        <HeroSlider />
        <StatsTicker />
        <Services />
        <Tracking />
        <About />
        <Network />
        <Testimonials />
        <Footer />
      </main>
    </>
  );
}