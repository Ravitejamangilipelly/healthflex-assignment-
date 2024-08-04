require('dotenv').config();
const express = require('express');
const mongoose = require('mongoose');
const userRoutes = require('./api/users');
const tweetRoutes = require('./api/tweets');

const app = express();

app.use(express.json());

// Connect to MongoDB
mongoose.connect(process.env.MONGO_URI, {
  useNewUrlParser: true,
  useUnifiedTopology: true,
  useCreateIndex: true,
}).then(() => {
  console.log('Connected to MongoDB');
}).catch((error) => {
  console.error('Error connecting to MongoDB:', error.message);
});

// Routes
app.use('/api/users', userRoutes);
app.use('/api/tweets', tweetRoutes);

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
