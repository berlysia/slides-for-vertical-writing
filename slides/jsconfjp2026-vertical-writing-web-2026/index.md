---
title: "縦書きWebの周辺状況 2026 - JSConf JP 2026"
description: 選択式問題のコンポーネントを題材に、2026年に縦書きの周辺で「解消した」「仕様にする動きがあった」「話題が起きた」ことを紹介します
author: berlysia
date: 2026-11-22
---

<link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/yakuhanjp@4.1.1/dist/css/yakuhanrp_s.css">

<style>
* {
  font-family: YakuHanRPs, "Hiragino Sans", "Hiragino Kaku Gothic ProN", "Yu Gothic", "Noto Sans JP", sans-serif;
}
code, pre, pre * {
  font-family: "Noto Sans Mono", ui-monospace, monospace;
}

/*
  配色は橙・緑・紫の3色。
  3段階の対応: 解消した=緑、仕様へ=橙、話題が起きた=紫
*/
:root {
  --orange: #f7b26a;
  --orange-deep: #d9822b;
  --green: #74db9c;
  --green-deep: #23935a;
  --purple: #c49be8;
  --purple-deep: #6b3fa6;
  --gray: #e4e4e4;
  --ink: #333;
  --sub: #666;
}

.wrapper {
  word-break: keep-all;
  overflow-wrap: normal;
}
.slide-content li > p { margin: 0; }
.slide-content ul { font-size: 4.6cqh; line-height: 1.8; }

/* 見出しは通常の大きさ。締めの一言は本文の大きさで下寄せ */
.takeaway {
  word-break: normal;
  line-break: strict;
  font-size: 4.4cqh;
  font-weight: 600;
  color: #444;
  text-align: end;
  line-height: 1.6;
}
.takeaway .em-g { color: var(--green-deep); }
.takeaway .em-o { color: var(--orange-deep); }
.takeaway .em-p { color: var(--purple-deep); }

.caption {
  font-size: 3.2cqh;
  color: #888;
}

/* 重ねブロック */
.blk {
  display: inline-block;
  padding: 1cqh 2.2cqh;
  border-radius: 1cqh;
  font-weight: bold;
  color: var(--ink);
  line-height: 1.4;
}
.blk.o { background: var(--orange); }
.blk.g { background: var(--green); }
.blk.p { background: var(--purple); }
.blk.n { background: var(--gray); color: #555; }
.blk.dash {
  background: transparent;
  border: 0.4cqh dashed #999;
  color: #777;
}

/* 題材の問題コンポーネント（親の writing-mode を継承するだけ） */
.q-pair {
  writing-mode: horizontal-tb;
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 5cqh;
}
.q {
  word-break: normal;
  line-break: strict;
  font-size: 3cqh;
  line-height: 1.6;
  background: #fff;
  border: 0.4cqh solid #cfc3e0;
  border-radius: 1.5cqh;
  padding: 2cqh;
  display: flex;
  flex-direction: column;
  gap: 1.5cqh;
  block-size: fit-content;
}
.q.wm-horizontal { inline-size: 46cqh; }
.q.wm-vertical { inline-size: 50cqh; }
.q-text {
  padding: 1cqh;
  background: #f5f1fa;
  border-radius: 1cqh;
}
.q-choices {
  display: flex;
  flex-direction: column;
  gap: 1cqh;
}
.q-choice {
  padding: 0.6cqh 1.4cqh;
  border: 0.3cqh solid #cfc3e0;
  border-radius: 1cqh;
}
.q-choice.selected {
  border-color: var(--orange);
  background: var(--orange);
  font-weight: bold;
}
.q-acc {
  display: flex;
  align-items: center;
  gap: 1cqh;
  color: var(--purple-deep);
}
.q-arrow { display: inline-block; font-size: 0.9em; }
.q-note {
  display: inline-block;
  padding: 0.1em 0.5em;
  border-radius: 0.4em;
  background: var(--green);
  color: #234;
  font-size: 0.8em;
  font-weight: bold;
}
.q .hl {
  outline: 0.6cqh solid #e24a4a;
  outline-offset: 0.5cqh;
}
.q-col {
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 2cqh;
}

/* 差し替え用の枠 */
.shot-frame {
  writing-mode: horizontal-tb;
  display: grid;
  place-items: center;
  text-align: center;
  border: 0.5cqh dashed #aaa;
  border-radius: 1.5cqh;
  background: repeating-linear-gradient(45deg, #f6f6f6 0 2cqh, #eee 2cqh 4cqh);
  color: #888;
  font-size: 3cqh;
  padding: 2cqh;
}

/* コード */
.code {
  writing-mode: horizontal-tb;
  inline-size: max-content;
  font-size: 3.2cqh;
  line-height: 1.5;
  background: #2b2340;
  color: #ece6f5;
  padding: 2cqh 3cqh;
  border-radius: 1.5cqh;
  white-space: pre;
  font-family: "Noto Sans Mono", ui-monospace, monospace;
  font-weight: 500;
  text-align: start;
}
.code .cm { color: #9d93b3; }
.code .em { color: var(--orange); font-weight: bold; }
.code .bad { color: #ff9a9a; }
.code .ok { color: var(--green); }

/* 横並びの汎用 */
.row {
  writing-mode: horizontal-tb;
  inline-size: max-content;
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 4cqh;
}
.col {
  writing-mode: horizontal-tb;
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 2cqh;
}
/* margin の可視化 */
.m-demo {
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 1.5cqh;
}
.m-outer {
  background: repeating-linear-gradient(45deg, #fde3c6 0 1cqh, #f9cf9f 1cqh 2cqh);
  border: 0.3cqh solid var(--orange);
  display: flow-root;
}
.m-outer.wm-horizontal { inline-size: 36cqh; }
.m-outer.wm-vertical { block-size: 36cqh; }
.m-choice {
  background: #fff;
  border: 0.3cqh solid var(--purple-deep);
  border-radius: 0.8cqh;
  font-size: 3cqh;
  padding: 0.6cqh 1.4cqh;
}
.m-choice.phys { margin: 2cqh 6cqh; }
.m-choice.logi { margin-block: 2cqh; margin-inline: 6cqh; }
.m-label { font-size: 3.2cqh; font-weight: bold; }
.m-label.ok { color: var(--green-deep); }
.m-label.ng { color: #d33; }

/* 誰 */
.qr-frame {
  inline-size: 30cqh;
  block-size: 30cqh;
}
</style>
<style>
/* 図の塊: 塊ごと中央に置き、中身は先頭揃え */
.stack {
  writing-mode: horizontal-tb;
  inline-size: max-content;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  gap: 3cqh;
}
.pairs {
  display: grid;
  grid-template-columns: max-content max-content;
  gap: 2.5cqh 3cqh;
  align-items: center;
}
.pairs > .blk {
  font-size: 3.2cqh;
  text-align: center;
  justify-self: stretch;
}

/* 進め方 */
.stages-ul ul { font-size: 5cqh; }
.stages-ul ul ul { font-size: 4.2cqh; color: var(--sub); }

/* 嬉しいの？ */
.glad {
  font-size: 4.6cqh;
  line-height: 1.9;
}
</style>

<!--
1: タイトル
口頭: ドワンゴから来ましたberlysiaです。今年あんまり縦書きの話してないので、縦書きの話をします。
-->

<div class="wrapper center">

<div style="display: flex; flex-direction: column; inline-size: calc(100cqh - var(--space-wrapper) * 2); gap: 4cqh;">
  <h1 class="upright" style="overflow: visible; font-size: 1.6em">縦書きＷｅｂの<wbr />周辺状況２０２６</h1>
  <div style="font-size: 4cqh; color: #666; text-align: end;">JSConf JP 2026 / berlysia</div>
</div>

</div>

---

<!--
2: 選択式問題のコンポーネント例
口頭: ドワンゴの教育事業では問題を出題するのだが、ここには当然国語の教材があるので縦書きの表現があります。
コンポーネントを作ることに馴染んだ私たちはこれを宣言的に書きたいわけですが、色々と課題があるんですよね
-->

<div class="wrapper header-and-content">

# 教材の選択式問題

<div style="flex: 1; display: flex; flex-direction: column; justify-content: center; align-items: center;">

<div class="q-pair">

<div class="q-col">
<div class="q wm-horizontal">
<div class="q-text">今は昔、竹取の翁といふものありけり。野山にまじりて竹を取りつつ、よろづのことに使ひけり。</div>
<div>翁は何を使ったか。</div>
<div class="q-choices">
<div class="q-choice">ア　竹</div>
<div class="q-choice">イ　野山</div>
<div class="q-choice">ウ　翁</div>
</div>
<div class="q-acc"><span class="q-arrow">▼</span> 解説を開く</div>
</div>
<div class="caption">横組み</div>
</div>

<div class="q-col">
<div class="q wm-vertical">
<div class="q-text">今は昔、竹取の翁といふものありけり。野山にまじりて竹を取りつつ、よろづのことに使ひけり。</div>
<div>翁は何を使ったか。</div>
<div class="q-choices">
<div class="q-choice">ア　竹</div>
<div class="q-choice">イ　野山</div>
<div class="q-choice">ウ　翁</div>
</div>
<div class="q-acc"><span class="q-arrow">▼</span> 解説を開く</div>
</div>
<div class="caption">縦組み</div>
</div>

</div>

</div>

<div class="takeaway">宣言的に書きたいが、<wbr />色々と課題がある</div>

</div>

---

<!--
3: どう進めていくか
口頭: 実際に解消して楽になったこと、仕様にしていく動きが起こったこと、話題が起こっていること、に分けて、紹介していきます。
-->

<div class="wrapper header-and-content">

# 今日の話

<div style="flex: 1; display: flex; flex-direction: column; justify-content: center; align-items: center;">

<div class="stages-ul">

- <span class="blk g">解消した</span>
  - Safari の line-clamp まわり
- <span class="blk o">仕様にする動き</span>
  - 論理プロパティのショートハンド
- <span class="blk p">話題が起きた</span>
  - 書字方向を CSS で問う

</div>

</div>

<div class="takeaway">3つの段階に分けて紹介</div>

</div>

---

<!--
4: 縦書きの実装が整ってないところの話
口頭: Safariのline-clamp周りに大きな進捗が相次いでいます
そもそも縦書きにするとレイアウトが完全破綻していた……のが最近直ったりしました。
省略記号が横向いてるとか……いろいろありました

実機で確かめた結果（2026-11-22、.tmp/line-clamp-test/slide.html、竹取物語の冒頭）:
- Safari 26.6.2: -webkit-line-clamp は writing-mode が horizontal-tb に変わり、行が横に流れて文字が横倒しになる。3行目の末尾に「…」は付くが、4行目以降も見えている。標準の line-clamp は未対応（CSS.supports が false）で、切れずに全文が出る
- Safari Technology Preview 27.0（build 21627.1.8.19.1）: -webkit-line-clamp は26.6と同じく横書きに固定。標準の line-clamp は対応（CSS.supports が true）で、縦書きのまま3行で切れ、省略記号も縦向き
- 参考（Playwright）: Chrome 157 は -webkit-line-clamp が縦書きのまま正しく切れる。標準の line-clamp は Chrome・Firefox 151 とも未対応
- なので「直った」のは標準の line-clamp を使った場合で、-webkit-line-clamp の横書き固定は TP でも直っていない。「破綻していたのが直った」と言うなら「line-clamp に書き換えれば」と添える

調べた事実（話すときの注意）:
- WebKit は display: -webkit-box の要素の writing-mode を horizontal-tb に固定する（StyleAdjuster.cpp の FIXME、bug 46418）。2026年11月時点の main でもそのまま
- -webkit-line-clamp を新しい line-clamp の実装に乗せる PR（WebKit #77034）は10月29日にマージされずに閉じた
- 標準の line-clamp は10月以降、[line-clamp] の PR が約40件（調査スレッドの集計。PR #79353 など）
- Safari TP 257（11/18）: 縦書きで line-clamp の省略記号が横向きに描かれる問題を修正（191873016）、縦書きの等幅 upright の幅計測が狭すぎて改行・clamp がずれる問題も修正（192081282）
- Firefox も縦書きの line-clamp を修正、Firefox 163 向け（bug 2092330、設定で有効化する段階）
- TP 256（11/4）: line-clamp のショートハンドが continue: collapse を設定するように
- TP 257 の修正は bug 329596。TP 256・257 ともプレビュー版
- 区分は「直った」ではなく「直りつつある／実装が進んでいる」と言う
- 補足（言わなくてよい）: Safari 27.0（9月）の -webkit-box 修正（175323734）は、書字方向が直交する子の伸縮配分の話で、横書き固定とは別物
-->

<div class="wrapper header-and-content">

# Safari の<wbr />line-clamp まわり

<div class="wm-horizontal" style="flex: 1; display: flex; flex-direction: column; justify-content: center; align-items: center; gap: 4cqh;">

<div class="pairs">
<span class="blk n">Safari 26.6</span>
<img src="@slide/line-clamp-safari-26.png" alt="左の -webkit-line-clamp: 3 は縦書きのはずの文章が横書きで組まれ、文字は横倒しになっている。右の line-clamp: 3 は縦書きのまま切れずに全文が出ている" style="block-size: 27cqh;" />
<span class="blk g">Safari TP</span>
<img src="@slide/line-clamp-safari-tp.png" alt="左の -webkit-line-clamp: 3 は今も横書きで組まれている。右の line-clamp: 3 は縦書きのまま3行で切れ、末尾に縦向きの省略記号が付いている" style="block-size: 27cqh;" />
</div>

</div>

<div class="takeaway"><code>line-clamp</code> なら<wbr /><span class="em-g">縦書きのまま切れる</span></div>

</div>

---

<!--
5: 論理プロパティのショートハンド（1/3）
口頭: 縦書きでも横書きでも、文字の流れる方向に相対的な指定をする方法があって、これを論理プロパティと言います。
が、 margin と指定した場合には上下左右方向の物理的指定しかできません。
-->

<div class="wrapper header-and-content">

# 論理プロパティの<wbr />ショートハンド

<div class="wm-horizontal" style="flex: 1; display: flex; flex-direction: column; justify-content: center; align-items: center; gap: 4cqh;">

<div class="stack">

<div class="row" style="align-items: flex-end;">

<div class="m-demo">
<div class="m-outer wm-vertical"><div class="m-choice logi">ア　竹</div></div>
<div class="m-label ok">縦 + 論理：意図どおり</div>
</div>

<div class="m-demo">
<div class="m-outer wm-vertical"><div class="m-choice phys">ア　竹</div></div>
<div class="m-label ng">縦 + 物理：ずれる</div>
</div>

<div class="m-demo">
<div class="m-outer wm-horizontal"><div class="m-choice phys">ア　竹</div></div>
<div class="m-label ok">横 + 物理：意図どおり</div>
</div>

</div>

<div class="code"><span class="bad">.choice { margin: 8px 16px; }</span>          <span class="cm">/* 上下・左右の物理指定 */</span>
<span class="ok">.choice { margin-block: 8px;
          margin-inline: 16px; }</span>      <span class="cm">/* 論理指定は2行に割るしかない */</span></div>

</div>

</div>

<div class="takeaway"><code>margin</code> は<wbr />物理指定しかできない</div>

</div>

---

<!--
6: 論理プロパティのショートハンド（2/3）
口頭: これを、構文を追加して書けるようにするアイデアがあって……これの草案を書いていくことが先日のTPACで決議されました。
このアイデア自体は10年近く前からあったのですが、時を経ていま動きを見せた……という感じの出来事です。
注意: 構文は未確定。issue の起票は2017年（csswg-drafts #1282）
-->

<div class="wrapper header-and-content">

# 構文を足すアイデア

<div class="wm-horizontal" style="flex: 1; display: flex; flex-direction: column; justify-content: center; align-items: center; gap: 3cqh;">

<div class="stack">

<div class="pairs">
<span class="blk o">宣言１つ</span>
<div class="code">.choice { margin: 8px 16px <span class="em">!logical</span>; }</div>
<span class="blk o">ブロック丸ごと</span>
<div class="code"><span class="em">@logical</span> {
  .choice { margin: 8px 16px; padding: 4px 12px; }
}</div>
</div>

<div class="caption">2017年に起票、2026年10月の TPAC で草案化を決議。構文は変わりうる<br /><a href="https://github.com/w3c/csswg-drafts/issues/1282" target="_blank">w3c/csswg-drafts #1282</a></div>

</div>

</div>

<div class="takeaway"><span class="tcu-all">10</span>年近く前のアイデアが<wbr /><span class="em-o">草案へ</span></div>

</div>

---

<!--
7: 論理プロパティのショートハンド（3/3）
口頭: これ縦書きの民として嬉しいの？ という話をすると、地味だけどうれしいです。でもこれだけだと「CSSによる表現としてできることが広がる」ではない。
道具としての対称性とか完全性みたいな観点では、自然に存在して欲しいものなので、仲間はずれ感はなくなって嬉しい、って感じです。
CSSファイルのバイト数を気にするような道具だと、CSS側の対称性不足で論理プロパティ対応が粗いことも多いので、ちゃんとしやすくなるのは大歓迎です。
-->

<div class="wrapper header-and-content">

# 縦書きの民として<wbr />嬉しいの？

<div style="flex: 1; display: flex; flex-direction: column; justify-content: center; align-items: center;">

<div class="glad">

- 表現できることは<wbr />増えない
- 道具としての対称性が<wbr />揃う
- バイト数を気にする道具でも<wbr />論理対応しやすい

</div>

</div>

<div class="takeaway">地味だけど、<wbr />うれしい</div>

</div>

---

<!--
8: 書字方向を確認できるようにする提案
口頭: 論理プロパティがあるので縦書きでも横書きでも一定のビジュアルを表現できる……というほど甘くはないのです
JSからのインターフェースは論理対応していないことが多く、仮にしていたとしても一概に論理のみで記述できるわけでもありません。
getComputedStyle を用いて取得したり、もっとざっくりやるならクラス名の有無なんかをみる古典的なやり方が、今とれる現場のアプローチです。

これに対して、スタイルクエリの拡張のような形で、writing-modeの値を取得できるようにしたほうがいいか？ という話題が起こりました。
私としてもまさしく指摘してきている話題で、私から話題出せてないことを恥じるばかりですが……
これはまだ話題が起こったという段階です。（まだリアクションしただけなんだけど、）縦書きを実用する立場からもコメントするつもりです。
補足: 下の構文は issue コメントにある仮の例。Agenda+ だが会議ではまだ話されていない。構文案は割れている（emilio さん=物理的な向き、Loirooriol さん=使用値を見るクエリ、fantasai さん=10/29 writing-mode() 関数）
-->

<div class="wrapper header-and-content">

# 書字方向を<wbr />CSS で問う

<div class="wm-horizontal" style="flex: 1; display: flex; flex-direction: column; justify-content: center; align-items: center; gap: 3cqh;">

<div class="stack">

<div class="pairs">
<span class="blk n">いま</span>
<div class="code"><span class="cm">// 実行時に書字方向を読む</span>
getComputedStyle(el).<span class="em">writingMode</span>
<span class="cm">// もっとざっくり: クラス名を見る</span>
el.closest(<span class="em">".is-vertical"</span>)</div>
<span class="blk p">話題</span>
<div class="code"><span class="cm">/* issue コメントの仮の例 */</span>
<span class="em">@container style(writing-mode: vertical-rl)</span> {
  .accordion__arrow { rotate: 90deg; }
}</div>
</div>

<div class="caption">まだ会議前（Agenda+）　<a href="https://github.com/w3c/csswg-drafts/issues/14527" target="_blank">w3c/csswg-drafts #14527</a></div>

</div>

</div>

<div class="takeaway"><span class="em-p">話題が起きた</span>段階。<wbr />実用する立場からコメントしたい</div>

</div>

---

<!--
9: 縦書きは存在する
口頭: 縦書きをWebの世界で、アプリケーションの中で使うことは絵空事じゃない。私たちにとっては現実の需要で、現実の課題です。
ドワンゴの教育事業は、Webでの縦書きを真剣に実用しています。
-->

<div class="wrapper center">

<div style="display: flex; flex-direction: column; align-items: center; gap: 4cqh;">
  <div style="font-size: 9cqh; font-weight: bold;">縦書きは存在する</div>
  <div style="font-size: 4.4cqh; color: var(--sub); font-weight: 600; line-height: 1.8;">Webの縦書きは、<wbr />現実の需要で、<wbr />現実の課題</div>
</div>

</div>

---

<!--
10: 誰
口頭: 適当に名乗る
差し替え: QR
-->

<div class="wrapper header-and-content">

# 誰

<div class="wm-horizontal" style="flex: 1; display: flex; justify-content: center; align-items: center; gap: 6cqh;">

<div class="col">
<img src="@slide/berlysia.jpg" alt="berlysia のアイコン" style="block-size: 30cqh; border-radius: 9999px;" />
<div style="text-align: center; font-size: 3.4cqh; color: var(--sub);">berlysia / べるりしあ</div>
</div>

<div class="col" style="align-items: flex-start; gap: 1.5cqh; font-size: 3.8cqh;">
<span class="blk o">株式会社ドワンゴ 教育事業</span>
<span>Webでの縦書きを真剣に実用</span>
<span class="blk g" style="margin-block-start: 1cqh;">Web の縦書きに真剣な一般人</span>
</div>

<div class="col">
<div class="shot-frame qr-frame">QR<br />（差し替え用）</div>
</div>

</div>

</div>
