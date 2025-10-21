'use client';
import React from 'react';
import { motion } from 'framer-motion';
import { useSectionInView } from '@/lib/useInView';
import { experiencesData } from '@/lib/data';
import { useLocaleContext } from '@/containers/LocaleCtx';
import { t } from '@/lib/i18n';
import { Calendar, MapPin, Building } from 'lucide-react';

const Experience = React.memo(function Experience() {
  const { ref } = useSectionInView('#experience');
  const { locale } = useLocaleContext();

  return (
    <section ref={ref} id="experience" className="scroll-mt-28 mb-28 max-w-7xl mx-auto px-4">
      <motion.div
        initial={{ opacity: 0, y: 100 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.175 }}
        className="max-w-3xl mx-auto text-center mb-16"
      >
        <h2 className="text-3xl md:text-4xl font-bold capitalize mb-4 text-gray-900 dark:text-white">
          {t('experience_title', locale)}
        </h2>
        <p className="text-base md:text-lg text-gray-600 dark:text-gray-400">
          {t('experience_description', locale)}
        </p>
      </motion.div>

      <div className="max-w-4xl mx-auto px-4">
        <div className="space-y-8">
          {experiencesData.map((experience, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, x: index % 2 === 0 ? -100 : 100 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: index * 0.1 }}
              className={`flex flex-col ${index % 2 === 0 ? 'md:flex-row' : 'md:flex-row-reverse'} gap-8 items-center`}
            >
              {/* Contenu */}
              <div className="flex-1 space-y-4">
                <div className="flex items-center gap-2">
                  <span className="text-2xl">{experience.icon}</span>
                  <h3 className="text-xl font-semibold text-gray-900 dark:text-white">
                    {experience.title}
                  </h3>
                </div>

                <div className="flex items-center gap-4 text-sm text-gray-600 dark:text-gray-400">
                  <div className="flex items-center gap-1">
                    <Building className="w-4 h-4" />
                    <span>{experience.location}</span>
                  </div>
                  <div className="flex items-center gap-1">
                    <Calendar className="w-4 h-4" />
                    <span>{experience.date}</span>
                  </div>
                </div>

                <p className="text-gray-700 dark:text-gray-300 leading-relaxed">
                  {experience.description}
                </p>
              </div>

              {/* Timeline */}
              <div className="relative">
                <div className="w-4 h-4 bg-cyan-600 rounded-full border-4 border-white dark:border-gray-800 shadow-lg"></div>
                {index < experiencesData.length - 1 && (
                  <div className="absolute top-4 left-2 w-0.5 h-16 bg-gray-300 dark:bg-gray-600"></div>
                )}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
});

Experience.displayName = 'Experience';

export default Experience;
