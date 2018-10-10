var http = require('http');
var dev = require('./dev');

console.log('open the browser at localhost:\8080');
console.log(dev.dbAdminPassword);


const requestHandler = (request, response) => {
    response.writeHead(200, {'Content-Type': 'text/html'});
    response.write('Hello Node.js!');
    response.end();
} 

http.createServer(requestHandler).listen(8080);

