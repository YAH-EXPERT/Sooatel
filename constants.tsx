
import React from 'react';

export const COLORS = {
  midnight: '#0E2A47',
  gold: '#D4AF37',
  copper: '#B88A6A',
  ivory: '#F5F5F5',
};

export const CONTACT_INFO = {
  phone: "+261 38 963 73 43",
  email: "info.sooatel@gmail.com",
  address: "Boulevard de l'Europe Ankasina, Antananarivo, Madagascar",
  whatsapp: "+261389637343"
};

export const IMAGES = {
  hero: {
    backgrounds: [
      "https://images.unsplash.com/photo-1545459720-aac273a27b4d?auto=format&fit=crop&q=80&w=1920", // Façade
      "https://images.unsplash.com/photo-1542314831-068cd1dbfeeb?auto=format&fit=crop&q=80&w=1920", // Lobby
      "https://images.unsplash.com/photo-1571896349842-33c89424de2d?auto=format&fit=crop&q=80&w=1920", // Suite
      "https://images.unsplash.com/photo-1582719478250-c89cae4dc85b?auto=format&fit=crop&q=80&w=1920", // Piscine
    ]
  },
  about: [
    "https://images.unsplash.com/photo-1566073771259-6a8506099945?auto=format&fit=crop&q=80&w=1200",
    "https://images.unsplash.com/photo-1584132967334-10e028bd69f7?auto=format&fit=crop&q=80&w=1200",
  ],
  services: {
    rooms: [
      "https://images.unsplash.com/photo-1590490360182-c33d57733427?auto=format&fit=crop&q=80&w=800",
      "https://images.unsplash.com/photo-1566665797739-1674de7a421a?auto=format&fit=crop&q=80&w=800"
    ],
    utopia: [
      "https://images.unsplash.com/photo-1514362545857-3bc16c4c7d1b?auto=format&fit=crop&q=80&w=800", // Bar Premium
      "https://images.unsplash.com/photo-1559339352-11d035aa65de?auto=format&fit=crop&q=80&w=800"  // Gastronomie Fine
    ],
    pool: [
      "https://images.unsplash.com/photo-1582719478250-c89cae4dc85b?auto=format&fit=crop&q=80&w=800",
      "https://images.unsplash.com/photo-1576013551627-0cc20b96c2a7?auto=format&fit=crop&q=80&w=800"
    ],
    spa: [
      "https://images.unsplash.com/photo-1540555700478-4be289fbecef?auto=format&fit=crop&q=80&w=800",
      "https://images.unsplash.com/photo-1544124499-58912cbddada?auto=format&fit=crop&q=80&w=800"
    ],
  },
  gallery: [
    "https://images.unsplash.com/photo-1566073771259-6a8506099945?auto=format&fit=crop&q=80&w=800", // 1. Hôtel
    "https://images.unsplash.com/photo-1582719478250-c89cae4dc85b?auto=format&fit=crop&q=80&w=800", // 2. Piscine
    "https://images.unsplash.com/photo-1542314831-068cd1dbfeeb?auto=format&fit=crop&q=80&w=800", // 3. Lobby
    "https://images.unsplash.com/photo-1591088398332-8a77d397ef85?auto=format&fit=crop&q=80&w=800", // 4. IMAGE SIGNATURE (Suite de Luxe)
    "https://images.unsplash.com/photo-1550966841-390ad55a133b?auto=format&fit=crop&q=80&w=800", // 5. Restaurant
    "https://images.unsplash.com/photo-1540555700478-4be289fbecef?auto=format&fit=crop&q=80&w=800", // 6. Spa
  ]
};

export const Icons = {
  Bed: () => (
    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-8 h-8">
      <path strokeLinecap="round" strokeLinejoin="round" d="M2.25 21h19.5m-18-10.5h16.5m-16.5 3h16.5m-16.5 3h16.5M6.75 6.75h.75m-.75 3h.75m3-3h.75m-.75 3h.75m3-3h.75m-.75 3h.75m3-3h.75m-.75 3h.75M4.5 20.25V3.75a1.5 1.5 0 0 1 1.5-1.5h12a1.5 1.5 0 0 1 1.5 1.5v16.5" />
    </svg>
  ),
  Utensils: () => (
    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-8 h-8">
      <path strokeLinecap="round" strokeLinejoin="round" d="M12 21v-8.25M15.75 21v-8.25M8.25 21v-8.25M3 9l9-6 9 6m-1.5 12V10.332A48.36 48.36 0 0 0 12 9.75c-2.551 0-5.056.2-7.5.582V21M3 21h18M12 6.75h.008v.008H12V6.75Z" />
    </svg>
  ),
  Pool: () => (
    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-8 h-8">
      <path strokeLinecap="round" strokeLinejoin="round" d="M2.25 15a4.5 4.5 0 0 0 4.5 4.5H18a3.75 3.75 0 0 0 0-7.5h-.75a4.5 4.5 0 0 0-4.5-4.5H6.158a4.5 4.5 0 0 0-4.5 4.5v7.5Z" />
    </svg>
  ),
  Spa: () => (
    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-8 h-8">
      <path strokeLinecap="round" strokeLinejoin="round" d="M21 8.25c0-2.485-2.099-4.5-4.688-4.5-1.935 0-3.597 1.126-4.312 2.733-.715-1.607-2.377-2.733-4.313-2.733C5.1 3.75 3 5.765 3 8.25c0 7.22 9 12 9 12s9-4.78 9-12Z" />
    </svg>
  )
};
