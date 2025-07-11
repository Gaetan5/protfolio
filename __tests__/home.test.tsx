import React from 'react';
import { render, screen } from '@testing-library/react';
import Home from '@/app/page';

describe('Home', () => {
  it('affiche le titre principal', () => {
    render(<Home />);
    expect(screen.getByRole('heading')).toBeInTheDocument();
  });
});
