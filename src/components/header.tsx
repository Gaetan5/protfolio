"use client";

// Assurez-vous que 'links' est bien typé dans 'lib/types'
import React from "react";
import NextLink from "next/link";
import clsx from "clsx";
import { useActiveSectionContext } from "@/containers/active-section";

//Animation
import { motion } from "framer-motion";

// Typage des liens
type Link = {
    nameEng: string;
    hash: string;
};

// Typage des props pour le composant Header
type HeaderProps = { links: Link[] };

export default function Header({ links }: HeaderProps) {
    const { activeSection, setActiveSection, setTimeOfLastClick } = useActiveSectionContext();

    return (
        <header className="hidden md:flex items-center justify-center
        border-opacity-40 bg-white bg-opacity-80 shadow-lg shadow-black/[0.03]
        backdrop-blur-[0.5rem] sm:rounded-full dark:bg-gray-950
        dark:border-black/40 dark:bg-opacity-75 fixed top-10 w-full">
            <motion.div 
            initial={{y:-100, opacity: 0}}
            animate={{y: 0, opacity: 1}}
            className="flex p-1 rounded-none border border-white 
            border-opacity-40 bg-white bg-opacity-80 shadow-lg shadow-black/[0.03]
            backdrop-blur-[0.5rem] sm:rounded-full dark:bg-gray-950 dark:border-black/40
            dark:bg-opacity-75">

                <ul className="inline-flex items-center justify-center
                gap-y-1 text-[0.9rem] font-medium text-gray-500">
                    {links.map((link) => (
                        <motion.li
                            className="relative"
                            key={link.hash}  // Utilisation de 'key' pour chaque lien
                            initial={{y:-100, opacity: 0}}
                            animate={{y: 0, opacity: 1}}
                        >
                            <NextLink
                                className={clsx(
                                    "inline-flex items-center justify-center px-3 py-3 hover:text-gray-950 transition dark:text-gray-500 dark:hover:text-gray-300",
                                    {
                                        "text-gray-950 dark:text-gray-200":
                                        activeSection === link.hash,  // Vérification de la section active
                                    }
                                )}
                                href={link.hash}
                                onClick={() => {
                                    setActiveSection(link.hash);  // Mettre à jour la section active
                                    setTimeOfLastClick(Date.now());  // Mettre à jour l'heure du dernier clic
                                }}
                            >
                                {link.nameEng}  
                                {link.hash === activeSection && (
                                    <motion.span
                                    transition={{
                                        type: "spring",
                                        stiffness: 300,
                                        damping: 30,
                                    }}
                                    layoutId="activeSection"
                                    className="bg-gray-100 rounded-full absolute
                                    inset-0 -z-10 dark:bg-gray-800"
                                    >
                                    </motion.span>
                                )}
                            </NextLink>
                        </motion.li>
                    ))}
                </ul>
            </motion.div>
        </header>
    );
}
