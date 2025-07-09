import en from "@/locales/en.json";
import fr from "@/locales/fr.json";

export type Locale = "en" | "fr";

const translations = { en, fr };

export function t(key: string, locale: Locale = "en"): string {
  return translations[locale][key] || key;
}
