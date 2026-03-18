import en from '@/locales/en.json';
import fr from '@/locales/fr.json';

export type Locale = 'en' | 'fr';

// Type for les traductions imbriquées
type NestedRecord = {
  [key: string]: any;
};

const translations = { en, fr } as any;

export function t(key: string, locale: Locale = 'en'): string {
  const value = tr(key, locale);
  return typeof value === 'string' ? value : key;
}

export function ta(key: string, locale: Locale = 'en'): string[] {
  const value = tr(key, locale);
  return Array.isArray(value) ? value : [key];
}

export function tr(key: string, locale: Locale = 'en'): any {
  const keys = key.split('.');
  let value: any = translations[locale];

  for (const k of keys) {
    if (value && typeof value === 'object' && k in value) {
      value = value[k];
    } else {
      return null;
    }
  }
  return value;
}
