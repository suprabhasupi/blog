---
title: Remove duplicate value from array
slug: /57-remove-duplicate-from-array
date: 2021-05-15
desc: Multiple ways to filter out duplicates from an array and return only the unique values.
cover:
  img: ../../../photos/57-remove-duplicate-from-array.png
banner: ../../banners/57-remove-duplicate-from-array.png
tags:
    - JS
---

import LinkPost from '../../../src/components/linkPost'
import ImgPost from '../../../src/components/imgPost'

<p><span class='first-letter'>T</span>here are multiple ways to filter out duplicates from an array and return only the unique values.</p>

### 1️⃣ Using Set 🔥

#### What is Set?

Set is a new data object introduced in ES6. A Set is a collection of unique values.

Here,
- The array is converted to `Set` and all the duplicate elements are automatically removed.
- The spread syntax `...` is used to include all the elements of the `Set` to a new array.

```js
const arr = ["🌼", "🌴", "🌹", "🌵", "🍄", "🌹", "🌴"];

const filteredArr = [...new Set(arr)];
console.log(filteredArr); //["🌼", "🌴", "🌹", "🌵", "🍄"]
```

**Convert Set to an Array using `Array.from`**

You can also use `Array.from` to convert a `Set` into an array:

```js
const arr = ["🌼", "🌴", "🌹", "🌵", "🍄", "🌹", "🌴"];

const filteredArr = Array.from(new Set(arr));
console.log(filteredArr); //["🌼", "🌴", "🌹", "🌵", "🍄"]
```

### 2️⃣ Using filter 🕸

If the element passes and returns true, it will be included in the filtered array and any element that fails or return false, it will be NOT be in the filtered array.

```js
const arr = ["🌼", "🌴", "🌹", "🌵", "🍄", "🌹", "🌴"];

const filteredArr = arr.filter((item, index) => {
    return arr.indexOf(item) === index;
})
console.log(filteredArr); //["🌼", "🌴", "🌹", "🌵", "🍄"]
```


### 3️⃣  Using forEach Method 🚀
Using `forEach`, you can iterate over the elements in the array and push into the new array if it doesn’t exist in the array.

```js
const arr = ["🌼", "🌴", "🌹", "🌵", "🍄", "🌹", "🌴"];

const filteredArr = (arr) => {
    let uniqueVal = [];
    arr.forEach(el => {
        if(!uniqueVal.includes(el)) {
            uniqueVal.push(el);
        }
    })
    return uniqueVal;
}
console.log(filteredArr(arr)); //["🌼", "🌴", "🌹", "🌵", "🍄"]
```

### 4️⃣ Using Reduce Method 😎

The `reduce` method is used to reduce the elements of the array and combine them into a final array based on some reducer function that you pass.

```js
const arr = ["🌼", "🌴", "🌹", "🌵", "🍄", "🌹", "🌴"];

const filteredArr = arr.reduce((acc, curr) => {
    return acc.includes(curr) ? acc : [...acc, curr];
}, [])
console.log(filteredArr(arr)); //["🌼", "🌴", "🌹", "🌵", "🍄"]
```

### 5️⃣ Unique Method to the Array Prototype 📔

In Javascript the array prototype constructor allows you to add new properties and methods to the Array object.

```js
const arr = ["🌼", "🌴", "🌹", "🌵", "🍄", "🌹", "🌴"];

Array.prototype.filteredArr = function (){
    let arr = [];
    for(let i = 0; i < this.length; i++) {
        let current = this[i];
        if(arr.indexOf(current) < 0 ) arr.push(current);
    }
    return arr;
}
console.log(arr.filteredArr()); //["🌼", "🌴", "🌹", "🌵", "🍄"]
```

## Reference 🧐

- <LinkPost name="MDN Docs — Set" href="https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Set" />
- <LinkPost name="MDN Docs — Filter" href="https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/filter" />
- <LinkPost name="MDN Docs — Reduce" href="https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/reduce" />

