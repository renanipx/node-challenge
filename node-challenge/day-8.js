// Day 8: Express Basics
// Set up an Express application and create routes

// Import the express module
const express = require('express');

// Create an instance of Express
const app = express();

// Define the port for the server to run
const port = 3000;

// Set up a basic route
app.get('/', (req, res) => {
  res.send('Hello, world! My Express app is running!');
});

// Another route
app.get('/about', (req, res) => {
  res.send('This is the about page of my Express app.');
});

// Route with URL parameters
app.get('/greet/:name', (req, res) => {
  const name = req.params.name;
  res.send(`Hello, ${name}! Welcome to my Express app.`);
});

// Route with query parameters
app.get('/search', (req, res) => {
  const { name, age } = req.query;
  res.send(`You are searching for: Name = ${name}, Age = ${age}`);
});

// Start the server on the defined port
app.listen(port, () => {
  console.log(`Server running at http://localhost:${port}`);
});