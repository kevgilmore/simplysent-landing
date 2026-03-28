import Hero from "@/components/Hero";
import LogoBar from "@/components/LogoBar";
import HowItWorks from "@/components/HowItWorks";
import GiftQuiz from "@/components/GiftQuiz";
import Social from "@/components/Social";
import AppPreview from "@/components/AppPreview";
import FinalCTA from "@/components/FinalCTA";
import Footer from "@/components/Footer";

function App() {
  return (
    <main className="min-h-screen bg-background text-foreground overflow-x-hidden">
      <Hero />
      <LogoBar />
      <HowItWorks />
      <GiftQuiz />
      <Social />
      <AppPreview />
      <FinalCTA />
      <Footer />
    </main>
  );
}

export default App;
