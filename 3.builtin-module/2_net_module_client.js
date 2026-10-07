const net = require('net');

const client = new net.Socket();

client.connect(3000, 'localhost', () => {
    console.log('Connected to server')
    client.write('Hello from the client!');
});;