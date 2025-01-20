"use client";

import React, { useState, memo } from "react";
import NextLink from "next/link";
import { motion, AnimatePresence } from "framer-motion";
import clsx from "clsx";
import { useActiveSectionContext } from "@/containers/active-section";
import useMouveStore from "../lib/store";

// Typage des liens
type Link = {
  nameEng: string;
  hash: string;
};

// Typage des props
type HamburgerMenuProps = { links: Link[] };

const HamburgerMenu: React.FC<HamburgerMenuProps> = ({ links }) => {
  // État pour contrôler l'ouverture du menu
  const [isOpen, setIsOpen] = useState(false);

  const { activeSection, setActiveSection, setTimeOfLastClick } =
    useActiveSectionContext();
  const { activeMenuItem, setActiveMenuItem } = useMouveStore();

  const handleLinkClick = (hash: string) => {
    setActiveSection(hash);
    setTimeOfLastClick(Date.now());
    setIsOpen(false);
  };

  return (
    <div className="relative">
      {/* <Hamburger toggled={isOpen} toggle={setIsOpen} /> */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="absolute top-0 left-0 w-auto h-auto p-4 bg-white bg-opacity-90 shadow-lg rounded-lg"
          >
            <ul className="flex flex-col space-y-4">
              {links.map((link) => (
                <li key={link.hash}>
                  <NextLink href={link.hash}>
                    <a
                      className={clsx("text-lg font-medium", {
                        "text-blue-500": activeSection === link.hash,
                        "text-gray-700": activeSection !== link.hash,
                      })}
                      onClick={() => handleLinkClick(link.hash)}
                    >
                      {link.nameEng}
                    </a>
                  </NextLink>
                </li>
              ))}
            </ul>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
};

export default memo(HamburgerMenu);
