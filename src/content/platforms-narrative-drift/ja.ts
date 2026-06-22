import type { NarrativeDriftContent } from './types';

/**
 * REVIEW DRAFT (Japanese). Terminology follows src/i18n/glossary.ts.
 * Fields touching unconfirmed terms are flagged with TODO(i18n-review).
 * Name is fixed as 小柳璃紗 / Risa Koyanagi.
 */
export const narrativeDriftJa: NarrativeDriftContent = {
  backLabel: '← プラットフォーム一覧へ戻る',
  backHref: '/platforms',
  header: { kanji: '台', english: 'ナラティブ・ドリフト' },
  status: '公開中',
  statusVariant: 'Live',
  visitLabel: 'プラットフォームを見る →',
  visitUrl: 'https://narrative-drift.vercel.app/',
  image: {
    src: '/images/narrative drift-og.png',
    alt: 'Narrative Drift',
  },
  overview: {
    heading: '概要',
    paragraphs: [
      'AIシステムが、人の選び方、記憶の仕方、自己理解のあり方をゆっくりと作り変えていく様子を体験できるインタラクティブなシミュレーション。利用者は自ら選択を重ねるが、その選択の条件は時間とともに静かに移り変わる。',
      // TODO(i18n-review): epistemic / ontological の訳語要確認。Govern the Human はプロジェクト名のため原語維持
      'ナラティブ・ドリフトは「Govern the Human」プロジェクトの一部であり、AIが人間の選択・アイデンティティ・自己理解を、認識論的・存在論的・政治的な各層にわたってどう作り変えるかを探究する。',
    ],
  },
  // TODO(i18n-review): 記述タグ（AIの影響/選択アーキテクチャ/認識論的ドリフト等）の訳語要確認
  tags: ['AIの影響', '選択アーキテクチャ', 'アイデンティティ・シミュレーション', '認識論的ドリフト'],
  techStack: {
    heading: '技術スタック',
    items: ['Next.js', 'React', 'TypeScript', 'D3.js', 'Tailwind CSS', 'Vercel'],
  },
};
