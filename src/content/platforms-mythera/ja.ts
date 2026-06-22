import type { MytheraContent } from './types';

/**
 * REVIEW DRAFT (Japanese). Terminology follows src/i18n/glossary.ts.
 * Fields touching unconfirmed terms are flagged with TODO(i18n-review).
 * Name is fixed as 小柳璃紗 / Risa Koyanagi.
 * Sub-project proper names (Scoreless, Theatre of Authenticity, Second Self)
 * are kept as project names. Author proper nouns (Mishima, etc.) kept as-is.
 */
export const mytheraJa: MytheraContent = {
  backLabel: '← 進行中のプロジェクト一覧へ戻る',
  backHref: '/platforms',
  header: {
    kanji: '台',
    english: 'MYTHERA',
    subtitle: 'インタープリティブ・スタジオ',
  },
  status: '公開中',
  statusVariant: 'Live',
  visitLabel: 'mythera.vercel.app →',
  visitUrl: 'https://mythera.vercel.app/',
  image: {
    src: '/images/mythera og.png',
    alt: 'MYTHERA',
  },
  overview: {
    heading: '概要',
    paragraphs: [
      // TODO(i18n-review): selfhood / aesthetic form の訳語要確認
      'MYTHERA は、自己・システム・文学・パフォーマンス・美的形式を横断し、目に見えない構造を探究するためのインタープリティブ・スタジオであり、概念的な世界である。文化を、消費されるコンテンツではなく地図化されるべき領域として捉え、私たちの読み方、演じ方、なり方を形づくるパターンから、踏破可能な世界を立ち上げる。',
      // TODO(i18n-review): aesthetic legibility / personal identity の訳語要確認
      'MYTHERA 内の各世界は、個人のアイデンティティのアーキテクチャから美的経験の可読性まで、それぞれ異なる意味の軸を切り出し、解釈の枠組み、視覚的構造、そして厳密な探究を通じて探索可能なものにする。',
    ],
  },
  // TODO(i18n-review): 記述タグ（解釈の世界/自己/美的可読性等）の訳語要確認
  tags: ['解釈の世界', '自己', '文学とパフォーマンス', '美的可読性'],
  subProjects: [
    {
      title: 'Scoreless',
      description:
        '楽譜を読む力を前提とせず、クラシック音楽の構造・論理・意味に触れられるようにする音楽分析プラットフォーム。作品を単に「美しい」「悲しい」と評するのではなく、主題の反復、緊張と弛緩、形式的展開、そしてそこから立ち現れる知的・美的な含意を、タイムライン、モチーフ表示、解説カードを通じて可視化する。パブリックドメインのクラシック作品を対象とし、音楽を趣味嗜好の問題ではなく、時間のなかで展開する構造化された思考として扱う。',
      // TODO(i18n-review): 記述タグの訳語要確認
      tags: ['クラシック音楽', '構造分析', 'モチーフ追跡', '音楽理論', 'パブリックドメイン'],
    },
    {
      title: 'Theatre of Authenticity',
      description:
        // TODO(i18n-review): authenticity（真正性/本来性）/ transcendence の訳語要確認。固有名（Mishima 等）は原語維持
        '真正性そのものを問う体験型サイト。利用者は一連の選択を行うが、その途中から、他者のまなざし、観客、記録装置、称賛、反発が介入しはじめる。やがて、自らの行為を支える動機がどこまで外部化されていたかが浮かび上がる。三島、キルケゴール、ニーチェ、サルトル、バタイユを横断し、真正性・パフォーマンス・美・死・超越の絡み合いを探究する。',
      tags: ['真正性', 'パフォーマンス', '自己', '実存主義', 'Mishima', 'Kierkegaard'],
      image: '/images/Theatre of Authenticity.png',
      href: '/platforms/theatre-of-authenticity',
    },
    {
      title: 'Second Self',
      description:
        // TODO(i18n-review): subjectivity / human subjects / selfhood / governance の訳語要確認
        'AI・記憶・ガバナンス・主体性の形成を探究する、オンラインの哲学カードゲーム。アルゴリズム的システムが社会の深層に浸透した近未来を舞台に、プレイヤーは社会を設計し、どのような人間主体が立ち現れるかを左右する。カードを切るたびに社会の条件が書き換えられ、自己が構成される前提そのものが変わっていく。',
      tags: ['哲学', 'カードゲーム', 'AIガバナンス', '主体性', '社会設計'],
      image: '/images/secondself_og.png',
      href: '/platforms/second-self',
    },
  ],
  techStack: {
    heading: '技術スタック',
    items: ['Next.js', 'React', 'TypeScript', 'D3.js', 'Tailwind CSS', 'Vercel'],
  },
};
