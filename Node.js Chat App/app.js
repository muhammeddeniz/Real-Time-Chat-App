var express = require('express');
var app = express(); 
var http = require('http').createServer(app);
var io = require('socket.io')(http);

app.get('/', function (req, res) {
    res.sendFile(__dirname + '/index.html');
});


io.on('connection', function (socket) {
    console.log("User Connect.");

    socket.on('ioMsg', function (msg) {
        msg = "User : " + msg;
        io.emit('ioMsg', msg);

    });

    socket.on("disconnect", function () {
        console.log("User Disconnect.");
    })

});

http.listen(8080, function (err) {
    if (!err) {
        console.log("Listening. . .");
    }
});
