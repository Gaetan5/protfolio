'use client';

import React from 'react';
import { motion } from 'framer-motion';
import SectionHeading from './section-heading';
import { useSectionInView } from '@/lib/useInView';
import Image from 'next/image';
import OptimizedImage from './optimized-image';
import { useLocaleContext } from '@/containers/LocaleCtx';
import { t, ta, tr } from '@/lib/i18n';
import TypewriterEffect from './TypewriterEffect';
import ScrollReveal from './scroll-reveal';
import { personalInfo } from '@/lib/data';

// Composant Section : utilisé pour structurer chaque bloc de la page About
interface SectionProps {
  title: string;
  children: React.ReactNode;
}

function Section({ title, children }: SectionProps) {
  return (
    <div className="mb-8">
      {/* Titre de section avec gestion du thème */}
      <h3 className="text-xl font-semibold mb-4 text-gray-800 dark:text-cyan-200 transition-colors duration-300">
        <ScrollReveal>{title}</ScrollReveal>
      </h3>
      {/* Contenu de la section (texte, listes, timeline, etc.) */}
      <div className="text-gray-700 dark:text-gray-300 space-y-3 transition-colors duration-300">
        {children}
      </div>
    </div>
  );
}

// Timeline animée pour expériences et formations
function Timeline({ locale }: { locale: any }) {
  const timelineData = tr('about.timeline', locale) || [];

  return (
    <div className="relative border-l-2 border-cyan-500 dark:border-cyan-400 pl-8">
      {/* Chaque étape de la timeline (expérience ou diplôme) */}
      {timelineData.map((item: any, idx: number) => (
        <motion.div
          key={idx}
          initial={{ opacity: 0, x: -40 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ delay: idx * 0.15 }}
          className="mb-10"
        >
          {/* Icône (pro ou académique) */}
          <div className="absolute -left-4 top-2 w-6 h-6 rounded-full bg-cyan-500 dark:bg-cyan-400 flex items-center justify-center text-white dark:text-gray-900 font-bold shadow dark:shadow-cyan-900/30">
            {item.type === 'pro' ? '💼' : '🎓'}
          </div>
          <div>
            {/* Année, titre, lieu, description */}
            <div className="text-sm text-gray-500 dark:text-cyan-300">{item.year}</div>
            <div className="font-bold text-gray-900 dark:text-cyan-200 transition-colors duration-300">
              {item.title}
            </div>
            <div className="italic text-cyan-700 dark:text-cyan-400">{item.place}</div>
            {item.description && (
              <div className="mt-1 text-gray-700 dark:text-gray-300">{item.description}</div>
            )}
          </div>
        </motion.div>
      ))}
    </div>
  );
}

// Composant About : page principale de présentation du portfolio
const About = React.memo(function About() {
  // Hook pour l'animation d'apparition de la section
  const { ref } = useSectionInView('#about');
  // Hook pour la langue courante
  const { locale } = useLocaleContext();

  return (
    <section ref={ref} id="about" className="scroll-mt-28 mb-28 max-w-7xl mx-auto px-4">
      {/* Titre principal de la page About */}
      <motion.div
        initial={{ opacity: 0, y: 100 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.175 }}
        className="max-w-3xl mx-auto text-center mb-16"
      >
        <h2 className="text-3xl md:text-4xl font-bold capitalize mb-4 text-gray-900 dark:text-white">
          <ScrollReveal wordClassName="text-gradient font-extrabold">
            {t('about.heading', locale)}
          </ScrollReveal>
        </h2>
      </motion.div>

      {/* Header section : présentation animée et photo */}
      <header className="text-center mb-12 max-w-3xl mx-auto">
        <p className="mt-2 text-lg">
          <TypewriterEffect
            texts={[
              t('common.hi', locale),
              t('about.job', locale),
              t('about.presentation', locale),
            ]}
            speed={55}
            delay={1200}
          />
        </p>
        <div className="flex justify-center my-6">
          <Image
            src="/profile1.png"
            width={280}
            height={280}
            alt={t('intro.name', locale)}
            quality={90}
            loading="lazy"
            className="rounded-full object-cover shadow-xl ring-4 ring-cyan-400/60 hover:scale-105 transition-transform duration-300"
          />
        </div>
        <p className="text-sm text-gray-600 dark:text-gray-400">
          <span className="bg-cyan-100 dark:bg-cyan-900 px-2 py-1 rounded font-semibold text-cyan-700 dark:text-cyan-300 shadow">
            {t('about.job', locale)}
          </span>
        </p>
      </header>

      {/* Main content : sections thématiques */}
      <article className="max-w-3xl mx-auto space-y-6 text-left">
        {/* Section présentation professionnelle (HTML depuis la traduction) */}
        <Section title={'🎯 ' + t('about.presentation', locale)}>
          <div dangerouslySetInnerHTML={{ __html: t('about.presentation_pro', locale) }} />
        </Section>

        {/* Section "What I Do" (HTML depuis la traduction) */}
        <Section title={'✨ ' + t('about.what_i_do', locale)}>
          <div dangerouslySetInnerHTML={{ __html: t('about.who_i_am', locale) }} />
        </Section>

        {/* Section stack technique */}
        <Section title={t('about.tech_stack', locale)}>
          <div className="flex justify-center">
            <Image
              src="https://skillicons.dev/icons?i=python,java,ts,js,react,nextjs,tailwind,mysql,postgres,linux,figma,raspberrypi"
              alt="Tech Stack"
              width={400}
              height={40}
              className="max-w-full w-auto h-auto"
            />
          </div>
        </Section>

        {/* Section projets phares */}
        <Section title={t('about.featured_projects', locale)}>
          <div className="flex flex-col md:flex-row md:justify-center gap-6">
            {((tr('about.featured_projects_list', locale) as any[]) || []).map(
              (project: any, idx: number) => (
                <div key={idx} className="flex flex-col items-center">
                  {project.url ? (
                    <a
                      href={project.url}
                      target="_blank"
                      rel="noopener noreferrer"
                      aria-label={project.title}
                    >
                      <Image width={80} height={80} src={project.icon} alt={project.title} />
                    </a>
                  ) : (
                    <Image width={80} height={80} src={project.icon} alt={project.title} />
                  )}
                  <b>
                    {project.url ? (
                      <a href={project.url} target="_blank" rel="noopener noreferrer">
                        {project.title}
                      </a>
                    ) : (
                      project.title
                    )}
                  </b>
                  <span className="text-sm">{project.description}</span>
                </div>
              ),
            )}
          </div>
        </Section>

        {/* Section fun facts */}
        <Section title={t('about.fun_facts', locale)}>
          <ul className="list-disc ml-6 space-y-1 text-left">
            {ta('about.fun_facts_list', locale).map((fact, idx) => (
              <li key={idx}>{fact}</li>
            ))}
          </ul>
        </Section>

        {/* Timeline animée (expériences + diplômes) */}
        <Section title={t('about.experience', locale) + ' & ' + t('about.education', locale)}>
          <Timeline locale={locale} />
        </Section>

        {/* Bouton de téléchargement du CV */}
        <div className="my-8 flex flex-col items-center">
          <a
            href={personalInfo.cvPath}
            download={personalInfo.cvFileName}
            className="inline-block px-6 py-2 bg-cyan-600 text-white rounded hover:bg-cyan-700 dark:bg-cyan-400 dark:text-gray-900 dark:hover:bg-cyan-300 transition"
          >
            {t('about.cv_download', locale)}
          </a>
        </div>

        {/* Section contact & réseaux sociaux */}
        <Section title={t('about.contact_networks', locale)}>
          <div className="flex flex-wrap justify-center gap-2">
            <a
              href={personalInfo.github}
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Visiter mon profil GitHub"
              title="GitHub Profile"
            >
              <OptimizedImage
                src="https://img.shields.io/badge/GitHub-181717?style=for-the-badge&logo=github&logoColor=white"
                alt="Badge GitHub"
                width={120}
                height={32}
                isBadge={true}
              />
            </a>
            <a
              href={personalInfo.linkedin}
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Visiter mon profil LinkedIn"
              title="LinkedIn Profile"
            >
              <OptimizedImage
                src="https://img.shields.io/badge/LinkedIn-0077B5?style=for-the-badge&logo=linkedin&logoColor=white"
                alt="Badge LinkedIn"
                width={120}
                height={32}
                isBadge={true}
              />
            </a>
            <a
              href={personalInfo.twitter}
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Visiter mon profil Twitter/X"
              title="Twitter/X Profile"
            >
              <OptimizedImage
                src="https://img.shields.io/badge/Twitter-1DA1F2?style=for-the-badge&logo=twitter&logoColor=white"
                alt="Badge Twitter"
                width={120}
                height={32}
                isBadge={true}
              />
            </a>
            <a
              href={`mailto:${personalInfo.email}`}
              aria-label="M'envoyer un email"
              title="Email Contact"
            >
              <OptimizedImage
                src="https://img.shields.io/badge/Email-D14836?style=for-the-badge&logo=gmail&logoColor=white"
                alt="Badge Email"
                width={120}
                height={32}
                isBadge={true}
              />
            </a>
            <a
              href="https://gaetan-ekoro.onrender.com/"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Voir mon ancien portfolio"
              title="Portfolio Website"
            >
              <OptimizedImage
                src="https://img.shields.io/badge/Portfolio-000000?style=for-the-badge&logo=about-dot-me&logoColor=white"
                alt="Badge Portfolio"
                width={120}
                height={32}
                isBadge={true}
              />
            </a>
            <a
              href="https://wa.me/237693813701"
              target="_blank"
              rel="noopener noreferrer"
              aria-label={t('about.whatsapp', locale)}
            >
              <OptimizedImage
                src="https://img.shields.io/badge/WhatsApp-25D366?style=for-the-badge&logo=whatsapp&logoColor=white"
                alt="WhatsApp"
                width={120}
                height={32}
                isBadge={true}
              />
            </a>
          </div>
        </Section>
      </article>
    </section>
  );
});

About.displayName = 'About';

export default About;
