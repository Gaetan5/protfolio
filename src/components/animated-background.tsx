'use client';
import React, { useEffect, useState } from 'react';
import { motion } from 'framer-motion';
import CyberWaves from './cyber-waves';
import { useTheme } from '@/containers/theme-context';

const AnimatedBackground = () => {
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
    <div className={`fixed top-0 left-0 w-[100vw] h-[100vh] pointer-events-none -z-[100] overflow-hidden transition-colors duration-700 ${
      isDark ? 'bg-gradient-to-br from-gray-950 via-blue-950 to-gray-950' : 'bg-slate-50'
    }`}>
      {/* Premium Cyber Wave Background Layer */}
      <CyberWaves />

      {/* Blobs animés adaptés au thème */}
      <motion.div
        animate={{
          x: [-20, 120, -20],
          y: [-20, 100, -20],
          scale: [1, 1.4, 1],
        }}
        transition={{
          duration: 15,
          repeat: Infinity,
          ease: 'easeInOut',
        }}
        className={`absolute top-1/4 -left-32 w-[600px] h-[600px] rounded-full will-change-transform ${
          isDark 
            ? 'bg-[radial-gradient(circle,rgba(6,182,212,0.15)_0%,transparent_60%)]' 
            : 'bg-[radial-gradient(circle,rgba(6,182,212,0.05)_0%,transparent_60%)]'
        }`}
      />

      <motion.div
        animate={{
          x: [20, -120, 20],
          y: [20, 150, 20],
          scale: [1, 1.2, 1],
        }}
        transition={{
          duration: 20,
          repeat: Infinity,
          ease: 'easeInOut',
        }}
        className={`absolute top-1/2 -right-32 w-[700px] h-[700px] rounded-full will-change-transform ${
          isDark 
            ? 'bg-[radial-gradient(circle,rgba(37,99,235,0.12)_0%,transparent_60%)]' 
            : 'bg-[radial-gradient(circle,rgba(37,99,235,0.04)_0%,transparent_60%)]'
        }`}
      />

      {/* Dynamic Scanline Effect - Hidden in Light mode for cleaner look */}
      {isDark && (
        <div className="absolute inset-0 opacity-[0.02] bg-[linear-gradient(rgba(18,16,16,0)_50%,rgba(0,255,255,0.25)_50%),linear-gradient(90deg,rgba(255,0,0,0.06),rgba(0,255,0,0.02),rgba(0,0,255,0.06))] bg-[length:100%_4px,3px_100%]" />
      )}

      {/* Fine-grained Star Effect - Subtle in Light mode */}
      <div className={`absolute inset-0 bg-[url('https://www.transparenttextures.com/patterns/stardust.png')] ${
        isDark ? 'opacity-[0.08]' : 'opacity-[0.03]'
      }`} />
    </div>
  );
};

export default AnimatedBackground;
