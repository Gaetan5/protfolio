'use client';

import React, { useEffect, useState } from 'react';
import { motion } from 'framer-motion';
import { useTheme } from '@/containers/theme-context';

const BinaryBit = ({ delay = 0, x = 0, y = 0 }: { delay?: number; x?: number; y?: number }) => {
  const [randomX] = useState(() => (Math.random() - 0.5) * 60);
  const [randomDuration] = useState(() => 8 + Math.random() * 8);
  const [bitValue] = useState(() => (Math.random() > 0.5 ? '1' : '0'));

  return (
    <motion.div
      initial={{ opacity: 0, scale: 0 }}
      animate={{
        opacity: [0, 0.5, 0],
        y: [0, -300],
        x: [0, randomX],
        scale: [0.5, 1.2, 0.5],
      }}
      transition={{
        duration: randomDuration,
        repeat: Infinity,
        delay,
        ease: 'easeInOut',
      }}
      className="absolute text-[12px] text-cyan-400/40 font-mono pointer-events-none select-none drop-shadow-[0_0_8px_rgba(34,211,238,0.3)]"
      style={{ left: `${x}%`, bottom: `${y}%` }}
    >
      {bitValue}
    </motion.div>
  );
};

const CyberWaveLayer = ({
  containerOpacity = 0.5,
  duration = 10,
  yOffset = 0,
  className = '',
  delay = 0,
  hasBinary = false,
  scaleY = 1,
}: {
  containerOpacity?: number;
  duration?: number;
  yOffset?: number;
  className?: string;
  delay?: number;
  hasBinary?: boolean;
  scaleY?: number;
}) => (
  <motion.div
    style={{ opacity: containerOpacity, top: `${yOffset}%` }}
    animate={{
      x: ['-25%', '0%', '-25%'],
      scaleY: [scaleY, scaleY * 1.1, scaleY],
    }}
    transition={{
      duration,
      repeat: Infinity,
      ease: 'linear' /* Linear est plus fluide pour des boucles infinies de vagues */,
      delay: delay > 0 ? delay : 0,
    }}
    className={`absolute left-0 w-[200%] h-[100vh] min-h-[600px] pointer-events-none origin-top will-change-transform ${className}`}
  >
    <svg viewBox="0 0 1200 600" preserveAspectRatio="none" className="w-full h-full">
      <defs>
        <linearGradient id={`grad-${Math.abs(delay)}`} x1="0%" y1="0%" x2="0%" y2="100%">
          <stop offset="0%" stopColor="currentColor" stopOpacity="0.8" />
          <stop offset="50%" stopColor="currentColor" stopOpacity="0.4" />
          <stop offset="100%" stopColor="currentColor" stopOpacity="0.0" />
        </linearGradient>
        {hasBinary && (
          <pattern
            id={`pattern-${Math.abs(delay)}`}
            width="200"
            height="80"
            patternUnits="userSpaceOnUse"
          >
            <text
              x="10"
              y="40"
              fontSize="16"
              fontFamily="monospace"
              fill="currentColor"
              opacity="0.3" /* Réduit l'opacité au lieu de mix-blend-mode plus gourmand */
            >
              10110 01101 10101
            </text>
          </pattern>
        )}
      </defs>

      {/* Background Wave - Sans drop-shadow lourd */}
      <path
        d="M0 100 C 300 0 600 200 900 100 C 1200 0 1500 200 1800 100 V 600 H 0 Z"
        fill={`url(#grad-${Math.abs(delay)})`}
      />

      {/* Binary Pattern Layer */}
      {hasBinary && (
        <path
          d="M0 100 C 300 0 600 200 900 100 C 1200 0 1500 200 1800 100 V 600 H 0 Z"
          fill={`url(#pattern-${Math.abs(delay)})`}
        />
      )}

      {/* Crest Highlight */}
      <path
        d="M0 100 C 300 0 600 200 900 100"
        stroke="currentColor"
        strokeWidth="2"
        fill="none"
        opacity="0.5"
      />
    </svg>
  </motion.div>
);

const CyberWaves = () => {
  const { theme } = useTheme();
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  if (!mounted) {
    return null;
  }

  const isDark = theme === 'dark';

  return (
    <div className="absolute inset-0 overflow-hidden pointer-events-none">
      {/* Layered Cyber Waves scaled to fill the entire screen */}
      <CyberWaveLayer
        containerOpacity={isDark ? 0.6 : 0.2}
        duration={20}
        className={isDark ? 'text-cyan-400' : 'text-slate-300'}
        yOffset={-10}
        delay={0}
        hasBinary={isDark}
        scaleY={1}
      />
      <CyberWaveLayer
        containerOpacity={isDark ? 0.4 : 0.15}
        duration={25}
        className={isDark ? 'text-blue-400' : 'text-blue-200'}
        yOffset={10}
        delay={-5}
        hasBinary={isDark}
        scaleY={1.1}
      />
      <CyberWaveLayer
        containerOpacity={isDark ? 0.25 : 0.1}
        duration={30}
        className={isDark ? 'text-cyan-300' : 'text-cyan-100'}
        yOffset={30}
        delay={-10}
        scaleY={1.2}
      />

      {/* Binary Bits - Only visible in Dark Mode */}
      {isDark &&
        [...Array(15)].map((_, i) => (
          <BinaryBit key={i} delay={i * 0.5} x={Math.random() * 100} y={Math.random() * 100} />
        ))}

      {/* Subtle scanlines - Hidden in light mode */}
      {isDark && (
        <div className="absolute inset-0 opacity-[0.03] bg-[linear-gradient(rgba(0,255,255,0.1)_1px,transparent_1px)] bg-[length:100%_4px]" />
      )}
    </div>
  );
};

export default CyberWaves;
