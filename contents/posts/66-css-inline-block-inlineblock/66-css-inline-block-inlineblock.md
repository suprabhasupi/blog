---
title: CSS inline, block, inline-block
slug: /66-css-inline-block-inlineblock
date: 2021-07-04
desc: Learn display inline, block and inline-block of CSS
cover:
  img: ../../../photos/66-css-inline-block-inlineblock.png
banner: ../../banners/66-css-inline-block-inlineblock.png
tags:
    - CSS
priority: 1
---

import LinkPost from '../../../src/components/linkPost'
import ImgPost from '../../../src/components/imgPost'
import Inline from './1.png'
import Block from './2.png'
import InlineBlock from './3.png'

<p><span class='first-letter'>L</span>et's understand the difference between Inline, Block, Inline-Block.</p>

1️⃣ inline 

2️⃣ block

3️⃣ inline-block

```html
<p>
    Lets checkout how inline, block and inline-block works. You can or can't
    set the <span>width</span> or <span>height</span> for few display
    properties.
</p>
```

## 1️⃣ inline

Inline elements takes there own width and height, <b>you can not apply the width and height</b>, and if you try to apply then it won't have any effect.

### These are the inline HTML elements 👇

- span
- a
- img
- u
- small
- strong
- b
- ... many more

```css
.inline {
    padding: 5px;
    border: 5px dashed #ff527b;
    width: 200px; /* ❌ It will not work */
}
```

<ImgPost src={Inline} alt="css display inline" />

## 2️⃣ block

A block-level element always starts on a new line. A block-level element always takes up the full width available.

A block level element has a top and a bottom margin, whereas an inline element does not.

### These are the `block` HTML elements 👇

- h1
- p
- div
- header
- main
- table
- section

```css
.block {
    display: block;
    padding: 5px;
    border: 5px dashed #ff527b;
}
```      

<ImgPost src={Block} alt="css display block" width={80} />

## 3️⃣ inline-block

inline-block It’s formatted just like the inline element, where it doesn’t start on a new line. 

It’s essentially the same thing as inline, except that you can set height and width values.

```css
.inline-block {
    display: inline-block;
    padding: 5px;
    border: 5px dashed #ff527b;
    width: 200px;  /* ✅ It will work  */
}
```

<ImgPost src={InlineBlock} alt="css display inline-block" />

## Reference 🧐

- <LinkPost href="https://developer.mozilla.org/en-US/docs/Web/HTML/Inline_elements" name="MDN Docs of Inline" />
- <LinkPost href="https://developer.mozilla.org/en-US/docs/Web/HTML/Block-level_elements" name="MDN Docs of Block" />
