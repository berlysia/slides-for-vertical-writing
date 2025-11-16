---
title: 縦書きWebの実用を支えるJavaScript - JSConf JP 2025
description: 縦書きのWebサイトを作るときに考えたくなる、スクロール方向の問題や、縦書きマルチカラムの高さ問題を紹介し、JavaScriptでの対応例を伝えます。
author: berlysia
date: 2025-11-16
---

<link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/yakuhanjp@4.1.1/dist/css/yakuhanrp_s.css">

<script>
(() => {
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
    // -1なら全文表示
    const rawIndex = parseInt(el.dataset.growingtextIndex);
    const savedIndex = rawIndex === -1 ? TEXT_SENTENCES.length : rawIndex || 1;

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
    } else if (rawIndex === -1) {
      el.dataset.growingtextIndex = '-1';
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

  if (currentIndex === -1) {
    return; // 全文表示中は何もしない
  }

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

function initializeScrollMapping() {
  const contentEls = document.querySelectorAll(".js-scroll-map");
  contentEls.forEach(contentEl => {
    contentEl.addEventListener("wheel", e => {
      if (e.deltaX !== 0) return;
      if (e.deltaY === 0) return;
      if (e.ctrlKey /*修飾類*/) return;

      e.preventDefault();
      e.currentTarget.scrollLeft -= e.deltaY;
    }, {
      passive: false,
    });
  });
}

function initializeDummyWheel() {
  // data-dummywheel-target属性に与えられたセレクタの要素に対して
  // data-dummywheel-direction属性に基づいてスクロールを模倣する
  // direction属性の値は up down left right のいずれか
  // 二つの属性がついたボタン要素を探して設定する
  for (const btn of document.querySelectorAll('button[data-dummywheel-target][data-dummywheel-direction]')) {
    btn.addEventListener('click', () => {
      const targetSelector = btn.getAttribute('data-dummywheel-target');
      const direction = btn.getAttribute('data-dummywheel-direction');
      const targetEls = document.querySelectorAll(targetSelector);
      if (!targetEls.length) return;

      const scrollAmount = 40; // スクロール量の調整

      // data-dummywheel-scroll属性がついてたら直接操作
      if (btn.hasAttribute('data-dummywheel-scroll')) {
        targetEls.forEach(targetEl => {
          if (direction === 'up') {
            targetEl.scrollTop -= scrollAmount;
          } else if (direction === 'down') {
            targetEl.scrollTop += scrollAmount;
          } else if (direction === 'left') {
            targetEl.scrollLeft -= scrollAmount;
          } else if (direction === 'right') {
            targetEl.scrollLeft += scrollAmount;
          }
        });
        return;
      }

      targetEls.forEach(targetEl => {
        // WheelEventを作成してdispatch
        const wheelEvent = new WheelEvent('wheel', {
          deltaY: direction === 'up' ? -scrollAmount : direction === 'down' ? scrollAmount : 0,
          deltaX: direction === 'left' ? -scrollAmount : direction === 'right' ? scrollAmount : 0,
          bubbles: true,
          cancelable: true
        });
        targetEl.dispatchEvent(wheelEvent);
      });
    });
  }
}

function initializeFakeHorizontal() {
  const teaserSpacer = document.getElementById('teaser-spacer');
  const teaserContent = document.getElementById('teaser-content');
  const teaserContainer = document.getElementById('teaser-container');

  // stickyコンテナ(teaserContentの親)を取得
  const stickyContainer = teaserContent.parentElement;

  // コンテンツの横幅を基準にスクロール領域の高さを設定
  const updateScrollerHeight = () => {
    teaserSpacer.style.height = `${teaserContent.scrollWidth}px`;
  };
  updateScrollerHeight();

  teaserContainer.addEventListener('scroll', () => {
    // sticky要素のtop位置(CSSで指定された値)
    const stickyTop = parseFloat(getComputedStyle(stickyContainer).top) || 0;

    // teaserSpacerの高さとコンテナのビューポート高さ
    const spacerHeight = teaserSpacer.offsetHeight;
    const containerViewportHeight = teaserContainer.clientHeight;
    const stickyHeight = stickyContainer.offsetHeight;

    // teaserSpacerの開始位置(container内での位置)
    const spacerOffsetTop = teaserSpacer.offsetTop;

    // sticky要素が固定される範囲
    // spacerの高さから、containerのビューポート高さを引いた値
    // これがstickyが実際にスクロール可能な範囲
    const scrollableRange = spacerHeight - containerViewportHeight + stickyTop;

    // 現在のスクロール位置からspacerの開始位置とstickyTopを引いた値
    const relativeScroll = teaserContainer.scrollTop - spacerOffsetTop - stickyTop;

    // 0〜scrollableRangeの範囲にクランプ
    const clampedScroll = Math.max(0, Math.min(scrollableRange, relativeScroll));

    // 進行率(0〜1)
    const progress = scrollableRange > 0 ? clampedScroll / scrollableRange : 0;

    // transformで横スクロールを実現
    teaserContent.style.transform = `translateX(calc((${teaserContent.scrollWidth}px - 60cqw + 8px) * ${progress}))`;
  });
}

function initializeMulticolHeightFix() {
  const fixEl = document.getElementById('multicol-height-fix');
  if (!fixEl) return;

  const updateHeight = () => {
    const scrollHeight = fixEl.scrollHeight;
    fixEl.style.height = `${scrollHeight}px`;
  };

  // 初期化時に高さを設定
  updateHeight();

  // ResizeObserverで内容の変化を監視
  const resizeObserver = new ResizeObserver(() => {
    updateHeight();
  });
  resizeObserver.observe(fixEl);
}

function initializeAll() {
  console.log('Initializing...');
  initializeToggleElements();
  initializeGrowingTextElements();
  initializeDummyWheel();
  initializeScrollMapping();
  initializeFakeHorizontal();
  initializeMulticolHeightFix();
}

if (document.readyState === 'loading') {
  document.addEventListener('DOMContentLoaded', initializeAll);
} else {
  initializeAll();
}

})();
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
  font-family: YakuHanRPs, "Hiragino Sans", "Hiragino Kaku Gothic ProN", "Yu Gothic", "Noto Sans JP",
    sans-serif;
}

a:any-link {
  text-decoration: underline;
  text-underline-position: left;
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

<div class="wrapper center wm-horizontal">

<div style="display: flex; flex-direction: column;">
  <h1 style="text-orientation: upright;">縦書きWebの実用を支えるJavaScript</h1>
  <div style="align-self: end; color: #444; text-orientation: mixed;">berlysia / JSConf JP 2025</div>
</div>

</div>

---

<div class="wrapper two-column">
  <div>
    <h1 style="white-space: nowrap;">「縦書きの年」から約<span class="tcu-all">10</span>年</h1>
    <div style="display: grid; place-items: center; gap: 4rem;">
      <div>
        <ul>
          <li>縦書きのＷｅｂサイトは、珍しい</li>
          <li>メインコンテンツが縦書きは、珍しい</li>
          <li>実装する経験がある人は、珍しい</li>
        </ul>
        <p>→紹介のし甲斐がある！
      </div>
    </div>
  </div>

  <div>
    <h1 style="white-space: nowrap;">ＪＳの話をします、が</h1>
    <div style="display: grid; place-items: center; gap: 4rem;">
      <div>
        <ul>
          <li>うまくできない部分をがんばる話</li>
          <li>なぜＪＳが必要になるかに集中します</li>
          <li>実装の細かい話はしません</li>
        </ul>
      </div>
    </div>
  </div>

</div>

---

<div class="wrapper header-and-content">

# スクロールの諸問題

<div style="flex: 1;" class="two-column">

<div style="display: grid; place-items: center;" class="js-toggle-wm js-prefer-vertical wm-vertical">

<div class="wm-horizontal js-growingtext" data-growingtext-index="6" style="border: 4px solid black; overflow: scroll; block-size: 8em; inline-size: 12em;"></div>

</div>

<div style="display: grid; place-items: center;">

<div class="wm-vertical js-growingtext" data-growingtext-index="6" style="border: 4px solid black; overflow: scroll; block-size: 8em; inline-size: 12em;"></div>

</div>

</div>

</div>

---

<div class="wrapper header-and-content">

# 左右方向のスクロール

<div style="flex: 1;" class="two-column">

<div style="display: grid; place-items: center;">

<div style="display: flex; flex-direction: row; align-items: center; gap: 2rem;">
  <div id="horizontal-scroll-1" class="wm-horizontal" style="border: 4px solid black; overflow: scroll; height: 30cqh; width: 30cqw; box-sizing: content-box; display: flex; gap: 1em;">
    <div style="flex: 0 0 auto; width: 30cqh; height: 30cqh; display: grid; place-items: center; font-size: 20cqh; background-color: #f88;">1</div>
    <div style="flex: 0 0 auto; width: 30cqh; height: 30cqh; display: grid; place-items: center; font-size: 20cqh; background-color: #8f8;">2</div>
    <div style="flex: 0 0 auto; width: 30cqh; height: 30cqh; display: grid; place-items: center; font-size: 20cqh; background-color: #88f;">3</div>
    <div style="flex: 0 0 auto; width: 30cqh; height: 30cqh; display: grid; place-items: center; font-size: 20cqh; background-color: #ff8;">4</div>
    <div style="flex: 0 0 auto; width: 30cqh; height: 30cqh; display: grid; place-items: center; font-size: 20cqh; background-color: #8ff;">5</div>
    <div style="flex: 0 0 auto; width: 30cqh; height: 30cqh; display: grid; place-items: center; font-size: 20cqh; background-color: #f8f;">6</div>
  </div>

  <div class="wm-horizontal" style="margin-top: 2rem; display: flex; gap: 1rem;">
    <button data-dummywheel-target="#horizontal-scroll-1" data-dummywheel-direction="left" data-dummywheel-scroll>←</button>
    <button data-dummywheel-target="#horizontal-scroll-1" data-dummywheel-direction="right" data-dummywheel-scroll>→</button>
  </div>
</div>

</div>

<div>

おそらく身構えますよね？

- スマホの左右は狭い
- ホイールスクロールが基本上下のみ
  - シフトキーで左右もできるが……
- 定番アプローチはいろいろある
  - どれが使えるかは要件次第

</div>

</div>

</div>

---

<div class="wrapper header-and-content">

# 上下を左右にマップする

<div style="flex: 1; display: grid; place-items: center;" class="wm-horizontal">

```js
const contentEl = document.querySelector("#content");
contentEl.addEventListener("wheel", e => {
  if (e.deltaX !== 0) return;
  if (e.deltaY === 0) return;
  if (e.ctrlKey /*修飾類*/) return;

  e.preventDefault();
  e.currentTarget.scrollLeft += e.deltaY;
}, {
  passive: false,
});
```

</div>
</div>

---

<div class="wrapper header-and-content">

# 「進む」感覚が逆になる

<div style="flex: 1;" class="two-column">

<div style="display: grid; place-items: center;">

<div style="display: flex; flex-direction: row; align-items: center; gap: 2rem;">
  <div style="display: flex; flex-direction: column; gap: 2rem;">

  <div id="horizontal-scroll-2" class="js-broken-horizontal-map wm-horizontal" style="border: 4px solid black; overflow: scroll; height: 30cqh; width: 30cqw; box-sizing: content-box; display: flex; gap: 1em;">
    <div style="flex: 0 0 auto; width: 30cqh; height: 30cqh; display: grid; place-items: center; font-size: 20cqh; background-color: #f88;">1</div>
    <div style="flex: 0 0 auto; width: 30cqh; height: 30cqh; display: grid; place-items: center; font-size: 20cqh; background-color: #8f8;">2</div>
    <div style="flex: 0 0 auto; width: 30cqh; height: 30cqh; display: grid; place-items: center; font-size: 20cqh; background-color: #88f;">3</div>
    <div style="flex: 0 0 auto; width: 30cqh; height: 30cqh; display: grid; place-items: center; font-size: 20cqh; background-color: #ff8;">4</div>
    <div style="flex: 0 0 auto; width: 30cqh; height: 30cqh; display: grid; place-items: center; font-size: 20cqh; background-color: #8ff;">5</div>
    <div style="flex: 0 0 auto; width: 30cqh; height: 30cqh; display: grid; place-items: center; font-size: 20cqh; background-color: #f8f;">6</div>
  </div>

  <div style="display: grid; place-items: center;">
    <div class="wm-vertical js-growingtext js-broken-horizontal-map" data-growingtext-index="12" style="border: 4px solid black; overflow: scroll; block-size: 8em; inline-size: 12em;"></div>
  </div>

  </div>

  <script>
    (() => {
      const contentEls = document.querySelectorAll(".js-broken-horizontal-map");
      contentEls.forEach(contentEl => {
        contentEl.addEventListener("wheel", e => {
          if (e.deltaX !== 0) return;
          if (e.deltaY === 0) return;
          if (e.ctrlKey /*修飾類*/) return;

          e.preventDefault();
          e.currentTarget.scrollLeft += e.deltaY;
        }, {
          passive: false,
        });
      });
    })();
  </script>

  <div class="wm-horizontal" style="margin-top: 2rem; display: flex; flex-direction: column; gap: 1rem;">
    <button style="font-weight: bold; font-size: 8cqh; width: auto; height: 12cqh;" data-dummywheel-target=".js-broken-horizontal-map" data-dummywheel-direction="up">上（戻る）</button>
    <button style="font-weight: bold; font-size: 8cqh; width: auto; height: 12cqh;" data-dummywheel-target=".js-broken-horizontal-map" data-dummywheel-direction="down">下（進む）</button>
  </div>
</div>

</div>

<div>

- ボタンを押してみる
- マウスでもやってみる
  - いつもの「進む」方向と逆
  - シフトキーでもこの感覚になる

</div>

</div>

</div>

---

<div class="wrapper header-and-content">

# スクロールの座標系

<div style="flex: 1; display: flex; flex-direction: column; justify-content: center;">

<figure class="wm-horizontal"><div style="text-align: center;"><img src="@slide/scroll-axis.png" style="height: 80cqh" /></div></figure>

</div>

---

<div class="wrapper header-and-content">

# スクロールの座標系

<div style="flex: 1; display: flex; flex-direction: column; justify-content: center;">

<figure class="wm-horizontal"><div style="text-align: center;"><img src="@slide/scroll-axis-with-area.png" style="width: 80cqw" /><figcaption>素朴なフローレイアウトのもとでどこに属するか</figcaption></div></figure>

</div>

---

<div class="wrapper header-and-content">

# 下は右にマップされる

<div style="flex: 1; display: grid; place-items: center;" class="wm-horizontal">

```js
const contentEl = document.querySelector("#content");
contentEl.addEventListener("wheel", e => {
  if (e.deltaX !== 0) return;
  if (e.deltaY === 0) return;
  if (e.ctrlKey /*修飾類*/) return;

  e.preventDefault();
  e.currentTarget.scrollLeft += e.deltaY;
}, {
  passive: false,
});
```

</div>
</div>

---

<div class="wrapper header-and-content">

# 「下」で進む感覚のためには

<div style="flex: 1; display: grid; place-items: center;" class="wm-horizontal">

```js
const contentEl = document.querySelector("#content");
contentEl.addEventListener("wheel", e => {
  if (e.deltaX !== 0) return;
  if (e.deltaY === 0) return;
  if (e.ctrlKey /*修飾類*/) return;

  e.preventDefault();
- e.currentTarget.scrollLeft += e.deltaY;
+ e.currentTarget.scrollLeft -= e.deltaY;
}, {
  passive: false,
});
```

</div>
</div>

---

<div class="wrapper header-and-content">

# 独立にスクロールさせる

<div style="flex: 1; display: grid; place-items: center;">

<div style="width: 60cqw; display: flex; flex-direction: column;" class="wm-horizontal">
  <div style="border: 4px solid black;">header</div>
  <div class="wm-vertical js-growingtext js-scroll-map" data-growingtext-index="12" style="border: 4px solid black; overflow: scroll; width: 100%; height: 60cqh;"></div>
  <div style="border: 4px solid black;">footer</div>
</div>

固定の画面内に横スクロールをおく  
スクロールバーが横向きに出る

</div>

---

<div class="wrapper header-and-content">

# 長くても同じ

<div style="flex: 1; display: grid; align-items: center;">

<div style="width: 60cqw; display: flex; flex-direction: column; overflow-y: auto;" class="wm-horizontal">
  <div style="border: 4px solid black; height: 30cqh; flex-shrink: 0;">header</div>
  <div class="wm-vertical js-growingtext js-scroll-map" data-growingtext-index="12" style="border: 4px solid black; overflow: scroll; width: 100%; height: 60cqh; flex-shrink: 0;"></div>
  <div style="border: 4px solid black; height: 30cqh; flex-shrink: 0;">footer</div>
</div>

スクロール領域は入れ子になっている  
縦スクロールを阻害しないよう要調整  
overscroll-behaviorも考慮する

</div>

---

<div class="wrapper header-and-content">

# スクロール方向の扱いは<br />いい感じにならないか？

<div style="flex: 1; display: flex; flex-direction: column; justify-content: center; gap: 2rem;">
……難しそう

- 要素の「優先スクロール方向」の類
  - 自動算出は困難
  - ＣＳＳで宣言可能にはできそう

- デバイスの主要スクロール方向
  - ホイールの自由度がわからない
    - ボタンの有無もわからない
  - フィンガープリントになり望み薄

ＪＳを使い続けるしかない

</div>
</div>

---

<div class="wrapper header-and-content">

# 縦スクロール＋translateX

<div style="flex: 1; display: grid; place-items: center;">

<div style="width: 60cqw; height: 90cqh; overflow-y: scroll;" class="wm-horizontal" id="teaser-container">
  <div style="border: 4px solid black; height: 30cqh;">header</div>
  <div id="teaser-spacer">
    <div style="position: sticky; top: 10cqh; bottom: 10cqh; overflow: hidden; width: 100%; height: calc(60cqh + 8px);" class="wm-vertical">
      <div id="teaser-content" class="js-growingtext" data-growingtext-index="-1" style="border: 4px solid black; min-width: 100%; height: 60cqh; box-sizing: content-box;"></div>
    </div>
  </div>
  <div style="border: 4px solid black; height: 30cqh;">footer</div>
</div>

ティザーサイト的なやつなら便利  
よくあるスクロール駆動

</div>
</div>

---

<div class="wrapper header-and-content">

# やりたいのは本当にこれか？

<div style="flex: 1; display: flex; flex-direction: column; justify-content: center; gap: 2rem;">

- 「縦書きに特化」したくない
  - 縦だったり横だったりしたい
  - 選択肢として縦書きを選びたい
- あんまり特殊にしたくない
  - 既存のデザインと共存したい
  - 自然に組み合わせたい

</div>
</div>

---

<div class="wrapper header-and-content">

# たとえばこんな感じで

<div style="flex: 1; display: grid; align-items: center;">

<div style="overflow-y: auto;">
  <div style="width: 60cqw; display: flex; flex-direction: column;" class="wm-horizontal">
    <div style="border: 4px solid black; height: 10cqh;">header</div>
    <div style="display: flex; flex-direction: row;">
      <div style="border: 4px solid black; width: 20%; height: 40cqh;">side</div>
      <div class="wm-horizontal js-growingtext" data-growingtext-index="-1" style="border: 4px solid black; width: 80%;"></div>
    </div>
    <div style="border: 4px solid black; height: 10cqh;">footer</div>
  </div>
</div>

縦書きにもこの趣が欲しい  
当たり前に縦書きを含めたい  
途中に縦書きが現れてもいい

</div>

---

<div class="wrapper header-and-content">

# 縦書き＋マルチカラム

<div style="flex: 1; display: grid; align-items: center;">

<div>
  <div style="width: 60cqw; display: flex; flex-direction: column;" class="wm-horizontal">
    <div style="border: 4px solid black; height: 10cqh;">header</div>
    <div style="display: flex; flex-direction: row;">
      <div style="border: 4px solid black; width: 20%; height: 40cqh;">side</div>
      <div class="wm-vertical js-growingtext" data-growingtext-index="-1" style="border: 4px solid black; width: 80%; column-width: 40cqh; column-fill: auto; box-sizing: content-box;"></div>
    </div>
    <div style="border: 4px solid black; height: 10cqh;">footer</div>
  </div>
</div>

<div style="display: flex; flex-direction: row; justify-content: space-between; align-items: center;">
  <p>良さそうな感じがする……</p>
  <p style="text-align: end;">……なんかおかしいな</p>
</div>
</div>

---

<div class="wrapper header-and-content">

# 適当に高さを当ててやる

<div style="flex: 1; display: grid; place-items: center;" class="wm-horizontal">

```js
const contentEl = document.querySelector("#content");

function updateHeight() {
  const scrollHeight = contentEl.scrollHeight;
  contentEl.style.height = `${scrollHeight}px`;
}
updateHeight();

const observer = new ResizeObserver(() => {
  updateHeight();
});
observer.observe(contentEl);
```

</div>
</div>

---

<div class="wrapper header-and-content">

# 縦書き＋マルチカラム

<div style="flex: 1; display: grid; align-items: center;">

<div>
  <div style="width: 60cqw; display: flex; flex-direction: column;" class="wm-horizontal">
    <div style="border: 4px solid black; height: 10cqh;">header</div>
    <div style="display: flex; flex-direction: row;">
      <div style="border: 4px solid black; width: 20%; height: 40cqh;">side</div>
      <div id="multicol-height-fix" class="wm-vertical js-growingtext" data-growingtext-index="-1" style="border: 4px solid black; width: 80%; column-width: 40cqh; column-fill: auto; box-sizing: content-box;"></div>
    </div>
    <div style="border: 4px solid black; height: 10cqh;">footer</div>
  </div>
</div>

<div style="display: flex; flex-direction: row; justify-content: space-between; align-items: center;">
  <p>いい感じに高さを測ってやる</p>
  <p style="text-align: end;">おさまることもあるが、不安定<br />ズレたり振動したりする<br />実用する場合は番兵を置くのがおすすめ</p>
</div>
</div>

---

<div class="wrapper header-and-content">

# 縦書きマルチカラムは<br />いい感じになるか？

<div style="flex: 1; display: flex; flex-direction: column; justify-content: center; gap: 2rem;">

- 主要ブラウザすべてオーバーフロー
  - 安定して動いてない
  - それぞれ個別の問題もある

- 2019年時点で仕様待ちのコメント
  - [Chromiumのissue](https://issues.chromium.org/issues/41471261)

- Writing Modes Level 4
  - 親子で縦横異なる場合の記述追加

各所意欲はあるように見える  
私が欲しいので、押し込みたい

</div>
</div>

---

<div class="wrapper header-and-content">

# なぜ縦書きにこだわるか

<div style="flex: 1; display: flex; flex-direction: column; justify-content: center; gap: 2rem;">

- 日本語は縦書きと横書きができる言語
  - 横書きをメインにしながらも<br />適宜縦書きを使っているのが現在
  - 片方しかできない言語が大半

- 縦書きが「優れている」とは思わない
  - ただの選択肢の一つ、それがいい
  - 望めば当たり前に使えてほしい
  - 適した方を選べばいい
    - 空間を使うのに便利とか
    - 馴染みのあるスタイルとか

縦書きの活用が広がることは、  
縦横の混在が容易になることは、  
デジタル文書の表現を豊かにするだろう

紙に習って、紙にできないことをしよう

</div>
</div>

---

<div class="wrapper header-and-content">

# 誰

<div class="two-column">

<div class="wm-horizontal" style="display: grid; place-items: center;"><div style="text-align: center;"><img src="@slide/berlysia.jpg" style="height: 20cqw; border-radius: 9999px;" /><p style="line-height: 1em">berlysia<br /><span style="font-size: 0.6em">（べるりしあ）</span></p></div></div>

<div>

妄想を現実にする活動をしています

- ドワンゴ教育事業
  - フロントエンドなんでも屋
- ＴＳＫａｉｇｉ主催のひとり
  - 来週は北陸でお会いしましょう
  - 2026も動き出しました
- <strong>Ｗｅｂ縦書きガチ勢</strong>


</div>
</div>
</div>

