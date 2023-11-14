/* eslint-disable jsx-a11y/alt-text */

import './App.css';
import CTA from './components/CTA.js';
import Features1 from './components/Features1.js';
import Features2 from './components/Features2.js';
import Footer from './components/Footer.js';
import Hero2 from './components/Hero2.js';
import Navbar from './components/Navbar.js';

function App() {
  return (  
    <div className="App">

      <Navbar />

      <Hero2 />

      <Features1 />

      <Features2 />

      <CTA />

      <Footer />

    </div> // end of App
  );
}

export default App;
