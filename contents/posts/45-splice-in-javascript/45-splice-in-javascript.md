---
title: Splice in JavaScript
slug: /45-splice-in-javascript
date: 2020-08-23
desc: The splice method changes the content of the array in place and can be used to add or remove items from the array.
priority: 1
# Minute Read
cover:
    img: ../../../photos/45-splice-in-javascript.png
banner: ../../banners/45-splice-in-javascript.png
tags:
    - JS
---

import LinkPost from '../../../src/components/linkPost'

The splice method changes the content of the array in place and can be used to add or remove items from the array.

```js
const arr = ["🌼", "🌴", "🌹", "🌵", "🍄"];
arr.splice(2,3); // ["🌹", "🌵", "🍄"]
console.log(myArr); // ["🌼", "🌴"]
```

<u>Syntax:</u>

```js
let arrDeletedItems = array.splice(start[, deleteCount[, item1[, item2[, ...]]]])
```

`start` specifies index at which to start changing the array.

If `start` is greater than the length of the array, then `start` will be set to the length of the array. i.e no element will be deleted.

If `start` is negative, it will begin that many elements from the end of the array.

In `deleteCount`, The number of items you want to remove.

In `item`,  The number you want to add(*If you're removing, you can just leave this blank).*

<mark>NOTE</mark>: Splice always return an array containing the deleted elements.

🌚 When only one argument is provided, all the items after the provided starting index are removed from the array:

```js
const arr = ["🌼", "🌴", "🌹", "🌵", "🍄"];
arr.splice(2); // ["🌹", "🌵", "🍄"]
console.log(myArr); // ["🌼", "🌴"]
```

🌚 Remove 1 element at index 3:

```js
const arr = ["🌼", "🌴", "🌹", "🌵", "🍄"];
arr.splice(3, 1); // ["🌵"]
console.log(myArr); // ["🌼", "🌴", "🌹", "🍄"]
```

🌚 An arbitrary amount of additional arguments can be passed-in and will be added to the array:

```js
const arr = ["🌼", "🌴", "🌹", "🌵", "🍄"];
arr.splice(2, 1, "⭐️", "💥"); // ["🌹"]
console.log(myArr); // ["🌼", "🌴", "⭐️", "💥", "🌵", "🍄"]
```

🌚 Remove 1 element from index -2:

```js
const arr = ["🌼", "🌴", "🌹", "🌵", "🍄"];
arr.splice(-2, 1); // ["🌵"]
console.log(myArr); // ["🌼", "🌴", "🌹", "🍄"]
```

🌚 You can specify 0 as the number of items to remove to simply add new items at the specified location in the array:

```js
const arr = ["🌼", "🌴", "🌹", "🌵", "🍄"];
arr.splice(2, 0, "⭐️", "💥"); // []
console.log(myArr); // ["🌼", "🌴", "⭐️", "💥", "🌹", "🌵", "🍄"]
```

🌚 Add few items at the end of array:

```js
const arr = ["🌼", "🌴", "🌹", "🌵", "🍄"];
arr.splice(arr.length, 0, "🌕", "🌞", "🌦"); // []
console.log(myArr); // ["🌼", "🌴", "🌹", "🌵", "🍄", "🌕", "🌞", "🌦"]
```

## Reference 🧐

<LinkPost href='https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/splice' name='Splice MDN' />
