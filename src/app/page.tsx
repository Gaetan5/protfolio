import React from 'react';
import HomeClient from '@/components/home-client';
import { Metadata } from 'next';
import { defaultMeta } from './seo';

// Les métadonnées sont statiques ici car la langue est gérée par le contexte client.
// Toutefois, on peut définir des valeurs par défaut robustes.
export const metadata: Metadata = {
  ...defaultMeta,
};

export default function Home() {
  return <HomeClient />;
}
