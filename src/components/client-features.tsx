'use client';
import React from 'react';
import dynamic from 'next/dynamic';

// Composants dynamiques client-side only
const PerformanceMetrics = dynamic(() => import('@/components/performance-metrics'), {
  loading: () => <div className="h-32 bg-gray-200 animate-pulse rounded-lg" />,
  ssr: false,
});

const AccessibilityManager = dynamic(() => import('@/components/accessibility-manager'), {
  loading: () => null,
  ssr: false,
});

const Loading = dynamic(() => import('@/components/loading'), {
  ssr: false,
});

interface ClientFeaturesProps {
  showPerformanceMetrics?: boolean;
}

const ClientFeatures: React.FC<ClientFeaturesProps> = ({ showPerformanceMetrics = true }) => {
  return (
    <>
      {/* Métriques de performance (optionnel) */}
      {showPerformanceMetrics && (
        <section className="py-8 px-4">
          <div className="max-w-6xl mx-auto">
            <PerformanceMetrics />
          </div>
        </section>
      )}

      {/* Gestionnaire d'accessibilité */}
      <AccessibilityManager />
    </>
  );
};

export default ClientFeatures;
