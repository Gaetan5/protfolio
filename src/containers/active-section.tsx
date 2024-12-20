"use client";

import { SectionName } from "@/lib/types";  // Assurez-vous que SectionName est bien typé comme une chaîne de caractères
import React, { useState, createContext, useContext } from "react";

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
