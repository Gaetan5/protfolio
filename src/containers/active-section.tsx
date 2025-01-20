"use client";

import { SectionName } from "@/lib/types";  // Assurez-vous que SectionName est bien typé comme une chaîne de caractères
import React, { useState, createContext, useContext, useEffect } from "react";
import useMouveStore from '@/lib/store';

type ActiveSectionContextProviderProps = {
    children: React.ReactNode;
};

type ActiveSectionContextType = {
    activeSection: SectionName;
    setActiveSection: React.Dispatch<React.SetStateAction<SectionName>>;  // Correction ici, accepte un SectionName
    timeOfLastClick: number;
    setTimeOfLastClick: React.Dispatch<React.SetStateAction<number>>;
};

// Contexte avec valeur par défaut null
export const ActiveSectionContext =
    createContext<ActiveSectionContextType | null>(null);

export default function ActiveSectionContextProvider({
    children,
}: ActiveSectionContextProviderProps) {

    // activeSection est initialisé à "#home" (type SectionName)
    const [activeSection, setActiveSection] = useState<SectionName>("#home");
    // timeOfLastClick est initialisé à 0 (type number)
    const [timeOfLastClick, setTimeOfLastClick] = useState<number>(0);

    return (
        <ActiveSectionContext.Provider
            value={{
                activeSection,
                setActiveSection,  // setActiveSection utilise maintenant correctement SectionName
                timeOfLastClick,
                setTimeOfLastClick,
            }}
        >
            {children}
        </ActiveSectionContext.Provider>
    );
}

// Hook personnalisé pour accéder au contexte
export function useActiveSectionContext() {
    const context = useContext(ActiveSectionContext);

    if (context == null) {
        throw new Error(
            "useActiveSectionContext must be used within an ActiveSectionContextProvider"
        );
    }

    return context;
}



export const ActiveSectionText = () => {
    const setActiveSection = useMouveStore((state) => state.setActiveSection);
  
    useEffect(() => {
      const handleScroll = () => {
        const sections = document.querySelectorAll('section');
        let active = 'home';
  
        sections.forEach((section) => {
          const rect = section.getBoundingClientRect();
          if (rect.top <= 100 && rect.bottom > 100) {
            active = section.id; // Id de la section (par ex., "about")
          }
        });
  
        setActiveSection(active);
      };
  
      window.addEventListener('scroll', handleScroll);
      return () => window.removeEventListener('scroll', handleScroll);
    }, [setActiveSection]);
  
    return null; // Ce composant ne rend rien
  };