'use client';

import React from 'react';
import { motion } from 'framer-motion';
import { useLocaleContext } from '@/containers/LocaleCtx';
import { Globe } from 'lucide-react';

const LanguageSwitcher = () => {
  const { locale, setLocale } = useLocaleContext();

  const toggleLocale = () => {
    setLocale(locale === 'fr' ? 'en' : 'fr');
  };

  return (
    <motion.button
      whileHover={{ scale: 1.05 }}
      whileTap={{ scale: 0.95 }}
      onClick={toggleLocale}
      className="flex items-center gap-2 px-3 py-1.5 rounded-full bg-white/10 hover:bg-white/20 dark:bg-gray-800/30 dark:hover:bg-gray-800/50 border border-white/10 dark:border-white/5 transition-all backdrop-blur-md shadow-sm"
      aria-label={`Switch to ${locale === 'fr' ? 'English' : 'French'}`}
    >
      <Globe size={16} className="text-cyan-500 dark:text-cyan-400" />
      <span className="text-xs font-bold uppercase tracking-wider text-gray-700 dark:text-gray-200">
        {locale}
      </span>
      <div className="flex flex-col gap-0.5 ml-1">
        <div
          className={`w-1 h-1 rounded-full ${locale === 'fr' ? 'bg-cyan-500' : 'bg-gray-400 dark:bg-gray-600'}`}
        />
        <div
          className={`w-1 h-1 rounded-full ${locale === 'en' ? 'bg-cyan-500' : 'bg-gray-400 dark:bg-gray-600'}`}
        />
      </div>
    </motion.button>
  );
};

export default LanguageSwitcher;
