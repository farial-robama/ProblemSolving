// Problem 15: Chunk an Array  [Medium]
// Description: Write a function chunkArray(arr, size) that splits an array into chunks of a given size.
// Example:
// Input: [1,2,3,4,5], 2  → Output: [[1,2],[3,4],[5]]
// Hint: Use a while loop with slice().

function chunkArray(arr, size) {
    const chunks = [];
    let i = 0;
    while (i < arr.length) {
        chunks.push(arr.slice(i, i + size));
        i += size;
    }
    return chunks;
}
console.log(chunkArray([1, 2, 3, 4, 5], 2)); 