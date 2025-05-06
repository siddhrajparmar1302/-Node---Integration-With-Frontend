const mongoose = require("mongoose");

const todoSchema = new mongoose.Schema({
  employeeName: {
    type: String,
    required: true,
  },
  task: {
    type: String,
    required: true,
  },
  status: {
    type: String,
    enum: ['pending', 'completed'],
    default: 'pending',
  },
});

module.exports = mongoose.model("Todo", todoSchema);
