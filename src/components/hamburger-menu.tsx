"use client";

import React, { useState, memo } from "react";
import NextLink from "next/link";
import { motion, AnimatePresence } from "framer-motion";
import Hamburger from "hamburger-react";
import clsx from "clsx";
import { useActiveSectionContext } from "@/containers/active-section";

// Typage des liens
type Link = { nameEng: string; hash: string };
type HeaderProps = { links: Link[] };

// Variantes d'animation pour les éléments interactifs
const animationVariants = {
  menuTrigger: {
    visible: { scale: 1, opacity: 0.7, y: 0 },
    tap: { scale: 0.85 },
    hover: { scale: 1.2 },
  },
  menuList: {
    start: { scale: 0.6, opacity: 0.7, y: -20 },
    visible: { scale: 1, opacity: 0.9, y: 0 },
  },
  menuItem: (index: number) => ({
    initial: { y: -100, opacity: 0 },
    animate: { y: 0, opacity: 1 },
    transition: { delay: index * 0.1 },
  }),
};

// Composant pour un item de menu (Desktop et Mobile)
const MemoizedLink = memo(
  ({
    link,
    isActive,
    onClick,
  }: {
    link: Link; // Objet contenant le nom et le hash du lien
    isActive: boolean; // Si le lien est actif ou non
    onClick: () => void; // Callback pour le clic
  }) => (
    <motion.li className="relative">
      {/* Composant de lien avec animation */}
      <NextLink
        aria-current={isActive ? "page" : undefined} // Attribut ARIA pour indiquer l'élément actif
        className={clsx(
          "inline-flex items-center justify-center px-3 py-3 hover:text-gray-950 transition dark:text-gray-500 dark:hover:text-gray-300",
          { "text-gray-950 dark:text-gray-200": isActive } // Applique des styles conditionnels si actif
        )}
        href={link.hash}
        onClick={onClick}
      >
        {link.nameEng}
        {/* Animation de l'arrière-plan si actif */}
        {isActive && (
          <motion.span
            layoutId="activeSection"
            className="bg-gray-100 rounded-full absolute inset-0 -z-10 dark:bg-gray-800"
            transition={{ type: "spring", stiffness: 300, damping: 30 }}
          />
        )}
      </NextLink>
    </motion.li>
  )
);

// Ajout de displayName pour faciliter le débogage du composant mémoïsé
MemoizedLink.displayName = "MemoizedLink";

// Composant pour l'entête de la version Desktop
const DesktopHeader: React.FC<HeaderProps> = ({ links }) => {
  const { activeSection, setActiveSection, setTimeOfLastClick } = useActiveSectionContext();

  return (
    <header className="hidden md:flex items-center justify-center fixed top-10 w-full custom-header-class">
      {/* Animation globale de l'entête */}
      <motion.div
        initial={{ y: -100, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        className="flex p-1 custom-header-inner-class"
      >
        <motion.ul
          initial={{ y: -100, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ delayChildren: 0.2, staggerChildren: 0.1 }}
          className="inline-flex items-center justify-center gap-y-1 text-[0.9rem] font-medium text-gray-500"
        >
          {/* Génération des liens */}
          {links.map((link) => (
            <MemoizedLink
              key={link.hash}
              link={link}
              isActive={activeSection === link.hash}
              onClick={() => {
                setActiveSection(link.hash); // Mise à jour de la section active
                setTimeOfLastClick(Date.now()); // Enregistrement du dernier clic
              }}
            />
          ))}
        </motion.ul>
      </motion.div>
    </header>
  );
};

// Composant pour le menu hamburger (mobile)
const HamburgerMenu: React.FC<HeaderProps> = ({ links }) => {
  const [isOpen, setIsOpen] = useState(false);
  const { activeSection, setActiveSection, setTimeOfLastClick } = useActiveSectionContext();

  // Gestion du clic sur un lien du menu
  const handleMenuClick = (hash: string) => {
    setActiveSection(hash); // Mise à jour de la section active
    setTimeOfLastClick(Date.now()); // Enregistrement du dernier clic
    setIsOpen(false); // Fermeture du menu
  };

  return (
    <div className="md:hidden fixed top-5 right-5 w-60 z-[999] flex flex-col items-end gap-2">
      {/* Bouton pour ouvrir/fermer le menu */}
      <motion.button
        aria-label="Toggle menu"
        aria-expanded={isOpen}
        variants={animationVariants.menuTrigger}
        initial="visible"
        whileTap="tap"
        whileHover="hover"
        className="bg-white w-[3rem] h-[3rem] drop-shadow border border-slate-400 dark:border-white border-opacity-40 shadow-2xl rounded-full flex items-center justify-center dark:bg-gray-950"
        onClick={() => setIsOpen(!isOpen)}
      >
        <Hamburger toggled={isOpen} toggle={setIsOpen} size={20} />
      </motion.button>

      {/* Animation et affichage des éléments du menu */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            variants={animationVariants.menuList}
            initial="start"
            animate="visible"
            exit="start"
            className="w-full bg-white drop-shadow border border-slate-400 dark:border-white border-opacity-60 shadow-2xl flex flex-col items-center justify-center dark:bg-gray-950 p-1 mt-2"
          >
            {links.map((link, index) => (
              <motion.div {...animationVariants.menuItem(index)} key={link.hash}>
                <NextLink
                  href={link.hash}
                  className={clsx(
                    "flex w-full items-center justify-center py-3 hover:text-gray-950 transition dark:text-gray-500 dark:hover:text-gray-300 cursor-pointer",
                    {
                      "text-gray-950 bg-slate-200 dark:text-gray-200 dark:bg-gray-700 rounded": activeSection === link.hash,
                      "rounded-t-xl": index === 0, // Style spécifique au premier lien
                      "rounded-b-xl": index === links.length - 1, // Style spécifique au dernier lien
                    }
                  )}
                  onClick={() => handleMenuClick(link.hash)}
                >
                  {link.nameEng}
                </NextLink>
              </motion.div>
            ))}
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
};

// Composant principal Header qui combine Desktop et HamburgerMenu
const Header: React.FC<HeaderProps> = ({ links }) => {
  return (
    <>
      <DesktopHeader links={links} />
      <HamburgerMenu links={links} />
    </>
  );
};

export default Header;
