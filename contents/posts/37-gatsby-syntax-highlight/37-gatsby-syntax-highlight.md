---
title: Gatsby - Syntax Highlight 🏷
slug: /37-gatsby-syntax-highlight
date: 2020-08-09
desc: Add some syntax highlighting for adding code blocks to your blog pages.
# Old URL
# Minute Read
cover:
  img: ../../../photos/37-gatsby-syntax-highlight.png
banner: ../../banners/37-gatsby-syntax-highlight.png
tags:
  - Gatsby
---

import ImgPost from '../../../src/components/imgPost'
import LinkPost from '../../../src/components/linkPost'
import CodeOutput from './1-output.png'

<p><span class='first-letter'>A</span>dd some syntax highlighting for adding code blocks to your blog pages. To do that you're going to add dependencies for `prism-react-renderer` and `react-live`. 🔆</p>

```sh
$ yarn add prism-react-renderer react-live
$ touch root-wrapper.js gatsby-ssr.js gatsby-browser.js
```

You're going to get `prism-react-render` up and running for syntax highlighting for any code you're going to add to the blog.

First you're going to import `root-wrapper.js` file into both `gatsby-browser.js` and `gatsby-ssr.js` file. Into both code modules, paste the following:

```js
import { wrapRootElement as wrap } from './root-wrapper';
export const wrapRootElement = wrap;
```

<p><mark>MDXProvider</mark> is used to give React components to override the markdown page elements.</p>

Import the theme then use it in the props of the Highlight component.

<u>root-wrapper.js:</u>

```jsx
import { MDXProvider } from '@mdx-js/react';
import Highlight, { defaultProps } from 'prism-react-renderer';
import React from 'react';

const components = {
  h2: ({ children }) => (
    <h2 style={{ color: 'rebeccapurple' }}>{children}</h2>
  ),
  'p.inlineCode': props => (
    <code style={{ backgroundColor: 'lightgray' }} {...props} />
  ),
  pre: props => {
    const className = props.children.props.className || '';
    const matches = className.match(/language-(?<lang>.*)/);
    return (
      <Highlight
        {...defaultProps}
        code={props.children.props.children.trim()}
        language={
          matches && matches.groups && matches.groups.lang
            ? matches.groups.lang
            : ''
        }
			theme={theme} >
        {({
          className,
          style,
          tokens,
          getLineProps,
          getTokenProps,
        }) => (
          <pre className={className} style={style}>
            {tokens.map((line, i) => (
              <div {...getLineProps({ line, key: i })}>
                {line.map((token, key) => (
                  <span {...getTokenProps({ token, key })} />
                ))}
              </div>
            ))}
          </pre>
        )}
      </Highlight>
    );
  },
};

export const wrapRootElement = ({ element }) => (
  <MDXProvider components={components}>{element}</MDXProvider>
);
```

I have done the changes for my blog <LinkPost href='https://github.com/suprabhasupi/blog/commit/322eadc4c69aa129167bee91b692772cb6e854a4' name='here' />

## Adding Tag 🔖

I have added the language tag manually for code snippet. ＜⁄＞

```css
pre {
  &::after {
    background: black;
    border-radius: 0 0 0.25rem 0.25rem;
    font-size: 14px;
    letter-spacing: 0.025rem;
    padding: 0.1rem 0.5rem;
    position: absolute;
    right: 1rem;
    text-align: right;
    text-transform: uppercase;
    top: 0;
    font-weight: 600;
  }
  &.language-javascript::after {
    content: "js";
    background: #f7df1e;
    color: black;
  }
}
```

<u>Output:</u>

<ImgPost src={CodeOutput} alt='Gatsby Code mode Output' margin="2rem 0" width={90} />

Checkout the committed code here <LinkPost href='https://github.com/suprabhasupi/blog/commit/00f1e77749b48a51bc95eb0d72f1b513cfa0f25a' name='@github' />

