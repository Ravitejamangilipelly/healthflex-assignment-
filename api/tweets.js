const express = require('express');
const router = express.Router();
const Tweet = require('../models/Tweet');
const auth = require('../middleware/auth');

router.post('/', auth, async (req, res) => {
  try {
    const { text } = req.body;
    const tweet = new Tweet({ userId: req.user.userId, text });
    await tweet.save();
    res.status(201).send('Tweet posted successfully');
  } catch (error) {
    res.status(400).send('Error posting tweet');
  }
});

router.get('/users/:userId/timeline', auth, async (req, res) => {
  try {
    const tweets = await Tweet.find({ userId: req.params.userId }).sort({ createdAt: -1 });
    res.json(tweets);
  } catch (error) {
    res.status(400).send('Error fetching timeline');
  }
});

module.exports = router;
