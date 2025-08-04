import React from 'react';
import { render, screen } from '@/test-utils';
import About from '@/components/about';

describe('About', () => {
  it('renders without crashing', () => {
    render(<About />);
    // Le test passe si le composant se rend sans erreur
    expect(true).toBe(true);
  });
});
