var http = require('http');
var fs = require('fs');

const requestHandler = (req, res) => {
  const readFileHandler =  (err, data) => {
    if(err){
      res.writeHead(400);
      res.write("File read error");
    }
    else{
      res.writeHead(200, {'Content-Type': 'text/html'});
      res.write(data);
    }
    res.end();
  }

  fs.readFile('hello_node.html',readFileHandler)
};

http.createServer(requestHandler).listen(8080);