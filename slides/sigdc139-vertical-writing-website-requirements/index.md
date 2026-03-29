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

<!-- 2: 日本語のなかの縦書き -->

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

<div style="margin-block-start: 2cqb;">
さらに、一つの紙面上で<wbr />縦横を混在させることもある
</div>

</div>
</div>

---

<!-- 3: 紙面の混在の豊かさ（存在証明） -->

<div class="wrapper header-and-content">

# 紙面における縦横混在

<div style="flex: 1; display: flex; flex-direction: column;">

- 縦書きの本文
- 横書きのコラム、文量あるキャプション
- 縦横を使い分ける見出し

<div style="">

方向の使い分けは、<wbr />紙面設計の成熟した語彙である

</div>

この豊かさが、Webにはまだ乏しい


</div>
</div>

---

<!-- 4: 言葉の整理＋射程 -->

<div class="wrapper header-and-content">

# 言葉の整理

<div style="display: flex; flex-direction: column; gap: 4cqh;">
<div>
<div class="def-term">縦書きテキスト</div>
<div class="def-body">CSSの <code>writing-mode</code> で<wbr />縦組みされたテキスト</div>
</div>
<div>
<div class="def-term">縦書きのWebサイト</div>
<div class="def-body">主に縦書きで構成されたWebサイト</div>
<div style="font-size: 3.5cqh; color: #666; margin-block-start: 1cqw;">
縦書きのみの形（CJK＋モンゴル文字）と、<wbr />縦書きと横書きの混用の形（CJKが中心）がある
</div>
<div style="font-size: 3.5cqh; color: #666; margin-block-start: 1cqw;">
横書きのWebサイトが当たり前の中で、<wbr />どちらも<strong>特殊な存在にとどまっている</strong>
</div>
</div>

<div class="highlight-box">
この特殊さを解消することが<wbr />本発表全体の関心事である
</div>

</div>
</div>

---

<!-- 5: 素朴に持ち込むと → 横スクロール → 結果として例外 -->

<div class="wrapper header-and-content">

# 縦書きを素朴に持ち込むと

<div style="flex: 1; display: flex; flex-direction: column;">

- コンテンツが横に伸びる
- 縦スクロール前提のデバイスと不一致
  - マウスホイール、キーボード
  - 汎用的なマッピングは困難
- デザイン上も既存資産と乖離する

<figure style="margin-left: 2cqw; margin-right: 0;"><img src="@slide/overflow-tategaki.png" alt="コンテンツの流れとビューポートの関係：縦書き（横スクロール）" style="max-width: 25cqw; max-height: 45cqh;" /><img src="@slide/overflow-yokogaki.png" alt="コンテンツの流れとビューポートの関係：横書き（縦スクロール）" style="max-width: 25cqw; max-height: 45cqh;" /><figcaption>コンテンツの流れとビューポートの関係<br />横書き（縦スクロール）、縦書き（横スクロール）</figcaption></figure>

<div style=" font-size: 4cqh; color: #666;">
結果として縦書きは特設や演出にとどまり、<wbr />本文級で使うには覚悟が要る
</div>

</div>
</div>

---

<!-- 5: 縦組みマルチカラム（図メイン） -->

<div class="wrapper header-and-content">

# 縦組みマルチカラム

<div style="flex: 1; display: flex; flex-direction: column;">

- 縦書きの段を並べ、<wbr />段が縦に積み重なるレイアウト
  - 縦スクロールで読み進められる

<figure style="margin-left: 2cqw; margin-right: 2cqw;"><img src="@slide/overflow-tategaki.png" alt="コンテンツの流れとビューポートの関係：縦書き（横スクロール）" style="max-width: 15cqw; max-height: 45cqh;" /><img src="@slide/overflow-yokogaki.png" alt="コンテンツの流れとビューポートの関係：横書き（縦スクロール）" style="max-width: 15cqw; max-height: 45cqh;" /><img src="@slide/overflow-tategaki-multicol.png" alt="コンテンツの流れとビューポートの関係：縦書きマルチカラム（縦スクロール）" style="max-width: 20cqw; max-height: 45cqh;" /><figcaption>縦組みマルチカラムと縦書き横書きの比較<br />縦書きかつ縦スクロールが叶うことがわかる</figcaption></figure>

</div>
</div>

---

<!-- 6: 既存Webデザインとの接続＋段階的導入 -->

<div class="wrapper header-and-content">

# 既存Webデザインとの接続

<div style="flex: 1; display: flex; flex-direction: column;">

<div style=" font-size: 4.5cqh;">
本文領域を縦組みマルチカラムにすることで<wbr />縦書きメインコンテンツを導入できる
</div>

<figure style="margin-left: 2cqw; margin-right: 2cqw;"><img src="@slide/wireframe-tategaki.png" alt="ブログ風ワイヤフレーム：本文領域のみ縦組みマルチカラムに変更した構成" style="max-width: 20cqw; max-height: 45cqh;" /><img src="@slide/wireframe-yokogaki.png" alt="ブログ風ワイヤフレーム：横書きの一般的な構成" style="max-width: 20cqw; max-height: 45cqh;" /><figcaption>縦組みマルチカラムの用例</figcaption></figure>

- 横書きのヘッダー・ナビと共存できる
  - 縦スクロールの世界の住人になれる

</div>
</div>

---

<!-- 7: CJKだけの話ではない（問題提起） -->

<div class="wrapper center">

<div>
<div style="font-size: 6cqh;">「縦書きのWebサイト」は<br />CJKだけの関心事ではない</div>
<div style="font-size: 4cqh; color: #666; margin-block-start: 3cqh;">書字方向の異なる言語・文字間で<br />本文のレイアウト構造を共有する方法にもなる</div>

</div>

---

<!-- 8: 翻訳・多言語対応（デモ） -->

<div class="wrapper header-and-content">

## 翻訳・多言語対応

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

</div>

---

<!-- 9: CSSの不足 -->

<div class="wrapper header-and-content">

# 現行CSSの不足

<div style="flex: 1; display: flex; flex-direction: column;">

CSS Multi-column Layoutは<wbr />**有限なコンテナを段に分割する**モデル

- コンテナのサイズが先に決まる
- コンテナを段数やカラム幅で分割する
  - 溢れた段はオーバーフロー扱い

<figure style="margin-left: -2cqw; margin-right: -4cqw;"><img src="@slide/multicol-current.png" alt="既存モデル（有限コンテナの分割）" style="max-width: 15cqw; max-height: 55cqh;" /></figure>

しかしここまで示した用例では<wbr />**無限の領域に段を積みたい**

- 段の高さは任意の値で決めたい
  - <span style="font-size: 3.5cqh; color: #666;">スクロールポートに対する割合、具体的な寸法など</span>
- 段はインライン方向に積み重なる
- 段が増えた分コンテナも広がりたい
  - <span style="font-size: 3.5cqh; color: #666;">コンテナ寸法に対する割合は注意が要りそう</span>

<figure style="margin-left: -2cqw; margin-right: -4cqw;"><img src="@slide/multicol-whatweneed.png" alt="欲しいモデル（無限方向への積み重ね）" style="max-width: 15cqw; max-height: 55cqh;" /></figure>

</div>
</div>

---

<!-- 10: 既存モデルとの不整合 -->

<div class="wrapper header-and-content">

# CSSWGへの提案

<div style="flex: 1; display: flex; flex-direction: column;">

`column-width` を直ちに使用し<wbr />コンテナサイズを段の結果から導出する<wbr />**固定カラム幅モード**を提案

- 既存：コンテナサイズ→段に分割
- 提案：段の幅を固定→コンテナが従う
  - <span style="font-size: 4cqh; color: #666;">寸法決定の因果関係を逆転させる</span>


横書きでも「覗かせる」表現に有用

縦書きマルチカラムにも自然に適合

<div style="font-size: 3.5cqh; color: #666;">

[w3c/csswg-drafts#13665](https://github.com/w3c/csswg-drafts/issues/13665)

<figure style="margin-left: -2cqw; margin-right: 0;"><img src="@slide/multicol-whatweneed.png" alt="欲しいモデル（無限方向への積み重ね）" style="max-width: 15cqw; max-height: 55cqh;" /></figure>

</div>

</div>
</div>

---

<!-- 10: 循環構造（図メイン） -->

<div class="wrapper header-and-content">

# 技術面の課題だけではない

<div style="flex: 1; display: flex; flex-direction: column;">

<div style="font-size: 4cqh;">

- 縦書きのWebサイトの**イメージがない**
- だからコンテンツが生まれない
- だから実需がない
- だから仕様の優先度が上がらない
- だから道具が整わない
- だからイメージがもてない

</div>

イメージがないのは、<wbr />**発明**が必要だから

連続メディアでの縦書きは<wbr />横スクロールのイメージが強すぎる

循環構造がある。どこかを断たなければならない

<figure style="margin-left: 0; margin-right: -4cqw"><img src="@slide/cycle.svg" alt="循環構造の円環図：イメージがない→コンテンツが生まれない→実需がない→仕様の優先度が上がらない→道具が整わない→イメージがない、の循環と断つポイント" style="max-width: 50cqw; max-height: 100cqh;" /></figure>

</div>
</div>

---

<!-- 11: イメージの供給 -->

<div class="wrapper header-and-content">

# 循環を断つために

<div style="flex: 1; display: flex; flex-direction: column;">

縦書きはもっとカジュアルに使える<wbr />という**イメージの供給**

<div style="font-size: 4.5cqh;">

- 部品単位でも縦書きの存在感を作れる
- 縦スクロールで読める縦書きの周知
- Webで縦書きを使う設計知見の蓄積

</div>

<div style="font-size: 3.5cqh; color: #666;">

[縦書きWeb普及委員会](https://tategaki.github.io/) が<wbr />かつてやっていたことは、<wbr />まだ必要なのではないか

</div>

</div>
</div>

---

<!-- 13: クライマックス -->

<div class="wrapper center">

<div class="punch">
<div style="font-size: 4cqh; color: #666; margin-block-end: 2cqh;">縦書きしかできない文字の縦書きWebと<br />縦横を混用できる我々の縦書きWebは<br />きっと別物になる</div>
<div style="font-size: 3cqh; color: #888; margin-block-end: 2cqh;">ブロック方向すら左右で異なる<br />混用の設計は独自の問題を持つ</div>
<div class="highlight-box">
<div style="font-size: 5.5cqh; font-weight: bold; line-height: 1.6;">我々に必要な表現は<br />我々が発明しなければならない</div>
</div>
</div>

</div>

---

<!-- 14: まとめ -->

<div class="wrapper header-and-content">

<h1 class="upright" style="overflow: visible;">まとめ</h1>

<div style="flex: 1; display: flex; flex-direction: column; font-size: 4cqh; line-height: 1.8;">

紙面が証明した**縦横混在の豊かさ**を、Webはまだ持てていない

縦組みマルチカラムで、<wbr />縦書きを既存の縦スクロール世界に接続できる

これはCJKだけでなく、<wbr />書字方向をまたぐ多言語Webの基盤になりうる

CSS側の不足はあるが、<wbr />仕様の進化で対応を期待できる

技術とイメージの両面から循環を断つ

**我々に必要な表現は、我々が発明しなければならない**

</div>
</div>
