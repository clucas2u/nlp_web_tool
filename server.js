const express = require('express');
const dotenv = require('dotenv');
const fetch = require('node-fetch');
const http = require('http');

// 4. Security
const helmet = require('helmet');

// 3. Rate Limiting
const rateLimit = require("express-rate-limit");

dotenv.config();

const app = express();

// Apply security middleware
app.use(helmet());

// Apply rate limiting
const limiter = rateLimit({
  windowMs: 15 * 60 * 1000,
  max: 100
});
app.use(limiter);

app.use(express.static('dist'));

app.get('/', function (req, res) {
  res.sendFile('../client/views/index.html');
});

// 1. Caching
const cache = {};

app.use(express.json());

app.post('/analyze', async (req, res) => {
  try {  // 2. Error Handling
    const urlToAnalyze = req.body.url;

    // Caching
    if (cache[urlToAnalyze]) {
      return res.send(cache[urlToAnalyze]);
    }

    const apiKey = process.env.API_KEY;
    const apiUrl = `https://api.meaningcloud.com/sentiment-2.1?key=${apiKey}&url=${urlToAnalyze}&lang=en`;
    const response = await fetch(apiUrl);
    const data = await response.json();

    // Update cache
    cache[urlToAnalyze] = data;

    res.send(data);
  } catch (error) {
    console.error(error);
    res.status(500).send('Internal Server Error');
  }
});

const port = 3000;

// Start the server only if this file is run directly
let server;
if (require.main === module) {
  server = http.createServer(app);
  server.listen(port, function () {
    console.log(`Server running on localhost:${port}`);
  });
}

module.exports = app; // Export the app for testing
