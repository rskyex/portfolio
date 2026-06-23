import type { Dictionary } from './types';

// Japanese copy is intentionally CONDENSED from the English — not a literal
// translation. Risa will review and rewrite. Lines marked `// REVIEW` are word
// choices the author was unsure about. The JA landing page intentionally
// DIVERGES from EN per request: no hero tagline, Conference shown before
// Research, and extra profile sections (extra.*) ported from the About page.

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
    // title intentionally omitted on the JA page (per request)
    description: [
      { text: '小柳璃紗。' },
      { text: 'ケンブリッジ大学人文・社会・政治学（HSPS）専攻', bold: true }, // REVIEW: HSPS 表記
      { text: '、' },
      { text: 'ケンブリッジ国際研究センター Cambridge Future Scholar', bold: true }, // REVIEW: センター名の正式表記
      { text: '。' },
      { text: '正統化', bold: true }, // REVIEW: legitimation
      { text: '、' },
      { text: 'デュアルユース・システム', bold: true },
      { text: '、' },
      { text: '権威構造', bold: true }, // REVIEW: authority architecture
      { text: 'を軸に、' },
      { text: '宇宙・核・先端技術ガバナンス', bold: true },
      { text: 'を横断的に研究。' },
      { text: '第77回International Astronautical Congress（国際宇宙会議）に単著論文3本採択', bold: true },
      { text: '。' },
      { text: 'JAXA International Space Education Board 2026選抜', bold: true },
      { text: '。' },
      { text: 'Next.js, React, TypeScript, D3.js, Leaflet', bold: true },
      { text: 'などを用い、戦略インフラの公開データを分析・可視化する' },
      { text: '公開リサーチ・プラットフォーム', bold: true },
      { text: 'も開発・構築。' },
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
    defaultOpenPapers: true,
    card: {
      event: 'International Astronautical Congress 2026 — 採択論文3件',
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
  // JA layout: show the Conference section before Research.
  conferenceFirst: true,
  // Profile sections ported from the About page — JA landing page only.
  extra: {
    education: {
      heading: '教育',
      items: [
        {
          institution: 'ケンブリッジ大学 ヒューズ・ホール', // REVIEW
          period: '2026年10月',
          degree: 'BA 人文・社会・政治学（HSPS）', // REVIEW
        },
        {
          institution: 'ロンドン・スクール・オブ・エコノミクス（ロンドン大学）',
          period: '2025–2026',
          degree: 'BSc 政治学・国際関係論',
        },
        {
          institution: 'オックスフォード大学 サイード・ビジネススクール',
          period: '2025年11月–2026年1月',
          degree: '行政におけるAIとデジタル変革', // REVIEW
          detail: '修了証（Certificate）',
        },
        {
          institution: 'ロンドン大学SOAS',
          period: '2024–2025',
          degree: 'BSc 社会科学（ファウンデーション・イヤー）',
          detail: 'First Class（最優等）', // REVIEW
        },
      ],
    },
    skills: {
      heading: 'スキル',
      groups: [
        {
          title: '研究',
          paragraphs: [
            '正統化、デュアルユース・システム、権威構造、戦略リスク、宇宙ガバナンス、核ガバナンス、先端技術ガバナンス、インフラの政治。',
            '言説・ナラティブ分析、定性的コーディング、比較政治研究、解釈的手法、政策フレーミング、象徴・神話分析、リサーチからインターフェースへの翻訳。',
          ],
        },
        {
          title: '政策・コミュニケーション',
          paragraphs: [
            '政策分析、戦略的ライティング、ブリーフィング作成、ナラティブ・フレーミング、ステークホルダー連携、分野横断のコミュニケーション。',
            '講演、モデレーション、ワークショップ・イベント設計、学際的協働、知識の統合、複雑な政治・技術課題の一般向け翻訳。',
          ],
        },
        {
          title: '技術・計算手法',
          paragraphs: [
            'プラットフォーム設計、公開リサーチツールの試作、AIワークフロー設計、プロンプトエンジニアリング、OpenAI APIを用いた機能設計、Supabaseによるデータ構造化、SQL、アナリティクス計装、イベントログ設計、ダッシュボード設計。',
            '情報設計、ユーザーフロー設計、UI/UXディレクション、定性的コーディング、言説・ナラティブ分析のワークフロー、ステークホルダー・マッピング。',
            '政策・インフラデータの整理、行動研究の設計、リサーチからインターフェースへの翻訳。',
          ],
        },
      ],
    },
    languages: {
      heading: '言語',
      items: ['日本語', '英語', 'ロシア語（学習中）', '中国語（学習中）'],
    },
    arts: {
      heading: 'アート活動', // REVIEW
      paragraphs: [
        '音楽演奏・ビジュアルアート・詩にわたる芸術活動は、解釈的リサーチスタジオ MYTHERA に記録されています。',
        // REVIEW: 人名・固有名詞の日本語表記を要確認
        'ピアノを Noriko Amano、シャドーボックスを Ineke de Bruijn、油彩を Yukiko Hamano に師事。2011年に詩で優秀賞を受賞し、マリボル国立歌劇場「カルメン」に子役として出演。十代で JYOJI-ROCK U-16 コンテスト優秀賞を受賞。Nobuhiko Utsumi のもとでの研究はグループ展につながり、Monster Exhibition に選出、Al-Tiba9 Contemporary Art Magazine に掲載されました。',
      ],
      links: [
        { label: 'MYTHERA', href: '/platforms/mythera' },
        { label: 'アート制作', href: '/projects/art' },
      ],
    },
    interests: {
      heading: '関心',
      // REVIEW: カタカナ表記を要確認
      items: [
        'ヴァイオリン',
        'ヨハン・ゼバスティアン・バッハ',
        'ジャン・シベリウス',
        'ジャコモ・プッチーニ',
        'ジュゼッペ・ヴェルディ',
        'ピョートル・チャイコフスキー',
        'アントニン・ドヴォルザーク',
        'イーゴリ・ストラヴィンスキー',
        'フョードル・ドストエフスキー',
        '歌舞伎',
        '三島由紀夫',
        'ギリシャ神話',
        'レーモン・ラディゲ',
        'ライナー・マリア・リルケ',
      ],
    },
    connect: {
      heading: 'コンタクト',
      galleryAlt: 'ギャラリー',
      contactLabel: 'お問い合わせ',
    },
  },
};

export default ja;
