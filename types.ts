
import React from 'react';

export interface ServiceCard {
  id: string;
  title: string;
  description: string;
  image: string;
  icon: React.ReactNode;
}

export interface Testimonial {
  id: number;
  name: string;
  role: string;
  comment: string;
  rating: number;
}

export interface GalleryItem {
  id: number;
  url: string;
  category: string;
}