---
title: "Introducing MathFlow - A Robust Mathematical Expression Parser"
description: "Parse, evaluate and work with mathematical expressions with ease. Step-by-step solutions included."
date: "Nov 9 2025"
tags:
    - software
    - project
---

Writing mathematical expressions in code shouldn't feel like translating between two foreign languages.
When you write `2x + 3(y - 1)` on paper, why should you need to write `2*x + 3*(y - 1)` in your code?
MathFlow is a lightweight JavaScript library that bridges this gap, letting you write math the way mathematicians do and also provide you with a step-by-step solution.

## Overview

MathFlow understands mathematical expressions in their natural form.
It's designed around a simple principle:

> if you can write it on paper, you should be able to evaluate it in code.

```javascript
import { evaluate } from "@mathflowjs/mathflow"

// write math naturally
evaluate("2x + 3(y - 1)") // implicit multiplication
evaluate("sin(pi/4)") // trigonometric functions
evaluate("y = x^2") // variables and assignments
evaluate("sqrt(16) + log(100)") // built-in functions
```

The library handles standard arithmetic, trigonometric functions (sin, cos, tan), logarithms, power operations, and more.
It supports variable assignments, so you can build complex calculations step by step.
Behind the scenes, MathFlow uses an Abstract Syntax Tree (AST) to parse expressions with proper operator precedence, ensuring that `2 + 3 * 4` correctly evaluates to `14`, not `20`.

## Usage

MathFlow isn't trying to be a computer algebra system or a full programming language.
It has one job: _evaluate mathematical expressions accurately and efficiently._
This focused approach makes it perfect for:

- **Formula calculators** where users input mathematical expressions
- **Educational applications** that need to evaluate student-written formulas
- **Scientific computing interfaces** that require mathematical notation
- **Configuration systems** where formulas define behavior

The library is lightweight and has no dependencies, making it easy to integrate into any JavaScript project.
Install it with [npm](https://npmjs.com/package/@mathflowjs/mathflow):

```bash
npm install @mathflowjs/mathflow
```

Then use it immediately in your Node.js or browser applications.
The API is intentionally simple and most use cases only need the `evaluate()` function.

## Try it Yourself

Want to see MathFlow in action?
Head over to [mathflow.js.org](https://mathflow.js.org) where you'll find complete documentation and an interactive playground.
The [playground](https://mathflow.js.org/playground/) lets you experiment with different expressions,
see how they're tokenized, and view the results in real-time.

Whether you're building a scientific calculator, a math learning app,
or just need to evaluate user-provided formulas, MathFlow provides a clean, intuitive solution.
It respects mathematical conventions while being practical for real-world JavaScript development.

Check out the [documentation](https://mathflow.js.org) to learn more, or dive straight into the code on [GitHub](https://github.com/mathflowjs/mathflow).
MathFlow is open source under the MIT license, and contributions are always welcome.

---

🟦 npm - [@mathflowjs/mathflow](https://www.npmjs.com/package/@mathflowjs/mathflow)
🟦 docs - [mathflow.js.org](https://mathflow.js.org)
🟦 repo - [github.com/mathflowjs/mathflow](https://github.com/mathflowjs/mathflow)
