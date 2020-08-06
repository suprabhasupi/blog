---
title: CSS Text Shadow
slug: /26-css-text-shadow
date: 2020-06-12
desc: The text-shadow CSS property adds shadows to text.
# Old URL
# Minute Read
cover:
  img: ../../../photos/26-css-text-shadow.png
banner: ../../banners/26-css-text-shadow.png
tags:
  - CSS
---

import ImgPost from '../../../src/components/imgPost'
import LinkPost from '../../../src/components/linkPost'
import TextShadow from './1-text-shadow.gif'

<p><b><span class='first-letter'>W</span>ith CSS3 you can create two types of shadows:</b></p>
1. text-shadow (adds shadow to text)
2. box-shadow (adds shadow to other elements)

In this section we will be checking how can we create **text shadow**.

## Text Shadow ✰

The text-shadow CSS property adds shadows to text. It accepts a comma-separated list of shadows to be applied to the text and any of its decorations.

<u>Syntax:</u>

```css
text-shadow: horizontal-offset vertical-offset blur-radius color;
```

<u>Example:</u>

```css
text-shadow: 1px 1px 2px white;
```

<ImgPost src={TextShadow} alt='text shadow' />

<p><LinkPost href='https://codepen.io/suprabhasupi/pen/mdVPywz' name='Here' />, I have added few examples to check how text-shadow works where we include Hard Shadow, Double shadow, etc.</p>

Thanks for reading this article ♥️

If you have any question, please feel free to ping me on <LinkPost href='https://twitter.com/suprabhasupi' name='@suprabhasupi' /> 😋

