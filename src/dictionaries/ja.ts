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
    // REVIEW: HSPS / 「ケンブリッジ国際研究センター」の正式表記
    description: [
      {
        text:
          '小柳璃紗。ケンブリッジ大学人文・社会・政治学（HSPS）専攻、ケンブリッジ国際研究センター Cambridge Future Scholar。正統化、デュアルユース・システム、権威構造を軸に、宇宙・核・先端技術ガバナンスを横断的に研究。第77回International Astronautical Congress（国際宇宙会議）に単著論文3本採択。JAXA International Space Education Board 2026選抜。Next.js, React, TypeScript, D3.js, Leafletなどを用い、戦略インフラの公開データを分析・可視化する公開リサーチ・プラットフォームも開発・構築。',
      },
    ],
    ctaPlatforms: 'プラットフォーム',
    ctaResearch: '研究',
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
    cards: [
      {
        event: 'International Astronautical Congress 2026 — 採択論文3件',
        location: 'トルコ・アンタルヤ',
        organizer: '国際宇宙会議（IAC）／主催：国際宇宙航行連盟（IAF）',
        // Empty: the "採択論文3件" highlight chip and count row are suppressed on JA
        // (the count already appears in the event title above) to avoid repetition.
        highlight: '',
        tags: ['宇宙ガバナンス', '月面システム', '規範', 'デュアルユース'],
        focus: '月面ガバナンス、デュアルユース・システム、規範形成、そして新たな宇宙秩序における象徴的インフラ。',
        papers: [
          {
            title: '月面インフラ・ガバナンスにおけるデュアルユースの中立化と「責任ある行動」規範', // REVIEW
            symposium: 'E9 — 宇宙の安全保障・安定・持続可能性',
            date: '2026年10月8日',
            kind: 'oral',
          },
          {
            title: '条件つきの開放性：普遍主義の言語が月探査ガバナンスに生む境界', // REVIEW
            symposium: 'E3 — 宇宙政策・規制・経済',
            kind: 'interactive',
          },
          {
            title: '競合する月秩序のソフトインフラとしての神話的命名：アルテミスと嫦娥', // REVIEW
            symposium: 'E5 — 宇宙と社会',
            kind: 'interactive',
          },
        ],
      },
      {
        event: 'Data for Policy 2026',
        location: 'ポンペウ・ファブラ大学 ・ スペイン・バルセロナ',
        organizer: 'Data for Policy 2026（DfP’26）／2026年9月8〜10日',
        highlight: '採択',
        tags: ['AIガバナンス', 'サイバー紛争', '帰属', '技術主権'],
        focus: 'サイバー紛争における帰属（アトリビューション）の解釈的権威と、AIの／AIを用いたガバナンスにとっての含意。',
        papers: [
          {
            title: '名づけとしての権威：サイバー紛争における帰属の解釈的権威と、AIガバナンスへの含意', // REVIEW
            symposium: 'テーマ — Governance of/with AI：データ・インフラ・技術主権への示唆',
            date: '2026年9月8〜10日',
            kind: 'oral',
          },
        ],
      },
      {
        event: '第26回宇宙科学シンポジウム — ポスター展',
        location: '宇宙科学研究所（ISAS／JAXA）・相模原',
        organizer: '主催：宇宙科学研究所（ISAS）／JAXA',
        highlight: 'プログラム番号 T25',
        tags: ['ポスター発表', '宇宙科学'],
        focus: '日本の宇宙科学コミュニティの年次シンポジウムでのポスター発表。',
        eyebrow: 'ポスター展 · 2026',
        papers: [
          {
            title: 'ポスター発表（タイトル調整中）', // REVIEW
            symposium: 'プログラム番号 T25 ・ ポスター展',
            kind: 'poster',
          },
        ],
      },
    ],
    labels: {
      eyebrow: '2026年 · 発表予定',
      papersCountPrefix: '',
      papersCountSuffix: '',
      viewPapers: '論文を見る',
      collapse: '閉じる',
      researchFocus: '研究テーマ',
      paperTypes: {
        oral: '口頭発表',
        interactive: 'インタラクティブ発表', // REVIEW
        poster: 'ポスター発表',
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
          institution: 'ロンドン大学（ロンドン・スクール・オブ・エコノミクス指導）', // REVIEW
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
    certifications: {
      heading: '資格・認定', // REVIEW
      items: [
        { name: 'Microsoft Generative AI for Data Analysis', type: 'Professional Certificate' },
        { name: 'Google Cybersecurity Specialization', type: 'Certificate' },
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
            '講演、モデレーション、ワークショップ・イベント設計。',
          ],
        },
        {
          title: '技術・エンジニアリング・データ', // REVIEW
          bullets: [
            'Next.js · React · TypeScript',
            'D3.js（データ可視化）· Leaflet · GeoJSON（インタラクティブな地理空間マッピング）',
            'フロントエンドUI・レスポンシブインターフェース開発',
            'インタラクティブ・ダッシュボード／データプロダクト設計（政策グレードのインターフェース）',
            'データのクリーニング・構造化・データセット構築（コーパス構築；IAEA / SIPRI の地理空間レイヤー）',
            '地理空間データパイプライン（IAEA / SIPRI データセット）',
            'Vercel（デプロイ）· Git / GitHub（rskyex）',
            'SQL',
            'Python（基礎；実務での常用はなし）', // 状態の注記はそのまま保持
            'データ分析ワークフローのための生成AI（プロンプティング、分析タスクの構造化）',
            'サイバーセキュリティの基礎（デジタルリスク、セキュリティを意識した思考）',
          ],
        },
      ],
    },
    languages: {
      heading: '言語',
      items: ['日本語', '英語', 'ロシア語（学習中）', '中国語（学習中）'],
    },
    // Arts Background section intentionally omitted from the JA page (per request).
    interests: {
      heading: '趣味',
      // REVIEW: カタカナ表記・分類を要確認
      groups: [
        {
          label: '音楽',
          items: [
            'ヴァイオリン演奏',
            'バッハ',
            'シベリウス',
            'プッチーニ',
            'ヴェルディ',
            'チャイコフスキー',
            'ドヴォルザーク',
            'ストラヴィンスキー',
          ],
        },
        {
          label: '文学',
          items: ['ドストエフスキー', '三島由紀夫', 'ラディゲ', 'リルケ・ギリシャ神話'], // REVIEW: ギリシャ神話の分類
        },
      ],
    },
    connect: {
      heading: 'お問い合わせ',
      galleryAlt: 'ギャラリー',
      contactLabel: 'お問い合わせ',
    },
  },
};

export default ja;
