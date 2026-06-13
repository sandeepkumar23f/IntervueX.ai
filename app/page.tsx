import Navbar from "@/components/Navbar";
import HeroSection from "@/components/home/HeroSection";
import StatsSection from "@/components/home/StatsSection";
import FeaturesSection from "@/components/home/FeaturesSection";
import HowItWorksSection from "@/components/home/HowItWorksSection";
import RoadmapSection from "@/components/home/RoadmapSection";
import CTASection from "@/components/home/CTASection";
import Footer from "@/components/home/Footer";

export default function Home() {
  return (
    <main className="bg-black text-white min-h-screen">
      <Navbar />

      <HeroSection />
      <StatsSection />
      <FeaturesSection />
      <HowItWorksSection />
      <RoadmapSection />
      <CTASection />

      <Footer />
    </main>
  );
}