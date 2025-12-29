
import React, { useState, useEffect } from 'react';
import { IMAGES, CONTACT_INFO } from '../constants';

const About: React.FC = () => {
  const [imgIdx, setImgIdx] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setImgIdx(prev => (prev + 1) % IMAGES.about.length);
    }, 5000);
    return () => clearInterval(timer);
  }, []);

  return (
    <section id="about" className="py-20 md:py-32 bg-ivory overflow-hidden">
      <div className="max-w-7xl mx-auto px-6">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 md:gap-16 items-center">
          
          {/* Visual Side */}
          <div className="relative group order-2 lg:order-1">
            <div className="relative z-10 overflow-hidden shadow-2xl aspect-[4/5] bg-midnight">
              {IMAGES.about.map((img, idx) => (
                <img 
                  key={idx}
                  src={img} 
                  alt="SOOATEL Excellence" 
                  className={`absolute inset-0 w-full h-full object-cover transition-opacity duration-1000 ${idx === imgIdx ? 'opacity-100 scale-105' : 'opacity-0 scale-100'}`}
                  loading="lazy"
                />
              ))}
              <div className="absolute inset-0 border-[10px] md:border-[20px] border-white/20 m-4 md:m-6 pointer-events-none" />
            </div>
            
            <div className="absolute -bottom-6 -right-4 md:-bottom-10 md:right-10 bg-midnight text-ivory p-6 md:p-8 shadow-2xl max-w-[160px] md:max-w-xs z-20 border-l-4 border-gold">
              <span className="font-serif text-3xl md:text-5xl text-gold block mb-1 md:mb-2 font-bold">5★</span>
              <p className="text-[8px] md:text-[10px] uppercase tracking-widest font-bold opacity-80 leading-tight">Excellence à Antananarivo</p>
            </div>
          </div>

          {/* Text Side */}
          <div className="space-y-6 md:space-y-8 order-1 lg:order-2 text-center lg:text-left">
            <div className="space-y-2">
              <h4 className="text-gold text-[10px] md:text-xs uppercase tracking-[0.3em] font-bold">Notre Signature</h4>
              <h2 className="font-serif text-3xl md:text-5xl lg:text-6xl leading-tight">
                Le Prestige sous <br className="hidden md:block"/>un <span className="text-gold italic">Nouveau Regard</span>
              </h2>
            </div>
            
            <p className="text-midnight/70 leading-relaxed text-base md:text-lg font-light">
              Situé au cœur de la capitale, le SOOATEL fusionne architecture contemporaine et hospitalité d'exception. 
              Une adresse incontournable pour vos séjours d'affaires et moments de détente.
            </p>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 pt-4 text-left">
              <div className="space-y-1">
                <span className="font-serif text-xl md:text-2xl text-gold">Accès Facilité</span>
                <p className="text-xs md:text-sm text-midnight/60">Une localisation centrale pour vos rendez-vous.</p>
              </div>
              <div className="space-y-1">
                <span className="font-serif text-xl md:text-2xl text-gold">Prestige Premium</span>
                <p className="text-xs md:text-sm text-midnight/60">Un standard de service aligné sur l'international.</p>
              </div>
            </div>

            <div className="pt-6 flex justify-center lg:justify-start">
              <a href="#services" className="inline-flex items-center space-x-4 group">
                <span className="bg-gold p-4 md:p-5 rounded-none text-midnight group-hover:bg-midnight group-hover:text-gold transition-all duration-500 shadow-xl">
                  <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-5 h-5 md:w-6 md:h-6">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M13.5 4.5 21 12m0 0-7.5 7.5M21 12H3" />
                  </svg>
                </span>
                <span className="uppercase tracking-[0.3em] text-[9px] md:text-[11px] font-bold border-b border-transparent group-hover:border-gold pb-1 transition-all">Découvrir l'univers</span>
              </a>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
};

export default About;
