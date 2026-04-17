import { DevBadge } from "@/components/DevBadge";
import PromoBanner from "@/components/PromoBanner";
import Hero from "@/components/Hero";
import LogoBar from "@/components/LogoBar";
import Compare from "@/components/Compare";
import GiftQuiz from "@/components/GiftQuiz";
import Social from "@/components/Social";
import AppPreview from "@/components/AppPreview";
import FAQ from "@/components/FAQ";
import FinalCTA from "@/components/FinalCTA";
import Footer from "@/components/Footer";

function App() {
  return (
    <main className="min-h-screen bg-background text-foreground overflow-x-hidden">
      <DevBadge />
      <PromoBanner />
      <Hero />
      <LogoBar />
      <Compare />
      <GiftQuiz />
      <Social />
      <AppPreview />
      <FAQ />
      <FinalCTA />
      <Footer />
    </main>
  );
}

export default App;
