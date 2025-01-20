"use Client";

import React from "react";
import Switch from "./switch";
import { Moon, Sun } from "lucide-react";
import { useTheme } from "../hooks/useTheme"; // Adjust the import path as necessary

export default function ThemeSwitch() {
    const { theme, toggleTheme } = useTheme();

    return (
        <div className = "fixed bottom-5 right-5">
            <Switch 
            activeButton = {theme === "ligth" ? <Sun /> : <Moon />}
            hiddenButton = {theme === "ligth" ? <Moon size ={14} /> : <Sun size={14} />}
            setActiveButton = {toggleTheme}
            /> 
            
        </div>

    )
}