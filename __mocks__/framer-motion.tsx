import React from 'react';

// Cache pour éviter de recréer des composants à chaque accès (stabilité React)
const componentCache: Record<string, React.ForwardRefExoticComponent<any>> = {};

const getMotionComponent = (element: string) => {
  if (!componentCache[element]) {
    const Component = React.forwardRef(({ children, ...props }: any, ref: any) => {
      // Filtrer les props spécifiques à framer-motion
      const {
        initial,
        animate,
        exit,
        variants,
        whileHover,
        whileTap,
        whileInView,
        viewport,
        transition,
        layout,
        layoutId,
        onViewportEnter,
        onViewportLeave,
        drag,
        dragConstraints,
        ...htmlProps
      } = props;
      return React.createElement(element, { ...htmlProps, ref }, children);
    });
    Component.displayName = `motion.${element}`;
    componentCache[element] = Component;
  }
  return componentCache[element];
};

// Proxy stable avec cache
const motion = new Proxy(
  {},
  {
    get: (_target, prop: string) => getMotionComponent(prop),
  },
);

// Mock de useMotionValue
const useMotionValue = (initial: any) => ({
  get: () => initial,
  set: jest.fn(),
  onChange: jest.fn(),
  on: jest.fn(),
  destroy: jest.fn(),
  isAnimating: () => false,
});

const useSpring = (value: any) => value;
const useTransform = (value: any, _input: any, _output: any) => value;
const AnimatePresence = ({ children }: any) => <>{children}</>;
const useAnimation = () => ({ start: jest.fn(), stop: jest.fn() });
const useInView = () => true;

module.exports = {
  __esModule: true,
  motion,
  AnimatePresence,
  useAnimation,
  useInView,
  useMotionValue,
  useSpring,
  useTransform,
  default: motion,
};
