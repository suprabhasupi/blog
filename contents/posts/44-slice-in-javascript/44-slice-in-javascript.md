---
title: Slice in JavaScript
slug: /44-slice-in-javascript
date: 2020-08-22
desc: The slice method returns a new array with a copied slice from the original array.
# Old URL
# Minute Read
cover:
    img: ../../../photos/44-slice-in-javascript.png
banner: ../../banners/44-slice-in-javascript.png
tags:
    - JS
---

import LinkPost from '../../../src/components/linkPost'

The slice method returns a new array with a copied slice from the original array.

<u>Syntax:</u>

```js
arr.slice([start[, end]])
```

`start` refers <mark>Zero-based</mark> index. If `start` is undefined, `slice` starts from the index 0.

In `end`, slice extracts up to but not including end.

Its too theoretically right 😜, lets understand by few examples.


#### Using two arguments ✅:

```js
const arr = ['🍏', '🍓', '🌽', '🍇', '🍒'];
const newArr = arr.slice(2,4);
console.log(newArr); // ["🌽", "🍇"]
```

#### Without arguments, you get a copy of the full array ✅

```js
const arr = ['🍏', '🍓', '🌽', '🍇', '🍒'];
const newArr = arr.slice();
console.log(newArr); // ["🍏", "🍓", "🌽", "🍇", "🍒"]
```

#### Using one argument, you get a copy from the specified index to the end of the array ✅

```js
const arr = ['🍏', '🍓', '🌽', '🍇', '🍒'];
const newArr = arr.slice(3);
console.log(newArr); // ["🍇", "🍒"]
```

#### Index can also be negative, in which case the starting index is calculated from the end ✅

```js
const arr = ['🍏', '🍓', '🌽', '🍇', '🍒'];
const newArr = arr.slice(2,-2);
console.log(newArr); // ["🌽"]
```

#### If `start` is greater than the index range of the sequence, an empty array is returned ✅

```js
const arr = ['🍏', '🍓', '🌽', '🍇', '🍒'];
const newArr = arr.slice(6);
console.log(newArr); // []
```

#### If `end` is greater than the length of the sequence, slice extracts through to the end of the sequence ✅

```js
const arr = ['🍏', '🍓', '🌽', '🍇', '🍒'];
const newArr = arr.slice(1,9);
console.log(newArr); // ["🍓", "🌽", "🍇", "🍒"]
```

#### slice() method can also be used for <mark>strings</mark> ✅

```js
const arr = 'suprabha';
const newArr = arr.slice(0,3);
console.log(newArr); // "sup"
```

**Note: 🧨**

<mark>Slice</mark> is immutable and <mark>Splice</mark> mutates the array.

## Reference 🧐
<LinkPost href='https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/slice' name='Slice MDN' />


