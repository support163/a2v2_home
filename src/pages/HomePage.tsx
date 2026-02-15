import { Navigation } from "../components/Navigation";
import { HeroSection } from "../components/HeroSection";
import { TrainAISection } from "../components/TrainAISection";
import { SmartestLinkSection } from "../components/SmartestLinkSection";
import { FeaturesSection } from "../components/FeaturesSection";
import { PoweringExpertsSection } from "../components/PoweringExpertsSection";
import { SalesAgentSection } from "../components/SalesAgentSection";
import { DataProtectionSection } from "../components/DataProtectionSection";
import { CTASection } from "../components/CTASection";
import { Footer } from "../components/Footer";

export function HomePage() {
  return (
    <div className="min-h-screen flex flex-col">
      <Navigation />
      <main className="flex-1">
        <HeroSection />
        <TrainAISection />
        <SmartestLinkSection />
        <FeaturesSection />
        <PoweringExpertsSection />
        <SalesAgentSection />
        <DataProtectionSection />
        <CTASection />
      </main>
      <Footer />
    </div>
  );
}
