console.log("Hello World!")
console.log('This directory is ' + __dirname)
console.log('This file name is ' + __filename)  

// Displaying the Node.js version
console.log('Node.js Version:', process.version);

// Displaying the current working directory
console.log('Current Working Directory:', process.cwd());

// Displaying the arguments passed to the process (skipping the first two)
const args = process.argv.slice(2);
console.log('Arguments passed to the process:', args);

// Displaying environment variables (example with PATH)
console.log('Environment Variable PATH:', process.env.PATH);

// Conditional check to see if a specific argument was passed to exit the process
if (args.includes('--exit')) {
    console.log('Argument --exit found, exiting the process with exit code 1...');
    process.exit(1); // Exits the process with exit code 1 (indicating error)
}

// Displays the memory usage of the process
const memoryUsage = process.memoryUsage();

console.log('Memory usage of the Node.js process:');
console.log(`RSS: ${memoryUsage.rss} bytes`);          // Total memory allocated to the process
console.log(`Heap Total: ${memoryUsage.heapTotal} bytes`); // Total memory allocated to the heap
console.log(`Heap Used: ${memoryUsage.heapUsed} bytes`);   // Memory actually used in the heap
console.log(`External memory: ${memoryUsage.external} bytes`); // Memory allocated outside the heap

// Otherwise, continue executing the process normally
console.log('Process will continue executing...');

// The execution may be interrupted right after this point if the --exit argument was passed
