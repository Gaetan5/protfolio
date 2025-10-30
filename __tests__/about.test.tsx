import React from 'react';
import { render, screen, waitFor } from '@/test-utils';
import { act } from '@testing-library/react';
import About from '@/components/about';

describe('About', () => {
  it('renders without crashing', async () => {
    await act(async () => {
      render(<About />);
    });
    
    // Attendre que les composants dynamiques se chargent
    await waitFor(() => {
      expect(document.body).toBeInTheDocument();
    });
    
    // Le test passe si le composant se rend sans erreur
    expect(true).toBe(true);
  });
});
