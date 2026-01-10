import Hero from "./components/Hero";
import ProblemSection from "./components/ProblemSection";
import Solution from "./components/Solution";
import Benefits from "./components/Benefits";
import UseCases from "./components/UseCases";
import Trust from "./components/Trust";
import CTA from "./components/CTA";
import Footer from "./components/Footer";
import "./App.css";

function App() {
    return (
        <main className="min-h-screen bg-background text-foreground selection:bg-[#6159a5] selection:text-white">
            <Hero />
            <ProblemSection />
            <Solution />
            <Benefits />
            <UseCases />
            <Trust />
            <CTA />
            <Footer />
        </main>
    );
}

export default App;
