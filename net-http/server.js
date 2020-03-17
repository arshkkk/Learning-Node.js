const net = require('net');

//Difference between SErver creation by http and net
//https://stackoverflow.com/questions/29869999/http-createserver-vs-net-createserver-in-node-js

const server = net.createServer();

//Storing Clients which are connected to Server
const connectedClients = [];
server.listen({
    host:'localhost',
    port: 8000,
});

server.on('connection', (client)=>{
    console.log('client connected');
    client.write('Welcome');
    connectedClients.push(client);
});

setInterval(()=>{
    const now = new Date().toString();
    connectedClients.forEach(client=>{
        client.write(now);
    });
},2000);

