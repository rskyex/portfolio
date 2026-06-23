import type { Dictionary } from './types';

// Japanese copy is intentionally CONDENSED from the English — not a literal
// translation. Risa will review and rewrite. Lines marked `// REVIEW` are word
// choices the author was unsure about. No credential, title, number, or status
// qualifier has been added or upgraded relative to en.ts.

export const ja: Dictionary = {
  meta: {
    title: '小柳璃紗 — 研究者 / プラットフォーム制作', // REVIEW: tagline wording
    description:
      '小柳璃紗のポートフォリオ。宇宙・核・サイバー・先端技術ガバナンスを横断する研究と、公開リサーチ・プラットフォームの制作。',
    ogLocale: 'ja_JP',
  },
  nav: {
    home: 'ホーム',
    platforms: 'プラットフォーム',
    research: '研究',
    fieldwork: 'フィールドワーク', // REVIEW: shortened from "Fieldwork & Engagement"
    about: 'プロフィール',
  },
  langToggle: {
    groupLabel: '言語',
    english: '英語で表示する',
    japanese: '日本語で表示する',
  },
  hero: {
    eyebrow: '宇宙・核・サイバー・先端技術ガバナンス',
    title: '研究者・プラットフォーム制作', // REVIEW
    description: [
      { text: '小柳璃紗は、' },
      { text: '宇宙・核・先端技術ガバナンス', bold: true },
      { text: 'を横断的に研究する研究者。2026年10月より、' },
      // VERIFY: 進学予定（未入学）。HSPS / Hughes Hall の訳語も要確認
      { text: 'ケンブリッジ大学ヒューズ・ホールで人文・社会・政治学（HSPS）', bold: true }, // REVIEW
      { text: 'に進学予定。' },
      { text: '正統化', bold: true }, // REVIEW: legitimation
      { text: '、' },
      { text: 'デュアルユース・システム', bold: true },
      { text: '、' },
      { text: '権威の構造', bold: true }, // REVIEW: authority architecture
      { text: 'を軸に、' },
      { text: 'SGAC 2026年宇宙政策プロジェクトチーム（日本）のチームリーダー', bold: true }, // REVIEW: SGAC = Space Generation Advisory Council
      { text: 'を務め、' },
      { text: 'JAXA国際宇宙教育委員会（2026年）', bold: true }, // REVIEW: official JA name of "International Space Education Board"
      { text: 'にも参加。' },
      { text: 'AIガバナンス', bold: true },
      { text: '・' },
      { text: '戦略インフラのリスク', bold: true },
      { text: '・' },
      { text: '解釈的システム', bold: true }, // REVIEW: interpretive systems
      { text: 'を扱う' },
      { text: '公開リサーチ・プラットフォーム', bold: true },
      { text: 'も手がけています。' },
    ],
    ctaPlatforms: 'プラットフォーム',
    ctaResearch: '研究を見る',
    contact: 'お問い合わせ',
  },
  platformsSection: {
    heading: 'プラットフォーム',
    flagship: 'フラッグシップ',
    viewPlatform: '見る →',
    viewAll: 'すべて見る →',
    wip: '制作中',
    items: [
      {
        slug: 'cyber',
        title: 'Cyber Escalation Atlas',
        // VERIFY: corpus = 36 incidents (provisional single source value — reuse this number everywhere it appears)
        description: '36件のサイバー事案コーパスを、戦略的行動・帰属・ガバナンスの観点から可視化。',
      },
      {
        slug: 'narrative-drift',
        title: 'Narrative Drift',
        description: 'AIが選択・記憶・自己理解に与える影響を時間軸で捉える。',
      },
      {
        slug: 'selftrace',
        title: 'SelfTrace',
        description: 'アルゴリズムが形づくるアイデンティティと自己呈示。',
      },
      {
        slug: 'ontological-governance-observatory',
        title: 'Ontological Governance Observatory',
        description: 'AIによる人間主体の変容を、認識・存在・政治の層から観察。', // REVIEW: epistemic/ontological/political
      },
      {
        slug: 'orbital',
        title: 'Orbital Risk Tracker',
        description: 'ASATや近接運用など、軌道上のリスクとエスカレーションを分析。',
      },
      {
        slug: 'nuclear',
        title: 'Global Nuclear Infrastructure Atlas',
        description: '民生用核インフラ・推定保有数・政策と健康影響を地図化。',
      },
      {
        slug: 'lunar-mandate-atlas',
        title: 'Lunar Mandate Atlas',
        description: '月をめぐる統治主張と権限の構造を整理。',
      },
      {
        slug: 'mythera',
        title: 'MYTHERA',
        description: '自己・文化・パフォーマンス・美的形式を、探索可能な世界にする解釈的スタジオ。', // REVIEW
        children: [
          {
            slug: 'theatre-of-authenticity',
            name: 'Theatre of Authenticity',
            description: '体験デザインを通じて「本当の自己」の限界を問う。',
          },
          {
            slug: 'second-self',
            name: 'Second Self',
            description: 'AI・記憶・統治と主体性の形成を探る哲学的カードゲーム。',
          },
        ],
      },
    ],
  },
  researchSection: {
    heading: '研究',
    subtitle: 'ガバナンス領域における主な研究',
    viewAll: 'すべて見る →',
    items: [
      {
        slug: 'lunar',
        title: '月において、誰が人類を代表するのか', // REVIEW: paper title rendering
        description: '競合する月面ガバナンスにおける正統化と権威の構造を分析。',
      },
      {
        slug: 'ai-cyber',
        title: '未完の規範としての「責任ある行動」', // REVIEW
        description: '宇宙・AI・サイバー領域のガバナンス言説における否認と転位を考察。', // REVIEW: denial/displacement/inoculation
      },
      {
        slug: 'fukushima',
        title: '災害後ガバナンスと信頼の隙間', // REVIEW
        description: '震災後の福島で、政策の隙間と復興ガバナンスを長期調査。',
      },
    ],
  },
  conferenceSection: {
    heading: '主な学会発表',
    subtitle: '国際的な研究の場での発表予定',
    card: {
      event: 'IAC 2026 — 採択論文3件',
      location: 'トルコ・アンタルヤ',
      organizer: '国際宇宙会議（IAC）／主催：国際宇宙航行連盟（IAF）',
      highlight: '採択論文3件',
      tags: ['宇宙ガバナンス', '月面システム', '規範', 'デュアルユース'],
      focus: '月面ガバナンス、デュアルユース・システム、規範形成、そして新たな宇宙秩序における象徴的インフラ。',
      papers: [
        {
          title: '月面インフラ・ガバナンスにおけるデュアルユースの中立化と「責任ある行動」規範', // REVIEW
          symposium: 'E9 — 宇宙の安全保障・安定・持続可能性',
          date: '2026年10月8日',
        },
        {
          title: '条件つきの開放性：普遍主義の言語が月探査ガバナンスに生む境界', // REVIEW
          symposium: 'E3 — 宇宙政策・規制・経済',
        },
        {
          title: '競合する月秩序のソフトインフラとしての神話的命名：アルテミスと嫦娥', // REVIEW
          symposium: 'E5 — 宇宙と社会',
        },
      ],
      labels: {
        eyebrow: '2026年 · 発表予定',
        papersCountPrefix: '採択論文 ',
        papersCountSuffix: '件',
        viewPapers: '論文を見る',
        collapse: '閉じる',
        researchFocus: '研究テーマ',
        paperTypes: {
          oral: '口頭発表',
          interactive: 'インタラクティブ発表', // REVIEW
        },
      },
    },
  },
  // Fieldwork & Public Engagement section (フィールドワークと社会的活動 /
  // 登壇・政策活動) is intentionally omitted from the Japanese page.
  fieldworkSection: null,
};

export default ja;
