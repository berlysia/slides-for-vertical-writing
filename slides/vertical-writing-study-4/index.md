---
title: "縦書きWebを身近なものにするために - #縦書き_study"
description: 仕様の不足を嘆く段階から、表現を発明して実需を作る段階へ
author: berlysia
date: 2026-04-17
---

<link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/yakuhanjp@4.1.1/dist/css/yakuhanrp_s.css">


<script>
  (() => {
    const cells = document.querySelectorAll('.gradient-cell');
    cells.forEach(cell => {
      cell.addEventListener('click', () => {
        cell.dataset.selected = cell.dataset.selected === 'true' ? 'false' : 'true';
      });
    });
  })();
</script>

<style>
.gradient-cell[data-selected="true"] {
  background-color: #ccf;
  border-color: #88a;
  color: #333;
}

.upright {
  text-orientation: upright;
}

.tcu-all {
  text-combine-upright: all;
}

.nowrap {
  white-space: nowrap;
}

* {
    font-family: YakuHanRPs, "Hiragino Sans", "Hiragino Kaku Gothic ProN", "Yu Gothic", "Noto Sans JP", sans-serif;
}

.highlight-box {
  inline-size: fit-content;
  margin-inline: auto;
  padding: 3cqh 4cqh;
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

.gradient-row {
  display: flex;
  flex-direction: column;
  gap: 1.5cqw;
  margin-block: 2cqh;
}

.gradient-cell {
  flex: 1;
  padding: 2cqh 1.5cqw;
  border: 1px solid #ccc;
  border-radius: 1cqh;
  font-size: 3.5cqh;
  text-align: center;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  gap: 1cqh;
  background-color: #fafafa;
  flex-basis: 8em;

  &.vertical-multicol-feature {
    background-color: #cfc;
    border-color: #8a8;
  }

  &.horizontal-scroll-feature {
    background-color: #fcc;
    border-color: #a88;
  }

}

.gradient-cell strong {
  font-size: 4cqh;
}

.layer-list {
  display: grid;
  grid-template-row: repeat(4, 1fr);
  gap: 2cqw;
  margin-block: 2cqh;
}

.layer-card {
  padding: 3cqh 1.5cqw;
  border: 1px solid #bbb;
  border-radius: 1.5cqh;
  background-color: #f7f7ff;
  text-align: center;
  font-size: 4.5cqh;
  font-weight: bold;
}

a:any-link {
  color: #06c;
  text-underline-position: under right !important;
}
a:any-link:lang(en) {
  color: #06c;
  text-underline-position: under left !important;
}

</style>

<!-- 1: タイトル -->

<div class="wrapper center">

<div style="display: flex; flex-direction: column; gap: 4cqh; inline-size: calc(100cqh - var(--space-wrapper) * 2);">
  <h1 class="upright" style="overflow: visible;">縦書きWebを<wbr />身近なものにするために</h1>
  <div style="font-size: 4cqh; color: #666; text-align: end;">#縦書き_study / berlysia</div>
</div>

</div>

---

<!-- 4: 二択ではない -->

<div class="wrapper header-and-content">

# 縦書きと横書きの関係は

<div style="flex: 1; display: flex; flex-direction: column; justify-content: center;">

<div class="gradient-row">
  <div class="gradient-cell wm-horizontal"><strong>横書き</strong></div>
  <div class="gradient-cell wm-vertical"><strong>縦書き</strong></div>
</div>

</div>
</div>

---

<!-- 4: 二択ではない -->

<div class="wrapper header-and-content">

# 縦書きと横書きの関係は<br />グラデーションである

<div style="flex: 1; display: flex; flex-direction: column; justify-content: center;">

<div class="gradient-row">
  <button class="gradient-cell wm-horizontal"><strong>純横書き</strong></button>
  <button class="gradient-cell wm-horizontal"><strong>横書き主体</strong><strong class="wm-vertical" style="">縦書き部品</strong></button>
  <button class="gradient-cell wm-vertical"><strong>縦書き主体</strong><strong class="wm-horizontal" style="inline-size: fit-content;">横書き部品</strong></button>
  <button class="gradient-cell wm-vertical"><strong>純縦書き</strong></button>
</div>

</div>
</div>

---

<!-- 2: 素朴に持ち込むと壊れる -->

<!-- 縦書きの長いテキストは素朴には横スクロールを引き起こします。私たちの主なデバイスは縦スクロールですから、もうここから合わないんですね -->
<!-- だから扱いにくくて、幅が足りなくなると横書きに落とされてしまったりする メインを張らせてもらいにくい -->


<div class="wrapper header-and-content">

# 縦書きを素朴に持ち込むと<br />横スクロールになる

<div style="flex: 1; display: flex; flex-direction: column;">

- 縦スクロール前提のデバイスと不一致
  - マウスホイール、キーボード
- デザイン上も既存資産と乖離する
  - 横スクロールを念頭に考える必要
  - 縦書きのUIパーツの典型が不足

<figure style="margin-left: 2cqw; margin-right: 0;"><img src="@slide/overflow-tategaki.png" alt="コンテンツの流れとビューポートの関係：縦書き（横スクロール）" style="max-width: 20cqw; max-height: 45cqh;" /><img src="@slide/overflow-yokogaki.png" alt="コンテンツの流れとビューポートの関係：横書き（縦スクロール）" style="max-width: 20cqw; max-height: 45cqh;" /><figcaption>コンテンツの流れとビューポートの関係</figcaption></figure>

<div style=" font-size: 4cqh; color: #666;">
結果として縦書きは特設や演出にとどまり、<wbr />本文級で使うには覚悟が要る
</div>

</div>
</div>

---

<!-- 6: 接続だけが正解ではない -->

<div class="wrapper header-and-content">

# 縦スクロール前提の世界で<br />横スクロールを開拓する

<div style="flex: 1; display: flex; flex-direction: column; justify-content: center;">

- 横スクロールは入力デバイス不和
  - 自由度1
    - マウスホイール
    - シフト＋ホイール
      - 右縦書きだと方向が体感逆
    - PgUp/PgDown/Home/End
  - 自由度2
    - タッチスクリーンのスワイプ
    - トラックパッドのジェスチャー

- ヒステリシス付き方向変換
  - 自由度1なら縦成分を変換
    - 慣性がとれない……
  - 自由度2ならパススルー

- 仕様的にも答えが見つからない
  - なんとかして横スクロールを<wbr />一級市民にした方が早そう
    - <strong>使って困る人を増やしたい</strong>

</div>
</div>

---

<!-- 3: 突破口 -->

<div class="wrapper header-and-content">

# 縦組みマルチカラムで<br />縦スクロールに順応

<div style="flex: 1; display: flex; flex-direction: column;">

- 縦書きの段を並べ、<wbr />段が縦に積み重なるレイアウト <a href="https://blog.berlysia.net/entry/2025-04-06-accepting-the-mihatenu-yume" target="_blank">例</a>
  - 縦スクロールで読み進められる
  - 既存資産とも合流できる

<figure style="margin-left: -4cqw; margin-right: -4cqw;"><img src="@slide/overflow-tategaki.png" alt="コンテンツの流れとビューポートの関係：縦書き（横スクロール）" style="max-width: 20cqw; max-height: 45cqh;" /><img src="@slide/overflow-yokogaki.png" alt="コンテンツの流れとビューポートの関係：横書き（縦スクロール）" style="max-width: 20cqw; max-height: 45cqh;" /><img src="@slide/overflow-tategaki-multicol.png" alt="コンテンツの流れとビューポートの関係：縦書きマルチカラム（縦スクロール）" style="max-width: 20cqw; max-height: 45cqh;" /><figcaption>縦組みマルチカラムと縦書き横書きの比較<br />縦書きかつ縦スクロールが叶うことがわかる</figcaption></figure>

</div>
</div>

---

<!-- 4: 二択ではない -->

<div class="wrapper header-and-content">

# 縦書きと横書きの関係は<br />グラデーションである（再掲

<div style="flex: 1; display: flex; flex-direction: column; justify-content: center;">

<div class="gradient-row">
  <button class="gradient-cell wm-horizontal"><strong>純横書き</strong></button>
  <button class="gradient-cell wm-horizontal"><strong>横書き主体</strong><strong class="wm-vertical" style="">縦書き部品</strong></button>
  <button class="gradient-cell wm-vertical"><strong>縦書き主体</strong><strong class="wm-horizontal" style="inline-size: fit-content;">横書き部品</strong></button>
  <button class="gradient-cell wm-vertical"><strong>純縦書き</strong></button>
</div>

</div>
</div>

---

<!-- 8: 役割は対称ではない -->

<div class="wrapper header-and-content">

# 縦横混合はCJKだけか？

<div style="flex: 1; display: flex; flex-direction: column; justify-content: center;">

- 欧文、アラビア語
  - → 純横書き？
- モンゴル文字
  - → 純縦書き？
- CJK
  - → 純縦書き＋縦横混用＋純横書き？

</div>
</div>

---

<!-- 9: 翻訳・多言語対応（デモ） -->

<div class="wrapper header-and-content">

## 翻訳・多言語対応にも応用しうる

<div style="flex: 1; display: flex; flex-direction: column;">

<div style="font-size: 5cqh; margin-block: 2cqh;">縦書きのコンテンツを<wbr />横書き言語に翻訳すると、<wbr />読みやすさが大きく損なわれる</div>

<div style="display: flex; flex-direction: row; gap: 1cqh; margin-block: 1cqh; overflow-wrap: anywhere; word-break: normal; line-break: strict;">
<div style="writing-mode: vertical-rl; font-size: 2cqh; line-height: 1.6; border: 1px solid #ccc; padding: 1cqh; height: 45cqh;"><p>日本語の縦書き本文はこのように自然に読める。段落が続いても違和感がない。文章の流れに沿って視線が上から下へ移動する。</p><p>日本語の縦書き本文はこのように自然に読める。段落が続いても違和感がない。文章の流れに沿って視線が上から下へ移動する。</p></div>
<div style="writing-mode: vertical-rl; font-size: 2cqh; line-height: 1.6; border: 1px solid #ccc; padding: 1cqh; height: 45cqh;"><p>English text in vertical writing becomes very difficult to read as a long-form content. The eyes struggle to follow the flow of words arranged vertically.</p><p>English text in vertical writing becomes very difficult to read as a long-form content. The eyes struggle to follow the flow of words arranged vertically.</p></div>
</div>

<div style="font-size: 5cqh; margin-block: 2cqh;">縦組みマルチカラムで構成していれば<br />横書きとレイアウト構造を共有できる</div>

<div style="display: flex; flex-direction: column; gap: 1cqw; justify-content: center; margin-block: 1cqh; overflow-wrap: anywhere; word-break: normal; line-break: strict;">
<div style="writing-mode: vertical-rl; font-size: 2cqh; line-height: 1.6; border: 1px solid #ccc; padding: 1cqh; column-width: 28cqh; column-fill: auto; width: 14cqw; height: 80cqh;"><p>日本語の縦書き本文はこのように自然に読める。段落が続いても違和感がない。文章の流れに沿って視線が上から下へ移動する。</p><p>日本語の縦書き本文はこのように自然に読める。段落が続いても違和感がない。文章の流れに沿って視線が上から下へ移動する。</p></div>
<div style="writing-mode: horizontal-tb; font-size: 2cqh; line-height: 1.6; border: 1px solid #ccc; padding: 1cqh; width: 14cqw; height: 80cqh;"><p>English text reads naturally in this layout. The page structure is preserved even though the writing direction has changed entirely.</p><p>English text reads naturally in this layout. The page structure is preserved even though the writing direction has changed entirely.</p></div>
</div>

<div style="margin-block: 1cqh; text-align: end; color: #666;">※横スクロール右縦書き→横書きは困難<br />左縦書き→横書きならば素直に合う</div>

</div>

---

<!-- 4: 二択ではない -->

<div class="wrapper header-and-content">

# 縦書き横書き×スクロール

<div style="flex: 1; display: flex; flex-direction: column; justify-content: center;">

<div class="gradient-row">
  <div style="display: flex; flex-direction: row; gap: 2cqh;">
  <button class="gradient-cell wm-horizontal horizontal-scroll-feature"><strong>純横書き<br />横スクロール</strong></button>
  <button class="gradient-cell wm-horizontal"><strong>純横書き</strong><strong class="wm-vertical">縦スクロール</strong></button>
  </div>
  <div style="display: flex; flex-direction: row; gap: 2cqh;">
  <button class="gradient-cell wm-horizontal horizontal-scroll-feature"><strong>横書き主体<br />横スクロール</strong><strong class="wm-vertical">縦書き部品</strong></button>
  <button class="gradient-cell wm-horizontal"><strong>横書き主体</strong><strong class="wm-vertical">縦スクロール<br />縦書き部品</strong></button>
  </div>
  <div style="display: flex; flex-direction: row; gap: 2cqh;">
  <button class="gradient-cell wm-vertical horizontal-scroll-feature"><strong>縦書き主体</strong><strong class="wm-horizontal" style="inline-size: fit-content;">横書き部品<br />横スクロール</strong></button>
  <button class="gradient-cell wm-vertical vertical-multicol-feature"><strong>縦書き主体<br />縦スクロール</strong><strong class="wm-horizontal" style="inline-size: fit-content;">横書き部品</strong></button>
  </div>
  <div style="display: flex; flex-direction: row; gap: 2cqh;">
  <button class="gradient-cell wm-vertical horizontal-scroll-feature"><strong>純縦書き</strong><strong class="wm-horizontal" style="inline-size: fit-content;">横スクロール</strong></button>
  <button class="gradient-cell wm-vertical vertical-multicol-feature"><strong>純縦書き<br />縦スクロール</strong></button>
  </div>
</div>

</div>
</div>

---

<!-- 5: 考慮点は1つではない -->

<div class="wrapper header-and-content">

# 仕様は最低限存在している<br />「面倒だけどできる」の状態

<div style="flex: 1; display: flex; flex-direction: column; justify-content: center;">

- `writing-mode` は普及している

- 横スクロールを扱いやすくすること
  - スクロール自由度識別
  - 方向指定・変換
    - 関連Issueあるはず

- マルチカラムを扱いやすくすること
  - 固定カラム幅指定が想定されない
  - `inline-size: auto;` の寸法問題
    - <a href="https://github.com/w3c/csswg-drafts/issues/13665" target="_blank" lang="en">w3c/csswg-drafts#13665</a>

実際に困っている当事者として、必要性を訴えていきたい

**当事者を増やしたい**

</div>
</div>

---

<!-- 4: 流れはある。だが足りない -->

<div class="wrapper header-and-content">

# しかし当事者が少ない（再掲

<div style="flex: 1; display: flex; flex-direction: column;">

あれから<span class="tcu-all">10</span>年、<span class="tcu-all">15</span>年

<div class="highlight-box" style="text-align: center; font-weight: bold;">「縦書きのあるWebサイト」は、<wbr />身近になりましたか？</div>
<div class="highlight-box" style="text-align: center; font-weight: bold;">「縦書きのWebサイト」は、<wbr />身近になりましたか？</div>

<div style="text-align: end;">……あるにはあるが、珍しいはず</div>

</div>
</div>

---

<!-- 12: 循環構造（図メイン） -->

<div class="wrapper header-and-content">

# 技術面の課題だけではない

<div style="flex: 1; display: flex; flex-direction: column;">

<div style="font-size: 4cqh;">

- 縦書きのWebサイトの**イメージがない**
- だからコンテンツが生まれない
- だから実需がない
- だから仕様が成熟しない
- だから道具が整わない
- だからイメージがもてない

</div>

循環構造がある。どこかを断たなければならない

<figure style="margin-left: 0; margin-right: -4cqw"><img src="@slide/cycle.svg" alt="循環構造の円環図：イメージがない→コンテンツが生まれない→実需がない→仕様が成熟しない→道具が整わない→イメージがない、の循環と断つポイント" style="width: 50cqw; max-height: 100cqh;" /></figure>

</div>
</div>

---

<!-- 11: どこから断てるか -->

<div class="wrapper header-and-content">

# どこから断てるか

<div style="flex: 1; display: flex; flex-direction: column; justify-content: center;">

<figure style="margin-left: 0; margin-right: -4cqw"><img src="@slide/cycle.svg" alt="循環構造の円環図：イメージがない→コンテンツが生まれない→実需がない→仕様が成熟しない→道具が整わない→イメージがない、の循環と断つポイント" style="width: 45cqw; max-height: 100cqh;" /></figure>

- 「縦書きのWebサイト」の要件？
  - <a href="https://github.com/w3c/jlreq-d/" target="_blank" lang="en">jlreq-d</a>がどこまでやる？
  - 究極には言語非依存なはずだ
    - 縦横混合しうる
    - 連続メディア上の
    - デジタル文書
- それを作る仕様が必要？
  - 最低限はあり、不足が見える
- ブラウザの実装は？
  - 基本は動くが、行き届いていない

</div>
</div>

---

<div class="wrapper header-and-content">

# 今必要なのは<br />「縦書きを使って遊ぶこと」

<div style="flex: 1; display: flex; flex-direction: column; justify-content: center;">

自分の文章で、
自分のデザインで、
どんな風に使ったら、おもしろいか？
新しいことができるか？

当事者として「困る」人を増やしたい
アイデアが生まれるには探索が必要だ
縦書きアクティブユーザーを増やしたい

<div style="margin-block-start: 8cqw">
「まだまだ」の段階を遊び倒さなければ、一生まともにはならない
</div>

</div>
</div>

---

<!-- 13: 触ってみてほしい -->

<div class="wrapper header-and-content">

# 今日みなさんにわたす<br />「遊び道具」

<div style="flex: 1; display: flex; flex-direction: column; justify-content: center;">

- CSS Writing Modes
  - `writing-mode`
  - `text-orientation`
  - 「縦書き」らしいことは大抵できる
- 縦スクロールする縦書き
  - CSS Multi-column Layout
- 横スクロールを扱いやすくする
  - 方向変換テクニック
- フォントの向き
  - [縦書きHTMLにおける<br />文字の向きはどのように定まるか](https://blog.nnn.dev/entry/2022/07/01/180000)
- 縦横を切替・混合するなら
  - CSS Logical Properties And Values

</div>
</div>

---

<!-- 14: 今日この場で1つ -->

<div class="wrapper header-and-content">

# ぜひIssueに +1 ください

<div style="flex: 1; display: flex; flex-direction: column; justify-content: center;">

<a href="https://github.com/w3c/csswg-drafts/issues/13665" target="_blank" lang="en">w3c/csswg-drafts#13665</a>

<figure style="margin-left: 0; margin-right: -4cqw"><img src="@slide/issue.png" alt="Issue illustration" style="width: 80cqw;" /></figure>


</div>
</div>

---

<div class="wrapper header-and-content">

# なぜ縦書きにこだわるか

<div style="flex: 1; display: flex; flex-direction: column; justify-content: center; gap: 2rem;">

縦書きが「優れている」とは思わない

- ただの選択肢の一つ、それがいい
- 望めば当たり前に使えてほしい
- 適した方を選べばいい
  - 空間を使うのに便利とか
  - 馴染みのあるスタイルとか

縦書きの活用が広がることは、  
縦横の混在が容易になることは、  
デジタル文書の表現を豊かにするだろう

</div>
</div>

---

<!-- 4: 二択ではない -->

<div class="wrapper header-and-content">

# 縦書き横書き×スクロール

<div style="flex: 1; display: flex; flex-direction: column; justify-content: center;">

<div class="gradient-row">
  <div style="display: flex; flex-direction: row; gap: 2cqh;">
  <button class="gradient-cell wm-horizontal horizontal-scroll-feature"><strong>純横書き<br />横スクロール</strong></button>
  <button class="gradient-cell wm-horizontal"><strong>純横書き</strong><strong class="wm-vertical">縦スクロール</strong></button>
  </div>
  <div style="display: flex; flex-direction: row; gap: 2cqh;">
  <button class="gradient-cell wm-horizontal horizontal-scroll-feature"><strong>横書き主体<br />横スクロール</strong><strong class="wm-vertical">縦書き部品</strong></button>
  <button class="gradient-cell wm-horizontal"><strong>横書き主体</strong><strong class="wm-vertical">縦スクロール<br />縦書き部品</strong></button>
  </div>
  <div style="display: flex; flex-direction: row; gap: 2cqh;">
  <button class="gradient-cell wm-vertical horizontal-scroll-feature"><strong>縦書き主体</strong><strong class="wm-horizontal" style="inline-size: fit-content;">横書き部品<br />横スクロール</strong></button>
  <button class="gradient-cell wm-vertical vertical-multicol-feature"><strong>縦書き主体<br />縦スクロール</strong><strong class="wm-horizontal" style="inline-size: fit-content;">横書き部品</strong></button>
  </div>
  <div style="display: flex; flex-direction: row; gap: 2cqh;">
  <button class="gradient-cell wm-vertical horizontal-scroll-feature"><strong>純縦書き</strong><strong class="wm-horizontal" style="inline-size: fit-content;">横スクロール</strong></button>
  <button class="gradient-cell wm-vertical vertical-multicol-feature"><strong>純縦書き<br />縦スクロール</strong></button>
  </div>
</div>

</div>
</div>

---

<!-- 15: 結び -->

<div class="wrapper center">

<div style="display: flex; flex-direction: column; gap: 4cqh;">

<div style="font-size: 6cqh; line-height: 1.6; font-weight: bold;">縦書きの実用は「まだまだ」かもしれない</div>

<div style="font-size: 6cqh; line-height: 1.6; font-weight: bold;">だからこそ、今から遊び倒すことが重要</div>

- 仕様にフィードバックする
- ブラウザにフィードバックする
- これらの機能の当事者として、使い倒す

</div>

</div>

---

<!-- 13: 触ってみてほしい -->

<div class="wrapper header-and-content">

# 今日みなさんにわたす<br />「遊び道具」（再掲

<div style="flex: 1; display: flex; flex-direction: column; justify-content: center;">

- CSS Writing Modes
  - `writing-mode`
  - `text-orientation`
  - 「縦書き」らしいことは大抵できる
- 縦スクロールする縦書き
  - CSS Multi-column Layout
- 横スクロールを扱いやすくする
  - 方向変換テクニック
- フォントの向き
  - [縦書きHTMLにおける<br />文字の向きはどのように定まるか](https://blog.nnn.dev/entry/2022/07/01/180000)
- 縦横を切替・混合するなら
  - CSS Logical Properties And Values

</div>
</div>
