---
title: Pure vs Impure Functions
slug: /79-pure-vs-impure-functions
date: 2022-05-19
desc: Understand pure and impure functions with side effects
cover:
  img: ../../../photos/79-pure-vs-impure-functions.png
banner: ../../banners/79-pure-vs-impure-functions.png
tags:
  - JS
  - Other
priority: 1
---

import LinkPost from '../../../src/components/linkPost'

<p><span class='first-letter'>T</span>hese are the two terms that you always hear in a programming language called <b>Pure</b> and <b>Impure functions</b>.</p>

You know `Pure Function` is always dependent on arguments and there should not be any side effects.

## What hack is <mark>Side Effects</mark>? ☠️

When you try to use external code in the function or if you are mutating a variable then it creates a Side Effect.

<u>Example:</u>

```js
let num = 10
function mul(val) {
	return num += val  
}
```

As you can see in the above snippet, `mul` the function has a dependency on an outer variable called `num`. Also, mutating `num` value, which makes its impure function.

Let’s checkout one more quick example:

```js
function hello() {
  console.log("Hello Folks!");
}
```

So, what do you think about the above snippet? 🤔

.

.

.

Yeah! this is also an impure function 😵‍💫

<p>As you all know that <mark>JavaScript is synchronous</mark>, using `console` or any `callback` or `promise/fetch` will make the function asynchronous.</p>

Here using the `console`, which is a Web API makes it an impure function.


<p>Let's checkout other side effects with <b>examples</b>:</p>

1. DOM Manipulation, any callback or reading/writing files
    
    ```js
    function mul(a,b) {
        document.write("Started Multiplication")
        return a * b
    }
    console.log(mul(2,5))
    ```
    
2. Updating or Modifying a global variable in pure function
    
    ```js
    let x = 10

    function mul(a,b) {
        document.write("Started Multiplication")
        return a * b * x
    }
    console.log(mul(2,5))
    ```
    
3. Here also, mutating outer variable which is depending on an external variable.
    
    ```js
    let x

    function mul(a,b) {
        x = 10
        return a * b * x
    }
    console.log(mul(2,5))
    ```
    

Let's Understand the Pure and Impure function, as now you have an idea of the side effects

## Pure Function

- It always returns the **same result** if the same arguments are passed
- It never depends on any state/data/change during the execution of a program
- It always returns something
- Here, writing test cases will be straightforward

## Impure Function

- Changing the internal state of any argument which has been passed
- It may take effect without returning anything
- Writing test cases will be a bit complicated as there may be side effects

### Pure and Impure Methods

These are pure methods:

- Array.map()
- Array.reduce()
- Array.filter()
- Array.concat()
- ... (spread syntax, which is mostly used to create copies)

These are impure methods:

- Array.splice()
- Array.sort()
- Date.now()
- Math.random()

### Bonus Point 🔖

You can clone an external state into a pure function.

Cloning an external state into a pure function does not make the function impure.

<u>Example:</u>

```js
let name = ["suprabha", "supi"]

function fullName(newName, name) {
  let clonedName = [...name]
  clonedName[clonedName.length] = newName
  return clonedName
}

console.log(fullName("sumi", name)) // ['suprabha', 'supi', 'sumi']
```

In the above snippet, you are using `...` spread operator in `fullName` the function. It will create a clone of it and then update it. So, it doesn't depend on `name` variable.

Thanks for reading the article!

Hope you found this article useful. If you have any questions, feel free to reach out to me <LinkPost href="https://twitter.com/suprabhasupi" name="@suprabhasupi" />

