const http = require('http');

const server = http.createServer((req, res) => {
    res.writeHead(200, {'content-type': 'text/html; charset= utf-8'})
    res.write('Merhaba Dünya');
    res.end();
})

server.listen(4000);

