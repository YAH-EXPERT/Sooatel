
import React, { useState, useEffect } from 'react';
import { IMAGES } from '../constants';

const Hero: React.FC = () => {
  const [currentImageIndex, setCurrentImageIndex] = useState(0);
  const [isTransitioning, setIsTransitioning] = useState(false);

  useEffect(() => {
    const timer = setInterval(() => {
      setIsTransitioning(true);
      setTimeout(() => {
        setCurrentImageIndex((prev) => (prev + 1) % IMAGES.hero.backgrounds.length);
        setIsTransitioning(false);
      }, 1200); 
    }, 9000);

    return () => clearInterval(timer);
  }, []);

  return (
    <section 
      id="hero" 
      className="relative h-screen w-full flex items-center justify-center overflow-hidden bg-midnight"
    >
      {/* Background Media Container - Parallax supprimé pour la stabilité */}
      <div className="absolute inset-0 z-0">
        {IMAGES.hero.backgrounds.map((bg, index) => (
          <div
            key={bg}
            className={`absolute inset-0 transition-opacity duration-[3000ms] ease-in-out ${
              index === currentImageIndex ? 'opacity-100' : 'opacity-0'
            }`}
          >
            <img 
              src={bg} 
              alt={`SOOATEL Ambiance ${index + 1}`} 
              className={`w-full h-full object-cover transition-transform duration-[18000ms] ease-out ${
                index === currentImageIndex ? 'scale-100' : 'scale-115'
              }`}
            />
          </div>
        ))}

        <div className={`absolute inset-0 bg-midnight transition-opacity duration-[1500ms] ease-in-out pointer-events-none z-10 ${isTransitioning ? 'opacity-85' : 'opacity-0'}`} />
        <div className="absolute inset-0 bg-gradient-to-b from-midnight/90 via-midnight/20 to-midnight z-20" />
      </div>

      {/* Content - Fixe pour éviter les chevauchements sur mobile */}
      <div className="relative z-30 text-center px-6 max-w-5xl mx-auto space-y-8 md:space-y-10">
        <div className="inline-block px-4 py-2 border border-gold/40 bg-midnight/60 backdrop-blur-sm text-gold text-[9px] md:text-[10px] tracking-[0.45em] uppercase mb-2 animate-[fadeInDown_1.2s_ease-out]">
          Hotel et Chambre tout confort sité au centre ville d'Antananarivo
        </div>
        
        <div className="space-y-4">
          <h1 className="font-serif text-5xl sm:text-7xl md:text-9xl text-white tracking-tight leading-tight animate-[fadeIn_1.5s_ease-out] drop-shadow-2xl">
            SOOATEL
          </h1>
          <div className="w-16 md:w-24 h-px bg-gold mx-auto" />
          <p className="text-ivory/95 text-base md:text-2xl font-light italic tracking-[0.1em] md:tracking-[0.15em] font-serif">
            Le Prestige sous un Nouveau Regard
          </p>
        </div>

        <div className="flex flex-col sm:flex-row items-center justify-center space-y-4 sm:space-y-0 sm:space-x-8 pt-8">
          <a 
            href="#booking" 
            className="w-full sm:w-auto bg-gold text-midnight px-10 md:px-14 py-4 md:py-6 text-[10px] md:text-[11px] uppercase tracking-[0.3em] font-bold hover:bg-white transition-all duration-500 shadow-2xl"
          >
            Réserver votre suite
          </a>
          <a 
            href="#about" 
            className="group flex items-center space-x-3 text-white text-[10px] md:text-[11px] uppercase tracking-[0.3em] font-bold hover:text-gold transition-all"
          >
            <span>Explorer l'hôtel</span>
            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={2} stroke="currentColor" className="w-4 h-4 group-hover:translate-x-2 transition-transform">
              <path strokeLinecap="round" strokeLinejoin="round" d="M13.5 4.5 21 12m0 0-7.5 7.5M21 12H3" />
            </svg>
          </a>
        </div>
      </div>

      {/* Progress Indicators */}
      <div className="absolute bottom-20 md:bottom-24 flex space-x-3 md:space-x-4 z-40">
        {IMAGES.hero.backgrounds.map((_, index) => (
          <button 
            key={index}
            onClick={() => setCurrentImageIndex(index)}
            className="group relative h-8 md:h-10 w-[2px] flex items-end"
          >
            <div className={`w-full transition-all duration-[9000ms] linear bg-gold ${index === currentImageIndex && !isTransitioning ? 'h-full' : 'h-0'}`} />
            <div className="absolute inset-0 w-px bg-white/10 h-full" />
          </button>
        ))}
      </div>

      <style dangerouslySetInnerHTML={{ __html: `
        @keyframes fadeInDown {
          from { opacity: 0; transform: translateY(-20px); }
          to { opacity: 1; transform: translateY(0); }
        }
        @keyframes fadeIn {
          from { opacity: 0; }
          to { opacity: 1; }
        }
      `}} />
    </section>
  );
};

export default Hero;
