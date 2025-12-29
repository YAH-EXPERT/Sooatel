
import React from 'react';
import { IMAGES } from '../constants';

const Gallery: React.FC = () => {
  return (
    <section id="gallery" className="py-20 md:py-24 bg-ivory overflow-hidden">
      <div className="max-w-[1600px] mx-auto px-4 md:px-6">
        
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-10 md:mb-12 space-y-6 md:space-y-0">
          <div className="space-y-2 text-center md:text-left">
            <h4 className="text-gold text-[10px] md:text-xs uppercase tracking-[0.3em] font-bold">Immersion Visuelle</h4>
            <h2 className="font-serif text-3xl md:text-5xl">L'Expérience SOOATEL</h2>
          </div>
          <div className="flex justify-center">
            <button className="text-[10px] md:text-xs uppercase tracking-widest font-bold text-midnight border-2 border-midnight px-6 md:px-8 py-3 hover:bg-midnight hover:text-ivory transition-all duration-300">
              Voir tout l'album
            </button>
          </div>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 md:gap-6">
          {IMAGES.gallery.map((img, idx) => (
            <div key={idx} className="relative group overflow-hidden cursor-pointer aspect-square sm:aspect-auto">
              <img 
                src={img} 
                alt={`Gallery ${idx + 1}`} 
                className="w-full h-full object-cover grayscale group-hover:grayscale-0 transition-all duration-1000 scale-100 group-hover:scale-105"
                loading="lazy"
              />
              <div className="absolute inset-0 bg-midnight/60 opacity-0 group-hover:opacity-100 transition-opacity duration-500 flex items-center justify-center">
                <div className="text-center p-6 translate-y-4 group-hover:translate-y-0 transition-transform duration-500">
                  <span className="text-gold text-3xl md:text-4xl font-serif">†</span>
                  <p className="text-ivory uppercase tracking-[0.2em] text-[9px] md:text-xs font-bold mt-2">Détail du Prestige</p>
                </div>
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
};

export default Gallery;
