"use client";

import React, { useState, useEffect, memo } from "react";
import NextLink from "next/link";
import { motion, AnimatePresence } from "framer-motion";
import Hamburger from "hamburger-react";
import clsx from "clsx";
import { useActiveSectionContext } from "@/containers/active-section";

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

    const { activeSection, setActiveSection, setTimeOfLastClick } = useActiveSectionContext();

    const handleLinkClick = (hash: string) => {
        setActiveSection(hash);
        setTimeOfLastClick(Date.now());
        setIsOpen(false); // Ferme le menu après le clic
    };

    useEffect(() => {
        if (isOpen) {
            const handleOutsideClick = (event: MouseEvent) => {
                if (!(event.target as HTMLElement).closest(".hamburger-react")) {
                    setIsOpen(false);
                }
            };
            document.addEventListener("click", handleOutsideClick);
            return () => {
                document.removeEventListener("click", handleOutsideClick);
            };
        }
    }, [isOpen]);

    return (
        <div>
            <Hamburger toggled={isOpen} toggle={setIsOpen} size={24} color="#4B5563" />
            <AnimatePresence>
                {isOpen && (
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
        </div>
    );
};

export default memo(HamburgerMenu);