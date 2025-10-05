//Que-1.  What are the different data types present in javascript?
//ans - 1.) primitive data type -> which take single value as input we can check is type using typeof operator it includes string, number, boolean , undefined
let str = "tanya";
let num = 1;
let a = 2;
let b = 2;
console.log(a == b); 
let c = undefined;
let d = null;

//2.) non primitive data type -> which can take mulptiple value as input it includes objects and arrays

let obj1 = {
    name: "tanya",
    surname: "Mandloi",
    roll_no: 123,
}

let fruits = ["mango", "apple"];

// Que-2 explain hoisting in javascript
// ans -  Hoisting in JavaScript is the default behavior where variable and function declarations are moved to the top of their scope before code execution.” Note - Variable initializations are not hoisted, only variable declarations are
//  hoisted:

console.log(x);
var x = 10;

//this example will not through error instead it give undefined even if the variable x is decalre below log
// note in let and const it will through error because they will store in temporal dead zone

greet();
function greet() {
    console.log("hello");
}

// this will print hello even we call it first beacase the function decalaration and defination moved to the top while compiling


//Que 3- Why do we use the word “debugger” in javascript?
//ans - so debugger is a keyword that helps you find and fix mistakes (called bugs) in your code. It lets you pause your program, look at values, and step through your code line by line to see what’s happening.

const z = 5;
const y = 5;
debugger;
const sum = z+y;
console.log(sum);

//Que 4 - Difference between “ == “ and “ === “ operators.
// ans - == check only value while === check both value and data type

let val1 = "3";
let val2 = 3;
console.log(val1 == val2) //return true;
console.log(val1 === val2) //return false;