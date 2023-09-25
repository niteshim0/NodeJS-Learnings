const http = require('http');

const server = http.createServer((req, res) => {
  // Set the response headers to allow any origin to access this server
  res.setHeader('Access-Control-Allow-Origin', '*');

  if (req.method === 'GET') {
    res.writeHead(200, { 'Content-Type': 'text/plain' });
    res.end('This is a GET request');
  } else if (req.method === 'POST') {
    res.writeHead(200, { 'Content-Type': 'text/plain' });
    res.end('This is a POST request');
  } else if (req.method === 'PUT') {
    res.writeHead(200, { 'Content-Type': 'text/plain' });
    res.end('This is a PUT request');
  } else if (req.method === 'DELETE') {
    res.writeHead(200, { 'Content-Type': 'text/plain' });
    res.end('This is a DELETE request');
  } else if (req.method === 'PATCH') {
    res.writeHead(200, { 'Content-Type': 'text/plain' });
    res.end('This is a PATCH request');
  } else if (req.method === 'OPTIONS') {
    res.writeHead(200, { 'Content-Type': 'text/plain' });
    res.end('This is an OPTIONS request');
  } else {
    res.writeHead(405, { 'Content-Type': 'text/plain' });
    res.end('Method Not Allowed');
  }
});

server.listen(3000, () => {
  console.log('Server is running on port 3000');
});
