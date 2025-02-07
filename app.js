// Sample Node.js Project: app.js

const express = require('express');
const app = express();

app.get('/', (req, res) => {
  res.send('Hello, Abdullah! This is a sample Node.js app.');
});

const port = process.env.PORT || 3000;
app.listen(port, () => {
  console.log(`Server running on port ${port}`);
});
