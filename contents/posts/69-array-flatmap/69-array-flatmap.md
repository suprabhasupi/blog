---
title: Array FlatMap
slug: /69-array-flatmap
date: 2021-07-25
desc: Array FlatMap is a single method which can be usable for both flat and map methods
cover:
  img: ../../../photos/69-array-flatmap.png
banner: ../../banners/69-array-flatmap.png
tags:
    - JS
priority: 1
---

import LinkPost from '../../../src/components/linkPost'
import ImgPost from '../../../src/components/imgPost'

<p><span class='first-letter'>F</span>latMap is a single method which can be usable for flat and map methods.</p>

As you know `flat()`, flattening the 1-level deep and `map()` to loop into an array.

If we include both, we called `flatMap()` 😉 

So, instead if calling two methods `flat()` and `map()`, you can use single method called `flatMap()`.

```js
let plants = ['💐', '🌲', '🌻', '🌹'];

// ❌ map + flat
plants.map(plant => [plant, '🍁']).flat();
// Output
//["💐", "🍁", "🌲", "🍁", "🌻", "🍁", "🌹", "🍁"]

// ✅ flatMap
plants.flatMap(plant => [plant, "🍁"])

// Output
// ["💐", "🍁", "🌲", "🍁", "🌻", "🍁", "🌹", "🍁"]
```

### How flatMap() works?

📝 <mark>FlatMap() always do first map() and then it flat().</mark>

In `flat()`, we use to pass arguments where you set the depth, arguments define how deep a nested array should be flattened.

```js
let plants = [[["🌻", "🌹"]]];
plants.flat(2);

// ["🌻", "🌹"]
```

#### `flatMap()` do only 1 level deep flattening.

```js
let plants = [[["🌻", "🌹"]]];
plants.flatMap(plant => [plant]);

// [["🌻", "🌹"]]
```

### Filter using flatMap 😉

Yes, You can also do filter here using `flatMap()`.

```js
let arr = [5, 4, -3, 20, -4, 18]
arr.flatMap(i => {
  return i < 0 ? [] : [i];
})

// [5, 4, 20, 18]
```

## Reference 🧐

- <LinkPost href="https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/flatMap" name="MDN Docs of FlatMap" />

## Summary ∑

flatMap() method always helps if you want to use map and flat methods both together.

Thanks for reading the article ❤️

I hope you love the article. If you have any question, feel free to ping me on <LinkPost href='https://twitter.com/suprabhasupi' name='Twitter' /> | <LinkPost href='http://instagram.com/suprabhasupi' name='Instagram' /> 😋
