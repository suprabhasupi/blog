---
title: Changing Cursor with CSS for better UX
slug: /59-changing-cursor-with-css-for-better-ux
date: 2021-05-21
desc: There are multiple cursors for better UI/UX
cover:
  img: ../../../photos/59-changing-cursor-with-css-for-better-ux.png
banner: ../../banners/59-changing-cursor-with-css-for-better-ux.png
tags:
    - CSS
---

import LinkPost from '../../../src/components/linkPost'
import ImgPost from '../../../src/components/imgPost'
import CursorCSS1 from './1.gif'
import CursorCSS2 from './2.png'

<p><span class='first-letter'>T</span>he cursor CSS property sets the type of mouse cursor, if any, to show when the mouse pointer is over an element.</p>

There are some cases where the default cursor behaviour from the User Agent Stylesheet doesn’t cut it. In these cases, we ought to change the cursor to something that reflects the expected user interaction on that element.

Checkout all the cursors on <LinkPost href="https://codepen.io/suprabhasupi/pen/PopGBRO" name="codepen" /> 🧡

<iframe height="465" style="width: 100%;" scrolling="no" title="Cursor of CSS" src="https://codepen.io/suprabhasupi/embed/PopGBRO?height=265&theme-id=light&default-tab=html,result" frameborder="no" loading="lazy" allowtransparency="true" allowfullscreen="true">
  See the Pen <a href='https://codepen.io/suprabhasupi/pen/PopGBRO'>Cursor of CSS</a> by suprabha
  (<a href='https://codepen.io/suprabhasupi'>@suprabhasupi</a>) on <a href='https://codepen.io'>CodePen</a>.
</iframe>

### Using a Custom Cursor ↓

The cursor property is specified as zero or more `<url>` values, separated by commas. The cursor property does accept SVG files in all its glory but not Gifs.

Yes, you can create your own custom cursor using any images like png, jpg, etc.

```html
<div class="cursors">
  <button class="heart">Heart</button>
  <button class="earth">Earth</button>
  <button class="smile">Smile</button>
</div>
```

```css
.cursors {
  display: flex;
  flex-wrap: wrap;
}
.heart {
  cursor: url("https://i.imgur.com/K10EMnr.png"), auto;
}
.earth {
  cursor: url("https://i.imgur.com/scE50J2.png"), pointer;
}
.smile {
  cursor: url("https://i.imgur.com/aPPijZC.png"), pointer;
}
```

#### Output:

<ImgPost src={CursorCSS1} alt="all-cursor" />

📝 <mark>NOTE</mark>: The size of the <b>images should not be greater than 32*32 DIP</b>, else you will get the below warning and your image won't work. 

<ImgPost src={CursorCSS2} alt="cursor-warning" />

I have used <LinkPost href="https://www.birme.net/?target_width=32&target_height=32" name="this website" /> for resizing my images.

## Reference 🧐

- <LinkPost href="https://developer.mozilla.org/en-US/docs/Web/API/Console" name="MDN Doc Cursor" />
