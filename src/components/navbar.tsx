import { links } from "@/lib/data";
import React from "react";
import Header from "./header";
import HamburgerMenu from "./hamburger-menu";

// Navbar component containing the HamburgerMenu and Header
export default function Navbar() {
    return (
        <nav>
            <HamburgerMenu links={links} />
            <Header links={links} />
        </nav>
    );
}
