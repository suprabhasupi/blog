---
title: Nullish Coalescing Operator (??)
slug: /31-nullish-coalescing-operator
date: 2020-07-13
desc: Nullish coalescing operator (??) is a logical operator that returns its right-hand side operand when its left-hand side operand is null or undefined, and otherwise returns its left-hand side operand.
# Old URL
# Minute Read
cover:
  img: ../../../photos/31-nullish-coalescing-operator.png
banner: ../../banners/31-nullish-coalescing-operator.png
tags:
  - JS
---

import ImgPost from '../../../src/components/imgPost'
import LinkPost from '../../../src/components/linkPost'
import BrowserSupport from './1-browser-support.png'

<p><span class='first-letter'>T</span>he nullish coalescing operator (??) is a logical operator that returns its right-hand side operand when its left-hand side operand is null or undefined, and otherwise returns its left-hand side operand.</p>

<u>Example:</u>

```js
const username = null ?? 'suprabha';
console.log(username);
// suprabha
```

## Contents 📝

<blockquote>
  1. `&&` or `||`
  2. Falsy Value
  3. No chaining with `&&` or `||` operators
  4. Browser Support
  5. Reference
</blockquote>

### 1️⃣ `&&` or `||` 

As you know "&&" or "||" operators are used to handle ‘truthy’ and ‘falsy’ values.

### 2️⃣ Falsy Value

Falsy value in JavaScript:

- null
- undefined
- 0
- NaN
- false
- ""

`"&&" or "||"` operators work well with null or undefined values, but many false values can produce unexpected results.

Let's take an example, here we want to process the response where value is 0(zero). So when you get the response which is falsy, so it will return the right-hand side value. ➡️

```js
const response = {
     count : 0
}
const count = response.count || 1;
console.log(count) // 1
```

To make it work, we will use nullish coalescing operator `??`.

The <mark>nullish coalescing operator</mark> `??` acts very similar to the operator `||`, except that it doesn’t use "truthy" when evaluating the operator. Instead, it uses the definition of “nullish,” which means that the value is strictly equal to null or undefined.

We will take the same example: 😎

```js
const response = {
     count : 0
}
const count = response.count ?? 1;
console.log(count) // 0
```

**Few Important Points:**

1. With operator `||` if the first operand is truthy, it evaluates to the first operand. Otherwise, it evaluates to the second. With Nullish Coalescing operator, if the first operator is falsy but not nullish, it evaluates to the second operand.

    <u>Example:</u>

    ```js
    console.log(false || true);//true
    console.log(false ?? true);//false
    ```

2. `zero` is evaluated as a falsy value; hence the expression evaluates to the right-hand value using the `|| operator`. But, with Nullish Coalescing operator, zero is not null. Therefore, the expression evaluates to the left-hand value.

    ```js
    console.log(0 || 1); //1
    console.log(0 ?? 1); //0
    ```

3. empty string `""` is evaluated as a falsy value; hence the expression evaluates to the right-hand value using the `|| operator`. But, with Nullish Coalescing operator, empty string `""` is not null. Therefore, the expression evaluates to the left-hand value.

    ```js
    console.log('' || 'supi!');//supi      
    console.log('' ?? 'supi');//''
    ```

4. If you check with the `undefined` or `null` it will be same:

    ```js
    undefined || 10 // 10
    undefined ?? 10 // 10
    null || 100 // 100
    null ?? 100 // 100
    ```

Going to cover more example for better understanding:

```js
const response = {
  settings: {
    nullValue: null,
    height: 400,
    animationDuration: 0,
    headerText: '',
    showSplashScreen: false
  }
};

const undefinedValue = response.settings.undefinedValue ?? 'some other default'; // result: 'some other default'
const nullValue = response.settings.nullValue ?? 'some other default'; // result: 'some other default'
const headerText = response.settings.headerText ?? 'Hello, world!'; // result: ''
const animationDuration = response.settings.animationDuration ?? 300; // result: 0
const showSplashScreen = response.settings.showSplashScreen ?? true; // result: false
```

### 3️⃣ No Chaining with AND or OR operators ＆ │

It is not possible to combine both the `AND` (&&) and `OR` operators (||) directly with ??. 

A <span class='error'>SyntaxError</span> will be thrown in such cases.

```js
null || undefined ?? "supi"; // raises a SyntaxError
true || undefined ?? "supi"; // raises a SyntaxError
```

However, providing parenthesis to explicitly indicate precedence is correct:

```js
(null || undefined) ?? "supi"; // returns "supi"
```


### 4️⃣ Browser Support 🖥

It works in recent versions of Chrome or Firefox, among others.

<ImgPost src={BrowserSupport} alt='nullish coalesing operator' />


### 5️⃣ Reference 🧐

<p><LinkPost href='https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators/Nullish_Coalescing_Operator' name='MDN Nullish coalescing operator' /></p>

## Summary ∑

- The operator `??` has a very low precedence, a bit higher than `?` and `=`.
- It’s forbidden to use it with `||` or `&&` without explicit parentheses.

Thanks for reading the article ❤️

I hope you love the article. If you have any question, please feel free to ping me on <LinkPost href='https://twitter.com/suprabhasupi' name='@suprabhasupi' /> 😋
