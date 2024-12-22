# JavaScript Type Coercion Bug

This example demonstrates a common issue in JavaScript related to type coercion.  When adding a number and a string, JavaScript performs string concatenation instead of numerical addition.

## Bug Description
The function `myFunction` attempts to add two arguments. However, if one is a string, the behavior is unexpected. The solution below demonstrates how to avoid such unexpected behavior.

## How to Reproduce
1. Clone this repository.
2. Open `bug.js`.
3. Run the code using a JavaScript runtime (Node.js, browser console, etc.).
4. Observe the unexpected output: 55 instead of 10.

## Solution
Refer to `bugSolution.js` for a corrected version of the code.