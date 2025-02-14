function foo(a, b) {
  a = a === null ? 0 : a; // Handle null values by assigning 0
  b = b === null ? 0 : b; // Handle null values by assigning 0
  return a + b;
}

function bar(x, y) {
  return foo(x, y) * 2;
}

console.log(bar(2, 3)); // Output: 10
console.log(bar(null, 3)); // Output: 6
console.log(bar(2, null)); // Output: 4
console.log(bar(null, null)); // Output: 0