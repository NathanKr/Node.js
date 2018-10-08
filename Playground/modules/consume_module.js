var http = require('http');
var mod1 = require('./module1');
console.log('open the browser at localhost:\8080')

const listener = (request, response) => {
    response.writeHead(200, {'Content-Type': 'text/html'});
    response.write(`max (3,4) : ${mod1.max(3,4)}`);
    response.write("<br/>");
    response.write(`text is : ${mod1.t1}`);
    response.end();
} 

http.createServer(listener).listen(8080);

