
import React from 'react';
import { CONTACT_INFO } from '../constants';

const Booking: React.FC = () => {
  return (
    <section id="booking" className="py-20 md:py-32 bg-ivory">
      <div className="max-w-7xl mx-auto px-4 sm:px-6">
        <div className="bg-white shadow-[0_50px_100px_-20px_rgba(0,0,0,0.15)] overflow-hidden flex flex-col lg:flex-row">
          
          {/* Form Side */}
          <div className="flex-1 p-8 sm:p-12 md:p-16 lg:p-20 space-y-10 md:space-y-12">
            <div className="space-y-4 md:space-y-5">
              <h4 className="text-gold text-[10px] md:text-xs uppercase tracking-[0.4em] font-bold">Service Conciergerie</h4>
              <h2 className="font-serif text-3xl sm:text-4xl md:text-5xl leading-tight">
                Réserver votre <br className="hidden sm:block"/><span className="text-gold italic">Instant d'Exception</span>
              </h2>
              <p className="text-midnight/60 font-light max-w-md text-sm md:text-base leading-relaxed">
                Confiez-nous vos dates pour un séjour sur-mesure au cœur de la capitale malgache. Notre équipe vous répondra sous 24h.
              </p>
            </div>

            <form className="grid grid-cols-1 md:grid-cols-2 gap-6 md:gap-x-10 md:gap-y-12" onSubmit={(e) => e.preventDefault()}>
              <div className="space-y-2 md:space-y-3">
                <label className="block text-[9px] md:text-[10px] uppercase tracking-[0.3em] font-bold text-midnight/40">Nom & Prénom</label>
                <input 
                  type="text" 
                  placeholder="M. Jean Dupont"
                  className="w-full border-b border-midnight/10 py-3 md:py-4 focus:outline-none focus:border-gold transition-all bg-transparent font-light text-midnight placeholder:text-midnight/20"
                />
              </div>
              <div className="space-y-2 md:space-y-3">
                <label className="block text-[9px] md:text-[10px] uppercase tracking-[0.3em] font-bold text-midnight/40">Email Privé</label>
                <input 
                  type="email" 
                  placeholder="contact@luxetravel.com"
                  className="w-full border-b border-midnight/10 py-3 md:py-4 focus:outline-none focus:border-gold transition-all bg-transparent font-light text-midnight placeholder:text-midnight/20"
                />
              </div>
              <div className="space-y-2 md:space-y-3">
                <label className="block text-[9px] md:text-[10px] uppercase tracking-[0.3em] font-bold text-midnight/40">Date d'Arrivée</label>
                <input 
                  type="date" 
                  className="w-full border-b border-midnight/10 py-3 md:py-4 focus:outline-none focus:border-gold transition-all bg-transparent font-light text-midnight appearance-none"
                />
              </div>
              <div className="space-y-2 md:space-y-3">
                <label className="block text-[9px] md:text-[10px] uppercase tracking-[0.3em] font-bold text-midnight/40">Date de Départ</label>
                <input 
                  type="date" 
                  className="w-full border-b border-midnight/10 py-3 md:py-4 focus:outline-none focus:border-gold transition-all bg-transparent font-light text-midnight appearance-none"
                />
              </div>
              <div className="md:col-span-2 pt-6 md:pt-8">
                <button className="w-full bg-midnight text-gold py-5 md:py-7 text-[10px] md:text-[11px] uppercase tracking-[0.4em] font-bold hover:bg-gold hover:text-midnight transition-all duration-700 shadow-2xl group flex items-center justify-center space-x-4">
                  <span>Vérifier la disponibilité</span>
                  <div className="w-4 h-px bg-gold group-hover:bg-midnight transition-all group-hover:w-10" />
                </button>
              </div>
            </form>
          </div>

          {/* Contact Info Side */}
          <div className="w-full lg:w-[400px] xl:w-[450px] bg-midnight p-8 sm:p-12 md:p-16 lg:p-20 flex flex-col justify-between space-y-12 md:space-y-16">
            <div className="space-y-10 md:space-y-12">
              <div className="space-y-3 md:space-y-4">
                <h4 className="text-gold text-[10px] uppercase tracking-widest font-bold">Localisation</h4>
                <p className="text-ivory font-light leading-relaxed text-base md:text-lg italic opacity-90">
                  {CONTACT_INFO.address}
                </p>
              </div>
              <div className="space-y-3 md:space-y-4">
                <h4 className="text-gold text-[10px] uppercase tracking-widest font-bold">Ligne Directe</h4>
                <p className="text-ivory font-serif text-2xl md:text-3xl tracking-tighter whitespace-nowrap">{CONTACT_INFO.phone}</p>
                <p className="text-gold font-light opacity-80 text-sm">{CONTACT_INFO.email}</p>
              </div>
              <div className="space-y-5 pt-2">
                <h4 className="text-gold text-[10px] uppercase tracking-widest font-bold">Assistance Premium</h4>
                <a 
                  href={`https://wa.me/${CONTACT_INFO.whatsapp.replace(/\+/g, '')}`} 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="flex items-center space-x-4 text-ivory group"
                >
                  <div className="w-10 h-10 md:w-12 md:h-12 rounded-full border border-gold/30 flex items-center justify-center group-hover:bg-gold group-hover:text-midnight transition-all duration-500 flex-shrink-0">
                    <svg xmlns="http://www.w3.org/2000/svg" className="w-5 h-5 md:w-6 md:h-6" fill="currentColor" viewBox="0 0 24 24">
                      <path d="M.057 24l1.687-6.163c-1.041-1.804-1.588-3.849-1.587-5.946.003-6.556 5.338-11.891 11.893-11.891 3.181.001 6.167 1.24 8.413 3.488 2.245 2.248 3.481 5.236 3.48 8.414-.003 6.557-5.338 11.892-11.893 11.892-1.99-.001-3.951-.5-5.688-1.448l-6.305 1.654zm6.597-3.807c1.676.995 3.276 1.591 5.392 1.592 5.448 0 9.886-4.438 9.889-9.886.002-5.462-4.415-9.89-9.881-9.892-5.452 0-9.89 4.44-9.892 9.886-.001 2.125.593 3.456 1.574 5.111l-.973 3.548 3.585-.941c.219.124.441.246.663.367z" />
                    </svg>
                  </div>
                  <div className="flex flex-col">
                    <span className="text-xs md:text-sm font-bold tracking-widest uppercase">WhatsApp Concierge</span>
                    <span className="text-[9px] md:text-[10px] text-ivory/40 uppercase font-medium">Réponse immédiate</span>
                  </div>
                </a>
              </div>
            </div>

            <div className="flex space-x-6 md:space-x-8 pt-4 md:pt-0">
              {['Instagram', 'Facebook', 'LinkedIn'].map(social => (
                <a key={social} href="#" className="text-[9px] md:text-[10px] uppercase tracking-[0.3em] font-bold text-ivory/50 hover:text-gold transition-colors">
                  {social}
                </a>
              ))}
            </div>
          </div>

        </div>
      </div>
    </section>
  );
};

export default Booking;
