'use client';
import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

interface SwitchProps {
  activeButton: React.ReactNode;
  hiddenButton: React.ReactNode;
  setActiveButton: () => void;
}

export default function Switch({ activeButton, hiddenButton, setActiveButton }: SwitchProps) {
  const [isHovered, setIsHovered] = useState(false);

  const switchVariants = {
    visible: { scale: 1, opacity: 0.7, y: 0 },
    hover: { scale: 1.2 },
    hidden: { scale: 0.5, opacity: 0, y: 50 },
  };

  return (
    <div className="flex flex-col justify-center items-center gap-2">
      <AnimatePresence>
        {isHovered && (
          <motion.button
            key="languageSwitcher"
            initial="hidden"
            animate="visible"
            exit="hidden"
            variants={switchVariants}
            transition={{ duration: 0.3 }}
            className="hidden md:flex items-center justify-center w-[2.5rem] h-[2.5rem] glass border border-white/20 dark:border-white/10 shadow-xl rounded-xl"
          >
            <div className="text-slate-500 dark:text-slate-400">{hiddenButton}</div>
          </motion.button>
        )}
      </AnimatePresence>

      <motion.button
        className="w-[3.5rem] h-[3.5rem] glass border border-white/20 dark:border-white/10 shadow-2xl rounded-2xl flex items-center justify-center group"
        variants={switchVariants}
        initial="visible"
        whileHover="hover"
        onMouseEnter={() => setIsHovered(true)}
        onMouseLeave={() => setIsHovered(false)}
        onClick={setActiveButton}
      >
        <div className="text-slate-900 dark:text-white group-hover:text-cyan-500 transition-colors">
          {activeButton}
        </div>
      </motion.button>
    </div>
  );
}
