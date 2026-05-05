'use client';
import React from 'react';
import ActiveSectionContextProvider from './active-section';
import { Toaster } from 'react-hot-toast';
import ThemeContextProvider from './theme-context';
import { LocaleProvider } from './LocaleCtx';

type ProvidersProps = {
  children: React.ReactNode;
};

export default function Providers({ children }: ProvidersProps) {
  return (
    <LocaleProvider>
      <ThemeContextProvider>
        <ActiveSectionContextProvider>
          <Toaster />
          {children}
        </ActiveSectionContextProvider>
      </ThemeContextProvider>
    </LocaleProvider>
  );
}
