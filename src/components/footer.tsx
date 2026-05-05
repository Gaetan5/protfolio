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
      className="relative overflow-hidden bg-gradient-to-br from-slate-50 via-cyan-50/20 to-slate-50 dark:from-slate-950 dark:via-blue-950/30 dark:to-slate-950 border-t border-slate-200 dark:border-slate-800 notranslate transition-all duration-700"
      translate="no"
    >
      {/* Decorative background elements */}
      <div className="absolute top-0 left-1/4 w-96 h-96 bg-cyan-500/5 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute bottom-0 right-1/4 w-96 h-96 bg-purple-500/5 rounded-full blur-3xl pointer-events-none" />

      <div className="relative z-10 max-w-7xl mx-auto px-4 py-16">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-12">
          {/* Informations personnelles */}
          <div className="text-center md:text-left space-y-4">
            <h3
              className="text-2xl font-black text-slate-900 dark:text-white tracking-tight"
              suppressHydrationWarning
            >
              {t('intro.name', locale)}
            </h3>
            <p className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-600 to-blue-600 dark:from-cyan-400 dark:to-blue-400 text-sm font-black uppercase tracking-widest" suppressHydrationWarning>
              {t('intro.title', locale)}
            </p>
            <p
              className="text-slate-500 dark:text-slate-400 text-sm leading-relaxed font-bold"
              suppressHydrationWarning
            >
              {t('footer.description', locale)}
            </p>
          </div>

          {/* Liens rapides */}
          <div className="text-center">
            <h3 className="text-lg font-black text-slate-900 dark:text-white mb-6 uppercase tracking-widest">
              {t('footer.quickLinks', locale)}
            </h3>
            <ul className="space-y-3 text-sm font-black">
              {[
                { hash: '#home', key: 'home' },
                { hash: '#about', key: 'about' },
                { hash: '#projects', key: 'projects' },
                { hash: '#contact', key: 'contact' }
              ].map((link) => (
                <li key={link.hash}>
                  <a
                    href={link.hash}
                    className="text-slate-500 dark:text-slate-400 hover:text-cyan-600 dark:hover:text-cyan-400 transition-colors duration-300"
                  >
                    <span suppressHydrationWarning>{t(`nav.${link.key}`, locale)}</span>
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Liens sociaux */}
          <div className="text-center md:text-right">
            <h3 className="text-lg font-black text-slate-900 dark:text-white mb-6 uppercase tracking-widest">
              {t('footer.followMe', locale)}
            </h3>
            <div className="flex justify-center md:justify-end gap-4">
              {socialLinks.map((link) => (
                <a
                  key={link.name}
                  href={link.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="p-4 glass rounded-2xl text-slate-500 dark:text-slate-400 hover:bg-gradient-to-br hover:from-cyan-500 hover:to-blue-600 hover:text-white hover:scale-110 transition-all duration-300 shadow-lg border border-white/20 dark:border-white/5"
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
              className="text-lg font-black text-slate-900 dark:text-white mb-6 uppercase tracking-widest"
              suppressHydrationWarning
            >
              {t('footer.partners', locale)}
            </h3>
            <div className="flex justify-center md:justify-end gap-6 items-center flex-wrap">
              <Image
                src="/projet traiter/partenaire.svg"
                alt="Partenaire"
                width={80}
                height={40}
                style={{ width: 'auto', height: 'auto' }}
                className="opacity-60 hover:opacity-100 transition-all duration-500 dark:invert hover:scale-110"
              />
              <Image
                src="/projet traiter/logo_interact.png"
                alt="Logo Interact"
                width={80}
                height={40}
                style={{ width: 'auto', height: 'auto' }}
                className="opacity-60 hover:opacity-100 transition-all duration-500 hover:scale-110"
              />
              <Image
                src="/projet traiter/projetSocial1.jpeg"
                alt="Projet Social 1"
                width={60}
                height={30}
                style={{ width: 'auto', height: 'auto' }}
                className="opacity-60 hover:opacity-100 transition-all duration-500 rounded-lg hover:scale-110"
              />
              <Image
                src="/projet traiter/projetSocial2.jpeg"
                alt="Projet Social 2"
                width={60}
                height={30}
                style={{ width: 'auto', height: 'auto' }}
                className="opacity-60 hover:opacity-100 transition-all duration-500 rounded-lg hover:scale-110"
              />
            </div>
          </div>
        </div>

        {/* Copyright */}
        <div className="border-t border-slate-200 dark:border-slate-800 mt-16 pt-8 flex flex-col md:flex-row justify-between items-center gap-4">
          <p className="text-xs font-bold text-slate-400 dark:text-slate-500 uppercase tracking-widest" suppressHydrationWarning>
            {t('footer.rights', locale)}
          </p>
          <p className="text-[10px] font-black text-slate-300 dark:text-slate-600 uppercase tracking-[0.2em]" suppressHydrationWarning>
            {t('footer.developer', locale)}
          </p>
        </div>
      </div>
    </footer>
  );
});

Footer.displayName = 'Footer';

export default Footer;
