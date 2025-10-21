export const defaultMeta = {
  title: 'Gaetan X Ekoro | Software & Data Engineer | IoT Specialist',
  description:
    'Portfolio professionnel de Gaetan X Ekoro - Software & Data Engineer spécialisé en Python, FastAPI, Django, IoT et systèmes embarqués. Expertise en développement backend, APIs RESTful, Data Engineering et solutions médicales innovantes.',
  keywords: [
    'Gaetan Ekoro',
    'Software Engineer',
    'Data Engineer',
    'Python Developer',
    'FastAPI',
    'Django',
    'IoT',
    'Backend Developer',
    'API Development',
    'PostgreSQL',
    'Cameroun',
    'Douala',
    'Embedded Systems',
    'Medical IoT',
    'Data Analytics',
  ],
  authors: [{ name: 'Gaetan X Ekoro Edouard' }],
  creator: 'Gaetan X Ekoro',
  publisher: 'Gaetan X Ekoro',
  openGraph: {
    type: 'website',
    locale: 'fr_FR',
    url: 'https://gaetan-ekoro.vercel.app/',
    site_name: 'Gaetan X Ekoro Portfolio',
    title: 'Gaetan X Ekoro | Software & Data Engineer',
    description:
      'Portfolio professionnel - Spécialiste Python, FastAPI, Django, IoT et Data Engineering. Développement de solutions innovantes pour la santé et la sécurité.',
    images: [
      {
        url: 'https://gaetan-ekoro.vercel.app/InteractPhoto1.jpg',
        width: 1200,
        height: 630,
        alt: 'Gaetan X Ekoro - Software & Data Engineer',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    site: '@Gaetan5',
    creator: '@Gaetan5',
    title: 'Gaetan X Ekoro | Software & Data Engineer',
    description:
      'Portfolio professionnel - Spécialiste Python, FastAPI, Django, IoT et Data Engineering.',
    image: 'https://gaetan-ekoro.vercel.app/InteractPhoto1.jpg',
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
};

export function getMeta(meta = {}) {
  return { ...defaultMeta, ...meta };
}
