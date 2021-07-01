---
title: Class Fields in JavaScript 🔥
slug: /65-class-fields-javascript
date: 2021-06-28
desc: Understand Public and Private Class Fields 
cover:
  img: ../../../photos/65-class-fields-javascript.png
banner: ../../banners/65-class-fields-javascript.png
tags:
    - JS
priority: 1
---

import LinkPost from '../../../src/components/linkPost'

<p><span class='first-letter'>I</span>n JavaScript, there are two types of object fields (properties and methods):</p>

#### 1️⃣ Public 👭
Accessible from anywhere. They comprise the external interface. Until now we were only using public properties and methods.

#### 2️⃣ Private 🔐
Accessible only from inside the class. These are for the internal interface.

Class fields are public by default, but private class members can be created by using a hash `#` prefix.

### Class Field Syntax

- You can define new private members
- You will get error if you break the access rule
- It has public and private static fields, which allow you to declare class member that can be accessed without creating instance of the class

Using variable like `_variableName`, it means we can use that variable only in the class.

<u>example</u>

```js
class GetDateTime {
	_start = 0

	getDate() {
		if(true) {
			this._start = new Date()
		}
	}
}
```

But this does not prevent `_start` variable accessible publicly. Checkout here 👇

```js
let date = new GetDateTime()
console.log(date._start) 
// Thu Jun 24 2021 16:36:06 GMT+0530 (India Standard Time)
```

To create real private instance you can use `#` to create **private variables.**

📝 <mark>NOTE</mark>: You just need to replace `_` with `#`

```js
class GetDateTime {
	#start = 0

getDate() {
		if(true) {
			this.#start = new Date()
		}
	}
}

let date = new GetDateTime()
console.log(date.#start) 
// Uncaught SyntaxError: Private field '#start' must be declared in an enclosing class
```

The encapsulation is enforced by language. 

It has also support for **private methods**.

<u>Example:</u>

```js
class GetDateTime {
	#start = 0

  getDate() {
  	if(true) {
  		return this.#getNow()
  	}
  }

  #getNow() {
  	this.#start = new Date()
  }
}

let date = new GetDateTime()
console.log(date.getDate()) 
// Thu Jun 24 2021 16:55:32 GMT+0530 (India Standard Time)
```

The private methods can only be accessible inside of the class.

**Private static fields**

You can also create private static variable.

The limitation of static variables being called by only static methods still holds.

```js
class GetDateTime {
	static #start = 0

    static getDate() {
  	    if(true) {
  	        this.#start = new Date()
            return this.#start
  	    }
    }
}
console.log(GetDateTime.getDate()) 
// Thu Jun 24 2021 17:53:02 GMT+0530 (India Standard Time)
```

### Reference 🧐

<LinkPost href="https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Classes/Private_class_fields" name="Private Class Fields" />
