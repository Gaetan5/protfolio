'use client';
import React from 'react';
import Image from 'next/image';
import { motion } from 'framer-motion';
import { useLocaleContext } from '@/containers/LocaleCtx';
import { t } from '@/lib/i18n';

const HeroBanner = () => {
  const { locale } = useLocaleContext();

  return (
    <div className="relative w-full h-[40vh] min-h-[300px] overflow-hidden">
      <Image
        src="https://images.unsplash.com/photo-1461749280684-dccba630e2f6?auto=format&fit=crop&w=1920&q=80"
        alt="Hero Banner"
        fill
        priority
        className="object-cover"
      />
      <div className="absolute inset-0 bg-gradient-to-b from-black/60 via-black/20 to-gray-900/10 flex flex-col items-center justify-center text-center px-4">
        <motion.h1
          initial={{ opacity: 0, y: -20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '100px' }}
          transition={{ duration: 0.8 }}
          className="text-4xl md:text-6xl font-bold text-white mb-4 drop-shadow-2xl"
        >
          {t('intro.name', locale)}
        </motion.h1>
        <motion.p
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true, margin: '100px' }}
          transition={{ delay: 0.4, duration: 0.8 }}
          className="text-lg md:text-xl text-cyan-200 font-medium drop-shadow-lg"
        >
          {t('about.job', locale)}
        </motion.p>
      </div>

      {/* Abstract overlay to blend with the rest of the site */}
      <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-gray-900 to-transparent" />
    </div>
  );
};

export default HeroBanner;
