'use client';

import React from 'react';
import { motion, useScroll, useSpring, useTransform } from 'framer-motion';
import { useSectionInView } from '@/lib/useInView';
import { useLocaleContext } from '@/containers/LocaleCtx';
import { t, tr } from '@/lib/i18n';
import { Calendar, MapPin, Building, Sparkles } from 'lucide-react';
import ScrollReveal from './scroll-reveal';

const Experience = React.memo(function Experience() {
  const { ref } = useSectionInView('#experience');
  const { locale } = useLocaleContext();
  const experiences = tr('experience.list', locale) || [];

  return (
    <section ref={ref} id="experience" className="scroll-mt-28 mb-32 max-w-7xl mx-auto px-4">
      <motion.div
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        viewport={{ once: true }}
        className="max-w-3xl mx-auto text-center mb-20"
      >
        <span className="inline-block px-3 py-1 mb-4 text-xs font-bold uppercase tracking-wider text-cyan-600 dark:text-cyan-400 bg-cyan-100 dark:bg-cyan-900/30 rounded-full">
          {t('experience.heading', locale)}
        </span>
        <h2 className="text-4xl md:text-5xl font-bold mb-6 text-gray-900 dark:text-white tracking-tight">
          <ScrollReveal>{t('experience.heading', locale)}</ScrollReveal>
        </h2>
        <p className="text-lg text-gray-600 dark:text-gray-400 leading-relaxed">
          {t('experience.subtitle', locale)}
        </p>
      </motion.div>

      <div className="max-w-5xl mx-auto relative">
        {/* Ligne de la timeline avec animation de croissance */}
        <div className="absolute left-4 md:left-1/2 md:-translate-x-px top-0 bottom-0 w-0.5 bg-gray-200 dark:bg-gray-800">
          <motion.div 
            initial={{ height: 0 }}
            whileInView={{ height: '100%' }}
            transition={{ duration: 1.5, ease: "easeInOut" }}
            className="w-full bg-gradient-to-b from-cyan-500 to-blue-600"
          />
        </div>

        <div className="space-y-16">
          {experiences.map((experience: any, index: number) => (
            <div key={index} className="relative">
              {/* Point de la timeline */}
              <motion.div 
                initial={{ scale: 0 }}
                whileInView={{ scale: 1 }}
                transition={{ delay: 0.2 + index * 0.1, type: "spring", stiffness: 200 }}
                className="absolute left-4 md:left-1/2 md:-translate-x-[9px] top-0 w-4 h-4 rounded-full bg-white dark:bg-gray-900 border-4 border-cyan-500 z-10"
              />

              <motion.div
                initial={{ opacity: 0, x: index % 2 === 0 ? -50 : 50 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true, margin: "-100px" }}
                className={`flex flex-col md:flex-row gap-8 ${
                  index % 2 === 0 ? 'md:flex-row' : 'md:flex-row-reverse text-left md:text-right'
                }`}
              >
                {/* Date Side */}
                <div className={`flex-1 hidden md:block ${index % 2 === 0 ? 'text-right' : 'text-left'}`}>
                  <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-gray-100 dark:bg-gray-800/50 text-gray-600 dark:text-cyan-400 font-medium text-sm">
                    <Calendar className="w-4 h-4" />
                    {experience.date}
                  </div>
                </div>

                {/* Card Side */}
                <div className="flex-1 pl-12 md:pl-0">
                  <motion.div 
                    whileHover={{ y: -5, scale: 1.02 }}
                    className="p-6 md:p-8 rounded-2xl bg-white dark:bg-gray-900/40 border border-gray-100 dark:border-gray-800 shadow-xl shadow-black/5 hover:shadow-cyan-500/10 transition-all duration-300 backdrop-blur-sm group"
                  >
                    <div className={`flex flex-col gap-4 ${index % 2 === 1 ? 'md:items-end' : 'md:items-start'}`}>
                      <div className="flex items-center gap-3">
                        <div className="p-3 rounded-lg bg-cyan-100 dark:bg-cyan-900/30 text-cyan-600 dark:text-cyan-400 group-hover:rotate-12 transition-transform duration-300">
                          <span className="text-xl">{experience.icon}</span>
                        </div>
                        <div>
                          <h3 className="text-xl font-bold text-gray-900 dark:text-white group-hover:text-cyan-600 dark:group-hover:text-cyan-400 transition-colors">
                            {experience.title}
                          </h3>
                          <div className="flex items-center gap-2 text-sm font-medium text-cyan-600 dark:text-cyan-400">
                            <Building className="w-3.5 h-3.5" />
                            {experience.location}
                          </div>
                        </div>
                      </div>

                      {/* Date (Mobile only) */}
                      <div className="md:hidden flex items-center gap-2 text-xs text-gray-500 dark:text-gray-400">
                        <Calendar className="w-3.5 h-3.5" />
                        {experience.date}
                      </div>

                      <p className="text-gray-600 dark:text-gray-300 leading-relaxed text-sm md:text-base">
                        {experience.description}
                      </p>

                      {/* Optional: Highlight projects if mentioned */}
                      {experience.description.includes('Projet') && (
                        <div className={`flex flex-wrap gap-2 mt-2 ${index % 2 === 1 ? 'md:justify-end' : 'md:justify-start'}`}>
                           <Sparkles className="w-4 h-4 text-cyan-500" />
                        </div>
                      )}
                    </div>
                  </motion.div>
                </div>
              </motion.div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
});

Experience.displayName = 'Experience';

export default Experience;
