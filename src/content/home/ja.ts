import type { HomeContent } from './types';

/**
 * REVIEW DRAFT (Japanese). Terminology follows src/i18n/glossary.ts.
 * Fields touching unconfirmed terms are flagged with TODO(i18n-review) and
 * must be checked by the author before being treated as final.
 * Name is fixed as 小柳璃紗 / Risa Koyanagi.
 */
export const homeJa: HomeContent = {
  hero: {
    name: '小柳璃紗',
    romaji: 'Risa Koyanagi',
    // TODO(i18n-review): 宇宙・核・サイバー・先端技術ガバナンスの並び表記要確認
    eyebrow: '宇宙 · 核 · サイバー · 先端技術ガバナンス',
    // TODO(i18n-review): 肩書き「Researcher · Platform Builder」の訳語要確認
    title: '研究者 · プラットフォーム・ビルダー',
    // TODO(i18n-review): legitimation（正統化）/ dual-use systems / authority architecture /
    // University of Cambridge（ケンブリッジ大学）など術語・固有名詞要確認
    description: [
      { text: '小柳璃紗は、' },
      { text: 'ケンブリッジ大学の学生／研究者', strong: true },
      { text: 'であり、' },
      { text: '宇宙・核・先端技術ガバナンス', strong: true },
      { text: 'を横断的に研究している。とりわけ' },
      { text: '正統化', strong: true },
      { text: '、' },
      { text: 'デュアルユース（軍民両用）システム', strong: true },
      { text: '、' },
      { text: '権威アーキテクチャ', strong: true },
      { text: 'を主要な関心とする。あわせて、' },
      { text: 'AIガバナンス', strong: true },
      { text: '、' },
      { text: '戦略的インフラのリスク', strong: true },
      { text: '、' },
      { text: '解釈的システム', strong: true },
      { text: 'をテーマとする' },
      { text: '公開型の研究プラットフォーム', strong: true },
      { text: 'を制作している。' },
    ],
    ctaPlatforms: 'プラットフォームを見る',
    ctaResearch: '研究を見る',
    linkedinLabel: 'LinkedIn',
    instagramLabel: 'Instagram',
    githubLabel: 'GitHub',
    contactLabel: 'お問い合わせ',
    photoAlt: 'Risa Koyanagi',
  },
  platforms: {
    // TODO(i18n-review): 見出し「Platforms by Risa Koyanagi」の訳語要確認
    header: { kanji: '台', english: '小柳璃紗のプラットフォーム' },
    flagshipLabel: 'フラッグシップ',
    viewPlatform: 'プラットフォームを見る →',
    wipLabel: 'WIP',
    viewAll: 'すべてのプラットフォームを見る →',
    items: [
      {
        title: 'Cyber Escalation Atlas',
        href: '/platforms/cyber',
        liveUrl: 'https://cyber-escalation-atlas-5yp5.vercel.app',
        // TODO(i18n-review): attribution frameworks / governance signals の訳語要確認
        description: 'サイバー・インシデントを戦略的行動、アトリビューションの枠組み、ガバナンスのシグナルとして読み解き、地図に落とし込む。',
        image: '/images/cyber-platform.png',
        imageAlt: 'Cyber Escalation Atlas',
      },
      {
        title: 'Narrative Drift',
        href: '/platforms/narrative-drift',
        liveUrl: 'https://narrative-drift.vercel.app/',
        description: '選択や記憶、時間をかけて形づくられる自己理解に、AIがどう影響するか。',
        image: '/images/narrative drift-og.png',
        imageAlt: 'Narrative Drift',
      },
      {
        title: 'SelfTrace',
        href: '/platforms/selftrace',
        liveUrl: 'https://selftrace.vercel.app/',
        // TODO(i18n-review): selfhood / self-presentation の訳語要確認
        description: 'アイデンティティと自己呈示、そしてアルゴリズムが形づくるオンライン上の自己性。',
        image: '/images/selftrace og.png',
        imageAlt: 'SelfTrace',
      },
      {
        title: 'Ontological Governance Observatory',
        href: '/platforms/ontological-governance-observatory',
        // TODO(i18n-review): ontological（存在論的）/ epistemic / the human subject の訳語要確認
        description: '認識的・存在論的・政治的な各層にわたって、AIが人間という主体をいかに変容させるか。',
        image: '/images/ogo-og.png',
        imageAlt: 'Ontological Governance Observatory',
      },
      {
        title: 'Orbital Risk Tracker',
        href: '/platforms/orbital',
        liveUrl: 'https://orbitalrisktracker.vercel.app',
        // TODO(i18n-review): ASAT / proximity operations / escalation の訳語要確認
        description: '軌道空間におけるASAT（衛星攻撃）事象や近接運用を追跡し、エスカレーションを分析する。',
        image: '/images/orbital-platform.jpg',
        imageAlt: 'Orbital Risk Tracker',
      },
      {
        title: 'Global Nuclear Infrastructure Atlas',
        href: '/platforms/nuclear',
        liveUrl: 'https://globalnuclearinfrastructureatlas.vercel.app',
        // TODO(i18n-review): civilian nuclear infrastructure / arsenals の訳語要確認
        description: '民生用の核インフラと推定保有量を、政策や健康をめぐる文脈とともに示す。',
        image: '/images/nuclear-platform.jpg',
        imageAlt: 'Global Nuclear Infrastructure Atlas',
      },
      {
        title: 'Lunar Mandate Atlas',
        href: '/platforms/lunar-mandate-atlas',
        liveUrl: 'https://lunar-mandate-atlas.vercel.app',
        // TODO(i18n-review): authority architecture（権威アーキテクチャ）/ mandates の訳語要確認
        description: '月をめぐって競合するガバナンスの主張やマンデート、そして権威アーキテクチャを描き出す。',
        image: '/images/LGAT-og.svg',
        imageAlt: 'Lunar Mandate Atlas',
      },
      {
        title: 'MYTHERA',
        href: '/platforms/mythera',
        liveUrl: 'https://mythera.vercel.app/',
        // TODO(i18n-review): selfhood / aesthetic form / interpretive studio の訳語要確認
        description: '自己性や文化、パフォーマンス、美的形式が、探索可能な世界として立ち上がる解釈的スタジオ。',
        image: '/images/mythera og.png',
        imageAlt: 'MYTHERA',
        children: [
          {
            name: 'Theatre of Authenticity',
            href: '/platforms/theatre-of-authenticity',
            // TODO(i18n-review): authenticity / the "true self" の訳語要確認
            description: '体験的なデザインを通じて真正性を問い直す。パフォーマンス、まなざし、そして「真の自己」の限界をめぐって',
            status: 'In Progress',
            image: '/images/Theatre of Authenticity.png',
            imageAlt: 'Theatre of Authenticity',
          },
          {
            name: 'Second Self',
            href: '/platforms/second-self',
            // TODO(i18n-review): subjectivity（主体性）の訳語要確認
            description: 'AIや記憶、ガバナンス、そして主体性の形成を問う哲学的なカードゲーム',
            status: 'In Progress',
            image: '/images/secondself_og.png',
            imageAlt: 'Second Self',
          },
        ],
      },
    ],
  },
  research: {
    header: { kanji: '論', english: '研究', subtitle: 'ガバナンス領域を横断する主な研究' },
    viewAll: 'すべての研究を見る →',
    items: [
      {
        href: '/research/lunar',
        title: '月において誰が人類を代表して語るのか',
        // TODO(i18n-review): legitimation audiences / translation devices / authority architecture の訳語要確認
        description: '競合する月面ガバナンスの枠組みのなかで、正統化の受け手、翻訳装置、権威アーキテクチャを読み解く。',
      },
      {
        href: '/research/ai-cyber',
        title: '未完の規範としての「責任ある行動」',
        // TODO(i18n-review): denial/displacement/inoculation（否認/転位/予防接種）の訳語要確認
        description: '宇宙・AI・サイバーの各領域にまたがるAIガバナンス言説のなかで、否認・転位・予防接種の働きを分析する。',
      },
      {
        href: '/research/fukushima',
        title: '災害後ガバナンスと信頼のギャップ',
        // TODO(i18n-review): post-disaster governance / policy gaps の訳語要確認
        description: '災害後の福島のコミュニティを対象に、政策の空隙、信頼、復興のガバナンスを問う長期フィールドワーク。',
      },
    ],
  },
  conference: {
    header: {
      kanji: '壇',
      english: '主な学会発表',
      // TODO(i18n-review): 「international research convenings」の訳語要確認
      subtitle: '国際的な研究の場で予定される論文・パネル発表',
    },
    data: {
      event: 'IAC 2026 — 採択論文3本',
      location: 'アンタルヤ（トルコ）',
      // TODO(i18n-review): 団体名の日本語表記要確認
      organizer: '国際宇宙会議（IAC）· 国際宇宙航行連盟（IAF）主催',
      highlight: '採択論文3本',
      // TODO(i18n-review): 術語タグの訳語要確認
      tags: ['宇宙ガバナンス', '月面システム', '規範', 'デュアルユース'],
      papers: [
        {
          // TODO(i18n-review): 論文タイトルは正式訳が未確定。要確認
          title: '月面インフラ・ガバナンスにおけるデュアルユースの無害化と責任ある行動規範',
          type: 'Oral Presentation',
          symposium: 'E9 — 宇宙の安全保障・安定性・持続可能性',
          date: '2026年10月8日',
        },
        {
          // TODO(i18n-review): 論文タイトルは正式訳が未確定。要確認
          title: '条件付きの開放性——普遍主義的言説が将来の月探査ガバナンスにおいていかに境界を生み出すか',
          type: 'Interactive Presentation',
          symposium: 'E3 — 宇宙政策・規制・経済',
        },
        {
          // TODO(i18n-review): 論文タイトルは正式訳が未確定。要確認
          title: '競合する月秩序におけるソフト・インフラとしての神話的命名——アルテミスと嫦娥',
          type: 'Interactive Presentation',
          symposium: 'E5 — 宇宙と社会',
        },
      ],
      // TODO(i18n-review): norm formation / symbolic infrastructure の訳語要確認
      focus: '月面ガバナンス、デュアルユース・システム、規範形成、そして立ち上がりつつある宇宙秩序を支える象徴的インフラ。',
    },
  },
  fieldwork: {
    header: {
      kanji: '場',
      english: 'フィールドワークと社会連携',
      // TODO(i18n-review): public-facing engagement / international exchange の訳語要確認
      subtitle: '政策・研究・国際交流にまたがるフィールドワーク、リーダーシップ、対話、そして社会に開かれた連携',
    },
    projects: [
      {
        href: '/projects/fukushima',
        title: '福島フィールド調査',
        // TODO(i18n-review): post-disaster governance / 地名（双葉・浪江）の表記要確認
        description: '双葉町・浪江町の複数地点で行ったフィールドワーク。災害後ガバナンス、信頼、復興を問う。',
        image: '/images/fukushima.jpg',
        imageAlt: '福島でのフィールドワーク',
        period: '2019–2024',
      },
      {
        href: '/projects/afrecos',
        title: 'AFRECOS',
        // TODO(i18n-review): 「Co-Founder & President」役職の訳語要確認
        description: 'アフリカと日本をつなぐ文化・政策イベントを担う、10か国以上にまたがるネットワークを共同設立。',
        image: '/images/afrecos.jpg',
        imageAlt: 'AFRECOS',
        period: '2024',
        role: '共同創設者・代表',
      },
      {
        href: '/projects/art',
        title: 'アート実践',
        description: 'ビジュアル・シンキングから国際展示、概念的な作品まで及ぶ学際的なアート実践。',
        image: '/images/art.JPG',
        imageAlt: 'アート実践',
      },
    ],
    speakingHeading: '講演・政策連携',
    speaking: [
      {
        title: 'TICAD閣僚会合',
        // TODO(i18n-review): 会議名（アフリカ開発会議）の正式表記要確認
        context: 'アフリカ開発会議（TICAD）への政策連携と若者代表としての参加。',
        type: '政策連携',
        image: '/images/speaking-ticad.jpg',
      },
      {
        title: '日蘭平和交流',
        context: '日本とオランダの参加者による二国間対話と平和交流。',
        type: '対話への貢献',
        image: '/images/speaking-peace-exchange.jpg',
      },
      {
        title: 'アフリカ・日本ユースドライブ',
        // TODO(i18n-review): co-creation / development cooperation の訳語要確認
        context: 'アフリカと日本の共創・開発協力をめぐる、若者を中心とした政策フォーラム。',
        type: '若者代表',
        image: '/images/speaking-youth-drive.jpg',
      },
      {
        title: 'ラウンドテーブルおよびフレンズ・オブ・エデュケーション',
        // TODO(i18n-review): GPE / World Bank / House of Councillors（参議院）の表記要確認
        context: 'GPEと世界銀行の主催により日本の参議院で開催。',
        type: 'ラウンドテーブル参加',
        image: '/images/speaking-roundtable.JPG',
      },
    ],
    viewAll: 'すべてのフィールドワーク・連携を見る →',
  },
};
