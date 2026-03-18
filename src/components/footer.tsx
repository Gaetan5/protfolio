'use client';
import React from 'react';
import Image from 'next/image';
import { useLocaleContext } from '../containers/LocaleCtx';
import { t } from '@/lib/i18n';
import { Github, Linkedin, Mail, Twitter } from 'lucide-react';
import { personalInfo } from '@/lib/data';

const Footer = React.memo(function Footer() {
  const { locale } = useLocaleContext();

  const socialLinks = [
    {
      name: 'GitHub',
      url: personalInfo.github,
      icon: <Github className="w-5 h-5" />,
    },
    {
      name: 'LinkedIn',
      url: personalInfo.linkedin,
      icon: <Linkedin className="w-5 h-5" />,
    },
    {
      name: 'Twitter',
      url: 'https://x.com/Gaetan5',
      icon: <Twitter className="w-5 h-5" />,
    },
    {
      name: 'Email',
      url: `mailto:${personalInfo.email}`,
      icon: <Mail className="w-5 h-5" />,
    },
  ];

  return (
    <footer
      className="bg-white dark:bg-gray-900 border-t border-gray-200 dark:border-gray-800 notranslate"
      translate="no"
    >
      <div className="max-w-7xl mx-auto px-4 py-12">
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-8">
          {/* Informations personnelles */}
          <div className="text-center md:text-left">
            <h3
              className="text-lg font-semibold text-gray-900 dark:text-white mb-2"
              suppressHydrationWarning
            >
              {t('intro.name', locale)}
            </h3>
            <p
              className="text-gray-600 dark:text-gray-300 text-sm mb-4"
              suppressHydrationWarning
            >
              {t('intro.title', locale)}
            </p>
            <p
              className="text-gray-500 dark:text-gray-400 text-sm leading-relaxed"
              suppressHydrationWarning
            >
              {t('footer.description', locale)}
            </p>
          </div>

          {/* Liens rapides */}
          <div className="text-center">
            <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-4">
              {t('footer.quickLinks', locale)}
            </h3>
            <ul className="space-y-2 text-sm">
              <li>
                <a
                  href="#home"
                  className="text-gray-600 dark:text-gray-300 hover:text-cyan-600 dark:hover:text-cyan-400 transition-colors"
                >
                  <span suppressHydrationWarning>{t('nav.home', locale)}</span>
                </a>
              </li>
              <li>
                <a
                  href="#about"
                  className="text-gray-600 dark:text-gray-300 hover:text-cyan-600 dark:hover:text-cyan-400 transition-colors"
                >
                  <span suppressHydrationWarning>{t('nav.about', locale)}</span>
                </a>
              </li>
              <li>
                <a
                  href="#projects"
                  className="text-gray-600 dark:text-gray-300 hover:text-cyan-600 dark:hover:text-cyan-400 transition-colors"
                >
                  <span suppressHydrationWarning>{t('nav.projects', locale)}</span>
                </a>
              </li>
              <li>
                <a
                  href="#contact"
                  className="text-gray-600 dark:text-gray-300 hover:text-cyan-600 dark:hover:text-cyan-400 transition-colors"
                >
                  <span suppressHydrationWarning>{t('nav.contact', locale)}</span>
                </a>
              </li>
            </ul>
          </div>

          {/* Liens sociaux */}
          <div className="text-center md:text-right">
            <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-4">
              {t('footer.followMe', locale)}
            </h3>
            <div className="flex justify-center md:justify-end space-x-4">
              {socialLinks.map((link) => (
                <a
                  key={link.name}
                  href={link.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="p-2 bg-gray-100 dark:bg-gray-800 rounded-full text-gray-600 dark:text-gray-300 hover:bg-cyan-100 dark:hover:bg-cyan-900 hover:text-cyan-600 dark:hover:text-cyan-400 transition-all duration-300"
                  aria-label={link.name}
                >
                  {link.icon}
                </a>
              ))}
            </div>
          </div>

          {/* Partenaires */}
          <div className="text-center md:text-right">
            <h3
              className="text-lg font-semibold text-gray-900 dark:text-white mb-4"
              suppressHydrationWarning
            >
              {t('footer.partners', locale)}
            </h3>
            <div className="flex justify-center md:justify-end gap-4 items-center flex-wrap">
              <Image
                src="/projet traiter/partenaire.svg"
                alt="Partenaire"
                width={100}
                height={50}
                style={{ height: '35px', width: 'auto' }}
                className="opacity-70 hover:opacity-100 transition-opacity dark:invert"
              />
              <Image
                src="/projet traiter/logo_interact.png"
                alt="Logo Interact"
                width={100}
                height={50}
                style={{ height: '35px', width: 'auto' }}
                className="opacity-70 hover:opacity-100 transition-opacity"
              />
              <Image
                src="/projet traiter/projetSocial1.jpeg"
                alt="Projet Social 1"
                width={100}
                height={50}
                style={{ height: '35px', width: 'auto' }}
                className="opacity-70 hover:opacity-100 transition-opacity rounded-sm"
              />
              <Image
                src="/projet traiter/projetSocial2.jpeg"
                alt="Projet Social 2"
                width={100}
                height={50}
                style={{ height: '35px', width: 'auto' }}
                className="opacity-70 hover:opacity-100 transition-opacity rounded-sm"
              />
            </div>
          </div>
        </div>

        {/* Copyright */}
        <div className="border-t border-gray-200 dark:border-gray-800 mt-8 pt-8 text-center md:text-left">
          <p className="text-sm text-gray-500 dark:text-gray-400" suppressHydrationWarning>
            {t('footer.rights', locale)}
          </p>
          <p
            className="text-xs text-gray-400 dark:text-gray-500 mt-2"
            suppressHydrationWarning
          >
            {t('footer.developer', locale)}
          </p>
        </div>
      </div>
    </footer>
  );
});

Footer.displayName = 'Footer';

export default Footer;
