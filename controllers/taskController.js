const tasks = require('../routes/tasks');

const getTasks = (req, res) => {
  res.json(tasks);
};

const createTask = (req, res) => {
  // logic to create a task
};

module.exports = { getTasks, createTask };