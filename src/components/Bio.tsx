'use client';
import React from 'react';

interface BioProps {
  showPresentation?: boolean;
  showStack?: boolean;
  showProjects?: boolean;
  showFunFacts?: boolean;
  showContact?: boolean;
}

export default function Bio({
  showPresentation = true,
  showStack = true,
  showProjects = true,
  showFunFacts = true,
  showContact = true,
}: BioProps) {
  return (
    <section className="max-w-3xl mx-auto px-4 py-12">
      <div className="flex flex-col items-center text-center gap-6"></div>
    </section>
  );
}
