// Day 7: Routing in HTTP Server
// Implement simple routing for different HTTP endpoints
const http = require('http');

const server = http.createServer((req, res) => {
  // Set the response header
  res.setHeader('Content-Type', 'application/json');

  // Check the URL and method of the request
  if (req.method === 'GET' && req.url === '/') {
    res.statusCode = 200;
    res.end(JSON.stringify({ message: 'Welcome to the homepage!' }));
  } else if (req.method === 'GET' && req.url === '/about') {
    res.statusCode = 200;
    res.end(JSON.stringify({ message: 'This is the about page.' }));
  } else if (req.method === 'POST' && req.url === '/submit') {
    let body = '';
    req.on('data', chunk => {
      body += chunk;
    });
    req.on('end', () => {
      res.statusCode = 200;
      res.end(JSON.stringify({ message: 'Data received', data: JSON.parse(body) }));
    });
  } else {
    // Response for undefined routes
    res.statusCode = 404;
    res.end(JSON.stringify({ message: 'Route not found' }));
  }
});

server.listen(3000, () => {
  console.log('Server running on port 3000');
});
