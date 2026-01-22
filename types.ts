
// Fix: Import React to provide the React namespace for React.ReactNode
import React from 'react';

export interface Feature {
  id: string;
  title: string;
  description: string;
  icon: React.ReactNode;
  benefit: string;
}

export interface Metric {
  label: string;
  value: string;
  suffix: string;
  prefix?: string;
}

export interface Testimonial {
  quote: string;
  author: string;
  role: string;
  location: string;
}

export interface RoleContent {
  role: string;
  benefit: string;
  description: string;
  visualLabel: string;
}

export enum AppRole {
  Developers = 'Developers',
  Architekten = 'Architekten',
  Planer = 'Planer',
  Makler = 'Makler'
}
