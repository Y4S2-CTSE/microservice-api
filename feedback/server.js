const express = require('express');
const mongoose = require('mongoose');
const dotenv = require('dotenv');
const feedbackRoutes = require('./routes/feedbackRoutes');

dotenv.config();
const app = express();

app.use(express.json());
app.use('/api/feedbacks', feedbackRoutes);

// Add a simple health check endpoint
app.get('/health', (req, res) => {
  res.status(200).send('OK');
});

// Start the server first
const port = process.env.PORT || 8080;
const server = app.listen(port, '0.0.0.0', () => {
  console.log(`Server running on port ${port}`);
});

// Connect to MongoDB separately
const connectDB = async () => {
  try {
    await mongoose.connect(process.env.MONGO_URI);
    console.log('Connected to MongoDB');
  } catch (err) {
    console.error('MongoDB connection error:', err.message);
    // Don't exit the process, just retry
    console.log('Retrying connection in 5 seconds...');
    setTimeout(connectDB, 5000);
  }
};

connectDB();