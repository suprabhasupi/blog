---
title: CSS Filter
slug: /27-css-filter
date: 2020-06-20
desc: The CSS filter property is used to set the visual effect of an element.
# Old URL
# Minute Read
cover:
  img: ../../../photos/27-css-filter.png
banner: ../../banners/27-css-filter.png
tags:
  - CSS
---

import ImgPost from '../../../src/components/imgPost'
import LinkPost from '../../../src/components/linkPost'
import Blur from './1-blur.png'
import Brightness from './2-brightness.png'
import Contrast from './3-contrast.png'
import DropShadow from './4-drop-shadow.png'
import Grayscale from './5-grayscale.png'
import HueRotate from './6-hue-rotate.png'
import Invert from './7-invert.png'
import Opacity from './8-opacity.png'
import Saturate from './9-saturate.png'
import Sepia from './10-sepia.png'
import MultipleProperty from './11-multiple-property.png'
import ColorWheel from './color-wheel.png'

<p><span class='first-letter'>T</span>he filter property is used to set the visual effect of an element. This property is mostly used to adjust the rendering of images, backgrounds, and borders. Also you can use the filter on SVG elements.</p>

<u>Syntax:</u>

```css
filter: none|blur()|brightness()|contrast()|drop-shadow()|
grayscale()|hue-rotate()|invert()|opacity()|saturate()|sepia()|
url();
```

## How filters work? 🤔

What does a filter do exactly? The easiest way to think of a filter is as a post processing step that does something magical after all your page content has been laid out and drawn.

When a browser loads a web page it needs to apply styles, perform layout and then render the page. Filters kick in after all those steps and just before the page is copied to the screen.

What they do, is take a snapshot of the rendered page as a bitmap image, then perform some graphics magic on the pixels in the snapshot and then draw the result over the top of the original page image. (One way to think of them is like a filter placed on the front of a camera lens)

**We will be discussing following properties here:**

1. Blur
2. Brightness
3. Contrast
4. Drop-shadow
5. Grayscale
6. Hue-rotate
7. Invert
8. Opacity
9. Saturate
10. Sepia 

### 1️⃣ Blur ✔︎

The **blur()** CSS function applies a Gaussian blur to the input image

<u>Syntax:</u>

```css
filter: blur(radius)
```

Larger radius value will create more blur. A value of 0 leaves the input unchanged. The `lacuna value` for interpolation is 0.

<u>Example:</u>

```css
filter: blur(5px);
```

<ImgPost src={Blur} alt='CSS blur filter' width={35} />

### 2️⃣ Brightness ✔︎

The **brightness()** CSS function applies a linear multiplier to the input image, making it appear brighter or darker.

<u>Syntax:</u>

```css
filter: brightness(amount)
```

A value under 100% darkens the image, while a value over 100% brightens it. A value of 0% will create an image that is completely black, while a value of 100% leaves the input unchanged. The lacuna value for interpolation is 1.

<u>Example:</u>

```css
brightness(1)    /* No effect */
brightness(150%) /* brightness will be high by 50% */
brightness(0%)   /* Completely black */
```

<ImgPost src={Brightness} alt='CSS brightness filter' width={35} />

### 3️⃣ Contrast ✔︎

The **contrast()** CSS function adjusts the contrast of the input image.

<u>Syntax:</u>

```css
filter: contrast(amount)
```

Amount can be specified as number or percentage.

A value under 100% decreases the contrast, while a value over 100% increases it.

A value of 0% will create an image that is completely gray, while a value of 100% leaves the input unchanged. The lacuna value for interpolation is 1.

<u>Example:</u>

```css
filter: contrast(1); // no change
filter: contrast(115%) // contrast will be high 15%
filter: contrast(0); // completely gray
```

<ImgPost src={Contrast} alt='CSS contrast filter' width={35} />

### 4️⃣ Drop-shadow ✔︎

The **drop-shadow()** CSS function applies a drop shadow effect to the input image. Also you can apply drop-shadow to SVG. 👻

<u>Syntax:</u>

```css
filter: drop-shadow(offset-x offset-y blur-radius spread-radius color)
```

`blur-radius` and `spread-radius` are optional

<mark>Blur-radius</mark>: The larger the value, the larger and more blurred the shadow becomes. Negative values are not allowed.

<mark>spread-radius</mark>: Positive values will cause the shadow to expand and grow bigger, while negative values will cause the shadow to shrink. If unspecified, it defaults to 0, and the shadow will be the same size as the input image.

**NOTE**: Most browser does not support spread-radius, the effect will not render if used.

<u>Example:</u>

```css
filter: drop-shadow(12px 12px 5px #1c8c9e);
```

<ImgPost src={DropShadow} alt='CSS drop-shadow filter' width={35} />

### 5️⃣ Grayscale ✔︎

The **grayscale()** CSS function converts the input image to grayscale

<u>Syntax:</u>

```css
filter: grayscale(amount)
```

`amount` can be number or percentage.

A value of 100% is completely grayscale, while a value of 0% leaves the input unchanged.

The `lacuna value` for interpolation is 0.

<u>Example:</u>

```css
filter: grayscale(0)     /* No effect */
filter: grayscale(1)     /* Completely grayscale */
filter: grayscale(100%)  /* Completely grayscale */
```

<ImgPost src={Grayscale} alt='CSS grayscale filter' width={35} />

### 6️⃣ Hue-rotate ✔︎

The **hue-rotate()** CSS function rotates the hue of an element and its contents.

hue-rotate shifts the hue of all the colors in the image. But why is the value in degrees? As we pick the color from wheel chart.

Here is the color wheel:

<ImgPost src={ColorWheel} alt='CSS Color Wheel filter' width={50} />

Using hue-rotate you can push one color by x degrees on the color wheel. 360 degrees will make a complete rotation, which will mean no change at all. The value for this property also works in the negatives and -90 for example is the equivalent of 270.

<u>Syntax:</u>

```css
filter: hue-rotate(angle)
```

A value of `0deg` leaves the input unchanged.

A positive hue rotation increases the hue value, while a negative rotation decreases the hue value. The lacuna value for interpolation is 0.

<u>Example:</u>

```css
filter: hue-rotate(0deg)    /* No effect */
filter: hue-rotate(.5turn)  /* 180deg rotation */
filter: hue-rotate(405deg)  /* Same as 45deg rotation */
filter: hue-rotate(-90deg); /* Same as 270deg rotation */
```

<ImgPost src={HueRotate} alt='CSS hue rotate filter' width={35} />

### 7️⃣ Invert ✔︎

The **invert()** CSS function inverts the color samples in the input image

<u>Syntax:</u>

```css
filter: invert(amount)
```

Amount can be number or percentage. 

A value of 100% is completely inverted, while a value of 0% leaves the input unchanged. Values between 0% and 100% are linear multipliers on the effect. The lacuna value for interpolation is 0.

<u>Example:</u>

```css
filter: invert(0)     /* No effect */
filter: invert(100%)  /* Completely inverted */
```

<ImgPost src={Invert} alt='CSS invert filter' width={35} />

### 8️⃣ Opacity ✔︎

The **opacity()** CSS function applies transparency to the samples in the input image

<u>Syntax:</u>

```css
filter: opacity(amount)
```

A value of 0% is completely transparent, while a value of 100% leaves the input unchanged. Values between 0% and 100% are linear multipliers on the effect. The lacuna value for interpolation is 1.

<u>Example:</u>

```css
filter: opacity(0%)   /* Completely transparent */
filter: opacity(1)    /* No effect */
filter: opacity(30%); /* 30% transparent */
```

<ImgPost src={Opacity} alt='CSS opacity filter' width={35} />


### 9️⃣ Saturate ✔︎

The **saturate()** CSS function super-saturates or desaturates the input image

<u>Syntax:</u>

```css
filter: saturate(amount)
```

A value under 100% desaturates the image, while a value over 100% super-saturates it.

The lacuna value for interpolation is 1.

<u>Example:</u>

```css
filter: saturate(0)     /* Completely unsaturated */
filter: saturate(100%)  /* No effect */
filter: saturate(200%)  /* Double saturation */
```

<ImgPost src={Saturate} alt='CSS saturate filter' width={35} />

### 🔟 Sepia ✔︎

The **sepia()** CSS function converts the input image to sepia, giving it a warmer, more yellow/brown appearance.

<u>Syntax:</u>

```css
filter: sepia(amount)
```

A value of 100% is completely sepia, while a value of 0% leaves the input unchanged.

The lacuna value for interpolation is 0

<u>Example:</u>

```css
filter: sepia(0)     /* No effect */
filter: sepia(.95)   /* 95% sepia */
filter: sepia(100%)  /* Completely sepia */
filter: sepia(70%);
```

<ImgPost src={Sepia} alt='CSS sepia filter' width={35} />

### Multiple Property ✚

You can also apply multiple filter at a time.

When a single filter property has two or more functions it's results will be different from when two or more filter properties are separately applied with the same functions 

<u>Example:</u>

```css
filter: hue-rotate(-30deg) sepia(75%) contrast(150%) saturate(300%)
    hue-rotate(30deg);
```

<ImgPost src={MultipleProperty} alt='CSS multiple property filter' width={35} />

Please keep in mind that the `filter` property values are applied in a sequence, meaning that the input for one filter is the output of the previous filter.

## Performance Considerations 🎭

One thing that every web developer cares about is performance of their web page or application. CSS filters are a powerful tool for visual effects, but at the same time might have an impact on the performance of your site.

Firstly, not all filters are created equal. Most filters will run really quickly on any platform and have very minor performance impact.

<u>Example:</u>

When you do a `blur`, it mixes the colors from pixels all around the output pixel to generate a blurred result. So, say if your `radius` parameter is 2, then the filter needs to look at 2 pixels in every direction around each output pixel to generate the mixed color. This happens for each output pixel, so that means a lot of calculations that just get bigger when you increase the `radius`. Since `blur` looks in every direction, doubling the `radius` means you need to look at 4 times as many pixels so in fact it’s 4 times slower for each doubling of the `radius`. The `drop-shadow` filter contains a `blur` as part of its effect, so it too behaves just like ‘blur’ when you change the `radius` and `spread` parts of the `shadow` parameter.

## Reference 🧐

1. <LinkPost href='https://developer.mozilla.org/en-US/docs/Web/CSS/filter' name='MDN CSS Filter' />
2. <LinkPost href='https://www.html5rocks.com/en/tutorials/filters/understanding-css/' name='HTML5Rocks CSS Filter' />

You can find the code <LinkPost href='https://codepen.io/suprabhasupi/pen/JjGKMRR' name='here' /> 

Thanks for reading this article ♥️

I hope you find useful reading the article. If you have any question, please feel free to ping me on <LinkPost href='https://twitter.com/suprabhasupi' name='@suprabhasupi' /> 😋

