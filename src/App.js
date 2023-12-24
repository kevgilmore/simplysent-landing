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
import Banner from './components/Banner.js';
import ReactPixel from 'react-facebook-pixel';
import Popup from './components/feedback/Popup.js';
import flagsmith from "flagsmith";
import { FlagsmithProvider } from 'flagsmith/react';
import Testimonials from './components/Testimonials.js';

ReactGA.initialize("G-JRT058C4VQ");

function App() {
  const advancedMatching = { em: 'hello@simplysent.co' }; // optional, more info: https://developers.facebook.com/docs/facebook-pixel/advanced/advanced-matching
  const options = {
    autoConfig: true, // set pixel's autoConfig. More info: https://developers.facebook.com/docs/facebook-pixel/advanced/
    debug: false, // enable logs
  };

  ReactPixel.init('ID907664617393399', advancedMatching, options);

  ReactPixel.pageView(); // For tracking page view

  return (
    <FlagsmithProvider
      options={{
        environmentID: process.env.REACT_APP_FLAGSMITH_ENVIRONMENT_ID || 'U2rissSHRPri5VES6NCEpf',
      }}
      flagsmith={flagsmith}
    >
      <div className="App">

        <Navbar />

        <Popup/>

        {/* <Banner /> */}

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
