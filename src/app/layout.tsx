import type { Metadata } from 'next';
import { Sora } from 'next/font/google';
import './globals.css';
import Providers from '@/containers/providers';
import Navbar from '@/components/navbar';
import ThemeController from '@/components/theme-controlle';
import { defaultMeta } from './seo';
import { LocaleProvider } from '@/containers/LocaleCtx';
import DebugManager from '@/components/debug-manager';
import ScrollToTop from '@/components/scroll-to-top';
import SkipToContent from '@/components/skip-to-content';

const sora = Sora({
  subsets: ['latin'],
  variable: '--font-sora',
  weight: ['100', '200', '300', '400', '500', '600', '700', '800'],
  display: 'swap',
  preload: false,
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
    <html lang="en" className="!scroll-smooth" data-scroll-behavior="smooth">
      <body
        className={`${sora.variable} font-Sora flex flex-col bg-gray-50 text-gray-950 relative dark:bg-gray-900 dark:text-gray-50 dark:text-opacity-90`}
      >
        <div className="bg-[#fbe2e3] absolute top-[-6rem] flex-1 -z-[10] right-[11rem] h-[31.25rem] w-[31.25rem] rounded-full blur-[10rem] sm:w-[68.75rem] dark:bg-[#946263]"></div>
        <div className="bg-[#dbd7fb] absolute top-[-1rem] -z-[10]  flex-1 left-[-35rem] h-[31.25rem] w-[50rem] rounded-full blur-[10rem] sm:w-[68.75rem] md:left-[-33rem] lg:left-[-28rem] xl:left-[-15rem] 2xl:left-[-5rem] dark:bg-[#676394]"></div>
        <SkipToContent />
        <DebugManager />
        <Providers>
          <LocaleProvider>
            <Navbar />
            <main id="main-content">{children}</main>
            <ThemeController />
            <ScrollToTop />
          </LocaleProvider>
        </Providers>
      </body>
    </html>
  );
}