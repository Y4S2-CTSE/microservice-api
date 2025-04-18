const express = require('express');
const router = express.Router();
const {
  createFeedback,
  getAllFeedbacks,
  getFeedbackById,
  updateFeedback,
  deleteFeedback
} = require('../controllers/feedbackController');
const authenticateToken = require('../middleware/auth');

router.post('/', authenticateToken, createFeedback);
router.get('/', authenticateToken, getAllFeedbacks);
router.get('/:id', authenticateToken, getFeedbackById);
router.put('/:id', authenticateToken, updateFeedback);
router.delete('/:id', authenticateToken, deleteFeedback);

module.exports = router;
