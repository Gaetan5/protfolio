'use client';
import React from 'react';
import { motion } from 'framer-motion';
import CyberWaves from './cyber-waves';

const AnimatedBackground = () => {
  return (
    <div className="fixed top-0 left-0 w-[100vw] h-[100vh] pointer-events-none -z-[100] overflow-hidden bg-gradient-to-br from-gray-950 via-blue-950 to-gray-950">
      {/* Premium Cyber Wave Background Layer */}
      <CyberWaves />

      {/* Blob 1 - Cyber Cyan */}
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
        className="absolute top-1/4 -left-32 w-[500px] h-[500px] bg-cyan-500/20 rounded-full blur-[120px]"
      />

      {/* Blob 2 - Deep Blue */}
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
        className="absolute top-1/2 -right-32 w-[600px] h-[600px] bg-blue-600/15 rounded-full blur-[150px]"
      />

      {/* Blob 3 - Tech Purple */}
      <motion.div
        animate={{
          x: [0, 100, 0],
          y: [0, -150, 0],
          scale: [1, 1.3, 1],
        }}
        transition={{
          duration: 25,
          repeat: Infinity,
          ease: 'easeInOut',
        }}
        className="absolute bottom-0 left-1/3 w-[450px] h-[450px] bg-purple-500/15 rounded-full blur-[100px]"
      />

      {/* Dynamic Scanline Effect (Senior Touch) */}
      <div className="absolute inset-0 opacity-[0.03] bg-[linear-gradient(rgba(18,16,16,0)_50%,rgba(0,255,255,0.25)_50%),linear-gradient(90deg,rgba(255,0,0,0.06),rgba(0,255,0,0.02),rgba(0,0,255,0.06))] bg-[length:100%_4px,3px_100%]" />

      {/* Fine-grained Star Effect */}
      <div className="absolute inset-0 opacity-[0.12] bg-[url('https://www.transparenttextures.com/patterns/stardust.png')]" />
    </div>
  );
};

export default AnimatedBackground;
