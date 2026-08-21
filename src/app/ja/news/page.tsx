import { pageMetadata } from '@/lib/metadata';
import NewsPageContent from '@/components/NewsPageContent';
import { ja } from '@/dictionaries/ja';

export const metadata = pageMetadata({
  title: ja.newsSection.pageTitle,
  description: ja.newsSection.pageDescription,
  path: '/ja/news',
  ogLocale: ja.meta.ogLocale,
  languages: {
    en: '/news',
    ja: '/ja/news',
    'x-default': '/news',
  },
});

export default function NewsPageJa() {
  return <NewsPageContent dict={ja} locale="ja" />;
}
