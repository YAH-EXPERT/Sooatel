
import React, { useState, useEffect } from 'react';
import Header from './components/Header';
import Hero from './components/Hero';
import About from './components/About';
import Services from './components/Services';
import Gallery from './components/Gallery';
import Testimonials from './components/Testimonials';
import Booking from './components/Booking';
import Footer from './components/Footer';

const App: React.FC = () => {
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <div className="min-h-screen bg-ivory font-sans text-midnight selection:bg-gold selection:text-white">
      <Header isScrolled={isScrolled} />
      
      <main>
        <Hero />
        <About />
        <Services />
        <Gallery />
        <Testimonials />
        <Booking />
      </main>

      <Footer />
    </div>
  );
};

export default App;
