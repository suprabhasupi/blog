---
title: Currying in JavaScript
slug: /29-currying-in-javascript
date: 2020-07-08
desc: Currying is a process in functional programming in which we can transform a function with multiple arguments into a sequence of nesting functions.
priority: 1
# Old URL
# Minute Read
cover:
  img: ../../../photos/29-currying-in-javascript.png
banner: ../../banners/29-currying-in-javascript.png
tags:
  - JS
---

import LinkPost from '../../../src/components/linkPost'

<p><span class='first-letter'>C</span>urrying is a process in functional programming in which we can transform a function with multiple arguments into a sequence of nesting functions. It returns a new function that expects the next argument inline.</p>

In other words, when a function, instead of taking all arguments at one time, takes the first one and return a new function that takes the second one and returns a new function which takes the third one, and so forth, until all arguments have been fulfilled.

That is, when we turn a function call `sum(1,2,3)` into `sum(1)(2)(3)`

The number of arguments a function takes is also called <mark>arity</mark>

```js
function sum(a, b) {
    // do something
}
function _sum(a, b, c) {
    // do something
}
```

Function `sum` takes two arguments (2-arity function) and `_sum` takes three arguments (3-arity function).

Curried functions are constructed by chaining closures by defining and immediately returning their inner functions simultaneously.

## Why it’s useful❓🤔

1. Currying helps we avoid passing the same variable again and again
2. It helps to create a higher order function

**Currying** transforms a function with multiple arguments into a sequence/series of functions each taking a single argument.

<u>Example:</u>

```js
function sum(a, b, c) {
    return a + b + c;
}
```

This function takes three numbers, add the numbers and returns the result.

```js
sum(1,2,3); // 6
```

As we see, function with the full arguments. Let’s create a curried version of the function and see how we would call the same function (and get the same result) in a series of calls:

```js
function sum(a) {
    return (b) => {
        return (c) => {
            return a + b + c
        }
    }
}

console.log(sum(1)(2)(3)) // 6
```

We could separate this sum(1)(2)(3) to understand it better:

```js
const sum1 = sum(1);
const sum2 = sum1(2);
const result = sum2(3);
console.log(result); // 6
```

Let's get to know how it works:

We passed 1 to the `sum` function:

```js
let sum1 = sum(1);
```

It returns the function:

```js
return (b) => {
    return (c) => {
        return a + b + c
    }
}
```

Now, `sum1` holds the above function definition which takes an argument `b`.

We called the `sum1` function, passing in `2`:

```js
let sum2 = sum1(2);
```

The `sum1` will return the third function:

```js
return (c) => {
    return a + b + c
}
```

The returned function is now stored in `sum2` variable.

`sum2` will be:

```js
sum2 = (c) => {
    return a + b + c
}
```

When `sum2` is called with 3 as the parameter,

```js
const result = sum2(3);
```

It does the calculation with the previously passed in parameters: `a = 1`, `b = 2` and returns `6`.

```js
console.log(result); // 6
```

The last function only accepts `c` variable but will perform the operation with other variables whose enclosing function scope has long since returned. It works nonetheless because of `Closure`

## Currying & Partial Application 👩🏻‍💻

Some might start to think that the number of nested functions a curried function has depends on the number of arguments it receives. Yes, that makes it a curry.

Let's take same `sum`  example:

```js
function sum(a) {
    return (b, c) => {
        return a * b * c
    }
}
```

It can be called like this:

```js
let x = sum(10);
x(3,12);
x(20,12);
x(20,13);

// OR

sum(10)(3,12);
sum(10)(20,12);
sum(10)(20,13);
```

Above function expects 3 arguments and has 2 nested functions, unlike our previous version that expects 3 arguments and has 3nesting functions.

**This version isn’t a curry.** We just did a partial application of the `sum` function.

Currying and Partial Application are related (because of **closure**), but they are of different concepts.

`Partial application transforms a function into another function with smaller arity.`

```js
function sum1(x, y, z) {
    return sum2(x,y,z)
}

// to

function sum1(x) {
    return (y,z) => {
        return sum2(x,y,z)
    }
}
```

```js
function sum1(x) {
    return (y) => {
        return (z) => {
            return sum2(x,y,z)
        }
    }
}
```

**Currying** creates nesting functions according to the number of the arguments of the function. Each function receives an argument. If there is no argument there is no currying.

To develop a function that takes a function and returns a curried function:

```js
function currying(fn, ...args) {
    return (..._arg) => {
        return fn(...args, ..._arg);
    }
}
```

The above function accepts a function (fn) that we want to curry and a variable number of parameters(`…args`). The rest operator is used to gather the number of parameters after fn into `...args`.

Next, we return a function that also collects the rest of the parameters as `…_args`. This function invokes the original function fn passing in `...args` and `..._args` through the use of the spread operator as parameters, then, the value is returned to the user.

Now, we can use the above function to create curry function.

```js
function sum(a,b,c) {
    return a + b + c
}

let add = currying(sum,10);
add(20,90); // 120
add(70,60); // 140
```

<mark>Closure</mark> makes currying possible in JavaScript. I hope you have learned something new about currying!

Thanks for reading this article ♥️

If you have any question, please feel free to ping me on <LinkPost href='https://twitter.com/suprabhasupi' name='@suprabhasupi' /> 😋



