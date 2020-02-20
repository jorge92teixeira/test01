const mongoose = require('mongoose');

const TaskSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true,
  },
  dueDate: {
    type: Date,
    required: true,
  },
  completionDate: {
    type: Date,
    required: true,
  },
  status: {
    type: String,
    required: true,
  },
}, { timestamps: true });

module.exports = mongoose.model('Task', TaskSchema);