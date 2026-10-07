const http = require('http');

const server = http.createServer((req, res) => {
    res.writehead(200, {'Content-Type': 'text/plain'})
    res.end('Hello from the server!');
});

const PORT= 3000;

server.listen(PORT, () => {
    console.log(`Server is listening on port ${PORT}`)
});