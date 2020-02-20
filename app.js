const express = require('express');
const connectDB = require('./db');
const app = express();

// Connect to database
connectDB();

// Body Parser
app.use(express.json({ extended: false }));

// Routes
app.use('/api/task', require('./routes/api/task'));
app.use('/api/auth', require('./routes/api/auth'));

// Unknown Endpoint
app.get('*', (req, res) => {
  res.status(404).send('Unknown Endpoint');
});

module.exports = app;