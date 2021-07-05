const http = require('http');

// Create a server with HTTP Variable
const server = http.createServer((req, res) => {
    // Headers
    // res.writeHead(200, { 'Content-Type': 'text/plain' });
    res.writeHead(200, { 'Content-Type': 'application/json' });

    // Send back some information
    // res.end('Welcome to First Node Server');

    res.end(`
        {
            "name":  "Abisalde",
            "location": "Lagos",
            "Occupation": "Software Developer"
        }
    `);
});

// Create a port
server.listen(5600, '127.0.0.1');
console.log('server <------> started');
