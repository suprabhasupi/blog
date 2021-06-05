---
title: Future of CSS - Container Query
slug: /62-css-container-query
date: 2021-06-06
desc: Container Query provides a way for web developers to isolate parts of the DOM and declare to the browser these are independent from the rest of the document.
cover:
  img: ../../../photos/62-css-container-query.png
banner: ../../banners/62-css-container-query.png
tags:
    - CSS
priority: 1
---

import LinkPost from '../../../src/components/linkPost'
import ImgPost from '../../../src/components/imgPost'
import ContainerQuery1 from './1.png'
import ContainerQuery2 from './2.png'

<p><span class='first-letter'>A</span> web page consists of different sections and components, and we make them responsive by using CSS media queries. There is nothing wrong with that, but it has limitations.</p>

To use container queries we have to tell the container (the parent of the element we want to apply the query to) that we care about its dimensions, we do this with the new contain property.

## CSS Containment 🔥

```html
<h1>My blog</h1>
<section>
  <h2>Heading of a nice section</h2>
  <p>Content here.</p>
</section>
<section>
  <h2>Another heading of another section</h2>
  <p>More content here.</p>
</section>
```

```css
section {
  contain: content;
}
```

1. **none**

    Indicates the element renders as normal, with no containment applied.

2. **strict**

    Indicates that all containment rules except style are applied to the element. This is equivalent to `contain: size layout paint`.

3. **content**

    If we give each `<section>` the contain property with a value of content, when new elements are inserted the browser understands it does not need to relayout or repaint any area outside of the containing element's subtree, although if the `<section>` is styled such that its size depends on its contents (e.g. with height: auto), then the browser may need to account for its size changing).

    The `content` value is shorthand for `contain: layout paint` .

    It tells the browser that the internal layout of the element is totally separate from the rest of the page, and that everything about the element is painted inside its bounds.

4. **size**

    It does not offer much in the way of performance optimizations when used on its own.

    If you turn on contain: size you need to also specify the size of the element you have applied this to. It will end up being zero-sized in most cases, if you don't manually give it a size.

5. **layout**

    Indicates that nothing outside the element may affect its internal layout and vice versa.

6. **style**

    Indicates that, for properties that can have effects on more than just an element and its descendants, those effects don't escape the containing element. Note that this value is marked "at-risk" in the spec and may not be supported everywhere.

7. **paint**

    Indicates that descendants of the element don't display outside its bounds. If the containing box is offscreen, the browser does not need to paint its contained elements — these must also be offscreen as they are contained completely by that box. And if a descendant overflows the containing element's bounds, then that descendant will be clipped to the containing element's border-box.

When we use media queries, most of the time we care about the available width (or **inline-size**).

**NOTE**: You can <LinkPost href="https://drafts.csswg.org/css-contain-3/" name="review the draft document" /> which will update as the spec is formed.

### What problem do container queries solve? 🤔

When creating a responsive design you often use a media query to change the document layout based on the size of the viewport. Media queries give us the ability to size things based on ranges.

Instead of looking at the viewport size, we can look at the container size and make our layout adjustments according to the space in the container.

You need to install <LinkPost href="https://www.google.com/intl/en/chrome/canary/" name="Google Chrome Canary" /> to run this feature. Once you’ve activated the feature in <mark>chrome://flags</mark> and enable it. Then a restart chrome canary will be needed.

<ImgPost src={ContainerQuery1} alt="CSS Google chrome canary" />

Now, you can then begin to write code like this:

```css
.parent {
  contain: layout inline-size;
}

@container (min-width: 400px) {
  .child {
    display: flex;
    flex-wrap: wrap;
  }
}
```

Checkout this Codepen for how it works 👇

<iframe height="465" style="width: 100%;" scrolling="no" title="CSS Container Query" src="https://codepen.io/suprabhasupi/embed/QWpQrqP?height=265&theme-id=dark&default-tab=html,result" frameborder="no" loading="lazy" allowtransparency="true" allowfullscreen="true">
  See the Pen <a href='https://codepen.io/suprabhasupi/pen/QWpQrqP'>CSS Container Query</a> by suprabha
  (<a href='https://codepen.io/suprabhasupi'>@suprabhasupi</a>) on <a href='https://codepen.io'>CodePen</a>.
</iframe>

## Browser Support 🌐
Support for `container query` is not good at this moment!

<ImgPost src={ContainerQuery2} alt="CSS container query browser support" />

## Community Input 👭

<LinkPost href="https://ishadeed.com/article/say-hello-to-css-container-queries/" name="Container Query By Ahmad Shadeed" />

## Reference 🧐

- <LinkPost href="https://developer.mozilla.org/en-US/docs/Web/CSS/CSS_Containment" name="CSS Containment" />
- <LinkPost href="https://developer.mozilla.org/en-US/docs/Web/CSS/CSS_Container_Queries" name="CSS Container Query" />
- <LinkPost href="https://caniuse.com/css-container-queries" name="Can I Use CSS Container Queries" />


<a href="https://www.buymeacoffee.com/suprabhasupi" target="_blank"><img src="https://cdn.buymeacoffee.com/buttons/v2/default-yellow.png" alt="Buy Me A Coffee" style="width: 200px;" /></a>