---
title: JavaScript Proxy
slug: /75-javascript-proxy
date: 2022-03-16
desc: The Proxy object enables you to create a proxy for another object, which can intercept and redefine fundamental operations for that object.
cover:
  img: ../../../photos/75-javascript-proxy.png
banner: ../../banners/75-javascript-proxy.png
tags:
  - JS
---

import LinkPost from '../../../src/components/linkPost'

<p><span class='first-letter'>A</span> JavaScript Proxy is an object that wraps another object and intercepts the fundamental operations of the target object.</p>

<p><u>syntax:</u></p>

```js
let proxy = new Proxy(target, handler);
```

- `target` – is an object to wrap, can be anything, including functions.
- `handler` – proxy configuration: an object with “traps”, methods that intercept operations. – e.g. `get` trap for reading a property of `target`, `set` trap for writing a property into `target`, and so on.

Let's look a quick example by defining an object called user:

```js
const user = {
    firstName: 'suprabha',
    lastName: 'supi',
}

// defining a handler function
const handler = {}

// now, create a proxy
const userProxy = new Proxy(user, handler);
```

`userProxy` object uses the `user` object to store data. The `userProxy` can access all properties of the `user` object.

Let’s see the output:

```js
console.log(userProxy.firstName); // suprabha
console.log(userProxy.lastName); // supi
```

If you modify the original object `user`, the change is reflected in the `userProxy`

```js
user.firstName = 'sam';
console.log(userProxy.firstName); // sam
```

Similarly, a change in the `userProxy` object will be reflected in the original object `user`:

```js
proxyUser.lastName = 's';
console.log(user.lastName); // s
```

There are methods in proxy, here we will cover most important **methods**:
1. get
2. set
3. apply

### 1️⃣ get:

The **`handler.get()`** method is a trap for getting a property value.

Also you can make the changes using `get` :

```js
const user = {
    firstName: 'suprabha',
    lastName: 'supi',
}

// defining a handler function
const handler = {
	get(target, prop, receiver) {
    return "sumi";
  }
}

// now, create a proxy
const userProxy = new Proxy(user, handler);

console.log(userProxy.firstName) // sumi
console.log(userProxy.lastName)  // sumi
```

As of now we don’t have `fullUserName` in user object, so let’s create it in proxy using `get` trap:

```js
const user = {
    firstName: 'suprabha',
    lastName: 'supi',
}

const handler = {
    get(target, property) {
        return property === 'fullUserName' ?
            `${target.firstName} ${target.lastName}` :
            target[property]
    }
};

const userProxy = new Proxy(user, handler)

console.log(userProxy.fullUserName) // suprabha supi
```

### 2️⃣ set:

`set` trap controls behavior when a property of the `target` object is set.

So, let’s say you have to add some conditions, so you can do it in `set` trap.

```js
const user = {
    firstName: 'suprabha',
    lastName: 'supi',
		age: 15
}

const handler = {
    set(target, property, value) {
        if (property === 'age') {
            if (typeof value !== 'number') {
                throw new Error('Age should be in number!');
            }
            if (value < 18) {
                throw new Error('The user must be 18 or older!')
            }
        }
        target[property] = value;
    }
};

const userProxy = new Proxy(user, handler);

// if you try to set age to bool, you will get error
userProxy.age = true;
// Error: Age must be a number.

userProxy.age = '16';
// The user must be 18 or older.

userProxy.age = '20'
// no errors would be found
```

### 3️⃣ apply

The `handler.apply()` method is a trap for a function call. Here is the syntax:

```js
let proxy = new Proxy(target, {
    apply: function(target, thisArg, args) {
        //...
    }
});
```

Now, let's follow the above example by capitalizing on the first and last name.

```js
const user = {
    firstName: 'suprabha',
    lastName: 'supi'
}

const getFullName = function (user) {
    return `${user.firstName} ${user.lastName}`;
}

const getFullNameProxy = new Proxy(getFullName, {
    apply(target, thisArg, args) {
        return target(...args).toUpperCase();
    }
});

console.log(getFullNameProxy(user)); // SUPRABHA SUPI
```

### Reference 🧐

- <LinkPost href="https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Proxy" name="Proxy MDN" />
