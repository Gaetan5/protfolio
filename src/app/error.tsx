'use client';

import { useEffect } from 'react';
import { RefreshCw, Home, AlertTriangle } from 'lucide-react';
import Link from 'next/link';

export default function Error({
  error,
  reset,
}: {
  error: Error & { digest?: string };
  reset: () => void;
}) {
  useEffect(() => {
    // Log l'erreur pour le monitoring
    console.error('Error:', error);
  }, [error]);

  return (
    <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-gray-900 via-red-900 to-gray-900 px-4">
      <div className="text-center max-w-2xl">
        <div className="mb-8">
          <div className="flex justify-center mb-6">
            <div className="p-4 bg-red-500/20 rounded-full">
              <AlertTriangle size={64} className="text-red-400" />
            </div>
          </div>
          <h1 className="text-4xl md:text-6xl font-bold text-white mb-4">
            Oups ! Une erreur est survenue
          </h1>
          <p className="text-gray-300 text-lg mb-2">
            Quelque chose s&apos;est mal passé. Ne vous inquiétez pas, ce n&apos;est pas de votre
            faute.
          </p>
          {error.message && (
            <div className="mt-4 p-4 bg-red-900/30 rounded-lg border border-red-500/50">
              <p className="text-red-300 text-sm font-mono">{error.message}</p>
            </div>
          )}
        </div>

        <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
          <button
            onClick={reset}
            className="flex items-center gap-2 px-6 py-3 bg-red-600 hover:bg-red-700 text-white rounded-lg transition-all duration-300 shadow-lg hover:shadow-red-500/50"
          >
            <RefreshCw size={20} />
            Réessayer
          </button>
          <Link
            href="/"
            className="flex items-center gap-2 px-6 py-3 bg-gray-700 hover:bg-gray-600 text-white rounded-lg transition-all duration-300"
          >
            <Home size={20} />
            Retour à l&apos;accueil
          </Link>
        </div>

        <div className="mt-8 text-gray-400 text-sm">
          <p>Si le problème persiste, contactez-moi à :</p>
          <a
            href="mailto:gaetan.ekoro@gmail.com"
            className="text-cyan-400 hover:text-cyan-300 underline"
          >
            gaetan.ekoro@gmail.com
          </a>
        </div>
      </div>
    </div>
  );
}
