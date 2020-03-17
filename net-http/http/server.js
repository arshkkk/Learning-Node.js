const http = require('http');

const server = http.createServer(
    (request, result) =>{
        const name = request.url;
        console.log(name);
        result.writeHead(200, {'Content-Type':'text/html' });

    result.end(`<h1>Hello World ${name}</h1>`);
    }
);

server.on('connection',()=>{
    console.log('new connection is made');
});

server.listen(8000, 'localhost');