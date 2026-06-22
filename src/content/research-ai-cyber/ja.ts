import type { AICyberContent } from './types';

/**
 * REVIEW DRAFT (Japanese). Terminology follows src/i18n/glossary.ts.
 * Fields touching unconfirmed terms are flagged with TODO(i18n-review) and
 * must be checked by the author before being treated as final.
 * Name is fixed as 小柳璃紗 / Risa Koyanagi.
 */
export const aiCyberJa: AICyberContent = {
  backToResearch: '← 研究一覧に戻る',
  header: {
    kanji: '論',
    // TODO(i18n-review): 論文タイトルは正式訳が未確定。責任ある行動（glossary: confirmed）/ 未完の規範 要確認
    english: '未完の規範としての「責任ある行動」',
  },
  status: '進行中',
  statusVariant: 'In Progress',
  overview: {
    heading: '概要',
    paragraphs: [
      // TODO(i18n-review): 責任ある行動（glossary: confirmed）/ ガバナンスの空隙 / 成文化 要確認
      '本研究は、「責任ある行動」が、宇宙・AI・サイバーの各ガバナンス領域において、いかにして未完の規範として機能するのかを検討する。責任ある行動を確立された概念として扱うのではなく、それを運用上の枠組みへと成文化することを妨げているガバナンスの空隙、曖昧性、そして戦略的な力学を考察する。',
      // TODO(i18n-review): denial=否認 / displacement=転位 / inoculation=予防接種 の訳語要確認。デュアルユースの曖昧性（glossary: review）要確認
      '本稿は、AIガバナンスの言説における三つの力学——否認、転位、予防接種——をたどり、国家や諸機関が、実質的なガバナンス上のコミットメントを構造的に先送りしながら、いかにして責任の言説を持ち出すのかを探究する。これらのパターンを、デュアルユースの曖昧性、規範の成文化、そして先端技術ガバナンスのアーキテクチャをめぐるより広範な問いへと結びつける。',
    ],
  },
  // TODO(i18n-review): 責任ある行動/否認/転位/予防接種/デュアルユースの曖昧性/規範の成文化/先端技術ガバナンス のタグ術語要確認
  tags: [
    '責任ある行動', 'ガバナンスの空隙', '否認', '転位',
    '予防接種（インオキュレーション）', 'デュアルユースの曖昧性', '規範の成文化',
    'AIガバナンス', 'サイバーガバナンス', '宇宙ガバナンス',
    '先端技術ガバナンス',
  ],
  keyQuestions: {
    heading: '主要な問い',
    items: [
      // TODO(i18n-review): 責任ある行動（glossary: confirmed）要確認
      '「責任ある行動」は、異なる技術領域を横断してガバナンスの概念としていかに機能するのか。',
      // TODO(i18n-review): denial/displacement/inoculation の訳語、規範の成文化 要確認
      '否認・転位・予防接種というどのような力学が、AIガバナンスにおける規範の成文化を形づくるのか。',
      // TODO(i18n-review): デュアルユースの曖昧性（glossary: review）要確認
      'デュアルユースの曖昧性は、責任ある行動の枠組みの構築をいかに複雑にするのか。',
      // TODO(i18n-review): 先端技術ガバナンス（glossary: review）要確認
      '先端技術ガバナンスのどのような構造的特徴が、規範の発展を可能にし、あるいは制約するのか。',
      // TODO(i18n-review): cross-domain / governance architecture の訳語要確認
      '領域横断的な比較（宇宙・AI・サイバー）は、ガバナンス・アーキテクチャにおけるパターンをいかに照らし出すのか。',
    ],
  },
};
