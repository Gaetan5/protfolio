"use client";

import React, { useState } from "react";
import NextLink from "next/link";
import Hamburger from "hamburger-react";
import { motion, AnimatePresence } from "framer-motion";
import { useActiveSectionContext } from "@/containers/active-section";
import clsx from "clsx";

// Typage des liens
type Link = { nameEng: string; hash: string };

// Composant MenuItem
const MenuItem: React.FC<{ link: Link; isActive: boolean; index: number; onClick: () => void }> = ({ link, isActive, index, onClick }) => (
  <motion.div {...animationVariants.menuItem(index)}>
    <NextLink
      href={link.hash}
      className={clsx(
        "flex w-full items-center justify-center py-3 hover:text-gray-950 transition dark:text-gray-500 dark:hover:text-gray-300 cursor-pointer",
        {
          "text-gray-950 bg-slate-200 dark:text-gray-200 dark:bg-gray-700 rounded": isActive,
          "rounded-t-xl": index === 0,
          "rounded-b-xl": index === links.length - 1,
        }
      )}
      onClick={onClick}
    >
      {link.nameEng}
    </NextLink>
  </motion.div>
);

// Variantes d'animation
const animationVariants = {
  menuTrigger: { visible: { scale: 1, opacity: 0.7, y: 0 }, tap: { scale: 0.85 }, hover: { scale: 1.2 } },
  menuList: { start: { scale: 0.6, opacity: 0.7, y: -20 }, visible: { scale: 1, opacity: 0.9, y: 0 } },
  menuItem: (index: number) => ({
    initial: { y: -100, opacity: 0 },
    animate: { y: 0, opacity: 1 },
    transition: { delay: index * 0.1 },
  }),
};

// Composant principal
const HamburgerMenu: React.FC<{ links: Link[] }> = ({ links }) => {
  const [isOpen, setIsOpen] = useState(false);
  const { activeSection, setActiveSection, setTimeOfLastClick } = useActiveSectionContext();

  const handleMenuClick = (hash: string) => {
    setActiveSection(hash);
    setTimeOfLastClick(Date.now());
  };

  return (
    <div className="md:hidden fixed top-5 right-5 w-60 z-[999] flex flex-col items-end gap-2">
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
              <MenuItem
                key={link.hash}
                link={link}
                isActive={activeSection === link.hash}
                index={index}
                onClick={() => handleMenuClick(link.hash)}
              />
            ))}
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
};

export default HamburgerMenu;
