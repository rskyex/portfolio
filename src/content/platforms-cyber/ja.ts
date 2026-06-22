import type { CyberContent } from './types';

/**
 * REVIEW DRAFT (Japanese). Terminology follows src/i18n/glossary.ts.
 * Fields touching unconfirmed terms are flagged with TODO(i18n-review).
 * Name is fixed as 小柳璃紗 / Risa Koyanagi.
 */
export const cyberJa: CyberContent = {
  backLabel: '← プラットフォーム一覧へ戻る',
  backHref: '/platforms',
  header: { kanji: '台', english: 'サイバー・エスカレーション・アトラス' },
  status: '公開中',
  statusVariant: 'Live',
  visitLabel: 'プラットフォームを見る →',
  visitUrl: 'https://cyber-escalation-atlas-5yp5.vercel.app',
  iframeTitle: 'Cyber Escalation Atlas',
  overview: {
    heading: '概要',
    paragraphs: [
      'サイバー・エスカレーション・アトラスは、サイバー事案を純粋に技術的な事象とみなさず、戦略的行動とガバナンスのシグナルの表れとしてマッピングする。国際安全保障とエスカレーションの力学という広い文脈にサイバー作戦を位置づけ、それを読み解くための構造化された分析の枠組みを提供する。',
      // TODO(i18n-review): 「unpeace（不平和）」は定訳が未確立。原語併記で要確認
      'ここで扱うのは、ルーカス・ケロの「unpeace（不平和）」概念、すなわち持続的なサイバー上の係争を特徴とする戦争と平和のあいだの状態をはじめ、アトリビューション（帰属）の枠組み、トーマス・シェリングのエスカレーション論理、そしてタリン・マニュアル2.0が確立した分析的カテゴリーである。',
      'サイバー事案がガバナンスのシグナルとしていかに機能するかを分析し、抑止・エスカレーション・制度的対応という戦略的枠組みのなかにそれを位置づける。本プラットフォームはそのために設計されている。',
    ],
  },
  // TODO(i18n-review): 概念タグ（戦略的行動/不平和/エスカレーション等）の訳語要確認。固有名（Kello/Schelling/Tallinn Manual 2.0）は原語維持
  tags: [
    'サイバー事案',
    '戦略的行動',
    'Kello',
    'Unpeace',
    'アトリビューション',
    'Schelling',
    'Tallinn Manual 2.0',
    'エスカレーション',
    'ガバナンス・シグナル',
  ],
  techStack: {
    heading: '技術スタック',
    items: ['Next.js', 'React', 'TypeScript', 'D3.js', 'Tailwind CSS', 'Python', 'Vercel'],
  },
};
