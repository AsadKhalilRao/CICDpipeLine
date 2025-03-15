const express = require('express');
const axios = require('axios');
const app = express();
const port = 3004;

app.get('/joke', async (req, res) => {
  try {
    const response = await axios.get('https://v2.jokeapi.dev/joke/Any?blacklistFlags=nsfw,religious,political,racist,sexist,explicit');
    res.json({ joke: response.data.joke });
  } catch (error) {
    res.status(500).json({ error: 'Failed to fetch joke' });
  }
});

app.listen(port, () => {
  console.log(`Joke service running on port ${port}`);
});