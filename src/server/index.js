var express = require('express');  
var app = express();  
var server = require('http').createServer(app);  
var io = require('socket.io')(server, { 
    wsEngine: 'ws',
    cors: {
      origin: "http://localhost:3000",
      methods: ["GET", "POST"],
      credentials : true
    }
});

io.on('connection', function(socket) {
    console.log('Client connected...');
    socket.on('chat message', function(msg){
        // console.log('message: ' + JSON.stringify(msg));
        io.emit('chat message', msg);
    })
});

server.listen(3001, function(){
    console.log('listening on *:3001');
});