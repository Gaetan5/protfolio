import React from 'react';
import { render, screen } from '@/test-utils';
import { act, fireEvent } from '@testing-library/react';
import Navbar from '@/components/navbar';

// Mock hamburger-react
jest.mock('hamburger-react', () => ({
  __esModule: true,
  default: ({ toggled, toggle }: any) => (
    <button onClick={() => toggle(!toggled)} aria-label="Menu">☰</button>
  ),
}));

// Mock lucide-react
jest.mock('lucide-react', () => {
  const createIcon = (name: string) => (props: any) => <span data-testid={`icon-${name}`} {...props} />;
  return new Proxy({}, {
    get: (_target, prop: string) => createIcon(prop),
  });
});

describe('Integration: Language Switching', () => {
  it('should toggle language between FR and EN', async () => {
    render(<Navbar />);

    // Trouver le bouton LanguageSwitcher via son aria-label
    const switcher = screen.getByRole('button', { name: /switch to/i });

    // Vérifier l'état initial (FR par défaut)
    expect(switcher).toHaveTextContent(/fr/i);

    // Cliquer pour changer de langue
    await act(async () => {
      fireEvent.click(switcher);
    });

    // Vérifier que c'est passé en EN
    await act(async () => {
      expect(screen.getByRole('button', { name: /switch to/i })).toHaveTextContent(/en/i);
    });
  });
});
