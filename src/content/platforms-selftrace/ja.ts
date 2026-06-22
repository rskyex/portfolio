import type { SelfTraceContent } from './types';

/**
 * REVIEW DRAFT (Japanese). Terminology follows src/i18n/glossary.ts.
 * Fields touching unconfirmed terms are flagged with TODO(i18n-review).
 * Name is fixed as 小柳璃紗 / Risa Koyanagi.
 */
export const selftraceJa: SelfTraceContent = {
  backLabel: '← プラットフォームに戻る',
  backHref: '/platforms',
  header: { kanji: '台', english: 'SelfTrace' },
  status: '公開中',
  visitLabel: 'プラットフォームを見る →',
  liveUrl: 'https://selftrace.vercel.app/',
  imageSrc: '/images/selftrace og.png',
  imageAlt: 'SelfTrace',
  overview: {
    heading: '概要',
    paragraphs: [
      // TODO(i18n-review): self-presentation / platform incentives / engagement metrics の訳語要確認
      'ソーシャルメディアのアルゴリズムが、ユーザーが投稿し、反復し、記憶し、やがてオンライン上の自己として経験するものを、いかに形づくりうるかを見えるようにする省察的プラットフォーム。単純なエンゲージメント指標ではなく、アイデンティティ、自己呈示、そしてプラットフォームのインセンティブがもたらす長期的な影響に焦点を当てる。',
      // TODO(i18n-review): Govern the Human / self-understanding / epistemic, ontological, political layers の訳語要確認
      'SelfTrace は Govern the Human プロジェクトの一部であり、同プロジェクトは、AIが人間の選択・アイデンティティ・自己理解を、認識的・存在論的・政治的な各層にわたっていかに作り変えるかを探究する。',
    ],
  },
  // TODO(i18n-review): Algorithmic Identity / Self-Presentation / Platform Incentives / Digital Reflection の訳語要確認
  tags: ['アルゴリズム的アイデンティティ', '自己呈示', 'プラットフォームのインセンティブ', 'デジタルな省察'],
  techStack: {
    heading: '技術スタック',
    items: ['Next.js', 'React', 'TypeScript', 'Tailwind CSS', 'Vercel'],
  },
};
