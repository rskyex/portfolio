import type { Metadata } from 'next';
import { notFound } from 'next/navigation';
import Image from 'next/image';
import { NextIntlClientProvider } from 'next-intl';
import { getTranslations, setRequestLocale } from 'next-intl/server';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import { routing } from '@/i18n/routing';
import { htmlLang, ogLocales, isLocale, type Locale } from '@/i18n/config';
import { buildAlternates, localeUrl } from '@/i18n/metadata';
import './globals.css';

export function generateStaticParams() {
  return routing.locales.map((locale) => ({ locale }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ locale: string }>;
}): Promise<Metadata> {
  const { locale } = await params;
  const t = await getTranslations({ locale, namespace: 'siteMeta' });
  const title = t('title');
  const description = t('description');

  return {
    title,
    description,
    metadataBase: new URL('https://risakoyanagi.com'),
    alternates: buildAlternates('/'),
    openGraph: {
      title,
      description,
      url: localeUrl(locale as Locale, '/'),
      siteName: 'Risa Koyanagi',
      images: [
        {
          url: '/images/risa%20koyanagi%20og.png',
          width: 1200,
          height: 630,
          alt: 'Risa Koyanagi',
        },
      ],
      locale: ogLocales[locale as Locale] ?? ogLocales.en,
      type: 'website',
    },
    twitter: {
      card: 'summary_large_image',
      title,
      description,
      images: ['/images/risa%20koyanagi%20og.png'],
    },
  };
}

export default async function LocaleLayout({
  children,
  params,
}: Readonly<{
  children: React.ReactNode;
  params: Promise<{ locale: string }>;
}>) {
  const { locale } = await params;
  if (!isLocale(locale)) {
    notFound();
  }
  // Enable static rendering for this locale.
  setRequestLocale(locale);

  return (
    <html lang={htmlLang[locale as Locale]} className="overflow-x-hidden">
      <head>
        <link rel="icon" href="/images/fabicon.png" type="image/png" />
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link
          href="https://fonts.googleapis.com/css2?family=Cormorant+Garamond:ital,wght@0,400;0,500;0,600;0,700;1,400;1,500;1,600&family=Inter:wght@300;400;500;600;700&family=Kaisei+Decol:wght@400;700&family=Noto+Sans+JP:wght@300;400;500;700&family=Noto+Serif+JP:wght@400;500;700&display=swap"
          rel="stylesheet"
        />
      </head>
      <body className="font-inter antialiased bg-kuro text-shiro overflow-x-hidden">
        {/* Global hero background — fixed behind all pages */}
        <div className="fixed inset-0 -z-10">
          <div className="absolute inset-0 bg-kuro" />
          <Image
            src="/images/hero.jpeg"
            alt=""
            fill
            priority
            className="object-cover object-center"
          />
        </div>
        <NextIntlClientProvider>
          <Navbar />
          <main className="pt-14 min-h-screen">{children}</main>
          <Footer />
        </NextIntlClientProvider>
      </body>
    </html>
  );
}
