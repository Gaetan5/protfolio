import React from 'react';
import { render as originalRender, screen, waitFor } from '@testing-library/react';
import { LocaleProvider } from '@/containers/LocaleCtx';
import ActiveSectionContextProvider from '@/containers/active-section';
import ThemeContextProvider from '@/containers/Theme-context';

// Wrapper personnalisé avec tous les providers
const AllTheProviders: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  return (
    <ThemeContextProvider>
      <LocaleProvider>
        <ActiveSectionContextProvider>{children}</ActiveSectionContextProvider>
      </LocaleProvider>
    </ThemeContextProvider>
  );
};

// Fonction de rendu personnalisée
const customRender = (ui: React.ReactElement, options = {}) =>
  originalRender(ui, { wrapper: AllTheProviders, ...options });

// Exporter les fonctions de test avec le wrapper personnalisé
export { customRender as render, screen, waitFor };
