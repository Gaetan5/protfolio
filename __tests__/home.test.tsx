import React from 'react';
import { render, screen } from '@/test-utils';
import Home from '@/app/page';

describe('Home', () => {
  it('renders without crashing', () => {
    render(<Home />);
    // Le test passe si le composant se rend sans erreur
    expect(true).toBe(true);
  });
});
 