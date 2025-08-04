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
    <html lang="en" className="!scroll-smooth">
      <head>
        <link rel="apple-touch-icon" sizes="180x180" href="/favicon/apple-touch-icon.png" />
        <link rel="icon" type="image/png" sizes="32x32" href="/favicon/favicon-32x32.png" />
        <link rel="icon" type="image/png" sizes="16x16" href="/favicon/favicon-16x16.png" />
        <link rel="manifest" href="/favicon/site.webmanifest" />
        {/* Les balises meta SEO sont maintenant gérées par l'objet metadata de Next.js */}
        {typeof window !== 'undefined' && process.env.NEXT_PUBLIC_VERCEL === '1' && (
          <script defer src="/_vercel/insights/script.js" />
        )}
      </head>
      <body
        className={`${sora.variable} font-Sora flex flex-col bg-gray-50 text-gray-950 relative dark:bg-gray-900 dark:text-gray-50 dark:text-opacity-90`}
      >
        <div className="bg-[#fbe2e3] absolute top-[-6rem] flex-1 -z-[10] right-[11rem] h-[31.25rem] w-[31.25rem] rounded-full blur-[10rem] sm:w-[68.75rem] dark:bg-[#946263]"></div>
        <div className="bg-[#dbd7fb] absolute top-[-1rem] -z-[10]  flex-1 left-[-35rem] h-[31.25rem] w-[50rem] rounded-full blur-[10rem] sm:w-[68.75rem] md:left-[-33rem] lg:left-[-28rem] xl:left-[-15rem] 2xl:left-[-5rem] dark:bg-[#676394]"></div>
        <DebugManager />
        <Providers>
          <Navbar />
          {children}
          <ThemeController />
          <ScrollToTop />
        </Providers>
      </body>
    </html>
  );
}
