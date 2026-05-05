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
          <ScrollReveal wordClassName="text-gradient font-extrabold">
            {t('experience.heading', locale)}
          </ScrollReveal>
        </h2>
        <p className="text-lg text-gray-600 dark:text-gray-400 leading-relaxed">
          {t('experience.subtitle', locale)}
        </p>
      </motion.div>

      <div className="max-w-5xl mx-auto relative">
        {/* Ligne de la timeline avec animation de croissance et glow */}
        <div className="absolute left-4 md:left-1/2 md:-translate-x-px top-0 bottom-0 w-1 bg-slate-200 dark:bg-slate-800 rounded-full overflow-hidden">
          <motion.div
            initial={{ height: 0 }}
            whileInView={{ height: '100%' }}
            transition={{ duration: 1.5, ease: 'easeInOut' }}
            className="w-full bg-gradient-to-b from-cyan-400 via-blue-500 to-purple-600 shadow-[0_0_15px_rgba(6,182,212,0.5)]"
          />
        </div>

        <div className="space-y-24">
          {experiences.map((experience: any, index: number) => (
            <div key={index} className="relative">
              {/* Point de la timeline avec effet de pulse */}
              <motion.div
                initial={{ scale: 0 }}
                whileInView={{ scale: 1 }}
                transition={{ delay: 0.2 + index * 0.1, type: 'spring', stiffness: 200 }}
                className="absolute left-4 md:left-1/2 md:-translate-x-[11px] top-0 w-6 h-6 rounded-full bg-white dark:bg-slate-950 border-4 border-cyan-500 z-10 shadow-[0_0_10px_rgba(6,182,212,0.5)]"
              >
                <div className="absolute inset-0 rounded-full animate-ping bg-cyan-500/20" />
              </motion.div>

              <motion.div
                initial={{ opacity: 0, x: index % 2 === 0 ? -50 : 50 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true, margin: '-100px' }}
                className={`flex flex-col md:flex-row gap-8 ${
                  index % 2 === 0 ? 'md:flex-row' : 'md:flex-row-reverse text-left md:text-right'
                }`}
              >
                {/* Date Side */}
                <div
                  className={`flex-1 hidden md:block ${index % 2 === 0 ? 'text-right' : 'text-left'}`}
                >
                  <div className="inline-flex items-center gap-2 px-5 py-2 rounded-2xl glass text-slate-600 dark:text-cyan-400 font-black text-sm uppercase tracking-widest border border-white/20 dark:border-white/5">
                    <Calendar className="w-4 h-4" />
                    {experience.date}
                  </div>
                </div>

                {/* Card Side */}
                <div className="flex-1 pl-12 md:pl-0">
                  <motion.div
                    whileHover={{ y: -5, scale: 1.01 }}
                    className="glass p-8 rounded-3xl border border-white/20 dark:border-white/5 shadow-2xl shadow-black/5 hover:border-cyan-500/30 transition-all duration-500 group"
                  >
                    <div
                      className={`flex flex-col gap-5 ${index % 2 === 1 ? 'md:items-end' : 'md:items-start'}`}
                    >
                      <div className={`flex items-center gap-4 ${index % 2 === 1 ? 'md:flex-row-reverse' : ''}`}>
                        <div className="p-4 rounded-2xl bg-cyan-100 dark:bg-cyan-900/30 text-cyan-600 dark:text-cyan-400 group-hover:rotate-6 transition-transform duration-300">
                          <span className="text-2xl">{experience.icon}</span>
                        </div>
                        <div className={index % 2 === 1 ? 'md:text-right' : 'md:text-left'}>
                          <h3 className="text-2xl font-black text-slate-900 dark:text-white group-hover:text-cyan-500 transition-colors tracking-tight">
                            {experience.title}
                          </h3>
                          <div className={`flex items-center gap-2 text-sm font-bold text-slate-500 dark:text-slate-400 ${index % 2 === 1 ? 'md:justify-end' : ''}`}>
                            <Building className="w-4 h-4 text-cyan-500" />
                            {experience.location}
                          </div>
                        </div>
                      </div>

                      {/* Date (Mobile only) */}
                      <div className="md:hidden flex items-center gap-2 text-xs font-bold text-slate-500 dark:text-slate-400 uppercase tracking-wider">
                        <Calendar className="w-4 h-4 text-cyan-500" />
                        {experience.date}
                      </div>

                      <p className="text-slate-600 dark:text-slate-300 leading-relaxed font-medium">
                        {experience.description}
                      </p>

                      {/* Tech Tags */}
                      {experience.tags && (
                        <div
                          className={`flex flex-wrap gap-2 mt-4 ${index % 2 === 1 ? 'md:justify-end' : 'md:justify-start'}`}
                        >
                          {experience.tags.map((tag: string, i: number) => (
                            <span
                              key={i}
                              className="px-3 py-1 text-[10px] font-black uppercase tracking-widest rounded-lg bg-slate-100 dark:bg-slate-800/50 text-slate-500 dark:text-slate-400 border border-slate-200 dark:border-slate-700 transition-all duration-300 group-hover:border-cyan-500/50 group-hover:text-cyan-500"
                            >
                              {tag}
                            </span>
                          ))}
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
