# Functional programming in TypeScript

In this workshop, we will learn the power of types in TypeScript, and then use that power responsibly to create our own strongly typed functional library.

## Part 0 - Prerequisites

- [Visual Studio Code](https://code.visualstudio.com/)
- When prompted, install recommended extensions
- Run `npm i`

## Part 1 - Native functions

EcmaScript 5 and newer versions already have quite a few functional operators as part of the language.

These are all automatically typed as part of the TypeScript built-in typings; for example, try the following:

```typescript
const values = [1, 2, 3]
const strings = values.map(x => 'string' * 1)
```

What is the type of strings?

That's right, `string[]`!

To explore the typings of these, Ctrl+Click `.map`, and you will see the content of `node_modules/typescript/lib/lib.es5.d.ts`. This file and others in the same folder are the built-in typings of TypeScript, and can be used as a reference for best practice when writing your own types.

## Part 2a - Write your own functional library

Do this part OR part 2b.

## Part 2b - Write typings for Lodash

### Cheats:

https://github.com/DefinitelyTyped/DefinitelyTyped/blob/master/types/lodash/fp.d.ts
https://github.com/DefinitelyTyped/DefinitelyTyped/tree/master/types/lodash/common

## Part 3 - `fp-ts`

Check out https://gcanti.github.io/fp-ts/

Follow this tutorial series: https://dev.to/gcanti/getting-started-with-fp-ts-setoid-39f3

## Cool stuff:

[GitHub issue tracking full monad support in TypeScript](https://github.com/microsoft/TypeScript/issues/1213)
[Article about FP in JS](https://www.freecodecamp.org/news/functional-programming-in-js-with-practical-examples-part-1-87c2b0dbc276/)
[Maybe in TypeScript](https://engineering.dollarshaveclub.com/typescript-maybe-type-and-module-627506ecc5c8)
