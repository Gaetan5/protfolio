"use client";

import React, { useState, memo } from "react";
import NextLink from "next/link";
import clsx from "clsx";
import { useActiveSectionContext } from "@/containers/active-section";
import { motion, AnimatePresence } from "framer-motion";
import { Sling as Hamburger } from "hamburger-react"; // Bibliothèque pour le menu burger

// Typage des liens
type Link = { nameEng: string; hash: string };
type HeaderProps = { links: Link[] };

// Composant optimisé pour chaque lien du menu
const MemoizedLink = memo(({ link, isActive, onClick }: { link: Link; isActive: boolean; onClick: () => void }) => (
  <motion.li className="relative">
    {/* Lien individuel */}
    <NextLink
      aria-current={isActive ? "page" : undefined} // Définit si le lien est actuellement actif
      className={clsx(
        "inline-flex items-center justify-center px-3 py-3 hover:text-gray-950 transition dark:text-gray-500 dark:hover:text-gray-300",
        { "text-gray-950 dark:text-gray-200": isActive } // Applique des styles spécifiques au lien actif
      )}
      href={link.hash} // URL cible
      onClick={onClick} // Gère le clic sur le lien
    >
      {link.nameEng}
      {/* Indicateur visuel pour le lien actif */}
      {isActive && (
        <motion.span
          layoutId="activeSection"
          className="bg-gray-100 rounded-full absolute inset-0 -z-10 dark:bg-gray-800"
          transition={{ type: "spring", stiffness: 300, damping: 30 }}
        />
      )}
    </NextLink>
  </motion.li>
));

// Ajout de la propriété displayName pour résoudre l'erreur ESLint
MemoizedLink.displayName = "MemoizedLink";

export default function Header({ links }: HeaderProps) {
  const [isBurgerOpen, setIsBurgerOpen] = useState(false); // État pour gérer l'ouverture/fermeture du menu burger
  const { activeSection, setActiveSection, setTimeOfLastClick } = useActiveSectionContext(); // Gestion des sections actives

  // Fonction pour gérer le clic sur un lien
  const handleLinkClick = (hash: string) => {
    setActiveSection(hash); // Met à jour la section active
    setTimeOfLastClick(Date.now()); // Enregistre l'heure du clic
    setIsBurgerOpen(false); // Ferme le menu burger après un clic
  };

  return (
    <>
      {/* Header Desktop */}
      <header className="hidden md:flex items-center justify-center fixed top-10 w-full custom-header-class">
        <motion.div
          initial={{ y: -100, opacity: 0 }} // Animation d'apparition
          animate={{ y: 0, opacity: 1 }}
          className="flex p-1 custom-header-inner-class"
        >
          <motion.ul
            initial={{ y: -100, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ delayChildren: 0.2, staggerChildren: 0.1 }}
            className="inline-flex items-center justify-center gap-y-1 text-[0.9rem] font-medium text-gray-500"
          >
            {/* Rendu des liens pour la version desktop */}
            {links.map((link) => (
              <MemoizedLink
                key={link.hash}
                link={link}
                isActive={activeSection === link.hash}
                onClick={() => handleLinkClick(link.hash)}
              />
            ))}
          </motion.ul>
        </motion.div>
      </header>

      {/* Header Mobile - Menu Burger */}
      <header className="flex md:hidden items-center justify-between px-4 py-3 fixed top-0 w-full bg-white dark:bg-gray-950 shadow-lg z-50">
        {/* Logo ou titre du site */}
        <NextLink href="/" className="text-lg font-bold text-gray-800 dark:text-gray-200">
          Logo
        </NextLink>

        {/* Composant de menu burger */}
        <Hamburger toggled={isBurgerOpen} toggle={setIsBurgerOpen} size={24} color="#4B5563" />

        {/* Navigation affichée lorsque le menu burger est ouvert */}
        <AnimatePresence>
          {isBurgerOpen && (
            <motion.nav
              initial={{ x: "100%" }}
              animate={{ x: 0 }}
              exit={{ x: "100%" }}
              transition={{ type: "spring", stiffness: 300, damping: 30 }}
              className="fixed top-0 right-0 h-screen w-4/5 bg-white dark:bg-gray-900 shadow-lg z-50 flex flex-col items-center justify-center gap-6"
            >
              <ul className="text-lg font-medium text-gray-700 dark:text-gray-200 space-y-4">
                {/* Rendu des liens pour le menu burger */}
                {links.map((link) => (
                  <motion.li
                    key={link.hash}
                    className="relative"
                    initial={{ x: 100, opacity: 0 }}
                    animate={{ x: 0, opacity: 1 }}
                    transition={{ delay: 0.1 }}
                  >
                    <NextLink
                      className={clsx(
                        "hover:text-gray-950 transition dark:hover:text-gray-300",
                        { "text-gray-950 dark:text-gray-200": activeSection === link.hash }
                      )}
                      href={link.hash}
                      onClick={() => handleLinkClick(link.hash)}
                    >
                      {link.nameEng}
                    </NextLink>
                  </motion.li>
                ))}
              </ul>
            </motion.nav>
          )}
        </AnimatePresence>
      </header>
    </>
  );
}
