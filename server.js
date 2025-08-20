const express = require('express');
const app = express();
const port = process.env.PORT || 10000;

app.get('/', (req, res) => {
  res.send('Dummy server to keep Render alive.');
});

app.listen(port, () => {
  console.log(`Dummy server running on port ${port}`);
});
