// 43.  What is Object Destructuring?
// Object Destructuring allows you to extract object properties into separate variables quickly and clearly.
const user = {
  name: "Tanya",
  age: 21,
  city: "Indore"
};

// Normally, you'd do this:
const name = user.name;
const age = user.age;
const city = user.city;

console.log(name, age, city); // Tanya 21 Indore

const User2 = {
  Fname: "Tanya",
  Fage: 21,
  Fcity: "Indore"
};

// Using object destructuring
const { Fname, Fage, Fcity } = user;

console.log(name, age, city); // Tanya 21 Indore

// 44.  Difference between prototypal and classical inheritance
class Vehicle {
  constructor(brand) {
    this.brand = brand;
  }
  drive() {
    console.log(`${this.brand} is driving`);
  }
}

class Car extends Vehicle {
  drive() {
    console.log(`${this.brand} is driving fast`);
  }
}

const car = new Car("BMW");
car.drive(); // BMW is driving fast

const vehicle = {
  drive: function() {
    console.log(`${this.brand} is driving`);
  }
};

const car2 = Object.create(vehicle);
car2.brand = "BMW";
car2.drive(); // BMW is driving

// 45.  What is a Temporal Dead Zone?
// Temporal Dead Zone (TDZ) is the time between entering a scope and the declaration of a let or const variable, during which accessing it causes a ReferenceError.

// 46. what is async and await 
// Async/Await is a modern way to handle Promises in JavaScript, making asynchronous code look synchronous and easier to read, especially for API calls, file I/O, and database operations.
// async: Marks a function as asynchronous, which means it always returns a Promise.
// await: Tells JavaScript: “Wait here until this Promise resolves, then continue.”
// Function that fetches user data from an API
async function getUser() {
  try {
    const response = await fetch("https://jsonplaceholder.typicode.com/users/1");
    const user = await response.json(); // convert response to JSON
    console.log("User Data:", user);
  } catch (error) {
    console.log("Error:", error);
  }
}

getUser();

// Explanation:
// fetch(...) returns a Promise — it’s asynchronous because it takes time to get data from the server.
// await fetch(...) → pauses the function until the fetch is complete.
// await response.json() → pauses again until JSON is ready.
// try/catch → handles any errors (like network issues).
// ✅ Clean, readable, top-to-bottom flow — much easier than chaining .then().

// using then and catch
fetch("https://jsonplaceholder.typicode.com/users/1")
  .then(response => response.json())
  .then(user => console.log("User Data:", user))
  .catch(error => console.log("Error:", error));
// Works, but notice how it gets nested and harder to read if you have multiple async calls.
// Async/await makes it look linear, like normal code.