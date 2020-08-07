---
title: CSS Backdrop filter
slug: /33-css-backdrop-filter
date: 2020-07-18
desc: Backdrop-filter property in CSS is used to apply filter effects (grayscale, contrast, blur, etc) to the background/backdrop of an element.
# Old URL
# Minute Read
cover:
  img: ../../../photos/33-css-backdrop-filter.png
banner: ../../banners/33-css-backdrop-filter.png
tags:
  - CSS
---

import ImgPost from '../../../src/components/imgPost'
import LinkPost from '../../../src/components/linkPost'
import Output from './1.png'
import BrowserSupport from './2-browser-support.png'

<p><span class='first-letter'>T</span>he backdrop-filter property in CSS is used to apply filter effects (grayscale, contrast, blur, etc) to the background/backdrop of an element. The backdrop-filter has the same effect as the filter property, except the filter effects are applied only to the background and instead of to the element’s content.</p>

<u>Syntax:</u>

```css
backdrop-filter: <filter-function> [<filter-function>]* | none
```

<p>`<filter-function>` can be any one of the following:</p>

- blur()
- brightness()
- contrast()
- drop-shadow()
- grayscale()
- hue-rotate()
- invert()
- opacity()
- saturate()
- sepia()
- url() – (for applying SVG filters)

You can apply multiple `<filter-function>` to a backdrop.

<u>Example:</u>

```css
backdrop-filter: grayscale(0.5) opacity(0.8)  // .... and more
```

```html
<div class="container">
    <div class="content">
      <p>
        Lorem ipsum dolor sit amet, consectetur adipisicing elit.
      </p>
      <p>
        Lorem ipsum dolor sit amet, consectetur adipisicing elit. Officiis,
        quae distinctio magnam, laborum iusto itaque autem! Molestiae enim
        distinctio molestias, dolores ea quasi magni nisi aspernatur magnam,
        voluptate eum fuga.
      </p>
    </div>
</div>
```

```css
.content {
    background-color: rgba(255, 255, 255, 0.5);
    -webkit-backdrop-filter: blur(10px);
    backdrop-filter: blur(10px);
}
```

<u>Output:</u>

<ImgPost src={Output} alt='css backdrop filter' width={60} margin="2rem 0" />

Check out the full snippet here in <LinkPost href='https://codepen.io/suprabhasupi/pen/OJMayNp' name='@codepen' />

## Browser Support 🖥

This browser support data is from Caniuse, which has more detail. A number indicates that browser supports the feature at that version and up.

<ImgPost src={BrowserSupport} alt='browser support for css backdrop filter' />

## Reference 🧐

- <LinkPost href='https://developer.mozilla.org/en-US/docs/Web/CSS/backdrop-filter' name='MDN Backdrop filter' />
- <LinkPost href='https://css-tricks.com/almanac/properties/b/backdrop-filter/' name='CSS Trciks Example' />

Thanks for reading the article ❤️

I hope you enjoy learning from the article, let me know if you have any questions on <LinkPost href='https://twitter.com/suprabhasupi' name='@suprabhasupi' /> 😋
