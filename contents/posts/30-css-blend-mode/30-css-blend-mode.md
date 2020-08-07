---
title: CSS Blend Mode
slug: /30-css-blend-mode
date: 2020-07-09
desc: The <blend-mode> CSS, data type describes how colors should appear when elements overlap
# Old URL
# Minute Read
cover:
  img: ../../../photos/30-css-blend-mode.png
banner: ../../banners/30-css-blend-mode.png
tags:
  - CSS
---

import ImgPost from '../../../src/components/imgPost'
import LinkPost from '../../../src/components/linkPost'
import Normal from './1_normal.png'
import Multiply from './2_multiply.png'
import Screen from './3_screen.png'
import Overlay from './4_overlay.png'
import Darken from './5_darken.png'
import Lighten from './6_lighten.png'
import ColorDodge from './7_color-dodge.png'
import ColorBurn from './8_color-burn.png'
import HardLight from './9_hard-light.png'
import SoftLight from './10_soft-light.png'
import Difference from './11_difference.png'
import Exclusion from './12_exclusion.png'
import Hue from './13_hue.png'
import Luminosity from './14_luminosity.png'
import Isolate from './isolate.png'
import OutputGif from './output_gif.gif'
import FriendsGif from './friends.gif'
import MixBlendModeGif from './mix-blend-mode.gif'

<p><span class='first-letter'>T</span>he **`<blend-mode>`** CSS, <LinkPost href='https://developer.mozilla.org/en-US/docs/Web/CSS/CSS_Types' name='data type' /> describes how colors should appear when elements overlap. It is used in the <LinkPost href='https://developer.mozilla.org/en-US/docs/Web/CSS/background-blend-mode' name='background-blend-mode' /> and <LinkPost href='https://developer.mozilla.org/en-US/docs/Web/CSS/mix-blend-mode' name ='mix-blend-mode' /> properties.</p>

For each pixel among the layers to which it is applied, a blend mode takes the colors of the foreground and the background, perfoms a calculation on them, and returns a new color value. 💥

### A. mix-blend-mode 🎨

The **mix-blend-mode** property defines how an element’s content should blend with its background. This means that any images or text, borders or headings will be influenced by this property

<u>Synatx:</u>

```css
mix-blend-mode: VALUE;
```

## <mark>Values:</mark>

**1. normal**

This is default. Sets the blending mode to normal

```css
mix-blend-mode: normal;
```

<ImgPost src={Normal} alt='normal css blend mode' width={50} />

**2. multiply**

The element is multiplied by the background and replaces the background color. The resulting color is always as dark as the background.

```css
mix-blend-mode: multiply;
```

<ImgPost src={Multiply} alt='multiply css blend mode' width={50} />

**3. screen**

Multiplies the background and the content then complements the result. This will result in content which is brighter than the background-color.

```css
mix-blend-mode: screen;
```

<ImgPost src={Screen} alt='screen css blend mode' width={50} />

**4. overlay**

Multiplies or screens the content depending on the background color. This is the inverse of the hard-light blend mode

```css
mix-blend-mode: overlay;
```

<ImgPost src={Overlay} alt='overlay css blend mode' width={50} />

**5. darken**

The background is replaced with the content where the content is darker, otherwise, it is left as it was.

```css
mix-blend-mode: darken;
```

<ImgPost src={Darken} alt='darken css blend mode' width={50} />

**6. lighten**

The background is replaced with the content where the content is lighter.

```css
mix-blend-mode: lighten;
```

<ImgPost src={Lighten} alt='lighten css blend mode' width={50} />

Also, tried the lighten effect on text which looks cool 🤩

<u>index.html:</u>

```html
<div> 
	<h1>&#1025;</h1> 
	<img src="https://pablogs.io/images/posts/spritekit/backgroundscroll/background.gif" /> 
</div>
```

<u>index.css:</u>

```css
div { 
	position: relative; 
	width: 200px; 
	height: 200px; 
	background-color: white;
}
h1 { 
	font-size: 8vw;
}
img { 
	position: absolute; 
	top: 0; 
	left: 0; 
	width: 100%; 
	height: inherit;
}
img { 
	mix-blend-mode: lighten;
}
```

<u>Output:</u>

<ImgPost src={OutputGif} alt='Output Gif css blend mode' width={50} margin="4rem 0 2rem" />

Check out the ***more designs*** here in <LinkPost href='https://codepen.io/suprabhasupi/pen/yLepWoO' name='@codepen' /> 🔥

<ImgPost src={MixBlendModeGif} alt='mix blend mode' width={70} margin="2rem 0" />

**7. color-dodge**

This attribute brightens the background color to reflect the color of the content.

```css
mix-blend-mode: color-dodge;
```

<ImgPost src={ColorDodge} alt='color dodge css blend mode' width={50} />

**8. color-burn**

This darkens the background to reflect the content’s natural color.

```css
mix-blend-mode: color-burn;
```

<ImgPost src={ColorBurn} alt='color burn css blend mode' width={50} />

**9. hard-light**

Depending on the color of the content this attribute will screen or multiply it.

```css
mix-blend-mode: hard-light;
```

<ImgPost src={HardLight} alt='hard light css blend mode' width={50} />

**10. soft-light**

Depending on the color of the content this will darken or lighten it.

```css
mix-blend-mode: soft-light;
```

<ImgPost src={SoftLight} alt='soft light css blend mode' width={50} />

**11. difference**

This subtracts the darker of the two colors from the lightest color.

```css
mix-blend-mode: difference;
```

<ImgPost src={Difference} alt='difference css blend mode' width={50} />

**12. exclusion**

Similar to difference but with lower contrast.

```css
mix-blend-mode: exclusion;
```

<ImgPost src={Exclusion} alt='exclusion css blend mode' width={50} />

**13. hue**

Creates a color with the hue of the content combined with the saturation and luminosity of the background.

```css
mix-blend-mode: hue;
```

<ImgPost src={Hue} alt='hue css blend mode' width={50} />

**14. luminosity**

Creates a color with the luminosity of the content and the hue and saturation of the background. This is the inverse of the color attribute.

```css
mix-blend-mode: luminosity;
```

<ImgPost src={Luminosity} alt='luminosity css blend mode' width={50} />

**15. Initial**

The default setting of the property that does not set a blend mode.

```css
mix-blend-mode: initial;
```

**16. Inherit**

An element will inherit the blend mode from its parent element.

```css
mix-blend-mode: inherit;
```

**17. Unset**

Removes the current blend mode from an element.

```css
mix-blend-mode: unset;
```

You can find the code in <LinkPost href='https://codepen.io/suprabhasupi/pen/yLevapw' name='@codepen' />

## B. background-blend-mode 🎨

The `background-blend-mode` property defines how an element’s `background-image` should blend with its `background-color`.

<u>Syntax:</u>

```css
background-blend-mode: VALUE;
```

<p>`VALUE` are same as mix-blend-mode.</p>

<u>Example:</u>

<ImgPost src={FriendsGif} name='friends gif for css blend mode' />

```html
<div></div>
```

```css
div {
  width: 40rem;
  height: 20rem;
  background-image: url(https://hips.hearstapps.com/digitalspyuk.cdnds.net/17/09/1488375386-1488370326-friends-cast.jpg);
  background-size: cover;
  background-blend-mode: multiply;
  animation: color 5s ease-in-out infinite;
}

@keyframes color {
  12% {
    background-color: #ea529f;
  }

  24% {
    background-color: #28d128;
  }

  36% {
    background-color: violet;
  }

  48% {
    background-color: orange;
  }

  60% {
    background-color: #ad5bea;
  }

  72% {
    background-color: yellow;
  }

  84% {
    background-color: #6262ea;
  }

  90% {
    background-color: #e63d3d;
  }

  100% {
    background-color: transparent;
  }
}
```

#### What's the difference between `background-blend-mode` and `background-blend-mode` ❓🤔

`background-blend-mode` blends with its `background-image` and its `background-color`.

`mix-blend-mode` blends with its *backdrop*, the part what is behind itself, *and* its `background-color`.

## Isolation 👻

The `isolation` property in CSS is used to prevent elements from blending with their backdrops.

It is most commonly used when mix-blend-mode has been declared on another element. Applying `isolation` to the element guards that element so that it does not inherit the `mix-blend-mode` applied to the other elements that might be behind it.

**It’s like a way to turn off mix-blend-mode, but from a parent element rather than needing to select the element with blending directly.**

<u>Syntax:</u>

```css
isolation: VALUES;
```

### **Values**:

- `isolate`: Does exactly what it says. It protects the element from blending into other elements that are in the backdrop.


- `auto`: Resets the isolation and allows the element to blend into its backdrop.

<ImgPost src={Isolate} alt='isolate css blend mode' width={70} />

<p><mark>NOTE</mark>: Isolation does not work with background-blend-mode as background elements are already isolated by their nature in that they do not blend with the content that is behind them.</p>

## Reference 🧐

1. <LinkPost href='https://developer.mozilla.org/en-US/docs/Web/CSS/mix-blend-mode' name='Mix Blend Mode MDN' />
2. <LinkPost href='https://alistapart.com/article/blending-modes-demystified/' name='Blend Mode' /> 

Thanks for reading the article ❤️

I hope you love the article. If you have any question, please feel free to ping me on <LinkPost href='https://twitter.com/suprabhasupi' name='@suprabhasupi' /> 😋