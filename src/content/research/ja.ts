import type { ResearchContent } from './types';

/**
 * REVIEW DRAFT (Japanese). Terminology follows src/i18n/glossary.ts.
 * Fields touching unconfirmed terms are flagged with TODO(i18n-review) and
 * must be checked by the author before being treated as final.
 * Name is fixed as 小柳璃紗 / Risa Koyanagi.
 */
export const researchJa: ResearchContent = {
  header: {
    kanji: '論',
    english: '研究',
    subtitle: 'ガバナンス領域を横断する主要な研究',
  },
  // TODO(i18n-review): 正統化/正統性・権威アーキテクチャ・責任ある行動規範など術語要確認
  intro:
    '国際安全保障、宇宙ガバナンス、核ガバナンス、サイバーガバナンス、先端技術ガバナンスを横断する研究。概念的な軸となるのは、正統化理論、デュアルユース・ガバナンス、権威アーキテクチャ、責任ある行動規範である。',
  workingPaper: {
    heading: 'ワーキングペーパー',
    items: [
      {
        href: '/research/lunar',
        title: '月において誰が人類を代表して語るのか',
        status: 'ワーキングペーパー',
        statusVariant: 'Working Paper',
        // TODO(i18n-review): 正統化の受け手/翻訳装置/権威アーキテクチャ/境界形成 — 術語要確認
        themes: [
          '正統化の受け手（オーディエンス）',
          '翻訳装置',
          '権威アーキテクチャ',
          'アルテミス合意 対 ILRS',
          '普遍主義的言説',
          '参加条件',
          '境界形成',
        ],
        // TODO(i18n-review): 概念用語が多く、訳語の確定が必要
        description:
          '本研究の概念的な中核をなす。競合する二つの月面ガバナンスの枠組み、すなわちアルテミス合意と国際月面研究ステーション（ILRS）計画が、正統化の受け手をどう構築し、翻訳装置をどう用いるのか。普遍主義的な言説のもとで権威アーキテクチャを築きつつ、相異なる参加条件と境界形成の実践をいかに確立するのかを論じる。',
      },
    ],
  },
  inProgress: {
    heading: '進行中',
    items: [
      {
        href: '/research/ai-cyber',
        title: '未完の規範としての「責任ある行動」',
        status: '進行中',
        statusVariant: 'In Progress',
        // TODO(i18n-review): denial/displacement/inoculation の訳（否認/転位/予防接種）要確認
        themes: [
          'ガバナンスの空隙',
          '否認',
          '転位',
          '予防接種（インオキュレーション）',
          'デュアルユースの曖昧性',
          '規範の成文化',
          '先端技術ガバナンス',
        ],
        // TODO(i18n-review): denial/displacement/inoculation の訳語要確認
        description:
          '「責任ある行動」が、宇宙・AI・サイバーの各ガバナンスにおいて未完の規範としていかに機能するかを検討する。デュアルユース技術をめぐるガバナンス言説に働く否認・転位・予防接種の力学を分析する。',
      },
      {
        href: '/research/fukushima',
        title: '災害後ガバナンスと信頼のギャップ',
        status: '進行中',
        statusVariant: 'In Progress',
        // TODO(i18n-review): post-disaster governance / state-society relations の訳語要確認
        themes: [
          '災害後ガバナンス',
          '信頼',
          '復興',
          '政策の空隙',
          '国家と社会の関係',
          '長期フィールドワーク',
        ],
        description:
          '福島での6年間にわたるフィールドワークに基づき、災害後の復興のガバナンスを検討する。とりわけ信頼、透明性、政策の空隙、そして国家機関と被災コミュニティとの間で変化し続ける関係に着目する。',
      },
    ],
  },
  conferenceDev: {
    heading: '学会発表・開発中',
    items: [
      {
        href: '/research/ontological-governance',
        // TODO(i18n-review): ontological governance は著者の中核概念。訳語の確定が特に重要
        title: '存在論的ガバナンス——AIは人間という主体に何をするのか',
        status: '学会要旨',
        statusVariant: 'Conference Abstract',
        // TODO(i18n-review): ontological governance / narrative identity / second-order governance の訳語要確認
        themes: [
          'AIガバナンス',
          '存在論的ガバナンス',
          'ナラティブ・アイデンティティ',
          '認識論',
          '民主的熟議',
          'EU AI法',
          '二次的ガバナンス',
        ],
        // TODO(i18n-review): 存在論的ガバナンス/二次的分析層 の訳語要確認
        description:
          '存在論的ガバナンスを、二次的な分析層として提示する。すなわち、AIシステムが「何をするか」だけでなく、知り、存在し、自らを統治する人間、つまりガバナンスが守るべき尊厳と主体性をもつ人間に「何をするか」を問う層である。',
      },
    ],
    cards: [
      {
        title: 'デュアルユース・ガバナンスと曖昧性の問題',
        badgeLabel: '学会要旨',
        badgeVariant: 'abstract',
        // TODO(i18n-review): dual-use ambiguity の訳語要確認
        description:
          'デュアルユースの曖昧性が、核・宇宙・サイバーの各領域でガバナンスの枠組みをいかに形づくるかを探究する。民生と軍事の用途を併せもつ技術を規制することの構造的な困難に踏み込む。',
      },
      {
        title: '先端技術ガバナンスにおける権威アーキテクチャ',
        badgeLabel: '進行中',
        badgeVariant: 'progress',
        // TODO(i18n-review): authority architecture / legitimation の訳語要確認
        description:
          '先端技術ガバナンスにおいて、権威がいかに構築され、配分され、争われるのかを理解するための枠組みを構築する。正統化のプロセス、制度設計、技術的専門知の役割に着目する。',
      },
    ],
  },
  presentations: {
    heading: '主な学会発表',
    conference: {
      event: 'IAC 2026 — 採択論文3本',
      location: 'アンタルヤ（トルコ）',
      // TODO(i18n-review): 団体名の日本語表記要確認
      organizer:
        '国際宇宙会議（IAC）· 国際宇宙航行連盟（IAF）主催',
      highlight: '採択論文3本',
      // TODO(i18n-review): 術語タグの訳語要確認
      tags: ['宇宙ガバナンス', '月面システム', '規範', 'デュアルユース'],
      papers: [
        {
          // TODO(i18n-review): 論文タイトルは正式訳が未確定。要確認
          title:
            '月面インフラ・ガバナンスにおけるデュアルユースの無害化と責任ある行動規範',
          type: 'Oral Presentation',
          typeLabel: '口頭発表',
          symposium: 'E9 — 宇宙の安全保障・安定性・持続可能性',
          date: '2026年10月8日',
        },
        {
          // TODO(i18n-review): 論文タイトルは正式訳が未確定。要確認
          title:
            '条件付きの開放性——普遍主義的言説が将来の月探査ガバナンスにおいていかに境界を生み出すか',
          type: 'Interactive Presentation',
          typeLabel: 'インタラクティブ発表',
          symposium: 'E3 — 宇宙政策・規制・経済',
        },
        {
          // TODO(i18n-review): 論文タイトルは正式訳が未確定。要確認
          title:
            '競合する月秩序におけるソフト・インフラとしての神話的命名——アルテミスと嫦娥',
          type: 'Interactive Presentation',
          typeLabel: 'インタラクティブ発表',
          symposium: 'E5 — 宇宙と社会',
        },
      ],
      // TODO(i18n-review): norm formation / symbolic infrastructure の訳語要確認
      focus:
        '月面ガバナンス、デュアルユース・システム、規範形成、そして新たに生まれつつある宇宙秩序における象徴的インフラ。',
    },
  },
  closingNote: 'その他の論文・学会発表も準備中。',
};
