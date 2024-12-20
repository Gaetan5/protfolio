"use client";

// Assurez-vous que ce fichier existe et est bien structuré
import React, { useState } from "react";
import NextLink from "next/link";
import Hamburger from "hamburger-react";
import { motion, AnimatePresence } from "framer-motion";
import { useActiveSectionContext } from "@/containers/active-section";
import clsx from "clsx";

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

    // Définition des variantes d'animation
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
        <div className="md:hidden top-5 right-5 fixed w-60 z-[999] flex flex-col items-end gap-2">
            
            {/* Bouton hamburger pour ouvrir/fermer le menu */}
            <motion.button 
                variants={menuTrigger}
                initial="visible"
                whileTap="tap"
                whileHover="hover"
                className="bg-white w-[3rem] h-[3rem] drop-shadow
                border border-slate-400 dark:border-white border-opacity-40 shadow-2xl 
                rounded-full flex items-center justify-center dark:bg-gray-950"
                onClick={() => setIsOpen(!isOpen)}  // Toggle menu on click
            >
                <Hamburger toggled={isOpen} toggle={setIsOpen} size={20} />
            </motion.button>

            {/* Affichage conditionnel du menu avec animation */}
            <AnimatePresence>
                {isOpen && (
                    <motion.div
                        variants={menuList}
                        initial="start"
                        animate="visible"
                        exit="start"
                        className="w-full bg-white drop-shadow border border-slate-400
                        dark:border-white border-opacity-60 shadow-2xl flex flex-col items-center
                        justify-center dark:bg-gray-950 p-1 mt-2"
                    >
                        {links.map((link, index) => (
                            <motion.div 
                                key={link.hash} 
                                className="w-full"
                                initial={{ y: -100, opacity: 0 }}
                                animate={{ y: 0, opacity: 1 }}
                                transition={{ delay: index * 0.1 }}  // Animation décalée pour chaque lien
                            >
                                <NextLink 
                                    className={clsx(
                                        "flex w-full items-center justify-center py-3 hover:text-gray-950 transition dark:text-gray-500 dark:hover:text-gray-300 cursor-pointer",
                                        {
                                            "text-gray-950 bg-slate-200 dark:text-gray-200 dark:bg-gray-700 rounded":
                                            activeSection === link.hash,
                                            "rounded-t-xl": index === 0,
                                            "rounded-b-xl": index === links.length - 1,
                                        }
                                    )}
                                    href={link.hash}
                                    onClick={() => {
                                        setActiveSection(link.hash);
                                        setTimeOfLastClick(Date.now()); 
                                    }}
                                >
                                    {link.nameEng}
                                    {link.hash === activeSection}
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
