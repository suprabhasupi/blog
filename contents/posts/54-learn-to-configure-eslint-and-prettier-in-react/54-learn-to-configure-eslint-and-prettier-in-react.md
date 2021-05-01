---
title: Learn to configure ESLINT and PRETTIER in react
slug: /54-learn-to-configure-eslint-and-prettier-in-react
date: 2021-04-16
desc: Configuring eslint and prettier + VS code
cover:
  img: ../../../photos/54-learn-to-configure-eslint-and-prettier-in-react.png
banner: ../../banners/54-learn-to-configure-eslint-and-prettier-in-react.png
tags:
    - JS
---

import LinkPost from '../../../src/components/linkPost'

<p><span class='first-letter'>W</span>hy linting your code is important?</p>

Linting will checks out the code without executing it.

The best part of a linter is finding potential errors in your code that don’t look like them. 

## ESLint ✍️

ESLint parses your code, analyses it, and runs linting rules. These rules may trigger warnings or errors to let you know if your code is right or wrong.

Example:

```js
// ❌ Oops, what is multiply?
const output = multiply(1, 2);
```

ESLint wouldn’t know what add refers to and would throw an error at you. You need to explicitly declare add to correct it:

```js
// ✅ Correct
function multiply() {}
const output = multiply(1, 2);
```

**Install ESLint:**

<u>Globally Installation</u>

```sh
$ npm install eslint -g
```

**OR**

<u>Project Installation</u>

```sh
$ npm install eslint eslint-plugin-react lint-staged --save-dev
```

**NOTE:** 

If you are using VS code, then install the plugin: <LinkPost href="https://marketplace.visualstudio.com/items?itemName=dbaeumer.vscode-eslint" name="ESLint extension for VSCode" />. It will highlight errors and warnings directly in your code.

### Configure ESLint ⚙︎

ESLint is highly configurable. Just add `.eslintrc.js` file at the root of your project, and then you can run ESLint on any files you want.

If you want to skip eslint for some code then add the comment to your code: `// eslint-disable-next-line`

<u>Exmaple: </u>

```js
// eslint-disable-next-line
const result = multiple(1, 2);
```

**NOTE:**

Use it with caution, It’s very bad idea to disable ESLint every time it spots errors.

### ESLint CLI ☀︎

ESLint has a CLI to lint files. You can find all the options on <LinkPost href="https://eslint.org/docs/user-guide/command-line-interface#options" name="ESLint’s docs" />. The one you will use the most is the `--fix` option, which fixes the files when ESLint can.

<u>package.json:</u>

```json
{
  "scripts": {
		"pre-commit": "lint-staged",
    "lint": "eslint .", // lint the codebase
  },
	"lint-staged": {
    "*.+(js|jsx)": [
      "eslint --fix", // try to fix whatever it can fix
    ]
  }
}
```

### ESLint Configuration ⚙︎

<u>.eslintrc.js:</u>

```js
module.exports = {
  env: {
    browser: true,
    es2021: true,
  },
  extends: ["eslint:recommended", "plugin:react/recommended"],
  parserOptions: {
    ecmaFeatures: {
      jsx: true,
    },
    ecmaVersion: 12,
    sourceType: "module",
  },
  plugins: ["react"],
  rules: {
		"no-console": "warn",
		"import/first": "error"
    "react/prop-types": 0,
    "linebreak-style": ["error", "unix"]
  },
}
```

Once you add above snippet, you will get type error. To fix it add comment:

<u>.eslintrc.js:</u>

```js
// eslint-disable-next-line no-undef
module.exports = {
  ...
}
```

The above ESLint config meets the following requirements:

- Includes the recommended ESLint rules
- Includes `es6`’s and `browser`’s global variables
- Warns the user if it uses `console.log`
- Includes the <LinkPost href="https://github.com/benmosher/eslint-plugin-import" name="import" /> plugin and <LinkPost href="https://github.com/benmosher/eslint-plugin-import/blob/master/docs/rules/first.md" name="reports any imports that come after non-import statements" />
- Indicates the parser you’re using ES2020’s syntax

Checkout <LinkPost href="https://github.com/facebook/create-react-app/blob/master/packages/eslint-config-react-app/index.js" name="CRA" /> for more interesting config.

# Prettier 🗽

It helps in formatting the codebase. Using Prettier, we can follow common code style.

<u>Install Prettier:</u>

```sh
$ npm install prettier --save-dev
```

**NOTE:** 

If you are using VS code, then install the plugin: <LinkPost href="https://marketplace.visualstudio.com/items?itemName=dbaeumer.vscode-eslint" name="Prettier extension for VSCode" />. It will highlight errors and warnings directly in your code.

### Configure Prettier ⚙︎

It will format your code, but sometimes you won't like it. You can modify the prettier config via `.prettierrc`  or via `prettier` key in package.json.

- `singleQuote`: `true` if you want to use single quotes, `false` otherwise.
- `printWidth`: a number that specifies the line length that the printer will wrap on.
- `semi`: `true` if you want to print semicolons at the end of every statement, `false` otherwise.

Check <LinkPost href="https://prettier.io/docs/en/options.html" name="this" /> out for prettier option.

<u>.eslintrc.js:</u>

```js
extends: ["prettier"],
  plugins: ["prettier"],
  rules: {
    "prettier/prettier": "error",
    "linebreak-style": ["error", "unix"],
    "arrow-body-style": "off",
    "prefer-arrow-callback": "off",
  },
}
```

### Prettier CLI ☀︎

Using `--write` option which is similar to `--fix` in eslint. 

<u>package.json:</u>

```json
{
	 "lint-staged": {
    "*.+(js|jsx)": [
      "prettier --write --ignore-unknown"
    ],
    "*.+(json|css|md)": [
      "prettier --write"
    ]
  }
}
```

<mark> Enable formatOnSave in Vscode </mark>

Look for formatOnSave and check the checkbox, or add this line to `settings.json`:

```js
"editor.formatOnSave": true,
```

### Integrate Prettier with ESLint ⛩

**ESLint** has formatting rules too like max-len (similar to printWidth) or quotes.

**Prettier** replaces ESLint’s formatting rules but doesn’t replace code-quality rules.

Thus, you can integrate `Prettier` in your `ESLint` configuration by installing the following:

```sh
$ npm install eslint-config-prettier eslint-plugin-prettier --save-dev
```

`eslint-config-prettier` disables rules that conflict with Prettier. At the same time `eslint-plugin-prettier` adds the rule that format content using Prettier. You can enable this configuration by using the recommended one:

<u>.eslintrc.js:</u>

```js
{
  "extends": ["plugin:prettier/recommended"]
}
```

**Prettier Configuration:**

<u>.prettierrc.json:</u>

```js
{
  "printWidth": 85,
  "arrowParens": "always",
  "semi": false,
  "tabWidth": 2
}
```

Basically, it means that Prettier:

- Will wrap on line that exceeds 85 characters.
- Will always use parenthesis around arrow functions, even if there is one argument.
- Won’t print semicolons at the end of every statement.
- Will use two spaces per indentation level.

**Lint and format at each commit 🗺**

You can lint and run a codebase, great. But does it mean that now you should lint and format your code whenever you want? No!

If you are using GIT, you can make use of <LinkPost href="https://git-scm.com/docs/githooks" name="Git hooks" /> to run ESLint and Prettier before each commit or each push.

# husky 🐶

It's not dog. We’re talking about the tool that allows you to set up Git hooks very easily.

Let’s say your `package.json` has the following scripts, and you want to run lint and format at each commit:

<u>package.json:</u>

```json
{
  "scripts": {
		"postinstall": "husky install && cd app && yarn install",
  },
  "devDependencies": {
    "husky": "^6.0.0",
  }
}
```

Then, you can add Git hooks in two easy steps:
1. Install husky 
2. Add pre commit


**1. Install husky **

```sh
$ npm install husky --save-dev
```

**2. Add pre commit**

You can add `pre-commit` to your project by using 2 approaches:

**Approach 1:**

Create `.husky` in root and pre-commit inside `.husky` folder:

**.husky/pre-commit:**

```js
#!/bin/sh
. "$(dirname "$0")/_/husky.sh"

yarn run pre-commit
```

**Approach 2:**

Insert the following code in your `package.json`:

<u>package.json</u>

```json
{
  "husky": {
    "hooks": {
      "pre-commit": "npm run lint && npm run format"
    }
  }
}
```

That’s all. At each commit, the command associated with pre-commit will be run. So your codebase will be linted and formatted.

`pre-commit` is the most used Git hook by far, but you can also use other hooks like `pre-push` or `post-commit`.

### lint-staged 🚀

The more your codebase will grow, the more linting and formatting will be longer. Imagine you have more than 1000 components. You don’t want to wait for ESLint to lint all your codebase, don’t you? In the end, the only files that need to be linted are the ones that just have been modified. For that, you can use <LinkPost href ="https://github.com/okonet/lint-staged" name="lint-staged" />.

**Install lint-staged:**

```sh
$ npm install --save-dev lint-staged
```

Then, you have to add a `lint-staged` key to your `package.json` file for the configuration. According to <LinkPost href="https://github.com/okonet/lint-staged" name="lint-staged docs" />, the configuration should be an object where each value is one or more commands to run, and its key is a glob pattern to use for these commands.

<u>package.json:</u>

```json
{
  "lint-staged": {
    "*.+(js|jsx)": "eslint --fix",
    "*.+(json|css|md)": "prettier --write"
  }
}
```

The above configuration will allow you to run ESLint and fix both .js and .jsx files. In the same time, it will run Prettier on `.json, .css, .md` files.

Then, let’s tell ESLint we’ll use Prettier's configuration:

<u>**.eslintrc.js:**</u>

```js
{
  extends: ["prettier"],
  plugins: ["react", "prettier"]
}
```

Once it's done, you need to specify the options to Prettier. For that, either create a `.prettierrc.json` file or add a `prettier` key to the `package.json`. We’ll choose the first option:

<u>**.prettierrc.json:**</u>

```json
{
  "semi": false,
  "singleQuote": false,
  "tabWidth": 2,
  "printWidth": 80
}
```

Let’s add the `pre-commit` hook on staged files. We need to install both `husky` and `lint-staged` in the devDependencies for that:

```sh
$ npm install husky lint-staged --save-dev
```

Then, we’ll add the `pre-commit` hook itself by adding a `husky` key to `package.json`:

<u>package.json</u>

```json
{
  "husky": {
    "hooks": {
      "pre-commit": "lint-staged"
    }
  }
}
```

If we leave this as-is, it will fail because we haven’t specified the configuration for lint-staged, so let’s do it right away:

<u>**.eslintrc.js:**</u>

```js
{
  "lint-staged": {
    "*.+(js|jsx)": [
      "eslint --fix",
      "prettier --write --ignore-unknown"
    ],
    "*.+(json|css|md)": [
      "prettier --write"
    ]
  }
}
```

Here, you use ESLint to lint and format JS and JSX files. You also use Prettier to format json, css and markdown files. You’re perfectly set up. 

Here is the full `package.json` file:

<u>package.json</u>

```json
{
  "name": "react-eslint-prettier-app",
  "version": "0.1.0",
  "private": true,
  "dependencies": {
    ...
  },
  "scripts": {
    "postinstall": "husky install && cd app && yarn install",
		"test": "cd app && yarn test",
		"pre-commit": "lint-staged",
		...
  },
  "husky": {
    "hooks": {
      "pre-commit": "lint-staged"
    }
  },
  "lint-staged": {
    "*.+(js|jsx)": [
      "eslint --fix",
      "prettier --write --ignore-unknown"
    ],
    "*.+(json|css|md)": [
      "prettier --write"
    ]
  }
  "devDependencies": {
		"eslint": "^7.24.0",
    "eslint-config-prettier": "^8.1.0",
    "eslint-plugin-prettier": "^3.3.1",
    "eslint-plugin-react": "^7.23.2",
    "husky": "^6.0.0",
    "lint-staged": "^10.5.4",
    "prettier": "2.2.1",
  }
}
```

<u>.eslintrc.js:</u>

```js
// eslint-disable-next-line no-undef
module.exports = {
  env: {
    browser: true,
    es2021: true,
  },
  extends: ["eslint:recommended", "plugin:react/recommended", "prettier"],
  parserOptions: {
    ecmaFeatures: {
      jsx: true,
    },
    ecmaVersion: 12,
    sourceType: "module",
  },
  plugins: ["react", "prettier"],
  rules: {
    "prettier/prettier": "error",
    "react/prop-types": 0,
    "linebreak-style": ["error", "unix"],
    "arrow-body-style": "off",
    "prefer-arrow-callback": "off",
  },
}
```

<mark>NOTE:</mark>

After making above changes, if the code doesn't work then restart your code editor.

### Reference 🧐

- <LinkPost href="https://thomlom.dev/setup-eslint-prettier-react" name="ESLint + Prettier by Thomlom Dev" />
