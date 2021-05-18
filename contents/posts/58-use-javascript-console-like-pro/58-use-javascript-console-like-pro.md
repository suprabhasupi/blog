---
title: Use Javascript console like pro
slug: /58-use-javascript-console-like-pro
date: 2021-05-18
desc: Lets talk about most of the console methods which everyone should start using.
cover:
  img: ../../../photos/58-use-javascript-console-like-pro.png
banner: ../../banners/58-use-javascript-console-like-pro.png
tags:
    - JS
priority: 1
---

import LinkPost from '../../../src/components/linkPost'
import ImgPost from '../../../src/components/imgPost'
import JsConsole1 from './1.png'
import JsConsole2 from './2.png'
import JsConsole3 from './3.png'
import JsConsole4 from './4.png'
import JsConsole5 from './5.png'
import JsConsole6 from './6.png'
import JsConsole7 from './7.png'
import JsConsole8 from './8.png'
import JsConsole9 from './9.png'
import JsConsole10 from './10.png'

<p><span class='first-letter'>E</span>very JavaScript developer has used `console.log("message")` .</p>

It provides a simple debugging console that is similar to the JavaScript console mechanism provided by web browsers.

In this article we will talk about most of the console methods which everyone should start using.

All the following methods are available in the global instance console, so it is not necessary to require the console module.

### Default: console.log( ) | info( ) | debug( ) | warn( ) | error( ) 🔥

These console will directly print the raw string with appropriate color based on the type of event that is provided to them.

```js
console.log("console log")
console.info("console info")
console.debug("console debug")
console.warn("console warn")
console.error("console error")
```

<ImgPost src={JsConsole1} alt="default console type" />

### Styling console output 👻

You can use the %c directive to apply a CSS style to console output

```js
console.log("%cText color is green and increased font size", "color: green; font-size: 2rem;")
```

<ImgPost src={JsConsole2} alt="Styling console type" />

We can add %c multiple times.

```js
console.log("Multiple styles: %cred %corange", "color: red", "color: orange", "Additional unformatted message");
```

<ImgPost src={JsConsole3} alt="styling multiple console type" />

### 1. console.table( )  

console.table ( ) allows us to generate a table inside a console. The input must be an array or an object which will be shown as a table.

```js
let info = [["Suprabha"], ["Frontend Dev"], ["Javascript"]]
console.table(info)
```

<ImgPost src={JsConsole4} alt="console table" />

### 2. console.group("group") & console.groupEnd("group")

To organize the console, let's use console.group() & console.groupEnd().

Using console group, your console logs are grouped together, while each grouping creates another level in the hierarchy. Calling groupEnd reduces one.

```js
console.group()
    console.log("Test 1st message")
    console.group("info")
        console.log("Suprabha")
        console.log("Frontend Engineer")
    console.groupEnd()
console.groupEnd()
```

<ImgPost src={JsConsole5} alt="console group and groupEnd" />

### 3. console.dir( )

Prints a JSON representation of the specified object.

```js
let info = {
    "name": "Suprabha", 
    "designation": "Frontend Engineer",
    "social": "@suprabhasupi"    
}
console.dir(info)
```

<ImgPost src={JsConsole6} alt="console dir" />

### 4.  console.assert( )

Log a message and stack trace to console if the first argument is false.

It will only print the false argument. It does nothing at all if the first argument is true.

```js
console.assert(false, "Log me!")
```

Example:

```js
let name = "supi"
let msg = "Its not a number"
console.assert(typeof msg === "number", {name: name, msg: msg})
```

<ImgPost src={JsConsole7} alt="console assert" />

### 5. console.count ( )

This function logs the number of times that this particular call to `count()` has been called. This function takes an optional argument `label`.

If `label` is supplied, this function logs the number of times `count()` has been called with that particular `label`.

```js
console.count("Hey")
console.count("Hey")
console.count("Hey")
console.count("Hey")
```

<ImgPost src={JsConsole8} alt="console count with label" />

If `label` is omitted, the function logs the number of times `count()` has been called at this particular line

```js
for (let i = 0; i < 5; i++) {
    console.count()
}
```

<ImgPost src={JsConsole9} alt="console count without label" />

### 6. console.time( ) and console.timeEnd( )

Check the performance of your code in execution time

console.time() is a better way to track the microtime taken for JavaScript executions.

```js
console.time("Time")
let l = 0;
for (let i = 0; i < 5; i++) {
   l += i
}
console.log("total", l)
console.timeEnd("Time")
```

<ImgPost src={JsConsole10} alt="console time and timeEnd" />

## Reference 🧐

- <LinkPost href="https://developer.mozilla.org/en-US/docs/Web/API/Console" name="MDN Doc Console" />
