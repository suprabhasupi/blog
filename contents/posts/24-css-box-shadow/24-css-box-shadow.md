---
title: CSS Box Shadow
slug: /24-css-box-shadow
date: 2020-06-04
desc: The CSS box-shadow property can be used to give block elements a drop shadow or an inner shadow.
# Old URL
# Minute Read
cover:
  img: ../../../photos/24-css-box-shadow.png
banner: ../../banners/24-css-box-shadow.png
tags:
  - CSS
---

import ImgPost from '../../../src/components/imgPost'
import LinkPost from '../../../src/components/linkPost'
import One from './one.png'
import Two from './two.png'
import Three from './three.png'
import Four from './four.png'
import Five from './five.png'
import Six from './six.png'
import Seven from './seven.png'
import Eight from './eight.png'
import CircleOutput from './circle.png'

<p><span class='first-letter'>T</span>he CSS box-shadow property can be used to give block elements a drop shadow or an inner shadow. Let’s take a close look at this CSS property.</p>

<u>Examples:</u>

There will be few examples where we discuss on box shadow property.

1. **Adding box shadow to a div 📦**

   ```html
   <div class='one'>One</div>
   ```

   ```css
   .one {
       /* offset-x | offset-y */
       box-shadow: 5px 5px;
   }**
   ```

    <ImgPost src={One} alt='box-shadow' width={30} />

    In the above snippet, You have not given any drop shadow color, then by default the color will be black.

2. **Adding colour to drop-shadow 🎨**

   ```html
   <div class='two'>Two</div>
    ```

   ```css
   .two {
       /* offset-x | offset-y | color */
       box-shadow: 5px 5px red;
   }
   ```

    <ImgPost src={Two} alt='box-shadow' width={30} />

3. **Adding blur-radius to the drop-shadow 💧**

   ```html
   <div class='three'>Three</div>
    ```

   ```css
   .three {
        /* offset-x | offset-y | blur-radius | color */
        box-shadow: 5px 5px 20px red;
   }
   ```

   <ImgPost src={Three} alt='box-shadow' width={30} />

4. **Adding spread-radius to the drop shadow ☄️**

   ```html
   <div class='four'>Four</div>
   ```

   ```css
   .four {
       /* offset-x | offset-y | blur-radius | spread-raidus | color */
       box-shadow: 0 0 10px 5px #ff000066;
   }
   ```

   <ImgPost src={Four} alt='box-shadow' width={30} />

5. **Adding inset to the div for drop shadow 💧**

   ```html
   <div class='five'>Five</div>
   ```

   ```css
   .five {
       /* inset || offset-x | offset-y | blur-radius | spread-raidus | color */
       box-shadow: inset 0px 0px 13px 4px pink;
   }
   ```

   <ImgPost src={Five} alt='box-shadow' width={30} />

   If you don't explicitly state a color value for your box shadow — the shadow’s color will be equal to the color value of the HTML element the box-shadow property is being applied to. For instance, if you have a div that has the color of red, the box shadow’s color will also be red:

   ```html
   <div class='six'>Six</div>
   ```

   ```css
   .six {
       color: red;
       box-shadow: 0px 0px 3px 2px;
   }
   ```
   <ImgPost src={Six} alt='box-shadow' width={30} />

   If you want a different shadow color, then you’ll need to specify it in the box-shadow property value declaration. Below you can see that even though the foreground color of the div is still red, the box shadow color is blue.

   ```html
   <div class='seven'>Seven</div>
   ```

   ```css
   .seven {
       color: red;
       box-shadow: 0px 0px 3px 2px blue;
   }
   ```

    <ImgPost src={Seven} alt='box-shadow' width={30} />

### Multiple Box Shadows ☸️

This is where you can get really creative with this CSS property: 

You can apply more than one box shadow on an element.

<u>Syntax:</u>

```css
box-shadow: [box shadow properties 1], [box shadow properties 2], [box shadow properties n];
```

In other words, you can have multiple box shadows by separating each property value group with commas (,).

In the below example, there are two box shadows.

```html
<div class='eight'>Eight</div>
```

```css
.eight {
    box-shadow: 5px -7px 2px 2px blue, -5px 5px 5px 5px pink;
}
```
<ImgPost src={Eight} alt='box-shadow' width={30} />


**Let's try to solve below problem 😜**

**❓❓Create a co-centric circles using single div❓❓**

<u>Output:</u>

<ImgPost src={CircleOutput} alt='circle-box-shadow' width={40} />

You can find the solution <LinkPost href='https://codepen.io/suprabhasupi/pen/WNreGya' name='here' />

Also you can see all above examples <LinkPost href='https://codepen.io/suprabhasupi/pen/KKVPMgW' name='here' />, with few more examples where drop shadow is quite impressive 😜

Thanks for reading this article ♥️. 

Feel free to ping me if you have any questions on <LinkPost href='https://twitter.com/suprabhasupi' name='@suprabhasupi' /> 😋