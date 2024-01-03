const mongoose = require('mongoose');
const reactionSchema = require('./reactionSchema');

const thoughtSchema = new mongoose.Schema({
    content: {
        type: String,
        required: true,
        minlength: 1,
        maxlength: 280,
    },
    createdAt: {
        type: Date,
        default: Date.now,
        get: (timestamp) => new Date(timestamp).toLocaleDateString(),
    },
    author: {
        type: String,
        required: true,
    },
    reactions: [reactionSchema],
});

thoughtSchema.virtual('reactionCount').get(function () {
    return this.reactions.length;
});

const Thought = mongoose.model('Thought', thoughtSchema);

module.exports = Thought;