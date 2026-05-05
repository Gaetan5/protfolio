import type { Metadata } from 'next';
import { Sora } from 'next/font/google';
import './globals.css';
import Providers from '@/containers/providers';
import Navbar from '@/components/navbar';
import ThemeController from '@/components/theme-controller';
import { defaultMeta } from './seo';
import { LocaleProvider } from '@/containers/LocaleCtx';
import DebugManager from '@/components/debug-manager';
import ScrollToTop from '@/components/scroll-to-top';
import SkipToContent from '@/components/skip-to-content';
import Footer from '@/components/footer';
import HeroBanner from '@/components/hero-banner';
import ScrollProgress from '@/components/scroll-progress';
import AnimatedBackground from '@/components/animated-background';
import GlowCursor from '@/components/glow-cursor';

const sora = Sora({
  subsets: ['latin'],
  variable: '--font-sora',
  weight: ['400', '600', '700'],
  display: 'swap',
  preload: true,
});

export const metadata: Metadata = {
  title: defaultMeta.title,
  description: defaultMeta.description,
  icons: {
    icon: [
      { url: '/favicon/favicon-16x16.png', sizes: '16x16', type: 'image/png' },
      { url: '/favicon/favicon-32x32.png', sizes: '32x32', type: 'image/png' },
    ],
    apple: [{ url: '/favicon/apple-touch-icon.png', sizes: '180x180', type: 'image/png' }],
  },
  manifest: '/favicon/site.webmanifest',
  openGraph: {
    ...defaultMeta.openGraph,
  },
  twitter: {
    ...defaultMeta.twitter,
    images: [defaultMeta.twitter.image],
  },
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html
      lang="fr"
      className="!scroll-smooth"
      data-scroll-behavior="smooth"
      suppressHydrationWarning
      translate="no"
    >
      <body
        className={`${sora.variable} font-Sora flex flex-col bg-gray-50 text-gray-950 dark:bg-transparent dark:text-gray-50 dark:text-opacity-90`}
        suppressHydrationWarning
      >
        <SkipToContent />
        <DebugManager />
        <Providers>
          <ScrollProgress />
          <AnimatedBackground />
          <GlowCursor />
          <HeroBanner />
          <Navbar />
          <main id="main-content">{children}</main>
          <Footer />
          <ThemeController />
          <ScrollToTop />
        </Providers>
      </body>
    </html>
  );
}
