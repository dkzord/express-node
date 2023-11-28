const express = require('express');

const app = express();

// Middleware
app.use('/add', (req, res, next) => {
  res.send('<h1>Middleware type one</h1>');
});

app.use('/md', (req, res, next) => {
  res.send('<h1>Middleware type two</h1>');
});

// Routes
app.get('/', (req, res, next) => {
  res.status(200).send('<h1>Main router</h1>');
});

app.get('/users', (req, res, next) => {
  res.status(200).send('<h1>Users router</h1>');
});

// Server
app.listen(3333, () => {
  console.log('Server listening on port 3000');
});