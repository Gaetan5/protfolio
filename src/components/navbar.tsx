'use client';

import { links } from '@/lib/data';
import React from 'react';
import Header from './header';
import HamburgerMenu from './hamburger-menu';
import { useLocaleContext } from '../containers/LocaleCtx';
import { t } from '@/lib/i18n';

const locales = ['fr', 'en'] as const;

export default function Navbar() {
  const { locale, setLocale } = useLocaleContext();
  return (
    <nav className="sticky top-0 z-[999] w-full notranslate bg-white/20 dark:bg-gray-950/20 backdrop-blur-lg border-b border-white/10 dark:border-black/20">
      <div className="flex justify-end p-2">
        <select
          value={locale}
          onChange={(e) => setLocale(e.target.value as 'fr' | 'en')}
          aria-label={t('common.select_language', locale)}
          className="border rounded px-2 py-1 text-sm"
        >
          {locales.map((l) => (
            <option value={l} key={l}>
              {l.toUpperCase()}
            </option>
          ))}
        </select>
      </div>
      <HamburgerMenu links={links} />
      <Header links={links} />
    </nav>
  );
}
