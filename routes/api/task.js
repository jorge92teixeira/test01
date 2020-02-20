const express = require('express');
const Task = require('../../models/Task');
const router = express.Router();

router.post('/', async (req, res) => {
  try {
    const newTask = new Task({
      name: req.body.name,
      dueDate: req.body.dueDate,
      completionDate: req.body.completionDate,
      status: req.body.status,
    });

    const task = await newTask.save();
    return res.json(task);
  } catch (error) {
    console.error(error.message);
    return res.status(500).send('Server Error');
  }
});

router.get('/:id', async (req, res) => {
  try {
    const task = await Task.findById(req.params.id);
    if (!task) {
      return res.status(404).json({ msg: 'Task not found' });
    }
    return res.json(task);
  } catch (error) {
    console.error(error.message);
    return res.status(500).send('Server Error');
  }
});

module.exports = router;