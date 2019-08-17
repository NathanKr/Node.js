const http = require("http");
const fs = require("fs");
const PORT = 8080;
let path;

console.log(`server listen on localhost , port ${PORT}`);

const handleStaticFile = (path, res) => {
  // read file asynchronously (using callback)
  fs.readFile(path, function(err, data) {
    if (err) {
      res.writeHead(404, { "Content-Type": "text/html" });
      res.write('<h2 style="color:red;">Resource was not found</h2>');
      res.end();
    } else {
      res.writeHead(200, { "Content-Type": "text/html" });
      res.write(data);
      res.end();
    }
  });
};

const requestHandler = (req, res) => {
  console.log(req.url);

  switch (req.url) {
    case "/":
      handleStaticFile("./public/index.html", res);
      break;

    case "/about":
      handleStaticFile("./public/about.html", res);
      break;

    case "/eat":
      handleStaticFile("./public/eat.html", res);
      break;

    case "/relax":
      handleStaticFile("./public/relax.html", res);
      break;

    case "/travel":
      handleStaticFile("./public/travel.html", res);
      break;

    case "/videos":
      handleStaticFile("./public/videos.html", res);
      break;
  }
};

http.createServer(requestHandler).listen(PORT);
