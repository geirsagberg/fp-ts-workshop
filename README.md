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

Cool stuff:

https://github.com/microsoft/TypeScript/issues/1213
