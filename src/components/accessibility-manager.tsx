'use client';
import React, { useEffect, useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Volume2, VolumeX, Eye, EyeOff, Keyboard } from 'lucide-react';
import { useLocaleContext } from '@/containers/LocaleCtx';
import { t } from '@/lib/i18n';

interface AccessibilityManagerProps {
  className?: string;
}

const AccessibilityManager: React.FC<AccessibilityManagerProps> = ({ className = '' }) => {
  const { locale } = useLocaleContext();
  const [isVisible, setIsVisible] = useState(false);
  const [highContrast, setHighContrast] = useState(false);
  const [reducedMotion, setReducedMotion] = useState(false);
  const [fontSize, setFontSize] = useState(16);

  useEffect(() => {
    // Appliquer les préférences utilisateur
    if (highContrast) {
      document.documentElement.classList.add('high-contrast');
    } else {
      document.documentElement.classList.remove('high-contrast');
    }

    if (reducedMotion) {
      document.documentElement.classList.add('reduced-motion');
    } else {
      document.documentElement.classList.remove('reduced-motion');
    }

    document.documentElement.style.fontSize = `${fontSize}px`;
  }, [highContrast, reducedMotion, fontSize]);

  useEffect(() => {
    const handleKeyPress = (event: KeyboardEvent) => {
      // Raccourcis clavier d'accessibilité
      if (event.ctrlKey || event.metaKey) {
        switch (event.key) {
          case '1':
            event.preventDefault();
            setHighContrast(!highContrast);
            break;
          case '2':
            event.preventDefault();
            setReducedMotion(!reducedMotion);
            break;
          case '=':
            event.preventDefault();
            setFontSize((prev) => Math.min(prev + 2, 24));
            break;
          case '-':
            event.preventDefault();
            setFontSize((prev) => Math.max(prev - 2, 12));
            break;
          case '0':
            event.preventDefault();
            setFontSize(16);
            break;
        }
      }
    };

    document.addEventListener('keydown', handleKeyPress);
    return () => document.removeEventListener('keydown', handleKeyPress);
  }, [highContrast, reducedMotion]);

  const togglePanel = () => setIsVisible(!isVisible);

  return (
    <>
      {/* Bouton d'accessibilité flottant */}
      <motion.button
        onClick={togglePanel}
        className="fixed bottom-4 right-4 z-50 bg-blue-600 hover:bg-blue-700 text-white p-3 rounded-full shadow-lg transition-colors"
        whileHover={{ scale: 1.1 }}
        whileTap={{ scale: 0.9 }}
        aria-label={t('accessibility.toggle', locale)}
      >
        <Keyboard className="w-6 h-6" />
      </motion.button>

      {/* Panneau d'accessibilité */}
      <AnimatePresence>
        {isVisible && (
          <motion.div
            initial={{ opacity: 0, x: 300 }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: 300 }}
            className={`fixed top-0 right-0 h-full w-80 bg-white/95 backdrop-blur-md shadow-xl z-40 p-6 overflow-y-auto ${className}`}
          >
            <div className="flex justify-between items-center mb-6">
              <h2 className="text-xl font-bold text-gray-800">
                {t('accessibility.title', locale)}
              </h2>
              <button
                onClick={togglePanel}
                className="text-gray-500 hover:text-gray-700"
                aria-label={t('accessibility.close', locale)}
              >
                ✕
              </button>
            </div>

            <div className="space-y-6">
              {/* Contraste élevé */}
              <div className="flex items-center justify-between">
                <div>
                  <h3 className="font-semibold text-gray-800">
                    {t('accessibility.highContrast', locale)}
                  </h3>
                  <p className="text-sm text-gray-600">
                    {t('accessibility.highContrastDesc', locale)}
                  </p>
                </div>
                <button
                  onClick={() => setHighContrast(!highContrast)}
                  className={`p-2 rounded ${highContrast ? 'bg-blue-100 text-blue-600' : 'bg-gray-100 text-gray-600'}`}
                >
                  {highContrast ? <Eye className="w-5 h-5" /> : <EyeOff className="w-5 h-5" />}
                </button>
              </div>

              {/* Mouvement réduit */}
              <div className="flex items-center justify-between">
                <div>
                  <h3 className="font-semibold text-gray-800">
                    {t('accessibility.reducedMotion', locale)}
                  </h3>
                  <p className="text-sm text-gray-600">
                    {t('accessibility.reducedMotionDesc', locale)}
                  </p>
                </div>
                <button
                  onClick={() => setReducedMotion(!reducedMotion)}
                  className={`p-2 rounded ${reducedMotion ? 'bg-blue-100 text-blue-600' : 'bg-gray-100 text-gray-600'}`}
                >
                  {reducedMotion ? (
                    <VolumeX className="w-5 h-5" />
                  ) : (
                    <Volume2 className="w-5 h-5" />
                  )}
                </button>
              </div>

              {/* Taille de police */}
              <div>
                <h3 className="font-semibold text-gray-800 mb-3">
                  {t('accessibility.fontSize', locale)}
                </h3>
                <div className="flex items-center space-x-2">
                  <button
                    onClick={() => setFontSize((prev) => Math.max(prev - 2, 12))}
                    className="px-3 py-1 bg-gray-100 text-gray-700 rounded hover:bg-gray-200"
                  >
                    A-
                  </button>
                  <span className="text-sm text-gray-600 min-w-[3rem] text-center">
                    {fontSize}px
                  </span>
                  <button
                    onClick={() => setFontSize((prev) => Math.min(prev + 2, 24))}
                    className="px-3 py-1 bg-gray-100 text-gray-700 rounded hover:bg-gray-200"
                  >
                    A+
                  </button>
                  <button
                    onClick={() => setFontSize(16)}
                    className="px-3 py-1 bg-blue-100 text-blue-600 rounded hover:bg-blue-200"
                  >
                    Reset
                  </button>
                </div>
              </div>

              {/* Raccourcis clavier */}
              <div>
                <h3 className="font-semibold text-gray-800 mb-3">
                  {t('accessibility.shortcuts', locale)}
                </h3>
                <div className="space-y-2 text-sm text-gray-600">
                  <p>
                    <kbd className="bg-gray-100 px-2 py-1 rounded">Ctrl+1</kbd> -{' '}
                    {t('accessibility.shortcutContrast', locale)}
                  </p>
                  <p>
                    <kbd className="bg-gray-100 px-2 py-1 rounded">Ctrl+2</kbd> -{' '}
                    {t('accessibility.shortcutMotion', locale)}
                  </p>
                  <p>
                    <kbd className="bg-gray-100 px-2 py-1 rounded">Ctrl++</kbd> -{' '}
                    {t('accessibility.shortcutZoomIn', locale)}
                  </p>
                  <p>
                    <kbd className="bg-gray-100 px-2 py-1 rounded">Ctrl+-</kbd> -{' '}
                    {t('accessibility.shortcutZoomOut', locale)}
                  </p>
                  <p>
                    <kbd className="bg-gray-100 px-2 py-1 rounded">Ctrl+0</kbd> -{' '}
                    {t('accessibility.shortcutReset', locale)}
                  </p>
                </div>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
};

export default AccessibilityManager;
