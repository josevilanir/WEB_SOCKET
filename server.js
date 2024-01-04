var WebSocket = require('ws');

var server = new WebSocket.Server({ port: 8081 });

server.on('connection', ws => {
 console.log('Client connected');

 ws.on('message', message => {
    console.log(`Received: ${message}`);
 });

 ws.on('close', () => {
    console.log('Client disconnected');
 });
});