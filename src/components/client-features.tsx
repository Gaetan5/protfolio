'use client';
import React from 'react';
import dynamic from 'next/dynamic';
import { motion, AnimatePresence } from 'framer-motion';

// Composants dynamiques client-side only
const PerformanceMetrics = dynamic(() => import('@/components/performance-metrics'), {
  loading: () => <div className="h-24 bg-gray-200/10 animate-pulse rounded-lg" />,
  ssr: false,
});

interface ClientFeaturesProps {
  showPerformanceMetrics?: boolean;
}

const ClientFeatures: React.FC<ClientFeaturesProps> = ({
  showPerformanceMetrics: initialShow = false,
}) => {
  const [showHUD, setShowHUD] = React.useState(initialShow);

  React.useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      // Ctrl + Shift + D pour basculer le HUD
      if (e.ctrlKey && e.shiftKey && e.key === 'D') {
        setShowHUD((prev) => !prev);
      }
    };

    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, []);

  if (!showHUD) return null;

  return (
    <AnimatePresence>
      <motion.div
        initial={{ opacity: 0, x: 100, scale: 0.9 }}
        animate={{ opacity: 1, x: 0, scale: 1 }}
        exit={{ opacity: 0, x: 100, scale: 0.9 }}
        className="fixed bottom-24 right-6 z-[9999] max-w-xs w-full pointer-events-none"
      >
        <div className="bg-gray-900/90 backdrop-blur-2xl border border-cyan-500/30 rounded-2xl p-5 shadow-[0_0_40px_rgba(6,182,212,0.15)] pointer-events-auto">
          <div className="flex items-center justify-between mb-5">
            <div className="flex items-center gap-2">
              <div className="w-2 h-2 rounded-full bg-cyan-500 animate-pulse" />
              <h3 className="text-[10px] font-black uppercase tracking-[0.2em] text-cyan-500">
                Core Diagnostics
              </h3>
            </div>
            <button
              onClick={() => setShowHUD(false)}
              className="text-gray-500 hover:text-white transition-colors text-xs"
            >
              ✕
            </button>
          </div>

          <PerformanceMetrics className="!grid-cols-1 !gap-4" />

          <div className="mt-5 pt-4 border-t border-white/10 flex justify-between items-center text-[9px] font-mono">
            <span className="text-gray-500 uppercase tracking-tighter">Engine: Next.js 15</span>
            <span className="text-cyan-500/50">v0.1.0-alpha</span>
          </div>
        </div>
      </motion.div>
    </AnimatePresence>
  );
};

export default ClientFeatures;
