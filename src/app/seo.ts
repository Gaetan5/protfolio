export const defaultMeta = {
  title: 'Portfolio | Gaetan',
  description: 'Développeur web Next.js, TypeScript, Tailwind CSS.',
  openGraph: {
    type: 'website',
    locale: 'fr_FR',
    url: 'https://votre-domaine.com/',
    site_name: 'Portfolio | Gaetan',
    images: [
      {
        url: 'https://votre-domaine.com/og-image.jpg',
        width: 1200,
        height: 630,
        alt: 'Portfolio de Gaetan',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    site: '@votre_twitter',
    title: 'Portfolio | Gaetan',
    description: 'Développeur web Next.js, TypeScript, Tailwind CSS.',
    image: 'https://votre-domaine.com/og-image.jpg',
  },
};

export function getMeta(meta = {}) {
  return { ...defaultMeta, ...meta };
}
