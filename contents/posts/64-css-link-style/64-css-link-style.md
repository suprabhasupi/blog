---
title: CSS Link Style 🎨
slug: /64-css-link-style
date: 2021-06-25
desc: Using CSS, links can be styled in many different ways.
cover:
  img: ../../../photos/64-css-link-style.png
banner: ../../banners/64-css-link-style.png
tags:
    - CSS
priority: 1
---

import LinkPost from '../../../src/components/linkPost'
import ImgPost from '../../../src/components/imgPost'

<p><span class='first-letter'>U</span>sing CSS, links can be styled in many different ways.</p>

We can change the style of <mark>CSS link</mark> as:

1. <a href="#hover">:hover</a>
2. <a href="#active">:active</a>
3. <a href="#visited">:visited</a>
4. <a href="#focus">:focus</a>
5. <a href="#focus-within">:focus-within</a>
6. <a href="#focus-visible">:focus-visible</a>

<h1 id="hover">1. :hover</h1>

The `:hover` CSS pseudo-class triggered when the user hovers over an element with the cursor.

```css
a:hover {
    color: red
}
```

If you are using :link, :visited, :active. Remember to add hover after link and visited according to LVHA-order: **:link — :visited — :hover — :active**.

<h1 id="active">2. :active</h1>

The `:active` CSS pseudo-class starts when the user presses down the primary mouse button.

```css
a:active {
    color: blue;
}
```

The `:active` pseudo-class is commonly used on `<a>` and `<button>` elements.

<h1 id="visited">3. :visited </h1>

The :visited CSS pseudo-class represents links that the user has already visited.

```css
a:visited {
    color: yellow;
}
```

<h1 id="focus">4. :focus </h1>

The :focus CSS pseudo-class represents an element (such as a form input) that has received focus. It is generally triggered when the user clicks or taps on an element or selects it with the keyboard's Tab key.

```css
input:focus {
    background-color: green;
}
```

**NOTE** 📝 Never remove the focus outline

Checkout the codepen where you play and understand how `hover`, `active`, `visited` and `focus` are working.

<iframe height="350" style="width: 100%;" scrolling="no" title="CSS Link" src="https://codepen.io/suprabhasupi/embed/GRWajdE?defaultTab=html%2Cresult&theme-id=dark" frameborder="no" loading="lazy" allowtransparency="true" allowfullscreen="true">
  See the Pen <a href="https://codepen.io/suprabhasupi/pen/GRWajdE">
  CSS Link</a> by suprabha (<a href="https://codepen.io/suprabhasupi">@suprabhasupi</a>)
  on <a href="https://codepen.io">CodePen</a>.
</iframe>

<h1 id="focus-within">5. :focus-within</h1>

The :focus-within CSS pseudo-class represents an element that is itself matched by the :focus pseudo-class or has a descendant that is matched by :focus.

```css
div:focus-within {
    background: cyan;
}
```

<h1 id="focus-visible">6. :focus-visible</h1>

The `:focus-visible` pseudo-class applies to provide a different focus indicator based on the user’s input modality (mouse vs. keyboard).

```css
.focus-visible:focus-visible {
    background: pink;
    color: red;
}
```

**Why do we need :focus-visible?**

`:focus` also do that same right? 🤔
But there is one problem. So imagine you wanted to remove outline of some button or links. Then it would be little bit problematic for those user who tries to access through keyboard. 

Here we can use **:focus-visible**, which applies when you actually want a visual indicator to help the user for focus to see.

Checkout the codepen here 👇

<iframe height="500" style="width: 100%;" scrolling="no" title="css focus within and visible" src="https://codepen.io/suprabhasupi/embed/LYWoRrG?defaultTab=html%2Cresult&theme-id=dark" frameborder="no" loading="lazy" allowtransparency="true" allowfullscreen="true">
  See the Pen <a href="https://codepen.io/suprabhasupi/pen/LYWoRrG">
  css focus within and visible</a> by suprabha (<a href="https://codepen.io/suprabhasupi">@suprabhasupi</a>)
  on <a href="https://codepen.io">CodePen</a>.
</iframe>

## Reference 🧐

- <LinkPost href="https://developer.mozilla.org/en-US/docs/Web/CSS/:hover" name="MDN Doc hover" />
- <LinkPost href="https://developer.mozilla.org/en-US/docs/Web/CSS/:focus" name="MDN Doc focus" />
- <LinkPost href="https://developer.mozilla.org/en-US/docs/Web/CSS/:active" name="MDN Doc active" />
- <LinkPost href="https://developer.mozilla.org/en-US/docs/Web/CSS/:visited" name="MDN Doc visited" />
- <LinkPost href="https://developer.mozilla.org/en-US/docs/Web/CSS/:focus-visible" name="MDN Doc focus-visible" />
- <LinkPost href="https://developer.mozilla.org/en-US/docs/Web/CSS/:focus-within" name="MDN Doc focus-within" />
