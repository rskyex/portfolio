import type { OrbitalContent } from './types';

/**
 * REVIEW DRAFT (Japanese). Terminology follows src/i18n/glossary.ts.
 * Fields touching unconfirmed terms are flagged with TODO(i18n-review).
 * Name is fixed as 小柳璃紗 / Risa Koyanagi.
 */
export const orbitalJa: OrbitalContent = {
  backLabel: '← プラットフォーム一覧へ戻る',
  backHref: '/platforms',
  header: { kanji: '台', english: 'オービタル・リスク・トラッカー' },
  status: '公開中',
  statusVariant: 'Live',
  visitLabel: 'プラットフォームを見る →',
  visitUrl: 'https://orbitalrisktracker.vercel.app',
  image: {
    src: '/images/orbital-platform.jpg',
    alt: 'オービタル・リスク・トラッカー——ASAT事象と近接運用の可視化',
  },
  overview: {
    heading: '概要',
    paragraphs: [
      'オービタル・リスク・トラッカーは、軌道インフラ全体にわたる対衛星（ASAT）事象、近接運用、GNSSジャミング事案、そして新たに生じつつあるサイバー・宇宙の連関を監視・可視化する。宇宙領域におけるエスカレーションの力学を理解するための、構造化された分析的枠組みを提供する。',
      // TODO(i18n-review): security dilemma / weaponised interdependence / governance architecture の訳語要確認
      'このプラットフォームは、ロバート・ジャービスの安全保障のジレンマの枠組みと、武器化された相互依存の理論に依拠し、軌道上のリスク行動をより広い戦略分析のなかで文脈づける。宇宙安全保障、軍備管理、ガバナンス・アーキテクチャに取り組む研究者・政策アナリスト・学生を支援することを目的として設計されている。',
    ],
  },
  // TODO(i18n-review): 記述タグ（近接運用/サイバー・宇宙の連関/武器化された相互依存等）の訳語要確認。固有名（Jervis）は原語維持
  tags: [
    'ASAT事象',
    '近接運用',
    'GNSSジャミング',
    'サイバー・宇宙の連関',
    'Jervis',
    '武器化された相互依存',
    'エスカレーション分析',
    '宇宙安全保障',
  ],
  techStack: {
    heading: '技術スタック',
    items: ['Next.js', 'React', 'TypeScript', 'D3.js', 'Leaflet', 'Tailwind CSS', 'Recharts', 'Vercel'],
  },
};
