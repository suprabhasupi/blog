---
title: replaceAll in JavaScript
slug: /49-replaceall-in-javascript
date: 2021-01-09
desc: String.prototype.replaceAll() replaces all occurrence of a string with another string value.
# Minute Read
cover:
    img: ../../../photos/49-replaceall-in-javascript.png
banner: ../../banners/49-replaceall-in-javascript.png
tags:
    - JS
---

import LinkPost from '../../../src/components/linkPost'

<p><span class='first-letter'>S</span>tring.prototype.replaceAll() replaces all occurrence of a string with another string value.</p>

<u>Syntax:</u>

```js
const newStr = str.replaceAll(regexp|substr, newSubstr|function)
```

There are few ways to replace all occurrence of a string:

1. RegEx
2. split and join
3. replaceAll
### 1. RegEx 🙅‍♀️

```js
const info = "Hi All, suprabha's account is @suprabha";
const newInfo = info.replace(/suprabha/g, "suprabha supi");
console.log(newInfo); // "Hi All, suprabhasupi's account is @suprabhasupi"
```

### 2. split and join ䷖ ⊞

Using `split` and `join`, replace all the occurrence of a string.

```js
const info = "Hi All, suprabha's account is @suprabha";
const newInfo = info.split('suprabha').join('suprabhasupi');
console.log(newInfo); // "Hi All, suprabhasupi's account is @suprabhasupi"
```

Till now, you were able to do full replacement with above two approaches. Now we have `replaceAll` which helps us to do the same.

### 3. replaceAll 🚀

<p>The <LinkPost href='https://github.com/tc39/proposal-string-replaceall/commits?author=mathiasbynens' name='Mathias bynens' /> proposal solves these problems and gives a very easy way to do substring replacement using <mark>replaceAll()</mark> which replaces all instances of a substring in a string with another string value without using a global regexp.</p>

```js
const info = "Hi All, suprabha's account is @suprabha";
const newInfo = info.replaceAll('suprabha','suprabhasupi');
console.log(newInfo); // "Hi All, suprabhasupi's account is @suprabhasupi"
```

You can also pass RegEx to first parameter in `replaceAll`.

```js
const info = "Hi All, suprabha's account is @suprabha";
const regex = /suprabha/ig;
const newInfo = info.replaceAll(regex,'suprabhasupi');
console.log(newInfo); // "Hi All, suprabhasupi's account is @suprabhasupi"
```

**Note: 🧨**
<p>When using a regexp you have to set the global ("g") flag; otherwise, it will throw a <i>TypeError: "replaceAll must be called with a global RegExp"</i>.</p>


You also have `replace()` method, which replaces only the first occurrence if the input pattern is a string.

```js
const info = "Hi All, suprabha's account is @suprabha";
const newInfo = info.replace("suprabha", "suprabhasupi");
console.log(newInfo); // "Hi All, suprabhasupi's account is @suprabha"
```

## Reference 🧐

<LinkPost href='https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/String/replaceAll' name='replaceAll MDN' />
