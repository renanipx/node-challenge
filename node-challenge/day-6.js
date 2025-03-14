// Day 6: File System Module Basics
// Node.js provides a built-in module, fs (File System), to interact with the file system. Explore how to read, write, and manage files and directories.

// Tasks
// Read and write text files using both synchronous and asynchronous methods
// Append data to files
// Handle common file errors
// Create and read directories, and explore directory manipulation functions

const fs = require('fs');

// 1. Read and write text files

// Asynchronous Method to Read File
fs.readFile('file.txt', 'utf8', (err, data) => {
    if (err) {
        console.error('Error reading the file (Asynchronous)', err);
    } else {
        console.log('File content (Asynchronous):', data);
    }
});

// Asynchronous Method to Write File
const content = 'Hello, this is some text in the file.';
fs.writeFile('file.txt', content, 'utf8', (err) => {
    if (err) {
        console.error('Error writing to the file (Asynchronous)', err);
    } else {
        console.log('File written successfully (Asynchronous)!');
    }
});

// Synchronous Method to Read File
try {
    const dataSync = fs.readFileSync('file.txt', 'utf8');
    console.log('File content (Synchronous):', dataSync);
} catch (err) {
    console.error('Error reading the file (Synchronous)', err);
}

// Synchronous Method to Write File
try {
    fs.writeFileSync('file.txt', content, 'utf8');
    console.log('File written successfully (Synchronous)!');
} catch (err) {
    console.error('Error writing to the file (Synchronous)', err);
}

// 2. Append data to files

// Asynchronous Append Data
const additionalData = '\nAdditional text.';
fs.appendFile('file.txt', additionalData, 'utf8', (err) => {
    if (err) {
        console.error('Error appending data to the file (Asynchronous)', err);
    } else {
        console.log('Data appended to the file (Asynchronous)!');
    }
});

// Synchronous Append Data
try {
    fs.appendFileSync('file.txt', additionalData, 'utf8');
    console.log('Data appended to the file (Synchronous)!');
} catch (err) {
    console.error('Error appending data to the file (Synchronous)', err);
}

// 3. Handle common file errors (Handled in the examples above)

// 4. Create and read directories, and explore directory manipulation functions

// Create a directory (Asynchronous)
fs.mkdir('new_directory', { recursive: true }, (err) => {
    if (err) {
        console.error('Error creating directory (Asynchronous)', err);
    } else {
        console.log('Directory created successfully (Asynchronous)!');
    }
});

// Create a directory (Synchronous)
try {
    fs.mkdirSync('new_directory', { recursive: true });
    console.log('Directory created successfully (Synchronous)!');
} catch (err) {
    console.error('Error creating directory (Synchronous)', err);
}

// Read the contents of a directory (Asynchronous)
fs.readdir('new_directory', (err, files) => {
    if (err) {
        console.error('Error reading directory (Asynchronous)', err);
    } else {
        console.log('Files in directory (Asynchronous):', files);
    }
});

// Read the contents of a directory (Synchronous)
try {
    const filesSync = fs.readdirSync('new_directory');
    console.log('Files in directory (Synchronous):', filesSync);
} catch (err) {
    console.error('Error reading directory (Synchronous)', err);
}

// Delete a directory (Asynchronous)
fs.rmdir('new_directory', (err) => {
    if (err) {
        console.error('Error removing directory (Asynchronous)', err);
    } else {
        console.log('Directory removed successfully (Asynchronous)!');
    }
});

// Delete a directory (Synchronous)
try {
    fs.rmdirSync('new_directory');
    console.log('Directory removed successfully (Synchronous)!');
} catch (err) {
    console.error('Error removing directory (Synchronous)', err);
}

// Check if a directory or file exists (Asynchronous)
fs.exists('file.txt', (exists) => {
    console.log(exists ? 'The file exists (Asynchronous).' : 'The file does not exist (Asynchronous).');
});

// Check if a directory or file exists (Synchronous)
const existsSync = fs.existsSync('file.txt');
console.log(existsSync ? 'The file exists (Synchronous).' : 'The file does not exist (Synchronous).');
