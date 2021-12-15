var http = require('http');

function getRandomArbitrary(min, max) {
    return Math.floor(Math.random() * (max - min) + min);
}

var server = http.createServer(function (req, res) {
    if (req.url == '/vehicles') {
        res.writeHead(200, { 'Content-Type': 'application/json' });
        res.write(JSON.stringify({
            available: getRandomArbitrary(1, 100),
            regular: getRandomArbitrary(1, 100),
            carpool: getRandomArbitrary(1, 100)
        }));
        res.end();
    }
});

server.listen(5000);
console.log('Node.js web server at port 5000 is running..')