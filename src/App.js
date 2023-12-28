/* eslint-disable jsx-a11y/alt-text */

import './App.css';
import CTA from './components/CTA.js';
import FAQ from './components/FAQ.js';
import Benefits from './components/Benefits.js';
import Features from './components/Features.js';
import Footer from './components/Footer.js';
import Hero from './components/Hero.js';
import Navbar from './components/Navbar.js';

import ReactGA from 'react-ga4'
import Loader from './components/feedback/Loader.js';
import flagsmith from "flagsmith";
import { FlagsmithProvider } from 'flagsmith/react';
import Testimonials from './components/Testimonials.js';

ReactGA.initialize("G-JRT058C4VQ");

function App() {
  const flag = process.env.REACT_APP_FLAGSMITH_ENVIRONMENT_ID || 'U2rissSHRPri5VES6NCEpf'
  return (
    <FlagsmithProvider
      options={{environmentID: flag}}
      flagsmith={flagsmith}
    >
      <div className="App">

        <Navbar />

        <Loader/>

        <Hero />

        <Benefits />

        <Features />

        <Testimonials />

        <CTA />

        <FAQ />

        <Footer />

      </div>
    </FlagsmithProvider>
  );
}

export default App;
