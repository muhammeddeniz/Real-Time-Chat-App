var express = require('express');
var app = express(); 
var http = require('http').createServer(app);
var io = require('socket.io')(http);

app.get('/', function (req, res) {
    res.sendFile(__dirname + '/index.html');
});


io.on('connection', function (socket) {
    console.log("Kullanici Giriş Yaptı.");

    socket.on('mesaj', function (msg) {
        msg = "Kullanici : " + msg;
        io.emit('mesaj', msg);

    });

    socket.on("disconnect", function () {
        console.log("Kullanici Ayrıldı");
    })

});

http.listen(8080, function (err) {
    if (!err) {
        console.log("Listening. . .");
    }
});
