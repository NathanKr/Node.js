console.log("app is loading");

const express = require("express");
const port = process.env.PORT || 3000;
const app = express();
const http = require("http");
const server = http.createServer(app);

const socketIo = require("socket.io");
const io = socketIo(server);

app.use(express.static(__dirname + "/public"));

server.listen(port, () => console.log(`app is listening on port : ${port}`));
