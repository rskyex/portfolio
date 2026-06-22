/**
 * GLOSSARY / TERMBASE — English ⇄ Japanese
 * ----------------------------------------
 * Single source of truth for how key research terms are translated across the
 * whole site. Translations MUST use these renderings so terminology stays
 * consistent between pages.
 *
 * This is a REVIEW DRAFT. Entries with `status: 'review'` are not yet confirmed
 * — they are flagged with TODO(i18n-review) and must be verified by the author
 * before they are treated as final. Do not silently "improve" a confirmed term;
 * change it here and it propagates everywhere.
 *
 * Name convention (fixed, do not vary):
 *   - Japanese: 小柳璃紗
 *   - Romaji:   Risa Koyanagi   (never "Risako Yanagi")
 */

export type GlossaryStatus = 'confirmed' | 'review';

export interface GlossaryEntry {
  en: string;
  ja: string;
  status: GlossaryStatus;
  note?: string;
}

export const glossary: Record<string, GlossaryEntry> = {
  governance: { en: 'governance', ja: 'ガバナンス', status: 'confirmed' },

  // TODO(i18n-review): 政治学では「正当」より「正統」が一般的だが要確認
  legitimation: { en: 'legitimation', ja: '正統化', status: 'review' },
  legitimacy: { en: 'legitimacy', ja: '正統性', status: 'review' },

  // TODO(i18n-review): 「正統化の受け手 / オーディエンス」訳語要相談
  legitimationAudiences: {
    en: 'legitimation audiences',
    ja: '正統化の受け手（オーディエンス）',
    status: 'review',
  },

  // TODO(i18n-review): 直訳。定訳がないため要確認
  authorityArchitecture: {
    en: 'authority architecture',
    ja: '権威アーキテクチャ',
    status: 'review',
  },

  responsibleBehaviour: {
    en: 'responsible behaviour',
    ja: '責任ある行動',
    status: 'confirmed',
    note: '宇宙・サイバー文脈の定訳に準拠',
  },
  norm: { en: 'norm', ja: '規範', status: 'confirmed' },
  normFormation: { en: 'norm formation', ja: '規範形成', status: 'confirmed' },

  dualUse: {
    en: 'dual-use',
    ja: 'デュアルユース（軍民両用）',
    status: 'confirmed',
    note: '初出のみ括弧併記',
  },
  // TODO(i18n-review)
  dualUseAmbiguity: {
    en: 'dual-use ambiguity',
    ja: 'デュアルユースの曖昧性',
    status: 'review',
  },

  escalation: { en: 'escalation', ja: 'エスカレーション', status: 'confirmed' },
  crossDomainEscalation: {
    en: 'cross-domain escalation',
    ja: 'クロスドメイン・エスカレーション',
    status: 'confirmed',
  },

  spaceGovernance: { en: 'space governance', ja: '宇宙ガバナンス', status: 'confirmed' },
  // TODO(i18n-review): 安全保障文脈は「核」、民生は「原子力」。文脈で使い分け要確認
  nuclearGovernance: { en: 'nuclear governance', ja: '核ガバナンス', status: 'review' },
  cyberGovernance: { en: 'cyber governance', ja: 'サイバーガバナンス', status: 'confirmed' },
  // TODO(i18n-review): 「新興技術」案もあり要確認
  emergingTechGovernance: {
    en: 'emerging technology governance',
    ja: '先端技術ガバナンス',
    status: 'review',
  },

  artemisAccords: { en: 'Artemis Accords', ja: 'アルテミス合意', status: 'confirmed' },
  ilrs: {
    en: 'International Lunar Research Station (ILRS)',
    ja: '国際月面研究ステーション（ILRS）',
    status: 'confirmed',
  },

  // TODO(i18n-review): 概念用語。要確認
  translationDevices: {
    en: 'translation devices',
    ja: '翻訳装置',
    status: 'review',
  },
  // TODO(i18n-review)
  boundaryMaking: {
    en: 'boundary-making',
    ja: '境界形成（バウンダリー・メイキング）',
    status: 'review',
  },

  // TODO(i18n-review): 著者の中核概念。訳語の確定が特に重要
  ontologicalGovernance: {
    en: 'ontological governance',
    ja: '存在論的ガバナンス',
    status: 'review',
  },
  // TODO(i18n-review)
  narrativeIdentity: {
    en: 'narrative identity',
    ja: 'ナラティブ・アイデンティティ（物語的自己同一性）',
    status: 'review',
  },
  // TODO(i18n-review)
  postDisasterGovernance: {
    en: 'post-disaster governance',
    ja: '災害後ガバナンス',
    status: 'review',
  },

  // TODO(i18n-review): 肩書き。原語併記が無難
  cambridgeFutureScholar: {
    en: 'Cambridge Future Scholar',
    ja: 'ケンブリッジ・フューチャー・スカラー',
    status: 'review',
  },
  fukushimaFieldwork: {
    en: 'Fukushima fieldwork',
    ja: '福島でのフィールドワーク',
    status: 'confirmed',
  },
};
