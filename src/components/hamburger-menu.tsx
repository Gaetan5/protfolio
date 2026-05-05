'use client';

import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { useLocaleContext } from '@/containers/LocaleCtx';
import { t } from '@/lib/i18n';
import { Menu, X } from 'lucide-react';
import { clsx } from 'clsx';
import NextLink from 'next/link';
import { useActiveSectionContext } from '@/containers/active-section';
import Hamburger from 'hamburger-react';
import { Link } from '@/lib/types';

type HamburgerMenuProps = { links: Link[] };

const HamburgerMenu: React.FC<HamburgerMenuProps> = ({ links }) => {
  const [isOpen, setIsOpen] = useState(false);

  const { activeSection, setActiveSection, setTimeOfLastClick } = useActiveSectionContext();
  const { locale } = useLocaleContext();

  const menuTrigger = {
    visible: { scale: 1, opacity: 0.7, y: 0 },
    tap: { scale: 0.85 },
    hover: { scale: 1.2 },
  };

  const menuList = {
    start: { scale: 0.6, opacity: 0.7, y: -20 },
    visible: { scale: 1, opacity: 0.9, y: 0 },
  };

  return (
    <div
      className="md:hidden top-5 right-5 absolute w-60 z-[999] flex flex-col items-end gap-2 notranslate"
      translate="no"
    >
      <motion.button
        className="w-[3.5rem] h-[3.5rem] glass border border-white/20 dark:border-white/10 shadow-2xl rounded-2xl flex items-center justify-center"
        variants={menuTrigger}
        initial="visible"
        whileTap="tap"
        whileHover="hover"
      >
        <Hamburger toggled={isOpen} toggle={setIsOpen} size={24} color="currentColor" />
      </motion.button>

      <AnimatePresence>
        {isOpen && (
          <motion.div
            variants={menuList}
            initial="start"
            animate="visible"
            className="w-full glass border border-white/20 dark:border-white/10 shadow-2xl rounded-3xl flex flex-col items-center justify-center p-2 backdrop-blur-2xl"
          >
            {links.map((link, index) => (
              <motion.div
                className="w-full"
                key={link.hash}
                initial={{ opacity: 0, x: 20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: index * 0.05 }}
              >
                <NextLink
                  className={clsx(
                    'flex w-full items-center justify-center px-4 py-4 text-sm font-black tracking-widest uppercase transition-all duration-300 cursor-pointer',
                    {
                      'text-cyan-600 bg-cyan-500/10 dark:text-cyan-400 dark:bg-cyan-500/10 rounded-2xl':
                        activeSection === link.hash,
                      'text-slate-600 dark:text-slate-400 hover:text-slate-900 dark:hover:text-white':
                        activeSection !== link.hash,
                    },
                  )}
                  href={link.hash}
                  onClick={() => {
                    setActiveSection(link.hash as any);
                    setTimeOfLastClick(Date.now());
                    setIsOpen(false);
                  }}
                >
                  <span suppressHydrationWarning>{t(`nav.${link.key}`, locale)}</span>
                </NextLink>
              </motion.div>
            ))}
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
};

export default HamburgerMenu;
