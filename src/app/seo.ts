export const defaultMeta = {
  title: 'Gaëtan Ekoro | Software & Data Engineer | IoT Specialist',
  description:
    'Portfolio professionnel de Gaëtan Ekoro - Software & Data Engineer spécialisé en Python, FastAPI, Django, IoT et systèmes embarqués.',
  keywords: [
    'Gaëtan Ekoro',
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
  authors: [{ name: 'Gaëtan Ekoro' }],
  creator: 'Gaëtan Ekoro',
  publisher: 'Gaëtan Ekoro',
  openGraph: {
    type: 'website',
    locale: 'fr_FR',
    url: 'https://gaetan-ekoro.vercel.app/',
    site_name: 'Gaëtan Ekoro Portfolio',
    title: 'Gaëtan Ekoro | Software & Data Engineer',
    description:
      'Portfolio professionnel - Spécialiste Python, FastAPI, Django, IoT et Data Engineering. Développement de solutions innovantes pour la santé et la sécurité.',
    images: [
      {
        url: 'https://gaetan-ekoro.vercel.app/InteractPhoto1.jpg',
        width: 1200,
        height: 630,
        alt: 'Gaëtan Ekoro - Software & Data Engineer',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    site: '@Gaetan5',
    creator: '@Gaetan5',
    title: 'Gaëtan Ekoro | Software & Data Engineer',
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
