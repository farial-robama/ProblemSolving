// Problem 20: Find Duplicate Values in Array of Objects  [Medium]
// Description: Given an array of objects, write a function findDuplicateNames(arr) that returns names that appear more than once.
// Example:
// Input: [{name:'Ali'},{name:'Sara'},{name:'Ali'}]Output: ['Ali']
// Hint: Use a frequency map (object) to count occurrences.

function findDuplicateNames(arr) {
    const nameCount = {};
    const duplicates = [];
    for (const obj of arr) {
        const name = obj.name;
        nameCount[name] = (nameCount[name] || 0) + 1;
    }
    for (const name in nameCount) {
        if (nameCount[name] > 1) {
            duplicates.push(name);
        }
    }
    return duplicates;
}
console.log(findDuplicateNames([{name:'Ali'},{name:'Sara'},{name:'Ali'}]));


