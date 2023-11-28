const http = require('http');
const express = require('express');

const app = express();

const server = http.createServer(app);

server.listen(3333, () => {
  console.log('Server listening on port 3000');
});