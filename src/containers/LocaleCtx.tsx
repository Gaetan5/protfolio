'use client';
import React, { createContext, useContext, useState, useEffect } from 'react';

export type Locale = 'fr' | 'en';

const LocaleContext = createContext<{
  locale: Locale;
  setLocale: (l: Locale) => void;
}>({
  locale: 'fr',
  setLocale: () => {},
});

export const LocaleProvider = ({ children }: { children: React.ReactNode }) => {
  const [locale, setLocale] = useState<Locale | undefined>(undefined);
  const [isReady, setIsReady] = useState(false);

  useEffect(() => {
    const stored = typeof window !== 'undefined' ? localStorage.getItem('locale') : null;
    if (stored === 'fr' || stored === 'en') {
      setLocale(stored);
    } else {
      setLocale('fr');
    }
    setIsReady(true);
  }, []);

  const handleSetLocale = (l: Locale) => {
    setLocale(l);
    if (typeof window !== 'undefined') localStorage.setItem('locale', l);
  };

  if (!isReady || !locale) return null;

  return (
    <LocaleContext.Provider value={{ locale, setLocale: handleSetLocale }}>
      {children}
    </LocaleContext.Provider>
  );
};

export const useLocaleContext = () => {
  const context = useContext(LocaleContext);
  console.log('useLocaleContext loaded', context);
  return context;
};
