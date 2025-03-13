// Day 4: Simple HTTP Server
// Goal
// Create and run a simple HTTP server using the built-in http module
// Tasks
// 1. Introduction to HTTP Module
// The http module provides functionalities to create an HTTP server and handle HTTP requests and responses.
// 2. Creating an HTTP Server
// Create a file named server.js and implement the code to create a http server on port 3000. Send 'Hello World!' as response
// Test your server by opening your browser and navigating to http://localhost:3000/. You should see Hello World!.

// Load the http module to create an HTTP server.
const http = require('http');

// Configure the HTTP server to respond with 'Hello World!' for every request.
const server = http.createServer((req, res) => {
  // Set the HTTP response header to indicate content type
  res.writeHead(200, { 'Content-Type': 'text/plain' });
  
  // Send the response body as 'Hello World!'
  res.end('Hello World!');
});

// The server listens on port 3000 and logs a message when it starts.
server.listen(3000, () => {
  console.log('Server running at http://localhost:3000/');
});