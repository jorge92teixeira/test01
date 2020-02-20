const express = require('express');

const app = express();

// Connect to database

// Body Parser
app.use(express.json({ extended: false }));

// Routes
app.use('/', (req, res) => {
  res.send('hello');
});


// Unknown Endpoint
app.get('*', (req, res) => {
  res.status(404).send('Unknown Endpoint');
});

module.exports = app;