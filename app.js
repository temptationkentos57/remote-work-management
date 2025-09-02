const express = require('express');
const cors = require('cors');
const bodyParser = require('body-parser');

const app = express();
app.use(cors());
app.use(bodyParser.json());

app.get('/tasks', (req, res) => {
  res.json([{ id: 1, title: 'Nhiệm vụ 1', completed: false }]);
});

module.exports = app;