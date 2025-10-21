'use client';

import Link from 'next/link';
import { Home, ArrowLeft } from 'lucide-react';

export default function NotFound() {
  return (
    <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-gray-900 via-blue-900 to-gray-900 px-4">
      <div className="text-center">
        <div className="mb-8">
          <h1 className="text-9xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-blue-600">
            404
          </h1>
          <div className="mt-4 text-2xl md:text-4xl font-semibold text-white">Page non trouvée</div>
          <p className="mt-4 text-gray-300 text-lg max-w-md mx-auto">
            Désolé, la page que vous recherchez n&apos;existe pas ou a été déplacée.
          </p>
        </div>

        <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
          <Link
            href="/"
            className="flex items-center gap-2 px-6 py-3 bg-cyan-600 hover:bg-cyan-700 text-white rounded-lg transition-all duration-300 shadow-lg hover:shadow-cyan-500/50"
          >
            <Home size={20} />
            Retour à l&apos;accueil
          </Link>
          <button
            onClick={() => window.history.back()}
            className="flex items-center gap-2 px-6 py-3 bg-gray-700 hover:bg-gray-600 text-white rounded-lg transition-all duration-300"
          >
            <ArrowLeft size={20} />
            Page précédente
          </button>
        </div>

        {/* Illustration décorative */}
        <div className="mt-12 opacity-20">
          <svg
            className="w-64 h-64 mx-auto"
            viewBox="0 0 24 24"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm1 15h-2v-2h2v2zm0-4h-2V7h2v6z"
              fill="currentColor"
              className="text-cyan-400"
            />
          </svg>
        </div>
      </div>
    </div>
  );
}
