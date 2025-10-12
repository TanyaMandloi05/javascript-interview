// Que 39. What are generator functions?
// Generator functions (function*) in JavaScript let you pause and resume execution using yield, making it easy to produce a series of values one by one instead of all at once.
function* numberGenerator() {
  console.log("Start");
  yield 1;
  console.log("After 1");
  yield 2;
  console.log("After 2");
  yield 3;
  console.log("After 3");
}

const gen = numberGenerator();
console.log(gen.next()); // Output: Start \n { value: 1, done: false }

// 41.  Why do we use callbacks?
// Callbacks in JavaScript are functions passed as arguments to other functions, used to run code after a task completes, especially in asynchronous operations.
function fetchData(callback) {
  setTimeout(() => {
    console.log("Data fetched from server");
    callback();
  }, 2000); // simulates 2 seconds delay
}

function processData() {
  console.log("Processing data...");
}

fetchData(processData);
// fetchData simulates fetching data from a server (takes 2 seconds).
// Instead of stopping the program, it calls processData after fetching completes