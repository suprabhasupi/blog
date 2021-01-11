---
title: Numeric Separators in JavaScript
slug: /50-numeric-separators-in-javascript
date: 2021-01-11
desc: Numeric Separators give us the ability to separate thousands with an underscore (_) in numeric literals.
priority: 1
cover:
    img: ../../../photos/50-numeric-separators-in-javascript.png
banner: ../../banners/50-numeric-separators-in-javascript.png
tags:
    - JS
---

import LinkPost from '../../../src/components/linkPost'
import ImgPost from '../../../src/components/imgPost'
import BrowserSupport from './1.png'

<p><span class='first-letter'>N</span>umeric Separators give us the ability to separate thousands with an underscore (_) in numeric literals.</p>

### How it’s useful❓

It makes our code more informative and readable.

```js
let series = 10000;
```

Numeric Separators in javascript, enables underscore as a separator in numeric literals to improve readability.

**Example:**

```js
let series = 1_00_00;
```

You can also use this for binary, octal, and hex numbers.

<mark> Binary Number</mark> 👻

```js
let series1 = 0b1010_0101_1001;
console.log(series1); // 
```

<mark>Octal Number:</mark> 👻

```js
const series2 = 0o2_3_5_7;
console.log(series2); // 
```

<mark>Hex Number:</mark> 👻

```js
const series3 = 0xA_B_C_D_E;
console.log(series3); // 
```

### Few Limitation 🤦‍♀️

<p>Below limitation snippet will throw <i>SyntaxError</i></p>

1. More than one underscore in a row is not allowed

    ```js
    let series1 = 100__000;
    ```

2. Can not be used after leading 0

    ```js
    let series2 = 0_1;
    ```

3. Not allowed at the end of numeric literals

    ```js
    let series3= 100_;
    ```

### Browser Support 🎗

This feature has pretty good support in recent versions of browsers. 

Check this out 👇

<ImgPost src={BrowserSupport} alt='browser support for numeric separators' />


### Reference 🧐

- <LinkPost href='https://v8.dev/features/numeric-separators' name='Numeric Separators V8' />
- <LinkPost href='https://caniuse.com/#feat=mdn-javascript_grammar_numeric_separators' name='Browser Support' />
