---
title: "縦書きWebの周辺状況 2026 - JSConf JP 2026"
description: 選択式問題のコンポーネントを題材に、2026年に縦書きの周辺で「解消していく」「仕様になっていく」「話題が起きている」ことを紹介します
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
  3段階の対応: 解消していく=緑、仕様になっていく=橙、話題が起きている=紫
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
.slide-content { --fs-body: 6cqh; --fs-heading-1: 8cqh; --fs-caption: 4.4cqh; }
.slide-content ul { font-size: 5.52cqh; line-height: 1.8; }

/* 見出しは通常の大きさ。締めの一言は本文の大きさで下寄せ */
.takeaway {
  word-break: normal;
  line-break: strict;
  font-size: 5.28cqh;
  font-weight: 600;
  color: #444;
  text-align: end;
  line-height: 1.6;
}
.takeaway .em-g { color: var(--green-deep); }
.takeaway .em-o { color: var(--orange-deep); }
.takeaway .em-p { color: var(--purple-deep); }

.caption {
  font-size: 3.84cqh;
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
  font-size: 3.24cqh;
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
/* 1行の文字数を縦横でそろえる */
.q.wm-horizontal, .q.wm-vertical { inline-size: 18.5em; }
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
  font-size: 3.6cqh;
  padding: 2cqh;
}

/* コード */
.code {
  writing-mode: horizontal-tb;
  inline-size: max-content;
  font-size: 3.84cqh;
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
/* 3つの図を同じ大きさの区画に置き、ラベルと枠の位置を揃える */
.m-grid {
  writing-mode: horizontal-tb;
  display: grid;
  grid-template-columns: repeat(3, 40cqh);
  grid-template-rows: auto auto auto;
  column-gap: 4cqh;
  row-gap: 1.2cqh;
}
.slide-content .m-demo {
  margin: 0;
  padding: 0;
  display: grid;
  grid-row: span 3;
  grid-template-rows: subgrid;
  justify-items: start;
}
.m-stage {
  justify-self: stretch;
  block-size: 46cqh;
  display: grid;
  place-items: center;
  border: 0.6cqh solid;
  border-radius: 1cqh;
}
.m-demo.ok .m-stage { border-color: var(--green-deep); }
.m-code { font-size: 3.12cqh; color: var(--sub); white-space: nowrap; align-self: end; }
.shot .m-code { align-self: flex-start; }
.m-demo.ng .m-stage { border-color: #d33; }
.m-demo.neutral .m-stage { border-color: #ccc; }
.m-outer {
  background: repeating-linear-gradient(45deg, #fde3c6 0 1cqh, #f9cf9f 1cqh 2cqh);
  border: 0.3cqh solid var(--orange);
  display: flow-root;
}
/* 外枠は中身＋margin ちょうどの大きさにして、余白の差だけを見せる */
.m-outer { inline-size: fit-content; block-size: fit-content; }
.m-choice {
  white-space: nowrap;
  line-height: 1.5;
  background: #fff;
  border: 0.3cqh solid var(--purple-deep);
  border-radius: 0.8cqh;
  font-size: 3.12cqh;
  padding: 0.6cqh 1.2cqh;
}
.m-choice.phys { margin: 6cqh 1.5cqh; }
.m-choice.logi { margin-block: 6cqh; margin-inline: 1.5cqh; }
.m-label { font-size: 3.84cqh; font-weight: bold; }
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
/* line-clamp のスクショ2枚 */
.lc-grid { grid-template-columns: repeat(2, 66cqh); grid-template-rows: auto auto auto auto; }
.lc-grid .m-demo { grid-row: span 4; }
.lc-grid .shot-label { font-size: 3.2cqh; white-space: nowrap; }
.lc-stage { block-size: 44cqh; }
.lc-stage img { block-size: 38cqh; inline-size: auto; }

/* 構文を足すアイデア */
.syntax-pairs { grid-template-columns: 20cqh max-content; row-gap: 2.5cqh; }
.syntax-pairs > .code { justify-self: stretch; inline-size: auto; font-size: 3.6cqh; }
.syntax-pairs > .blk { font-size: 3.6cqh; }
.syntax-meta { display: flex; flex-direction: column; gap: 1.2cqh; font-size: 3.36cqh; }
.syntax-meta .blk { font-size: 3.12cqh; }

/* 縦書きは存在する */
.exist { display: flex; flex-direction: column; align-items: center; gap: 5cqh; }
.exist-title { font-size: 11cqh; font-weight: 900; line-height: 1.3; }
.exist-chips { display: flex; flex-direction: column; gap: 2cqh; font-size: 5.28cqh; }
.exist-proof .q { font-size: 2.64cqh; inline-size: 18.5em; opacity: 0.9; }

/* 締め（縦書きは存在する＋誰）。テキストは縦組みのまま */
/* 右の見出しのまとまりと左の名乗りのまとまりを、上端をそろえ、同じ間隔の区切り線で釣り合わせる */
.closing { display: flex; flex-direction: column; align-items: stretch; gap: 0; }
.closing-head { display: flex; flex-direction: column; align-items: flex-start; gap: 2.5cqh; padding-block-end: 6cqh; }
.closing-title { font-size: 10.5cqh; font-weight: 900; line-height: 1.3; }
.closing-sub { font-size: 5.28cqh; font-weight: 600; color: var(--sub); }
.closing-me { display: flex; flex-direction: column; align-items: flex-start; gap: 5cqh; font-size: 4.32cqh; line-height: 1.3; padding-block-start: 6cqh; border-block-start: 0.3cqh solid #ddd; }
/* アイコンは名前と肩書きの2列の上に、中央そろえで置く */
.closing-person { writing-mode: horizontal-tb; display: flex; flex-direction: column; align-items: center; gap: 2.5cqh; }
.closing-person-text { writing-mode: vertical-rl; display: flex; flex-direction: column; align-items: flex-start; gap: 2cqh; }
.closing-orgs { display: flex; flex-direction: column; align-items: flex-start; gap: 2cqh; }
.closing-avatar { display: block; width: 14cqh; height: 14cqh; border-radius: 9999px; object-fit: cover; box-shadow: 0 0 0 0.5cqh #fff, 0 0 0 0.8cqh #ddd; }
.closing-name { font-size: 5.52cqh; font-weight: bold; }
.closing-name span { font-size: 0.6em; color: var(--sub); margin-inline-start: 0.5em; }
.closing-org { font-weight: bold; color: var(--orange-deep); }
.closing-tag { font-weight: bold; color: var(--green-deep); }

/* 物理と論理の対称性の表 */
.sym { display: grid; grid-template-columns: max-content max-content max-content; gap: 2cqh 4cqh; align-items: center; font-size: 4.8cqh; padding: 3cqh 4cqh; background: #f7f7f7; border-radius: 1.5cqh; }
.sym-h { font-weight: bold; color: var(--sub); }
.sym-r { font-weight: bold; }
.sym code { font-size: 4.32cqh; }
.sym-none { color: #bbb; }
.sym-pair { display: flex; flex-direction: column; align-items: flex-start; gap: 1cqh; }
.sym-new { border: 0.4cqh dashed var(--orange-deep); border-radius: 1cqh; padding: 0.6cqh 1.2cqh; color: var(--orange-deep); font-weight: bold; }
.glad-chips { display: grid; grid-template-columns: max-content max-content; align-items: start; gap: 1.2cqh 1.5cqh; font-size: 3.36cqh; }
.glad-chips .glad-col { grid-column: 1 / -1; }
.glad-col { display: flex; flex-direction: column; align-items: flex-start; gap: 1.2cqh; }
.glad-example { display: flex; align-items: flex-start; gap: 1.2cqh; font-size: 3cqh; color: var(--sub); line-height: 1.6; }
.glad-example .blk { font-size: 3.12cqh; }

/* 傍線。縦書きでは右側、横書きでは下側に付ける */
u.bousen {
  text-decoration: underline 0.12em;
  text-underline-offset: 0.2em;
  text-underline-position: under right;
}

/* 論理／物理 × 横書き／縦書き の2×2 */
.mm { display: grid; grid-template-columns: max-content 40cqh 40cqh; grid-template-rows: auto 34cqh 34cqh; gap: 1.5cqh 2.5cqh; align-items: center; }
.mm-col { text-align: center; font-size: 4.08cqh; font-weight: bold; }
.mm-row { display: flex; flex-direction: column; align-items: flex-start; gap: 0.6cqh; font-size: 4.08cqh; }
.mm-row code { font-size: 2.88cqh; color: var(--sub); }
.mm-cell .m-choice { font-size: 2.64cqh; }
.mm-cell { position: relative; overflow: hidden; block-size: 100%; display: grid; place-items: center; border: 0.6cqh solid; border-radius: 1cqh; }
.mm-cell.ok { border-color: var(--green-deep); }
.mm-cell.ng { border-color: #d33; }
.mm-icon { position: absolute; inset-block-start: 1cqh; inset-inline-start: 1cqh; font-size: 4.08cqh; line-height: 1; }

/* アイコン */
.ic { inline-size: 1.1em; block-size: 1.1em; vertical-align: -0.2em; flex: none; }

/* スクショ2枚の比較 */
.slide-content .shot {
  margin: 0;
  padding: 0;
  flex: none;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  gap: 1.5cqh;
}
.shot img {
  block-size: 40cqh;
  inline-size: auto;
  max-inline-size: none;
  flex: none;
  border: 0.6cqh solid;
  border-radius: 1cqh;
}
.shot.ok img { border-color: var(--green-deep); }
.shot.ng img { border-color: #d33; }
.shot-ver { font-size: 3.12cqh; color: #888; }
.shot-note { font-size: 3.6cqh; font-weight: bold; color: #d33; }
.shot-label {
  display: flex;
  align-items: center;
  gap: 1.2cqh;
  font-size: 4.08cqh;
  font-weight: bold;
}

/* アコーディオンの開閉マークの図。開く方向を矢印で添える */
.open-v { display: flex; flex-direction: row; justify-content: center; align-items: center; gap: 1.5cqh; }
.open-h { display: flex; flex-direction: column; justify-content: center; align-items: center; gap: 1cqh; }
.open-dir { font-size: 5.28cqh; font-weight: bold; color: var(--orange-deep); line-height: 1; }
.acc-grid { grid-template-columns: repeat(3, 34cqh); }
.acc-grid .m-stage { block-size: 34cqh; }
.acc-stage { block-size: 26cqh; }
.acc {
  display: flex;
  align-items: center;
  gap: 1cqh;
  font-size: 3.84cqh;
  font-weight: bold;
  color: var(--purple-deep);
  padding: 1.2cqh;
  border: 0.3cqh solid #cfc3e0;
  border-radius: 1cqh;
  background: #fff;
}

/* 本文を絞り、はみ出したら「続きを読む」を出す部品（開閉マーク・計算・書字方向のスライドで共通）
   構造と置き方は原典（ブログの Extend コンポーネント）に合わせる:
   本体は block-size 固定＋overflow hidden、はみ出していれば block-end 側に
   グラデーションの帯を重ね、その中央にボタンを置く */
.clamp-grid { grid-template-columns: repeat(2, 50cqh); }
.readmore {
  position: relative;
  box-sizing: content-box;
  font-size: 2.76cqh;
  line-height: 1.7;
  background: #fff;
  border: 0.3cqh solid #cfc3e0;
  border-radius: 1cqh;
  padding: 1.2cqh;
  inline-size: 11em;
  /* 4行を見せ、その先をグラデーションで隠す（行送り1.7em） */
  block-size: 9em;
  overflow: hidden;
  word-break: normal;
}
.readmore-overlay {
  position: absolute;
  inset-inline: 0;
  inset-block-end: 0;
  block-size: 3em;
  background: linear-gradient(to bottom, transparent, #fff 60%);
}
.is-vertical .readmore-overlay { background: linear-gradient(to left, transparent, #fff 60%); }
.readmore-overlay[hidden] { display: none; }
.readmore-button {
  position: absolute;
  inset-inline: 0;
  inset-block-end: 0.6em;
  margin-inline: auto;
  inline-size: fit-content;
  font: inherit;
  font-size: 0.9em;
  font-weight: bold;
  color: #fff;
  background: var(--purple-deep);
  border: 0;
  border-radius: 0.6em;
  /* 横書きと縦書きで同じ見た目になるよう、寸法はすべて論理方向で決める */
  display: inline-flex;
  align-items: center;
  gap: 0.4em;
  block-size: 1.9em;
  padding-block: 0;
  padding-inline: 0.9em;
  line-height: 1;
  white-space: nowrap;
}
/* 文字の▼ではなく図形にして、縦横で寸法と回転の中心がずれないようにする */
.accordion__marker {
  display: inline-block;
  flex: none;
  inline-size: 0.7em;
  block-size: 0.6em;
  background: currentColor;
  clip-path: polygon(0 0, 100% 0, 50% 100%);
}
.is-vertical .accordion__marker { rotate: 90deg; }

/* 書字方向を CSS で問うスライド */
.q-grid { grid-template-columns: repeat(2, 44cqh); }
.m-demo.prop .m-stage { border-color: var(--purple-deep); border-style: dashed; }
.m-demo.now .m-stage { border-color: #aaa; }
.q-status { display: flex; align-items: center; gap: 1.2cqh; font-size: 3.12cqh; }
.q-sep { inline-size: 0.3cqh; block-size: 4cqh; background: #ccc; margin-inline: 1cqh; }
.blk.p-line { background: transparent; border: 0.3cqh solid var(--purple); color: var(--purple-deep); }

/* 部品が自分の置かれた流れを問う図 */
.flow-grid { writing-mode: horizontal-tb; display: flex; gap: 5cqh; align-items: flex-start; }
.slide-content .flow-demo { margin: 0; padding: 0; display: flex; flex-direction: column; gap: 1.2cqh; }
.flow-page {
  block-size: auto;
  padding: 2cqh;
  border: 0.4cqh solid #ccc;
  border-radius: 1cqh;
  background: #fafafa;
  font-size: 2.28cqh;
  line-height: 1.7;
}
.flow-page.wm-vertical { block-size: 52cqh; inline-size: 40cqh; }
.flow-page.wm-horizontal { inline-size: 58cqh; }
.flow-text { color: #aaa; margin: 0; word-break: normal; line-break: strict; }
.flow-comp { position: relative; margin-block: 1.5cqh; }
.flow-comp .readmore { font-size: 2.28cqh; inline-size: auto; box-sizing: border-box; }
.ask {
  position: absolute;
  inset-block-start: -3.6cqh;
  inset-inline-end: -2cqh;
  writing-mode: horizontal-tb;
  font-size: 2.88cqh;
  font-weight: bold;
  color: #fff;
  background: var(--orange-deep);
  padding: 0.3cqh 1cqh;
  border-radius: 1cqh;
  white-space: nowrap;
  z-index: 1;
}

/* 「縦？横？」から枝分かれする構想の図 */
.tree { display: flex; align-items: center; gap: 2cqh; font-size: 3.36cqh; }
.tree-root { display: flex; flex-direction: column; align-items: center; gap: 1cqh; }
.tree-lead { font-size: 3.84cqh; font-weight: bold; color: var(--sub); white-space: nowrap; }
.ask-chip { font-size: 3.6cqh; font-weight: bold; color: #fff; background: var(--orange-deep); padding: 0.4cqh 1.2cqh; border-radius: 1cqh; white-space: nowrap; }
.tree-branches { display: flex; flex-direction: column; gap: 1cqh; border-inline-start: 0.4cqh solid var(--purple); padding-block: 0.6cqh; }
.tree-branch { display: flex; align-items: center; gap: 1.5cqh; }
.tree-item { display: flex; flex-direction: column; align-items: flex-start; gap: 0.3cqh; }
.tree-branch::before { content: ""; inline-size: 3cqh; block-size: 0.4cqh; background: var(--purple); flex: none; }
.tree-label { font-weight: bold; color: var(--purple-deep); white-space: nowrap; }
.tree-desc { font-size: 3.12cqh; color: var(--sub); font-weight: 600; white-space: nowrap; }
.tree-code { font-size: 2.52cqh; background: #2b2340; color: #ece6f5; padding: 0.6cqh 1.2cqh; border-radius: 0.8cqh; white-space: nowrap; }
.tree-code .em { color: var(--orange); font-weight: bold; }

/* 修正ログ */
.fixlog {
  display: grid;
  grid-template-columns: repeat(3, max-content);
  gap: 1.2cqh 2cqh;
  align-items: center;
  font-size: 3.6cqh;
}
.fixlog > * { white-space: nowrap; }
.fixlog > .blk { font-size: 3.12cqh; padding: 0.6cqh 1.6cqh; text-align: center; }
.fixlog .now { color: var(--sub); font-weight: 600; }

.pairs {
  display: grid;
  grid-template-columns: max-content max-content;
  gap: 2.5cqh 3cqh;
  align-items: center;
}
.pairs > .blk {
  font-size: 3.84cqh;
  text-align: center;
  justify-self: stretch;
}

/* 進め方 */
.stages-ul ul { font-size: 6cqh; }
.stages-ul ul ul { font-size: 5.04cqh; color: var(--sub); }

/* 嬉しいの？ */
.glad {
  font-size: 5.52cqh;
  line-height: 1.9;
}
</style>

<script>
(() => {
  // スライドに載せたコードと同じ手順で、部品ごとに書字方向を読み、はみ出しを測る
  function updateReadMore(content) {
    const computedWritingMode = getComputedStyle(content).writingMode;
    const isHorizontal = computedWritingMode === "horizontal-tb";
    // ✕ の図（data-direction="off"）は、マークもグラデーションも横書きのままにする
    if (content.dataset.direction !== "off") {
      content.classList.toggle("is-vertical", computedWritingMode.startsWith("vertical"));
    }
    const scrollBlockSize = isHorizontal ? content.scrollHeight : content.scrollWidth;
    const clientBlockSize = isHorizontal ? content.clientHeight : content.clientWidth;
    const isOverflowing = scrollBlockSize > clientBlockSize;
    const readMoreButton = content.querySelector(".readmore-overlay");
    if (readMoreButton) readMoreButton.hidden = !isOverflowing;
  }
  function updateAll() {
    for (const content of document.querySelectorAll(".readmore")) updateReadMore(content);
  }
  let scheduled = false;
  function schedule() {
    if (scheduled) return;
    scheduled = true;
    requestAnimationFrame(() => { scheduled = false; updateAll(); });
  }
  // スライドの描き直しのたびに走らせる（自分の付けるクラスの変更では再実行しない）
  new MutationObserver((records) => {
    if (records.some((r) => r.type === "childList")) schedule();
  }).observe(document.body, { childList: true, subtree: true });
  window.addEventListener("resize", schedule);
  if (document.readyState === "loading") document.addEventListener("DOMContentLoaded", schedule);
  else schedule();
})();
</script>


<!--
1: タイトル
口頭: ドワンゴから来ましたberlysiaです。今年あんまり縦書きの話してないので、縦書きの話をします。
-->

<div class="wrapper center">

<div style="display: flex; flex-direction: column; inline-size: calc(100cqh - var(--space-wrapper) * 2); gap: 4cqh;">
  <h1 class="upright" style="overflow: visible; font-size: 1.6em; margin: 0;">縦書きＷｅｂの<br />周辺状況<span style="display: inline-block; margin-inline-start: 0.6em; font-size: 0.75em; color: #555;"><span class="tcu-all">20</span><span class="tcu-all">26</span></span></h1>
  <div style="font-size: 4.8cqh; color: #666; text-align: end;">JSConf JP 2026 / berlysia</div>
</div>

</div>

---

<!--
2: 選択式問題のコンポーネント例
例文: 竹取物語「翁、竹を取ること久しくなり<u class="bousen">ぬ</u>。勢猛の者になりにけり。」（表記は Wikibooks「竹取物語 かぐや姫のおひたち」に合わせた。新井信之旧蔵本の校訂本文では「翁、竹をとる事、ひさしくなりぬ。いきをゐ、まことの物になりにけり。」）
正解はア: 「ぬ」は連用形「なり」に付き文末なので完了「ぬ」の終止形。イは打消「ず」の連体形「ぬ」との見分け（未然形に付く）、ウは活用形の取り違え（完了「ぬ」の連体形は「ぬる」）を問うひっかけ
口頭: ドワンゴの教育事業では問題を出題するのだが、ここには当然国語の教材があるので縦書きの表現があります。
コンポーネントを作ることに馴染んだ私たちはこれを宣言的に書きたいわけですが、色々と課題があるんですよね
-->

<div class="wrapper header-and-content">

# 教材の選択式問題

<div style="flex: 1; display: flex; flex-direction: column; justify-content: center; align-items: center;">

<div class="q-pair">

<div class="q-col">
<div class="q wm-horizontal">
<div class="q-text">翁、竹を取ること久しくなり<u class="bousen">ぬ</u>。勢猛の者になりにけり。</div>
<div>傍線部「ぬ」の文法的説明として適当なものを選べ。</div>
<div class="q-choices">
<div class="q-choice">ア　完了の助動詞「ぬ」の終止形</div>
<div class="q-choice">イ　打消の助動詞「ず」の連体形</div>
<div class="q-choice">ウ　完了の助動詞「ぬ」の連体形</div>
</div>
<div class="q-acc"><span class="q-arrow">▼</span> 解説を開く</div>
</div>
<div class="caption">横組み</div>
</div>

<div class="q-col">
<div class="q wm-vertical">
<div class="q-text">翁、竹を取ること久しくなり<u class="bousen">ぬ</u>。勢猛の者になりにけり。</div>
<div>傍線部「ぬ」の文法的説明として適当なものを選べ。</div>
<div class="q-choices">
<div class="q-choice">ア　完了の助動詞「ぬ」の終止形</div>
<div class="q-choice">イ　打消の助動詞「ず」の連体形</div>
<div class="q-choice">ウ　完了の助動詞「ぬ」の連体形</div>
</div>
<div class="q-acc"><span class="q-arrow">▼</span> 解説を開く</div>
</div>
<div class="caption">縦組み</div>
</div>

</div>

</div>

<div class="takeaway">宣言的に書きたいが、<wbr />色々と課題</div>

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

- <span class="blk g">解消していく</span>
  - Safari の line-clamp
- <span class="blk o">仕様になっていく</span>
  - 論理プロパティのショートハンド
- <span class="blk p">話題が起きている</span>
  - 自分の書字方向を知る方法

</div>

</div>

<div class="takeaway">3つの段階に分けて紹介</div>

</div>

---

<!--
4: 縦書きの実装が整ってないところの話
口頭: Safariのline-clamp周りに大きな進捗が相次いでいます。
-webkit-line-clamp は縦書きだとヤバい動きをする。-webkit-box が横書きに固定されるので、縦書きのつもりが横書きになる。しかも3行で断ち切られてもいない、完全に動いていない。これは今も直っていない。
でも Safari で標準の line-clamp の実装が10月から進んで、その過程で、縦書きが壊れたままの -webkit-line-clamp を追い越した。TP なら縦書きのまま3行で切れて、省略記号も縦を向く。まだ TP だけだけど、神、ありがとう。

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

# Safari の line-clamp

<div class="wm-horizontal" style="flex: 1; display: flex; flex-direction: column; justify-content: center; align-items: center; gap: 4cqh;">

<div class="m-grid lc-grid">

<figure class="m-demo ok">
<div class="shot-label"><svg class="ic" viewBox="0 0 24 24" aria-label="意図どおり"><circle cx="12" cy="12" r="11" fill="#23935a"/><path d="M7 12.5l3.2 3.2L17 9" stroke="#fff" stroke-width="2.6" fill="none" stroke-linecap="round" stroke-linejoin="round"/></svg><span>Safari Technology Preview 27.0</span></div>
<div class="m-code"><code>line-clamp: 3</code></div>
<div class="m-stage lc-stage"><img src="@slide/lc-standard-tp.png" alt="縦書きのまま3行で切れ、末尾に縦向きの省略記号が付いている" /></div>
<div class="shot-note">&nbsp;</div>
</figure>

<figure class="m-demo ng">
<div class="shot-label"><svg class="ic" viewBox="0 0 24 24" aria-label="崩れる"><circle cx="12" cy="12" r="11" fill="#d33"/><path d="M8 8l8 8M16 8l-8 8" stroke="#fff" stroke-width="2.6" stroke-linecap="round"/></svg><span>Safari 26.6.2</span></div>
<div class="m-code"><code>-webkit-line-clamp: 3</code></div>
<div class="m-stage lc-stage"><img src="@slide/lc-webkit-broken.png" alt="縦書きのはずの文章が横書きで組まれ、文字が横倒しになっている。3行目の末尾に省略記号が付くが、4行目以降も見えている" /></div>
<div class="shot-note">縦書きを指定しているのに横を向く<br />3行で止まらない</div>
</figure>

</div>

</div>


<div class="takeaway">実装が進み、解消しそう</div>

</div>

---

<!--
5: 論理プロパティのショートハンド（1/3）
口頭: 縦書きでも横書きでも、文字の流れる方向に相対的な指定をする方法があって、これを論理プロパティと言います。
が、 margin と指定した場合には上下左右方向の物理的指定しかできません。
-->

<div class="wrapper header-and-content">

# 論理プロパティの<wbr />ショートハンド

<div class="wm-horizontal" style="flex: 1; display: flex; flex-direction: column; justify-content: center; align-items: center;">

<div class="mm">
<span></span><span class="mm-col">横書き</span><span class="mm-col">縦書き</span>
<span class="mm-row"><b>論理</b><code>margin-block: 32px;<br />margin-inline: 8px;</code></span><div class="mm-cell ok"><span class="mm-icon"><svg class="ic" viewBox="0 0 24 24" aria-label="意図どおり"><circle cx="12" cy="12" r="11" fill="#23935a"/><path d="M7 12.5l3.2 3.2L17 9" stroke="#fff" stroke-width="2.6" fill="none" stroke-linecap="round" stroke-linejoin="round"/></svg></span><div class="m-outer wm-horizontal"><div class="m-choice logi">ア　完了の助動詞<br />「ぬ」の終止形</div></div></div><div class="mm-cell ok"><span class="mm-icon"><svg class="ic" viewBox="0 0 24 24" aria-label="意図どおり"><circle cx="12" cy="12" r="11" fill="#23935a"/><path d="M7 12.5l3.2 3.2L17 9" stroke="#fff" stroke-width="2.6" fill="none" stroke-linecap="round" stroke-linejoin="round"/></svg></span><div class="m-outer wm-vertical"><div class="m-choice logi">ア　完了の助動詞<br />「ぬ」の終止形</div></div></div>
<span class="mm-row"><b>物理</b><code>margin: 32px 8px;</code></span><div class="mm-cell ok"><span class="mm-icon"><svg class="ic" viewBox="0 0 24 24" aria-label="意図どおり"><circle cx="12" cy="12" r="11" fill="#23935a"/><path d="M7 12.5l3.2 3.2L17 9" stroke="#fff" stroke-width="2.6" fill="none" stroke-linecap="round" stroke-linejoin="round"/></svg></span><div class="m-outer wm-horizontal"><div class="m-choice phys">ア　完了の助動詞<br />「ぬ」の終止形</div></div></div><div class="mm-cell ng"><span class="mm-icon"><svg class="ic" viewBox="0 0 24 24" aria-label="崩れる"><circle cx="12" cy="12" r="11" fill="#d33"/><path d="M8 8l8 8M16 8l-8 8" stroke="#fff" stroke-width="2.6" stroke-linecap="round"/></svg></span><div class="m-outer wm-vertical"><div class="m-choice phys">ア　完了の助動詞<br />「ぬ」の終止形</div></div></div>
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
TPAC 2026（10/27、i18n WG との合同）の決議: "Draft css-logical-2 with !physical and !logical and a rough draft of a lexical @logical/@physical block at-rule. Mark !xy-logical and !x-logical as potential points of extension."（#1282 の mirisuzanne さんのコメント、議事録 https://www.w3.org/2026/10/27-i18n-minutes.html#1d0e）
議事録の SUMMARY に "Next step: create a draft, provisionally css-logical level 2"。@logical/@physical は「rough draft」。どれもまだ案で、草案を書き始める段階
-->

<div class="wrapper header-and-content">

# 構文を足すアイデア

<div class="wm-horizontal" style="flex: 1; display: flex; flex-direction: column; justify-content: center; align-items: center; gap: 3cqh;">

<div class="stack">

<div class="pairs syntax-pairs">
<span class="blk o">宣言ごと</span>
<div class="code">.choice { margin: 32px 8px <span class="em">!logical</span>; }
.photo  { margin: 32px 8px <span class="em">!physical</span>; }</div>
<span class="blk o">ブロックごと</span>
<div class="code"><span class="em">@logical</span>  { .choice { margin: 32px 8px; } }
<span class="em">@physical</span> { .photo  { margin: 32px 8px; } }</div>
<span></span>
<div class="syntax-meta">
<div style="display: flex; align-items: center; gap: 1.2cqh;">
<span class="blk dash" style="border-color: var(--orange-deep); color: var(--orange-deep);">まだ案</span>
<span class="blk n">TPAC 2026 で決議</span>
</div>
<div>暫定的に<br /><b>CSS Logical Properties and Values Level 2</b><br />として草案化</div>
<div class="caption"><a href="https://github.com/w3c/csswg-drafts/issues/1282" target="_blank">w3c/csswg-drafts #1282</a></div>
</div>
</div>

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
実例: 物理の1軸ショートハンド（margin-x のようなもの）が CSS に無いので、Tailwind CSS v4 は mx-* を margin-inline で実装している。縦書きの中では左右ではなく上下の余白になり、縦書きでは意図と合わない（ブログ「縦書き対応のコンポーネントを作る」でも触れた件）
-->

<div class="wrapper header-and-content">

# 縦書き目線ではうれしいの？

<div class="wm-horizontal" style="flex: 1; display: flex; flex-direction: column; justify-content: center; align-items: center; gap: 4cqh;">

<div class="sym">
<span></span><span class="sym-h">物理</span><span class="sym-h">論理</span>
<span class="sym-r">1辺ずつ</span><code>margin-top</code><code>margin-block-start</code>
<span class="sym-r">1軸ずつ</span><span class="sym-none">なし</span><code>margin-block</code>
<span class="sym-r">4辺まとめて</span><span class="sym-pair"><code>margin</code><span class="sym-new"><code>margin: … !physical</code></span></span><span class="sym-pair"><code>&nbsp;</code><span class="sym-new"><code>margin: … !logical</code></span></span>
</div>

<div class="glad-chips">
<span class="blk n">表現できることは増えない</span>
<span class="blk g">道具として対称になる</span>
<div class="glad-col">
<span class="blk g">バイト数を気にする道具でも論理で書ける</span>
<div class="glad-example">
<span class="blk n">例</span>
<span>Tailwind CSS v4 の <code>mx-*</code> は<br /><code>margin-inline</code> で書かれ、縦書きでは意図と合わない</span>
</div>
</div>
</div>

</div>

<div class="takeaway">地味だけど、<wbr />うれしい</div>

</div>

---

<!--
8: 書字方向を確認できるようにする提案（1/2）実例とJSの実装
口頭: 論理プロパティがあるので縦書きでも横書きでも一定のビジュアルを表現できる……というほど甘くはないのです
JSからのインターフェースは論理対応していないことが多く、仮にしていたとしても一概に論理のみで記述できるわけでもありません。
getComputedStyle を用いて取得したり、もっとざっくりやるならクラス名の有無なんかをみる古典的なやり方が、今とれる現場のアプローチです。
図: 本文を3行に絞った「続きを読む」の開閉マーク（▼ の三角、次のスライドと同じ部品）。開閉マークは続きが現れる方向に向けたい。横組みは下へ続くので ▼、縦組み（vertical-rl）は block 方向の左へ続くので ◀。▼ のままだと開く方向と合わない。JS で書字方向を読んでクラスを付け、CSS で向きを変えている。✕ の図は開閉マークもグラデーションも横書きのまま（下向き）にしてある。グラデーションも書字方向に合わせて書き分けないといけない、という例を兼ねる
-->

<div class="wrapper header-and-content">

# 例：開閉マークを<wbr />開く方向に向けたい

<div class="wm-horizontal" style="flex: 1; display: flex; flex-direction: column; justify-content: center; align-items: center; gap: 3cqh;">

<div class="stack" style="align-items: center; gap: 3cqh;">

<div class="m-grid acc-grid">

<figure class="m-demo ok">
<div class="shot-label"><svg class="ic" viewBox="0 0 24 24" aria-label="意図どおり"><circle cx="12" cy="12" r="11" fill="#23935a"/><path d="M7 12.5l3.2 3.2L17 9" stroke="#fff" stroke-width="2.6" fill="none" stroke-linecap="round" stroke-linejoin="round"/></svg>縦書き</div>
<div class="m-code"><code>.is-vertical</code></div>
<div class="m-stage clamp-stage open-v"><span class="open-dir" aria-label="開く方向">←</span><div class="readmore wm-vertical"><div class="readmore-body">翁、竹を取ること久しくなり<u class="bousen">ぬ</u>。勢猛の者になりにけり。この子いと大きになりぬれば、名をば三室戸斎部秋田を呼びてつけさす。</div><div class="readmore-overlay"><button type="button" class="readmore-button"><span class="accordion__marker" aria-hidden="true"></span>続きを読む</button></div></div></div>
</figure>

<figure class="m-demo ng">
<div class="shot-label"><svg class="ic" viewBox="0 0 24 24" aria-label="崩れる"><circle cx="12" cy="12" r="11" fill="#d33"/><path d="M8 8l8 8M16 8l-8 8" stroke="#fff" stroke-width="2.6" stroke-linecap="round"/></svg>縦書き</div>
<div class="m-code"><code>&nbsp;</code></div>
<div class="m-stage clamp-stage open-v"><span class="open-dir" aria-label="開く方向">←</span><div class="readmore wm-vertical" data-direction="off"><div class="readmore-body">翁、竹を取ること久しくなり<u class="bousen">ぬ</u>。勢猛の者になりにけり。この子いと大きになりぬれば、名をば三室戸斎部秋田を呼びてつけさす。</div><div class="readmore-overlay"><button type="button" class="readmore-button"><span class="accordion__marker" aria-hidden="true"></span>続きを読む</button></div></div></div>
</figure>

<figure class="m-demo ok">
<div class="shot-label"><svg class="ic" viewBox="0 0 24 24" aria-label="意図どおり"><circle cx="12" cy="12" r="11" fill="#23935a"/><path d="M7 12.5l3.2 3.2L17 9" stroke="#fff" stroke-width="2.6" fill="none" stroke-linecap="round" stroke-linejoin="round"/></svg>横書き</div>
<div class="m-code"><code>&nbsp;</code></div>
<div class="m-stage clamp-stage open-h"><div class="readmore wm-horizontal"><div class="readmore-body">翁、竹を取ること久しくなり<u class="bousen">ぬ</u>。勢猛の者になりにけり。この子いと大きになりぬれば、名をば三室戸斎部秋田を呼びてつけさす。</div><div class="readmore-overlay"><button type="button" class="readmore-button"><span class="accordion__marker" aria-hidden="true"></span>続きを読む</button></div></div><span class="open-dir" aria-label="開く方向">↓</span></div>
</figure>

</div>

<div class="pairs" style="grid-template-columns: 11cqh max-content; row-gap: 1.5cqh;">
<span class="blk n">JS</span>
<div class="code" style="font-size: 2.6cqh;">const vertical = <span class="em">getComputedStyle(el).writingMode</span>.startsWith("vertical");
el.classList.toggle(<span class="em">"is-vertical"</span>, vertical);</div>
<span class="blk n">CSS</span>
<div class="code" style="font-size: 2.6cqh;"><span class="em">.is-vertical</span> .accordion__marker { rotate: 90deg; }
<span class="em">.is-vertical</span> .readmore-overlay { background: linear-gradient(<span class="em">to left</span>, …); }</div>
</div>

</div>

</div>

<div class="takeaway">縦書きかどうかを<wbr />知りたい</div>

</div>

---

<!--
8.5: 書字方向を確認できるようにする提案（補足）JS での計算の実例
口頭: 見た目だけじゃなくて、寸法の計算も書字方向で入れ替えています。これは前に書いたブログの例で、はみ出しているかの判定で scrollHeight と scrollWidth を入れ替えている。
出典: https://blog.berlysia.net/entry/2026-02-28-react-tokyo-fes-2026 （縦書き対応のコンポーネントを作る - React Tokyo フェス2026）のコード。最後の setIsOverflowing(...) は、文脈なしでも読めるように isOverflowing に入れて「続きを読む」ボタンの表示を切り替える形に書き換えた
図: 本文を line-clamp で3行に絞り、はみ出していたら「続きを読む」を出す（スライド4の line-clamp とつながる）。縦書きは横方向（scrollWidth）、横書きは縦方向（scrollHeight）ではみ出しを測る
-->

<div class="wrapper header-and-content">

# 例：寸法の計算も<wbr />入れ替える

<div class="wm-horizontal" style="flex: 1; display: flex; flex-direction: column; justify-content: center; align-items: center; gap: 3cqh;">

<div class="stack" style="align-items: center; gap: 3cqh;">

<div class="m-grid clamp-grid">

<figure class="m-demo neutral">
<div class="shot-label">縦書き</div>
<div class="m-code"><code>scrollWidth &gt; clientWidth</code></div>
<div class="m-stage clamp-stage"><div class="readmore wm-vertical"><div class="readmore-body">翁、竹を取ること久しくなり<u class="bousen">ぬ</u>。勢猛の者になりにけり。この子いと大きになりぬれば、名をば三室戸斎部秋田を呼びてつけさす。</div><div class="readmore-overlay"><button type="button" class="readmore-button"><span class="accordion__marker" aria-hidden="true"></span>続きを読む</button></div></div></div>
</figure>

<figure class="m-demo neutral">
<div class="shot-label">横書き</div>
<div class="m-code"><code>scrollHeight &gt; clientHeight</code></div>
<div class="m-stage clamp-stage"><div class="readmore wm-horizontal"><div class="readmore-body">翁、竹を取ること久しくなり<u class="bousen">ぬ</u>。勢猛の者になりにけり。この子いと大きになりぬれば、名をば三室戸斎部秋田を呼びてつけさす。</div><div class="readmore-overlay"><button type="button" class="readmore-button"><span class="accordion__marker" aria-hidden="true"></span>続きを読む</button></div></div></div>
</figure>

</div>

<div class="code" style="font-size: 2.8cqh;">const computedWritingMode = <span class="em">getComputedStyle(content).writingMode</span>;
const isHorizontal = computedWritingMode === "horizontal-tb";
const scrollBlockSize = isHorizontal ? <span class="em">content.scrollHeight</span> : <span class="em">content.scrollWidth</span>;
const clientBlockSize = isHorizontal ? <span class="em">content.clientHeight</span> : <span class="em">content.clientWidth</span>;
const isOverflowing = scrollBlockSize > clientBlockSize;
<span class="em">readMoreButton</span>.hidden = !isOverflowing;</div>

</div>

</div>

<div class="takeaway">DOM API は<wbr />物理方向で返ってくる</div>

</div>

---

<!--
8: 書字方向を確認できるようにする提案（2/2）
口頭: これに対して、スタイルクエリの拡張のような形で、writing-modeの値を取得できるようにしたほうがいいか？ という話題が起こりました。
私としてもまさしく指摘してきている話題で、私から話題出せてないことを恥じるばかりですが……
これはまだ話題が起こったという段階です。（まだリアクションしただけなんだけど、）縦書きを実用する立場からもコメントするつもりです。
流れ: 前の2枚では、部品が自分の書字方向を知らないので JS で調べていた。部品が自分の置かれた流れ（縦か横か）を問えれば、開閉マークの向きのような見た目の分岐は JS なしで書けるし、JS からも同じ条件を読み取って書けてうれしい。style query の形ならそのままそうなるが、それ以外の案（値と切り離す、別の構文）だと JS からどう扱えるかはまだ分からない。いまはその問い方が話題になっている段階。
「たとえば」の4つ: 1「例外に writing-mode を足す」＝issue 本文（fantasai さん）の提案。コード @container style(writing-mode: vertical-rl) は xfq さんのコメントの原文の形。2「書字方向とは分けた値にする」＝emilio さん（writing-mode の値より、物理的な inline/block の向きや inline 方向が逆かを知りたいのでは）。3「読む値を使用値にする」＝Loirooriol さん（style() は計算値を見るが、使用値を見たいはずなので新しい container feature が良いかも）。4「新しいクエリの方法を定義する」＝fantasai さん 10/29（writing-mode() 関数で horizontal / vertical / sideways / rl / lr などを問う）。2〜4の2行目は主旨を日本語にしたもので、issue に書き方は無い。
サンプルのコードは xfq さんの仮の例（.decorative-arrow）の形を、このデッキの部品（.accordion__marker）に合わせて書き換えたもの。
整理: issue #14527 の本文（fantasai さん、9/25）は「style query は今はカスタムプロパティしか問えないが、その例外に writing-mode を足すのはどうか」。xfq さんの例（9/27、"Hypothetical"）はこの例外を足したときのサンプル。
ほかのアイデア: 値と切り離して問う＝emilio さん（9/27、writing-mode の値ではなく物理的な inline/block 方向を問いたいのでは）、Loirooriol さん（9/29、計算値ではなく使用値を見る新しい container feature）。別の構文で問う＝fantasai さん（10/29、writing-mode() 関数で horizontal / vertical / sideways / rl / lr などを問う）。
補足: 「仮の例」は xfq さんのコメント（9/27、"Hypothetical" と明記）の原文どおり。「別の案」は書き方が示されていないので名前だけ: emilio さん（9/27）=物理的な inline/block 方向を問う、Loirooriol さん（9/29）=used value を見る新しい container feature、fantasai さん（10/29）=writing-mode() 関数（horizontal / vertical / sideways / rl / lr と writing-mode の全値を受け取る）。
補足: 下の構文は issue コメントにある仮の例。Agenda+ だが会議ではまだ話されていない。構文案は割れている（emilio さん=物理的な向き、Loirooriol さん=使用値を見るクエリ、fantasai さん=10/29 writing-mode() 関数）
-->

<div class="wrapper header-and-content">

# 自分の書字方向を知る方法

<div class="wm-horizontal" style="flex: 1; display: flex; flex-direction: column; justify-content: center; align-items: center; gap: 3cqh;">

<div class="stack" style="align-items: center; gap: 2.5cqh;">

<div class="flow-grid">

<figure class="flow-demo">
<div class="shot-label"><span>縦書きの中</span></div>
<div class="flow-page wm-vertical">
<p class="flow-text">一　次の文章を読んで、後の問いに答えなさい。</p>
<div class="flow-comp"><span class="ask">縦？横？</span><div class="readmore"><div class="readmore-body">翁、竹を取ること久しくなり<u class="bousen">ぬ</u>。勢猛の者になりにけり。この子いと大きになりぬれば、名をば三室戸斎部秋田を呼びてつけさす。秋田、なよ竹のかぐや姫とつけつ。このほど三日うちあげ遊ぶ。よろづの遊びをぞしける。男はうけきらはず呼び集へて、いとかしこく遊ぶ。</div><div class="readmore-overlay"><button type="button" class="readmore-button"><span class="accordion__marker" aria-hidden="true"></span>続きを読む</button></div></div></div>
<p class="flow-text">問一　傍線部「ぬ」を説明せよ。</p>
</div>
</figure>

<figure class="flow-demo">
<div class="shot-label"><span>横書きの中</span></div>
<div class="flow-page wm-horizontal">
<p class="flow-text">一　次の文章を読んで、後の問いに答えなさい。</p>
<div class="flow-comp"><span class="ask">縦？横？</span><div class="readmore"><div class="readmore-body">翁、竹を取ること久しくなり<u class="bousen">ぬ</u>。勢猛の者になりにけり。この子いと大きになりぬれば、名をば三室戸斎部秋田を呼びてつけさす。秋田、なよ竹のかぐや姫とつけつ。このほど三日うちあげ遊ぶ。よろづの遊びをぞしける。男はうけきらはず呼び集へて、いとかしこく遊ぶ。</div><div class="readmore-overlay"><button type="button" class="readmore-button"><span class="accordion__marker" aria-hidden="true"></span>続きを読む</button></div></div></div>
<p class="flow-text">問一　傍線部「ぬ」を説明せよ。</p>
</div>
</figure>

</div>

<div class="tree">
<div class="tree-root"><span class="tree-lead">たとえば</span></div>
<div class="tree-branches">
<div class="tree-branch"><div class="tree-item"><span class="tree-label">例外に <code>writing-mode</code> を足す</span><code class="tree-code"><span class="em">@container style(writing-mode: vertical-rl)</span> { … }</code></div></div>
<div class="tree-branch"><div class="tree-item"><span class="tree-label">新しいクエリの構文を定義する</span><span class="tree-desc">writing-mode() で vertical かを問う</span></div></div>
<div class="tree-branch"><div class="tree-item"><span class="tree-label">書字方向とは分けた値にする</span><span class="tree-desc">行が縦に進むかを問う</span></div></div>
<div class="tree-branch"><div class="tree-item"><span class="tree-label">読む値を使用値にする</span><span class="tree-desc">実際に使われている向きを問う</span></div></div>
</div>
</div>

<div class="caption"><a href="https://github.com/w3c/csswg-drafts/issues/14527" target="_blank">w3c/csswg-drafts #14527</a></div>

</div>

</div>


</div>

---

<!--
9: 締め ＋ 誰
口頭: いくつか例を見せてきました。今年もさまざまに話題が起きています。Webで縦書きをもっと自然に使える方向に、徐々に徐々に動いているんだなと思ってもらえたらうれしいです。
お仕事で使うということはまだ珍しいかもしれませんが、ぜひ引き続き縦書きの更なる実用に関心を寄せて、よかったら遊んでみてください。

ドワンゴ教育事業はWebでの縦書きを真剣に活用しています。
-->

<div class="wrapper center">

<div class="closing">

<div class="closing-head">
<div class="closing-title">Ｗｅｂの縦書きは<br />少しずつ前進中</div>
<div class="closing-sub">触ってみよう、遊んでみよう</div>
</div>

<div class="closing-me">
<div class="closing-person">
<img src="@slide/berlysia.jpg" alt="berlysia のアイコン" class="closing-avatar" />
<div class="closing-person-text">
<div class="closing-name">berlysia<span>べるりしあ</span></div>
<div class="closing-tag">Ｗｅｂの縦書きに真剣な一般人</div>
</div>
</div>
<div class="closing-orgs">
<div class="closing-org">株式会社ドワンゴ 教育事業</div>
<div>Ｗｅｂの縦書きを真剣に活用</div>
</div>
</div>

</div>

</div>
