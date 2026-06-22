import type { LunarContent } from './types';

/**
 * REVIEW DRAFT (Japanese). Terminology follows src/i18n/glossary.ts.
 * Fields touching unconfirmed terms are flagged with TODO(i18n-review) and
 * must be checked by the author before being treated as final.
 * Name is fixed as 小柳璃紗 / Risa Koyanagi.
 */
export const lunarJa: LunarContent = {
  backToResearch: '← 研究一覧に戻る',
  header: {
    kanji: '論',
    // TODO(i18n-review): 論文タイトルは正式訳が未確定。要確認
    english: '月において誰が人類を代表して語るのか',
  },
  status: 'ワーキングペーパー',
  statusVariant: 'Working Paper',
  abstract: {
    heading: '要旨',
    paragraphs: [
      // TODO(i18n-review): 正統化の受け手/翻訳装置/権威アーキテクチャ（glossary: review）要確認
      '競合する月面ガバナンスの枠組みが、いかにして自らの権威を構築し、人類を代表して正統性を主張するのかを検討する。アルテミス合意と国際月面研究ステーション（ILRS）計画を比較分析し、それぞれの枠組みを支える正統化の受け手、翻訳装置、権威アーキテクチャを明らかにする。',
      // TODO(i18n-review): 普遍主義的言説/正統化装置/境界形成（glossary: review）要確認
      'いずれの枠組みも、「人類のために」「全人類のために」あるいは「平和的目的のために」と語る普遍主義的な言説を用いながら、相異なる参加条件、ガバナンス規範、境界形成の実践を確立している。こうした普遍主義的な主張は、包摂と排除を同時に行う正統化の装置として機能する。月面ガバナンスにおける正統な権威の構築は、確立された制度的達成ではなく、継続的かつ争われるプロセスにほかならない。',
      // TODO(i18n-review): 正統化理論（glossary: review）要確認
      '24点の文書からなるコード化されたコーパスと、正統化理論に由来する概念的ツールに依拠する。各枠組みが広範な原則をいかに具体的なガバナンス・アーキテクチャへと翻訳していくのか、そしてそのアーキテクチャが、ひいては月面で許容される行為の境界をいかに形づくるのかをたどる。',
    ],
  },
  // TODO(i18n-review): タグの研究術語多数（正統化の受け手/翻訳装置/権威アーキテクチャ/境界形成/普遍主義的言説/参加条件）要確認
  tags: [
    '正統化の受け手（オーディエンス）', '翻訳装置', '権威アーキテクチャ',
    'アルテミス合意', 'ILRS', '普遍主義的言説', '参加条件',
    '境界形成', '月面ガバナンス', '宇宙ガバナンス',
  ],
  methodology: {
    heading: '方法論',
    steps: [
      { glyph: '一', text: '24点の一次資料に対する質的文書分析' },
      // TODO(i18n-review): legitimation markers / authority claims / boundary-making language の訳語要確認
      { glyph: '二', text: '正統化のマーカー、権威の主張、境界形成の言説に着目した独自のコードブックの設計' },
      { glyph: '三', text: 'アルテミスとILRSのガバナンス・アーキテクチャを横断する比較枠組み分析' },
    ],
  },
  keyThemes: {
    heading: '主要なテーマ',
    items: [
      // TODO(i18n-review): 普遍主義的言説/正統化装置（glossary: review）要確認
      '競合するガバナンスの枠組みにおいて、普遍主義的言説が正統化の装置としていかに機能するか',
      // TODO(i18n-review): 翻訳装置/ガバナンス規範（glossary: review）要確認
      '翻訳装置が、広範な原則を運用上のガバナンス規範へと変換するうえで果たす役割',
      // TODO(i18n-review): 権威アーキテクチャ（glossary: review）要確認
      '月面ガバナンス・レジームの構造的特徴としての権威アーキテクチャ',
      '参加条件、ならびにそれが包摂性・アクセス・主権にもたらす含意',
      // TODO(i18n-review): 境界形成（glossary: review）要確認
      '月面領域における許容される行為を定義する境界形成の実践',
    ],
  },
};
