'use client';

import React from 'react';
import { motion } from 'framer-motion';
import NextLink from 'next/link';
import { useLocaleContext } from '@/containers/LocaleCtx';
import { t } from '@/lib/i18n';
import { clsx } from 'clsx';
import { useActiveSectionContext } from '@/containers/active-section';
import { Link } from '@/lib/types';

type HeaderProps = { links: Link[] };

export default function Header({ links }: HeaderProps) {
  const { activeSection, setActiveSection, setTimeOfLastClick } = useActiveSectionContext();
  const { locale } = useLocaleContext();

  return (
    <header
      className="hidden md:flex items-center justify-center absolute z-[999] w-full top-6 notranslate"
      translate="no"
    >
      <motion.div
        className="flex p-1.5 rounded-full border border-white/20 dark:border-white/5 glass shadow-2xl transition-all duration-500"
        initial={{ y: -100, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
      >
        <ul className="flex flex-wrap items-center justify-center gap-1 text-sm font-bold tracking-tight text-slate-500">
          {links.map((link) => (
            <motion.li
              className="flex items-center justify-center relative"
              key={link.hash}
              initial={{ y: -100, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
            >
              <NextLink
                className={clsx(
                  'flex w-full items-center justify-center px-4 py-2 hover:text-slate-900 dark:hover:text-white transition-all duration-300 rounded-full',
                  {
                    'text-slate-900 dark:text-white': activeSection === link.hash,
                  },
                )}
                href={link.hash}
                onClick={() => {
                  setActiveSection(link.hash as any);
                  setTimeOfLastClick(Date.now());
                }}
              >
                {link.hash === activeSection && (
                  <motion.span
                    className="bg-slate-100 dark:bg-slate-800 rounded-full absolute inset-0 -z-10 shadow-sm border border-slate-200 dark:border-slate-700"
                    layoutId="activeSection"
                    transition={{
                      type: 'spring',
                      stiffness: 380,
                      damping: 30,
                    }}
                  />
                )}
                <span suppressHydrationWarning className="relative z-10">{t(`nav.${link.key}`, locale)}</span>
              </NextLink>
            </motion.li>
          ))}
        </ul>
      </motion.div>
    </header>
  );
}
