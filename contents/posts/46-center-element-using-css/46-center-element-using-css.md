---
title: Center Element Using CSS
slug: /46-center-element-using-css
date: 2020-08-24
desc: Different ways to align element to the center of the page.
# Minute Read
cover:
    img: ../../../photos/46-center-element-using-css.png
banner: ../../banners/46-center-element-using-css.png
tags:
    - CSS
---

import LinkPost from '../../../src/components/linkPost'

<p><span class='first-letter'>C</span>entering an element horizontally and vertically is a very common interview question. Suppose there is a parent element surrounding the child element:</p>

```html
<div class="parent">
    <div class="child">hello world</div>
</div>
```

### Different ways to align an element to the center of the page:

1. Using Flex
2. Using Grid
3. Using position absolute
4. Using Table 
5. Using writing-mode 
6. Using Table tag
7. Using margin auto

### 1️⃣ Using Flex ⭐️

Flexbox control how items are placed and how empty space is distributed in ways that would have required either magic numbers in CSS for a specific number of elements.

Depending on the flex-direction, we might use justify-content or align-items to adjust as needed.

```css
.parent {
	height: 100%;
	display: flex;
	align-items: center;
	justify-content: center;
}
```

### 2️⃣ Using Grid ⭐️

CSS Grid includes pretty much the same alignment options as flexbox, so we can use it on the parent:

```css
.parent {
	height: 100vh;
	display: grid;
	place-items: center;
}
```

**OR**

```css
.parent {
	height: 100vh;
	display: grid;
    align-items: center;
    justify-content: center;
}
```

### 3️⃣ Using position absolute

A simple old trick using position absolute.

```css
.parent {
	position: absolute;
	top: 50%;
	left: 50%;
	transform: translate(-50%, -50%);
}
```

### 4️⃣ Using Table ⎍

A really simple approach and one of the first (back in the day, everything was tables), is using the behavior of table cells and vertical-align to center an element on the container.

```css
.parent {
	width: 100vw;
	height: 100vh;
	display: table;
}

.child {
	display: table-cell;
	vertical-align: middle;
	text-align: center;
}
```

### 5️⃣ Using writing-mode ✍

writing-mode can change the display direction of the text. For example, you can use writing-mode to change the display direction of the text to the vertical direction.

```css
.parent {
	writing-mode: vertical-lr;
	text-align: center;
	height: 100vh;
}

.child {
	writing-mode: horizontal-tb;
	display: inline-block;
	width: 100%;
}
```

### 6️⃣ Using Table tag 🏷

You can also use `table` tag. 

```html
<table>
    <tbody>
        <tr>
            <td class="father">
                <div class="child">hello world</div>
            </td>
        </tr>
   </tbody>
</table>
```

```css
table {
	height: 100vh;
	width: 100%;
}

.father {
	text-align: center;
}
```

### 7️⃣ Using margin auto

Applying margin-auto on a parent flex.

```css
.parent {
	display: flex;
	height: 100vh;
}

.child {
	margin: auto;
}
```

Best way I used are display flex(1) and display grid(2). 

Thanks for reading the article.

I hope you learnt something from this article. Also, let me know if there is any other way to bring the element at the center of the page 😅. 

Please feel free to ping me on <LinkPost href='https://twitter.com/suprabhasupi' name='@suprabhasupi' /> 😋

