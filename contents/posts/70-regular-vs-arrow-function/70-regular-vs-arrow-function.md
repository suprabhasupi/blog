---
title: Regular vs Arrow Function 🔥
slug: /70-regular-vs-arrow-function
date: 2021-07-29
desc: Understand the difference between regular and arrow function 
cover:
  img: ../../../photos/70-regular-vs-arrow-function.png
banner: ../../banners/70-regular-vs-arrow-function.png
tags:
    - JS
---

import LinkPost from '../../../src/components/linkPost'

<p><span class='first-letter'>D</span>efine your functions in many ways.</p>

One way is using `function` keyword:

```js
// function declaration
function test(msg) {
    return `Hey ${msg}`
}

// function expression
const test = function(msg) {
    return `Hey ${msg}`
}
```

You can call both **function declaration** and **expression** as Normal/Regular Function

Arrow function is introduced in **ES6** and also known as fat arrow function.

```js
const arrowFunction = (msg) => {
    return `Hey ${msg}`
}
```

As you see both functions work same by above example.  Now the question comes why do we need regular or arrow function. 

Let's discuss below 👇

#### 1. <a href="#syntax">Syntax</a>
#### 2. <a href="#arguments">Arguments binding</a>
#### 3. <a href="#this">this</a>
#### 4. <a href="#new">new keyword</a>
#### 5. <a href="#no-duplicate-name">No duplicate named parameters</a>
#### 6. <a href="#function-hoisting">Function Hoisting</a>
#### 7. <a href="#methods">Methods</a>

### <h3 id="syntax">1️⃣ Syntax</h3>

We can write normal and arrow function in this way 😎

```js
// ES5
var add = function(x, y) {
    return x + y
};

// ES6
let add = (x, y) =>  x + y 
```

### Implicit Return

In regular function, you have to use return keyword to return any value. If you don't return anything then the function will return undefined.

```js
function regFunc() {
    return "Regular Function";
}
regFunc(); 
// Regular Function

function regFunc() {
    console.log("Regular Function")
}
regFunc(); 
// Regular Function
// undefined
```

Arrow functions behave in the same way when returning values.

If the arrow function contains one expression, you can omit the curly braces, and then the expression will be implicitly returned.

#### `{}` not required if its only one line of statement

```js
const addOne = (number) => number + 1;
addOne(10);
```

#### `()` not required if you pass only one argument

```js
let add = x => x + x;
```

#### If there is no arguments

```js
let arrowFunc = _ => console.log("Arrow Function");
```

### <h3 id="arguments">2️⃣ Arguments binding</h3>

In regular function, <mark>Arguments</mark> keywords can be used to access the arguments of which passed to function.

<u>Example:</u>

```js
function regularFunction(a,b) {
    console.log(arguments)
}

regularFunction(1,2)
// Arguments[1,2]
```

Arrow functions do not have an arguments binding.

```js
const arrowFunction = (a,b) => {
    console.log(arguments)
}

arrowFunction(1,2)
//ReferenceError: argumnets is not defined
```

However, if you want to access arguments in an arrow function, you can use the rest operator:

```js
var arrowFunction = (...args) => {
    console.log(...args)
}

arrowFunction(1,2)
// 1 2
```

### <h3 id="this">3️⃣ this</h3>

In regular function, this changes according to the way that function is invoked.

- **Simple Invocation:** `this` equals the global object or maybe undefined if you are using strict mode.
- **Method Invocation:** `this` equals the object that owns the method.
- **Indirect Invocation:** `this` equals the first argument.
- **Constructor Invocation:** `this` equals the newly created instance.

```js
// 1️⃣ Simple Invocation
function simpleInvocation() {
    console.log(this);
}

simpleInvocation(); 
// Window Object


// 2️⃣ Method Invocation
const methodInvocation = {
  method() {
      console.log(this);
  }
};

methodInvocation.method(); 
// logs methodInvocation object


// 3️⃣ Indirect Invocation
const context = { aVal: 'A', bVal: 'B' };
function indirectInvocation() {
    console.log(this);
}

indirectInvocation.call(context);  // logs { aVal: 'A' }
indirectInvocation.apply(context); // logs { bVal: 'A' }


// 4️⃣ Constructor Invocation
function constructorInvocation() {
    console.log(this);
}

new constructorInvocation(); 
// logs an instance of constructorInvocation
```

Arrow functions don't have their own `this`, and they don’t redefine the value of `this` within the function.

`this` inside an arrow function always refers to this from the outer context.

```js
var name = "Suprabha"
let newObject = {
    name : "supi",
    arrowFunc: () => {
        console.log(this.name); 
    },
    regularFunc() {
        console.log(this.name); 
    }   
}

newObject.arrowFunc(); // Suprabha
newObject.regularFunc(); // supi
```

### <h3 id="new">4️⃣ new </h3>

Regular functions are constructible, they can be called using the new keyword.

```js
function add (x, y) {
    console.log(x + y)
}

let sum = new add(2,3);
// 5
```

However, arrow functions can never be used as constructor functions. Hence, they can never be invoked with the new keyword

```js
let add = (x, y) => console.log(x + y);

const sum = new add(2,4); 
// TypeError: add is not a constructor
```

### <h3 id="no-duplicate-name">5️⃣ No duplicate named parameters </h3>

In normal function, we can do this:

```js
// ✅ will work 
function add(a, a) {}

// ❌ will not work 
'use strict';
function add(a, a) {}

// Uncaught SyntaxError: Duplicate parameter name not allowed in this context
```

Arrow functions can never have duplicate named parameters, whether in strict or non-strict mode.

```js
const arrowFunc = (a,a) => {}

// Uncaught SyntaxError: Duplicate parameter name not allowed in this context
```

### <h3 id="function-hoisting">6️⃣ Function Hoisting</h3>

In regular function, function gets hoisting at top. 

```js
normalFunc()

function normalFunc() {
    return "Normal Function"
}

// "Normal Function"
```

In arrow function, function get hoisted where you define. So, if you call the function before initialisation you will get referenceError.

```js
arrowFunc()

const arrowFunc = () => {
    return "Arrow Function"
}

// ReferenceError: Cannot access 'arrowFunc' before initialization
```

### <h3 id="methods"> 7️⃣ Methods</h3>

You can define methods in class using regular function.

```js
class FullName {
    constructor(name) {
        this.name = name;
    }
    
    result() {
        console.log(this.name)
    }
}

let name = new FullName("Suprabha")

console.log(name) 
// FullName {name: "Suprabha"}
```

You need to apply method as callback also.

```js
setTimeout(name.result, 2000) 
// after 1 second logs ""
```

But if you bind `this`

```js
setTimeout(name.result.bind(name), 2000) 
// Suprabha
```

By above example, you can see that you have to bind the this to there context.

In arrow function, you don't have to bind with context.

```js
class FullName {
    constructor(name) {
        this.name = name;
    }
    
    result = () => {
        console.log(this.name)
    }
}

let name = new FullName("Suprabha")

setTimeout(name.result, 2000) // Suprabha
```

### When not to use Arrow function 👩🏻‍💻

**Object Methods**

```js
let dog = {
    count: 3,
    jumps: () => {
        this.count++
    }
}
```

When you call `dog.jumps`, the number of count does not increase. It is because this is not bound to anything, and will inherit the value of this from its parent scope.

## Reference 🧐

- <LinkPost href="https://www.geeksforgeeks.org/difference-between-regular-functions-and-arrow-functions/" name="GeeksForGeeks normal vs arrow function" />

### Summary

In regular function, `this` value is dynamic, In arrow function it equals to this of the outer function.

In regular function, arguments will give you list of parameter passed in function, In arrow function arguments is not defined.

In regular function, you always have to return any value, but in Arrow function you can skip return keyword and write in single line.

In arrow function parameters should be unique.

Hoisting matters in arrow function as function get not be invoked before initialisations.

<br />
<br />
Thanks for reading the article ❤️

I hope you love the article. If you have any question, feel free to ping me on <LinkPost href='https://twitter.com/suprabhasupi' name='Twitter' /> | <LinkPost href='http://instagram.com/suprabhasupi' name='Instagram' /> 😋
