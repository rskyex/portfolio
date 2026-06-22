import type { NuclearContent } from './types';

/**
 * REVIEW DRAFT (Japanese). Terminology follows src/i18n/glossary.ts.
 * Fields touching unconfirmed terms are flagged with TODO(i18n-review).
 * Name is fixed as 小柳璃紗 / Risa Koyanagi.
 */
export const nuclearJa: NuclearContent = {
  backLabel: '← プラットフォーム一覧へ戻る',
  backHref: '/platforms',
  // TODO(i18n-review): glossary nuclearGovernance は status:'review'。民生文脈は「原子力」、安全保障文脈は「核」で使い分け要確認
  header: { kanji: '台', english: 'グローバル原子力インフラ・アトラス' },
  status: '公開中',
  statusVariant: 'Live',
  visitLabel: 'プラットフォームを見る →',
  visitUrl: 'https://globalnuclearinfrastructureatlas.vercel.app',
  image: {
    src: '/images/nuclear-platform.jpg',
    alt: 'グローバル原子力インフラ・アトラス：世界の原子力インフラのインタラクティブ地図',
  },
  overview: {
    heading: '概要',
    paragraphs: [
      'グローバル原子力インフラ・アトラスは、稼働中の原子炉、廃炉施設、主要な事故サイトを含む、世界の民生用原子力発電インフラをインタラクティブにマッピングするインターフェースである。原子力インフラを、推定核戦力データや放射線・健康の枠組みのなかに位置づける。',
      // TODO(i18n-review): 国際機関名（IAEA/SIPRI/WHO）の日本語正式表記要確認
      '本プラットフォームは、教育や政策の現場での利用を見据え、国際原子力機関（IAEA）、ストックホルム国際平和研究所（SIPRI）、世界保健機関（WHO）などの公開データに依拠する。原子力インフラの地理的分布と、それに伴うガバナンス上の課題への市民の理解を深めることを目指す。',
    ],
  },
  // TODO(i18n-review): 記述タグの訳語要確認。固有名（IAEA/SIPRI/WHO）は原語維持
  tags: [
    '民生用原子力',
    '事故サイト',
    '核戦力',
    '放射線と健康',
    'IAEA',
    'SIPRI',
    'WHO',
    '政策教育',
  ],
  techStack: {
    heading: '技術スタック',
    items: ['Next.js', 'React', 'TypeScript', 'Leaflet', 'D3.js', 'Tailwind CSS', 'Recharts', 'Vercel'],
  },
};
