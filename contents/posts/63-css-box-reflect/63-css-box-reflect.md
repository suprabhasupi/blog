---
title: CSS Box Reflect 
slug: /63-css-box-reflect
date: 2021-06-12
desc: -webkit-box-reflect CSS property lets you reflect the content of an element in one specific direction.
cover:
  img: ../../../photos/63-css-box-reflect.png
banner: ../../banners/63-css-box-reflect.png
tags:
    - CSS
---

import LinkPost from '../../../src/components/linkPost'
import ImgPost from '../../../src/components/imgPost'
import BoxReflect1 from './1.png'
import BoxReflectSupport1 from './2.png'

<p><span class='first-letter'>T</span>he `-webkit-box-reflect` CSS property lets you reflect the content of an element in one specific direction.</p>

We can create the reflections using the box-reflect property.

```css
/* Direction values */
-webkit-box-reflect: above / below / left /  right;

/* can also add offset value */
-webkit-box-reflect: below 10px;

/* even add gradient */
-webkit-box-reflect: below 0 linear-gradient(transparent, white);
```

#### Example

```html
<img src="https://images-wixmp-ed30a86b8c4ca887773594c2.wixmp.com/i/2fea277d-540b-42af-b152-782940dc49ef/de4cpd0-caed317f-b05d-4852-acb8-3ce25b38d873.png" />
```

```css
img {
  -webkit-box-reflect: right;
}
```

<u>Output:</u>
<ImgPost src={BoxReflect1} alt="css box reflect" width={80} />

Checkout the codepen here:

<iframe height="465" style="width: 100%;" scrolling="no" title="CSS Box Reflect" src="https://codepen.io/suprabhasupi/embed/gOmdqPg?height=265&theme-id=dark&default-tab=html,result" frameborder="no" loading="lazy" allowtransparency="true" allowfullscreen="true">
  See the Pen <a href='https://codepen.io/suprabhasupi/pen/gOmdqPg'>CSS Box Reflect</a> by suprabha
  (<a href='https://codepen.io/suprabhasupi'>@suprabhasupi</a>) on <a href='https://codepen.io'>CodePen</a>.
</iframe>

## Browser Support 🌐

Box-reflect doesn't have the best support, but it's upcoming. So far, Firefox and IE have no support at all.

<ImgPost src={BoxReflectSupport1} alt="css box reflect support" />

## Reference 🧐

- <LinkPost href="https://developer.mozilla.org/en-US/docs/Web/CSS/-webkit-box-reflect" name="MDN Box Reflect" />
- <LinkPost href="https://caniuse.com/?search=-webkit-box-reflect" name="can i use box reflect" />
