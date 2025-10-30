'use client';

import React, { useState, useRef, useEffect } from 'react';
import { motion } from 'framer-motion';
import SectionHeading from './section-heading';
import { useSectionInView } from '@/lib/useInView';
import Image from 'next/image';
import OptimizedImage from './optimized-image';
import { useLocaleContext } from '@/containers/LocaleCtx';
import { t } from '@/lib/i18n';
import Bio from './Bio';

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
        {title}
      </h3>
      {/* Contenu de la section (texte, listes, timeline, etc.) */}
      <div className="text-gray-700 dark:text-gray-300 space-y-3 transition-colors duration-300">
        {children}
      </div>
    </div>
  );
}

// Ajout du composant Timeline pour expériences et formations
const timeline = [
  {
    year: '2024',
    title: 'Licence - Génie Électrique et Informatique Industrielle',
    place: 'IUT de Douala',
    type: 'academic',
  },
  {
    year: '2020',
    title: 'Bachelor ESG-TI',
    place: 'Lycée Bilingue de Yaoundé',
    type: 'academic',
  },
  {
    year: '2022-2024',
    title: 'Développeur Full Stack',
    place: 'EKOSERX',
    type: 'pro',
    description:
      "Développement d'une plateforme de téléconsultation médicale (API sécurisée, visioconférence, messagerie temps réel, gestion des rendez-vous).",
  },
  {
    year: '2021-2022',
    title: 'Ingénieur IoT',
    place: 'Projet Voiture médicalisée',
    type: 'pro',
    description:
      'Intégration d’un système de géolocalisation et de sécurité embarqué en temps réel.',
  },
  {
    year: '2025-202X',
    title: 'Développeur API',
    place: 'Mega-Ique Digital',
    type: 'pro',
    description:
      'Conception d’une API robuste pour la gestion des produits et commandes entre ces deux plateformes.',
  },
  {
    year: '2019-2020',
    title: 'Développeur',
    place: 'InterPay',
    type: 'pro',
    description:
      'Application de paiement de tickets en ligne avec génération de QR code, confirmation utilisateur et gestion des abonnements.',
  },
  {
    year: '2018-...',
    title: 'Fondateur',
    place: 'INTERACT',
    type: 'pro',
    description:
      'Écosystème technologique pour l’Afrique, démocratisation de la digitalisation et sécurité des données.',
  },
];

// Timeline animée pour expériences et formations
function Timeline() {
  return (
    <div className="relative border-l-2 border-cyan-500 dark:border-cyan-400 pl-8">
      {/* Chaque étape de la timeline (expérience ou diplôme) */}
      {timeline.map((item, idx) => (
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

// Composant Typewriter : effet d'écriture animée pour la présentation
function Typewriter({
  texts,
  speed = 60,
  pause = 1200,
}: {
  texts: string[];
  speed?: number;
  pause?: number;
}) {
  // Gestion de l'animation lettre par lettre
  const [displayed, setDisplayed] = useState('');
  const [index, setIndex] = useState(0);
  const [subIndex, setSubIndex] = useState(0);
  const [reverse, setReverse] = useState(false);
  const timeoutRef = useRef<ReturnType<typeof setTimeout>>();

  useEffect(() => {
    if (index === texts.length) return;

    const currentText = texts[index];
    if (!currentText) return;

    if (!reverse && subIndex === currentText.length) {
      timeoutRef.current = setTimeout(() => setReverse(true), pause);
      return;
    }
    if (reverse && subIndex === 0) {
      setReverse(false);
      setIndex((prev) => (prev + 1) % texts.length);
      return;
    }

    timeoutRef.current = setTimeout(
      () => {
        setSubIndex((prev) => prev + (reverse ? -1 : 1));
      },
      reverse ? speed / 2 : speed,
    );

    setDisplayed(currentText.substring(0, subIndex));

    return () => {
      if (timeoutRef.current) {
        clearTimeout(timeoutRef.current);
      }
    };
  }, [subIndex, index, reverse, texts, speed, pause]);

  return <span className="text-cyan-600 dark:text-cyan-400 font-bold">{displayed}|</span>;
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
          {t('about_heading', locale)}
        </h2>
      </motion.div>

      {/* Header section : présentation animée et photo */}
      <header className="text-center mb-12 max-w-3xl mx-auto">
        <p className="mt-2 text-lg">
          <Typewriter
            texts={[
              t('about_hi', locale) + ' Gaetan X Ekoro',
              t('about_job', locale),
              'Passionné par l’innovation et la tech',
              'Toujours prêt à relever de nouveaux défis',
            ]}
            speed={55}
            pause={1200}
          />
        </p>
        <div className="flex justify-center my-6">
          <Image
            src="/profile1.png"
            width={280}
            height={280}
            alt="Portrait de Gaetan X Ekoro"
            quality={90}
            loading="lazy"
            className="rounded-full object-cover shadow-xl ring-4 ring-cyan-400/60 hover:scale-105 transition-transform duration-300"
          />
        </div>
        <p className="text-sm text-gray-600 dark:text-gray-400">
          <span className="bg-cyan-100 dark:bg-cyan-900 px-2 py-1 rounded font-semibold text-cyan-700 dark:text-cyan-300 shadow">
            {t('about_job', locale)}
          </span>
        </p>
      </header>

      {/* Main content : sections thématiques */}
      <article className="max-w-3xl mx-auto space-y-6 text-left">
        {/* Section présentation professionnelle (HTML depuis la traduction) */}
        <Section title={'🎯 ' + t('about_presentation', locale)}>
          <div dangerouslySetInnerHTML={{ __html: t('about_presentation_pro', locale) }} />
        </Section>

        {/* Section "What I Do" (HTML depuis la traduction) */}
        <Section title={'✨ ' + t('about_whatido', locale)}>
          <div dangerouslySetInnerHTML={{ __html: t('about_whoami', locale) }} />
        </Section>

        {/* Section stack technique */}
        <Section title={t('about_tech_stack', locale)}>
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
        <Section title={t('about_featured_projects', locale)}>
          <div className="flex flex-col md:flex-row md:justify-center gap-6">
            <div className="flex flex-col items-center">
              <a
                href="https://gaetan-ekoro.onrender.com/"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Voir mon portfolio website"
                title="Portfolio Website"
              >
                <Image
                  width={80}
                  height={80}
                  src="https://img.icons8.com/color/96/monitor--v1.png"
                  alt="Icône portfolio website"
                />
              </a>
              <b>
                <a href="https://gaetan-ekoro.onrender.com/">Portfolio Website</a>
              </b>
              <span className="text-sm">
                🎨 Présente mon parcours, mes compétences et mes réalisations.
              </span>
            </div>
            <div className="flex flex-col items-center">
              <Image
                width={80}
                height={80}
                src="https://img.icons8.com/color/96/car--v1.png"
                alt="car project"
              />
              <b>Medicalized Electric Car Project</b>
              <span className="text-sm">
                🚗 Systèmes embarqués & sécurité pour la mobilité médicale.
              </span>
            </div>
            <div className="flex flex-col items-center">
              <Image
                width={80}
                height={80}
                src="https://img.icons8.com/color/96/qr-code.png"
                alt="ticket app"
              />
              <b>Online Ticket Payment App</b>
              <span className="text-sm">
                🎫 QR code, paiements sécurisés et abonnements utilisateurs.
              </span>
            </div>
          </div>
        </Section>

        {/* Section fun facts */}
        <Section title={t('about_fun_facts', locale)}>
          <ul className="list-disc ml-6 space-y-1 text-left">
            <li>
              🔭 En ce moment : Construire l’écosystème INTERACT / IoT pour la santé & la sécurité
              et toute solution pour Start-up et Entreprise
            </li>
            <li>
              🧑‍💻 J’automatise ma maison avec des microcontrôleurs, Intergre aussi l&apos;IA dans
              toute solution du quotidien
            </li>
            <li>📚 Toujours en veille sur l’IA, le cloud et la cybersécurité</li>
            <li>🎬 Je dessine des persos manga, je binge du sci-fi et je rêve de robots utiles</li>
          </ul>
        </Section>

        {/* Timeline animée (expériences + diplômes) */}
        <Section title={t('about_experience', locale) + ' & ' + t('about_education', locale)}>
          <Timeline />
        </Section>

        {/* Bouton de téléchargement du CV */}
        <div className="my-8 flex flex-col items-center">
          <a
            href="/CV-2025_GAETAN EKORO EDOUARD.pdf"
            download
            className="inline-block px-6 py-2 bg-cyan-600 text-white rounded hover:bg-cyan-700 dark:bg-cyan-400 dark:text-gray-900 dark:hover:bg-cyan-300 transition"
          >
            {t('about_cv_download', locale)}
          </a>
        </div>

        {/* Section contact & réseaux sociaux */}
        <Section title={t('about_contact_networks', locale)}>
          <div className="flex flex-wrap justify-center gap-2">
            <a
              href="https://github.com/Gaetan5"
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
              href="https://www.linkedin.com/in/gaetan-x-ekoro-56z"
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
              href="https://x.com/Gaetan5"
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
              href="mailto:ekorogaetan5@gmail.com"
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
              aria-label={t('about_whatsapp', locale)}
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
