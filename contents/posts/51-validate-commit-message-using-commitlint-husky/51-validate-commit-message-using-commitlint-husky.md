---
title: Validate commit message using Commitlint and husky
slug: /51-validate-commit-message-using-commitlint-husky
date: 2021-03-31
desc: Commit message is very important when you work in team. Using CommitLint for validating commit message.
cover:
  img: ../../../photos/51-validate-commit-message-using-commitlint-husky.png
banner: ../../banners/51-validate-commit-message-using-commitlint-husky.png
tags:
    - JS
---

import LinkPost from '../../../src/components/linkPost'
import ImgPost from '../../../src/components/imgPost'
import Post from './1-post.png'

<p><span class='first-letter'>C</span>ommit message is very important when you work in team. By reading the conventiional commit messages, it helps your team to understand what changes have you done and why. Sometime it's also going to help you when you look back into your codebase 😜 . You will be using <mark>Commitlint</mark> for validating commit message.</p>

<p>commitlint checks if your commit messages meet the <LinkPost href="https://www.conventionalcommits.org/en/v1.0.0/" name="conventional commit format" />.</p>

**Install commitlint:**

```sh
$ yarn add @commitlint/cli
```

There are few convention we can use:
1. <LinkPost href="https://github.com/conventional-changelog/commitlint/blob/master/@commitlint/config-angular" name="@commitlint/config-angular" />
2. <LinkPost href="https://github.com/conventional-changelog/commitlint/blob/master/@commitlint/config-conventional" name="@commitlint/config-conventional" /> ✅
3. <LinkPost href="https://github.com/conventional-changelog/commitlint/blob/master/@commitlint/config-lerna-scopes" name="@commitlint/config-lerna-scopes" />
4. <LinkPost href="https://github.com/conventional-changelog/commitlint/blob/master/@commitlint/config-patternplate" name="@commitlint/config-patternplate" />


To add config-conventional into project,

Install `@commitlint/config-conventional`:

```sh
$ yarn add @commitlint/config-conventional
```

Create `commitlint.config.js` in root of the project:

<u>commitlint.config.js:</u>

```js
module.exports = {extends: ['@commitlint/config-conventional']};
```

Configuration is picked up from `commitlint.config.js` or a `commitlint` field in `package.json`.

## GitHooks with <mark>Husky</mark> 🐶

It's not dog 😜. We’re talking about the tool that allows you to set up Git hooks very easily.

You can add Git hooks in two easy steps:

- Install husky as a dev dependency:

  ```sh
  $ yarn add husky
  ```

- Insert the following code in your `package.json`:

  ```json
  {
    "husky": {
      "hooks": {
        "commit-msg": "commitlint -E HUSKY_GIT_PARAMS"
      }
    }
  }
  ```

- Add Hook

```sh
$ yarn husky add .husky/commit-msg "yarn commitlint --edit $1"
```

After running above command, you will able to see <mark>.husky</mark> in root of the project.

That’s all. At each commit, the command associated with `commit-msg` will be run. If you commit with wrong commit message, you will get below error as below:

<ImgPost src={Post} alt='Post Blog' />

Your final `package.json` will look like below snippet:

<u>package.json</u>

```json
{
  "name": "web",
  "version": "0.0.0",
  "private": true,
  "scripts": {
    ...
  },
  "dependencies": {
    ...
  },
  "devDependencies": {
    "@commitlint/cli": "^12.0.1",
    "@commitlint/config-conventional": "^12.0.1",
    "husky": "^6.0.0"
  },
  "husky": {
    "hooks": {
      "commit-msg": "commitlint -E HUSKY_GIT_PARAMS"
    }
  }
}


```

**Note: 🧨**

All Dependencies should be installed as development dependencies, you don't need to add directly into dependencies.

### Reference 🧐

- <LinkPost href='https://github.com/conventional-changelog/commitlint' name='Conventional Changelog Commitlint' />
    