'use client';
import { useEffect } from 'react';

export default function DebugManager() {
  useEffect(() => {
    // Version simplifiée et sûre pour désactiver les logs de débogage
    if (typeof window !== 'undefined' && process.env.NODE_ENV === 'production') {
      // Sauvegarder les fonctions originales
      const originalLog = console.log;
      const originalWarn = console.warn;

      // Redéfinir console.log pour filtrer les logs de débogage
      console.log = function (...args: any[]) {
        // Vérifier si c'est un log de débogage à filtrer
        const firstArg = args[0];
        if (typeof firstArg === 'string') {
          const lowerArg = firstArg.toLowerCase();
          if (
            lowerArg.includes('uselocalecontext') ||
            lowerArg.includes('rendered') ||
            lowerArg.includes('loaded')
          ) {
            return; // Ne pas afficher ces logs
          }
        }
        // Afficher les autres logs normalement
        originalLog.apply(console, args);
      };

      // Redéfinir console.warn pour garder les avertissements importants
      console.warn = function (...args: any[]) {
        originalWarn.apply(console, args);
      };
    }
  }, []);

  return null; // Ce composant ne rend rien
}
