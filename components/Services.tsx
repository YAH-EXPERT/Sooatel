
import React, { useState } from 'react';
import { Icons, IMAGES } from '../constants';

const services = [
  {
    title: "Suites Signature",
    desc: "Un sanctuaire de paix doté d'équipements dernier cri et d'une vue imprenable sur la capitale.",
    imgs: IMAGES.services.rooms,
    icon: <Icons.Bed />
  },
  {
    title: "Utopia by Sooatel",
    desc: "Restaurant Gastronomique : Une odyssée culinaire mêlant saveurs locales et savoir-faire d'exception.",
    imgs: IMAGES.services.utopia,
    icon: <Icons.Utensils />
  },
  {
    title: "Piscine & Espace",
    desc: "Un cadre idyllique pour vos événements exclusifs et moments de détente absolue.",
    imgs: IMAGES.services.pool,
    icon: <Icons.Pool />
  },
  {
    title: "Wellness & Spa",
    desc: "Soins signatures et rituels de beauté pour une régénération totale de l'esprit.",
    imgs: IMAGES.services.spa,
    icon: <Icons.Spa />
  }
];

// Use React.FC to properly type the component and handle reserved props like 'key' in JSX
const ServiceCard: React.FC<{ service: any; index: number }> = ({ service, index }) => {
  const [currentImg, setCurrentImg] = useState(0);

  return (
    <div 
      onMouseEnter={() => setCurrentImg(1)}
      onMouseLeave={() => setCurrentImg(0)}
      className="group relative bg-midnight/20 border border-white/10 overflow-hidden hover:border-gold/50 transition-all duration-700 rounded-none cursor-pointer"
    >
      <div className="h-80 overflow-hidden relative">
        {service.imgs.map((img: string, i: number) => (
          <img 
            key={i}
            src={img} 
            alt={service.title} 
            className={`absolute inset-0 w-full h-full object-cover transition-all duration-[1200ms] ease-in-out transform ${
              i === currentImg 
                ? 'opacity-100 scale-110' 
                : 'opacity-0 scale-100'
            }`}
          />
        ))}
        {/* Overlay progressif pour la lisibilité du titre au repos */}
        <div className="absolute inset-0 bg-gradient-to-t from-midnight/80 via-midnight/20 to-transparent group-hover:from-midnight/40 transition-all duration-500" />
      </div>
      <div className="p-10 space-y-5 relative bg-midnight/40 backdrop-blur-sm group-hover:bg-midnight/20 transition-colors">
        <div className="absolute -top-12 left-10 bg-gold text-midnight p-5 shadow-2xl transition-transform duration-500 group-hover:-translate-y-3">
          {service.icon}
        </div>
        <h3 className="font-serif text-3xl pt-4 group-hover:text-gold transition-colors duration-500">{service.title}</h3>
        <p className="text-sm text-ivory/80 leading-relaxed font-light group-hover:text-white transition-colors">
          {service.desc}
        </p>
        <div className="pt-2">
          <a href="#booking" className="inline-block text-[10px] uppercase tracking-[0.3em] font-bold border-b border-gold/30 pb-2 text-gold hover:text-white hover:border-white transition-all">
            Explorer le service
          </a>
        </div>
      </div>
    </div>
  );
};

const Services: React.FC = () => {
  return (
    <section id="services" className="py-24 bg-midnight text-ivory overflow-hidden">
      <div className="max-w-7xl mx-auto px-6">
        
        <div className="text-center space-y-6 mb-24">
          <h4 className="text-gold text-xs uppercase tracking-[0.5em] font-bold">L'Expérience Premium</h4>
          <h2 className="font-serif text-4xl md:text-6xl">L'Art de Vivre SOOATEL</h2>
          <div className="w-32 h-px bg-gradient-to-r from-transparent via-gold to-transparent mx-auto mt-6" />
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
          {services.map((service, index) => (
            <ServiceCard key={index} service={service} index={index} />
          ))}
        </div>

      </div>
    </section>
  );
};

export default Services;
