const http = require('http');
const fs = require('fs');
console.log('node web server is loading ...');

const PORT = 8080;
console.log(`open the browser at localhost:${PORT}`);

// --- the requestHandler is invoked every time a request recived by the server
// --- the server pass request,response
function requestHandler(request,response){
    // console.log(request);
    console.log(`url : ${request.url}`);
    response.writeHead(200,{'Content-Type': 'text/html'});
   
    let body;
    if (request.url == "/about.html"){
        body = fs.readFileSync('about.html');
    }
    else{
        body = fs.readFileSync('index.html');
    }
    
    // --- add inline style to make the text "Hello From the server !!!" red
    response.write(body);

    response.end();
}

http.createServer(requestHandler).listen(PORT);
