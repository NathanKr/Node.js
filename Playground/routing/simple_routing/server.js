var http = require('http');
const router = require('./router');

console.log('open the browser at localhost:\8080')

http.createServer(router.requestHandler).listen(8080);

