import type { AboutContent } from './types';

/**
 * REVIEW DRAFT (Japanese). Terminology follows src/i18n/glossary.ts.
 * Fields touching unconfirmed terms are flagged with TODO(i18n-review) and
 * must be checked by the author before being treated as final.
 * Name is fixed as 小柳璃紗 / Risa Koyanagi.
 */
export const aboutJa: AboutContent = {
  meta: {
    // TODO(i18n-review): メタ文言（title/description）要確認
    title: 'プロフィール',
    description: 'ケンブリッジ・フューチャー・スカラー、研究者——小柳璃紗は、宇宙・核・先端技術ガバナンスを横断して研究している。',
  },
  // TODO(i18n-review): Cambridge Future Scholar（ケンブリッジ・フューチャー・スカラー）は肩書き。原語併記が無難
  header: { kanji: '技', english: 'プロフィール', subtitle: 'ケンブリッジ・フューチャー・スカラー・研究者' },
  profile: {
    photoAlt: 'Risa Koyanagi',
    heading: 'プロフィール',
    paragraphs: [
      [
        // TODO(i18n-review): University of Cambridge（ケンブリッジ大学）/ legitimacy（正統性）/ norms（規範）の訳語要確認
        { text: '小柳は' },
        { text: 'ケンブリッジ大学', strong: true },
        { text: 'の研究者であり、宇宙・核・サイバーの各システムのガバナンスを研究している——とりわけ、権威がいかに構築され、規範がいかに崩壊し、崩壊後に正統性を再構築するために何が必要となるのかに焦点を当てる。' },
      ],
      [
        // TODO(i18n-review): Cambridge Future Scholar / Prof. Harald Wydra（人名）/ dual-use space infrastructure /
        // cross-domain escalation（クロスドメイン・エスカレーション）/ responsible behaviour norms（責任ある行動規範）の訳語要確認
        { text: 'ケンブリッジ・フューチャー・スカラーとして、ハラルド・ヴィドラ教授の指導のもと、競合する月面ガバナンスの枠組みについて研究している——普遍主義的な言説が、いかにして基準、参加条件、解釈上の裁量へと翻訳されるのか。より広くは、デュアルユース（軍民両用）の宇宙インフラ、クロスドメイン・エスカレーションのリスク、そしてAI・宇宙・サイバーの各ガバナンスにわたる責任ある行動規範の構造的な空隙にまで研究は及ぶ。' },
      ],
      [
        // TODO(i18n-review): post-disaster（災害後）/ state–operator interface / TEPCO（東京電力）/ METI（経済産業省）の表記要確認
        { text: 'この研究は、災害後の福島での6年間にわたるフィールド調査に根ざしている。そこで彼女は、国家と事業者の接点におけるガバナンスの失敗が、いかにして公衆の信頼と政策の正統性を蝕むのかを検討し、避難者、自治体の職員、そして東京電力（TEPCO）・経済産業省（METI）の関係者への半構造化インタビューを実施した。' },
      ],
      [
        // TODO(i18n-review): International Astronautical Congress（国際宇宙会議）/ 各シンポジウム名・論文テーマの訳語要確認
        { text: '彼女の研究は、' },
        { text: '国際宇宙会議2026', strong: true },
        { text: '（アンタルヤ、トルコ）で発表予定であり、' },
        { text: '採択論文3本', strong: true },
        { text: 'が、宇宙の安全保障と持続可能性、宇宙政策と経済、そして宇宙と社会に関する各シンポジウムにわたって扱われる——デュアルユースの無害化、月面ガバナンスにおける条件付きの開放性、そして競合する月秩序におけるソフト・インフラとしての神話的命名を論じる。' },
      ],
      [
        // TODO(i18n-review): Faultline / Govern the Human（プラットフォーム名、原語保持）/ second-order problem / the human subject の訳語要確認
        { text: 'ケンブリッジでの研究と並行して、彼女は2つの公開研究プラットフォームを構築している。Faultline は、エスカレーション理論とアトリビューションの枠組みを、研究者や政策の専門家のために運用可能にするもので、Orbital Risk Tracker、Global Nuclear Infrastructure Atlas、Cyber Escalation Atlas といったツールを通じて提供される。Govern the Human は、二次的な問題を検討する——持続的なAIとの相互作用が、統治し、同意し、熟議するはずの人間という主体をいかに変容させるのか。' },
      ],
    ],
    viewResearch: '研究を見る',
    viewPlatforms: 'プラットフォームを見る',
  },
  education: {
    heading: '学歴',
    items: [
      // TODO(i18n-review): 学位名・コース名・機関名の日本語表記は要確認（原語保持の方針も含め相談）
      { institution: 'Hughes Hall, University of Cambridge', degree: 'BA Human, Social, and Political Sciences', period: '2026年10月' },
      { institution: 'London School of Economics (University of London)', degree: 'BSc Politics and International Relations', period: '2025–2026' },
      { institution: 'Saïd Business School, University of Oxford', degree: 'AI and Digital Transformation in Government', period: '2025年11月 – 2026年1月', detail: '修了証' },
      { institution: 'SOAS University of London', degree: 'BSc Social Sciences (Foundation Year)', period: '2024–2025', detail: 'First Class（最優等）' },
    ],
  },
  skills: {
    heading: 'スキル',
    research: {
      heading: '研究',
      // TODO(i18n-review): legitimation / authority architecture / emerging technology governance など術語多数。glossary参照のうえ要確認
      paragraphs: [
        '正統化、デュアルユース（軍民両用）システム、権威アーキテクチャ、戦略的リスク、宇宙ガバナンス、核ガバナンス、先端技術ガバナンス、インフラの政治。',
        '言説・ナラティブ分析、質的コーディング、比較政治研究、解釈的手法、政策フレーミング、象徴的・神話的分析、そして研究からインターフェースへの翻訳。',
      ],
    },
    policy: {
      heading: '政策／コミュニケーション',
      paragraphs: [
        // TODO(i18n-review): briefing development / stakeholder engagement の訳語要確認
        '政策分析、戦略的ライティング、ブリーフィングの作成、ナラティブ・フレーミング、ステークホルダー連携、分野横断的コミュニケーション。',
        '公開での講演、モデレーション、ワークショップ・イベント設計、学際的協働、知識の統合、そして複雑な政治的・技術的課題の社会に開かれた翻訳。',
      ],
    },
    technical: {
      heading: '技術的・計算的手法',
      // TODO(i18n-review): prompt engineering / OpenAI API / Supabase / SQL など技術名は原語保持。周辺語の訳語要確認
      paragraphs: [
        'プラットフォーム・アーキテクチャ、公開型の研究ツールのプロトタイピング、AIワークフロー設計、プロンプトエンジニアリング、OpenAI APIを用いた機能設計、Supabaseを用いたデータ構造化、SQL、アナリティクスの計装、イベントログ設計、ダッシュボード設計。',
        '情報アーキテクチャ、ユーザーフロー設計、UI/UXディレクション、質的コーディング、言説・ナラティブ分析のワークフロー、ステークホルダー・マッピング。',
        '政策・インフラのデータ整理、行動研究の設計、そして研究からインターフェースへの翻訳。',
      ],
    },
  },
  languages: {
    heading: '言語',
    items: ['日本語', '英語', 'ロシア語', '中国語'],
  },
  roles: {
    heading: '役職・リーダーシップ',
    // TODO(i18n-review): 団体名・役職名（Space Generation Advisory Council / SGAC）の日本語表記要確認
    institution: 'Space Generation Advisory Council',
    location: '日本',
    title: '宇宙政策プロジェクト・チームリーダー',
    // TODO(i18n-review): norm formation（規範形成）/ early-career researchers の訳語要確認
    description: 'SGACの宇宙政策プロジェクトにおける日本チームを率いる——若手研究者や政策の貢献者を集め、宇宙ガバナンス、デュアルユース（軍民両用）システム、そして新たに生まれつつある宇宙秩序における規範形成をめぐって連携する。',
  },
  affiliations: {
    heading: '所属',
    items: [
      // TODO(i18n-review): 研究室名・役職（Former President / Alumni Representative）の正式表記要確認
      { institution: '上智大学', detail: '東大作教授 平和構築・国際協力研究室', role: '元代表；現・OB/OG代表' },
      { institution: '東京大学', detail: '五百旗頭真教授 四谷黎明会' },
    ],
  },
  awards: {
    heading: '受賞',
    items: [
      // TODO(i18n-review): JAXA / Japan Aerospace Exploration Agency（宇宙航空研究開発機構）の表記要確認
      { title: 'JAXA国際宇宙教育会議 2026 選出', detail: '宇宙航空研究開発機構（JAXA）の国際宇宙教育会議の2026年メンバーに選出。' },
      // TODO(i18n-review): GEIL Policy Contest / "Transferable Development Rights Plus"（容積移転＋）など政策用語の訳語要確認
      { title: 'GEIL政策コンテスト 第2位 — 東京の地震対応', detail: '4名のチームを率い、東京の地震レジリエンスを高める政策を立案。再開発を促し、木造建築物を減らし、街路を拡幅するため「Transferable Development Rights Plus（容積移転＋）」を提案した。' },
    ],
  },
  arts: {
    heading: 'アート歴',
    paragraphs: [
      '彼女の芸術活動——音楽演奏、視覚芸術、そして詩にわたる——は、解釈的な研究スタジオである MYTHERA を通じて記録されている。',
      // TODO(i18n-review): 人名（天野典子・Ineke de Bruijn・浜野幸子・内海信彦）/ 公演・展覧会名の表記要確認
      '小柳は、天野典子氏にピアノを、Ineke de Bruijn 氏にシャドウボックスを、浜野幸子氏のもとで油彩を学んだ。2011年には詩で優秀賞を受賞し、マリボル国立歌劇場の「カルメン」に子役として出演した。10代の頃には JYOJI-ROCK U-16 コンテストで優秀賞を獲得。内海信彦氏のもとでの芸術研究はグループ展へとつながった。Monster Exhibition に選出され、Al-Tiba9 Contemporary Art Magazine に掲載された。',
    ],
    mytheraLabel: 'MYTHERA',
    artPracticeLabel: 'アート実践',
  },
  interests: {
    heading: '関心',
    // TODO(i18n-review): 固有名詞は原語表記を維持。日本語表記が必要なら要相談
    items: ['Violin', 'Johann Sebastian Bach', 'Jean Sibelius', 'Giacomo Puccini', 'Giuseppe Verdi', 'Pyotr Ilyich Tchaikovsky', 'Antonín Dvořák', 'Igor Stravinsky', 'Fyodor Dostoevsky', 'Kabuki', 'Yukio Mishima', 'Greek Mythology', 'Raymond Radiguet', 'Rainer Maria Rilke'],
  },
  connect: {
    heading: '連絡先',
    galleryAlt: 'ギャラリー',
    instagramLabel: '@rskyex',
    linkedinLabel: 'LinkedIn',
    contactLabel: 'お問い合わせ',
  },
};
