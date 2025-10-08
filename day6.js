// 22.  What are object prototypes?
// An object prototype in JavaScript is a mechanism that allows objects to inherit properties and methods from other objects.
let animal = {
  speak: function() {
    console.log("Animal speaks");
  }
};

let dog = Object.create(animal);
dog.name = "Buddy";

dog.speak();  // Output: Animal speaks



// 23.  What are callbacks?
// A callback is a function passed as an argument to another function, executed after the first function completes.
function fetchData(callback) {
  setTimeout(() => {
    console.log("Data fetched");
    callback();
  }, 1000);
}

function afterFetch() {
  console.log("Processing data...");
}

fetchData(afterFetch);

// 24. Types of Errors in JavaScript

// Common types:
// SyntaxError: Invalid syntax.
// ReferenceError: Using undeclared variable.
// TypeError: Wrong data type used.
// RangeError: Number out of range.

// 25.  What is memoization?
// Memoization is a technique where you store the result of a function for a given input, so next time you get the same input, you return the cached result instead of recalculating

function add(a, b) {
  let cache = {};

  return function(a, b) {
    let key = a + "," + b;
    if (cache[key]) {
      console.log("Fetching from cache");
      return cache[key];
    } else {
      console.log("Calculating result");
      let result = a + b;
      cache[key] = result;
      return result;
    }
  };
}

const memoizedAdd = add();

console.log(memoizedAdd(2, 3)); // Calculating result → 5
console.log(memoizedAdd(2, 3)); // Fetching from cache → 5