// Que 9).  What do you mean by strict mode in javascript and characteristics of javascript
// strict-mode?
// Strict mode is a way to make your JavaScript code cleaner and safer
// It helps you:
// - Avoid using undeclared variables
// - Prevent accidental bugs
// - Write more secure and modern code

"use strict"
x = 5;
console.log(x);

//Que-10).Explain passed by value and passed by reference
//1.) pass by value ->  Pass by Value  A copy of the data is made.
//  Stored in a different memory location.
//  Changes don’t affect the original.
// primitive data type pass by value both values are independent point to diffrent memory locations
let a = 5;
let b = a;
b = a+5;
console.log(a);
console.log(b);

//2.) Pass by Reference -> A link to the original data is passed.
// Stored in the same memory location.
// Changes do affect the original.
// non primitive pass by refrence pass by refernce not independent

let obj1={
    name: "tanya",
    pass: "123",
}

let obj2 = obj1;

obj2.pass = "1234";
console.log(obj1);
console.log(obj2);

// Que-11. What is an Immediately Invoked Function in JavaScript?
// Ans- An Immediately Invoked Function Expression (IIFE) is a function that runs as soon as it is defined.
// It’s wrapped in parentheses and followed by another set of parentheses to invoke it instantly.
(function greek() {
    console.log("hello");
})();


// Que-12. Explain Higher Order Functions in javascript.
// A Higher-Order Function is a function that does one or both of these:
// - Takes another function as an argument
// - Returns a function as its result
// It treats functions like values — just like numbers or strings.

function multiplyBy(arg){
    return function(number){
        return number*arg // - Returns a function as its result
    }
}

let multiplyBytwo = multiplyBy(2);
let res = multiplyBytwo(5);
console.log(res);



function add(x, y, cb) {
    let result = x+y; // - Takes another function as an argument
    cb(result);
}

function showResult(result) {
    console.log(`sum of x and y is ${result}`);
}

add(2,3, showResult);
