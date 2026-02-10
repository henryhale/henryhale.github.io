---
title: "Introducing Worstcase - A JavaScript Complexity Analyzer"
description: "Automatically see the time and space complexity of JavaScript code as you type."
date: "Oct 30 2025"
tags:
    - software
    - project
---

Understanding the time and space complexity of your code is crucial for writing performant applications. But manually analyzing every function can be tedious and error-prone. That's why I built [worstcase](https://github.com/henryhale/worstcase) - a tool that automatically computes algorithmic complexity and displays it right in your editor.

## How it works

The analyzer uses **Acorn**, a lightweight JavaScript parser, to build an Abstract Syntax Tree (AST) of your code. It then traverses each node, applying complexity analysis rules at the block level:

- **Sequential statements** - complexities are added
- **Nested loops** - complexities are multiplied
- **Conditional branches** - maximum complexity is taken
- **Built-in methods** - known complexity patterns are applied (e.g., `Array.sort()` is `O(nlog(n))`)

For unknown functions or external APIs, the analyzer makes conservative assumptions (typically O(1)) to keep analysis practical. The core algorithm focuses on control flow structures(loops, recursion, and conditionals) which are the primary drivers of algorithmic complexity in most JavaScript code.

The result? You get real-time feedback like `space O(n) time O(n²)` displayed inline, helping you spot performance bottlenecks instantly during code reviews or optimization sessions.

## Live demo

Try the [live demo](https://henryhale.github.io/worstcase-monaco-demo) with Monaco Editor integration; the same editor that powers VS Code. Paste your code and see complexity analysis appear in real-time with inline decorations. It is great for quick experiments, learning about algorithmic complexity, or sharing code examples with complexity annotations.

![Complexity decorations example](https://github.com/henryhale/worstcase-vscode/raw/master/media/screenshot.png)

## Two ways to use it

**1. Core NPM Package**

The [worstcase package on npm](https://npmjs.com/package/worstcase) provides the fundamental analysis engine that you can integrate into any JavaScript tooling. The following example takes a bubble sort implementation and logs it's space and time complexity.

```javascript
import { analyzeComplexity } from "worstcase"

const yourCode = `
function bubbleSort(arr) {
    for (let i = 0; i < arr.length; i++) {
        for (let j = 0; j < arr.length - 1; j++) {
            if (arr[j] > arr[j + 1]) {
                [arr[j], arr[j + 1]] = [arr[j + 1], arr[j]];
            }
        }
    }
    return arr;
}
`

const analysis = analyzeComplexity(yourCode)

console.log("time", analysis.overall.time) // time O(n²)
console.log("space", analysis.overall.space) // space O(n)
```

This is perfect for building custom tooling, CI/CD integrations, or code quality checks.

**2. VS Code Extension**

The full VS Code extension, ([worstcase-vscode](https://github.com/henryhale/worstcase-vscode)), brings complexity analysis directly into your daily workflow. As you write JavaScript, TypeScript, JSX, or TSX code, complexity annotations appear automatically after each function and loop. The decorations use VS Code's theme variables, ensuring they look native in any color scheme you prefer.

Features include:

- Real-time analysis as you type
- Support for JS, TS, JSX, and TSX
- Theme-aware decorations using VS Code CSS variables
- Zero configuration required
- Completely free and open source

Try it today: search `JavaScript Complexity Analyzer` in the VS Code marketplace.

## Conclusion

Whether you're optimizing a critical algorithm, teaching Big O notation, or conducting code reviews, JavaScript Complexity Analyzer helps you understand performance implications at a glance. Try it out and never wonder about your code's complexity again!
