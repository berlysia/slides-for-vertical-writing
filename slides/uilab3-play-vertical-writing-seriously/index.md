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
  <h1 class="upright" style="overflow: visible;">Webで縦書きを<wbr />真剣に遊びたい</h1>
  <div style="font-size: 4cqh; color: #666; text-align: end;">UI Lab #3 / berlysia</div>
</div>

</div>

---

<!-- 2: もうある。なのに珍しい -->

<div class="wrapper header-and-content">

# 縦書きWebは、もうある

<div style="flex: 1; display: flex; flex-direction: column;">

- pixiv小説、カクヨム
- `writing-mode` から<span class="tcu-all">10</span>年
- なのに「縦書きのWebサイト」は<wbr />まだ珍しい

<div class="highlight-box">あるのに、選ばれていない</div>

</div>
</div>

---

<!-- 3: 素朴に使うと壊れる。実物はキット遊び①の長い島で見せる -->

<div class="wrapper header-and-content">

# 素朴に使うと壊れる

<div style="flex: 1; display: flex; flex-direction: column; justify-content: center; align-items: center; gap: 3cqh;">

<figure style="margin: 0; display: flex; flex-direction: column; align-items: center; gap: 1.5cqh;">
<img src="@slide/break.png" alt="縦書きにした文章が枠からはみ出し、横スクロールバーが生えている。文章は途中から表示され、書き出しが見えない" style="height: 44cqh;" />
<figcaption class="caption">量が増えると横に育つ。<wbr />横スクロールが生えて、書き出しは右の奥</figcaption>
</figure>

<div class="highlight-box" style="font-size: 4.2cqh;">壊れる→怖い→特設サイト行き</div>

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

<div class="caption">全面縦書きの覚悟は要らない。<wbr />右から順にぜんぶやります</div>

</div>
</div>

---

<!-- 5: 遊び① ここからキットページのタブへ -->

<div class="wrapper header-and-content">

# 遊び① 島を置く

<div style="flex: 1; display: flex; flex-direction: column; justify-content: center; align-items: center;">

<figure style="margin: 0; display: flex; flex-direction: column; align-items: center; gap: 1.5cqh;">
<img src="@slide/play1.png" alt="横書きの記事の途中に、短歌が縦書きの島として置かれている" style="height: 54cqh;" />
<figcaption class="caption">横書きの記事に、縦書きの引用。<wbr />視線の慣性を折る</figcaption>
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
<figcaption class="caption">本当に効いてる？　外して確かめる。<wbr />変数は `writing-mode` と書体、1つずつ引く</figcaption>
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
<figcaption class="caption">本の帯・背表紙をカードUIへ。<wbr />コンポーネント<span class="tcu-all">1</span>個から遊べる</figcaption>
</figure>

</div>
</div>

---

<!-- 8: 遊び④ -->

<div class="wrapper header-and-content">

# 遊び④ 段に流す

<div style="flex: 1; display: flex; flex-direction: column; justify-content: center; gap: 3cqh;">

<figure style="margin: 0; align-self: center; display: flex; flex-direction: column; align-items: center; gap: 1.5cqh;">
<img src="@slide/play4.png" alt="縦書き本文が横長の段に分かれて縦に積まれている" style="height: 56cqh;" />
<figcaption class="caption">縦組みマルチカラム。<wbr />縦書き本文を縦スクロールのまま読ませるやつ</figcaption>
</figure>

- 行長は自分で当てる<wbr />（なのに指定通りにならない）
- 「固定段幅で無限につらねる」<wbr />モデルが仕様にない → 出した

<div class="caption">csswg-drafts#13665</div>

</div>
</div>

---

<!-- 9: 遊び⑤ 山場 -->

<div class="wrapper header-and-content">

# 遊び⑤ 進行方向ごと明け渡す

<div style="flex: 1; display: flex; flex-direction: column; justify-content: center; gap: 3cqh;">

<figure style="margin: 0; align-self: center; display: flex; flex-direction: column; align-items: center; gap: 1.5cqh;">
<img src="@slide/play5.png" alt="走れメロスの純縦書きページ。右端から始まり、左下にscrollLeftのHUDが出ている" style="height: 46cqh;" />
<figcaption class="caption">`html { writing-mode: vertical-rl }` で<wbr />ページは右から左へ、横スクロールに</figcaption>
</figure>

- 縦ホイールでは進めない
- <span class="tcu-all">6</span>行のJSで繋いだ
- `scrollLeft` は負に育つ

</div>
</div>

---

<!-- 10: 縦書き世界のUI？ confirmモーダル3パターン -->

<div class="wrapper header-and-content">

# 縦書き世界のUI？

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

<div class="caption">どれが自然かは、まだ決まっていない</div>

</div>

</div>
</div>

---

<!-- 11: 配布宣言 QR1回目 -->

<div class="wrapper header-and-content">

# 道具は全部ここにある

<div style="flex: 1; display: flex; flex-direction: column; justify-content: center; gap: 3cqh;">

<div class="qr-box">
<img src="@slide/kit-qr.svg" alt="縦書き遊びキットのQRコード" />
<div style="font-size: 4.2cqh;">
いま見せたもの、コードごと<wbr />全部貼ってあります<br />
説明はしません。<wbr />持って帰って、遊んで、<wbr />困ってください
</div>
</div>

<div class="caption">slides.berlysia.net/demos/vertical-writing-play-kit/</div>

</div>
</div>

---

<!-- 11: 因果の反転 -->

<div class="wrapper header-and-content">

# 作られないから育たない

<div style="flex: 1; display: flex; flex-direction: column;">

- イメージがない
- → 作られない
- → 実需が見えない
- → 優先度が上がらない

<div class="highlight-box">「足りないから作れない」<wbr />ではない</div>

</div>
</div>

---

<!-- 12: 真剣に遊ぶ -->

<div class="wrapper header-and-content">

# だから真剣に遊ぶ

<div style="flex: 1; display: flex; flex-direction: column;">

- 考える、触る、困る、残す、出す
- 一回は必ず困る<wbr />（さっきホイールで困った）
- その困りごとに価値がある
- 今日出てきたもの：<wbr />#13665 と <span class="tcu-all">6</span>行のJS

</div>
</div>

---

<!-- 13: お願い QR2回目 -->

<div class="wrapper header-and-content">

# 今日のお願い

<div style="flex: 1; display: flex; flex-direction: column; justify-content: center; gap: 3cqh;">

<div class="highlight-box" style="font-weight: bold;">次のUI大喜利、<wbr />縦書きで一本どうですか</div>

<div class="qr-box">
<img src="@slide/kit-qr.svg" alt="縦書き遊びキットのQRコード" />
<div style="font-size: 4.2cqh;">いま手元で開けます</div>
</div>

</div>
</div>

---

<!-- 14: 結び。口頭で「我々に必要な表現は、我々が発明しなければならない」を添える -->

<div class="wrapper center">

<div class="highlight-box" style="font-size: 5cqh; font-weight: bold; line-height: 2;">
縦書きのあるWebサイト、<wbr />縦書きをメインにするWebサイトを、<wbr />ぜひ発明してみてください
</div>

</div>
