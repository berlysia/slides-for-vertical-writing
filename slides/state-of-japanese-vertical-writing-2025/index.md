---
title: 日本語縦書きＷｅｂの現在地 2025 - フロントエンドカンファレンス東京2025
author: berlysia
date: 2025-09-21
---

<script src="https://cdn.jsdelivr.net/npm/baseline-status@1/baseline-status.min.js" type="module"></script>

<script>
const toggleClass = "js-toggle-wm";
const preferHorizontalClass = "js-prefer-horizontal";
const preferVerticalClass = "js-prefer-vertical";
const growingTextClass = "js-growingtext";
let toggled = false;

const SAMPLE_TEXT = "メロスは激怒した。必ず、かの邪智暴虐の王を除かなければならぬと決意した。メロスには政治がわからぬ。メロスは、村の牧人である。笛を吹き、羊と遊んで暮して来た。けれども邪悪に対しては、人一倍に敏感であった。きょう未明メロスは村を出発し、野を越え山越え、十里はなれた此のシラクスの市にやって来た。メロスには父も、母も無い。女房も無い。十六の、内気な妹と二人暮しだ。この妹は、村の或る律気な一牧人を、近々、花婿として迎える事になっていた。結婚式も間近かなのである。メロスは、それゆえ、花嫁の衣裳やら祝宴の御馳走やらを買いに、はるばる市にやって来たのだ。先ず、その品々を買い集め、それから都の大路をぶらぶら歩いた。メロスには竹馬の友があった。セリヌンティウスである。今は此のシラクスの市で、石工をしている。その友を、これから訪ねてみるつもりなのだ。久しく逢わなかったのだから、訪ねて行くのが楽しみである。歩いているうちにメロスは、まちの様子を怪しく思った。ひっそりしている。もう既に日も落ちて、まちの暗いのは当りまえだが、けれども、なんだか、夜のせいばかりでは無く、市全体が、やけに寂しい。のんきなメロスも、だんだん不安になって来た。路で逢った若い衆をつかまえて、何かあったのか、二年まえに此の市に来たときは、夜でも皆が歌をうたって、まちは賑やかであった筈だが、と質問した。若い衆は、首を振って答えなかった。しばらく歩いて老爺に逢い、こんどはもっと、語勢を強くして質問した。老爺は答えなかった。メロスは両手で老爺のからだをゆすぶって質問を重ねた。老爺は、あたりをはばかる低声で、わずか答えた。"

// SAMPLE_TEXTを句点で分割
const TEXT_SENTENCES = SAMPLE_TEXT.split('。').filter(sentence => sentence.trim().length > 0);

// 各js-growingtextエレメントの状態を管理
const growingTextState = new WeakMap();

function initializeToggleElements() {
  // 初期クラスの設定のみ行い、イベントハンドラは設定しない
  for (const el of document.querySelectorAll(`.${toggleClass}`)) {
    const hasPreferHorizontal = el.classList.contains(preferHorizontalClass);
    const hasPreferVertical = el.classList.contains(preferVerticalClass);

    if (hasPreferHorizontal) {
      el.classList.add('wm-horizontal');
    } else if (hasPreferVertical) {
      el.classList.add('wm-vertical');
    }
  }
}

function initializeGrowingTextElements() {
  for (const el of document.querySelectorAll(`.${growingTextClass}`)) {
    // data-growingtext-indexから現在のインデックスを取得、なければ1を設定
    const savedIndex = parseInt(el.dataset.growingtextIndex) || 1;

    // 現在のテキストを構築
    let currentText = '';
    for (let i = 0; i < savedIndex; i++) {
      if (i < TEXT_SENTENCES.length) {
        currentText += TEXT_SENTENCES[i] + '。';
      }
    }

    // テキストが空の場合は最初の文を設定
    if (currentText === '') {
      currentText = TEXT_SENTENCES[0] + '。';
      el.dataset.growingtextIndex = '1';
    } else {
      el.dataset.growingtextIndex = savedIndex.toString();
    }

    el.textContent = currentText;

    // WeakMapは補助的に使用（DOM再構成時のパフォーマンス向上のため）
    growingTextState.set(el, {
      currentIndex: parseInt(el.dataset.growingtextIndex),
      currentText: currentText
    });
  }
}

function handleGrowingTextClick(element) {
  // data-growingtext-indexから現在のインデックスを取得
  const currentIndex = parseInt(element.dataset.growingtextIndex) || 1;

  if (currentIndex < TEXT_SENTENCES.length) {
    // 次の文を追加
    const nextSentence = TEXT_SENTENCES[currentIndex];
    const newText = element.textContent + nextSentence + '。';
    const newIndex = currentIndex + 1;

    element.textContent = newText;
    element.dataset.growingtextIndex = newIndex.toString();

    // WeakMapも更新
    growingTextState.set(element, {
      currentIndex: newIndex,
      currentText: newText
    });
  } else {
    // 最後まで到達した場合、最初から再開
    const firstText = TEXT_SENTENCES[0] + '。';
    element.textContent = firstText;
    element.dataset.growingtextIndex = '1';

    // WeakMapも更新
    growingTextState.set(element, {
      currentIndex: 1,
      currentText: firstText
    });
  }
}

function handleToggleClick(event) {
  if (event.shiftKey) return;

  // js-growingtextのクリック処理を優先
  const growingTextTarget = event.target.closest(`.${growingTextClass}`);
  if (growingTextTarget) {
    handleGrowingTextClick(growingTextTarget);
    return;
  }

  const target = event.target.closest(`.${toggleClass}`);
  if (!target) return;

  const hasPreferHorizontal = target.classList.contains(preferHorizontalClass);
  const hasPreferVertical = target.classList.contains(preferVerticalClass);

  if (hasPreferHorizontal) {
    const isCurrentlyHorizontal = target.classList.contains('wm-horizontal');
    if (isCurrentlyHorizontal) {
      target.classList.remove('wm-horizontal');
      target.classList.add('wm-vertical');
    } else {
      target.classList.remove('wm-vertical');
      target.classList.add('wm-horizontal');
    }
  } else if (hasPreferVertical) {
    const isCurrentlyVertical = target.classList.contains('wm-vertical');
    if (isCurrentlyVertical) {
      target.classList.remove('wm-vertical');
      target.classList.add('wm-horizontal');
    } else {
      target.classList.remove('wm-horizontal');
      target.classList.add('wm-vertical');
    }
  } else {
    target.classList.toggle('wm-toggle');
    toggled = !toggled;
  }
}

// documentレベルでのイベントデリゲーション
document.addEventListener('click', handleToggleClick);

function initializeAll() {
  initializeToggleElements();
  initializeGrowingTextElements();
}

if (document.readyState === 'loading') {
  document.addEventListener('DOMContentLoaded', initializeAll);
} else {
  initializeAll();
}
</script>

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

.wm-visualize {
  padding: 1rem;
  &.wm-horizontal {
    border: 4px dashed #3b82f6;
  }
  &.wm-vertical {
    border: 4px solid #e22;
  }
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

h1, h2, h3 {
  text-wrap: pretty;
}
</style>

<!-- <div class="wrapper" style="display: grid; place-items: center;">

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

--- -->

<div class="wrapper center">

<div style="display: flex; flex-direction: column;">
  <h1 style="text-orientation: upright; white-space:nowrap;">日本語縦書きＷｅｂの現在地</h1>
  <div style="align-self: end; margin-inline-end: 2rem; color: #444; text-orientation: mixed;">berlysia</div>
</div>

</div>

---

<div class="wrapper center">

<div class="wm-horizontal" style="text-orientation: upright; text-align: center">
  <p>「Webで縦書き」って、できるんですか？</p>
  <p>「縦書きができる」って、どういうことですか？</p>
<div>
</div>

---

<div class="wrapper header-and-content">

# `writing-mode` プロパティ

<div style="flex: 1;" class="two-column">

<div style="display: grid; place-items: center;" class="js-toggle-wm js-prefer-vertical wm-vertical">

- 取りうる値
  - `horizontal-tb` （初期値）
  - `vertical-rl`
  - `vertical-lr`
- 継承する
- アニメーションしない

</div>

<div style="display: grid; place-items: center;">

- <baseline-status featureId="writing-mode"></baseline-status>
  - <span class="upright">2017年3月</span>からBaseline
- [CSS Writing Modes Level 3](https://www.w3.org/TR/css-writing-modes-3/)
  - <span class="upright">2019年<span class="tcu-all">12</span>月からW3C勧告</span>
  - <span class="upright">2003年</span>頃から議論はされていた

</div>

</div>

</div>

---

<div class="wrapper header-and-content">

# 実際に使われているサイト

<div style="flex: 1; gap: 2em;" class="two-column">

<div style="display: grid; align-items: center;">

## ｐｉｘｉｖ小説 様

<span class="upright" style="font-size: 0.8em">2015年6月にネイティブ縦書き対応<a target="_blank" href="https://devpixiv.hatenablog.com/entry/2015/06/15/190845">🔗</a></span>

<blockquote style="font-size: 0.55em;" class="upright">2015年、今年は縦書きの年と言っても過言ではないでしょう。</blockquote>

</div>

<div style="display: grid; align-items: center;">

## ＺＥＮ Ｓｔｕｄｙ（旧Ｎ予備校）

<figure style="float: inline-start"><img src="@slide/zenstudy.png"/><figcaption>ZEN Studyの縦書き</figcaption></figure><span class="upright" style="font-size: 0.8em">国語の教材でがっつり利用しています［ＰＲ］</span>

</div>

<div style="display: grid; align-items: center;">

<span style="font-size: 0.8em;">そのほか、意外といろんなところに……</span>

- <span style="font-size: 0.6em;">アニメやゲームのキャラクター紹介ページでセリフ表現に</span>
- <span style="font-size: 0.6em;">ＬＰのタイトルや途中に挟まっている</span>

</div>

</div>

</div>

---

<div class="wrapper header-and-content">

# なんならここにも……？

<div style="flex: 1; display: grid; place-items: center;">

<div class="wm-horizontal"><a target="_blank" href="https://fec-tokyo.github.io/2025/">https://fec-tokyo.github.io/2025/</a></div>

</div>
</div>

---

<div class="wrapper header-and-content">

# `writing-mode` プロパティ

<div style="flex: 1; justify-content: center;" class="two-column">

<div style="display: grid; place-items: center;" class="js-toggle-wm">

- 取りうる値
  - `horizontal-tb` （初期値）
    - <span style="font-size: 0.8em">行が上から下に並ぶ横書き</span>
  - `vertical-rl`
    - <span style="font-size: 0.8em">行が右から左に並ぶ縦書き</span>
  - `vertical-lr`
    - <span style="font-size: 0.8em">行が左から右に並ぶ縦書き</span>

</div>

<div style="display: grid; place-items: center;" class="js-toggle-wm">

- 継承する
  - <span style="font-size: 0.8em">どこかに書けばその下に全部効く</span>
- アニメーションしない

</div>

</div>

</div>

---

<div class="wrapper header-and-content">

# ありがちな外観そのいち

<div class="js-toggle-wm js-prefer-horizontal wm-horizontal wm-visualize" style="flex: 1;">

<div class="wm-vertical js-growingtext wm-visualize" data-growingtext-index="10">メロスは激怒した。</div>

</div>

</div>

---

<div class="wrapper header-and-content">

# ありがちな外観そのに

<div class="js-toggle-wm js-prefer-horizontal wm-horizontal wm-visualize" style="flex: 1;">

<div class="wm-vertical js-growingtext wm-visualize" style="min-block-size: 100%; min-inline-size: 100%; " data-growingtext-index="20">メロスは激怒した。</div>

</div>

</div>

---

<div class="wrapper header-and-content">

# 縦書きを試すときに<br />覚えておいてほしいこと

<div style="flex: 1; display: grid; place-items: center;" class="two-column">

- `writing-mode` は継承する
  - <span style="font-size: 0.8em">どこかに書けばその下に全部効く</span>
- <span style="font-size: 0.9em">縦書きのブロックは縦を占めようとする</span>
  - <span style="font-size: 0.8em">ブロック整形コンテキストの動作</span>
- スクロールが起きるときは、<br />スクロールする要素を縦書きにする
  - <span style="font-size: 0.8em">さもないと文の頭が隠れる</span>
  - <span style="font-size: 0.8em">動的スクロール位置調整とかしないこと</span>

</div>

---

<div class="wrapper" style="display: grid; place-items: center;">

<div style="flex: 1; justify-content: center;" class="two-column">

<div style="display: grid; place-items: center;">

## <span style="white-space: nowrap;">`text-orientation` <wbr />プロパティ</span>

- 取りうる値
  - `mixed` （初期値）
    - <span style="font-size: 0.8em; text-orientation: mixed;">縦書きCSSであそぼう</span>
  - `upright`
    - <span style="font-size: 0.8em; text-orientation: upright;">縦書きCSSであそぼう</span>
  - `sideways`
    - <span style="font-size: 0.8em; text-orientation: sideways;">縦書きCSSであそぼう</span>

</div>

<div style="display: grid; place-items: center;">

## <span style="white-space: nowrap;">`text-combine-upright` <wbr />プロパティ</span>

- 取りうる値
  - `none` （初期値）
    - <span style="font-size: 0.8em;"><span style="text-combine-upright: none;">123</span></span>
    - <span style="font-size: 0.8em;"><span style="text-combine-upright: none;">12345</span></span>
  - `all`
    - <span style="font-size: 0.8em;"><span style="text-combine-upright: all;">123</span></span>
    - <span style="font-size: 0.8em;"><span style="text-combine-upright: all;">12345</span></span>

</div>

</div>

</div>

---

<div class="wrapper center">

<div style="display: flex; flex-direction: column;">
  <h1 style="text-orientation: upright; white-space:nowrap;">ここ<span class="tcu-all">10</span>年でよくなったこと</h1>
</div>

</div>

---

<div class="wrapper center">

<img src="@slide/CSS Logical Properties and Values.png" style="flex: 1" />

</div>


---


<div class="wrapper header-and-content">

# <span style="white-space: nowrap;">論理プロパティが<wbr />どう嬉しいか</span>

<div style="flex: 1; display: flex; flex-direction: column; justify-content: center;">

<baseline-status style="margin-block: 4em" featureId="logical-properties"></baseline-status>

- 縦横切り替えのあるUIを共通化できる
  - <span style="font-size: 0.8em">ltr/rtl切り替えにも使える</span>
- よりmeaningfulな記述ができる
  - <span style="font-size: 0.8em">上下左右が重要ならwidth/height</span>
    - <span style="font-size: 0.8em; white-space: nowrap;">たとえば「影が落ちる方向」は<wbr />画面上で一貫している必要があるだろう</span>
  - <span style="font-size: 0.8em">書字方向が重要ならinline/block</span>

- <span style="font-size: 0.8em">グラデーション周りなど未対応部分もあるが、徐々に広がっている</span>

</div>

---


<div class="wrapper header-and-content">

# <span style="white-space: nowrap;">論理プロパティが<wbr />どう嬉しいか</span>

<div style="flex: 1; display: grid; place-items: center;" class="two-column">

<div class="wm-horizontal">

<h3 style="border-inline-start: 16px solid #f88; border-block-end: 4px dotted #f88; box-shadow: ">横書き</h3>

<div style="background-color: #8e8; margin: 1rem; padding-left: 1em; padding-right: 1em;"><div style="background-color: #bbf; text-align: center;">物理：left/right</div></div>
<div style="background-color: #8e8; margin: 1rem; padding-top: 1em; padding-bottom: 1em;"><div style="background-color: #bbf; text-align: center;">物理：top/bottom</div></div>
<hr />
<div style="background-color: #8e8; margin: 1rem; padding-inline: 1em;"><div style="background-color: #bbf; text-align: center;">論理：inline</div></div>
<div style="background-color: #8e8; margin: 1rem; padding-block: 1em;"><div style="background-color: #bbf; text-align: center;">論理：block</div></div>

</div>

<div class="wm-vertical">

<h3 style="border-inline-start: 16px solid #f88; border-block-end: 4px dotted #f88; box-shadow: ">縦書き</h3>

<div style="background-color: #8e8; margin: 1rem; padding-left: 1em; padding-right: 1em;"><div style="background-color: #bbf; text-align: center;">物理：left/right</div></div>
<div style="background-color: #8e8; margin: 1rem; padding-top: 1em; padding-bottom: 1em;"><div style="background-color: #bbf; text-align: center;">物理：top/bottom</div></div>
<hr />
<div style="background-color: #8e8; margin: 1rem; padding-inline: 1em;"><div style="background-color: #bbf; text-align: center;">論理：inline</div></div>
<div style="background-color: #8e8; margin: 1rem; padding-block: 1em;"><div style="background-color: #bbf; text-align: center;">論理：block</div></div>


</div>
</div>

---

<div class="wrapper header-and-content">

# <span style="white-space: nowrap;">フォーム対応</span>

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

<div class="wrapper header-and-content">

# 仕様レベルで解消していない問題

<figure class="wm-horizontal"><div style="text-align: center;"><img src="@slide/hatsukakiko-notosansjp.png" style="max-inline-size: 80vw; max-block-size: 80vh;" /><img src="@slide/hatsukakiko-notosans.png" style="max-inline-size: 80vw; max-block-size: 80vh;" /></div><figcaption>フォントをロードするまで文字の縦横を確定させられない<br /><a href="https://blog.nnn.dev/entry/2022/07/01/180000" target="_blank">縦書きHTMLにおける文字の向きはどのように定まるか</a></figcaption></figure>

---


<div class="wrapper header-and-content">

# エコシステムの課題

<div style="flex: 1; display: flex; flex-direction: column; justify-content: center;">

- `marginX` のような物理方向の実装に<br /> `margin-inline` を使われる事例
  - Chakra UI (X方向のみ)
  - Tailwind CSS v4
  - Panda CSS

- Tailwind CSS v4 は[意図的に誤用](https://github.com/tailwindlabs/tailwindcss/pull/14805)
  - <span style="font-size: 0.8em">「生成されるCSSの量が大幅に減る」</span>
  - <span style="font-size: 0.8em">「この変更で影響を受ける現実的なプロジェクトは存在しないと考えられる」</span>
    - <span style="font-size: 0.8em">直撃した</span>😇

</div>

---

<div class="wrapper header-and-content">

# 「日本語」を扱う上で<br />まだできないこと

<div style="flex: 1; display: flex; flex-direction: column; justify-content: center;">

<figure class="wm-horizontal"><img src="@slide/gap.png" style="max-inline-size: 80vw; max-block-size: 80vh;" /><figcaption>ある要件が満たされているか、<br />満たされていない場合どれくらい影響が大きいかを示す凡例<br /><a href="https://www.w3.org/TR/jpan-gap/" target="_blank">Japanese Gap Analysis</a>
</figcaption></figure>

</div>

<!-- ---

<div class="wrapper header-and-content">

# 他の言語にも

<div style="flex: 1; display: flex; flex-direction: column; justify-content: center;">

<a href="https://www.w3.org/International/typography/gap-analysis/language-matrix.html" target="_blank">Language matrix / International typography on the Web</a>

</div> -->

---

<div class="wrapper header-and-content">

# 「Webで縦書きができる」

<div style="flex: 1; display: flex; flex-direction: column; justify-content: center;">

<figure class="wm-horizontal"><img src="@slide/tategaki-zu-1.png" style="max-inline-size: 80vw; max-block-size: 80vh;" /><figcaption>どこをにらむか</figcaption></figure>

</div>

---

<div class="wrapper header-and-content">

# デジタルデバイスの上の縦書き

<div style="flex: 1; display: flex; flex-direction: column; justify-content: center;">

<figure class="wm-horizontal"><div style="display: flex; gap: 1rem"><img src="@slide/article-tategaki-yokoscroll.png" style="width: 46%;" /><img src="@slide/article-yokogaki-tatescroll.png" style="width: 46%;" /></div><figcaption>縦書きと横書きのスクロール方向の違い<br />「縦書きならば横スクロール」なのだろうか？</figcaption></figure>

</div>

---

<div class="wrapper header-and-content">

# デジタルデバイスの上の縦書き

<div style="flex: 1; display: flex; flex-direction: column; justify-content: center;">

<figure class="wm-horizontal"><div style="text-align: center;"><img src="@slide/article-tategaki-tatescroll.png" style="width: 60vw" /></div><figcaption>たとえば、縦書きのマルチカラムならば<br />縦スクロールの縦書きが可能となる</figcaption></figure>

</div>

---

<div class="wrapper header-and-content">

# JLReq-d

<div style="flex: 1; display: flex; flex-direction: column; justify-content: center;">

<figure class="wm-horizontal"><div style="text-align: center;"><img src="@slide/jlreq-d-explainer.png" style="width: 60vw" /></div><figcaption>作成が進む「日本語デジタルテキスト組版の要件」
</figcaption></figure>

</div>

---

<div class="wrapper center">

<div style="display: flex; flex-direction: column;">
  <h1 style="text-orientation: upright; white-space:nowrap;">ブラウザベンダーの関心は<br />得られるか？</h1>
</div>

</div>

---

<div class="wrapper header-and-content">

# 縦書きへの追い風

<div style="flex: 1; display: flex; flex-direction: column; justify-content: center;">

<figure class="wm-horizontal"><div style="text-align: center;">（画像はカット）</div><figcaption>モンゴル文字 / 左から右に行が進む縦書き<br /><a href="https://nixeneko.hatenablog.com/entry/c100_mongol_bichig_unicode">『モンゴル文字とUnicode』 - にせねこメモ</a>が参考になります</figcaption></figure>

</div>

---

<div class="wrapper header-and-content">

# 日本語の縦書きの立ち位置

<div style="flex: 1; display: flex; flex-direction: column; justify-content: center;">

<figure class="wm-horizontal"><div style="text-align: center;"><img src="@slide/横書き登場.jpg" style="height: 70cqh" /></div><figcaption>横書き登場 - 日本語表記の近代, 屋名池 誠 著 <a target="_blank" href="https://www.iwanami.co.jp/book/b268682.html">🔗</a></figcaption></figure>

</div>

---

<div class="wrapper header-and-content">

# 日本語の縦書きの立ち位置

<div style="flex: 1; display: flex; flex-direction: column; justify-content: center;">

- 右横書き
  - <span style="font-size: 0.8em">西洋に憧れて、<br />その風合いを取り入れる流れから</span>
- 左横書き
  - <span style="font-size: 0.8em">西洋の文字と一緒に記述することから<br />発展した。</span>
  - <span style="font-size: 0.8em">どちらも幕末〜明治期に生じた</span>

- 「左横書きがメイン、縦書きを併用」
  - <span style="font-size: 0.8em">いろいろあったうえで、<br />戦後にようやく到達</span>

</div>
---

<div class="wrapper center">

<div class="wm-horizontal" style="text-orientation: upright; text-align: center">
  <p>「Webで縦書き」って、できるんですか？</p>
  <p>……多少できるが、まだ足りない</p>
<div>

</div>

---

<div class="wrapper header-and-content">

# なぜ私がWeb上の縦書きにこだわるか

<div style="flex: 1; display: flex; flex-direction: column; justify-content: center;">

- <span style="font-size: 0.8em">縦書きは多少できるが、まだ足りない</span>
- <span style="font-size: 0.8em">動いている人がいる、流れがきている</span>
- <span style="font-size: 0.8em">縦書きがあると、表現の幅が広がる</span>

<h3 style="text-align: center">縦書きで遊んでみてください</h3>

</div>

---

<div class="wrapper header-and-content">

# よくしたい

<div style="flex: 1; display: flex; flex-direction: column; justify-content: center;">

<figure class="wm-horizontal"><div style="text-align: center;"><img src="@slide/yokushitai.png" style="width: 70vw" /></div></figure>

</div>