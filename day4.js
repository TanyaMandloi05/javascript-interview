//Que - 13.  Explain “this” keyword.
// In JavaScript, the this keyword refers to the object that is currently invoking the function.
// In this example, this inside the greet method refers to the obj because the method is called as obj.greet().
// When you assign obj.greet to a standalone function like greetFn, this would normally lose its binding. But by using .bind(obj), you explicitly set this to always refer to obj, preserving the correct context.
// this is used to access object properties without this we cannot access it within the object 

obj = {
    name:"tanya",
    greet: function() {
        return `Hello, ${this.name}`
    }
};

// const greetFn = obj.greet stand alone function
const greetFn = obj.greet.bind(obj);

console.log(greetFn());

console.log(obj.greet());

// 14.  Explain call(), apply() and, bind() methods.
// ans-1.)  call() is like borrowing a function from one object and using it with another
// The call() method is a built-in function in JavaScript that allows you to invoke a function with a specific this value 

let person1 = {
    name: "tanya",
    Age: 21,
    feild: "software engineer",

    printDetails: function() {
        // 'this' refers to the object that calls this method.
        console.log(`your name is ${this.name} and your age is ${this.Age}`);
    }
};

person1.printDetails(); 
// Here, 'this' refers to person1.

// Output:
// your name is tanya and your age is 21


let person2 = {
    name: "kirti",
    Age: 18,
    feild: "software engineer",
};

// call() allows us to borrow a method from another object.
// Here, we call person1's printDetails method using person2 as 'this'.

person1.printDetails.call(person2);

// Output:
// your name is kirti and your age is 18

//2.) Apply- apply() is used to call a function and set this, just like call(), but it takes arguments as an array.
// Object 1
let person3 = {
    name: "rohit",
    Age: 21,
    feild: "system designer",
};

// Creating a function outside the object
let printInfo = function(state, country) {

    // 'this' refers to the object passed using call() or apply().
    console.log(`your name is ${this.name} and you are from ${state} in ${country}`);
};

// call() passes arguments individually.
printInfo.call(person3, "mp", "India");

// Output:
// your name is rohit and you are from mp in India


// Object 2
let person4 = {
    name: "armaan",
    Age: 18,
    feild: "ui/ux designer",
};

// apply() passes arguments as an array.
printInfo.apply(person4, ["delhi", "India"]);

// Output:
// your name is armaan and you are from delhi in India



//3.) we can make copy of function in  bind and we can call it latter  
let newFun = printInfo.bind(person4, "mumbai","India");
newFun();

//conclusion -> - All three are used to set the value of this inside a function.
// - They allow you to borrow methods from one object and use them with another.
// - They help in function reuse and dynamic context binding.

//Que 15. What is the difference between exec () and test () methods in javascript?
//Ans -  test() Checks if a pattern exists in a string.Returns true or false.

let pattern = /hello/;
console.log(pattern.test("hello world")); // true
console.log(pattern.test("hi there"));    // false


//exec()-Finds the match and gives details about it.

let pattern2 = /hello/;
let result = pattern.exec("hello world");
console.log(result[0]);      // "hello"
console.log(result.index);   // 0
console.log(result);

//Que 16.  What is currying in JavaScript?
//Ans- Currying means changing a function so it takes one input at a time, instead of all inputs at once.
// It transforms a function like add(a, b, c) into a chain of functions like add(a)(b)(c).
// This is useful when you don’t have all the data at once—each part of the function can wait for its input and run only when everything is ready.

// Currying means changing a function so it takes one input at a time, instead of all inputs at once.
// It transforms a function like add(a, b, c) into a chain of functions like add(a)(b)(c)

function sendEmail(to) {
    // Outer function takes the receiver's email/name.
    return function(subject) {
        // Second function takes the email subject.
        return function(body) {
            // Inner function takes the email body.
            console.log(`sending email to ${to} with subject ${subject} : ${body}`);
        };
    };
}

// Step 1: Calls sendEmail() and stores the returned function.
// to = "tanya"
let step1 = sendEmail("tanya");

// Step 2: Calls the second function and stores the returned function.
// subject = "order confirmation"
let step2 = step1("order confirmation");

// Step 3: Calls the third function with the email body.
// body = "hey tanya here is something for you"
step2("hey tanya here is something for you");

// Output:
// sending email to tanya with subject order confirmation : hey tanya here is something for you
