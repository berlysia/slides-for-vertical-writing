---
title: 縦書きWebの現在地概略
description: 縦書きWebは、もうある。なのに、まだ珍しい。その足りなさがどこにあるのかを、このあと順にほどいていく
author: berlysia
date: 2026-04-16
---

<link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/yakuhanjp@4.1.1/dist/css/yakuhanrp_s.css">

<style>
.upright {
  text-orientation: upright;
}

.highlight-box {
  inline-size: fit-content;
  margin-inline: auto;
  padding: 3cqh 4cqh;
  margin-block: 2cqh;
  background-color: #ccf;
  border-radius: 2cqh;
}

* {
    font-family: YakuHanRPs, "Hiragino Sans", "Hiragino Kaku Gothic ProN", "Yu Gothic", "Noto Sans JP", sans-serif;
}

.wrapper {
  word-break: keep-all;
  overflow-wrap: normal;
}

.slide-content li > p {
    margin: 0;
}

.slide-content ul {
  font-size: 5cqh;
  line-height: 1.9;
}

.caption {
  font-size: 3.8cqh;
  color: #666;
  margin-block-start: 2cqh;
}
</style>

<!-- 1: タイトル -->

<div class="wrapper center">

<div style="display: flex; flex-direction: column; inline-size: calc(100cqh - var(--space-wrapper) * 2); gap: 4cqh;">
  <h1 class="upright" style="overflow: visible;">縦書きWebの現在地概略</h1>
  <div style="font-size: 4cqh; color: #666; text-align: end;">#縦書き_study / berlysia</div>
</div>

</div>

---

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

<!-- Webで縦書きが使われて10年 -->

<div class="wrapper header-and-content">

# Webで縦書きが使われて<wbr /><span class="tcu-all">10</span>年が経つ

<div style="flex: 1; display: flex; flex-direction: column;">

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

<!-- 電子書籍とWebの縦書き -->

<div class="wrapper header-and-content">

# 電子書籍とWebの縦書き

<div style="flex: 1; display: flex; flex-direction: column;">

- 書籍は伝統的に縦書きが主流
  - 日本語電子書籍でも当然、<wbr />縦書きの強い要求・需要があった

- EPUB3で縦書き対応が実現
  - 2011年（もう<span class="tcu-all">15</span>年前！）

- EPUB3のための要求整理が<wbr />CSSの進化を後押し
  - 同じく縦書きを必要とする<wbr />中国語圏の支援も大きい

<div style="font-size: 4cqh; color: #666;">
参考：小林龍生『EPUB戦記』
</div>

</div>
</div>

---

<!-- 3: 要件から実装までの大きな流れ（循環） -->

<div class="wrapper header-and-content">

# 需要が実装に繋がっていった

<div style="flex: 1; display: flex; flex-direction: column;">

<figure style="margin: 0; display: flex; flex-direction: column; align-items: center;">
<img src="@slide/cycle.svg" alt="循環図：実需→要件整理→仕様→実装→利用→実需。途中にi18n WG/JLTF、CSSWG/WHATWG HTML、ブラウザ実装のプレイヤーが薄く配置されている" style="height: 80cqh;" />
<figcaption class="caption">利用者の実需が、<wbr />要件整理と仕様と実装を回す</figcaption>
</figure>

</div>
</div>

---

<!-- 4: 流れはある。だが足りない -->

<div class="wrapper header-and-content">

# それから<span class="tcu-all">10</span>年、<span class="tcu-all">15</span>年

<div style="flex: 1; display: flex; flex-direction: column;">

<div class="highlight-box" style="text-align: center; font-weight: bold;">「縦書きのあるWebサイト」は、<wbr />身近になりましたか？</div>
<div class="highlight-box" style="text-align: center; font-weight: bold;">「縦書きのWebサイト」は、<wbr />身近になりましたか？</div>

<div style="text-align: end;">……あるにはあるが、珍しいはず</div>

</div>
</div>

---

<!-- 6: 今日はここまでほどく -->

<div class="wrapper header-and-content">

# 

<div style="flex: 1; display: flex; flex-direction: column;">

- Webの世界には、縦書きがある
- だが<span class="tcu-all">10</span>年経っても、珍しいままだ
- どうしたら、当たり前になれる？

</div>
</div>

---


<div class="wrapper header-and-content" style="padding: 2cqh;">

# 

<div style="flex: 1; display: flex; flex-direction: column; ">

- <span style="color: #666">縦書きWebの現在地概略</span>
- Mastodonにおける縦書きの諸課題
- 中国語、韓国語、モンゴル語の縦書き
- 縦書きWebを身近なものにするために

</div>
</div>

---


<div class="wrapper header-and-content" style="padding: 2cqh;">

# 補足：問題領域の確認

<div style="flex: 1; display: flex; flex-direction: column; ">

- **CSS Writing Modes**
  - **書字方向 `writing-mode`**
    - 主にここ＋レイアウトの話
  - グリフ方向 `text-orientation`
  - `direction` / `unicode-bidi` 拡張
    - でてこない
- CSS Text
  - 改行の禁則 `line-break`
  - 単語分割 `word-break`
  - ハイフネーション `hyphens`
  - 揃え、字間、行間、ぶら下げなど
    - でてこない

</div>
</div>
