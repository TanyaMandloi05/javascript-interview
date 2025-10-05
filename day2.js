//Que 5 5.  Difference between var and let and keyword in javascript.
// 1.) var has function scope and let has block scope 
// 2.) var can be redeclare and reintialize while let can't be redeclare
// 3.) var hoisted and intialize as undefined while let hoisted but do not intialize

var name = "tanya";
var name = "kirti"; //cannot through error
console.log(name);

let surname = "mandloi"; 
let surname = "mandloi"; //through error
console.log(surname);

function demo() {
    if(true) {
        var x = 10;
        let y = 10;
    }
     
    console.log(y); //y can't be access let has block scope
    console.log(x); //x can access var has function scope
}

demo();

//Que 6.  Explain Implicit Type Coercion in javascript.

//ans- implicit conversion is when JavaScript automatically changes the data type of a value during operations like addition, comparison, or condition checks in addition it concatinate and in other operation it will perform mathematical operations 

let book = "rv sharma";
let num = 2;
console.log(book+num); //rv sharma2

let num1 = "tanya";
let num2 = '5';
console.log(num2-num1); //NaN string cannot be converted to number 

//Explicit conversion is when you intentionally change a value’s type using built-in functions.
console.log(Number("42"));     // 42
console.log(String(100));      // "100"
console.log(Boolean(0));       // false

//Que7.Is javascript a statically typed or a dynamically typed language?
// ans - javaScript is Dynamically Typed
// That means:
// - You don’t need to declare a variable’s type (like int, string, etc.)
// - The type is checked at runtime, not during coding or compiling
// - A variable can change its type anytime

// In statically typed languages, you must tell the computer what kind of data (like number, text, etc.) a variable will hold before you run the program.


let a = 23;           // a is a number
a = "Hello World!";   // now a is a string

//Que 8.  What is NaN property in JavaScript?
// ans- NaN property represents the “Not-a-Number” value. It indicates a value that is not a
// legal number.
// typeof of NaN will return a Number.
// To check if a value is NaN, we use the isNaN() function,
