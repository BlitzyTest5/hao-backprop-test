const express = require('express');

const hostname = '127.0.0.1';
const port = 3000;

// Create Express application instance
const app = express();

// Route handler for the root path ('/')
app.get('/', (req, res) => {
  res.status(200).contentType('text/plain').send('Hello, World!\n');
});

// Route handler for the '/good-evening' path
app.get('/good-evening', (req, res) => {
  res.status(200).contentType('text/plain').send('Good evening');
});

// Configure Express to listen on the specified hostname and port
app.listen(port, hostname, () => {
  console.log(`Server running at http://${hostname}:${port}/`);
});