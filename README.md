# Unexpected NaN Result in JavaScript Function

This repository demonstrates a common JavaScript error involving the unexpected result `NaN` (Not a Number) when performing arithmetic operations with `null` values.

## Bug Description
The provided JavaScript code demonstrates a function `bar` that calls another function `foo`. `foo` simply adds two numbers together. However, when `null` is passed as an argument to `bar`, the result is `NaN` because addition with `null` in JavaScript results in type coercion that leads to `NaN`.

## Bug Reproduction
1. Clone the repository.
2. Run the `bug.js` file using Node.js: `node bug.js`
3. Observe the unexpected `NaN` output when `null` is passed as an argument.

## Solution
The solution involves adding input validation or using a default value for `null` arguments to the function `foo` to prevent the unexpected `NaN` result. A better practice is also to explicitly check for `null` values using `typeof` or other comparison operators before any arithmetic operations.