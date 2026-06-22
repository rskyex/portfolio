import type { ScorelessContent } from './types';

/**
 * REVIEW DRAFT (Japanese). Terminology follows src/i18n/glossary.ts.
 * Fields touching unconfirmed terms are flagged with TODO(i18n-review).
 * Name is fixed as 小柳璃紗 / Risa Koyanagi.
 */
export const scorelessJa: ScorelessContent = {
  backLabel: '← プラットフォームに戻る',
  backHref: '/platforms',
  header: { kanji: '台', english: 'Scoreless' },
  status: '進行中',
  overview: {
    heading: '概要',
    paragraphs: [
      // TODO(i18n-review): score literacy / tension and release / formal development の訳語要確認
      'クラシック音楽の構造・論理・意味を、楽譜の読解力を要さずにアクセス可能にする音楽分析プラットフォーム。作品を単に「美しい」「悲しい」と語るのではなく、主題の反復、緊張と弛緩、形式上の展開、そしてそこから立ち現れる知的・美的な含意を——タイムライン、モチーフ表示、解説カードを通じて——可視化する。',
      // TODO(i18n-review): public domain / structured thought の訳語要確認
      'パブリックドメインのクラシック作品に焦点を当て、音楽を趣味の問題としてではなく、時間のなかで展開する構造化された思考として扱う。Scoreless は MYTHERA プロジェクトの一部である。',
    ],
  },
  // TODO(i18n-review): Structural Analysis / Motif Tracking / Music Theory / Public Domain の訳語要確認
  tags: ['クラシック音楽', '構造分析', 'モチーフ追跡', '音楽理論', 'パブリックドメイン'],
  techStack: {
    heading: '技術スタック',
    items: ['Next.js', 'React', 'TypeScript', 'D3.js', 'Tailwind CSS', 'Vercel'],
  },
};
