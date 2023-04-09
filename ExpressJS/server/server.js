const express = require('express');
const app = express();

app.get('/', (req, res) => {
  res.send('<h1>Hello World</h1>');
});

app.get('/contact', (req, res) => {
  res.send('Contact Me at: keyurrgarsondiya@gmail.com');
});

app.listen(3000, () => {
  console.log('Server Started');
});
