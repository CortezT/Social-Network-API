const express = require('express');
const mongoose = require('mongoose');
const routes = require('./routes');

const app = express();
const PORT = process.env.PORT || 3001;

// Connect to MongoDB
mongoose.connect(process.env.MONGODB_URI || 'mongodb://localhost/social-network-api', {
    useNewUrlParser: true,
    useUnifiedTopology: true,
});

// Middleware for parsing JSON
app.use(express.json());

// Root route
app.get('/', (req, res) => {
    res.send('Welcome to the Social Network API');
});

// API routes
app.use('/api', routes);

app.listen(PORT, () => {
    console.log(`Server is running on http://localhost:${PORT}`);
});