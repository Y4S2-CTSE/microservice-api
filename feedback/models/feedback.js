const mongoose = require('mongoose'); //mongodb database

const feedbackSchema = new mongoose.Schema({
  userName: { type: String, required: true },
  message: { type: String, required: true },
  rating: { type: Number, min: 1, max: 5 },
  createdAt: { type: Date, default: Date.now }
});

module.exports = mongoose.model('Feedback', feedbackSchema);
