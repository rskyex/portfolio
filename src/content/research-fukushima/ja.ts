import type { FukushimaContent } from './types';

/**
 * REVIEW DRAFT (Japanese). Terminology follows src/i18n/glossary.ts.
 * Fields touching unconfirmed terms are flagged with TODO(i18n-review) and
 * must be checked by the author before being treated as final.
 * Name is fixed as 小柳璃紗 / Risa Koyanagi.
 */
export const fukushimaJa: FukushimaContent = {
  backToResearch: '← 研究一覧に戻る',
  header: {
    kanji: '論',
    // TODO(i18n-review): 論文タイトルは正式訳が未確定。災害後ガバナンス（glossary: review）要確認
    english: '災害後ガバナンスと信頼のギャップ',
  },
  status: '進行中',
  statusVariant: 'In Progress',
  overview: {
    heading: '概要',
    paragraphs: [
      // TODO(i18n-review): 災害後ガバナンス（glossary: postDisasterGovernance, review）要確認
      '本研究は、福島地域における6年間にわたるフィールドワークに依拠し、災害後の復興のガバナンスを検討する。公式の政策枠組みと、被災コミュニティの生きられた経験との間に持続する乖離——とりわけ信頼、透明性、そして長期的な制度的アカウンタビリティをめぐる問題——に焦点を当てる。',
      // TODO(i18n-review): state-society relations / institutional legitimacy（glossary: legitimacy, review）要確認
      '避難者、自治体の首長、ならびに経済産業省（METI）および東京電力（TEPCO）の関係者へのインタビューを通じて、本研究は、長期化する避難、不確実な情報、そして争われる復興のナラティブという圧力のもとで、国家と社会の関係がいかに変容していくのかをたどる。本研究は、災害ガバナンス、制度的正統性、そして復興の政治をめぐるより広範な議論に寄与する。',
    ],
  },
  // TODO(i18n-review): 災害後ガバナンス/state-society relations/institutional legitimacy 等のタグ術語要確認
  tags: [
    '災害後ガバナンス', '信頼', '復興', '政策の空隙',
    '国家と社会の関係', '透明性', '制度的正統性',
    '福島', '長期フィールドワーク',
  ],
  fieldwork: {
    heading: 'フィールドワーク',
    steps: [
      { glyph: '一', text: '双葉町・浪江町の各地区を横断する複数拠点でのフィールドワーク（2019–2024年）' },
      // TODO(i18n-review): METI=経済産業省 / TEPCO=東京電力 の表記要確認
      { glyph: '二', text: '避難者、市町村長、地域のリーダー、経済産業省（METI）職員、東京電力（TEPCO）関係者へのインタビュー' },
      { glyph: '三', text: '被災地への11名規模のスタディツアーを企画' },
    ],
  },
  keyThemes: {
    heading: '主要なテーマ',
    items: [
      '政策と復興の乖離、ならびにそれが被災コミュニティにもたらす帰結',
      // TODO(i18n-review): state-society relations の訳語要確認
      '災害後の国家と社会の関係における信頼と透明性',
      '長期化する避難と「帰還」の政治',
      '不確実性の条件下における制度的アカウンタビリティ',
      // TODO(i18n-review): local governance actors の訳語要確認
      '復興プロセスを媒介するうえでの地方ガバナンスの担い手の役割',
    ],
  },
  researchOutput: {
    heading: '研究成果',
    slideAlt: (n: number) => `福島研究成果スライド ${n}`,
  },
  gallery: {
    heading: 'ギャラリー',
    photoAlt: (n: number) => `福島でのフィールドワーク写真 ${n}`,
    peacePhotoAlt: '福島でのフィールドワーク写真',
  },
};
