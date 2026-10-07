const net = require('net');

const server = net.createServer((socket) => {
    console.log('Client connected');

    socket.write('Hello from the server!\n');

    socket.on('data', (data) => {
        console.log("Menerima data dari orang tersayang",data);
    });
    socket.on('end', () => {
        cosnole.log('Client disconnected');
    });
});


//start server
const PORT = 3000;
server.listen  (PORT, () => {
    console.log(`Server is listening on port ${PORT}`);
});      
