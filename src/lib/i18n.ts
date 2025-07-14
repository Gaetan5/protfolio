import en from '@/locales/en.json';
import fr from '@/locales/fr.json';

export type Locale = 'en' | 'fr';

const translations = { en, fr } as Record<Locale, Record<string, string | string[]>>;

export function t(key: string, locale: Locale = 'en'): string {
  const value = translations[locale][key];
  if (typeof value === 'string') return value;
  if (Array.isArray(value)) return value.join(', ');
  return key;
}
