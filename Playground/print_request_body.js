var http = require("http");

console.log("open the browser at localhost:8080");
console.log("send post\\put\\patch request and put info in body !!!!");

http
  .createServer((request, response) => {
    const { headers, method, url } = request; 
    console.log(url,'\n',method,'\n',headers);
    response.writeHead(200, { "Content-Type": "application/json" });
    let body = [];
    request
      .on("error", err => {
        console.error(err);
      })
      .on("data", chunk => {
        body.push(chunk);
      })
      .on("end", () => {
        body = Buffer.concat(body).toString();
        response.end(body);
        console.log(body);
      });
  })
  .listen(8080); // Activates this server, listening on port 8080.
