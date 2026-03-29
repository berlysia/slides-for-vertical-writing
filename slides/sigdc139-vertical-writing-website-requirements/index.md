---
title: 「縦書きのWebサイトを作る」ために何が必要か
description: 縦書きテキストと縦書きのWebサイトの間の分断を埋めるために必要な条件を論じる
author: berlysia
date: 2026-03-30
---

<link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/yakuhanjp@4.1.1/dist/css/yakuhanrp_s.css">

<style>
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

.punch {
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  flex: 1;
  text-align: center;
}

.punch-text {
  font-size: 7cqh;
  font-weight: bold;
  line-height: 1.6;
}

.slide-content li > p {
    margin: 0;
}

.wrapper {
  word-break: keep-all;
  overflow-wrap: normal;
}

.def-term {
  font-size: 5.5cqh;
  font-weight: bold;
  margin-block-end: 3cqh;
}

.def-body {
  font-size: 4.5cqh;
  color: #444;
  line-height: 1.8;
}
</style>

<!-- 1: タイトル -->

<div class="wrapper center">

<div style="display: flex; flex-direction: column; inline-size: calc(100cqh - var(--space-wrapper) * 2);">
  <h1 class="upright" style="overflow: visible; font-size: 1.25em">「縦書きのWebサイトを作る」ために何が必要か</h1>
</div>

</div>

---

<!-- 3: 縦横の豊かさ＋Webにはない -->

<div class="wrapper header-and-content">

# 縦横の使い分けが持つ豊かさ

<div style="flex: 1; display: flex; flex-direction: column;">

- 縦書きの本文
- 横書きのコラム、文量あるキャプション
- 縦横を使い分ける見出し

<div class="highlight-box" >
<strong>この豊かさが、Webにはまだない</strong>
</div>

</div>
</div>

---

<!-- 5: 素朴に持ち込むと → 横スクロール -->

<div class="wrapper header-and-content">

# 縦書きを素朴に持ち込むと

<div style="flex: 1; display: flex; flex-direction: column;">

- コンテンツが横に伸びる
- 縦スクロール前提のデバイスと不一致
  - マウスホイール、キーボード
  - 汎用的なマッピングは困難

<figure style="margin-left: 2cqw; margin-right: 2cqw;"><img src="@slide/overflow-tategaki.png" alt="コンテンツの流れとビューポートの関係：縦書き（横スクロール）" style="max-width: 35cqw; max-height: 45cqh;" /><img src="@slide/overflow-yokogaki.png" alt="コンテンツの流れとビューポートの関係：横書き（縦スクロール）" style="max-width: 35cqw; max-height: 45cqh;" /><figcaption>コンテンツの流れとビューポートの関係<br />横書き（縦スクロール）、縦書き（横スクロール）</figcaption></figure>

</div>
</div>

---

<!-- 言葉の整理 -->

<div class="wrapper header-and-content">

# 言葉の整理

<div style="display: flex; flex-direction: column; gap: 4cqh;">
<div>
<div class="def-term">縦書きテキスト</div>
<div class="def-body">CSSの `writing-mode` で<wbr />縦組みされたテキスト</div>
</div>
<div>
<div class="def-term">縦書きのWebサイト</div>
<div class="def-body">主に縦書きで構成されたWebサイト</div>
<div style="font-size: 3.5cqh; color: #666; margin-block-start: 1cqw;">
縦書きのみの形（CJK＋モンゴル文字）と、<wbr />縦書きと横書きの混用の形（CJKが中心）がある
</div>
<div style="font-size: 3.5cqh; color: #666; margin-block-start: 1cqw;">
横書きのWebサイトが当たり前の中で、<wbr />どちらも特殊な存在にとどまっている
</div>
</div>
</div>

</div>

---

<!-- 段階図：溝の視覚化＋スマホWebとの同相 -->

<div class="wrapper header-and-content">

## 縦横混用の現在地

<div class="wm-horizontal" style="display: flex; flex-direction: column; gap: 3cqh; font-size: 2.8cqh; inline-size: calc(100cqh - var(--space-wrapper) * 2);">

<div style="display: flex; flex-direction: row-reverse; align-items: center; justify-content: center; gap: 1.2cqh;">
<div style="padding: 1.2cqh 1.5cqh; background: #d4edda; border: 1px solid #6a6; border-radius: 1cqh; text-align: center; font-weight: bold; color: #363;">横書きWeb<br /><span style="font-size: 0.85em; font-weight: normal;">writing-mode以前</span></div>
<div style="color: #888;">←</div>
<div style="display: flex; flex-direction: column; gap: 0.5cqh;">
<div style="padding: 0.8cqh 1.5cqh; background: #d4edda; border: 1px solid #6a6; border-radius: 1cqh; text-align: center; font-weight: bold; color: #363; font-size: 0.9em;">横書きWebサイト</div>
<div style="padding: 0.8cqh 1.5cqh; background: #d4edda; border: 1px solid #6a6; border-radius: 1cqh; text-align: center; font-weight: bold; color: #363; font-size: 0.9em;">横書きメイン＋縦書きテキスト</div>
<div style="padding: 0.8cqh 1.5cqh; background: #dadada; border: 1px solid #666; border-radius: 1cqh; text-align: center; font-weight: bold; color: #333; font-size: 0.9em;">縦書きメイン＋横書きテキスト</div>
<div style="padding: 0.8cqh 1.5cqh; background: #d4edda; border: 1px solid #6a6; border-radius: 1cqh; text-align: center; font-weight: bold; color: #363; font-size: 0.9em;">縦書きWebサイト</div>
</div>
<div style="color: #c33; font-weight: bold; font-size: 3.5cqh;">‖</div>
<div style="padding: 1.2cqh 1.5cqh; background: #fff3cd; border: 2px dashed #ca6; border-radius: 1cqh; text-align: center; font-weight: bold; color: #856404;">接続フェーズ<br /><span style="font-size: 0.85em; font-weight: normal;">？</span></div>
<div style="color: #888;">←</div>
<div style="padding: 1.2cqh 1.5cqh; background: #f8d7da; border: 2px dashed #a66; border-radius: 1cqh; text-align: center; font-weight: bold; color: #721c24;">独自化フェーズ<br /><span style="font-size: 0.85em; font-weight: normal;">？</span></div>
</div>

<div style="text-align: center; color: #c33; font-weight: bold; font-size: 2.8cqh;">ここから先に進めていない</div>

<div style="border-top: 1px solid #ccc; padding-top: 2.5cqh;">
<div style="font-size: 3cqh; font-weight: bold; color: #555; margin-bottom: 1.5cqh; text-align: center;">参考：スマホWebの歩み</div>
<div style="display: flex; flex-direction: row-reverse; align-items: center; justify-content: center; gap: 1.2cqh;">
<div style="padding: 1.2cqh 1.5cqh; background: #d4edda; border: 1px solid #6a6; border-radius: 1cqh; text-align: center; font-weight: bold; color: #363;">PC向けWeb</div>
<div style="color: #888;">←</div>
<div style="display: flex; flex-direction: column; gap: 0.5cqh;">
<div style="padding: 0.8cqh 1.5cqh; background: #d4edda; border: 1px solid #6a6; border-radius: 1cqh; text-align: center; font-weight: bold; color: #363; font-size: 0.9em;">PC向けWeb</div>
<div style="padding: 0.8cqh 1.5cqh; background: #d4edda; border: 1px solid #6a6; border-radius: 1cqh; text-align: center; font-weight: bold; color: #363; font-size: 0.9em;">SP向けWeb</div>
</div>
<div style="color: #888;">←</div>
<div style="padding: 1.2cqh 1.5cqh; background: #d4edda; border: 1px solid #6a6; border-radius: 1cqh; text-align: center; font-weight: bold; color: #363;">レスポンシブ<br />デザインで統合</div>
<div style="color: #888;">←</div>
<div style="padding: 1.2cqh 1.5cqh; background: #d4edda; border: 1px solid #6a6; border-radius: 1cqh; text-align: center; font-weight: bold; color: #363;">モバイル<br />ファースト</div>
</div>
<div style="text-align: center; color: #595; font-size: 2.8cqh;"></div>
</div>

</div>

</div>

---

<!-- 前提が違う、それでも問いは同じ -->

<div class="wrapper center">

<div class="punch">
<div style="font-size: 4.5cqh; color: #666; margin-block-end: 2cqh;">スマホWebには膨大なコンテンツがあった<br />縦書きWebのコンテンツはこれから生まれる</div>
<div style="font-size: 5cqh; margin-block-end: 3cqh;">前提が違う</div>
<div class="highlight-box">
<div class="punch-text" style="font-size: 6cqh;">それでも問いは同じ<br />この分断を埋めるには？</div>
</div>
</div>

</div>

---

<!-- 接続フェーズ＋射程 -->

<div class="wrapper header-and-content">

# 接続フェーズ

<div style="flex: 1; display: flex; flex-direction: column;">

既存のWebデザインの作法と接続し、<wbr />縦書きを組み込む段階

- ヘッダー・ナビゲーションは横書きのまま
- 本文領域だけ縦書きに

<div class="highlight-box" style="margin-block-start: auto;">
<strong>本発表の射程は接続フェーズ</strong><br />
<span style="font-size: 3.5cqh;">分断を埋めるために今何が必要か</span>
</div>

</div>
</div>

---

<!-- 15: 縦組みマルチカラム（図メイン） -->

<div class="wrapper header-and-content">

# 縦組みマルチカラム

<div style="flex: 1; display: flex; flex-direction: column;">

<figure><img src="@slide/content-flow.svg" alt="コンテンツの流れとビューポートの関係：横書き（縦スクロール）、縦書き（横スクロール）、縦組みマルチカラム（縦スクロール回復）の3列比較" style="max-width: 85cqw; max-height: 55cqh;" /></figure>

<div style="margin-block-start: auto;">

- 段が縦に積み重なる → 縦スクロールと一致
- 横書きのヘッダー・ナビと共存できる

</div>

</div>
</div>

---

<!-- 既存Webデザインとの接続＋段階的導入 -->

<div class="wrapper header-and-content">

# 既存Webデザインとの接続

<div style="flex: 1; display: flex; flex-direction: column;">

<figure><img src="@slide/blog-wireframe.svg" alt="ブログ風ワイヤフレーム：左が横書きの一般的な構成、右が本文領域のみ縦組みマルチカラムに変更した構成" style="max-width: 85cqw; max-height: 55cqh;" /></figure>

<div style="margin-block-start: auto; font-size: 4.5cqh; font-weight: bold;">
本文領域を縦組みマルチカラムにするだけで<wbr />段階的に縦書き体験を導入できる
</div>

</div>
</div>

---

<!-- 翻訳の議論＋CJKだけではない -->

<div class="wrapper center">

<div class="punch">
<div style="font-size: 5cqh; margin-block-end: 2cqh;">この縦書きのWebサイトを<wbr />横書き言語にしたら？</div>
<div style="font-size: 5cqh; font-weight: bold; color: #c33; margin-block-end: 3cqh;">当然、破綻する</div>
<div style="font-size: 4cqh; color: #555; line-height: 1.6; margin-block-end: 3cqh;">しかし接続フェーズの手段は<br />横書きWebとレイアウト構造を共有している</div>
<div class="highlight-box">
<strong>縦書きのWebサイトは<wbr />CJKだけの関心事ではない</strong>
</div>
</div>

</div>

---

<!-- 21: CSSの不足 -->

<div class="wrapper header-and-content">

# 現行CSSの不足

<div style="flex: 1; display: flex; flex-direction: column;">

- CSS Multi-column Layoutの<wbr />計算モデルに未整備がある
- 縦書き固有の問題ではなく<wbr />CSS側の課題
- CSSWGにIssue提出済み

<div class="highlight-box" style="margin-block-start: auto;">
<strong>詳細は予稿を参照</strong>
</div>

</div>
</div>

---

<!-- 22: スライド2の回収 → クライマックスへの助走 -->

<div class="wrapper center">

<div class="punch">
<div style="font-size: 5cqh; color: #666; margin-block-end: 3cqh;">最初に見せた、<wbr />あの紙面の豊かさ</div>
<div style="font-size: 5.5cqh; line-height: 1.8;">その正体は<br /><strong>方向を選べること</strong>自体にある</div>
<div style="font-size: 4.5cqh; color: #666; margin-block-start: 3cqh;">横書きしかないWebにも、<wbr /><br />縦書きしかない文字体系にも<wbr /><br />存在しない表現の軸</div>
</div>

</div>

---

<!-- 23: パンチ「Webには混用の世界が必要だ」（クライマックス） -->

<div class="wrapper center">

<div class="punch">
<div class="highlight-box">
<div class="punch-text">Webには<br />混用の世界が必要だ</div>
</div>
</div>

</div>

---

<!-- 24: 循環構造（図メイン） -->

<div class="wrapper header-and-content">

# 必要なのに、<wbr />なぜ立ち上がらないのか

<div style="flex: 1; display: flex; flex-direction: column;">

<figure><img src="@slide/cycle.svg" alt="循環構造の円環図：イメージがない→コンテンツが生まれない→実需がない→仕様の優先度が上がらない→道具が整わない→イメージがない、の循環と断つポイント" style="max-width: 70cqw; max-height: 65cqh;" /></figure>

</div>
</div>

---

<!-- 25: 対比 -->

<div class="wrapper center">

<div class="punch">
<div style="font-size: 5cqh; line-height: 1.8;">スマホWebには<strong>「痛み」</strong>があった<br /><br />縦書きWebには、ない</div>
</div>

</div>

---

<!-- 26: イメージの供給（具体例付き） -->

<div class="wrapper header-and-content">

# 分断のこちら側から<wbr />イメージを供給する

<div style="flex: 1; display: flex; flex-direction: column;">

`writing-mode` が拓いた地平で<wbr />今すぐできること：

- カード、プルクォート、<wbr />ヒーローセクション
- コンポーネント単位の縦書きだけでも、<wbr />横書きサイトの中に<wbr />縦書きがある像を結べる

<div style="margin-block-start: auto; font-size: 4cqh; color: #666;">
デザイナーが縦書きを選択肢として<wbr />使いこなせる知識の普及が要る
</div>

</div>
</div>

---

<!-- 27: パンチ「行動提起」 -->

<div class="wrapper center">

<div class="punch">
<div class="punch-text">今こそ、<wbr />そういう取り組みが<br />必要ではないか</div>
</div>

</div>

---

<!-- 28: まとめ（パンチ文の再掲） -->

<div class="wrapper header-and-content">

<h1 class="upright" style="overflow: visible;">まとめ</h1>

<div style="flex: 1; display: flex; flex-direction: column; font-size: 4.5cqh; line-height: 2;">

**縦書きテキスト**と**縦書きのWebサイト**の間に分断がある

接続フェーズ：縦組みマルチカラムで分断を埋める

CSS側の不足はあるが、<wbr />仕様の進化で対応を期待できる

**Webには混用の世界が必要だ**

技術とイメージの両面から、<wbr />循環を断つ取り組みが要る

</div>
</div>
