const express = require('express');
const router = express.Router();
const {
    getAllThoughts,
    getThoughtById,
    createThought,
    updateThought,
    deleteThought,
    createReaction,
    deleteReaction,
} = require('../controllers/thoughtController');

// Define routes with associated callback functions
router.get('/thoughts', getAllThoughts);
router.get('/thoughts/:thoughtId', getThoughtById);
router.post('/thoughts', createThought);
router.put('/thoughts/:thoughtId', updateThought);
router.delete('/thoughts/:thoughtId', deleteThought);
router.post('/thoughts/:thoughtId/reactions', createReaction);
router.delete('/thoughts/:thoughtId/reactions/:reactionId', deleteReaction);

module.exports = router;