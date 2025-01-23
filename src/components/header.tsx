"use client";

import React, { useState, memo, useEffect } from "react";
import NextLink from "next/link";
import clsx from "clsx";
import { useActiveSectionContext } from "@/containers/active-section";
import { motion, AnimatePresence } from "framer-motion";
import { Sling as Hamburger } from "hamburger-react";
import useMouveStore from "@/lib/store";

// Typing for links
type Link = { nameEng: string; hash: string };
type HeaderProps = { links: Link[] };

// Memoized component for individual links
const MemoizedLink = memo(
  ({
    link,
    isActive,
    onClick,
  }: {
    link: Link;
    isActive: boolean;
    onClick: () => void;
  }) => (
    <motion.li className="relative">
      <NextLink
        aria-current={isActive ? "page" : undefined}
        className={clsx(
          "inline-flex items-center justify-center px-3 py-3 hover:text-gray-950 transition dark:text-gray-500 dark:hover:text-gray-300",
          { "text-gray-950 dark:text-gray-200": isActive }
        )}
        href={link.hash}
        onClick={onClick}
      >
        {link.nameEng}
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

// Add displayName to resolve ESLint error
MemoizedLink.displayName = "MemoizedLink";

// Header component
export default function Header({ links }: HeaderProps) {
  const setActive = useMouveStore((state) => state.setActiveSection);

  const handleSectionChange = (newSection: string) => {
    setActive(newSection);
  };

  const [isBurgerOpen, setIsBurgerOpen] = useState(false);
  const { activeSection, setActiveSection, setTimeOfLastClick } =
    useActiveSectionContext();

  const handleLinkClick = (hash: string) => {
    setActiveSection(hash);
    setTimeOfLastClick(Date.now());
    setIsBurgerOpen(false);
  };

  useEffect(() => {
    if (isBurgerOpen) {
      const handleOutsideClick = (event: MouseEvent) => {
        if (!(event.target as HTMLElement).closest(".hamburger-react")) {
          setIsBurgerOpen(false);
        }
      };
      document.addEventListener("click", handleOutsideClick);
      return () => {
        document.removeEventListener("click", handleOutsideClick);
      };
    }
  }, [isBurgerOpen]);

  return (
    <>
      {/* Header Desktop */}
      <header className="hidden md:flex items-center justify-center fixed top-10 w-full custom-header-class">
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
            {links.map((link) => (
              <MemoizedLink
                key={link.hash}
                link={link}
                isActive={activeSection === link.hash}
                onClick={() => {
                  handleLinkClick(link.hash);
                  handleSectionChange(link.nameEng.toLocaleLowerCase());
                }}
              />
            ))}
          </motion.ul>
        </motion.div>
      </header>

      {/* Header Mobile - Burger Menu */}
      <header className="flex md:hidden items-center justify-between px-4 py-3 fixed top-0 w-full bg-white dark:bg-gray-950 shadow-lg z-50">
        <NextLink
          href="/"
          className="text-lg font-bold text-gray-800 dark:text-gray-200"
        >
          Logo
        </NextLink>

        <Hamburger
          toggled={isBurgerOpen}
          toggle={setIsBurgerOpen}
          size={24}
          color="#4B5563"
        />

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
                        {
                          "text-gray-950 dark:text-gray-200":
                            activeSection === link.hash,
                        }
                      )}
                      href={link.hash}
                      onClick={() => {
                        handleLinkClick(link.hash);
                        handleSectionChange(link.nameEng.toLocaleLowerCase());
                      }}
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
