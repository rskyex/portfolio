# 翻訳レビュー・ガイド（日英バイリンガル）

このドキュメントは、日本語訳を**レビュー用ドラフト**から確定版へ仕上げるための作業台帳です。
日本語訳は機械的に確定せず、すべて確認待ちの状態でコミットしてあります。

## 仕組み（どこを直すか）

- **UI文言**（ナビ・フッター・カード共通文言）: `src/i18n/messages/{en,ja}.json`
- **各ページの本文**: `src/content/<route>/{en.ts,ja.ts}`
  - `en.ts` は英語原文（逐語）。`ja.ts` がレビュー対象の日本語ドラフト。
  - 型 `types.ts` が英日を 1:1 で強制（構造のズレはビルドで検出）。
- **用語集（対訳の単一ソース）**: `src/i18n/glossary.ts`
  - ここで対訳を確定すると、全ページで一貫して使う基準になります。

## 表記規則（固定）

- 日本語氏名: **小柳璃紗**
- ローマ字: **Risa Koyanagi**（"Risako Yanagi" のように区切らない）

## レビュー手順

1. 下の「用語集」で `status: review` の対訳を確定（`src/i18n/glossary.ts` を編集）。
2. 確定した対訳に合わせて各 `ja.ts` を修正。
3. 修正したフィールドの `// TODO(i18n-review)` コメントを削除。
4. `npm run build` が通ることを確認。

---

## 用語集（`src/i18n/glossary.ts`）

`status` が `review` の語は未確定です。確認・修正してください。

| 英語 | 日本語（案） | status | 備考 |
|---|---|---|---|
| governance | ガバナンス | confirmed |  |
| legitimation | 正統化 | review |  |
| legitimacy | 正統性 | review |  |
| legitimation audiences | 正統化の受け手（オーディエンス） | review |  |
| authority architecture | 権威アーキテクチャ | review |  |
| responsible behaviour | 責任ある行動 | confirmed | 宇宙・サイバー文脈の定訳に準拠 |
| norm | 規範 | confirmed |  |
| norm formation | 規範形成 | confirmed |  |
| dual-use | デュアルユース（軍民両用） | confirmed | 初出のみ括弧併記 |
| dual-use ambiguity | デュアルユースの曖昧性 | review |  |
| escalation | エスカレーション | confirmed |  |
| cross-domain escalation | クロスドメイン・エスカレーション | confirmed |  |
| space governance | 宇宙ガバナンス | confirmed |  |
| nuclear governance | 核ガバナンス | review |  |
| cyber governance | サイバーガバナンス | confirmed |  |
| emerging technology governance | 先端技術ガバナンス | review |  |
| Artemis Accords | アルテミス合意 | confirmed |  |
| International Lunar Research Station (ILRS) | 国際月面研究ステーション（ILRS） | confirmed |  |
| translation devices | 翻訳装置 | review |  |
| boundary-making | 境界形成（バウンダリー・メイキング） | review |  |
| ontological governance | 存在論的ガバナンス | review |  |
| narrative identity | ナラティブ・アイデンティティ（物語的自己同一性） | review |  |
| post-disaster governance | 災害後ガバナンス | review |  |
| Cambridge Future Scholar | ケンブリッジ・フューチャー・スカラー | review |  |
| Fukushima fieldwork | 福島でのフィールドワーク | confirmed |  |

---

## ページ別の要確認項目（`TODO(i18n-review)`）

各ページの `src/content/<dir>/ja.ts` 内、該当フィールド付近のコメントです。


### `about`

- L11 — メタ文言（title/description）要確認
- L15 — Cambridge Future Scholar（ケンブリッジ・フューチャー・スカラー）は肩書き。原語併記が無難
- L22 — University of Cambridge（ケンブリッジ大学）/ legitimacy（正統性）/ norms（規範）の訳語要確認
- L28 — Cambridge Future Scholar / Prof. Harald Wydra（人名）/ dual-use space infrastructure /
- L33 — post-disaster（災害後）/ state–operator interface / TEPCO（東京電力）/ METI（経済産業省）の表記要確認
- L37 — International Astronautical Congress（国際宇宙会議）/ 各シンポジウム名・論文テーマの訳語要確認
- L45 — Faultline / Govern the Human（プラットフォーム名、原語保持）/ second-order problem / the human subject の訳語要確認
- L55 — 学位名・コース名・機関名の日本語表記は要確認（原語保持の方針も含め相談）
- L66 — legitimation / authority architecture / emerging technology governance など術語多数。glossary参照のうえ要確認
- L75 — briefing development / stakeholder engagement の訳語要確認
- L82 — prompt engineering / OpenAI API / Supabase / SQL など技術名は原語保持。周辺語の訳語要確認
- L96 — 団体名・役職名（Space Generation Advisory Council / SGAC）の日本語表記要確認
- L100 — norm formation（規範形成）/ early-career researchers の訳語要確認
- L106 — 研究室名・役職（Former President / Alumni Representative）の正式表記要確認
- L114 — JAXA / Japan Aerospace Exploration Agency（宇宙航空研究開発機構）の表記要確認
- L116 — GEIL Policy Contest / "Transferable Development Rights Plus"（容積移転＋）など政策用語の訳語要確認
- L124 — 人名（天野典子・Ineke de Bruijn・浜野幸子・内海信彦）/ 公演・展覧会名の表記要確認
- L132 — 固有名詞は原語表記を維持。日本語表記が必要なら要相談

### `fieldwork`

- L25 — post-disaster governance / policy-recovery gap の訳語要確認。METI=経済産業省、TEPCO=東京電力の表記要確認
- L35 — AFRECOS は固有名詞のため原語を維持
- L37 — House of Councillors=参議院 の表記要確認
- L43 — 役職表記要確認
- L49 — 上智大学・東大作教授のラボ名称の正式表記要確認
- L54 — 役職表記要確認
- L73 — TICAD は固有名詞のため原語を維持
- L75 — Tokyo International Conference on African Development=アフリカ開発会議（TICAD）の表記要確認
- L85 — Ministry of Foreign Affairs of Japan=外務省（MOFA）の表記要確認
- L103 — GPE=教育のためのグローバル・パートナーシップ、World Bank=世界銀行、House of Councillors=参議院 の表記要確認
- L107 — Global Partnership for Education=教育のためのグローバル・パートナーシップ の表記要確認

### `home`

- L13 — 宇宙・核・サイバー・先端技術ガバナンスの並び表記要確認
- L15 — 肩書き「Researcher · Platform Builder」の訳語要確認
- L17 — legitimation（正統化）/ dual-use systems / authority architecture /
- L49 — 見出し「Platforms by Risa Koyanagi」の訳語要確認
- L60 — attribution frameworks / governance signals の訳語要確認
- L77 — selfhood / self-presentation の訳語要確認
- L85 — ontological（存在論的）/ epistemic / the human subject の訳語要確認
- L94 — ASAT / proximity operations / escalation の訳語要確認
- L103 — civilian nuclear infrastructure / arsenals の訳語要確認
- L112 — authority architecture（権威アーキテクチャ）/ mandates の訳語要確認
- L121 — selfhood / aesthetic form / interpretive studio の訳語要確認
- L129 — authenticity / the "true self" の訳語要確認
- L138 — subjectivity（主体性）の訳語要確認
- L155 — legitimation audiences / translation devices / authority architecture の訳語要確認
- L161 — denial/displacement/inoculation（否認/転位/予防接種）の訳語要確認
- L167 — post-disaster governance / policy gaps の訳語要確認
- L176 — 「international research convenings」の訳語要確認
- L182 — 団体名の日本語表記要確認
- L185 — 術語タグの訳語要確認
- L189 — 論文タイトルは正式訳が未確定。要確認
- L196 — 論文タイトルは正式訳が未確定。要確認
- L202 — 論文タイトルは正式訳が未確定。要確認
- L208 — norm formation / symbolic infrastructure の訳語要確認
- L216 — public-facing engagement / international exchange の訳語要確認
- L223 — post-disaster governance / 地名（双葉・浪江）の表記要確認
- L232 — 「Co-Founder & President」役職の訳語要確認
- L251 — 会議名（アフリカ開発会議）の正式表記要確認
- L264 — co-creation / development cooperation の訳語要確認
- L271 — GPE / World Bank / House of Councillors（参議院）の表記要確認

### `platforms`

- L15 — 正統性/権威/エスカレーション など術語要確認
- L25 — attribution（帰属）/governance signals の訳語要確認
- L33 — strategic behaviour / governance frameworks の訳語要確認
- L40 — self-understanding の訳語要確認
- L46 — Choice Architecture / Epistemic Drift の訳語要確認
- L49 — epistemic autonomy / nudges の訳語要確認
- L56 — self-presentation / online selfhood の訳語要確認
- L62 — Algorithmic Identity / Self-Presentation / Digital Reflection の訳語要確認
- L65 — self-presentation / identity construction の訳語要確認
- L71 — Ontological Governance Observatory は著者の中核概念。訳語の確定が特に重要
- L73 — human subject / epistemic, ontological, political layers の訳語要確認
- L78 — Ontological Risk / Second-Order Governance の訳語要確認
- L81 — human subject の訳語要確認
- L88 — ASAT / proximity operations / GNSS jamming / cyber-space entanglement の訳語要確認
- L96 — escalation calculus の訳語要確認
- L103 — civilian nuclear / arsenals の訳語要確認
- L111 — civilian nuclear infrastructure の訳語要確認
- L118 — mandates / authority architecture の訳語要確認
- L124 — Lunar Governance / Authority Architecture の訳語要確認
- L127 — legitimacy / on behalf of humanity の訳語要確認
- L139 — interpretive studio / aesthetic form の訳語要確認
- L142 — philosophical game design の訳語要確認
- L158 — score literacy の訳語要確認
- L163 — Structural Analysis / Motif Tracking / Music Theory の訳語要確認
- L166 — musical structure / score literacy の訳語要確認
- L173 — authenticity / externalised の訳語要確認
- L178 — Authenticity / Selfhood / Existentialism の訳語要確認
- L181 — inner necessity / on the premise of being watched の訳語要確認
- L188 — formation of subjectivity / human subjects の訳語要確認
- L193 — Subjectivity / Social Design の訳語要確認
- L196 — become selves の訳語要確認
- L209 — policy commitments / fulfilment / public accountability の訳語要確認
- L215 — Policy Accountability / Government Commitments / Civic Engagement の訳語要確認
- L218 — government commitments / accountable の訳語要確認
- L224 — 技術スタックの体言止め表現要確認

### `platforms-cyber`

- L21 — 「unpeace（不平和）」は定訳が未確立。原語併記で要確認
- L26 — 概念タグ（戦略的行動/不平和/エスカレーション等）の訳語要確認。固有名（Kello/Schelling/Tallinn Manual 2.0）は原語維持

### `platforms-faultline`

- L31 — legitimacy（正統性）/ authority（権威）/ escalation の訳語要確認
- L35 — nuclearGovernance(核ガバナンス)/dualUseGovernance/weaponised interdependence は status:'review' を含む。glossary 準拠だが要確認。固有名は原語維持
- L49 — security dilemma / weaponised interdependence の訳語要確認。固有名（Jervis）は原語維持
- L58 — nuclear arsenals / civilian nuclear power（核 vs 原子力）の訳語要確認。固有名（IAEA/SIPRI/WHO）は原語維持
- L67 — unpeace（不平和）は定訳が未確立。固有名（Kello/Schelling/Tallinn Manual 2.0）は原語維持
- L76 — legitimation devices / authority architecture / mandate は status:'review'。訳語要確認。アルテミス合意・ILRS は glossary confirmed

### `platforms-govern-the-human`

- L15 — second-order governance の訳語要確認
- L29 — human subject / second-order governance の訳語要確認。プロジェクト名（Narrative Drift / SelfTrace / Ontological Governance Observatory）は原語維持
- L31 — epistemic / ontological / second-order governance の訳語要確認
- L35 — 記述タグの訳語要確認
- L50 — 記述タグの訳語要確認
- L57 — self-presentation / platform incentives の訳語要確認
- L63 — second-order governance / human subject / ontological の訳語要確認
- L65 — 記述タグの訳語要確認

### `platforms-lunar-mandate-atlas`

- L12 — mandates / authority architecture（権威アーキテクチャ, status: review）要確認
- L31 — authority architectures（権威アーキテクチャ, review）/ legitimacy（正統性, review）/ on behalf of humanity 要確認
- L33 — universalist language / participation conditions / boundary-making（境界形成, review）/ legitimation devices（正統化, review）要確認
- L35 — legitimation theory（正統化理論, review）/ governance architectures / permissible action 要確認
- L42 — legitimation claims（正統化, review）/ universalist language 要確認
- L44 — translation devices（翻訳装置, review）/ governance norms 要確認
- L46 — authority architecture（権威アーキテクチャ, review）/ governance regimes 要確認
- L48 — participation conditions / inclusivity, access, sovereignty 要確認
- L50 — boundary-making（境界形成, review）/ permissible action 要確認
- L54 — Lunar Governance / Legitimation（正統化, review）/ Authority Architecture（権威アーキテクチャ, review）/ Boundary-Making（境界形成, review）/ Participation Conditions 要確認

### `platforms-mythera`

- L29 — selfhood / aesthetic form の訳語要確認
- L31 — aesthetic legibility / personal identity の訳語要確認
- L35 — 記述タグ（解釈の世界/自己/美的可読性等）の訳語要確認
- L42 — 記述タグの訳語要確認
- L48 — authenticity（真正性/本来性）/ transcendence の訳語要確認。固有名（Mishima 等）は原語維持
- L57 — subjectivity / human subjects / selfhood / governance の訳語要確認

### `platforms-narrative-drift`

- L24 — epistemic / ontological の訳語要確認。Govern the Human はプロジェクト名のため原語維持
- L28 — 記述タグ（AIの影響/選択アーキテクチャ/認識論的ドリフト等）の訳語要確認

### `platforms-nuclear`

- L11 — glossary nuclearGovernance は status:'review'。民生文脈は「原子力」、安全保障文脈は「核」で使い分け要確認
- L25 — 国際機関名（IAEA/SIPRI/WHO）の日本語正式表記要確認
- L29 — 記述タグの訳語要確認。固有名（IAEA/SIPRI/WHO）は原語維持

### `platforms-ontological-governance-observatory`

- L11 — glossary ontologicalGovernance は status:'review'。著者の中核概念のため訳語の確定が特に重要
- L22 — second-order governance / human subject / ontological の訳語要確認
- L24 — Govern the Human はプロジェクト名のため原語維持
- L28 — 記述タグ（存在論的リスク/二次的ガバナンス/認識論的再構成等）の訳語要確認

### `platforms-orbital`

- L24 — security dilemma / weaponised interdependence / governance architecture の訳語要確認
- L28 — 記述タグ（近接運用/サイバー・宇宙の連関/武器化された相互依存等）の訳語要確認。固有名（Jervis）は原語維持

### `platforms-promise`

- L20 — policy commitments / lifecycle / fulfilment or abandonment の訳語要確認
- L22 — public accountability / legitimation / political communication の訳語要確認
- L26 — Policy Accountability / Civic Engagement / Public Policy の訳語要確認

### `platforms-scoreless`

- L16 — score literacy / tension and release / formal development の訳語要確認
- L18 — public domain / structured thought の訳語要確認
- L22 — Structural Analysis / Motif Tracking / Music Theory / Public Domain の訳語要確認

### `platforms-second-self`

- L11 — メタ説明文の訳語要確認（formation of subjectivity / become selves）
- L24 — formation of subjectivity / algorithmic systems の訳語要確認
- L26 — human subjects / conditions of society / selfhood の訳語要確認
- L28 — govern human behaviour / become selves の訳語要確認
- L37 — theoretical lenses / operating principles の訳語要確認
- L43 — narrative identity / democratic subjectivity 等の訳語要確認
- L49 — civic reputation systems / predictive governance dashboards の訳語要確認
- L55 — constitutional amendments / anti-surveillance movements の訳語要確認
- L61 — deliberation / civic assemblies / counterpublic formation の訳語要確認
- L70 — psychological integration / democratic capacity / memory diversity の訳語要確認
- L72 — strongest board / what kind of human being の訳語要確認
- L76 — Subjectivity / Social Design / Near-Future の訳語要確認

### `platforms-selftrace`

- L20 — self-presentation / platform incentives / engagement metrics の訳語要確認
- L22 — Govern the Human / self-understanding / epistemic, ontological, political layers の訳語要確認
- L26 — Algorithmic Identity / Self-Presentation / Platform Incentives / Digital Reflection の訳語要確認

### `platforms-theatre-of-authenticity`

- L11 — authenticity / externalised の訳語要確認
- L24 — authenticity / inner necessity / true self の訳語要確認
- L26 — external forces / the gaze of others / externalised の訳語要確認
- L28 — performance / transcendence の訳語要確認
- L35 — inner necessity の訳語要確認
- L37 — on the premise of being watched の訳語要確認
- L39 — authentic self の訳語要確認
- L43 — Authenticity / Selfhood / Existentialism の訳語要確認

### `projects`

- L26 — post-disaster governance / policy-recovery gap / trust gap の訳語要確認。METI・TEPCO の表記も要確認
- L36 — 組織名 AFRECOS は固有名詞。原語のまま据え置き
- L38 — 「参議院」表記要確認
- L48 — 研究室の正式名称・東大作教授の表記要確認

### `projects-afrecos`

- L12 — 組織名 AFRECOS は固有名詞。原語のまま据え置き
- L23 — 「参議院」表記要確認
- L29 — タグの訳語要確認（「参議院」等の固有表現を含む）

### `projects-art`

- L26 — authority/legitimacy/representation/architecture of meaning の訳語要確認
- L34 — 都市名の日本語表記要確認
- L64 — 展覧会名・サブタイトルは固有名詞。原語のまま据え置き
- L93 — 会期・開館時間など案内文の和訳要確認
- L110 — 主催者名 Artspace Innovation は原語のまま据え置き
- L123 — 会期・開館時間など案内文の和訳要確認。住所行は原文どおり
- L138 — 番組名・エピソード名は固有名詞。原語のまま据え置き

### `projects-fukushima`

- L22 — 「双葉地区」「浪江地区」の行政区分表記、METI・TEPCO の和名表記要確認
- L35 — 「事故」の表現（震災／原発事故）要確認
- L55 — mechanical / emotional / policy の語調の訳出要確認
- L62 — デザイン思考の各段階（empathise / test & iterate）の訳語要確認
- L68 — 地名・固有名詞タグ（双葉/浪江/METI/TEPCO）の表記要確認

### `projects-peace`

- L22 — 上智大学・東大作教授の研究室の正式名称、各地域名の表記要確認
- L29 — 地域名・「上智大学」等の固有名詞タグの表記要確認

### `research`

- L15 — 正統化/正統性・権威アーキテクチャ・責任ある行動規範など術語要確認
- L26 — 正統化の受け手/翻訳装置/権威アーキテクチャ/境界形成 — 術語要確認
- L36 — 概念用語が多く、訳語の確定が必要
- L50 — denial/displacement/inoculation の訳（否認/転位/予防接種）要確認
- L60 — denial/displacement/inoculation の訳語要確認
- L69 — post-disaster governance / state-society relations の訳語要確認
- L88 — ontological governance は著者の中核概念。訳語の確定が特に重要
- L92 — ontological governance / narrative identity / second-order governance の訳語要確認
- L102 — 存在論的ガバナンス/二次的分析層 の訳語要確認
- L112 — dual-use ambiguity の訳語要確認
- L120 — authority architecture / legitimation の訳語要確認
- L131 — 団体名の日本語表記要確認
- L135 — 術語タグの訳語要確認
- L139 — 論文タイトルは正式訳が未確定。要確認
- L148 — 論文タイトルは正式訳が未確定。要確認
- L156 — 論文タイトルは正式訳が未確定。要確認
- L164 — norm formation / symbolic infrastructure の訳語要確認

### `research-ai-cyber`

- L13 — 論文タイトルは正式訳が未確定。責任ある行動（glossary: confirmed）/ 未完の規範 要確認
- L21 — 責任ある行動（glossary: confirmed）/ ガバナンスの空隙 / 成文化 要確認
- L23 — denial=否認 / displacement=転位 / inoculation=予防接種 の訳語要確認。デュアルユースの曖昧性（glossary: review）要確認
- L27 — 責任ある行動/否認/転位/予防接種/デュアルユースの曖昧性/規範の成文化/先端技術ガバナンス のタグ術語要確認
- L37 — 責任ある行動（glossary: confirmed）要確認
- L39 — denial/displacement/inoculation の訳語、規範の成文化 要確認
- L41 — デュアルユースの曖昧性（glossary: review）要確認
- L43 — 先端技術ガバナンス（glossary: review）要確認
- L45 — cross-domain / governance architecture の訳語要確認

### `research-fukushima`

- L13 — 論文タイトルは正式訳が未確定。災害後ガバナンス（glossary: review）要確認
- L21 — 災害後ガバナンス（glossary: postDisasterGovernance, review）要確認
- L23 — state-society relations / institutional legitimacy（glossary: legitimacy, review）要確認
- L27 — 災害後ガバナンス/state-society relations/institutional legitimacy 等のタグ術語要確認
- L37 — METI=経済産業省 / TEPCO=東京電力 の表記要確認
- L46 — state-society relations の訳語要確認
- L50 — local governance actors の訳語要確認

### `research-lunar`

- L13 — 論文タイトルは正式訳が未確定。要確認
- L21 — 正統化の受け手/翻訳装置/権威アーキテクチャ（glossary: review）要確認
- L23 — 普遍主義的言説/正統化装置/境界形成（glossary: review）要確認
- L25 — 正統化理論（glossary: review）要確認
- L29 — タグの研究術語多数（正統化の受け手/翻訳装置/権威アーキテクチャ/境界形成/普遍主義的言説/参加条件）要確認
- L39 — legitimation markers / authority claims / boundary-making language の訳語要確認
- L47 — 普遍主義的言説/正統化装置（glossary: review）要確認
- L49 — 翻訳装置/ガバナンス規範（glossary: review）要確認
- L51 — 権威アーキテクチャ（glossary: review）要確認
- L54 — 境界形成（glossary: review）要確認

### `research-ontological-governance`

- L13 — 存在論的ガバナンス（glossary: ontologicalGovernance, review）— 著者の中核概念。訳語の確定が特に重要
- L21 — EU AI法（EU AI Act）の表記 / human subject=人間という主体 要確認
- L23 — epistemology=認識論 / ontology=存在論 / algorithmic curation=アルゴリズムによるキュレーション / narrative identity（glossary: review）/ self-governance=自己統治 要確認
- L25 — narrative identity（glossary: review）/ technics of memory=記憶の技術 / 存在論的ガバナンス（glossary: review）/ second-order analytical layer=二次的な分析層 要確認
- L29 — AIガバナンス/存在論的ガバナンス/ナラティブ・アイデンティティ/認識論/民主的熟議/EU AI法/アルゴリズムによるキュレーション/自己統治/記憶の技術/二次的ガバナンス のタグ術語要確認
- L39 — epistemic/ontological/political conditions の訳語、human subjects=人間という主体 要確認
- L41 — rights-based governance=権利を基盤とするガバナンス 要確認
- L43 — narrative identity（glossary: review）/ algorithmic curation 要確認
- L45 — second-order governance=二次的ガバナンス 要確認
- L47 — EU AI法 / ontological dimension=存在論的次元 要確認

### `speaking`

- L19 — TICAD は固有名詞のため原語を維持
- L21 — Tokyo International Conference on African Development=アフリカ開発会議（TICAD）の表記要確認
- L31 — Ministry of Foreign Affairs of Japan=外務省（MOFA）の表記要確認
- L40 — フォーラム正式名称の訳語要確認
- L50 — GPE=教育のためのグローバル・パートナーシップ、World Bank=世界銀行、House of Councillors=参議院 の表記要確認
- L54 — Global Partnership for Education=教育のためのグローバル・パートナーシップ の表記要確認

### `src/content/about/ja.ts:5: * Fields touching unconfirmed terms are flagged with TODO(i18n-review) and`

- L — 

### `src/content/fieldwork/ja.ts:5: * Fields touching unconfirmed terms are flagged with TODO(i18n-review) and`

- L — 

### `src/content/home/ja.ts:5: * Fields touching unconfirmed terms are flagged with TODO(i18n-review) and`

- L — 

### `src/content/platforms-cyber/ja.ts:5: * Fields touching unconfirmed terms are flagged with TODO(i18n-review).`

- L — 

### `src/content/platforms-faultline/ja.ts:5: * Fields touching unconfirmed terms are flagged with TODO(i18n-review).`

- L — 

### `src/content/platforms-govern-the-human/ja.ts:5: * Fields touching unconfirmed terms are flagged with TODO(i18n-review).`

- L — 

### `src/content/platforms-lunar-mandate-atlas/ja.ts:5: * Fields touching unconfirmed terms are flagged with TODO(i18n-review).`

- L — 

### `src/content/platforms-mythera/ja.ts:5: * Fields touching unconfirmed terms are flagged with TODO(i18n-review).`

- L — 

### `src/content/platforms-narrative-drift/ja.ts:5: * Fields touching unconfirmed terms are flagged with TODO(i18n-review).`

- L — 

### `src/content/platforms-nuclear/ja.ts:5: * Fields touching unconfirmed terms are flagged with TODO(i18n-review).`

- L — 

### `src/content/platforms-ontological-governance-observatory/ja.ts:5: * Fields touching unconfirmed terms are flagged with TODO(i18n-review).`

- L — 

### `src/content/platforms-orbital/ja.ts:5: * Fields touching unconfirmed terms are flagged with TODO(i18n-review).`

- L — 

### `src/content/platforms-promise/ja.ts:5: * Fields touching unconfirmed terms are flagged with TODO(i18n-review).`

- L — 

### `src/content/platforms-scoreless/ja.ts:5: * Fields touching unconfirmed terms are flagged with TODO(i18n-review).`

- L — 

### `src/content/platforms-second-self/ja.ts:5: * Fields touching unconfirmed terms are flagged with TODO(i18n-review).`

- L — 

### `src/content/platforms-selftrace/ja.ts:5: * Fields touching unconfirmed terms are flagged with TODO(i18n-review).`

- L — 

### `src/content/platforms-theatre-of-authenticity/ja.ts:5: * Fields touching unconfirmed terms are flagged with TODO(i18n-review).`

- L — 

### `src/content/platforms/ja.ts:5: * Fields touching unconfirmed terms are flagged with TODO(i18n-review) and`

- L — 

### `src/content/projects-afrecos/ja.ts:5: * Fields touching unconfirmed terms are flagged with TODO(i18n-review) and`

- L — 

### `src/content/projects-art/ja.ts:5: * Fields touching unconfirmed terms are flagged with TODO(i18n-review) and`

- L — 

### `src/content/projects-fukushima/ja.ts:5: * Fields touching unconfirmed terms are flagged with TODO(i18n-review) and`

- L — 

### `src/content/projects-peace/ja.ts:5: * Fields touching unconfirmed terms are flagged with TODO(i18n-review) and`

- L — 

### `src/content/projects/ja.ts:5: * Fields touching unconfirmed terms are flagged with TODO(i18n-review) and`

- L — 

### `src/content/research-ai-cyber/ja.ts:5: * Fields touching unconfirmed terms are flagged with TODO(i18n-review) and`

- L — 

### `src/content/research-fukushima/ja.ts:5: * Fields touching unconfirmed terms are flagged with TODO(i18n-review) and`

- L — 

### `src/content/research-lunar/ja.ts:5: * Fields touching unconfirmed terms are flagged with TODO(i18n-review) and`

- L — 

### `src/content/research-ontological-governance/ja.ts:5: * Fields touching unconfirmed terms are flagged with TODO(i18n-review) and`

- L — 

### `src/content/research/ja.ts:5: * Fields touching unconfirmed terms are flagged with TODO(i18n-review) and`

- L — 

### `src/content/speaking/ja.ts:5: * Fields touching unconfirmed terms are flagged with TODO(i18n-review) and`

- L — 
