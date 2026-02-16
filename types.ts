
import React from 'react';

export interface PortfolioItem {
  id: string;
  title: string;
  category: 'Body Scars' | 'Makeup' | 'Costume' | 'Jewelry';
  imageUrl: string;
  description: string;
}

export interface Service {
  id: string;
  name: string;
  description: string;
  price: string;
  icon: React.ReactNode;
}
