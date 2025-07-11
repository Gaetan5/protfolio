import { links } from "@/lib/data";
import React from "react";
import Header from "./header";
import HamburgerMenu from "./hamburger-menu";
import { useLocaleContext } from "../containers/LocaleCtx";

const locales = ["fr", "en"] as const;

export default function Navbar() {
    const { locale, setLocale } = useLocaleContext();
    return (
        <nav>
            <div className="flex justify-end p-2">
                <select
                    value={locale}
                    onChange={e => setLocale(e.target.value as "fr" | "en")}
                    aria-label="Choisir la langue"
                    className="border rounded px-2 py-1 text-sm"
                >
                    {locales.map(l => (
                        <option value={l} key={l}>{l.toUpperCase()}</option>
                    ))}
                </select>
            </div>
            <HamburgerMenu links={links} />
            <Header links={links} />
        </nav>
    );
}
