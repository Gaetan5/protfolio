'use client';

import React from 'react';
import { t } from '@/lib/i18n';

type SectionHeadingProps = {
  children: React.ReactNode;
  locale?: 'en' | 'fr';
};

export default function SectionHeading({ children, locale = 'en' }: SectionHeadingProps) {
  return (
    <h2
      className="text-3xl font-medium capitalize mb-8 text-center"
      aria-label={typeof children === 'string' ? t(children, locale) : undefined}
    >
      {typeof children === 'string' ? t(children, locale) : children}
    </h2>
  );
}
