// 50.What is the role of deferred scripts in JavaScript?
//Normally the browser stops everything and waits for the script to load and run before it does anything else on the page. This includes loading images, displaying text, or rendering the rest of the HTML content.
// For example, if you have a script in your HTML without the defer attribute, the browser will:
// Start loading the HTML page.
// Encounter a <script> tag.
// Stop and wait for the script to load and execute.
// Only after the script finishes will it continue loading and rendering the remaining HTML, like images, text, etc.
// When you add defer to the script tag, the browser doesn't stop everything. It loads the script in the background while still showing the page content, and the script only runs after the entire HTML document is fully loaded.


