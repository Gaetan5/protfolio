/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'github-readme-stats.vercel.app',
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
};

module.exports = nextConfig;
