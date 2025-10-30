require('@testing-library/jest-dom');

// Mock Next.js router
jest.mock('next/navigation', () => ({
  useRouter() {
    return {
      push: jest.fn(),
      replace: jest.fn(),
      prefetch: jest.fn(),
      back: jest.fn(),
    };
  },
  usePathname() {
    return '/';
  },
}));

// Mock Next.js Image component
jest.mock('next/image', () => ({
  __esModule: true,
  default: ({ priority, fill, ...props }) => {
    // eslint-disable-next-line @next/next/no-img-element
    return <img {...props} />;
  },
}));

// Mock react-dom useFormStatus
jest.mock('react-dom', () => ({
  ...jest.requireActual('react-dom'),
  useFormStatus: () => ({ pending: false }),
}));

// Mock framer-motion
jest.mock('framer-motion', () => ({
  motion: {
    div: ({ children, whileInView, whileHover, whileTap, initial, animate, transition, ...props }) => <div {...props}>{children}</div>,
    section: ({ children, whileInView, whileHover, whileTap, initial, animate, transition, ...props }) => <section {...props}>{children}</section>,
    button: ({ children, whileInView, whileHover, whileTap, initial, animate, transition, ...props }) => <button {...props}>{children}</button>,
    span: ({ children, whileInView, whileHover, whileTap, initial, animate, transition, ...props }) => <span {...props}>{children}</span>,
    article: ({ children, whileInView, whileHover, whileTap, initial, animate, transition, ...props }) => <article {...props}>{children}</article>,
    form: ({ children, whileInView, whileHover, whileTap, initial, animate, transition, action, ...props }) => <form {...props}>{children}</form>,
    h1: ({ children, whileInView, whileHover, whileTap, initial, animate, transition, ...props }) => <h1 {...props}>{children}</h1>,
    h2: ({ children, whileInView, whileHover, whileTap, initial, animate, transition, ...props }) => <h2 {...props}>{children}</h2>,
    h3: ({ children, whileInView, whileHover, whileTap, initial, animate, transition, ...props }) => <h3 {...props}>{children}</h3>,
    p: ({ children, whileInView, whileHover, whileTap, initial, animate, transition, ...props }) => <p {...props}>{children}</p>,
    ul: ({ children, whileInView, whileHover, whileTap, initial, animate, transition, ...props }) => <ul {...props}>{children}</ul>,
    li: ({ children, whileInView, whileHover, whileTap, initial, animate, transition, ...props }) => <li {...props}>{children}</li>,
    a: ({ children, whileInView, whileHover, whileTap, initial, animate, transition, ...props }) => <a {...props}>{children}</a>,
    img: ({ whileInView, whileHover, whileTap, initial, animate, transition, ...props }) => <img {...props} />,
  },
  AnimatePresence: ({ children }) => children,
}));

// Mock window.matchMedia
Object.defineProperty(window, 'matchMedia', {
  writable: true,
  value: jest.fn().mockImplementation((query) => ({
    matches: false,
    media: query,
    onchange: null,
    addListener: jest.fn(), // deprecated
    removeListener: jest.fn(), // deprecated
    addEventListener: jest.fn(),
    removeEventListener: jest.fn(),
    dispatchEvent: jest.fn(),
  })),
});

// Mock IntersectionObserver
global.IntersectionObserver = jest.fn().mockImplementation(() => ({
  observe: jest.fn(),
  unobserve: jest.fn(),
  disconnect: jest.fn(),
}));

// Mock localStorage
const localStorageMock = {
  getItem: jest.fn(),
  setItem: jest.fn(),
  removeItem: jest.fn(),
  clear: jest.fn(),
};
global.localStorage = localStorageMock;
