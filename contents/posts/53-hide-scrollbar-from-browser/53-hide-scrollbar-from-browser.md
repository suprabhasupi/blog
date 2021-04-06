---
title: Hide Scrollbar From Browser
slug: /53-hide-scrollbar-from-browser
date: 2021-04-06
desc: Hiding scrollbar from browser
cover:
  img: ../../../photos/53-hide-scrollbar-from-browser.png
banner: ../../banners/53-hide-scrollbar-from-browser.png
tags:
    - CSS
priority: 1
---

import LinkPost from '../../../src/components/linkPost'

<p><span class='first-letter'>T</span>here are many times when we need to hide the scrollbar from the HTML elements. The uses can vary from person to person. It is opinionated topic to keep the scrollbar or not based on User Interactions(UI)/User ,Experience(UX).</p>

Most of the time, I don't like to show the scrollbar to the user because of design practices I follow.

To achieve this, you just need to tickle with CSS to add some pseudo selectors for hiding it based on Browser's stylings

**For Chrome:**

```css
/* Hide scrollbar for Chrome, Safari and Opera */
::-webkit-scrollbar {
    display: none;
}

.element::-webkit-scrollbar { width: 0 !important }
```

**For Firefox / Edge: (Checkout the firefox output and then GTG)**

```css
html {
    scrollbar-width: none;
}

```

Important Points to be considered before hiding the scroll bar:

1. Preferably Hide scrollbars only when if all content is visible else user may skip the content
2. Avoid horizontal scrolling on Web pages and do not hide horizontal scroll bar as they can make content difficult to read


Checkout the <LinkPost href="https://codepen.io/suprabhasupi/pen/NWbQyLQ" name="Codepen" /> here 🚀