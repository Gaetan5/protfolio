'use client';
import React, { createContext, useContext, useState, useEffect, useMemo, useCallback } from 'react';

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

  const handleSetLocale = useCallback((l: Locale) => {
    setLocale(l);
    if (typeof window !== 'undefined') localStorage.setItem('locale', l);
  }, []);

  const contextValue = useMemo(
    () => ({
      locale: locale || 'fr',
      setLocale: handleSetLocale,
    }),
    [locale, handleSetLocale],
  );

  if (!isReady || !locale) return null;

  return <LocaleContext.Provider value={contextValue}>{children}</LocaleContext.Provider>;
};

export const useLocaleContext = () => {
  const context = useContext(LocaleContext);
  return context;
};
