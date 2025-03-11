// Day 3: Console
// Goals
// Using console for Debugging
// Tasks
// 1. Introduction to console
// Provides a simple debugging console
// Common methods: console.log(), console.error(), console.warn(), console.time(), console.timeEnd(), console.trace()
// 2. Use console
// Create a file named consoleExample.js and use the above methods in your code.

// Start the timer to measure the performance of this function
console.time("Function Timer");

// Log a normal message
console.log("Starting the debugExample function...");

// Log a warning message
console.warn("This is a warning message. Check your logic!");

// Simulating a potential error
let value = null;
if (!value) {
    // Log an error message
    console.error("An error occurred: Value is null!");
}

// Calling another function to show the stack trace
nestedFunction();

console.timeEnd("Function Timer");


function nestedFunction() {
    // Log a stack trace showing where this function was called from
    console.trace("Stack trace from nestedFunction:");
}