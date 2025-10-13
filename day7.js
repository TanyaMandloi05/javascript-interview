// 27. Constructor Function
// Definition:
// A constructor function is used to create multiple objects with the same structure (properties & methods).
// Example:

function Person(name, age) {
  this.name = name;
  this.age = age;
}

const person1 = new Person("Tanya", 21);
const person2 = new Person("Aarav", 22);

console.log(person1.name); // Output: Tanya


// Here, Person is a constructor function, and new creates new object instances.
// 28. DOM (Document Object Model)
// Definition:
// DOM represents the structure of a webpage as a tree of objects, allowing JavaScript to interact with and modify HTML elements.
// Example:

/*<p id="demo">Hello</p>

<script>
  document.getElementById("demo").innerText = "Hello, Tanya!";
</script>*/


// JavaScript accesses the <p> element through the DOM and changes its text content.

// 29. charAt() Method

// Definition:
// charAt(index) returns the character at the specified position in a string.

// Example:

let word = "JavaScript";
console.log(word.charAt(4)); // Output: S
// It retrieves the character at index 4 (remember, index starts from 0).