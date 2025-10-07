// 18. Advantages of External JavaScript:
// 1.) - Keeps HTML, CSS, and JS in separate files for cleaner architecture
// 2.) one file can be used at multiple pages (reusability)
// 3.)Easier to update or debug code in one centralized file(maintainability)

// 19.) Scope in JavaScript
// - Definition
// Scope determines the accessibility of variables — where they can be read or modified in your code.
// - Types of Scope
// - Global Scope: Variables declared outside any function are accessible everywhere.
// - Local/Function Scope: Variables declared inside a function are only accessible within that function.
// - Block Scope (with let and const): Variables declared inside {} are confined to that block.

let globalVar = "I am global";

function testScope() {
  let localVar = "I am local";
  console.log(globalVar); // Accessible
  console.log(localVar);  // Accessible
}

console.log(globalVar); // Accessible
// console.log(localVar);  // ❌ Error: localVar is not defined

// Scope chain is how JavaScript looks for variables — it starts inside the function and keeps checking outer layers until it finds the variable or reaches the global scope.
let global = "I am global";

function outerFunc() {
  let outerVar = "I am outer";

  function innerFunc() {
    let innerVar = "I am inner";

    console.log(innerVar);   // ✅ Found in innerFunc
    console.log(outerVar);   // ✅ Found in outerFunc (parent)
    console.log(global);  // ✅ Found in global scope
  }

  innerFunc();
}

outerFunc();

// 20. Closures in JavaScript:
// A closure allows an inner function to access variables of its outer function even after the outer function has finished executing.
// without closures
function outer() {
  let message = "Hello Tanya";

  function inner() {
    console.log(message);
  }

  // inner is not returned or saved
}

outer(); // Runs and finishes
// inner(); // ❌ ReferenceError: inner is not defined


// with closures
function counter() {
  let count = 0;

  return function () {
    count++;
    console.log(count);
  };
}

const increment = counter(); // counter() runs and returns a function
increment(); // 1
increment(); // 2
increment(); // 3

// 21. Advantages of JavaScript:
// ➡ Fast, versatile, easy to learn, supports all browsers, and enables both frontend and backend development.
// - Interactive Web Pages
// - Cross-Platform Compatibility
// - Rich Ecosystem and Libraries
// - Tons of frameworks like React, Vue, and tools like jQuery simplify development.

