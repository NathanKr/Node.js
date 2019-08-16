const http = require("http");
const fs = require("fs");
const path = require("path");
const PORT = 8080;
console.log(`server listens on port : ${PORT}`);

const resourceError = res => {
  console.log("404 error");
  res.writeHead(404, { "Content-Type": "text/html" });
  res.write("<h2>Resource not found</h2>");
  res.end();
};

const requestHandler = (req, res) => {
  console.log(`url : ${req.url} , http method : ${req.method}`);

  switch (req.url) {
    case "/":
      fs.readFile("./public/index.html", function(err, data) {
        if (err) {
          resourceError(res);
        } else {
          //   notice here content type is for html file
          res.writeHead(200, { "Content-Type": "text/html" });
          res.write(data);
          res.end();
        }
      });
      break;

    case "/css/styles.css":
      const cssFileFullPath = path.join(__dirname, "public", req.url);
      fs.readFile(cssFileFullPath, function(err, data) {
        if (err) {
          // -- not point to issue 404 because html can be shown
          console.log("css file error");
        } else {
          //   notice here content type is for css file
          res.writeHead(200, { "Content-Type": "text/css" });
          res.write(data);
          res.end();
        }
      });

      break;

    case "/images/the-feather-of-a-bird-4395771__340.jpg":
      const pngFileFullPath = path.join(__dirname, "public", req.url);
      fs.readFile(pngFileFullPath, function(err, data) {
        if (err) {
          // -- not point to issue 404 because html can be shown
          console.log("image file error");
        } else {
          //   notice here content type is for jpeg file
          res.writeHead(200, { "Content-Type": "image/jpeg" });
          res.write(data);
          res.end();
        }
      });

      break;

    default:
      // resource not found
      resourceError(res);
  }
};

http.createServer(requestHandler).listen(PORT);
