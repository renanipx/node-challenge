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