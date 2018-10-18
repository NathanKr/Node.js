var http = require('http');

console.log('open the browser at localhost:\8080');

http.createServer(function (req, res) {
    res.writeHead(200, {'Content-Type': 'text/html'});
    res.end(req.url);
}).listen(8080);


