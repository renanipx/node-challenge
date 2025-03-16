// Day 9: Middleware in Express
// Use middleware functions in Express

const express = require('express');
const app = express();

// Custom authentication middleware
const authenticate = (req, res, next) => {
  const user = req.headers['user'];
  if (user && user === 'admin') {
    next(); // User is authenticated, proceed to the next middleware or route
  } else {
    res.status(403).send('Forbidden: You are not authenticated');
  }
};

// Using the custom middleware
app.use('/admin', authenticate);

// Admin route (only accessible if authenticated)
app.get('/admin', (req, res) => {
  res.send('Welcome to the admin page');
});

app.listen(3000, () => {
  console.log('Server is running on port 3000');
});
