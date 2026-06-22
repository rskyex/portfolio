import type { OntologicalGovernanceContent } from './types';

/**
 * REVIEW DRAFT (Japanese). Terminology follows src/i18n/glossary.ts.
 * Fields touching unconfirmed terms are flagged with TODO(i18n-review) and
 * must be checked by the author before being treated as final.
 * Name is fixed as 小柳璃紗 / Risa Koyanagi.
 */
export const ontologicalGovernanceJa: OntologicalGovernanceContent = {
  backToResearch: '← 研究一覧に戻る',
  header: {
    kanji: '論',
    // TODO(i18n-review): 存在論的ガバナンス（glossary: ontologicalGovernance, review）— 著者の中核概念。訳語の確定が特に重要
    english: '存在論的ガバナンス',
  },
  status: '学会要旨',
  statusVariant: 'Conference Abstract',
  overview: {
    heading: '概要',
    paragraphs: [
      // TODO(i18n-review): EU AI法（EU AI Act）の表記 / human subject=人間という主体 要確認
      '現在のAIガバナンスの枠組み——EU AI法や、生まれつつある多国間の枠組みを含む——は、共通のアーキテクチャを共有している。すなわち、技術を特定し、その危害を評価し、それに応じて規則を構築するというものである。これらの計算の中心にある人間という主体は、安定した所与として扱われている。この前提はもはや成り立たない。',
      // TODO(i18n-review): epistemology=認識論 / ontology=存在論 / algorithmic curation=アルゴリズムによるキュレーション / narrative identity（glossary: review）/ self-governance=自己統治 要確認
      'AIシステムは今や、人間の存在の累積する三つの層にわたって介入している。認識論的には、人々が何を知りうるかを形づくる。すなわち、アルゴリズムによるキュレーションが、気づきだけでは元に戻すことのできない仕方で情報環境を構築する。存在論的には、人々が何者であるかに介入する。すなわち、推薦システムやパーソナライズされた環境が、個人が時間をかけて自らのアイデンティティと記憶を構成していくためのナラティブの素材を作り変える。政治的には、真の自己統治の条件を蝕む。すなわち、民主的熟議に参加する主体が、まさにガバナンスが監督するはずのシステムによってますます構成されていくのである。',
      // TODO(i18n-review): narrative identity（glossary: review）/ technics of memory=記憶の技術 / 存在論的ガバナンス（glossary: review）/ second-order analytical layer=二次的な分析層 要確認
      'ナラティブ・アイデンティティの諸理論と記憶の技術に依拠し、本発表は存在論的ガバナンスを提示する。すなわち、AIシステムが「何をするか」だけでなく、ガバナンスが守るために存在するところの尊厳と主体性をもつ——知り、存在し、自らを統治する——人間に「何をするか」を問う、二次的な分析層である。この層を欠くならば、現在の枠組みは、技術がすでに作り変えつつある或る種の「人間」を保護してしまう危険を負う。',
    ],
  },
  // TODO(i18n-review): AIガバナンス/存在論的ガバナンス/ナラティブ・アイデンティティ/認識論/民主的熟議/EU AI法/アルゴリズムによるキュレーション/自己統治/記憶の技術/二次的ガバナンス のタグ術語要確認
  tags: [
    'AIガバナンス', '存在論的ガバナンス', 'ナラティブ・アイデンティティ',
    '認識論', '民主的熟議', 'EU AI法',
    'アルゴリズムによるキュレーション', '自己統治', '記憶の技術',
    '二次的ガバナンス',
  ],
  keyQuestions: {
    heading: '主要な問い',
    items: [
      // TODO(i18n-review): epistemic/ontological/political conditions の訳語、human subjects=人間という主体 要確認
      'AIシステムは、ガバナンスの枠組みが前提とする人間という主体の、認識論的・存在論的・政治的な条件をいかに作り変えるのか。',
      // TODO(i18n-review): rights-based governance=権利を基盤とするガバナンス 要確認
      '権利を基盤とするガバナンスの中心にある人間という主体が、もはや安定したものでなくなるとき、何が起こるのか。',
      // TODO(i18n-review): narrative identity（glossary: review）/ algorithmic curation 要確認
      '推薦システムやアルゴリズムによるキュレーションは、ナラティブ・アイデンティティと記憶にいかに介入するのか。',
      // TODO(i18n-review): second-order governance=二次的ガバナンス 要確認
      '二次的なガバナンスの枠組み——AIシステムだけでなく、それがガバナンスそのものの対象である主体に及ぼす影響をも統治する枠組み——とは、いかなるものか。',
      // TODO(i18n-review): EU AI法 / ontological dimension=存在論的次元 要確認
      'EU AI法のような現在の枠組みは、なぜAIの介入がもつ存在論的次元を考慮できていないのか。',
    ],
  },
};
