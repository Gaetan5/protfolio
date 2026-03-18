'use client';

import React, { useEffect, useState } from 'react';
import { motion } from 'framer-motion';

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
        scale: [0.5, 1.2, 0.5]
      }}
      transition={{
        duration: randomDuration,
        repeat: Infinity,
        delay,
        ease: "easeInOut"
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
  className = "",
  delay = 0,
  hasBinary = false,
  scaleY = 1
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
      x: ["-25%", "0%", "-25%"],
      scaleY: [scaleY, scaleY * 1.1, scaleY]
    }}
    transition={{
      duration,
      repeat: Infinity,
      ease: "easeInOut",
      delay
    }}
    className={`absolute left-0 w-[200%] h-[150vh] min-h-[1000px] pointer-events-none origin-top ${className}`}
  >
    <svg 
      viewBox="0 0 1200 400" 
      preserveAspectRatio="none" 
      className="w-full h-full"
    >
      <defs>
        <linearGradient id={`grad-${delay}`} x1="0%" y1="0%" x2="0%" y2="100%">
          <stop offset="0%" stopColor="currentColor" stopOpacity="0.8" />
          <stop offset="30%" stopColor="currentColor" stopOpacity="0.4" />
          <stop offset="100%" stopColor="currentColor" stopOpacity="0.0" />
        </linearGradient>
        <pattern id={`pattern-${delay}`} width="200" height="80" patternUnits="userSpaceOnUse">
          <text x="10" y="40" fontSize="14" fontFamily="monospace" fill="currentColor" opacity="0.3">
            {hasBinary ? "10110010110 01101001" : ""}
          </text>
        </pattern>
      </defs>
      
      {/* Background Shadow Wave */}
      <path 
        d="M0 150 C 300 50 600 250 900 150 C 1200 50 1500 250 1800 150 V 400 H 0 Z" 
        fill={`url(#grad-${delay})`}
        className="drop-shadow-[0_0_30px_rgba(34,211,238,0.5)]"
      />
      
      {/* Binary Pattern Layer */}
      {hasBinary && (
      <path 
        d="M0 150 C 300 50 600 250 900 150 C 1200 50 1500 250 1800 150 V 400 H 0 Z" 
        fill={`url(#pattern-${delay})`}
        className="mix-blend-overlay"
      />
      )}
      
      {/* Crest Highlight - The glowing Edge */}
      <path 
        d="M0 150 C 300 50 600 250 900 150" 
        stroke="currentColor" 
        strokeWidth="3" 
        fill="none" 
        opacity="0.8" 
        className="blur-[1px]"
      />
      <path 
        d="M0 150 C 300 50 600 250 900 150" 
        stroke="white" 
        strokeWidth="1" 
        fill="none" 
        opacity="0.5"
      />
    </svg>
  </motion.div>
);

const CyberWaves = () => {
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  if (!mounted) {
    return null;
  }

  return (
    <div className="absolute inset-0 overflow-hidden pointer-events-none -z-10">
      {/* Layered Cyber Waves scaled to fill the entire screen */}
      <CyberWaveLayer 
        containerOpacity={0.4} 
        duration={15} 
        className="text-cyan-500" 
        yOffset={-10} 
        delay={0}
        hasBinary={true}
        scaleY={1.2}
      />
      <CyberWaveLayer 
        containerOpacity={0.3} 
        duration={20} 
        className="text-blue-500" 
        yOffset={10} 
        delay={-5}
        hasBinary={true}
        scaleY={1.1}
      />
      <CyberWaveLayer 
        containerOpacity={0.25} 
        duration={25} 
        className="text-cyan-300" 
        yOffset={30} 
        delay={-10}
        scaleY={1}
      />
      <CyberWaveLayer 
        containerOpacity={0.15} 
        duration={30} 
        className="text-purple-500" 
        yOffset={50} 
        delay={-15}
        scaleY={0.9}
      />
      
      {/* Full screen floating bits */}
      {[...Array(50)].map((_, i) => (
        <BinaryBit 
          key={i} 
          delay={i * 0.3} 
          x={Math.random() * 100} 
          y={Math.random() * 100} 
        />
      ))}
      
      {/* Subtle vertical scanlines to act as a complete background */}
      <div className="absolute inset-0 opacity-[0.05] bg-[linear-gradient(rgba(0,255,255,0.1)_1px,transparent_1px)] bg-[length:100%_4px]" />
    </div>
  );
};

export default CyberWaves;
