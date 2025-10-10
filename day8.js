//Que30. What do you mean by BOM?
// BOM stands for Browser Object Model.
// It allows JavaScript to interact with the browser (not the webpage).
// Think of it like:
// The DOM lets you work with the webpage (HTML),
// while the BOM lets you work with the browser window itself.

// alert("Welcome!");          // BOM - popup in browser
// console.log(location.href); // BOM - shows current URL

// If there were no BOM, JavaScript would be limited only to the webpage content — the DOM (Document Object Model).
// That means:
// You could still change text, styles, or HTML.
// ❌ But you couldn’t show alerts, redirect pages, or check screen width.
// BOM lets JavaScript talk to the browser — things like alerts, redirects, and history navigation.
// Without BOM, JS could only change the webpage (DOM), not interact with the browser itself.”


// Que-31.  What is the distinction between client-side and server-side JavaScript?
// Client-side JavaScript runs in the user’s browser (like Chrome, Firefox, Edge).
// It’s mainly used to make web pages interactive and dynamic — without needing to reload the page.
// It controls what the user sees and how they interact with the webpage.
 function changeText() {
        document.getElementById("msg").innerText = "You clicked the button!";
}

// Server-side JavaScript runs on the server, before anything is sent to the browser.
// It’s used to handle data, process requests, and connect to databases — basically all the behind-the-scenes work.
// The most popular example is Node.js (JavaScript running on the server).
// server.js

const http = require('http');
http.createServer((req, res) => {
  res.write("Hello from Server-Side JavaScript!");
  res.end();
}).listen(3000);

console.log("Server running on http://localhost:3000");

// 32.  What are arrow functions?
// Arrow functions are a concise way to write functions using =>.
// They automatically bind this from their parent

const add = (a,b) => {
    return a+b;
}

console.log(add(5,6));

// imp note -> Regular functions: The this keyword depends on who calls the function.
// Arrow functions: The this keyword depends on where the function was defined (lexical scope), and does NOT change.
// example - regular function this 
function showThis() {
    console.log(this);
}

// Called when page loads
showThis(); // this = window

// Called on button click
document.getElementById("btn").onclick = showThis;
// this = <button id="btn">Click Me</button>

// On page load: showThis() is called by the window, so this = window.
// On button click: showThis() is called by the button, so this = button.
// this changes depending on the caller.


// example arrow function this
const showThisArrow = () => {
    console.log(this);
}

// Called when page loads
showThisArrow(); // this = window

// Called on button click
document.getElementById("btn").onclick = showThisArrow;
// this = window (still!) because arrow function uses surrounding scope
// The arrow function does not have its own this.
// It uses this from the scope where it was defined.
// In this case, it was defined in the global scope (window), so this = window both times.

// Que 33.  What do mean by prototype design pattern?
// The Prototype pattern lets you create new objects by copying an existing object instead of building it from scratch.
// Prototype object
const carPrototype = {
    brand: "Toyota",
    color: "White",
    clone: function() {
        return { ...this }; // create a copy
    }
};

// Create new cars by cloning
const car1 = carPrototype.clone();
car1.color = "Red";

const car2 = carPrototype.clone();
car2.brand = "Honda";

console.log(car1); // { brand: 'Toyota', color: 'Red', clone: [Function] }
console.log(car2); // { brand: 'Honda', color: 'White', clone: [Function] }
// "Prototype pattern creates new objects by cloning existing ones to save time and resources."
// { ...this } is called the spread operator — it creates a new object and copies all properties of this into it.