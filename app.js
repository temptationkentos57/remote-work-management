const express = require('express');
const cors = require('cors');
const bodyParser = require('body-parser');

const app = express();
app.use(cors());
app.use(bodyParser.json());

app.use((req, res, next) => {
  console.log(`${req.method} ${req.url}`);
  next();
});

app.get('/tasks', (req, res) => {
  res.json([{ id: 1, title: 'Task 1', completed: false }]);
});

module.exports = app;