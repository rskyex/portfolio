import type { PromiseContent } from './types';

/**
 * REVIEW DRAFT (Japanese). Terminology follows src/i18n/glossary.ts.
 * Fields touching unconfirmed terms are flagged with TODO(i18n-review).
 * Name is fixed as 小柳璃紗 / Risa Koyanagi.
 */
export const promiseJa: PromiseContent = {
  backLabel: '← 進行中のプロジェクトに戻る',
  backHref: '/platforms',
  header: { kanji: '台', english: 'Japan Promise Tracker' },
  status: '公開中',
  visitLabel: 'プラットフォームを見る →',
  liveUrl: 'https://jp-ver-japan-promise-tracker.vercel.app',
  imageSrc: '/images/promise-platform.jpg',
  imageAlt: 'Japan Promise Tracker — tracking government policy commitments',
  overview: {
    heading: '概要',
    paragraphs: [
      // TODO(i18n-review): policy commitments / lifecycle / fulfilment or abandonment の訳語要確認
      'Japan Promise Tracker は、日本政府の政策コミットメントをガバナンス領域にわたって監視・追跡する。表明から実施を経て、達成あるいは放棄に至るまで、政府の約束がたどる一連の過程を体系的に追うための枠組みを提供する。',
      // TODO(i18n-review): public accountability / legitimation / political communication の訳語要確認
      '本プラットフォームは、公的アカウンタビリティ・市民参加・政策分析を支えるべく、政府のコミットメントを透明で追跡可能なものとする。さらに、ガバナンスにおける約束が正統化と政治的コミュニケーションの手段としていかに機能するかをめぐる、より広い理解にも資する。',
    ],
  },
  // TODO(i18n-review): Policy Accountability / Civic Engagement / Public Policy の訳語要確認
  tags: [
    '政策アカウンタビリティ',
    '政府のコミットメント',
    '日本',
    '市民参加',
    '透明性',
    'ガバナンス',
    '公共政策',
  ],
  techStack: {
    heading: '技術スタック',
    items: ['Next.js', 'React', 'TypeScript', 'Tailwind CSS', 'Vercel'],
  },
};
