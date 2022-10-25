const http = require('http');

const server = http.createServer();
server.on('request', (req, res) => {
    res.setHeader('Content-Type', 'text/plain');
    res.statusCode = 200;
    res.statusMessage = 'OK';

    res.write('Hello World');
    res.end();
})

server.listen(3000);
console.log('Listening port on 3000...')