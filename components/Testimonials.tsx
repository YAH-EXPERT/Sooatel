
import React from 'react';

const reviews = [
  {
    name: "Alexandre De Villiers",
    role: "Voyageur d'Affaires",
    text: "Un service irréprochable. L'attention aux détails à Antananarivo est digne des plus grands palaces parisiens. Je reviendrai sans hésiter.",
    stars: 5
  },
  {
    name: "Sarah Johnstone",
    role: "Influenceuse Luxury Travel",
    text: "SOOATEL est le joyau caché de Madagascar. Le restaurant est une explosion de saveurs et la literie est un pur nuage de bonheur.",
    stars: 5
  },
  {
    name: "Jean-Pierre Rakoto",
    role: "CEO Tech Africa",
    text: "Parfait pour organiser des événements de prestige. L'équipe événementielle est réactive et d'une discrétion exemplaire.",
    stars: 5
  }
];

const Testimonials: React.FC = () => {
  return (
    <section className="py-24 bg-midnight text-ivory relative overflow-hidden">
      {/* Decorative quotes */}
      <div className="absolute top-10 left-10 text-[20rem] font-serif text-white/5 pointer-events-none select-none">“</div>
      
      <div className="max-w-7xl mx-auto px-6 relative z-10">
        <div className="text-center mb-16">
          <h4 className="text-gold text-xs uppercase tracking-[0.3em] font-bold mb-4">Paroles d'Hôtes</h4>
          <h2 className="font-serif text-4xl md:text-5xl">Une Confiance Renouvelée</h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
          {reviews.map((rev, idx) => (
            <div key={idx} className="flex flex-col items-center text-center space-y-6">
              <div className="flex text-gold space-x-1">
                {[...Array(rev.stars)].map((_, i) => (
                  <span key={i} className="text-lg">★</span>
                ))}
              </div>
              <p className="italic font-light text-ivory/80 leading-loose text-lg">
                "{rev.text}"
              </p>
              <div className="pt-4 border-t border-gold/30 w-1/2">
                <h5 className="font-bold tracking-widest text-sm text-gold uppercase">{rev.name}</h5>
                <span className="text-[10px] text-ivory/40 uppercase tracking-widest">{rev.role}</span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
