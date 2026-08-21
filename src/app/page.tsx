import type { Metadata } from 'next';
import LandingPage from '@/components/LandingPage';
import { en } from '@/dictionaries/en';

export const metadata: Metadata = {
  title: en.meta.title,
  description: en.meta.description,
  alternates: {
    canonical: '/',
    languages: {
      en: '/',
      ja: '/ja',
      'x-default': '/',
    },
  },
  openGraph: {
    locale: en.meta.ogLocale,
  },
};

export default function Home() {
  return <LandingPage dict={en} locale="en" />;
}
