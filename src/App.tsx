import Hero from "./components/Hero";
import Features from "./components/Features";
import Footer from "./components/Footer";
import "./App.css";

function App() {
    return (
        <main className="min-h-screen bg-background">
            <Hero />
            <Features />
            <Footer />
        </main>
    );
}

export default App;
