const express = require('express');
const cors = require('cors');
const bodyParser = require('body-parser');

const app = express();
app.use(cors());
app.use(bodyParser.json());

app.use((req, res, next) => {
  console.log(`${req.method} request made to ${req.url}`);
  next();
});

app.get('/tasks', (req, res) => {
  res.json({ status: 'success', data: [{ id: 1, title: 'Task 1', completed: false }] });
});

// 404 Not Found handler
app.use((req, res) => {
  res.status(404).json({ status: 'error', message: 'Not Found' });
});

// Export the Express app
module.exports = app;