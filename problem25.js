// Problem 25: Memoize a Function  [Medium]
// Description: Write a function memoize(fn) that caches the results of a function so repeated calls with the same input return the cached result.
// Example:
// const memoAdd = memoize(n => n + 10);memoAdd(5); // 15 (computed)memoAdd(5); // 15 (from cache)
// Hint: Use an object as a cache inside the outer function.

function memoize(fn) {
    const cache = {};
    return function(...args) {
        const key = JSON.stringify(args);
        if (key in cache) {
            return cache[key];
        }
        const result = fn(...args);
        cache[key] = result;
        return result;
    };
}
const memoAdd = memoize(n => n + 10);
console.log(memoAdd(5));