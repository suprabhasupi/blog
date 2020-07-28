---
title: Title 1 
# Title 1 Title 1 Title 1 Title 1 Title 1 Title 1 Title 1 Title 1 Title 1 Title 1 Title 1
slug: /one
date: 2020-07-27
priority: 1
desc: some small description will come here 
# Old URL
# Minute Read
cover:
  img: ../../photos/1.png
tags:
  - CSS
  - HTML
---

The optional chaining operator (?.) permits reading the value of a property located deep within a chain of connected objects without having to expressly validate that each reference in the chain is valid. The ?. operator functions similarly to the . chaining operator, except that instead of causing an error if a reference is nullish (null or undefined), the expression short-circuits with a return value of undefined. When used with function calls, it returns undefined if the given function does not exist.

## The problem

An object can have a very different nested structure of objects.

- Fetching remote JSON data
- Using configuration objects
- Having optional properties

Working with data in JavaScript frequently involves situations where you aren’t sure that something exists. For example, imagine getting a JSON response from a weather API.

```js
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

You can go through each level of the object to get the high temperature.

The value of `response.data`, `response.data.temperature` are confirmed to be non-null before accessing the value of `response.data.temperature.current`. This prevents the error that would occur if you simply accessed `response.data.temperature.current` directly without testing `response.data && response.data.temperature`

```js
const highTemperature = response.data && response.data.temperature && response.data.temperature.current;
```

With the optional chaining operator(?.) you don't have to explicitly test and short-circuit based on the state of `response.data && response.data.temperature` before trying to access `response.data.temperature.current`.

If `response.data && response.data.temperature` are null or undefined, the expression automatically short-circuits, returning undefined.

```js
const highTemperature = response.data?.temperature?.current;
```


```js
function constant(value) {
  return () => value;
}

const alwaysFour = constant(4);

const zero = [0, 1, 2, 3, 4, 5]
  .map(alwaysFour)
  .filter(x => x !== 4)
  .length;
```
```jsx
import Code from '../components/code'

export default {
    pre: Code
}
```

```js

console.log()

```

```html
<div>dsdS</div>
```


```css
.helo {
  color: red
}
```