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
  const [locale, setLocale] = useState<Locale>('fr');

  useEffect(() => {
    const stored = typeof window !== 'undefined' ? localStorage.getItem('locale') : null;
    if (stored === 'fr' || stored === 'en') setLocale(stored);
  }, []);

  const handleSetLocale = (l: Locale) => {
    setLocale(l);
    if (typeof window !== 'undefined') localStorage.setItem('locale', l);
  };

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
