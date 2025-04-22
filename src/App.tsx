import React from 'react';
import { ThemeProvider } from './components/ThemeProvider';
import Header from './components/layout/Header';
import Footer from './components/layout/Footer';
import Hero from './components/sections/Hero';
import ServicesList from './components/sections/ServicesList';
import About from './components/sections/About';
import HowItWorks from './components/sections/HowItWorks';
import Stats from './components/sections/Stats';
import Testimonials from './components/sections/Testimonials';
import Pricing from './components/sections/Pricing';
import Contact from './components/sections/Contact';

function App() {
  return (
    <ThemeProvider>
      <div className="flex flex-col min-h-screen">
        <Header />
        <main>
          <Hero />
          <ServicesList />
          <About />
          <HowItWorks />
          <Stats />
          <Testimonials />
          <Pricing />
          <Contact />
        </main>
        <Footer />
      </div>
    </ThemeProvider>
  );
}

export default App;