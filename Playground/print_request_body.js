var http = require('http');

console.log('open the browser at localhost:\8080');
console.log('send post\\put\\patch request and put info in body !!!!');


http.createServer(function (req, res) {
    const { headers, method, url } = req;

    res.writeHead(200, {'Content-Type': 'application/json'});
    console.log(url,method,headers);
    console.log(req.body);
    res.end(JSON.stringify({hello : 'world'}));
}).listen(8080);

/*
http.createServer((request, response) => {
    const { headers, method, url } = request;
    let body = [];
    request.on('error', (err) => {
      console.error(err);
    }).on('data', (chunk) => {
      body.push(chunk);
    }).on('end', () => {
      body = Buffer.concat(body).toString();
      // At this point, we have the headers, method, url and body, and can now
      // do whatever we need to in order to respond to this request.
    });
  }).listen(8080); // Activates this server, listening on port 8080.
  */