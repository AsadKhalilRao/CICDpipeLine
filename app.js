const express = require('express');
const axios = require('axios');
const app = express();
const port = 3006;

app.get('/quote', async (req, res) => {
  try {
    const response = await axios.get('https://api.api-ninjas.com/quotes/wyP0rX3Ol4Kjx/wq3oCjRA==TrR9D9eHwcRfwL5d');
    res.json({ 
      quote: response.data.content, 
      author: response.data.author 
    });
  } catch (error) {
    res.status(500).json({ error: 'Failed to fetch quote' });
  }
});

app.listen(port, () => {
  console.log(`Quote service running on port ${port}`);
});