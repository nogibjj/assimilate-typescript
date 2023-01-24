[![NodeJS with Typescript](https://github.com/nogibjj/assimilate-typescript/actions/workflows/npm-gulp.yml/badge.svg)](https://github.com/nogibjj/assimilate-typescript/actions/workflows/npm-gulp.yml)

# assimilate-typescript
Template for using Typescript

## Lesson 4:  Marco Polo Typescript Command-Line Tool

`cd marco-polo`


## Lesson 3:  Use command-line library?

Use a library for argument parsing and maybe build project with GitHub Actions

### Three key questions about Typescript Modules

* [Reference for modules](https://www.typescriptlang.org/docs/handbook/2/modules.html)
* [Playground is very helpful](https://www.typescriptlang.org/play)

* Q1:  "Syntax: What syntax do I want to use to import and export things?"
* Q2: "What is the relationship between module names (or paths) and files on disk?"
* Q3: "Module Output Target: What should my emitted JavaScript module look like?"

* `mkdir -p tsmoduleHello && cd tsmoduleHello`
* `touch hello.ts` and paste inside:

```typescript
// @filename: hello.ts
export default function helloWorld() {
  console.log("Hello, world!");
}
```
* `touch invoker.ts` and paste inside:

```typescript
import helloWorld from "./hello.js";
helloWorld();
```

* `touch maths.ts` and paste this in

```typescript
// @filename: maths.ts
export var pi = 3.14;
export let squareTwo = 1.41;
export const phi = 1.61;
 
export class RandomNumberGenerator {}
 
export function absolute(num: number) {
  if (num < 0) return num * -1;
  return num;
}
```

* `touch invoker2.ts` and paste inside

```typescript
import { pi, phi, absolute } from "./maths.js";
 
console.log(pi);
const absPhi = absolute(phi);
```

To run:

* `make all`
*  To run either one:  `node invoker.js` and `node invoker2.js`

## Lesson 3:  Continue process of learning about project/structure and modules

https://www.typescriptlang.org/docs/handbook/2/modules.html


## Lesson 2:

To Do:  Build a command-line tool that is a phrase repeater than runs in node.js
* `node phrase.js` 

## Lesson 1:

* [Official Typescript documentation](https://www.typescriptlang.org/docs/handbook/intro.html)
* Read official tooling:  https://www.typescriptlang.org/docs/handbook/typescript-tooling-in-5-minutes.html
* Use `npm` to get it
```bash
npm install -g typescript
```
* Build `greeter.ts`

To build a hello world you use node:

1. create `hello.js`
2. compile it `tsc hello.ts`
3. run it `node hello.js`
