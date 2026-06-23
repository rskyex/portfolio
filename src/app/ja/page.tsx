import type { Metadata } from 'next';
import LandingPage from '@/components/LandingPage';
import { ja } from '@/dictionaries/ja';

export const metadata: Metadata = {
  title: ja.meta.title,
  description: ja.meta.description,
  alternates: {
    canonical: '/ja',
    languages: {
      en: '/',
      ja: '/ja',
      'x-default': '/',
    },
  },
  openGraph: {
    locale: ja.meta.ogLocale,
  },
};

export default function HomeJa() {
  return <LandingPage dict={ja} />;
}
