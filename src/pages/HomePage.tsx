import { Navigation } from "../components/Navigation";
import { HeroSection } from "../components/HeroSection";
import { FeaturedPrograms } from "../components/FeaturedPrograms";
import { GrowthJourney } from "../components/GrowthJourney";
import { Footer } from "../components/Footer";

export function HomePage() {
  return (
    <div className="min-h-screen flex flex-col">
      <Navigation />
      <main className="flex-1">
        <HeroSection />
        <FeaturedPrograms />
        <GrowthJourney />
      </main>
      <Footer />
    </div>
  );
}
