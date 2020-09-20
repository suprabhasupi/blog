---
title: CSS Selectors (part-1)
slug: /47-css-selectors
date: 2020-08-31
desc: Selectors are used to selecting elements in an HTML document, in order to attach (style) properties to them.

# Minute Read
cover:
    img: ../../../photos/47-css-selectors.png
banner: ../../banners/47-css-selectors.png
tags:
    - CSS
---

import LinkPost from '../../../src/components/linkPost'
import ImgPost from '../../../src/components/imgPost'
import CSSCombinator from './1-css-combinator.png'
import Descendant from './2-descendant.png'
import Universal from './3-universal.png'
import AdjacentSibling from './4-adjacent-sibling.png'
import GeneralSibling from './5-general-sibling.png'
import Child from './6-child.png'
import Value from './7-value.png'
import Start from './8-start.png'
import Ends from './9-ends.png'
import Wildcard from './10-wildcard.png'
import CSSAttributes from './11-css-attributes.png'

<p><span class='first-letter'>S</span>electors are used to selecting elements in an HTML document, in order to attach (style) properties to them.</p>

The most used CSS selectors are by `class` and by `id`, nevertheless, there are many selectors which you can use easily and fairly to add styles into a set of elements.

A. **Combinators**

B. **Attribute Selector**

C. **Pseudo Selector**

D. **Pseudo Classes**

In this article, I will be talking about different selectors beyond class and id and will be covering **Combinators** and **Attribute Selector**. 

We will be using below HTML snippet for all the the Attribute Selector:

```html
<div>
    <p>First Paragraph</p>
    <p>Second Paragraph</p>
    <span>Third Span</span>
    <p>Fourth Paragraph</p>
    <ul>
        <li>First Item</li>
        <li>Second Item</li>
    </ul>
</div>

<p>Fifth Paragraph</p>
<p>Sixth Paragraph</p>
```

## A.  Combinators 

<ImgPost src={CSSCombinator} alt='CSS Combinators' width={100} />

1. Descendant Selector
2. Universal Selector
3. Adjacent Sibling Selector
4. General Sibling Selector
5. Child Selector

### 1️⃣ Descendant Selector

It selects an element inside another element. This selects all the p elements inside of div.

```css
div p {
	background-color: #fdc7d5;
}
```
<u>Output:</u>

<ImgPost src={Descendant} alt='CSS Descendant Selector' width={20} margin='1rem 2rem' />

### 2️⃣ Universal Selector

You can select all the elements with the universal selector.

```css
div * {
  background-color: #fdc7d5;
}
```

div * selects any element inside all div elements.

<u>Output:</u>

<ImgPost src={Universal} alt='CSS Universal Selector' width={20} margin='1rem 2rem' />

### 3️⃣ Adjacent Sibling Selector

It selects an element that directly follows another element.

```css
div + p {
  background-color: #fdc7d5;
}
```

This selects the p elements that directly follow div tag. Elements that follow another one are called siblings.

<u>Output:</u>

<ImgPost src={AdjacentSibling} alt='CSS Adjacent Selector' width={20} margin='1rem 2rem' />

### 4️⃣ General Sibling Selector

You can select all siblings of an element that follow it. This is like the Adjacent Selector (div + p), but this one gets all of the following elements instead of one.

```css
div ~ p {
  background-color: #fdc7d5;
}
```

<u>Output:</u>

<ImgPost src={GeneralSibling} alt='CSS General Selector' width={20} margin='1rem 2rem' />

### 5️⃣ Child Selector

It selects direct children of an element. You can select elements that are direct children of other elements.

```css
div > p {
  background-color: #fdc7d5;
}
```

`div > p` selects all `p` that are direct children `div`.

<u>Output:</u>

<ImgPost src={Child} alt='CSS Child Selector' width={20} margin='1rem 2rem' />

## B.  Attribute Selector

<ImgPost src={CSSAttributes} alt='CSS Child Attributes Selector' width={100} />

It combines the attribute selector with another selector by adding it to the end.

```html
<input type="text" placeholder="Enter Input" />
<input type="text" placeholder="Disabled Input" disabled />
```

`input[disabled]` selects all input elements with the disabled attribute.

```css
input[disabled] {
	background: #82ffdc;
}
```

<u>Output:</u>
<ImgPost src={Value} alt='CSS Value Attribute Selector' width={30} margin='1rem 0' />

### Types of Attribute Selectors:

1. Attribute Value Selector
2. Attribute Starts With Selector
3. Attribute Ends With Selector
4. Attribute Wildcard Selector


**We will be using below HTML template for Attribute selectors:**

```html
<p class="line-first-para">First Paragraph</p>
<p class="second-para">Second Paragraph</p>
<p class="line-last">Third Paragraph</p>
```

### 1️⃣ Attribute Value Selector

`input[type="checkbox"]` selects all checkbox input elements.

```css
input[type="checkbox"] {
  font-size: 18px;
  margin-top: 3rem;
}
```

### 2️⃣ Attribute Starts With Selector
`[class^="line"]` selects elements with class="line" and either `class="line"` or `class="line-first-para"`.

```css
[class^="line"] {
    background: yellow;
}
```

<u>Output:</u>
<ImgPost src={Start} alt='CSS Start Attribute Selector' width={20} margin='1rem 0' />


### 3️⃣ Attribute Ends With Selector

`[class$="para"]` selects all paragraph which end with `para`.

```css
[class$="para"] {
    background: skyblue;
}
```

<u>Output:</u>
<ImgPost src={Ends} alt='CSS Ends Attribute Selector' width={20} margin='1rem 0' />

### 4️⃣ Attribute Wildcard Selector

`[class*="-"]` selects all elements with "-" in their class, such as class="second-para" or class="third-para".

```css
[class*="-"] {
    background: orangered;
    color: white;
}
```

<u>Output:</u>
<ImgPost src={Wildcard} alt='CSS Wildcard Attribute Selector' width={20} margin='1rem 0' />


## Reference 🧐

- <LinkPost href='https://developer.mozilla.org/en-US/docs/Learn/CSS/Building_blocks/Selectors/Combinators' name='Combinators MDN' />
- <LinkPost href='https://developer.mozilla.org/en-US/docs/Web/CSS/Attribute_selectors' name='Attribute Selectors MDN' />

