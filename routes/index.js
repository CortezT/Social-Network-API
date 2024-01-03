const express = require('express');
const userRoutes = require('./userRoutes');
const thoughtRoutes = require('./thoughtRoutes');
const reactionRoutes = require('./reactionRoutes');

const router = express.Router();

router.use('/users', userRoutes);
router.use('/thoughts', thoughtRoutes);
router.use('/reactions', reactionRoutes);

module.exports = router;