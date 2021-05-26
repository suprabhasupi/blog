---
title: CSS ::placeholder and :placeholder-shown
slug: /60-css-placeholder-and-placeholder-shown
date: 2021-05-26
desc: :placeholder-shown CSS pseudo-class represents any `<input>` or `<textarea>` element that is currently displaying placeholder text.
cover:
  img: ../../../photos/60-css-placeholder-and-placeholder-shown.png
banner: ../../banners/60-css-placeholder-and-placeholder-shown.png
tags:
    - CSS
priority: 1
---

import LinkPost from '../../../src/components/linkPost'
import ImgPost from '../../../src/components/imgPost'
import css1 from './1.gif'
import css2 from './2.png'
import css3 from './3.png'
import css4 from './4.gif'

<p><span class='first-letter'>T</span>he `:placeholder-shown` CSS pseudo-class represents any `<input>` or `<textarea>` element that is currently displaying placeholder text.</p>

```html
<input type="text" placeholder="some text" />
```

```css
input:placeholder-shown {
  font-family: "Baloo 2", cursive;
  font-weight: bold;
  background-color: pink;
}
```

#### Output:
<ImgPost src={css1} alt="placeholder shown" />

In above snippet, 
1. If user has not typed anything then placeholder shown background color will be pink
2. When user has typed something then there will be no placeholder shown and the background color will be transparent


📝 <mark>NOTE</mark>: `:placeholder-shown` won't work if there will be no placeholder text

🗓 <b>Example:</b>

```html
<input type="text" />
```

```css
input:placeholder-shown {
  background-color: pink;
}
```

❌ The above snippet doesn't work

### :placeholder-shown vs ::placeholder 🔥

We can use `:placeholder-shown` to style the input element.

```css
input:placeholder-shown {
  border: 1px solid pink;
  background: yellow;
  color: blue;
}
```

Here, we set `color: blue`, but it didn't work. That's because `:placeholder-shown` will only target the input itself. But for the actual placeholder text, you have to use the pseudo-element `::placeholder`.

`::placeholder` pseudo-element can be used to style the placeholder text in `<input>` or `<textarea>` element. 

```css
input::placeholder {
  color: blue;
}
```

#### Output:

<ImgPost src={css2} alt="placeholder" />


If you wanted to add styles for empty placeholder, we can pass empty string `" "` as placeholder.

```html
<input type="text" placeholder=" " />
```

#### Output:
<ImgPost src={css3} alt="placeholder shown" />

Now, why don't we combine two selector `:not` and `:placeholder-shown`.
So we can target if the input is not empty then we can apply css.

```html
<input placeholder="some text" value="Check with empty!" />
```

```css
input:not(:placeholder-shown) {
  background-color: pink;
}
```

#### Output:

<ImgPost src={css4} alt="placeholder not shown" />

In above snippet, 
1. If the input has value then the `background-color` will get applied
2. If the input is empty then `background-color` not applies

📝 <mark>NOTE</mark>: `::placeholder` does not work with `:not` selector.

I have also created floating input using `:not` selector and `:placeholder-shown` selector.

Checkout the codepen here:
<iframe height="265" style="width: 100%;" scrolling="no" title="css placeholder" src="https://codepen.io/suprabhasupi/embed/KKWqKpp?height=265&theme-id=light&default-tab=html,result" frameborder="no" loading="lazy" allowtransparency="true" allowfullscreen="true">
  See the Pen <a href='https://codepen.io/suprabhasupi/pen/KKWqKpp'>css placeholder</a> by suprabha
  (<a href='https://codepen.io/suprabhasupi'>@suprabhasupi</a>) on <a href='https://codepen.io'>CodePen</a>.
</iframe>

## Reference 🧐

- <LinkPost href="https://developer.mozilla.org/en-US/docs/Web/CSS/::placeholder" name="MDN Doc Placeholder" />
- <LinkPost href="https://developer.mozilla.org/en-US/docs/Web/CSS/:placeholder-shown" name="MDN Doc placeholder-shown" />
- <LinkPost href="https://caniuse.com/css-placeholder-shown" name="caniuse - placeholder-shown" />
