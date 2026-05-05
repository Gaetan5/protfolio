'use client';
import React from 'react';
import Image from 'next/image';
import { motion } from 'framer-motion';
import { Fade } from 'react-awesome-reveal';
import Link from 'next/link';
import { BsLinkedin } from 'react-icons/bs';
import { FaGithubSquare } from 'react-icons/fa';

import { useSectionInView } from '@/lib/useInView';
import { useActiveSectionContext } from '@/containers/active-section';
import { useLocaleContext } from '@/containers/LocaleCtx';
import { t, ta } from '@/lib/i18n';
import { Mail } from 'lucide-react';
import TypewriterEffect from './TypewriterEffect';
import ScrollReveal from './scroll-reveal';

// Composant Intro : section d'accueil du portfolio avec photo, animation, et liens principaux
const Intro = React.memo(function Intro() {
  // Hook pour détecter la visibilité de la section (pour l'animation d'apparition)
  const { ref } = useSectionInView('#home', 0.5);
  // Hooks pour la gestion de la section active (navigation dynamique)
  const { setActiveSection, setTimeOfLastClick } = useActiveSectionContext();
  // Hook pour la langue courante
  const { locale } = useLocaleContext();

  return (
    // Section principale avec gestion du thème (bg, texte)
    <section
      ref={ref}
      id="home"
      className="text-center sm:mb-0 min-h-screen py-24 flex flex-col justify-center bg-transparent transition-colors duration-300"
    >
      {/* Portrait professionnel animé */}
      <div className="flex items-center justify-center">
        <div className="relative">
          <motion.div
            initial={{ opacity: 0, scale: 0 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{
              type: 'spring',
              stiffness: 125,
              damping: 15,
              duration: 0.5,
            }}
          >
            <div className="relative w-64 h-64 sm:w-80 sm:h-80 rounded-full overflow-hidden bg-gray-100 dark:bg-slate-900 border-4 border-white dark:border-slate-800 shadow-2xl dark:shadow-[0_0_50px_rgba(6,182,212,0.15)] group transition-all duration-500">
              <Image
                src="/InteractPhoto1.jpg"
                width={400}
                height={400}
                style={{ width: 'auto', height: 'auto' }}
                alt={t('intro.name', locale)}
                quality={100}
                priority={true}
                className="object-cover rounded-full group-hover:scale-105 transition-transform duration-700 ease-in-out"
              />
              <div className="absolute inset-0 bg-gradient-to-tr from-cyan-500/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
            </div>
          </motion.div>
          {/* Decorative rings */}
          <div className="absolute -inset-4 border border-cyan-500/20 rounded-full animate-[spin_20s_linear_infinite] hidden sm:block" />
          <div className="absolute -inset-8 border border-purple-500/10 rounded-full animate-[spin_30s_linear_infinite_reverse] hidden sm:block" />
        </div>
      </div>

      {/* Titre principal et sous-titre */}
      <Fade direction="up" delay={400} cascade damping={1e-1} triggerOnce={true}>
        <div className="mb-10 mt-8 px-4">
          <h1 className="text-5xl md:text-7xl font-black mb-6 tracking-tight">
            <ScrollReveal wordClassName="text-gradient drop-shadow-sm">
              {t('intro.name', locale)}
            </ScrollReveal>
          </h1>
          <div className="text-xl md:text-3xl text-slate-700 dark:text-slate-300 font-bold mb-6 italic">
            <TypewriterEffect texts={ta('intro.typewriter', locale)} />
          </div>
          <div className="text-base md:text-lg text-slate-600 dark:text-slate-400 transition-colors duration-300 max-w-2xl mx-auto leading-relaxed">
            <ScrollReveal delay={0.3}>{t('intro.sub', locale)}</ScrollReveal>
          </div>
        </div>
      </Fade>

      {/* Liens de contact */}
      <motion.div
        className="flex flex-col sm:flex-row items-center justify-center gap-6 px-4 text-lg font-bold"
        initial={{ opacity: 0, y: 100 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ delay: 0.1 }}
      >
        <Link
          href="#contact"
          className="group relative bg-slate-900 dark:bg-white text-white dark:text-slate-950 px-8 py-4 flex items-center gap-3 rounded-2xl overflow-hidden transition-all duration-300 hover:scale-105 hover:shadow-2xl hover:shadow-cyan-500/20 active:scale-95"
          onClick={() => {
            setActiveSection('#contact');
            setTimeOfLastClick(Date.now());
          }}
        >
          <div className="absolute inset-0 bg-gradient-to-r from-cyan-600 to-blue-600 opacity-0 group-hover:opacity-10 transition-opacity" />
          {t('intro.cta', locale)}
          <Mail className="w-5 h-5 group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform" />
        </Link>

        <div className="flex gap-4">
          <a
            className="glass p-4 text-slate-700 dark:text-white/80 hover:text-cyan-600 dark:hover:text-cyan-400 rounded-2xl transition-all duration-300 hover:scale-110 active:scale-95 border border-white/20 dark:border-white/10"
            href="https://linkedin.com/in/gaetan-ekoro"
            target="_blank"
          >
            <BsLinkedin className="w-6 h-6" />
          </a>

          <a
            className="glass p-4 text-slate-700 dark:text-white/80 hover:text-purple-600 dark:hover:text-purple-400 rounded-2xl transition-all duration-300 hover:scale-110 active:scale-95 border border-white/20 dark:border-white/10"
            href="https://github.com/Gaetan5"
            target="_blank"
          >
            <FaGithubSquare className="w-6 h-6" />
          </a>
        </div>
      </motion.div>
    </section>
  );
});

Intro.displayName = 'Intro';

export default Intro;
