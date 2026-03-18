'use client';
import React, { useEffect } from 'react';
import { motion, useMotionValue, useSpring } from 'framer-motion';

const GlowCursor = () => {
  const cursorX = useMotionValue(-100);
  const cursorY = useMotionValue(-100);

  const springConfig = { damping: 25, stiffness: 150 };
  const cursorXSpring = useSpring(cursorX, springConfig);
  const cursorYSpring = useSpring(cursorY, springConfig);

  useEffect(() => {
    const moveCursor = (e: MouseEvent) => {
      cursorX.set(e.clientX);
      cursorY.set(e.clientY);
    };

    window.addEventListener('mousemove', moveCursor);

    return () => {
      window.removeEventListener('mousemove', moveCursor);
    };
  }, [cursorX, cursorY]);

  return (
    <motion.div
      className="fixed inset-0 pointer-events-none z-[-5]"
      style={{
        background: `radial-gradient(600px circle at ${cursorXSpring}px ${cursorYSpring}px, rgba(29, 78, 216, 0.15), transparent 80%)`,
      }}
    />
  );
};

export default GlowCursor;
