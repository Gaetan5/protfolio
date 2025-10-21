'use client';
import React from 'react';
import { useLocaleContext } from '../containers/LocaleCtx';
import { t } from '@/lib/i18n';
import { Github, Linkedin, Mail, Twitter } from 'lucide-react';

const Footer = React.memo(function Footer() {
  const { locale } = useLocaleContext();

  const socialLinks = [
    {
      name: 'GitHub',
      url: 'https://github.com/Gaetan5',
      icon: <Github className="w-5 h-5" />,
    },
    {
      name: 'LinkedIn',
      url: 'https://www.linkedin.com/in/gaetan-x-ekoro-56z/',
      icon: <Linkedin className="w-5 h-5" />,
    },
    {
      name: 'Twitter',
      url: 'https://x.com/Gaetan5',
      icon: <Twitter className="w-5 h-5" />,
    },
    {
      name: 'Email',
      url: 'mailto:ekorogaetan5@gmail.com',
      icon: <Mail className="w-5 h-5" />,
    },
  ];

  return (
    <footer className="bg-white dark:bg-gray-900 border-t border-gray-200 dark:border-gray-800">
      <div className="max-w-6xl mx-auto px-4 py-12">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {/* Informations personnelles */}
          <div className="text-center md:text-left">
            <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-4">
              Gaetan X Ekoro
            </h3>
            <p className="text-gray-600 dark:text-gray-300 text-sm mb-4">
              Back-End Engineer & Logo Designer
            </p>
            <p className="text-gray-500 dark:text-gray-400 text-sm">{t('footer_quote', locale)}</p>
          </div>

          {/* Liens rapides */}
          <div className="text-center">
            <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-4">Navigation</h3>
            <ul className="space-y-2 text-sm">
              <li>
                <a
                  href="#home"
                  className="text-gray-600 dark:text-gray-300 hover:text-cyan-600 dark:hover:text-cyan-400 transition-colors"
                >
                  Accueil
                </a>
              </li>
              <li>
                <a
                  href="#about"
                  className="text-gray-600 dark:text-gray-300 hover:text-cyan-600 dark:hover:text-cyan-400 transition-colors"
                >
                  À propos
                </a>
              </li>
              <li>
                <a
                  href="#projects"
                  className="text-gray-600 dark:text-gray-300 hover:text-cyan-600 dark:hover:text-cyan-400 transition-colors"
                >
                  Projets
                </a>
              </li>
              <li>
                <a
                  href="#contact"
                  className="text-gray-600 dark:text-gray-300 hover:text-cyan-600 dark:hover:text-cyan-400 transition-colors"
                >
                  Contact
                </a>
              </li>
            </ul>
          </div>

          {/* Liens sociaux */}
          <div className="text-center md:text-right">
            <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-4">
              Réseaux sociaux
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
        </div>

        {/* Copyright */}
        <div className="border-t border-gray-200 dark:border-gray-800 mt-8 pt-8 text-center">
          <p className="text-sm text-gray-500 dark:text-gray-400">
            {t('footer_copyright', locale)}
          </p>
        </div>
      </div>
    </footer>
  );
});

Footer.displayName = 'Footer';

export default Footer;
