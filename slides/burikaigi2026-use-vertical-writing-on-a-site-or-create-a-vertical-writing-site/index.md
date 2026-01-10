---
title: Webサイトで縦書きを使う、縦書きのWebサイトを作る
description: Web技術における縦書きの現状と課題、そして未来への展望
author: berlysia
date: 2026-01-10
---

<link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/yakuhanjp@4.1.1/dist/css/yakuhanrp_s.css">

<style>
.two-column {
  @container style(--slide-writing-mode: horizontal-tb) {
    columns: 2;
    column-gap: 8cqh;
  }
  @container style(--slide-writing-mode: vertical-rl) or style(--slide-writing-mode: vertical-lr) {
    display: flex;
    flex-direction: column;
    justify-content: space-evenly;

    /* 子はすべて flex: 1 */
    & > * {
      flex: 1;
    }
  }
}

.upright {
  text-orientation: upright;
}

.tcu-all {
  text-combine-upright: all;
}

.two-column ul {
  break-inside: avoid;
}

* {
    font-family: YakuHanRPs, "Hiragino Sans", "Hiragino Kaku Gothic ProN", "Yu Gothic", "Noto Sans JP", sans-serif;
}

.highlight-box {
  background-color: #f0f4ff;
  inline-size: fit-content;
  margin-inline: auto;
  padding: 3cqh;
  margin-block: 2cqh;
  background-color: #ccf;
  border-radius: 2cqh;
}

.slide-content li > p {
    margin: 0;
}

.wrapper {
  word-break: keep-all;
  overflow-wrap: normal;
}

.nowrap {
  white-space: nowrap;
}
</style>

<!-- タイトルスライド（横書き） -->

<div class="wrapper center wm-horizontal">

<div style="display: flex; flex-direction: column; inline-size: calc(100cqh - var(--space-wrapper) * 2);">
  <h1 class="upright" style="overflow: visible;">Webサイトで縦書きを使う、<wbr />縦書きのWebサイトを作る</h1>
  <div style="align-self: end; color: #444;">berlysia / BuriKaigi 2026</div>
</div>

</div>

---

<!-- 縦書きをする言語（横書き） -->

<div class="wrapper header-and-content wm-horizontal">

# 縦書きをする言語

<div style="flex: 1; display: flex; flex-direction: column;">

- CJKのイメージが強いだろう
  - 中国語・日本語・韓国語

- 縦書きの活用度合いには差がある
  - 日本語が一番アクティブに縦書きを使っている

- これらの言語の面白いところ
  - 急に縦書きになっても横書きになっても問題なく読める

</div>
</div>

---

<!-- 縦書きをする言語（縦書き） -->

<div class="wrapper header-and-content wm-vertical">

# 縦書きをする言語

<div style="flex: 1; display: flex; flex-direction: column;">

- CJKのイメージが強いだろう
  - 中国語・日本語・韓国語

- 縦書きの活用度合いには差がある
  - 日本語が一番<wbr />アクティブに縦書きを使っている

- これらの言語の面白いところ
  - 急に縦書きになっても<wbr />横書きになっても<wbr />問題なく読める

</div>
</div>

---

<!-- タイトル再掲（縦書き） -->

<div class="wrapper center">

<div style="display: flex; flex-direction: column; inline-size: calc(100cqh - var(--space-wrapper) * 2);">
  <h1 class="upright" style="overflow: visible;">Webサイトで縦書きを使う、<wbr />縦書きのWebサイトを作る</h1>
  <div style="align-self: end; color: #444;">berlysia / BuriKaigi 2026</div>
</div>

</div>

---

<!-- 日本語のなかの縦書き -->

<div class="wrapper header-and-content">

# 日本語のなかの縦書き

<div class="centered" style="flex: 1; display: flex; flex-direction: column;">

ソフトウェアの世界で生きていると<wbr />
横書き中心のように感じるが……

現代の日本語表記は：

<div class="highlight-box">左横書きを第一選択肢としながら、<br />右縦書きを必要に応じて併用している</div>

<div style="font-size: 4cqh; color: #666;">
参考：屋名池誠『横書き登場 日本語表記の近代』
</div>

</div>
</div>

---

<!-- 電子書籍とWebの縦書き -->

<div class="wrapper header-and-content">

# 電子書籍とWebの縦書き

<div style="flex: 1; display: flex; flex-direction: column;">

- 書籍は伝統的に縦書きが主流
  - 電子書籍でも当然、<wbr />縦書きの強い要求・需要がある

- 2011年（もう<span class="tcu-all">15</span>年前！）
  - EPUB3の成立
  - 真の縦書き電子書籍対応が叶う

- EPUB3は<wbr />HTMLとCSSがベース
  - Webの縦書きやルビの表現は<wbr />電子書籍の成立と密接に関連する

<div style="font-size: 4cqh; color: #666;">
参考：小林龍生『EPUB戦記』
</div>

</div>
</div>

---

<!-- Webで縦書きが使われて10年 -->

<div class="wrapper header-and-content">

# Webで縦書きが使われて<wbr /><span class="tcu-all">10</span>年が経つ

<div style="flex: 1; display: flex; flex-direction: column;">

先人の努力に深く感謝しつつ、<wbr />
今日は歴史の話はしない

実際に活用されている場面：

- 小説投稿サイト
  - pixiv小説
  - カクヨム
- 教育系サービス
  - 例）ZEN Study
- 他、LP、ティザーサイト類
- 個人サイトにも例がある

</div>
</div>

---

<!-- 「縦書きができる」とはどういうことか -->

<div class="wrapper header-and-content">

# 「日本語が使える」とは<wbr />どういうことか

<div style="flex: 1; display: flex; flex-direction: column;">

[日本語組版処理の要件](https://www.w3.org/TR/jlreq/)

- W3C Working Group Note
- Webの技術で日本語組版をするのに<wbr />想定すべき<wbr /><span class="nowrap">要件・慣行</span>を整理した文書
  - 主に JIS X 4051 に基づく

そこにある要件の例：

- 禁則処理（行頭・行末の制約）
- ルビ
- 約物・空き量・詰め など

これらを満たさないと<wbr />
日本語の表現として違和感を感じやすい

</div>
</div>

---

<!-- 縦書きに必要な要件 -->

<div class="wrapper header-and-content">

# 「縦書きができる」とは<wbr />どういうことか

<div style="flex: 1; display: flex; flex-direction: column;">

おなじく、[日本語組版処理の要件](https://www.w3.org/TR/jlreq/)から

- 行方向が縦（縦に組む）であること
- 縦組における文字の向き／縦組用字形の扱い
  - 回転・正立、縦用グリフなど
- 縦組に適した禁則処理・約物処理
  - 約物のぶら下げなど

これらが扱えていないと、<wbr />
日本語の縦組として違和感を感じやすい

</div>
</div>

---

<!-- CSSプロパティ -->

<div class="wrapper header-and-content">

# 関連するCSSプロパティ

<div style="flex: 1; display: flex; flex-direction: column;">

- `writing-mode`
  - 書字方向を指定

- `text-orientation`
  - 縦書き時の文字の向きを指定

- `hanging-punctuation`
  - 句読点のぶら下げ

- `text-spacing-trim`, <wbr />`text-autospace`
  - 約物・空き量・詰めの制御

- `line-break`, `word-break`, `overflow-wrap`
  - 改行規則の制御

日本語だけでなく、<wbr />
CJKやその他の言語も睨んで<wbr />
様々な仕様がつくられた

</div>
</div>

---

<!-- 「Webサイトで縦書きを使う」は叶った -->

<div class="wrapper header-and-content">

<h1 class="upright" style="overflow: visible; font-size: 6cqh;">「Webサイトで縦書きを使う」は<wbr />確かに叶った</h1>

<div style="flex: 1; display: flex; flex-direction: column;">

デザインの中に縦書きを取り入れ、<wbr />`writing-mode`を使っている場面は<wbr />しばしば見られる

縦書きを活用するサービスは<wbr />すでに存在し、欠かせない存在に

しかしいま、<wbr />
「<strong>縦書きの</strong>Webサイトを作る」ことは、<wbr />
「Webサイトを作る」の<strong>外</strong>にある

</div>
</div>

---

<!-- 縦書きのWebサイトを作ることの困難 -->

<div class="wrapper header-and-content">

# 「縦書きのWebサイト」<wbr />を作ることの課題

<div style="flex: 1; display: flex; flex-direction: column;">

直面する大きく三つの関心事

- スクロール
- フォント
- デザイン

</div>
</div>

---

<!-- スクロールの問題 -->

<div class="wrapper header-and-content">

# スクロールの問題

<div style="flex: 1; display: flex; flex-direction: column;">

縦書きのテキストは<wbr />
素朴には横スクロールを引き起こす<wbr />
（しかも左方向！）

しかし、デジタル世界の現状は、<wbr />
下に進むのが前提になっている

- マウスホイールは上下のみが一般的
- 各OSのデザインガイドラインも、<wbr />縦スクロールを推奨している
  - 縦書きは単に想定していない

縦書きテキストの横スクロール閲覧は<wbr />
周辺物の想定と大きく乖離がある

<div style="font-size: 4cqh; color: #666;">
関連する発表：<wbr /><a href="https://slides.berlysia.net/jsconfjp2025-javascript-for-vertical-writing-on-the-web/">縦書きWebの実用を支えるJavaScript
</a>
</div>

</div>
</div>

---

<!-- フォントの問題 -->

<div class="wrapper header-and-content">

# フォントの問題

<div style="flex: 1; display: flex; flex-direction: column;">

向きを伴う文字の扱いに<wbr />一貫性を持つのが難しい

上向き矢印 ↑ はどう見えている？<wbr />
三点リーダ … はどうか？

- 各文字の既定方向の定義
  - Unicodeの[UAX #50](https://www.unicode.org/reports/tr50/)
- 各フォントの縦書きグリフ収録状況
  - 実際の縦書きグリフの内容
- 各レンダラーの実装

これらの要素が複雑に絡み合っている

<div style="font-size: 3.6cqh; color: #666;">
詳細は次を参照：<wbr /><a href="https://blog.nnn.dev/entry/2022/07/01/180000">縦書きHTMLにおける文字の向きはどのように定まるか</a>
</div>

</div>
</div>

---

<!-- デザインの問題 -->

<div class="wrapper header-and-content">

# デザインの問題

<div style="flex: 1; display: flex; flex-direction: column;">

「縦書きのWebサイト」の探究が<wbr />
ほとんど進んでいない

既存のアイデア……

- 横スクロール<ruby><rb>巻物</rb><rt>スクロール</rt></ruby>パターン
  - スクロールの問題が再来

- 縦書きマルチカラムパターン
  - 個人的に推し、商業事例もある
  - だがマルチカラムの仕様が発展途上

- 他にもある？
  - 一度きりの表現と<wbr />サービスに取り入れることには<wbr />大きな隔たりがある

</div>
</div>

---

<div class="wrapper header-and-content">

# ページメディアと<wbr />連続メディア

<div style="flex: 1; display: flex; flex-direction: column;">

電子書籍の世界で取り組まれたのは<wbr />
<strong>ページメディア</strong>としての日本語組版<wbr />
半固定の、区切りあるレイアウトの世界

一方、私たちが日々親しむWebは<wbr />
<strong>連続メディア</strong>の形を取る<wbr />
流動的で可変のレイアウトの世界

この違いが<wbr />
「縦書きのWebサイト」を作ることを<wbr />
より難しくしている

</div>
</div>

---

<!-- ほぼ全ての取り組みが発明になる -->

<div class="wrapper header-and-content">

# ほぼ全ての取り組みが<wbr />「発明」を求められる

<div style="flex: 1; display: flex; flex-direction: column;">

- <strong>参考にできる先行事例が少ない</strong>
- デザインパターンが確立していない
- 技術的な考慮事項もある

選択肢に挙がらない、<wbr />挙がっても軽い気持ちで採られない、<wbr />縦書きを必須とした人が頑張る

だから「縦書きのWebサイト」は<wbr />
まだ「Webサイト」の外にある

</div>
</div>

---

<!-- 追い風：モンゴル文字 -->

<div class="wrapper header-and-content">

# 先駆者の不在に差す光

<div style="flex: 1; display: flex; flex-direction: column;">

<strong>縦書きしかできない</strong>文字<wbr />
モンゴル文字復権のムーブメント

CJK言語は縦横どちらもできるが<wbr />
モンゴル文字は縦書きが必須の<wbr />
横書きに逃げられない環境

「縦書きのWebサイト」の<wbr />
世界が広がることを期待する

</div>
</div>

---

<!-- 「Webサイトを作る」への道 -->

<div class="wrapper header-and-content">

<h1 class="upright" style="overflow: visible; font-size: 6.4cqh">「<del style="color: #777;">縦書きの</del>Webサイトを作る」</h1>

<div style="flex: 1; display: flex; flex-direction: column;">

縦書きは日本語だけの関心ではない<wbr />
Webは縦書きを受け入れた

縦書きを普通に扱えるということは、<wbr />
<strong>Webは書字方向を何ら前提としない</strong><wbr />
ということだ

「縦書きの」という修飾は、いらないはず

</div>
</div>

---

<!-- 日本語と縦横混在 -->

<div class="wrapper header-and-content">

# 日本語の縦横併用を想う

<div style="flex: 1; display: flex; flex-direction: column;">

日本語では、<wbr />
縦書きと横書きを併用することが<wbr />
当たり前に行われている

縦書きとその周辺の対応が進むことは、<wbr />
日本語で当たり前に行われる表現が、<wbr />
Webでもできるように広がること

CSSの能力を向上していくことで、<wbr />
「<del style="color: #777;">縦書きの</del>Webサイトを作る」への<wbr />道が開けていくだろう

その未来の日本語デジタル文書もまた<wbr />縦書きを特別視しないはずだ

</div>
</div>

---

<!-- Writing Modes Level 4 -->

<div class="wrapper header-and-content">

# [Writing Modes Level 4](https://www.w3.org/TR/css-writing-modes-4/)

<div style="flex: 1; display: flex; flex-direction: column;">

現在CR（勧告候補）の段階にあり、<wbr />
縦横混植を想定した内容が含まれている

- 縦横混植時の内在サイズ定義が追加
  - 実装上の問題が報告されている

- 横スクロールの発生を回避する<wbr />自動マルチカラム化の挙動
  - かなり意欲的

課題はまだ多くあるが、火は灯っている

日本語話者の当事者として、<wbr />
縦書きと横書きを併用する当事者として、<wbr />
黙ってみていてはいけない

</div>
</div>

---

<div class="wrapper header-and-content">

# デジタル文書への取り組み

<div style="flex: 1; display: flex; flex-direction: column;">

<figure><img src="@slide/jlreq-d-explainer.png" style="max-width: 70cqw; max-height: 70cqh;" /><figcaption>作成が進む「日本語デジタルテキスト組版の要件」
</figcaption></figure>

</div>

---

<!-- まとめ -->

<div class="wrapper header-and-content">

<h1 class="upright" style="overflow: visible;">Webサイトで縦書きを使う、<wbr />縦書きのWebサイトを作る</h1>

<div style="flex: 1; display: flex; flex-direction: column;">

Webに縦書きは実装され、<wbr />欠かせない存在となっている

しかし、まだ「当たり前」ではない

Web縦書きのさらなる普及、<wbr />
それを「Webサイト」と呼べなければ、<wbr />
日本語デジタル文書の円熟はない

</div>
</div>

---

<!-- 自己紹介 -->

<div class="wrapper header-and-content">

# 誰

<div class="two-column">

<div class="wm-horizontal" style="display: grid; place-items: center;"><div style="text-align: center;"><img src="@slide/berlysia.jpg" style="height: 20cqw; border-radius: 9999px;" /><p style="line-height: 1em">berlysia<br /><span style="font-size: 0.6em">（べるりしあ）</span></p></div></div>

<div>

妄想を現実にする活動をしています

- ドワンゴ教育事業
  - Webフロントエンド<wbr />なんでも屋
  - 縦書きを業務で使っている
- TSKaigi 主催のひとり
  - TSKaigi 2026
  - <span class="tcu-all">5</span>月<span class="tcu-all">22</span>・<span class="tcu-all">23</span>日に<wbr /><span class="nowrap">東京・羽田で開催</span>
- <strong>Webの縦書きに真剣</strong>な一般人

</div>
</div>
</div>

---

<!-- タイトル再掲（縦書き） -->

<div class="wrapper center">

<div style="display: flex; flex-direction: column; inline-size: calc(100cqh - var(--space-wrapper) * 2);">
  <h1 class="upright" style="overflow: visible;">Webサイトで縦書きを使う、<wbr /><del style="color: #777;">縦書きの</del>Webサイトを作る</h1>
  <div style="align-self: end; color: #444;">berlysia / BuriKaigi 2026</div>
</div>

</div>
