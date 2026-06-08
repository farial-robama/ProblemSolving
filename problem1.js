// Problem 1: Swap Two Variables  [Easy]
// Description: Write a function that swaps the values of two variables without using a third variable.
// Example:
// Input: a = 5, b = 10Output: a = 10, b = 5
// Hint: Try using destructuring or arithmetic operators.

// Solution using destructuring
function swapUsingDestructuring(a, b) {
    [a, b] = [b, a];
    return [a, b];
}

// Solution using arithmetic operators
function swapUsingArithmetic(a, b) {
    a = a + b;
    b = a - b;
    a = a - b;
    return [a, b];
}
console.log(swapUsingDestructuring(5, 10));
console.log(swapUsingArithmetic(5, 10));

