import type { SecondSelfContent } from './types';

/**
 * REVIEW DRAFT (Japanese). Terminology follows src/i18n/glossary.ts.
 * Fields touching unconfirmed terms are flagged with TODO(i18n-review).
 * Name is fixed as 小柳璃紗 / Risa Koyanagi.
 */
export const secondSelfJa: SecondSelfContent = {
  meta: {
    title: 'Second Self',
    // TODO(i18n-review): メタ説明文の訳語要確認（formation of subjectivity / become selves）
    description:
      'AI、記憶、ガバナンス、そして主体性の形成を探究するオンラインの哲学カードゲーム——システムが、人間が自己になっていく過程を形づくりはじめるとき、何が起こるのか。',
  },
  backLabel: '← MYTHERA に戻る',
  backHref: '/platforms/mythera',
  header: { kanji: '己', english: 'Second Self', subtitle: '哲学カードゲーム' },
  status: '進行中',
  imageSrc: '/images/secondself_og.png',
  imageAlt: 'Second Self',
  overview: {
    heading: '概要',
    paragraphs: [
      // TODO(i18n-review): formation of subjectivity / algorithmic systems の訳語要確認
      'AI、記憶、ガバナンス、そして主体性の形成をテーマとするオンラインの哲学カードゲーム。アルゴリズム的システムが社会の深層にまで浸透した近未来を舞台に、プレイヤーは単に相手を打ち負かすのではなく——社会を設計する。',
      // TODO(i18n-review): human subjects / conditions of society / selfhood の訳語要確認
      'プレイヤーは情報環境を構築し、記憶の制度を確立し、公共空間とガバナンス構造を選び取り、そうすることでいかなる人間主体が立ち現れるかを決定する。カードを切ることは、単に力を行使することではない——それは社会の条件を書き換え、自己性が成り立つまさにその前提を変える行為である。',
      // TODO(i18n-review): govern human behaviour / become selves の訳語要確認
      'ゲームの核心には、この問いがある——システムが、もはや人間の行動を統治するだけでなく、人間が自己になっていくまさにその過程に参与しはじめるとき、何が起こるのか。',
    ],
  },
  cardSystem: {
    heading: 'カードシステム',
    categories: [
      {
        title: '哲学者カード',
        // TODO(i18n-review): theoretical lenses / operating principles の訳語要確認
        description:
          'フーコー、アーレント、ロールズ、バトラー、シモンドン、スティグレール、ボーヴォワール、ホッブズ——世界の作動原理を変える理論的レンズとして機能する。',
      },
      {
        title: '概念カード',
        // TODO(i18n-review): narrative identity / democratic subjectivity 等の訳語要確認
        description:
          '自律、承認、規律、ケア、主権、正統性、ナラティブ・アイデンティティ、集合的記憶、不可視性、民主的主体性。',
      },
      {
        title: '制度カード',
        // TODO(i18n-review): civic reputation systems / predictive governance dashboards の訳語要確認
        description:
          'レコメンデーション・エンジン、AIチューター、生体認証ID、感情分析、パーソナルAIコンパニオン、記憶アーカイブ、市民レピュテーション・システム、予測的ガバナンス・ダッシュボード。',
      },
      {
        title: 'イベントカード',
        // TODO(i18n-review): constitutional amendments / anti-surveillance movements の訳語要確認
        description:
          '選挙危機、戦争、データ漏洩、AIスキャンダル、若者のメンタルヘルス危機、プラットフォームの崩壊、憲法改正、大規模な反監視運動。',
      },
      {
        title: '介入カード',
        // TODO(i18n-review): deliberation / civic assemblies / counterpublic formation の訳語要確認
        description:
          '監査、暗号化、熟議、市民集会、データ・ストライキ、スロー・メディア、人間によるレビュー、対抗的公共圏の形成。',
      },
    ],
  },
  victory: {
    heading: '勝利条件',
    paragraphs: [
      // TODO(i18n-review): psychological integration / democratic capacity / memory diversity の訳語要確認
      '勝利は、相手のHPを削り切ることでは得られない。プレイヤーは複数の指標——安定、自由、正統性、革新、心理的統合、民主的能力、記憶の多様性——にまたがる緊張を管理しなければならない。',
      // TODO(i18n-review): strongest board / what kind of human being の訳語要確認
      '「勝つ」とは最も強い盤面を築くことではない——それは、あなたがいかなる社会を築き、その結果としていかなる人間を生み出したかの評価となる。',
    ],
  },
  // TODO(i18n-review): Subjectivity / Social Design / Near-Future の訳語要確認
  tags: [
    '哲学',
    'カードゲーム',
    'AIガバナンス',
    '主体性',
    '社会設計',
    'Foucault',
    'Arendt',
    'Stiegler',
    '記憶',
    '近未来',
  ],
  techStack: {
    heading: '技術スタック',
    items: ['Next.js', 'React', 'TypeScript', 'Tailwind CSS', 'Vercel'],
  },
};
