var express = require('express');  
var app = express();  
var server = require('http').createServer(app);  
const io = require("socket.io")(server, {
    cors: {
      origin: "http://localhost:3000",
      methods: ["GET", "POST"],
      credentials : true
    }
});

app.use(express.static(__dirname + '/node_modules')); 

io.on('connection', function(client) {
    console.log('Client connected...');
    client.on('join', function(data) {
       console.log(data);
       client.emit('messages', 'Hello from server');
    });
});

server.listen(3001, function(){
    console.log('listening on *:3001');
});