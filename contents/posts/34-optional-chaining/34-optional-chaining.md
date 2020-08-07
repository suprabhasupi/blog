---
title: Optional chaining (?.)
slug: /34-optional-chaining
date: 2020-07-19
desc: Optional chaining operator (?.) permits reading the value of a property located deep within a chain of connected objects without having to expressly validate that each reference in the chain is valid
# Old URL
# Minute Read
cover:
  img: ../../../photos/34-optional-chaining.png
banner: ../../banners/34-optional-chaining.png
tags:
  - JS
---

import LinkPost from '../../../src/components/linkPost'

<p><span class='first-letter'>O</span>ptional chaining operator (?.) permits reading the value of a property located deep within a chain of connected objects without having to expressly validate that each reference in the chain is valid. The `?.` operator functions similarly to the `.` chaining operator, except that instead of causing an error if a reference is nullish (null or undefined), the expression short-circuits with a return value of undefined. When used with function calls, it returns undefined if the given function does not exist.</p>

## The Problem 🤷🏻‍♀️

An object can have a very different nested structure of objects.

- Fetching remote JSON data
- Using configuration objects
- Having optional properties

Working with data in JavaScript frequently involves situations where you aren’t sure that something exists. For example, imagine getting a JSON response from a weather API.

```json
{
  "data": {
    "temperature": {
      "current": 68,
      "high": 79,
      "low": 45
    },
    "averageWindSpeed": 8
  }
}
```

You can go through each level of the object to get the high temperature. ⛅️

The value of `response.data`, `response.data.temperature` are confirmed to be non-null before accessing the value of `response.data.temperature.current`. This prevents the error that would occur if you simply accessed `response.data.temperature.current` directly without testing `response.data && response.data.temperature`

```js
const highTemperature = response.data && response.data.temperature && response.data.temperature.current;
```

With the optional chaining operator(?.) you don't have to explicitly test and short-circuit based on the state of `response.data && response.data.temperature` before trying to access `response.data.temperature.current`.

If `response.data && response.data.temperature` are null or undefined, the expression automatically short-circuits, returning undefined.

```js
const highTemperature = response.data?.temperature?.current;
```

By using the `?.` operator instead of just `.`, JavaScript knows to implicitly check to be sure `response.data && response.data.temperature` are not null or undefined before attempting to access r`esponse.data.temperature.current`


### Optional chaining not valid on the left-hand side of an assignment

```js
let object = {};
object?.property = 1; // Uncaught SyntaxError: Invalid left-hand side in assignment
```

### Relationship with the optional chaining operator (`?.`)

The nullish coalescing operator treats `undefined` and `null` as specific values and so does the [optional chaining operator (`?.`)](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators/Optional_chaining) which is useful to access a property of an object which may be `null` or `undefined`.

```js
let foo = { someFooProp: "hi" };

console.log(foo.someFooProp?.toUpperCase());  // "HI"
console.log(foo.someBarProp?.toUpperCase()); // undefined
```

### Other cases: `?.()`, `?.[]`

The optional chaining `?.` is not an operator, but a special syntax construct, that also works with functions and square brackets.

```js
let user1 = {
  admin() {
    alert("I am admin");
  }
}

let user2 = {};
user1.admin?.(); // I am admin
user2.admin?.();
```

### Use `?.` with delete ␡:

```js
delete user?.name; // delete user.name if user exists
```

### Few Scenario which needs to taken care of:

1. **The variable before `?.` must be declared**

If there’s no variable user at all, then `user?.anything` triggers an <span class='error'>error</span>:

```js
// ReferenceError: user is not defined
user?.address;
```

There must be let/const/var user. The optional chaining works only for declared variables.

2. **Use `?.` for safe reading and deleting, but not writing**

The optional chaining ?. has no use at the left side of an assignment:

```js
// the idea of the code below is to write user.name, if user exists
user?.name = "John"; // Error, doesn't work
// because it evaluates to undefined = "John"
```

## Summary 📝

The `?.` syntax has three forms:

1. `obj?.prop` – returns `obj.prop` if `obj` exists, otherwise `undefined`.
2. `obj?.[prop]` – returns `obj[prop]` if `obj` exists, otherwise `undefined`.
3. `obj?.method()` – calls `obj.method()` if `obj` exists, otherwise returns `undefined`.

## Reference 🧐

- <LinkPost href='https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators/Optional_chaining' name='MDN Optional chaining' />

- <LinkPost href='https://javascript.info/optional-chaining' name='Javascript Info for optional chaining' />

Thanks for reading the article ❤️

I hope you get to learn something new from this article. If you have any question please reach out to me on <LinkPost href='https://twitter.com/suprabhasupi' name='@suprabhasupi' /> 😋

