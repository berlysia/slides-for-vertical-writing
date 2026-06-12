---
title: "Webで縦書きを真剣に遊びたい - UI Lab #3"
description: 縦書きWebに足りないのは技術ではなく、遊ばれた実例。真剣に遊ぶことが、そのまま貢献になる
author: berlysia
date: 2026-06-12
---

<link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/yakuhanjp@4.1.1/dist/css/yakuhanrp_s.css">

<style>
.upright {
  text-orientation: upright;
}

.tcu-all {
  text-combine-upright: all;
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

/* 4枚目: 遊び場の地図 */
.depth-map {
  display: flex;
  flex-direction: column;
  gap: 2cqh;
  font-size: 4.6cqh;
  font-weight: bold;
}
.depth-map > div {
  padding: 1.5cqh 3cqh;
  border-radius: 1.5cqh;
}
.depth-1 { background: #eef1f8; }
.depth-2 { background: #dce3f2; }
.depth-3 { background: #c3cfe9; }
.depth-4 { background: #a3b5dd; }

/* 縦書き世界のUI？: confirmモーダル3パターン */
.modal-row {
  writing-mode: horizontal-tb;
  display: flex;
  justify-content: center;
  align-items: stretch;
  gap: 4cqh;
}
.modal-demo {
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 2cqh;
}
.modal {
  writing-mode: horizontal-tb;
  word-break: normal;
  width: 34cqh;
  height: 36cqh;
  background: #fff;
  border: 1px solid #ccc;
  border-radius: 1.5cqh;
  box-shadow: 0 1cqh 3cqh rgba(0, 0, 0, 0.18);
  padding: 3cqh;
  display: flex;
  flex-direction: column;
  gap: 2cqh;
  font-size: 3cqh;
  line-height: 1.7;
}
.modal .body {
  flex: 1;
  display: grid;
  place-items: center;
  text-align: center;
}
.modal .actions {
  display: flex;
  justify-content: flex-end;
  align-items: center;
  gap: 1.5cqh;
}
.modal button {
  font-size: 2.6cqh;
  padding: 1cqh 2cqh;
  border-radius: 1cqh;
  border: 1px solid #bbb;
  background: #f3f3f3;
  font-family: inherit;
  white-space: nowrap;
}
.modal button.primary {
  background: #2a4073;
  color: #fff;
  border-color: #2a4073;
}
.modal.tate-body .body {
  writing-mode: vertical-rl;
}
.modal.tate-full {
  writing-mode: vertical-rl;
}
.modal.tate-full .actions button {
  inline-size: fit-content;
}

.qr-box {
  display: flex;
  align-items: center;
  gap: 4cqh;
}
.qr-box img {
  block-size: 36cqh;
  background: #fff;
  padding: 1.5cqh;
  border-radius: 1.5cqh;
}
</style>

<!-- 1: タイトル。口頭:「このスライド、縦書きです」 -->

<div class="wrapper center">

<div style="display: flex; flex-direction: column; inline-size: calc(100cqh - var(--space-wrapper) * 2); gap: 4cqh;">
  <h1 class="upright" style="overflow: visible; font-size: 2em">Webで縦書きを<wbr />真剣に遊びたい</h1>
  <div style="font-size: 4cqh; color: #666; text-align: end;">UI Lab #3 / berlysia</div>
</div>

</div>

---

<!-- 2: もうある。なのに珍しい -->

<div class="wrapper header-and-content">

# 縦書きWebは、もうある

<div style="flex: 1; display: flex; flex-direction: column;">

- `writing-mode` 登場から<span class="tcu-all">10</span>年
  - pixiv小説、カクヨム
  - 教育系サービス
- 「縦書きのWebサイト」は<wbr />まだ珍しい

<div class="highlight-box">縦書きは使えるのに、<wbr />選ばれていない</div>

</div>
</div>

---

<!-- 3: 素朴に使うと壊れる。実物はキット遊び①の長い島で見せる -->

<div class="wrapper header-and-content">

# 素朴に使うと壊れる

<div style="flex: 1; display: flex; flex-direction: column; justify-content: center; align-items: center; gap: 3cqh;">

<figure style="margin: 0; display: flex; flex-direction: column; align-items: center; gap: 1.5cqh;">
<img src="@slide/break.png" alt="縦書きにした文章が枠からはみ出し、横スクロールバーが生えている。文章は途中から表示され、書き出しが見えない" style="height: 44cqh;" />
<figcaption class="caption">横スクロールになると、文末がみえる</figcaption>
</figure>

<div class="highlight-box" style="font-size: 4.2cqh;">軽微なハマりどころが多数</div>

</div>
</div>

---

<!-- 3: 素朴に使うと壊れる。実物はキット遊び①の長い島で見せる -->

<div class="wrapper header-and-content">

# 素朴に使うと壊れる

<div style="flex: 1; display: flex; flex-direction: column; justify-content: center; align-items: center; gap: 3cqh;">

<figure style="margin: 0; display: flex; flex-direction: column; align-items: center; gap: 1.5cqh;">
<img src="@slide/break-fixed.png" alt="縦書きにした文章が枠からはみ出し、横スクロールバーが生えている。文章は先頭から見えている" style="height: 44cqh;" />
<figcaption class="caption">スクロール領域も縦書き指定すると解消する</figcaption>
</figure>

<div class="highlight-box" style="font-size: 4.2cqh;">少し知るだけで前に進める</div>

</div>
</div>

---

<!-- 4: 遊び場の地図 -->

<div class="wrapper header-and-content">

# 遊び場の地図

<div style="flex: 1; display: flex; flex-direction: column; justify-content: center; gap: 3cqh;">

<div class="depth-map">
<div class="depth-1">横書きだけ</div>
<div class="depth-2">横書き主体 + 縦書き部品</div>
<div class="depth-3">縦書き主体 + 横書きUI</div>
<div class="depth-4">純縦書き</div>
</div>

<div class="caption">縦書きは段階的に取り入れられる</div>

</div>
</div>

---

<!-- 5: 遊び① ここからキットページのタブへ -->

<div class="wrapper header-and-content">

# 遊び① 島を置く

<div style="flex: 1; display: flex; flex-direction: column; justify-content: center; align-items: center;">

<figure style="margin: 0; display: flex; flex-direction: column; align-items: center; gap: 1.5cqh;">
<img src="@slide/play1.png" alt="横書きの記事の途中に、短歌が縦書きの島として置かれている" style="height: 54cqh;" />
<figcaption class="caption">横書きの記事に、縦書きの引用<br />視線の流れを切り替え、目を留めさせる</figcaption>
</figure>

</div>
</div>

---

<!-- 6: 遊び② -->

<div class="wrapper header-and-content">

# 遊び② 引き算で確かめる

<div style="flex: 1; display: flex; flex-direction: column; justify-content: center; align-items: center;">

<figure style="margin: 0; display: flex; flex-direction: column; align-items: center; gap: 1.5cqh;">
<img src="@slide/play2.png" alt="縦書きの引用と、混用・書体それぞれのトグルボタン" style="height: 72cqh;" />
<figcaption class="caption">変数は `writing-mode` と書体の2つ<br />縦書きの効能はどんなものか？</figcaption>
</figure>

</div>
</div>

---

<!-- 7: 遊び③ 捨て札。押していたら飛ばす -->

<div class="wrapper header-and-content">

# 遊び③ 部品にする

<div style="flex: 1; display: flex; flex-direction: column; justify-content: center; align-items: center;">

<figure style="margin: 0; display: flex; flex-direction: column; align-items: center; gap: 1.5cqh;">
<img src="@slide/play3.png" alt="縦書きの帯ラベルがついた横書きカードUI" style="height: 42cqh;" />
<figcaption class="caption">空間の使い方を変える。<br />コンポーネント<span class="tcu-all">1</span>個から遊ぶ</figcaption>
</figure>

</div>
</div>

---

<!-- 9: 遊び⑤ 山場 -->

<div class="wrapper header-and-content">

# 遊び④ 横スクロールと付き合う

<div style="flex: 1; display: flex; flex-direction: column; justify-content: center; gap: 3cqh;">

<figure style="margin: 0; align-self: center; display: flex; flex-direction: column; align-items: center; gap: 1.5cqh;">
<img src="@slide/play5.png" alt="走れメロスの純縦書きページ。右端から始まり、左下にscrollLeftのHUDが出ている" style="height: 46cqh;" />
<figcaption class="caption">`writing-mode: vertical-rl で<br />右から左へ横スクロール</figcaption>
</figure>

- ホイール、Home/End、PageDown/Upが機能しない
  - ひとまずJSで対処可能
  - <div class="caption"><a href="https://github.com/w3c/csswg-drafts/issues/10060" target="_blank">w3c/csswg-drafts #10060</a></div>
- `scrollLeft` は負方向に成長
  - 計算ロジックに注意がいる

</div>
</div>

---

<!-- 8: 遊び④ -->

<div class="wrapper header-and-content">

# 遊び⑤ 縦スクロールのまま縦書きに

<div style="flex: 1; display: flex; flex-direction: column; justify-content: center; gap: 3cqh;">

<figure style="margin: 0; align-self: center; display: flex; flex-direction: column; align-items: center; gap: 1.5cqh;">
<img src="@slide/play4.png" alt="縦書き本文が横長の段に分かれて縦に積まれている" style="height: 56cqh;" />
<figcaption class="caption">縦組みマルチカラム。<br />縦書き本文を縦スクロールのまま読ませる</figcaption>
</figure>

- コンテナ高さの<wbr />成り行き指定が難しい
- 行長の指定が難しい

- どちらもハックがいる
  - <div class="caption"><a href="https://github.com/w3c/csswg-drafts/issues/13665" target="_blank">w3c/csswg-drafts #13665</a></div>

</div>
</div>

---

<!-- 10: 縦書き世界のUI？ confirmモーダル3パターン -->

<div class="wrapper header-and-content">

# 縦書き世界のUIを考える

<div style="flex: 1; display: flex; flex-direction: column; justify-content: center; align-items: center;">

<div style="writing-mode: horizontal-tb; display: flex; flex-direction: column; align-items: center; gap: 3cqh;">

<div class="modal-row">

<div class="modal-demo">
<div class="modal">
<div class="body">破棄しますか？</div>
<div class="actions"><button>キャンセル</button><button class="primary"><span class="upright">OK</span></button></div>
</div>
<div class="caption">全部横書き</div>
</div>

<div class="modal-demo">
<div class="modal tate-body">
<div class="body">破棄しますか？</div>
<div class="actions"><button>キャンセル</button><button class="primary"><span class="upright">OK</span></button></div>
</div>
<div class="caption">本文だけ縦書き</div>
</div>

<div class="modal-demo">
<div class="modal tate-full">
<div class="body">破棄しますか？</div>
<div class="actions"><button>キャンセル</button><button class="primary"><span class="upright">OK</span></button></div>
</div>
<div class="caption">ボタンまで縦書き</div>
</div>

</div>

<div class="caption">デファクトはまだない。<wbr />縦書きしかできない言語ではどうなる？</div>

<div class="caption">縦書きに耐えるUIの作り方 →<wbr /> <a href="https://blog.berlysia.net/entry/2026-02-28-react-tokyo-fes-2026" target="_blank">縦書き対応のコンポーネントを作る</a></div>

</div>

</div>
</div>

---

<!-- 11: 配布宣言 QR1回目 -->

<div class="wrapper header-and-content">

# お手元で見てみてください

<div style="flex: 1; display: flex; flex-direction: column; justify-content: center; gap: 3cqh;">

<div class="qr-box">
<a href="https://slides.berlysia.net/demos/vertical-writing-play-kit/" target="_blank"><img src="@slide/kit-qr.svg" alt="縦書き遊びキットのQRコード" /></a>
<div style="font-size: 4.2cqh;">
手元で動く例を<wbr />まとめました
</div>
</div>

<div class="caption"><a href="https://slides.berlysia.net/demos/vertical-writing-play-kit/" target="_blank">slides.berlysia.net/demos/vertical-writing-play-kit/</a></div>

</div>
</div>

---

<!-- 11: 因果の反転 -->

<div class="wrapper header-and-content">

# 縦書きは「できる」

<div style="flex: 1; display: flex; flex-direction: column;">

- 縦書きの活用イメージがない
- → 作られない
- → 需要が見えない・不足がわからない
- → 優先度が上がらない

<div class="highlight-box">「足りないから作れない」を<wbr />放置していたら永遠に育たない</div>

</div>
</div>

---

<!-- 12: 真剣に遊ぶ -->

<div class="wrapper header-and-content">

# だから真剣に遊ぶ

<div style="flex: 1; display: flex; flex-direction: column;">

- 触ってみて、楽しみながら、困ってみる
- その困りごとに価値がある
  - ホイール操作
  - スクロール位置
  - マルチカラム
  - `<canvas>` が縦書き未対応
    - [whatwg/html #11449](https://github.com/whatwg/html/issues/11449)
  - などなど……
- ぜひバグ報告やIssue化を
  - 頼ってもらってよいです

</div>
</div>

---

<!-- 13: お願い QR2回目 -->

<div class="wrapper header-and-content">

# 今日のお願い

<div style="flex: 1; display: flex; flex-direction: column; justify-content: center; gap: 3cqh;">

<div class="highlight-box" style="font-weight: bold;">縦書きのWebページ・UIを<wbr />考えてみませんか</div>

<div class="qr-box">
<a href="https://slides.berlysia.net/demos/vertical-writing-play-kit/" target="_blank"><img src="@slide/kit-qr.svg" alt="縦書き遊びキットのQRコード" /></a>
<div style="font-size: 4.2cqh;">いま手元で開けます</div>
</div>

</div>
</div>

---

<!-- 14: 結び。口頭で「我々に必要な表現は、我々が発明しなければならない」を添える -->

<div class="wrapper center">

<div class="highlight-box" style="font-size: 5cqh; font-weight: bold; line-height: 2;">
Webの縦書きは大きなフロンティア<wbr />ぜひ面白がって、遊びましょう
</div>

</div>
