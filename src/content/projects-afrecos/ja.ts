import type { AfrecosContent } from './types';

/**
 * REVIEW DRAFT (Japanese). Terminology follows src/i18n/glossary.ts.
 * Fields touching unconfirmed terms are flagged with TODO(i18n-review) and
 * must be checked by the author before being treated as final.
 * Name is fixed as 小柳璃紗 / Risa Koyanagi.
 */
export const afrecosJa: AfrecosContent = {
  backLabel: '← アーカイブされたプロジェクトに戻る',
  header: {
    // TODO(i18n-review): 組織名 AFRECOS は固有名詞。原語のまま据え置き
    kanji: '業',
    english: 'AFRECOS',
    subtitle: '共同設立者・代表 · 2024',
  },
  hero: {
    src: '/images/afrecos.jpg',
    alt: 'AFRECOSのイベント',
  },
  overview: {
    heading: '概要',
    // TODO(i18n-review): 「参議院」表記要確認
    paragraphs: [
      'AFRECOSは、アフリカと日本の文化・政策コミュニティをつなぐために設立された、10か国以上にまたがるネットワークである。共同設立者兼代表として、小柳璃紗は組織をゼロから築き上げ、多様な国際メンバーにわたる文化交流、政策イベント、市民への働きかけを企画・運営してきた。',
      '主な成果には、約70〜80名が参加するイベントの開催や、政府・市民社会・外交関係者から約50名のステークホルダーが集う政策トークを日本の参議院で実施したことが含まれる。',
    ],
  },
  // TODO(i18n-review): タグの訳語要確認（「参議院」等の固有表現を含む）
  tags: [
    'アフリカ・日本関係',
    '文化交流',
    '政策への関与',
    '参議院',
    '国際ネットワーク',
    'ステークホルダー調整',
  ],
  keyFacts: {
    heading: '主な事実',
    stats: [
      { value: '10+', label: '参加国数' },
      { value: '~80', label: 'イベント参加者' },
      { value: '~50', label: '政策ステークホルダー' },
    ],
  },
  gallery: {
    heading: 'ギャラリー',
    images: [
      { src: '/images/afrecos-1.JPG', alt: 'AFRECOSのイベント 1' },
      { src: '/images/afrecos-2.JPG', alt: 'AFRECOSのイベント 2' },
      { src: '/images/afrecos-3.JPG', alt: 'AFRECOSのイベント 3' },
      { src: '/images/afreocs-4.png', alt: 'AFRECOSのイベント 4' },
      { src: '/images/afrecos-5.png', alt: 'AFRECOSのイベント 5' },
      { src: '/images/afrecos%20gallery.JPG', alt: 'AFRECOSギャラリー' },
      { src: '/images/afrecos%20talk%20at%20parliament.JPG', alt: '参議院でのAFRECOSトーク' },
      { src: '/images/afrecos.jpg', alt: 'AFRECOS' },
    ],
  },
};
