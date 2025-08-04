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
import { t } from '@/lib/i18n';
import { Mail } from 'lucide-react';
import TypewriterEffect from './TypewriterEffect';

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
      className="text-center sm:mb-0 h-screen flex flex-col justify-center bg-white dark:bg-gray-900 transition-colors duration-300"
    >
      {/* Bandeaux animés et image de présentation */}
      <div className="flex flex-col items-center justify-center gap-4 mb-6">
        {/* Animation de texte typewriter moderne */}
        <div className="text-center mb-4">
          <h1 className="text-4xl md:text-6xl font-bold text-gray-900 dark:text-cyan-300 mb-4">
            <span className="bg-gradient-to-r from-cyan-600 to-blue-600 dark:from-cyan-400 dark:to-blue-400 bg-clip-text text-transparent">
              Gaetan X Ekoro
            </span>
          </h1>
          <div className="text-xl md:text-2xl text-gray-700 dark:text-gray-300 font-medium">
            <TypewriterEffect
              texts={['Back-End Engineer', 'Logo Designer', 'Embedded Systems Innovator']}
            />
          </div>
        </div>
        {/* Image de bannière tech */}
        <Image
          src="https://images.unsplash.com/photo-1461749280684-dccba630e2f6?auto=format&fit=crop&w=900&q=80"
          alt="Tech Banner"
          width={900}
          height={400}
          priority={true}
          className="rounded-lg shadow-lg w-full max-w-2xl bg-white dark:bg-gray-900 dark:shadow-cyan-900/30"
        />
      </div>

      {/* Portrait professionnel animé */}
      <div className="flex items-center justify-center">
        <div className="relative">
          <motion.div
            initial={{ opacity: 0, scale: 0 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{
              type: 'spring',
              stiffness: 125,
              damping: 10,
              duration: 0.2,
            }}
          >
            <div className="relative w-60 h-60 sm:w-80 sm:h-80 rounded-full overflow-hidden bg-gray-100 dark:bg-gray-800">
              <Image
                src="/InteractPhoto1.jpg"
                width={400}
                height={400}
                alt="Portrait professionnel de Gaetan X Ekoro"
                quality={100}
                priority={true}
                className="object-cover shadow-xl rounded-full ring-4 ring-cyan-400/60 dark:ring-cyan-600/60 dark:shadow-cyan-900/30"
              />
            </div>
          </motion.div>
        </div>
      </div>

      {/* Titre principal et sous-titre avec gestion du thème */}
      <Fade direction="up" delay={400} cascade damping={1e-1} triggerOnce={true}>
        <h1 className="mb-10 mt-4 px-4 text-2xl sm:text-4xl">
          <span className="font-medium !leading-[1.5] text-gray-900 dark:text-cyan-300 transition-colors duration-300">
            {t('intro_headline', locale)}
          </span>{' '}
          <p className="text-[14px] text-gray-700 dark:text-gray-400 transition-colors duration-300">
            {t('intro_sub', locale)}
          </p>
        </h1>
      </Fade>

      {/* Liens de contact principaux avec gestion du thème et accessibilité */}
      <motion.div
        className="flex sm:flex-row items-center justify-center gap-4 px-4 text-lg font-medium"
        initial={{ opacity: 0, y: 100 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{
          delay: 0.1,
        }}
      ></motion.div>
    </section>
  );
});

Intro.displayName = 'Intro';

export default Intro;
