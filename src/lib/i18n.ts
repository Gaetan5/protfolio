import en from '@/locales/en.json';
import fr from '@/locales/fr.json';

export type Locale = 'en' | 'fr';

// Type pour les traductions imbriquées
type NestedRecord = {
  [key: string]: string | string[] | NestedRecord;
};

const translations = { en, fr } as Record<Locale, NestedRecord>;

export function t(key: string, locale: Locale = 'en'): string {
  const keys = key.split('.');
  let value: any = translations[locale];

  for (const k of keys) {
    if (value && typeof value === 'object' && k in value) {
      value = value[k];
    } else {
      return key; // Retourner la clé si la traduction n'est pas trouvée
    }
  }

  return typeof value === 'string' ? value : key;
}
