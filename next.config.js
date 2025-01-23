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
    dangerouslyAllowSVG: true, // Autoriser les SVG
    contentSecurityPolicy: "default-src 'self'; script-src 'none'; sandbox;", // Pour limiter les risques
  },
};

module.exports = nextConfig;