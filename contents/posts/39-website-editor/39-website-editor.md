---
title: Website Editor ✏
slug: /39-website-editor
date: 2020-08-11
desc: Two ways to edit website which is contentEditable and designMode.
# Old URL
# Minute Read
cover:
  img: ../../../photos/39-website-editor.png
banner: ../../banners/39-website-editor.png
tags:
  - Other
---

import ImgPost from '../../../src/components/imgPost'
import LinkPost from '../../../src/components/linkPost'
import ceVSdm from './1.png'
import designMode from './2.png'

There are 2 basic ways of making an editor 📝
1. contentEditable property 
2. designMode property 

Both of the properties enabled editing the content on the page as if it was an editor. So open your dev console of the browser and type **document.designMode="on"** this will convert your webpage document into a rich text editor. The best part is the `JavaScript` on the page will still be executed.

## contentEditable vs designMode 📓

<ImgPost src={ceVSdm} alt='contentEditable vs designMode' width={50} />

When you set a page into `designMode`, you can edit the content of the page directly inside the browser page, which is very handy to test some prototype or check out how a new headline would look, for example.

**How to enable designMode and contentEditable ❓🤔**

```
document.designMode = 'on'
```

The same result can be triggered by enabling **contentEditable** on the body element, like this:

```
document.body.contentEditable = true
```

You can edit or delete the content and also drag images around to reposition them.

You can turn off the `designMode` by using

```
document.designMode = 'off'
```

<ImgPost src={designMode} alt='design mode' width={50} />

## Reference 🧐

- <LinkPost href='https://developer.mozilla.org/en-US/docs/Web/Guide/HTML/Editable_content' name='Content Editable' />

