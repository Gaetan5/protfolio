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
            viewport={{ once: true, margin: '100px' }}
            transition={{
              type: 'spring',
              stiffness: 125,
              damping: 10,
              duration: 0.2,
            }}
          >
            <div className="relative w-60 h-60 sm:w-80 sm:h-80 rounded-full overflow-hidden bg-gray-100 dark:bg-gray-800 ring-4 ring-cyan-400/30 dark:ring-cyan-600/30 shadow-[0_0_50px_rgba(6,182,212,0.3)]">
              <Image
                src="/InteractPhoto1.jpg"
                width={400}
                height={400}
                alt={t('intro.name', locale)}
                quality={100}
                priority={true}
                className="object-cover rounded-full group-hover:scale-105 transition-transform duration-500"
              />
            </div>
          </motion.div>
        </div>
      </div>

      {/* Titre principal et sous-titre avec gestion du thème */}
      <Fade direction="up" delay={400} cascade damping={1e-1} triggerOnce={true}>
        <div className="mb-10 mt-4 px-4">
          <h1 className="text-4xl md:text-6xl font-extrabold mb-4">
            <ScrollReveal wordClassName="text-gradient">{t('intro.name', locale)}</ScrollReveal>
          </h1>
          <div className="text-xl md:text-2xl text-gray-700 dark:text-gray-300 font-medium mb-4">
            <TypewriterEffect texts={ta('intro.typewriter', locale)} />
          </div>
          <div className="text-base md:text-lg text-gray-600 dark:text-gray-400 transition-colors duration-300 max-w-2xl mx-auto">
            <ScrollReveal delay={0.3}>{t('intro.sub', locale)}</ScrollReveal>
          </div>
        </div>
      </Fade>

      {/* Liens de contact principaux avec gestion du thème et accessibilité */}
      <motion.div
        className="flex flex-col sm:flex-row items-center justify-center gap-4 px-4 text-lg font-medium"
        initial={{ opacity: 0, y: 100 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: '100px' }}
        transition={{
          delay: 0.1,
        }}
      >
        <Link
          href="#contact"
          className="group bg-gray-900 text-white px-7 py-3 flex items-center gap-2 rounded-full outline-none focus:scale-110 hover:scale-110 hover:bg-gray-950 active:scale-105 transition dark:bg-cyan-600 dark:hover:bg-cyan-700"
          onClick={() => {
            setActiveSection('#contact');
            setTimeOfLastClick(Date.now());
          }}
        >
          {t('intro.cta', locale)}{' '}
          <Mail className="opacity-70 group-hover:translate-x-1 transition" />
        </Link>

        <div className="flex gap-2">
          <a
            className="bg-white p-4 text-gray-700 hover:text-gray-950 flex items-center gap-2 rounded-full focus:scale-[1.15] hover:scale-[1.15] active:scale-105 transition cursor-pointer borderBlack dark:bg-white/10 dark:text-white/60"
            href="https://linkedin.com/in/gaetan-ekoro"
            target="_blank"
          >
            <BsLinkedin />
          </a>

          <a
            className="bg-white p-4 text-gray-700 flex items-center gap-2 text-[1.35rem] rounded-full focus:scale-[1.15] hover:scale-[1.15] hover:text-gray-950 active:scale-105 transition cursor-pointer borderBlack dark:bg-white/10 dark:text-white/60"
            href="https://github.com/Gaetan5"
            target="_blank"
          >
            <FaGithubSquare />
          </a>
        </div>
      </motion.div>
    </section>
  );
});

Intro.displayName = 'Intro';

export default Intro;
