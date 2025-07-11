'use client';

import React from 'react';
import SectionHeading from './section-heading';
import { t } from '@/lib/i18n';
import { useSectionInView } from '@/lib/useInView';
import { motion } from 'framer-motion';

const fadeInAnimationVariants = {
  initial: {
    opacity: 0,
    y: 100,
  },
  animate: (index: number) => ({
    opacity: 1,
    y: 0,
    transition: {
      delay: 0.05 * index,
    },
  }),
};

import { useLocaleContext } from '@/containers/LocaleCtx';

export default function Skills() {
  const { ref } = useSectionInView('#skills');
  const { locale } = useLocaleContext();
  return (
    <section
      id="skills"
      ref={ref}
      className="mb-28 max-w-[53rem] scroll-mt-28 text-center sm:mb-40"
    >
      <SectionHeading locale={locale}>{t('skills_title', locale)}</SectionHeading>
      <ul className="flex flex-wrap justify-center gap-2 text-lg text-gray-800">
        {t('skills_list', locale).map((skill: string, index: number) => (
          <motion.li
            className="bg-white borderBlack rounded-xl px-5 py-3 dark:bg-white/10 dark:text-white/80"
            key={index}
            variants={fadeInAnimationVariants}
            initial="initial"
            whileInView="animate"
            viewport={{
              once: true,
            }}
            custom={index}
          >
            {skill}
          </motion.li>
        ))}
      </ul>
    </section>
  );
}
