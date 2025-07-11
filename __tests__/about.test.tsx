import React from 'react';
import { render, screen } from '@testing-library/react';
import About from '@/components/about';

describe('About', () => {
  it('affiche le titre About Me', () => {
    render(<About />);
    expect(screen.getByText(/About Me/i)).toBeInTheDocument();
  });
});
