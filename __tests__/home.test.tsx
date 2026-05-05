import React from 'react';
import { render, screen, waitFor } from '@/test-utils';
import { act } from '@testing-library/react';

// Mock react-awesome-reveal
jest.mock('react-awesome-reveal', () => ({
  Fade: ({ children }: any) => <>{children}</>,
}));

// Mock TiltCard et TechRadar pour éviter les erreurs de rendu complexes dans JSDOM
jest.mock('@/components/tilt-card', () => ({
  __esModule: true,
  default: ({ children }: any) => <div data-testid="tilt-card">{children}</div>,
}));

jest.mock('@/components/tech-radar', () => ({
  __esModule: true,
  default: () => <div data-testid="tech-radar" />,
}));

jest.mock('@/components/submit-btn', () => ({
  __esModule: true,
  default: ({ text }: any) => <button>{text}</button>,
}));

// Mock hamburger-react
jest.mock('hamburger-react', () => ({
  __esModule: true,
  default: ({ toggled, toggle }: any) => (
    <button onClick={() => toggle(!toggled)} aria-label="Menu">
      ☰
    </button>
  ),
}));

// Mock next/image
jest.mock('next/image', () => ({
  __esModule: true,
  default: ({ src, alt, ...props }: any) => <img src={src} alt={alt || ''} />,
}));

// Mock @vercel/analytics
jest.mock('@vercel/analytics/react', () => ({
  Analytics: () => null,
}));

// Mock react-hot-toast
jest.mock('react-hot-toast', () => ({
  __esModule: true,
  default: { success: jest.fn(), error: jest.fn() },
  Toaster: () => null,
}));

// Mock lucide-react
jest.mock('lucide-react', () => {
  const createIcon = (name: string) => {
    const Icon = (props: any) => <span data-testid={`icon-${name}`} {...props} />;
    Icon.displayName = `Icon(${name})`;
    return Icon;
  };
  return new Proxy(
    {},
    {
      get: (_target, prop: string) => createIcon(prop),
    },
  );
});

// Mock react-icons
jest.mock('react-icons/bs', () => ({
  BsLinkedin: (props: any) => <span {...props} />,
}));
jest.mock('react-icons/fa', () => ({
  FaGithubSquare: (props: any) => <span {...props} />,
}));

import Home from '@/app/page';

describe('Home', () => {
  it('renders without crashing', async () => {
    await act(async () => {
      render(<Home />);
    });

    await waitFor(() => {
      expect(document.body).toBeInTheDocument();
    });

    expect(true).toBe(true);
  }, 15000);
});
