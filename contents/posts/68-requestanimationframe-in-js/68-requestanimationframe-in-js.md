---
title: RequestAnimationFrame in JavaScript
slug: /68-requestanimationframe-in-js
date: 2021-07-12
desc: You will learn the basics of JavaScript by creating the following ten games
cover:
  img: ../../../photos/68-requestanimationframe-in-js.png
banner: ../../banners/68-requestanimationframe-in-js.png
tags:
    - JS
priority: 1
---

import LinkPost from '../../../src/components/linkPost'
import ImgPost from '../../../src/components/imgPost'

<p><span class='first-letter'>U</span>sing the native <mark>requestAnimationFrame</mark> method we can make our browser repeat something very quickly forever. It calls itself to paint the next frame.</p>

📝 <mark>Note</mark>: Your callback routine must itself call r**equestAnimationFrame()** again if you want to animate another frame at the next repaint. requestAnimationFrame() is 1 shot.

**requestAnimationFrame** takes one argument, only callback.

<b><u>Syntax:</u></b>

```js
window.requestAnimationFrame(callback);
```

**callback**: The function to call when it's time to update your animation for the next repaint.

Animations with **requestAnimationFrame** are non-blocking, which means if you make subsequent calls to **requestAnimationFrame**, the resulting animations will all occur at  same time.

The goal is **60 frame per second(fps)** to appear smooth animation.

So we do like this 👇

```js
setInterval(() => {
  // animation code
}, 1000/60);
```

But now we have **requestAnimationFrame**, which is more better and optimized:

- Animations will be so smooth as its optimized
- Animations in inactive tabs will stop, allowing the CPU to chill

Let's see how can we create the above snippet using requestAnimationFrame

```js
function smoothAnimation() {
	// animtion
	requestAnimationFrame(smoothAnimation)
}
requestAnimationFrame(smoothAnimation)
```

### How can you start and stop animation ⏲️

**requestAnimationFrame** returns an ID you can use to cancel it.

```js
let reqAnimationId;
function smoothAnimation() {
	// animtion
	reqAnimationId = requestAnimationFrame(smoothAnimation)
}

// to start
function start() {
	reqAnimationId = requestAnimationFrame(smoothAnimation)
}

// to end
function end() {
	 cancelAnimationFrame(reqAnimationId)
}
console.log("reqAnimationId", reqAnimationId)
```

Checkout the **codepen** here for more details:

<iframe height="500" style="width: 100%;" scrolling="no" title="RequestAnimationFrame in JavaScript" src="https://codepen.io/suprabhasupi/embed/dyWpBJd?default-tab=html%2Cresult&theme-id=dark" frameborder="no" loading="lazy" allowtransparency="true" allowfullscreen="true">
  See the Pen <a href="https://codepen.io/suprabhasupi/pen/dyWpBJd">
  RequestAnimationFrame in JavaScript</a> by suprabha (<a href="https://codepen.io/suprabhasupi">@suprabhasupi</a>)
  on <a href="https://codepen.io">CodePen</a>.
</iframe>

## Reference 🧐

- <LinkPost href="https://developer.mozilla.org/en-US/docs/Web/API/window/requestAnimationFrame" name="MDN Docs of requestAnimationFrame" />
- <LinkPost href="https://www.paulirish.com/2011/requestanimationframe-for-smart-animating/" name="requestAnimationFrame by paulirish" />

## Summary ∑

If you do any animation on browser and wanted it to be optimised, then would highly recoomend to use requestAnimationFrame web API.

Thanks for reading the article ❤️

I hope you love the article. If you have any question, feel free to ping me on <LinkPost href='https://twitter.com/suprabhasupi' name='Twitter' /> | <LinkPost href='http://instagram.com/suprabhasupi' name='Instagram' /> 😋
