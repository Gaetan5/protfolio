
export const defaultMeta = {
  title: 'Gaetan X Ekoro',
  description: 'Portfolio personnel de Gaetan X Ekoro',
  url: 'https://votre-domaine.com',
  image: 'https://votre-domaine.com/og-image.png',
  type: 'website',
  keywords: 'portfolio, développeur, Next.js, React, Tailwind, Gaetan X Ekoro, développeur web, développeur fullstack',
  author: 'Gaetan X Ekoro',
  twitter: '@Gaetan5',
};

export function getMeta(meta = {}) {
  return { ...defaultMeta, ...meta };
}
