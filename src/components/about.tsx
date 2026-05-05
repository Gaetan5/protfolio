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
    <motion.div 
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      className="mb-12 glass p-8 rounded-3xl border border-white/20 dark:border-white/5 shadow-xl transition-all duration-500"
    >
      <h3 className="text-2xl font-black mb-6 text-slate-900 dark:text-white flex items-center gap-3">
        <ScrollReveal>{title}</ScrollReveal>
      </h3>
      <div className="text-slate-600 dark:text-slate-300 space-y-4 leading-relaxed font-medium">
        {children}
      </div>
    </motion.div>
  );
}

function Timeline({ locale }: { locale: any }) {
  const timelineData = tr('about.timeline', locale) || [];

  return (
    <div className="relative border-l-4 border-slate-200 dark:border-slate-800 pl-8 ml-2">
      {timelineData.map((item: any, idx: number) => (
        <motion.div
          key={idx}
          initial={{ opacity: 0, x: -40 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ delay: idx * 0.1 }}
          className="mb-12 relative"
        >
          <div className="absolute -left-[42px] top-1 w-5 h-5 rounded-full bg-white dark:bg-slate-950 border-4 border-cyan-500 shadow-[0_0_10px_rgba(6,182,212,0.5)] z-10" />
          <div className="flex flex-col gap-1">
            <div className="text-xs font-black text-cyan-600 dark:text-cyan-400 uppercase tracking-widest">{item.year}</div>
            <div className="text-lg font-black text-slate-900 dark:text-white tracking-tight">
              {item.title}
            </div>
            <div className="text-sm font-bold text-slate-500 dark:text-slate-400 italic mb-2">{item.place}</div>
            {item.description && (
              <div className="text-sm text-slate-600 dark:text-slate-400 leading-relaxed">{item.description}</div>
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
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: '100px' }}
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
      <header className="text-center mb-16 max-w-3xl mx-auto">
        <p className="mt-2 text-xl md:text-2xl font-bold text-slate-700 dark:text-slate-300 italic">
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
        <div className="flex justify-center my-10">
          <div className="relative p-2 rounded-full glass border border-white/20 dark:border-white/5 shadow-2xl">
            <Image
              src="/InteractPhoto1.jpg"
              width={220}
              height={220}
              style={{ width: 'auto', height: 'auto' }}
              alt={t('intro.name', locale)}
              quality={90}
              loading="lazy"
              className="rounded-full object-cover ring-4 ring-cyan-500/20 hover:scale-105 transition-transform duration-500"
            />
          </div>
        </div>
        <div className="flex justify-center">
          <span className="inline-block px-4 py-1.5 rounded-2xl bg-cyan-500/10 dark:bg-cyan-900/30 font-black text-xs uppercase tracking-widest text-cyan-600 dark:text-cyan-400 border border-cyan-500/20">
            {t('about.job', locale)}
          </span>
        </div>
      </header>

      {/* Main content : sections thématiques */}
      <article className="max-w-4xl mx-auto text-left">
        {/* Section présentation professionnelle */}
        <Section title={'🎯 ' + t('about.presentation', locale)}>
          <div className="prose dark:prose-invert max-w-none text-lg leading-relaxed" dangerouslySetInnerHTML={{ __html: t('about.presentation_pro', locale) }} />
        </Section>

        {/* Workspace Section */}
        <Section title={'🖥️ Mon Espace d\'Innovation'}>
          <div className="relative w-full h-[400px] rounded-3xl overflow-hidden shadow-2xl border border-white/20 dark:border-white/5 group">
            <OptimizedImage
              src="/assets/projects/about-hero.jpeg"
              alt="Mon espace de travail"
              fill
              className="object-cover group-hover:scale-105 transition-transform duration-1000"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-slate-950/80 via-transparent to-transparent flex items-end p-8">
              <p className="text-white text-lg font-black italic tracking-tight">
                "C'est ici que les idées deviennent des solutions durables."
              </p>
            </div>
          </div>
        </Section>

        {/* Section "What I Do" */}
        <Section title={'✨ ' + t('about.what_i_do', locale)}>
          <div className="prose dark:prose-invert max-w-none" dangerouslySetInnerHTML={{ __html: t('about.who_i_am', locale) }} />
        </Section>

        {/* Section stack technique */}
        <Section title={'🛠️ ' + t('about.tech_stack', locale)}>
          <div className="flex justify-center p-6 bg-white/50 dark:bg-slate-900/50 rounded-2xl backdrop-blur-sm border border-white/10">
            <Image
              src="https://skillicons.dev/icons?i=python,java,ts,js,react,nextjs,tailwind,mysql,postgres,linux,figma,raspberrypi"
              alt="Tech Stack"
              width={500}
              height={50}
              style={{ width: 'auto', height: 'auto' }}
              className="max-w-full w-auto h-auto"
            />
          </div>
        </Section>

        {/* Section projets phares */}
        <Section title={'🚀 ' + t('about.featured_projects', locale)}>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {((tr('about.featured_projects_list', locale) as any[]) || []).map(
              (project: any, idx: number) => (
                <div key={idx} className="flex items-center gap-6 p-4 rounded-2xl hover:bg-slate-50 dark:hover:bg-slate-800/50 transition-colors group">
                  <div className="w-16 h-16 shrink-0 rounded-2xl glass p-2 flex items-center justify-center group-hover:scale-110 transition-transform">
                    <Image width={48} height={48} style={{ width: 'auto', height: 'auto' }} src={project.icon} alt={project.title} className="object-contain" />
                  </div>
                  <div className="flex flex-col">
                    <b className="text-lg text-slate-900 dark:text-white">
                      {project.url ? (
                        <a href={project.url} target="_blank" rel="noopener noreferrer" className="hover:text-cyan-500 transition-colors">
                          {project.title}
                        </a>
                      ) : (
                        project.title
                      )}
                    </b>
                    <span className="text-sm text-slate-500 dark:text-slate-400 font-medium">{project.description}</span>
                  </div>
                </div>
              ),
            )}
          </div>
        </Section>

        {/* Section fun facts */}
        <Section title={'💡 ' + t('about.fun_facts', locale)}>
          <ul className="grid grid-cols-1 md:grid-cols-2 gap-4">
            {ta('about.fun_facts_list', locale).map((fact, idx) => (
              <li key={idx} className="flex items-start gap-3 p-3 rounded-xl bg-slate-50 dark:bg-slate-800/30 text-sm font-medium">
                <span className="text-cyan-500 mt-1">▹</span>
                {fact}
              </li>
            ))}
          </ul>
        </Section>

        {/* Timeline animée */}
        <Section title={'🏛️ ' + t('about.experience', locale) + ' & ' + t('about.education', locale)}>
          <Timeline locale={locale} />
        </Section>

        {/* Bouton de téléchargement du CV */}
        <div className="my-16 flex flex-col items-center">
          <a
            href={personalInfo.cvPath}
            download={personalInfo.cvFileName}
            className="group relative px-10 py-4 bg-slate-900 dark:bg-white text-white dark:text-slate-950 font-black uppercase tracking-widest text-sm rounded-2xl overflow-hidden transition-all duration-300 hover:scale-105 hover:shadow-2xl hover:shadow-cyan-500/20 active:scale-95"
          >
            <div className="absolute inset-0 bg-gradient-to-r from-cyan-600 to-blue-600 opacity-0 group-hover:opacity-10 transition-opacity" />
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
