---
title: Stop using Array.map() everywhere 🥵
slug: /73-stop-using-array-map-everywhere
date: 2021-12-31
desc: Stop using map method if you just need to iterate through an array.
cover:
  img: ../../../photos/73-stop-using-array-map-everywhere.png
banner: ../../banners/73-stop-using-array-map-everywhere.png
tags:
  - JS
---

<span class='first-letter'>M</span>ost of the time I used to see the snippet like this 👇

```js
const fruits = ["apple", "orange", "cherry"];
let text = "";
document.getElementById("main").innerHTML = text;
fruits.map(i => text += i );
```

In the above snippet, we are adding `fruits` text to the DOM in `main` ID.
It seems there is no issue in the above snippet, Though there is one major issue, which we will be going to see today.

Let's understand the issue by definition of `map`, `map()` method creates a new array populated with the results of calling a provided function on every element in the calling array.

<u>example:</u>

```js
let n = [1, 2, 3, 4];
let add = n.map(i => i + 2);
console.log(add); // [3, 4, 5, 6]
```

**NOTE:** Using `map()` method means returning a new collection of an array.

As discussed, `map()` method always returns a new array, so if you don’t have any use of a new array then never use `map()` method.
When you just need to iterate through an array, I will always recommend using other array methods like `forEach` or `for..of`.

<u>example:</u>

```js
const fruits = ["apple", "orange", "cherry"];
let text = "";
fruits.forEach(myFunction);

document.getElementById("main").innerHTML = text;
 
function myFunction(item, index) {
  text += index + ": " + item + "<br>"; 
}
```


### Why should we care about it? 🙄

As we know, `map()` method always returns an array. If you just need to update DOM then storing those elements into memory form doesn't add any point.
Of course, for a small chunk of numbers nothing is going to happen, however, if we take a larger number here then it affects the performance side as it will store the value in memory which will be redundant.

### Summary  ⅀

Stop using `map()` method, if you just need to iterate through an array. 
Start using `forEach` or `for...of` method, if you want to iterate through an array.