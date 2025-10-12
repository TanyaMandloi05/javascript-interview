// 35. What is the rest parameter and spread operator?
// rest operator collect all the arguments into an array(Used inside functions to gather all remaining arguments into a single array.)


// example for rest
function add(...numbers) {
  console.log(numbers); // [10, 20, 30]
  let total = 0;
  for (let num of numbers) {
    total += num;
  }
  console.log("Total:", total);
}
add(10, 20, 30);

// Spread -> takes items from array and properties from object and spread them out (Used to expand elements of arrays or objects into individual values)
let arr1 = [1, 2, 3];
let arr2 = [4, 5, 6];
console.log(...arr1, ...arr2);

// 36.) How many different ways can we create an object in JavaScript?
// there are mainly 5 ways let understand one by one
// 1.) Using Object Literal { } (Most Common Way)
//  Easiest and most used way.
//  You directly define key–value pairs inside curly braces.
const student = {
  name: "Tanya",
  age: 21,
  course: "MCA"
};
console.log(student.name); // Tanya

// 2.) Using new Object()
// Creates an empty object first, then adds properties one by one
const car = new Object();
car.brand = "Toyota";
car.model = "Innova";
car.year = 2024;
console.log(car);

// 3. Using a Constructor Function
// Used to create multiple similar objects using a function as a blueprint.
function Person(name, age) {
  this.name = name;
  this.age = age;
}

const person1 = new Person("Tanya", 21);
const person2 = new Person("Riya", 22);
console.log(person1.name); // Tanya

// 4.) Using Object.create()
// Creates a new object using another object as its prototype.
const animal = {
  type: "mammal",
  sound() {
    console.log("Makes sound");
  }
};

const dog = Object.create(animal);
dog.name = "Bruno";
dog.sound(); 
console.log(dog.type);
console.log(dog);

// 5. Using  Class
// Modern way 
// Easier, cleaner, and supports inheritance.
class Student {
  constructor(name, age) {
    this.name = name;
    this.age = age;
  }

  greet() {
    console.log(`Hello, my name is ${this.name}`);
  }
}

const s1 = new Student("Tanya", 21);
s1.greet(); // Hello, my name is Tanya

// Que 37.  What is the use of promises in javascript?
// In JavaScript, Promises are used to handle asynchronous operations — like fetching data from an API, reading a file, or waiting for a timer — without blocking the rest of your code.
// They help you write code that runs in order, even when some parts take time to complete (like a network call).
// Before promises, developers used callback functions, which often created messy “callback hell”. Promises make async code cleaner, more readable, and easier to manage.
// Example
fetch("https://jsonplaceholder.typicode.com/users")
  .then(response => response.json())
  .then(data => console.log("Users:", data[0]))
  .catch(error => console.log("Error fetching users:", error));

// what if there is no promise and callback ? 
// Your program doesn’t pause to wait for the server’s response.
// Result: you try to use data that doesn’t exist yet — classic bug.

// Que 38.  What are classes in javascript?
// A class in JavaScript is basically a blueprint for creating objects.
// It defines how an object should look — what properties (data) and methods (functions) it should have.
// Classes make it easier to create multiple objects with similar structure and behavior, instead of writing the same code again and again.

// Defining a class
class Car {
  // constructor is used to initialize object properties
  constructor(brand, color) {
    this.brand = brand;
    this.color = color;
  }

  // method (function inside class)
  start() {
    console.log(`${this.brand} car started! 🚗`);
  }

  showColor() {
    console.log(`This car is ${this.color} in color.`);
  }
}

// Creating objects (instances) from the class
const car1 = new Car("Tesla", "Red");
const car2 = new Car("BMW", "Black");

// Using class methods
car1.start();       // Output: Tesla car started! 
car1.showColor();   // Output: This car is Red in color.

car2.start();       // Output: BMW car started! 
car2.showColor();   // Output: This car is Black in color.
