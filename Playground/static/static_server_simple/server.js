const http = require("http");
const fs = require("fs");
const PORT = 8080;

console.log(`server listen on localhost , port ${PORT}`);

const requestHandler = (req, res) => {
  // res.write('<h1>This is Home page !!! </h1>');
  const path = "./public/index.html";
  // read file asynchronously (using callback)
  fs.readFile(path, function(err, data) {
    if (err) {
        res.writeHead(404,{ "Content-Type": "text/html" });
        res.write('<h2 style="color:red;">Resource was not found</h2>');
        res.end;
    } else {
      res.writeHead(200, { "Content-Type": "text/html" });
      res.write(data);
      res.end;
    }
  });
};

http.createServer(requestHandler).listen(PORT);
