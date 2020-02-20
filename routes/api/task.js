const express = require('express');
const Task = require('../../models/Task');
const auth = require('../../middleware/auth');
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

router.get('/', async (req, res) => {
  try {
    const tasks = await Task.find({ });
    return res.json(tasks.map((task) => task.toJSON()));
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

router.put('/:id', async (req, res) => {
  try {
    const task = await Task.findByIdAndUpdate(req.params.id, req.body, { new: true });
    return res.json(task);
  } catch (error) {
    console.error(error.message);
    return res.status(500).send('Server Error');
  }
});

router.delete('/:id', async (req, res) => {
  try {
    await Task.findByIdAndDelete(req.params.id);
    return res.json({ msg: 'Task deleted ' });
  } catch (error) {
    console.error(error.message);
    return res.status(500).send('Server Error');
  }
});

module.exports = router;