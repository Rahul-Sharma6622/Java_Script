// Synchronous in JavaScript (Easy Words)

// Meaning: In synchronous code, tasks run one after another.

// The next task waits until the previous task finishes.

// It’s like standing in a queue — you can’t move ahead until the person in front of you is done.


// console.log("Task 1");
// console.log("Task 2");
// console.log("Task 3");
// Output:

// Task 1 runs first.
// Only after it finishes, Task 2 starts.
// After Task 2, then Task 3.

// Asynchronous in JavaScript (Easy Words)

// Meaning: In asynchronous code, tasks don’t wait for the previous one to finish.

// While one task is running (like waiting for a timer or fetching data), JavaScript moves on to the next task.

// It’s like ordering food in a restaurant — you give the order, and while the chef cooks, you can talk to your friend. You don’t just stand still waiting.

// console.log("Task 1");

// setTimeout(() => {
//     console.log("Task 2 (after 2 seconds)");
// }, 2000);

// console.log("Task 3");

/* Here’s what happened:

Task 1 runs.

setTimeout starts a 2-second timer (JavaScript doesn’t wait — it keeps going).

Task 3 runs before the timer finishes.

After 2 seconds, Task 2 finally appears.*/

//callbacks in js
// A callback is simply a function that you pass as an argument to another function.
// The receiving function calls it later when it needs to.
// Used mostly in asynchronous code to run something after a task finishes.

function greet(name) {
    console.log("Hello " + name);
}

function processUserInput(callback) {
    let name = "Rahul";
    callback(name); // calling the callback function
}

processUserInput(greet);

function greet(name) {
    console.log("Hello " + name);
}

function processUserInput(callback) {
    let name = "Rahul";
    callback(name); // calling the callback function
}

processUserInput(greet);

function greet(name) {
    console.log("Hello " + name);
}

function processUserInput(callback) {
    let name = "Rahul";
    callback(name); // calling the callback function
}

processUserInput(greet);

// Callback in Asynchronous Code
console.log("Task 1");

setTimeout(function() {
    console.log("Task 2 (after 2 seconds)");
}, 2000);

console.log("Task 3");

// What is Callback Hell?
// Callback hell happens when you have too many nested callbacks.

getUserData(function(user) {
    getOrders(user.id, function(orders) {
        getOrderDetails(orders[0], function(details) {
            processPayment(details, function(payment) {
                console.log("Payment processed!");
            });
        });
    });
});


// How to Solve Callback Hell
// Modern JavaScript uses:

// Promises

// async/await

// Example with Promises:
getUserData()
  .then(user => getOrders(user.id))
  .then(orders => getOrderDetails(orders[0]))
  .then(details => processPayment(details))
  .then(() => console.log("Payment processed!"))
  .catch(error => console.error(error));

//   Example with async/await:
async function process() {
    try {
        let user = await getUserData();
        let orders = await getOrders(user.id);
        let details = await getOrderDetails(orders[0]);
        await processPayment(details);
        console.log("Payment processed!");
    } catch (error) {
        console.error(error);
    }
}
process();

// console.log("one");
// console.log("two");
// console.log("three");

// function hello() {
//     console.log("welcome hello ");
// }

// setTimeout(hello, 5000) //1second = 1000
// console.log("four");
// console.log("five");

// //callback
// function sum(a, b) {
//     console.log(a + b)
// }
// function calculator(a, b, sumCallBAck) {
//     sumCallBAck(a, b);

// }
// calculator(2, 8, sum);


// function getData(dataId){
//     console.log("data" , dataId);
// }
//i want to get data after 5 second
// function getData(dataId, getNextData) {
//     //2s
//     setTimeout(() => {
//         console.log("data", dataId);
//         if (getNextData) {
//             getNextData();
//         }
//     }, 5000);
// }

// getData(1, () => {
//     getData(2, () => {
//         getData(3)
//     })
// })

//promises
// let promise= new Promise((resolve,reject)=>{
//     console.log("I am promise")
//     resolve("success")
//     reject("some error occur");
// })

// const getPromise = () => {
//     return new Promise((resolve, reject) => {
//         console.log("I aam a promise")
//         //    resolve("success")
//         reject("network error")
//     })
// }

// let promise = getPromise();
// promise.then((res) => {
//     console.log("promise fulfilled", res)
// })

// promise.catch((err) => {
//     console.log("rejected", err)
// })