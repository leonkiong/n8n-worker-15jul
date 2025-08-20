// server.js
const express = require('express');
const app = express();
const port = process.env.PORT || 10000;

app.get('/', (req, res) => {
  res.send('Worker is alive');
});

app.listen(port, '0.0.0.0', () => {
  console.log(`Dummy server listening on port ${port}`);
});
