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

      {/* Bottom Line - Full Width Trust Statement */}
      <div className="bg-[#0A1628] border-t border-[#1E3A5F] py-6">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <div className="flex flex-col md:flex-row items-center justify-between text-center md:text-left gap-4">
            <p className="text-emerald-400 font-medium text-sm tracking-wide flex items-center gap-4">
              ALL RIGHT. YOU RECEIVED 2026 SAFE TECHNOLOGIES
            </p>

            <div className="text-slate-500 text-sm">
              Real-time visibility • AI-Powered Safety • Military Grade Security • 2026 Certified
            </div>
          </div>
        </div>
      </div>
    </>
  );
}