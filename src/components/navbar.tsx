'use client';

import { links } from '@/lib/data';
import React from 'react';
import Header from './header';
import HamburgerMenu from './hamburger-menu';
import { useLocaleContext } from '../containers/LocaleCtx';
import { t } from '@/lib/i18n';

const locales = ['fr', 'en'] as const;

import LanguageSwitcher from './language-switcher';

export default function Navbar() {
  const { locale } = useLocaleContext();
  return (
    <nav className="sticky top-0 z-[999] w-full notranslate bg-white/20 dark:bg-gray-950/20 backdrop-blur-lg border-b border-white/10 dark:border-black/20">
      <div className="flex justify-end items-center p-2 px-4 max-w-7xl mx-auto">
        <LanguageSwitcher />
      </div>
      <HamburgerMenu links={links} />
      <Header links={links} />
    </nav>
  );
}
