import type { OntologicalGovernanceObservatoryContent } from './types';

/**
 * REVIEW DRAFT (Japanese). Terminology follows src/i18n/glossary.ts.
 * Fields touching unconfirmed terms are flagged with TODO(i18n-review).
 * Name is fixed as 小柳璃紗 / Risa Koyanagi.
 */
export const ontologicalGovernanceObservatoryJa: OntologicalGovernanceObservatoryContent = {
  backLabel: '← プラットフォーム一覧へ戻る',
  backHref: '/platforms',
  // TODO(i18n-review): glossary ontologicalGovernance は status:'review'。著者の中核概念のため訳語の確定が特に重要
  header: { kanji: '台', english: '存在論的ガバナンス・オブザーバトリー' },
  status: '進行中',
  statusVariant: 'In Progress',
  image: {
    src: '/images/ogo-og.png',
    alt: 'Ontological Governance Observatory',
  },
  overview: {
    heading: '概要',
    paragraphs: [
      // TODO(i18n-review): second-order governance / human subject / ontological の訳語要確認
      '現在のAIガバナンスの枠組みが、より深い問題を見落としていることを示す研究プラットフォーム。AIはリスクや出力を生み出すだけでなく、人間という主体そのものを作り変えうる。こうした変化を認識論的・存在論的・政治的な各層にわたってマッピングし、新たな形の二次的ガバナンスの必要を説く。',
      // TODO(i18n-review): Govern the Human はプロジェクト名のため原語維持
      '存在論的ガバナンス・オブザーバトリーは「Govern the Human」プロジェクトの一部であり、AIが人間の選択・アイデンティティ・自己理解をどう作り変えるかを探究する。',
    ],
  },
  // TODO(i18n-review): 記述タグ（存在論的リスク/二次的ガバナンス/認識論的再構成等）の訳語要確認
  tags: ['AIガバナンス', '存在論的リスク', '二次的ガバナンス', '認識論的再構成'],
  techStack: {
    heading: '技術スタック',
    items: ['Next.js', 'React', 'TypeScript', 'D3.js', 'Tailwind CSS', 'Vercel'],
  },
};
