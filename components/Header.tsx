
import React, { useState } from 'react';

interface HeaderProps {
  isScrolled: boolean;
}

const Header: React.FC<HeaderProps> = ({ isScrolled }) => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const navLinks = [
    { name: 'Hôtel', href: '#hero' },
    { name: 'ADN', href: '#about' },
    { name: 'Services', href: '#services' },
    { name: 'Galerie', href: '#gallery' },
    { name: 'Réservation', href: '#booking' },
  ];

  return (
    <header 
      className={`fixed top-0 left-0 w-full z-50 transition-colors duration-300 border-b ${
        isScrolled 
          ? 'bg-midnight/95 backdrop-blur-md py-3 border-gold/30' 
          : 'bg-midnight py-4 border-gold/10'
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 md:px-6 flex justify-between items-center">
        {/* Logo Signature */}
        <div className="flex items-center space-x-3 md:space-x-5 group cursor-pointer">
          <div className="w-10 h-10 md:w-14 md:h-14 bg-[#0E2A47] border-2 border-gold/40 flex items-center justify-center transition-transform duration-500 group-hover:scale-105">
            <span className="font-serif text-xl md:text-3xl text-gold font-bold select-none">S</span>
          </div>
          <div className="flex flex-col">
            <span className="font-serif text-lg md:text-2xl tracking-[0.2em] font-bold text-white leading-none">
              SOOATEL
            </span>
            <span className="text-[7px] md:text-[8px] tracking-[0.4em] uppercase text-gold font-bold mt-1">
              Hôtel & Restaurant
            </span>
          </div>
        </div>

        {/* Desktop Nav */}
        <nav className="hidden md:flex items-center space-x-8 lg:space-x-12">
          {navLinks.map((link) => (
            <a 
              key={link.name} 
              href={link.href}
              className="text-[10px] lg:text-[11px] text-ivory uppercase tracking-[0.2em] font-bold transition-all duration-300 hover:text-gold relative after:content-[''] after:absolute after:bottom-[-6px] after:left-0 after:w-0 after:h-[1px] after:bg-gold after:transition-all hover:after:w-full"
            >
              {link.name}
            </a>
          ))}
          <a 
            href="#booking"
            className="bg-gold text-midnight px-6 lg:px-9 py-2.5 text-[10px] lg:text-[11px] uppercase tracking-[0.25em] font-bold hover:bg-white transition-all duration-500 shadow-xl border border-gold"
          >
            Réserver
          </a>
        </nav>

        {/* Mobile Toggle */}
        <button 
          className="md:hidden text-gold p-2"
          onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
          aria-label="Toggle menu"
        >
          <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-7 h-7">
            <path strokeLinecap="round" strokeLinejoin="round" d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5" />
          </svg>
        </button>
      </div>

      {/* Mobile Menu Overlay */}
      <div className={`fixed inset-0 bg-midnight transition-all duration-500 md:hidden z-[100] ${isMobileMenuOpen ? 'opacity-100 pointer-events-auto' : 'opacity-0 pointer-events-none'}`}>
        <div className="p-8 flex flex-col items-center justify-center h-full space-y-8">
          <button 
            className="absolute top-8 right-8 text-gold"
            onClick={() => setIsMobileMenuOpen(false)}
          >
             <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-8 h-8">
              <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
            </svg>
          </button>
          {navLinks.map((link) => (
            <a 
              key={link.name} 
              href={link.href}
              onClick={() => setIsMobileMenuOpen(false)}
              className="text-2xl font-serif text-ivory tracking-widest hover:text-gold transition-colors"
            >
              {link.name}
            </a>
          ))}
          <a 
            href="#booking"
            onClick={() => setIsMobileMenuOpen(false)}
            className="bg-gold text-midnight px-10 py-4 text-sm uppercase tracking-widest font-bold mt-4"
          >
            Réserver maintenant
          </a>
        </div>
      </div>
    </header>
  );
};

export default Header;
