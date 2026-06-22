import type { GovernTheHumanContent } from './types';

/**
 * REVIEW DRAFT (Japanese). Terminology follows src/i18n/glossary.ts.
 * Fields touching unconfirmed terms are flagged with TODO(i18n-review).
 * Name is fixed as 小柳璃紗 / Risa Koyanagi.
 * "Govern the Human" / sub-project proper names are kept as project names.
 */
export const governTheHumanJa: GovernTheHumanContent = {
  backLabel: '← 進行中のプロジェクト一覧へ戻る',
  backHref: '/platforms',
  header: {
    kanji: '台',
    english: 'Govern the Human',
    // TODO(i18n-review): second-order governance の訳語要確認
    subtitle: 'AI・アイデンティティ・二次的ガバナンス',
  },
  status: '公開中',
  statusVariant: 'Live',
  visitLabel: 'プラットフォームを見る →',
  visitUrl: 'https://govern-the-human.vercel.app/',
  image: {
    src: '/images/govern the human og.png',
    alt: 'Govern the Human',
  },
  overview: {
    heading: '概要',
    paragraphs: [
      // TODO(i18n-review): human subject / second-order governance の訳語要確認。プロジェクト名（Narrative Drift / SelfTrace / Ontological Governance Observatory）は原語維持
      'Govern the Human は、Narrative Drift、SelfTrace、Ontological Governance Observatory を単一の分析環境へと統合した統一プラットフォームである。AIシステムが人間の選択・アイデンティティ・自己理解をいかに作り変えるかを探究し、現在のガバナンスの枠組みがより深い問題——AIは人間という主体そのものを作り変えうるということ——を見落としていると論じる。',
      // TODO(i18n-review): epistemic / ontological / second-order governance の訳語要確認
      'このプラットフォームは、これらの変化を認識論的・存在論的・政治的な各層にわたってマッピングし、インタラクティブなシミュレーションと研究に基づく分析を組み合わせて、新たな形の二次的ガバナンスの必要性を論じる。',
    ],
  },
  // TODO(i18n-review): 記述タグの訳語要確認
  tags: [
    'AIガバナンス',
    '存在論的リスク',
    '認識論的ドリフト',
    '選択アーキテクチャ',
    'アイデンティティ・シミュレーション',
    'アルゴリズム的アイデンティティ',
    '二次的ガバナンス',
  ],
  subProjects: [
    {
      title: 'Narrative Drift',
      description:
        'AIシステムが、人がいかに選び、記憶し、自己を理解するかを、ゆっくりと作り変えていく様子を体験できるインタラクティブなシミュレーション。利用者は自分自身の選択を続けるが、その選択の条件は時間とともに静かに変化していく。',
      // TODO(i18n-review): 記述タグの訳語要確認
      tags: ['AIの影響', '選択アーキテクチャ', 'アイデンティティ・シミュレーション', '認識論的ドリフト'],
    },
    {
      title: 'SelfTrace',
      description:
        'ソーシャルメディアのアルゴリズムが、利用者が何を投稿し、繰り返し、記憶し、やがてオンライン上の自己として経験するようになるかを、いかに形づくりうるかを可視化する内省的なプラットフォーム。単純なエンゲージメント指標ではなく、アイデンティティ、自己呈示、そしてプラットフォームのインセンティブがもたらす長期的影響に焦点を当てる。',
      // TODO(i18n-review): self-presentation / platform incentives の訳語要確認
      tags: ['アルゴリズム的アイデンティティ', '自己呈示', 'プラットフォーム・インセンティブ', 'デジタルな内省'],
    },
    {
      title: 'Ontological Governance Observatory',
      description:
        // TODO(i18n-review): second-order governance / human subject / ontological の訳語要確認
        '現在のAIガバナンスの枠組みが、より深い問題を見落としていることを示す研究プラットフォーム。AIはリスクや出力を生み出すだけでなく、人間という主体そのものを作り変えうる。これらの変化を認識論的・存在論的・政治的な各層にわたってマッピングし、新たな形の二次的ガバナンスの必要性を論じる。',
      // TODO(i18n-review): 記述タグの訳語要確認
      tags: ['AIガバナンス', '存在論的リスク', '二次的ガバナンス', '認識論的再構成'],
    },
  ],
  techStack: {
    heading: '技術スタック',
    items: ['Next.js', 'React', 'TypeScript', 'D3.js', 'Tailwind CSS', 'Vercel'],
  },
};
