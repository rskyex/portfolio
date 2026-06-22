import type { PlatformsContent } from './types';

/**
 * REVIEW DRAFT (Japanese). Terminology follows src/i18n/glossary.ts.
 * Fields touching unconfirmed terms are flagged with TODO(i18n-review) and
 * must be checked by the author before being treated as final.
 * Name is fixed as 小柳璃紗 / Risa Koyanagi.
 */
export const platformsJa: PlatformsContent = {
  header: {
    kanji: '台',
    english: 'プラットフォーム',
    subtitle: '独自に設計した研究プラットフォーム',
  },
  // TODO(i18n-review): 正統性/権威/エスカレーション など術語要確認
  intro:
    '戦略的インフラ領域を横断し、ガバナンス理論を実装可能なプラットフォームへと落とし込む、一貫した公開型の研究・政策ツール群。いずれのプラットフォームも、正統性・権威・エスカレーションをめぐる概念枠組みを、具体的な政策課題へと結びつける。',
  researchPlatforms: {
    title: '研究プラットフォーム',
    subtitle: '独自に設計した研究・政策・戦略リスクのツール',
    cards: [
      {
        href: '/platforms/cyber',
        title: 'Cyber Escalation Atlas',
        // TODO(i18n-review): attribution（帰属）/governance signals の訳語要確認
        description:
          'サイバー・インシデントを、戦略的行動・アトリビューション（帰属）の枠組み・ガバナンスのシグナルとして読み解き、地図化する。',
        status: '公開中',
        statusVariant: 'Live',
        liveUrl: 'https://cyber-escalation-atlas-5yp5.vercel.app',
        tags: ['サイバー', 'アトリビューション', 'エスカレーション'],
        image: '/images/cyber-platform.png',
        // TODO(i18n-review): strategic behaviour / governance frameworks の訳語要確認
        coreQuestion:
          '核心的な問い：サイバー作戦は戦略的行動としていかに機能するのか。そして、それを捉えうるガバナンスの枠組みとは何か。',
      },
      {
        href: '/platforms/narrative-drift',
        title: 'Narrative Drift',
        // TODO(i18n-review): self-understanding の訳語要確認
        description:
          'AIシステムが、選択・記憶・自己理解を時間とともにいかに作り変えていくかを探究するインタラクティブ・シミュレーション。',
        status: '公開中',
        statusVariant: 'Live',
        liveUrl: 'https://narrative-drift.vercel.app/',
        // TODO(i18n-review): Choice Architecture / Epistemic Drift の訳語要確認
        tags: ['AIの影響', '選択アーキテクチャ', '認識的ドリフト'],
        image: '/images/narrative drift-og.png',
        // TODO(i18n-review): epistemic autonomy / nudges の訳語要確認
        coreQuestion:
          '核心的な問い：AIシステムは、時間をかけた小さなナッジの蓄積を通じて、認識的自律性をいかに浸食するのか。',
      },
      {
        href: '/platforms/selftrace',
        title: 'SelfTrace',
        // TODO(i18n-review): self-presentation / online selfhood の訳語要確認
        description:
          'ソーシャルメディアのアルゴリズムが、アイデンティティ・自己呈示・オンライン上の自己をいかに形づくるかを検討する省察的プラットフォーム。',
        status: '公開中',
        statusVariant: 'Live',
        liveUrl: 'https://selftrace.vercel.app/',
        // TODO(i18n-review): Algorithmic Identity / Self-Presentation / Digital Reflection の訳語要確認
        tags: ['アルゴリズム的アイデンティティ', '自己呈示', 'デジタルな省察'],
        image: '/images/selftrace og.png',
        // TODO(i18n-review): self-presentation / identity construction の訳語要確認
        coreQuestion:
          '核心的な問い：ソーシャルメディアのアルゴリズムは、自己呈示とアイデンティティの構築をいかに形づくるのか。',
      },
      {
        href: '/platforms/ontological-governance-observatory',
        // TODO(i18n-review): Ontological Governance Observatory は著者の中核概念。訳語の確定が特に重要
        title: 'Ontological Governance Observatory',
        // TODO(i18n-review): human subject / epistemic, ontological, political layers の訳語要確認
        description:
          'AIが、認識的・存在論的・政治的な各層にわたって人間という主体をいかに作り変えるかをマッピングする。',
        status: '進行中',
        statusVariant: 'In Progress',
        // TODO(i18n-review): Ontological Risk / Second-Order Governance の訳語要確認
        tags: ['AIガバナンス', '存在論的リスク', '二次的ガバナンス'],
        image: '/images/ogo-og.png',
        // TODO(i18n-review): human subject の訳語要確認
        coreQuestion:
          '核心的な問い：AIが人間という主体そのものを変容させるとき、ガバナンスの枠組みはいかに変わらなければならないのか。',
      },
      {
        href: '/platforms/orbital',
        title: 'Orbital Risk Tracker',
        // TODO(i18n-review): ASAT / proximity operations / GNSS jamming / cyber-space entanglement の訳語要確認
        description:
          'ASAT（対衛星）事象、近接運用、GNSSジャミング、サイバー・宇宙の絡み合いを、エスカレーション分析とともに追跡する。',
        status: '公開中',
        statusVariant: 'Live',
        liveUrl: 'https://orbitalrisktracker.vercel.app',
        tags: ['ASAT', '宇宙安全保障', 'エスカレーション'],
        image: '/images/orbital-platform.jpg',
        // TODO(i18n-review): escalation calculus の訳語要確認
        coreQuestion:
          '核心的な問い：ASAT能力と近接運用は、軌道空間におけるエスカレーションの計算をいかに変容させているのか。',
      },
      {
        href: '/platforms/nuclear',
        title: 'Global Nuclear Infrastructure Atlas',
        // TODO(i18n-review): civilian nuclear / arsenals の訳語要確認
        description:
          '民生用の原子力インフラ、事故現場、推定核戦力を、政策と健康の文脈とともにインタラクティブにマッピングする。',
        status: '公開中',
        statusVariant: 'Live',
        liveUrl: 'https://globalnuclearinfrastructureatlas.vercel.app',
        tags: ['IAEA', 'SIPRI', '核'],
        image: '/images/nuclear-platform.jpg',
        // TODO(i18n-review): civilian nuclear infrastructure の訳語要確認
        coreQuestion:
          '核心的な問い：民生用の原子力インフラは世界でいかに分布し、そこからいかなるガバナンスと健康上の含意が生じるのか。',
      },
      {
        href: '/platforms/lunar-mandate-atlas',
        title: 'Lunar Mandate Atlas',
        // TODO(i18n-review): mandates / authority architecture の訳語要確認
        description:
          'アルテミス合意とILRS計画にまたがる、競合する月面ガバナンスの枠組み・マンデート・権威アーキテクチャをインタラクティブにマッピングする。',
        status: '公開中',
        statusVariant: 'Live',
        liveUrl: 'https://lunar-mandate-atlas.vercel.app',
        // TODO(i18n-review): Lunar Governance / Authority Architecture の訳語要確認
        tags: ['月面ガバナンス', 'Artemis Accords', 'ILRS', '権威アーキテクチャ'],
        image: '/images/LGAT-og.svg',
        // TODO(i18n-review): legitimacy / on behalf of humanity の訳語要確認
        coreQuestion:
          '核心的な問い：競合するガバナンスの枠組みは、月において人類を代表すると称しつつ、いかに権威を築き正統性を主張するのか。',
      },
    ],
  },
  flagship: {
    title: 'フラッグシップ・プロジェクト・システム',
    subtitle: '連結したサブプロジェクトを内包する親プラットフォーム',
    card: {
      href: '/platforms/mythera',
      title: 'MYTHERA',
      // TODO(i18n-review): interpretive studio / aesthetic form の訳語要確認
      description:
        '自己・文化・パフォーマンス・美的形式が、探索可能な世界となる解釈のためのスタジオ。',
      // TODO(i18n-review): philosophical game design の訳語要確認
      includes:
        '音楽分析・真正性・哲学的なゲームデザインを扱う連結プロジェクトを内包する。',
      liveUrl: 'https://mythera.vercel.app/',
      image: '/images/mythera og.png',
      subProjects: [
        { name: 'Scoreless', href: '/platforms/scoreless' },
        { name: 'Theatre of Authenticity', href: '/platforms/theatre-of-authenticity' },
        { name: 'Second Self', href: '/platforms/second-self' },
      ],
    },
    subProjectsLabel: 'サブプロジェクト',
    subProjects: [
      {
        href: '/platforms/scoreless',
        title: 'Scoreless',
        // TODO(i18n-review): score literacy の訳語要確認
        description:
          'クラシック音楽の構造・論理・意味を、楽譜の読解力を要さずにアクセス可能にする音楽分析プラットフォーム。',
        status: '進行中',
        statusVariant: 'In Progress',
        // TODO(i18n-review): Structural Analysis / Motif Tracking / Music Theory の訳語要確認
        tags: ['クラシック音楽', '構造分析', 'モチーフ追跡', '音楽理論'],
        image: '/images/mythera og.png',
        // TODO(i18n-review): musical structure / score literacy の訳語要確認
        coreQuestion:
          '核心的な問い：楽譜の読解力を要さずに、音楽の構造をいかにして可視化し、意味あるものにできるか。',
      },
      {
        href: '/platforms/theatre-of-authenticity',
        title: 'Theatre of Authenticity',
        // TODO(i18n-review): authenticity / externalised の訳語要確認
        description:
          '真正性そのものを問う体験型サイト。私たちの行動を駆り立てる動機が、どこまで外部化されてきたのかを可視化する。三島、キルケゴール、ニーチェ、サルトル、バタイユを横断する。',
        status: '進行中',
        statusVariant: 'In Progress',
        // TODO(i18n-review): Authenticity / Selfhood / Existentialism の訳語要確認
        tags: ['真正性', 'パフォーマンス', '自己性', '実存主義'],
        image: '/images/Theatre of Authenticity.png',
        // TODO(i18n-review): inner necessity / on the premise of being watched の訳語要確認
        coreQuestion:
          '核心的な問い：あなたは本当に内なる必然から行動しているのか、それとも見られていることを前提に自己を構築しているのか。',
      },
      {
        href: '/platforms/second-self',
        title: 'Second Self',
        // TODO(i18n-review): formation of subjectivity / human subjects の訳語要確認
        description:
          'AI・記憶・ガバナンス・主体性の形成を探究するオンラインの哲学カードゲーム。プレイヤーは社会そのものを設計し、いかなる人間主体が立ち現れるかを決定する。',
        status: '進行中',
        statusVariant: 'In Progress',
        // TODO(i18n-review): Subjectivity / Social Design の訳語要確認
        tags: ['哲学', 'カードゲーム', 'AIガバナンス', '主体性', '社会設計'],
        image: '/images/secondself_og.png',
        // TODO(i18n-review): become selves の訳語要確認
        coreQuestion:
          '核心的な問い：システムが、人間が自己になっていくまさにその過程に参与しはじめるとき、何が起こるのか。',
      },
    ],
  },
  otherProjects: {
    title: '主要な独立プロジェクト',
    subtitle: '単独で機能する研究・政策ツール',
    cards: [
      {
        href: '/platforms/promise',
        title: 'Japan Promise Tracker',
        // TODO(i18n-review): policy commitments / fulfilment / public accountability の訳語要確認
        description:
          '日本政府の政策コミットメントと、その達成状況をガバナンス領域にわたって追跡する。政府の約束を透明で追跡可能なものとし、公的アカウンタビリティ・政策分析・市民参加を支えることをねらいとする。',
        status: '公開中',
        statusVariant: 'Live',
        liveUrl: 'https://jp-ver-japan-promise-tracker.vercel.app',
        // TODO(i18n-review): Policy Accountability / Government Commitments / Civic Engagement の訳語要確認
        tags: ['日本', '政策アカウンタビリティ', '政府のコミットメント', '市民参加'],
        image: '/images/promise-platform.jpg',
        // TODO(i18n-review): government commitments / accountable の訳語要確認
        coreQuestion:
          '核心的な問い：政府のコミットメントを、いかにして透明で、市民に対して説明責任あるものにできるか。',
      },
    ],
  },
  // TODO(i18n-review): 技術スタックの体言止め表現要確認
  closingNote:
    '各プラットフォームは Next.js、React、TypeScript、D3 / Leaflet で構築されている。',
};
