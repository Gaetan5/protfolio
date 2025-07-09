/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'github-readme-stats.vercel.app',
        pathname: '/**',
      },
    ],
    // ATTENTION : Laisser 'dangerouslyAllowSVG: true' uniquement si vous contrôlez la source des SVG !
    dangerouslyAllowSVG: true, // Autoriser les SVG (sécurité à surveiller)
    contentSecurityPolicy: "default-src 'self'; script-src 'none'; sandbox;", // Pour limiter les risques
  },
};

module.exports = nextConfig;