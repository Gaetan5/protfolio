/** @type {import('next').NextConfig} */
const nextConfig = {
  experimental: {
    optimizePackageImports: ['framer-motion', 'lucide-react'],
  },
  images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'github-readme-stats.vercel.app',
        pathname: '/**',
      },
      {
        protocol: 'https',
        hostname: 'github-readme-streak-stats.herokuapp.com',
        pathname: '/**',
      },
      {
        protocol: 'https',
        hostname: 'skillicons.dev',
        pathname: '/**',
      },
      {
        protocol: 'https',
        hostname: 'img.icons8.com',
        pathname: '/**',
      },
      {
        protocol: 'https',
        hostname: 'img.shields.io',
        pathname: '/**',
      },
      {
        protocol: 'https',
        hostname: 'images.unsplash.com',
        pathname: '/**',
      },
      {
        protocol: 'https',
        hostname: 'readme-typing-svg.demolab.com',
        pathname: '/**',
      },
      // Ajoute d'autres domaines si besoin
    ],
    // ATTENTION : Laisser 'dangerouslyAllowSVG: true' uniquement si vous contrôlez la source des SVG !
    dangerouslyAllowSVG: true, // Autoriser les SVG (sécurité à surveiller)
    contentSecurityPolicy: "default-src 'self'; script-src 'none'; sandbox;", // Pour limiter les risques
  },
  // Configuration pour réduire les avertissements en développement
  webpack: (config, { dev, isServer }) => {
    if (dev && !isServer) {
      // Désactiver certains avertissements en développement
      config.infrastructureLogging = {
        level: 'error',
      };
    }
    return config;
  },
};

module.exports = nextConfig;
