---
title: How JavaScript Works 🤷🏻‍♀️
slug: /55-how-javascript-works
date: 2021-05-01
desc: Read Javascript engine, Javascript runtime, single thread, compiler and interpreted language
cover:
  img: ../../../photos/55-how-javascript-works.png
banner: ../../banners/55-how-javascript-works.png
tags:
    - JS
priority: 1
---

import LinkPost from '../../../src/components/linkPost'
import ImgPost from '../../../src/components/imgPost'
import HowJSWorks1 from './1.jpg'
import HowJSWorks2 from './2.png'
import HowJSWorks3 from './3.jpeg'
import HowJSWorks4 from './4.png'
import HowJSWorks5 from './5.png'
import HowJSWorks6 from './6.png'
import HowJSWorks7 from './7.gif'
import HowJSWorks8 from './8.png'
import HowJSWorks9 from './9.png'

<p><span class='first-letter'>U</span>nderstanding the fundamentals is priceless. So let's discuss the fundamental that how Javascript works 🤔</p>

## How JavaScript Works? 🤷🏻‍♀
<ImgPost src={HowJSWorks1} alt="how javascript works" width={75} />

Understanding how JavaScript works makes reading and writing code easier and less frustrating and allows you to focus on the logic of your application instead of fighting with the grammar of the language.

We write code in text editor and somehow this code magically turns into 0 and 1 which tells computer to do something.  😇

Javascript is a single threaded and interpreted language.

If I give JS file to CPU and ask to execute it in browser, It won't understand the language as in last computer only understand 0 and 1.  How we communicate using JS file , so computer execute code in browser. 

Here, comes Javascript Engine.

## Javascript Engine 🎰

<ImgPost src={HowJSWorks2} alt="how javascript engine works" width={50} />


By having Javascript Engine, it allows us to give Javascript file to the engine. The engine is going to understand Javascript file and tell the computers what to do to with  code.

In a sense, you just created a translator so you can communicate with somebody that doesn't know your language.

There are 8 engines and they are called ECMAScript. Fast engine is v8 which is written in C++.

❓ Who created the first JS engine ❓

Brendan Eich. ☺️ Before that computer only understand HTML and CSS 🤯

### What happens Inside The Engine? 

<ImgPost src={HowJSWorks3} alt="how javascript engine works" width={75} />

When we give a Javascript file, first it does lexical analysis(parser) which break a code into token to identify their meaning.

These token will get formed in tree called AST(Abstract Syntax Tree).

To check it how it works. Goto <LinkPost href="https://astexplorer.net/" name="link" />

Once tree is formed, it goes to **interpreter**.

### Interpreter & Compiler

In programming language, there are two ways of translating into machine language, something that computer understands.

<mark>Interpreter</mark>, We translate and read the files line by line on the fly.

<mark>Compiler</mark>, It works ahead of time to create a translation of what code we have written and it compiles down to language that can be understood by our machines.

<ImgPost src={HowJSWorks4} alt="Interpreter and compiler language" />

In above image, We have a high level language in Javascript, Interpreter take the high level language code line by line and and spit out byte code.  

Compiler will take a high level language code and spit out machine code. So, it can give it to CPU, and CPU can actually run the code. 

Hence, Interpreter allows us to run the code right away and the compiler and profiler allows us to optimize the code as we are running.

### Babel + TypeScript ḆṮ

<ImgPost src={HowJSWorks5} alt="babel and typescript" />

<LinkPost href="https://babeljs.io/" name="Babel" /> is a Javascript compiler that takes your modern Javascript code and returns browser compatible JS (older JS code).

<LinkPost href="https://www.typescriptlang.org/" name="Typescript" /> is a superset of Javascript that compiles down to Javascript.

Both of these do exactly what compilers do: Take one language and convert into a different one!

**Pros and Cons of Interpreter and compiler:**

1. Complier take little bit longer to get up and running but the code is eventually run faster .
2. Interpreter that is really fast to get up and running but doesn't do any optimizations.

**❓ Is there anything we can get the best of both? ❓**

Yes, Google came with <mark>V8 engine</mark>, which combining both interpreter and complier, known as **JIT** (Just In Time) complier to make the engine faster.

Using the <mark>Profiler</mark>, as the code is running through our interpreter which tells our browser what to do if the same line of code run a few times. We actually pass some of the code to compiler/JIT complier and complier takes a code and compiles it or modifies it. 

#### Is Javascript an interpreted language ❓ 

Yes, when Javascript first came out you had Javascript engine such as spider monkey that interpreted Javascript to byte code which tells browser what to do. But now we also use complier to optimize the code.

## Memory Heap and Call Stack 📚

<ImgPost src={HowJSWorks6} alt="memory heap and call stack" />

<mark>Memory Heap</mark> is a place to store all information and write information. That way we have a place to allocate memory, use memory and release memory.

Call Stack need to keep track of where we are in the code.

**Stack Overflow**

Recursion is one of the most common ways to create a stack overflow  or a lot of function nested inside each other to keep the stack growing and growing.. 🤯

The error will come as:

<p class="error">Uncaught RangeError: Maximum call stack size exceeded</p>

### Garbage Collection  ⃥

Javascript is garbage collected language.

It means when we created any object, and after execution if we don't need the object anymore then it's going to clean it up for us.

Javascript automatically frees up this memory that we no longer use.

### ❓❓How does garbage collection works in Javascript? ❓❓

⇒ It uses mark and sweep algo.

<ImgPost src={HowJSWorks7} alt="how javascript works" width={40} />

### Memory Leak 📝

Memory leak are piece of memory that the application have used in the past but its not needed any longer but has not been returned back to us to the poor free memory.

Running below snippet, we are going to run an infinite loop that keeps pushing i-1 over and over until we fill up our memory and there is nothing left for us to use, which crash our browser.

Example:

```javascript
let array = [];
for(let i = 5; i > 1; i++) {
	array.push(i-1);
}
```

**These are few memory leak that happened:**

1. Don't have too many global variables
2. Event listener

    You never remove the below addEventListener , when you don't need them. SO keep adding event listeners.

    ```javascript
    var el = document.getElementById('button')
    el.addEventListener('click', onclick)
    ```

3. setInterval
    It will run continuously , so we need to use clearInterval when you don't need them.

### Single Thread 🧵

<ImgPost src={HowJSWorks9} alt="console log window" width={70} />

Javascript is single thread language, as it has only one call stack. Call stack allows us to run a code one at a time and because of this Javascript is synchronous, so only one thing can happen at a time.

It's not only JS engine which run the code, <mark>Javascript runtime</mark> is also there which will take care of running tasks.

### Javascript Runtime 🏃🏻‍♂️

Web browser is working in background, while the synchronous Javascript code is running  and its uses Web API to communicate. So the Javascript engine knows, there is some data which needs to be done in background. 

Web API comes with browser. These web API can do many things like send http request, listen to DOM event, delay execution using callback, database storage.

<u>Exmaple:</u>

If you console log window you will understand what are property has been provided by browser.

```js
console.log(window)
```

<ImgPost src={HowJSWorks8} alt="console log window" width={70} />

Browser uses C++ languages to perform all the above operation.

These web API are called asynchronous.

So if any callback or web API call like `settimeout` goes to `call stack` then it will not understand what to do with it, so it send the callback to web API, and web API will take care of it. Once the web API will be done with the callback than it send to callback queue and event loop will take care of it from now. Event loop will communicate with call stack and callback queue, that if call stack is empty than add the callback queue task to call stack.

<u>Exmaple:</u>

```js
console.log("1");
setTimeout(() ⇒ {
	console.log("2")
}, 1000)
console.log("3")

// OUTPUT: 
// 1
// 3
// 2
```

Lets see how the above example runs:

we added 1st console to call stack and we logged onto console and then remove that code from call stack.

Now, Added the `setTimeout` to call stack, which immediately think that `setTimeout` is web API, so `call stack` does not know what to do with it, so `call stack` will send `setTimeout` to web API. 

Then we go to next line, and check its console log, then logged onto console and then remove that code from call stack.

Now behind web API, it is going to start the timer for 1 sec, and once the 1 sec is over its going to push the callback i.e. `console.log("2")`. Then `console.log("2")` will be pushed to callback queue, then event loop which is continuously running will check is call stack empty? 

Event loop only runs when call stack is empty and entire JS file has read. So event loop is not going to put anything in call stack from callback queue, until call stack is empty. 

Once it clear, Event loop will take `console.log("2")` and prints.

### Reference 🧐

- <LinkPost href="http://latentflip.com/loupe" name="Loupe" />
- <LinkPost href="https://replit.com/@aneagoie/Javascript-Runtime" name="Javascript runtime" />
