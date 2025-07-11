'use client';

import React from 'react';
import { motion } from 'framer-motion';
import SectionHeading from './section-heading';
import { useSectionInView } from '@/lib/useInView';
import Image from 'next/image';
import { useLocaleContext } from '@/containers/LocaleCtx';
import { t } from '@/lib/i18n';

// Section component for better organization

interface SectionProps {
  title: string;
  children: React.ReactNode;
}

function Section({ title, children }: SectionProps) {
  return (
    <div className="mb-8">
      <h3 className="text-xl font-semibold mb-4 text-gray-800 dark:text-gray-200">{title}</h3>
      <div className="text-gray-700 dark:text-gray-300 space-y-3">{children}</div>
    </div>
  );
}

// About component
export default function About() {
  const { ref } = useSectionInView('#about');
  const { locale } = useLocaleContext();

  return (
    <motion.section
      className="max-w-[45rem] text-center mt-32 leading-8 mb-28 sm:mb-40 scroll-mt-28"
      initial={{ opacity: 0, y: 100 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ delay: 0.175 }}
      ref={ref}
      id="about"
    >
      <SectionHeading locale={locale}>{t('about_heading', locale)}</SectionHeading>

      {/* Header section */}
      <header className="text-center mb-6 mt-10">
        <p className="mt-2 text-lg">
          👋 {t('about_hi', locale)} <br />
          <strong>Gaetan X Ekoro (Gaetan X)</strong>
        </p>
        <div className="flex justify-center my-6">
          <Image
            src="/profile1.png"
            width={280}
            height={280}
            alt="Portrait de Gaetan X Ekoro"
            quality={90}
            loading="lazy"
            className="rounded-full object-cover shadow-xl"
          />
        </div>
        <p className="text-sm text-gray-600 dark:text-gray-400">{t('about_job', locale)}</p>
      </header>

      {/* Main content */}
      <article className="max-w-3xl mx-auto space-y-6 text-left">
        {/* Presentation Section */}
        <Section title={'🎯 ' + t('about_presentation', locale)}>
          <p dangerouslySetInnerHTML={{ __html: t('about_presentation_1', locale) }} />
          <p dangerouslySetInnerHTML={{ __html: t('about_presentation_2', locale) }} />
          <p>{t('about_presentation_3', locale)}</p>
          <ul className="list-disc list-inside ml-4">
            <li dangerouslySetInnerHTML={{ __html: t('about_presentation_hobbies_1', locale) }} />
            <li dangerouslySetInnerHTML={{ __html: t('about_presentation_hobbies_2', locale) }} />
            <li dangerouslySetInnerHTML={{ __html: t('about_presentation_hobbies_3', locale) }} />
            <li dangerouslySetInnerHTML={{ __html: t('about_presentation_hobbies_4', locale) }} />
          </ul>
        </Section>

        {/* What I Do Section */}
        <Section title={'✨ ' + t('about_whatido', locale)}>
          <ul className="list-disc list-inside ml-4">
            <li>{t('about_whatido_1', locale)}</li>
            <li>{t('about_whatido_2', locale)}</li>
            <li>{t('about_whatido_3', locale)}</li>
            <li>{t('about_whatido_4', locale)}</li>
          </ul>
        </Section>

        {/* Featured Projects Section */}
        <Section title={'📂 ' + t('about_featured', locale)}>
          <ul className="list-disc list-inside ml-4">
            <li dangerouslySetInnerHTML={{ __html: t('about_featured_1', locale) }} />
            <li dangerouslySetInnerHTML={{ __html: t('about_featured_2', locale) }} />
            <li dangerouslySetInnerHTML={{ __html: t('about_featured_3', locale) }} />
          </ul>
        </Section>

        {/* GitHub Stats Section */}
        <Section title={'📈 ' + t('about_github', locale)}>
          <div className="flex flex-col items-center space-y-4">
            <div className="w-full max-w-md">
              <Image
                src="https://github-readme-stats.vercel.app/api?username=Gaetan5&show_icons=true&theme=github_dark"
                alt="Statistiques GitHub de Gaetan5"
                width={400}
                height={200}
                loading="lazy"
                className="w-full h-auto rounded-lg"
              />
            </div>
            <div className="w-full max-w-sm">
              <Image
                src="https://github-readme-stats.vercel.app/api/top-langs/?username=Gaetan5&layout=compact&theme=github_dark"
                alt="Langages principaux de Gaetan5"
                width={300}
                height={150}
                loading="lazy"
                className="w-full h-auto rounded-lg"
              />
            </div>
          </div>
        </Section>

        {/* Contact Section */}
        <Section title={'📫 ' + t('about_contact', locale)}>
          <ul className="list-disc list-inside ml-4">
            <li>
              <strong>{t('about_linkedin', locale)}</strong>:{' '}
              <a
                href="https://linkedin.com/in/gaetan-ekoro"
                className="text-blue-600 hover:underline"
              >
                Gaetan Ekoro
              </a>
            </li>
            <li>
              <strong>{t('about_twitter', locale)}</strong>:{' '}
              <a href="https://x.com/Gaetan5" className="text-blue-600 hover:underline">
                @Gaetan5
              </a>
            </li>
            <li>
              <strong>{t('about_email', locale)}</strong>:{' '}
              <a href="mailto:ekorogaetan5@gmail.com" className="text-blue-600 hover:underline">
                ekorogaetan5@gmail.com
              </a>
            </li>
          </ul>
        </Section>
      </article>
    </motion.section>
  );
}
