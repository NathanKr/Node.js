const url = require('url');
const fs = require('fs');

const navigate = (htmlFile,response) => {
    const readFileHandler =  (err, data) => {
        if(err){
            response.writeHead(400);
            response.write("File read error");
        }
        else{
            response.writeHead(200, {'Content-Type': 'text/html'});
            response.write(data);
        }
        response.end();
    }
    
    fs.readFile(htmlFile,readFileHandler)
}



const requestHandler = (request, response) => {
    const path = url.parse(request.url).pathname;
    let htmlFile;

    switch(path){
        case '/' :
        htmlFile = 'index.html';
        break;

        case '/login' :
        htmlFile = 'login.html';
        break;

        case '/logout' :
            htmlFile = 'logout.html';
        break;

        case '/about' :
            htmlFile = 'about.html';
        break;

        default:
        htmlFile = 'RouteNotFound.html';
        break;
    }
    navigate(htmlFile,response);
} 

exports.requestHandler = requestHandler;