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
    column-gap: 2rem;
  }
  @container style(--slide-writing-mode: vertical-rl) or style(--slide-writing-mode: vertical-lr) {
    display: flex;
    flex-direction: column;
    justify-content: space-evenly;
  }
}

.upright {
  text-orientation: upright;
}

.tcu-all {
  text-combine-upright: all;
}

blockquote {
  margin: 0;
  padding-block: 0.4em;
  border-inline-start: 8px solid #666;
  padding-inline-start: 16px;
  background-color: #eee;
}

figure {
  writing-mode: horizontal-tb;
  margin: auto;
  padding: 2rem;
}

figcaption {
  text-align: center;
  font-size: 2rem;
  color: #888;
}

.two-column ul {
  break-inside: avoid;
}

* {
    font-family: YakuHanRPs, "Hiragino Sans", "Hiragino Kaku Gothic ProN", "Yu Gothic", "Noto Sans JP", sans-serif;
}

h1, h2, h3 {
  text-wrap: pretty;
}

a:any-link {
  text-decoration: underline;
  text-underline-position: left;
  color: #22c;
}

.highlight-box {
  background-color: #f0f4ff;
  padding: 2rem;
  margin-block: 0.5rem;
  background-color: #ccf;
  border-radius: 2rem;
}

.slide-content li > p {
    margin: 0;
}
</style>

<div class="wrapper" style="display: grid; place-items: center;">

<svg style="position: absolute; top: 0; left: 0; width: 8cqh; height: 8cqh;" viewBox="0 0 24 24" fill="currentColor">
  <path d="M7 7L17 7L17 9L10.41 9L17 15.59L15.59 17L9 10.41L9 17L7 17Z"/>
</svg>
<svg style="position: absolute; top: 0; right: 0; width: 8cqh; height: 8cqh;" viewBox="0 0 24 24" fill="currentColor">
  <path d="M17 7L7 7L7 9L13.59 9L7 15.59L8.41 17L15 10.41L15 17L17 17Z"/>
</svg>
<svg style="position: absolute; bottom: 0; left: 0; width: 8cqh; height: 8cqh;" viewBox="0 0 24 24" fill="currentColor">
  <path d="M7 17L17 17L17 15L10.41 15L17 8.41L15.59 7L9 13.59L9 7L7 7Z"/>
</svg>
<svg style="position: absolute; bottom: 0; right: 0; width: 8cqh; height: 8cqh;" viewBox="0 0 24 24" fill="currentColor">
  <path d="M17 17L7 17L7 15L13.59 15L7 8.41L8.41 7L15 13.59L15 7L17 7Z"/>
</svg>
<div class="wm-horizontal">動作確認</div>

</div>

---

<!-- タイトルスライド（横書き） -->

<div class="wrapper center wm-horizontal">

<div style="display: flex; flex-direction: column; gap: 1rem;">
  <h1>Webサイトで縦書きを使う、<br />縦書きのWebサイトを作る</h1>
  <div style="align-self: end; color: #444;">berlysia / BuriKaigi 2026</div>
</div>

</div>

---

<!-- 縦書きをする言語（横書き） -->

<div class="wrapper header-and-content wm-horizontal">

# 縦書きをする言語

<div style="flex: 1; display: flex; flex-direction: column; justify-content: center; gap: 2rem;">

- ＣＪＫのイメージが強いだろう

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

<div style="flex: 1; display: flex; flex-direction: column; justify-content: center; gap: 2rem;">

- ＣＪＫのイメージが強いだろう

  - 中国語・日本語・韓国語

- 縦書きの活用度合いには差がある

  - 日本語が一番<br />アクティブに縦書きを使っている

- これらの言語の面白いところ
  - 急に縦書きになっても<br />横書きになっても<br />問題なく読める

</div>
</div>

---

<!-- タイトル再掲（縦書き） -->

<div class="wrapper center">

<div style="display: flex; flex-direction: column;">
  <h1 class="upright" style="overflow: visible; font-size: 3.2rem">Webサイトで縦書きを使う、<br />縦書きのWebサイトを作る</h1>
  <div style="align-self: end; color: #444;">berlysia / BuriKaigi 2026</div>
</div>

</div>

---

<!-- 日本語のなかの縦書き -->

<div class="wrapper header-and-content">

# 日本語のなかの縦書き

<div style="flex: 1; display: flex; flex-direction: column; justify-content: center; gap: 2rem;">

ソフトウェアの世界で生きていると<br />
横書き中心のように感じるが……

現代の日本語表記は：

<div class="highlight-box">左横書きを第一選択肢としながら、<br />右縦書きを必要に応じて併用している</div>

<div style="font-size: 0.8em; color: #666;">
参考：屋名池誠『横書き登場 日本語表記の近代』
</div>

</div>
</div>

---

<!-- 電子書籍とWebの縦書き -->

<div class="wrapper header-and-content">

# 電子書籍とＷｅｂの縦書き

<div style="flex: 1; display: flex; flex-direction: column; justify-content: center; gap: 2rem;">

- 書籍は伝統的に縦書きが主流

  - 電子書籍でも当然、<br />縦書きの強い要求・需要がある

- 二〇一一年（もう<span class="tcu-all">15</span>年前！）

  - ＥＰＵＢ３の成立
  - 真の縦書き電子書籍対応が叶う

- ＥＰＵＢ３は<br />ＨＴＭＬとＣＳＳがベース
  - Ｗｅｂの縦書きやルビの表現は<br />電子書籍の成立と密接に関連する

<div style="font-size: 0.8em; color: #666;">
参考：小林龍生『ＥＰＵＢ戦記』
</div>

</div>
</div>

---

<!-- Webで縦書きが使われて10年 -->

<div class="wrapper header-and-content">

# Ｗｅｂで縦書きが使われて<br /><span class="tcu-all">10</span>年が経つ

<div style="flex: 1; display: flex; flex-direction: column; justify-content: center; gap: 2rem;">

先人の努力に深く感謝しつつ、<br />
今日は歴史の話はしない

実際に活用されている場面：

- 小説投稿サイト
  - ｐｉｘｉｖ小説
  - カクヨム
- 教育系サービス
  - 例）ＺＥＮ Ｓｔｕｄｙ
- 他、ＬＰ、ティザーサイト類
- 個人サイトにも例がある

</div>
</div>

---

<!-- 「縦書きができる」とはどういうことか -->

<div class="wrapper header-and-content">

# 「日本語が使える」とは<br />どういうことか

<div style="flex: 1; display: flex; flex-direction: column; justify-content: center; gap: 2rem;">

[日本語組版処理の要件](https://www.w3.org/TR/jlreq/)

- W3C Working Group Note
- Ｗｅｂの技術で日本語組版をするのに<br />想定すべき要件・慣行を整理した文書
  - 主に JIS X 4051 に基づく

そこにある要件の例：

- 禁則処理（行頭・行末の制約）
- ルビ
- 約物・空き量・詰め など

これらを満たさないと<br />
日本語の表現として違和感を感じやすい

</div>
</div>

---

<!-- 縦書きに必要な要件 -->

<div class="wrapper header-and-content">

# 「縦書きができる」とは<br />どういうことか

<div style="flex: 1; display: flex; flex-direction: column; justify-content: center; gap: 2rem;">

おなじく、[日本語組版処理の要件](https://www.w3.org/TR/jlreq/)から

- 行方向が縦（縦に組む）であること
- 縦組における文字の向き／縦組用字形の扱い
  - 回転・正立、縦用グリフ等
- 縦組に適した禁則処理・約物処理

これらが扱えていないと、<br />
日本語の縦組として違和感を感じやすい

</div>
</div>

---

<!-- CSSプロパティ -->

<div class="wrapper header-and-content">

# 関連するＣＳＳプロパティ

<div style="flex: 1; display: flex; flex-direction: column; justify-content: center; gap: 2rem;">

- `writing-mode`

  - 書字方向を指定

- `text-orientation`

  - 縦書き時の文字の向きを指定

- `hanging-punctuation`

  - 句読点のぶら下げ

- `text-spacing-trim`, <br />`text-autospace`

  - 約物・空き量・詰めの制御

- `line-break`, `word-break`, `overflow-wrap`
  - 改行規則の制御

日本語だけでなく、<br />
ＣＪＫやその他の言語も睨んで<br />
様々な仕様がつくられた

</div>
</div>

---

<!-- 「Webサイトで縦書きを使う」は叶った -->

<div class="wrapper header-and-content">

<h1 style="font-size: 3rem">「Ｗｅｂサイトで縦書きを使う」は<br />確かに叶った</h1>

<div style="flex: 1; display: flex; flex-direction: column; justify-content: center; gap: 2rem;">

デザインの中に縦書きを取り入れ、<br />`writing-mode`を使っている場面は<br />しばしば見られる

縦書きを活用するサービスは<br />すでに存在し、欠かせない存在に

<p style="overflow: visible; white-space: nowrap">しかしいま、<br />
「<strong>縦書きの</strong>Ｗｅｂサイトを作る」ことは、<br />
「Ｗｅｂサイトを作る」の<strong>外</strong>にある</p>

</div>
</div>

---

<!-- 縦書きのWebサイトを作ることの困難 -->

<div class="wrapper header-and-content">

# 「縦書きのＷｅｂサイト」<br />を作ることの課題

<div style="flex: 1; display: flex; flex-direction: column; justify-content: center; gap: 2rem;">

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

<div style="flex: 1; display: flex; flex-direction: column; justify-content: center; gap: 2rem;">

縦書きのテキストは<br />
素朴には横スクロールを引き起こす<br />
（しかも左方向！）

しかし、デジタル世界の現状は、<br />
下に進むのが前提になっている

- マウスホイールは上下のみが一般的
- 各ＯＳのデザインガイドラインも、<br />縦スクロールを推奨している

  - 縦書きは単に想定していない

縦書きテキストの横スクロール閲覧は<br />
周辺物の想定と大きく乖離がある

<div style="font-size: 0.7em; color: #666;">
関連する発表：<br /><a href="https://slides.berlysia.net/jsconfjp2025-javascript-for-vertical-writing-on-the-web/">縦書きWebの実用を支えるJavaScript
</a>
</div>

</div>
</div>

---

<!-- フォントの問題 -->

<div class="wrapper header-and-content">

# フォントの問題

<div style="flex: 1; display: flex; flex-direction: column; justify-content: center; gap: 2rem;">

向きを伴う文字の扱いに<br />一貫性を持つのが難しい

上向き矢印 ↑ はどう見えている？<br />
三点リーダ … はどうか？

- 各文字の既定方向の定義
  - Unicode の [UAX #50](https://www.unicode.org/reports/tr50/)
- 各フォントの縦書きグリフ収録状況
  - 実際の縦書きグリフの内容
- 各レンダラーの実装

これらの要素が複雑に絡み合っている

<div style="font-size: 0.7em; color: #666;">
詳細は次を参照：<br /><a href="https://blog.nnn.dev/entry/2022/07/01/180000">縦書きHTMLにおける文字の向きはどのように定まるか</a>
</div>

</div>
</div>

---

<!-- デザインの問題 -->

<div class="wrapper header-and-content">

# デザインの問題

<div style="flex: 1; display: flex; flex-direction: column; justify-content: center; gap: 2rem;">

「縦書きのＷｅｂサイト」の探究が<br />
ほとんど進んでいない

既存のアイデア……

- 横スクロール<ruby><rb>巻物</rb><rt>スクロール</rt></ruby>パターン

  - スクロールの問題が再来

- 縦書きマルチカラムパターン

  - 個人的に推し、商業事例もある
  - だがマルチカラムの仕様が発展途上

- 他にもある？
  - 一度きりの表現と<br />サービスに取り入れることには<br />大きな隔たりがある

</div>
</div>

---

<div class="wrapper header-and-content">

# ページメディアと<br />連続メディア

<div style="flex: 1; display: flex; flex-direction: column; justify-content: center; gap: 2rem;">

電子書籍の世界で取り組まれたのは<br />
<strong>ページメディア</strong>としての日本語組版<br />
半固定の、区切りあるレイアウトの世界

一方、私たちが日々親しむＷｅｂは<br />
<strong>連続メディア</strong>の形を取る<br />
流動的で可変のレイアウトの世界

この違いが<br />
「縦書きのＷｅｂサイト」を作ることを<br />
より難しくしている

</div>
</div>

---

<!-- ほぼ全ての取り組みが発明になる -->

<div class="wrapper header-and-content">

# ほぼ全ての取り組みが<br />「発明」を求められる

<div style="flex: 1; display: flex; flex-direction: column; justify-content: center; gap: 2rem;">

- <strong>参考にできる先行事例が少ない</strong>
- デザインパターンが確立していない
- 技術的な考慮事項もある

選択肢に挙がらない、<br />挙がっても軽い気持ちで採られない、<br />縦書きを必須とした人が頑張る

だから「縦書きのＷｅｂサイト」は<br />
まだ「Ｗｅｂサイト」の外にある

</div>
</div>

---

<!-- 追い風：モンゴル文字 -->

<div class="wrapper header-and-content">

# 先駆者の不在に差す光

<div style="flex: 1; display: flex; flex-direction: column; justify-content: center; gap: 2rem;">

<strong>縦書きしかできない</strong>文字<br />
モンゴル文字復権のムーブメント

ＣＪＫ言語は縦横どちらもできるが<br />
モンゴル文字は縦書きが必須の<br />
横書きに逃げられない環境

「縦書きのＷｅｂサイト」の<br />
世界が広がることを期待する

</div>
</div>

---

<!-- 「Webサイトを作る」への道 -->

<div class="wrapper header-and-content">

<h1 class="upright" style="overflow: visible; font-size: 3.2rem">「<del style="color: #555;">縦書きの</del>Ｗｅｂサイトを作る」</h1>

<div style="flex: 1; display: flex; flex-direction: column; justify-content: center; gap: 2rem;">

縦書きは日本語だけの関心ではない<br />
Ｗｅｂは縦書きを受け入れた

縦書きを普通に扱えるということは、<br />
<strong>Ｗｅｂは書字方向を何ら前提としない</strong><br />
ということだ

「縦書きの」という修飾は、いらないはず

</div>
</div>

---

<!-- 日本語と縦横混在 -->

<div class="wrapper header-and-content">

# 日本語の縦横併用を想う

<div style="flex: 1; display: flex; flex-direction: column; justify-content: center; gap: 2rem;">

日本語では、<br />
縦書きと横書きを併用することが<br />
当たり前に行われている

縦書きとその周辺の対応が進むことは、<br />
日本語で当たり前に行われる表現が、<br />
Ｗｅｂでもできるように広がること

ＣＳＳの能力を向上していくことで、<br />
「<del style="color: #555;">縦書きの</del>Ｗｅｂサイトを作る」への<br />道が開けていくだろう

その未来の日本語デジタル文書もまた<br />縦書きを特別視しないはずだ

</div>
</div>

---

<!-- Writing Modes Level 4 -->

<div class="wrapper header-and-content">

# [Writing Modes Level 4](https://www.w3.org/TR/css-writing-modes-4/)

<div style="flex: 1; display: flex; flex-direction: column; justify-content: center; gap: 2rem;">

現在ＣＲ（勧告候補）の段階にあり、<br />
縦横混植を想定した内容が含まれている

- 縦横混植時の内在サイズ定義が追加

  - 実装上の問題が報告されている

- 横スクロールの発生を回避する<br />自動マルチカラム化の挙動
  - かなり意欲的

課題はまだ多くあるが、火は灯っている

日本語話者の当事者として<br />
縦書きと横書きを併用する当事者として<br />
黙ってみていてはいけない

</div>
</div>

---

<!-- まとめ -->

<div class="wrapper header-and-content">

<h1 class="upright" style="overflow: visible; font-size: 3.3rem">Webサイトで縦書きを使う、<br />縦書きのWebサイトを作る</h1>

<div style="flex: 1; display: flex; flex-direction: column; justify-content: center; gap: 2rem;">

Ｗｅｂに縦書きは実装され、<br />欠かせない存在となっている

しかし、まだ「当たり前」ではない

Ｗｅｂ縦書きのさらなる普及、<br />
それを「Ｗｅｂサイト」と呼べなければ、<br />
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
  - Ｗｅｂフロントエンドなんでも屋
  - 縦書きを業務で使っている
- ＴＳＫａｉｇｉ主催のひとり
  - ＴＳＫａｉｇｉ ２０２６<br />５月<span class="tcu-all">22</span>・<span class="tcu-all">23</span>日に東京・羽田で開催
- <strong>Ｗｅｂの縦書きに真剣</strong>な一般人

</div>
</div>
</div>

---

<!-- タイトル再掲（縦書き） -->

<div class="wrapper center">

<div style="display: flex; flex-direction: column;">
  <h1 class="upright" style="overflow: visible; font-size: 3.2rem">Webサイトで縦書きを使う、<br /><del style="color: #555;">縦書きの</del>Webサイトを作る</h1>
  <div style="align-self: end; color: #444;">berlysia / BuriKaigi 2026</div>
</div>

</div>
