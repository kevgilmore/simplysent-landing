/* eslint-disable jsx-a11y/alt-text */

import './App.css';
import CTA from './components/CTA.js';
import Details from './components/Details.js';
import FAQ from './components/FAQ.js';
import Benefits from './components/Benefits.js';
import Features from './components/Features.js';
import Footer from './components/Footer.js';
import Hero from './components/Hero.js';
import Navbar from './components/Navbar.js';

function App() {
  return (  
    <div className="App">

      <Navbar />

      <Hero />

      <Benefits />

      <Features />

      {/* <Details /> */}

      <CTA />

      <FAQ />

      <Footer />

    </div> // end of App
  );
}

export default App;
