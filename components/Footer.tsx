
import React from 'react';
import { CONTACT_INFO } from '../constants';

const Footer: React.FC = () => {
  return (
    <footer className="bg-midnight pt-24 pb-12 border-t border-gold/10 overflow-hidden">
      <div className="max-w-7xl mx-auto px-6">
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-16 mb-24">
          
          {/* Brand */}
          <div className="space-y-8">
            <div className="flex flex-col">
              <span className="font-serif text-4xl tracking-[0.2em] text-gold font-bold">SOOATEL</span>
              <span className="text-[9px] tracking-[0.5em] uppercase text-ivory/40 mt-2 font-bold">Hôtel & Restaurant Prestige</span>
            </div>
            <p className="text-ivory/50 font-light text-sm leading-relaxed max-w-xs">
              L'excellence à Antananarivo : Une adresse d'exception sur le {CONTACT_INFO.address}. 
              Redéfinissez vos standards du luxe avec SOOATEL.
            </p>
          </div>

          {/* Quick Links */}
          <div className="space-y-8">
            <h4 className="text-gold font-bold uppercase text-[10px] tracking-[0.4em]">Destinations</h4>
            <ul className="space-y-4">
              {[
                { n: 'Nos Suites Signature', h: '#hero' },
                { n: 'Utopia by Sooatel', h: '#services' },
                { n: 'Piscine & Espace', h: '#services' },
                { n: 'Spa & Wellness', h: '#services' },
                { n: 'Réservations', h: '#booking' }
              ].map((item) => (
                <li key={item.n}>
                  <a href={item.h} className="text-ivory/60 text-xs uppercase tracking-widest hover:text-gold transition-all duration-300 flex items-center group">
                    <span className="w-0 h-px bg-gold mr-0 group-hover:w-4 group-hover:mr-2 transition-all" />
                    {item.n}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Practical */}
          <div className="space-y-8">
            <h4 className="text-gold font-bold uppercase text-[10px] tracking-[0.4em]">Informations</h4>
            <ul className="space-y-5">
              <li className="flex flex-col space-y-1">
                <span className="text-[10px] text-ivory/30 uppercase tracking-widest">Email Conciergerie</span>
                <a href={`mailto:${CONTACT_INFO.email}`} className="text-ivory/80 text-sm hover:text-gold transition-colors">{CONTACT_INFO.email}</a>
              </li>
              <li className="flex flex-col space-y-1">
                <span className="text-[10px] text-ivory/30 uppercase tracking-widest">Ligne Directe</span>
                <span className="text-ivory/80 text-sm">{CONTACT_INFO.phone}</span>
              </li>
              <li className="flex flex-col space-y-1">
                <span className="text-[10px] text-ivory/30 uppercase tracking-widest">Localisation</span>
                <span className="text-ivory/80 text-sm leading-snug">{CONTACT_INFO.address}</span>
              </li>
            </ul>
          </div>

          {/* Newsletter */}
          <div className="space-y-8">
            <h4 className="text-gold font-bold uppercase text-[10px] tracking-[0.4em]">Le Cercle Sooatel</h4>
            <p className="text-ivory/50 text-xs leading-relaxed">Inscrivez-vous pour recevoir nos invitations exclusives et nouveautés gastronomiques chez Utopia.</p>
            <form className="relative group" onSubmit={(e) => e.preventDefault()}>
              <input 
                type="email" 
                placeholder="Votre adresse email de prestige" 
                className="w-full bg-transparent border-b border-gold/20 py-4 text-ivory text-xs focus:outline-none focus:border-gold transition-all placeholder:text-ivory/20"
              />
              <button className="absolute right-0 bottom-4 text-gold hover:translate-x-2 transition-transform duration-500">
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-5 h-5">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M17.25 8.25 21 12m0 0-3.75 3.75M21 12H3" />
                </svg>
              </button>
            </form>
          </div>

        </div>

        <div className="pt-12 border-t border-white/5 flex flex-col md:flex-row justify-between items-center space-y-6 md:space-y-0 text-[9px] uppercase tracking-[0.5em] font-bold text-ivory/20">
          <p>© 2024 SOOATEL Group • Antananarivo • Madagascar</p>
          <div className="flex space-x-10">
            <a href="#" className="hover:text-gold transition-colors">Mentions</a>
            <a href="#" className="hover:text-gold transition-colors">Confidentialité</a>
            <a href="#" className="hover:text-gold transition-colors">Politique Cookies</a>
          </div>
        </div>

      </div>
    </footer>
  );
};

export default Footer;
