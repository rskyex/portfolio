import { pageMetadata } from '@/lib/metadata';
import NewsPageContent from '@/components/NewsPageContent';
import { en } from '@/dictionaries/en';

export const metadata = pageMetadata({
  title: en.newsSection.pageTitle,
  description: en.newsSection.pageDescription,
  path: '/news',
  languages: {
    en: '/news',
    ja: '/ja/news',
    'x-default': '/news',
  },
});

export default function NewsPage() {
  return <NewsPageContent dict={en} locale="en" />;
}
