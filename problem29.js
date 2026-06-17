// Problem 29: Async/Await Fetch Simulation  [Medium]
// Description: Write an async function getUserData(id) that simulates fetching user data by awaiting a Promise that resolves after 500ms with a mock user object.
// Example:
// await getUserData(1);// returns {id:1, name:'Test User'}
// Hint: Use async/await with a Promise that wraps setTimeout.

async function getUserData(id) {
    return new Promise(resolve => {
        setTimeout(() => {
            resolve({ id: id, name: 'Test User' });
        }, 500);
    });
}

getUserData(1).then(user => console.log(user));
