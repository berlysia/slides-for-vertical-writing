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

<!-- 自己紹介 -->

<div class="wrapper header-and-content">

# 誰

<div style="font-size: 4cqh;">

- ドワンゴ教育事業
  - Webフロントエンド<wbr />なんでも屋
  - 縦書きを業務で使っている
    - 現代文、古文、漢文の教材
- TypeScriptの技術カンファレンス主催
- 趣味でも縦書きを使っている

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
- ページ・見開き単位での横書き利用

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
<div style="font-size: 3.5cqh; color: #666; margin-block-start: 1cqw;">
10年前から利用可能
</div>
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

<div style="font-size: 3.5cqh; color: #666;">
本発表ではレイアウトと普及の観点から論じる<br />（フォント等にも課題は山積する）
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

<div style="font-size: 4cqh;">
メインコンテンツとして縦書きを使うなら、<wbr />既存の縦スクロール体験と整合させたい
</div>

<figure style="margin-left: 2cqw; margin-right: 0;"><img src="@slide/overflow-tategaki.png" alt="コンテンツの流れとビューポートの関係：縦書き（横スクロール）" style="max-width: 20cqw; max-height: 45cqh;" /><img src="@slide/overflow-yokogaki.png" alt="コンテンツの流れとビューポートの関係：横書き（縦スクロール）" style="max-width: 20cqw; max-height: 45cqh;" /><figcaption>コンテンツの流れとビューポートの関係</figcaption></figure>

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

しかもこのレイアウト構造は、<wbr />縦書きしない言語にも利点がある

</div>
</div>

---

<!-- 8: CJKだけの話ではない（問題提起） -->

<div class="wrapper center">

<div>
<div style="font-size: 6cqh;">「縦書きのWebサイト」は<br />CJKだけの関心事ではない</div>
<div style="font-size: 4cqh; color: #666; margin-block-start: 3cqh;">書字方向の異なる言語・文字間で<br />本文のレイアウト構造を共有する方法にもなる</div>
<div style="font-size: 3.5cqh; color: #888; margin-block-start: 2cqh;">ただし縦書きのみで構成するWebと<br />縦横を混用するWebでは設計課題が異なる</div>

</div>

</div>

---

<!-- 9: 翻訳・多言語対応（デモ） -->

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

<!-- 10: CSSの不足 -->

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

<!-- 11: CSSWGへの提案 -->

<div class="wrapper header-and-content">

# CSSWGへの提案

<div style="flex: 1; display: flex; flex-direction: column;">

`column-width` を直ちに使用し<wbr />コンテナサイズを段の結果から導出する<wbr />**固定カラム幅モード**を提案

- 既存：コンテナサイズ→段に分割
- 提案：段の幅を固定→コンテナが従う
  - <span style="font-size: 4cqh; color: #666;">寸法決定の因果関係を逆転させる</span>

<div style="font-size: 3.5cqh; color: #666;">

既存仕様にも直交フローでの導出規定はあるが、<wbr />レイアウトを2回実行する必要があり実装負荷が高い。<wbr />固定カラム幅モードなら1回で済む

</div>

横書きでも「覗かせる」表現に有用

縦書きマルチカラムにも自然に適合

<div style="font-size: 3.5cqh; color: #666;">

[w3c/csswg-drafts#13665](https://github.com/w3c/csswg-drafts/issues/13665)

<figure style="margin-left: -2cqw; margin-right: 0;"><img src="@slide/multicol-whatweneed.png" alt="欲しいモデル（無限方向への積み重ね）" style="max-width: 15cqw; max-height: 55cqh;" /></figure>

</div>

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

イメージがないのは、<wbr />**発明**が必要だから

連続メディアでの縦書きは<wbr />横スクロールのイメージが強すぎる

循環構造がある。どこかを断たなければならない

<figure style="margin-left: 0; margin-right: -4cqw"><img src="@slide/cycle.svg" alt="循環構造の円環図：イメージがない→コンテンツが生まれない→実需がない→仕様が成熟しない→道具が整わない→イメージがない、の循環と断つポイント" style="max-width: 50cqw; max-height: 100cqh;" /></figure>

</div>
</div>

---

<!-- 13: イメージの供給 -->

<div class="wrapper header-and-content">

# 循環を断ち、<wbr />Web上の縦書きを<wbr />身近なものにするために

<div style="flex: 1; display: flex; flex-direction: column;">

縦書きはもっとカジュアルに使える<wbr />という**イメージの供給**が必要

Web上での縦書きの<wbr /><strong>「アクティブユーザー」<wbr />を生み出したい</strong>

<div style="font-size: 4.5cqh;">

- 部品単位でも縦書きの存在感を作れる
  - これは既にできている
- 縦スクロールで読める縦書きの周知
  - マルチカラムの活用による
- Webで縦書きを使う設計知見の蓄積
  - ページ・サイト全体の構築知見

</div>

<div style="font-size: 3.5cqh; color: #666;">

[縦書きWeb普及委員会](https://tategaki.github.io/) が<wbr />かつてやっていたことは、<wbr />まだこれからも必要なのではないか

</div>

<div style="font-size: 3.5cqh; color: #666;">
もちろん、縦書きのみで構成するWebと、<wbr />縦横を混用するWebでは設計課題が異なる
</div>

</div>
</div>

---

<!-- 14: クライマックス -->

<div class="wrapper center">

<div style="display: flex; flex-direction: column; gap: 4cqh;">
<div style="font-size: 4cqh; color: #666;">縦書きのみで構成するWebも<br />縦横を混用するWebも<br />それぞれ独自の設計課題を持つ</div>
<div style="font-size: 3cqh; color: #888; margin-block-end: 2cqh;">とりわけ混用の設計は<wbr />未踏の問題が多い</div>

<div style="font-size: 4cqh">「縦書きのWebサイト」を自然な存在にするには</div>

<div style="font-size: 5.5cqh; line-height: 1.6;">我々に必要な表現は<br />我々が発明しなければならない<br />発明できるように<br />整えなければならない</div>

</div>

</div>

---

<!-- 15: まとめ -->

<div class="wrapper header-and-content">

<h1 class="upright" style="overflow: visible;">まとめ</h1>

<div style="flex: 1; display: flex; flex-direction: column; font-size: 4cqh; line-height: 1.8;">

紙面が証明した**縦横混在の豊かさ**を、Webはまだ持てていない

縦組みマルチカラムで、<wbr />縦書きを既存の縦スクロール世界に接続できる

これはCJKだけでなく、<wbr />書字方向をまたぐ多言語Webの基盤になりうる

CSS側の不足はあるが、<wbr />仕様の進化で対応を期待できる

技術とイメージの両面から循環を断つ

Web縦書きのさらなる普及を目指し、<wbr />
それを新たに「<del style="color: #777;">縦書きの</del>Webサイト」と呼びたい

</div>
</div>

---

<!-- フォントの問題 -->

<div class="wrapper header-and-content">

# おまけ：フォントの問題

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

<div class="wrapper header-and-content">

# おまけ：フォーム対応

<div style="flex: 1; display: flex; flex-direction: column; gap: 2em; justify-content: center;">

<baseline-status featureId="vertical-form-controls"></baseline-status>

<label>
  名前：
  <input type="text" style="font-size: 1em;" />
</label>

<textarea rows="4" cols="20" style="font-size: 1em;">こんにちは</textarea>

<select style="font-size: 1em;">
  <option>選択肢１</option>
  <option>選択肢２</option>
  <option>選択肢３</option>
</select>

<div style="font-size: 1em;">
  <div><label><input type="checkbox" id="check1" />選択肢１</label></div>
  <div><label><input type="checkbox" id="check2" />選択肢２</label></div>
  <div><label><input type="checkbox" id="check3" />選択肢３</label></div>
</div>

<input type="file" style="font-size: 1em;" />

</div>


---

<div class="wrapper center">

<img src="@slide/CSS Logical Properties and Values.svg" style="flex: 1" />

</div>
