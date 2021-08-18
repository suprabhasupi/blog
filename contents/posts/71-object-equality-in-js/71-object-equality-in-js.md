---
title: Object Equality in JavaScript
slug: /71-object-equality-in-js
date: 2021-08-15
desc: It is easy to compare number or strings but did you try comparing two objects
cover:
  img: ../../../photos/71-object-equality-in-js.png
banner: ../../banners/71-object-equality-in-js.png
tags:
    - JS
---

import LinkPost from '../../../src/components/linkPost'

<p><span class='first-letter'>I</span>t's really easy to compare number or strings but did you try comparing two objects 🤔 </p>

** Even if two object has same key and value pair it will return false.**

<u>example:</u>

```js
let name = {
    firstName: "suprabha",
    lastName: "supi"
}

let fullName = {
    firstName: "suprabha",
    lastName: "supi"
}

console.log(name === name) // true
console.log(name === fullName) // false
console.log(name == fullName) // false

console.log(Object.is(name, fullName)) // false
console.log(Object.is(name, name)) // true
```

As you can see above example, both `name` and `fullName` are identical. Yet, the object are not equal either with `==` or `===`.

#### There are two things you can check while doing object equality:

**1️⃣ Objects has same instance**

**2️⃣ Objects has same value**

### 1️⃣ Objects has same instance

JavaScript has two approaches to match the values.

- For Primitive Type(string, numbers), it compare by their values.
- For Non-Primitive Type(object, array, date), it compare by their reference.

### What does it mean by **compare by their reference**?

**Comparing by reference** means object refers to the same location in memory.

<u>example:</u>

```js
let name = {
    firstName: "suprabha",
    lastName: "supi"
}

let fullName = {
    firstName: "suprabha",
    lastName: "supi"
}

let copyName = fullName

console.log(name === fullName) // false
console.log(copyName == fullName) // true
```

Here, `copyName` and `fullName` are referring to the same instance of memory and hence returning true.

### 2️⃣ Objects has same value

To check the instance you can use `===` equality, but to match the value you need to work more 😂

```js
let name = {
    firstName: "suprabha",
    lastName: "supi"
}

let fullName = {
    firstName: "suprabha",
    lastName: "supi"
}

function isEqual(obj1, obj2) {
    var props1 = Object.getOwnPropertyNames(obj1);
    var props2 = Object.getOwnPropertyNames(obj2);

    if (props1.length != props2.length) {
        return false;
    }

    for (var i = 0; i < props1.length; i++) {
        let val1 = obj1[props1[i]];
        let val2 = obj2[props1[i]];
        let isObjects = isObject(val1) && isObject(val2);
        
        if (isObjects && !isEqual(val1, val2) || !isObjects && val1 !== val2) {
            return false;
        }
    }
    return true;
}

function isObject(object) {
  return object != null && typeof object === 'object';
}

console.log(isEqual(name, fullName)); // true
```

There are few plugins which helps you in terms of the above condition where you can simply use `_.isEqual` to check the object values:

1. <LinkPost href="http://underscorejs.org/#isEqual" name="UnderScore" />
2. <LinkPost href="https://lodash.com/docs#isEqual" name="Lodash" />
3. <LinkPost href="https://nodejs.org/api/util.html#util_util_isdeepstrictequal_val1_val2" name="isDeepStrictEqual(object1, object2)" /> Node

```js
let name = {
    firstName: "suprabha",
    lastName: "supi"
}

let fullName = {
    firstName: "suprabha",
    lastName: "supi"
}

console.log(_.isEqual(name, fullName)); // true
```

### Summary ⅀

In object, if you do instance check for two objects then you can use `==`, `===` and `Object.is()` .

However if you want to check for two object value, then you have to write your own logic to do it.