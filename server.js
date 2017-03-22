var app = require('express')();
var server = require('http').Server(app);
var io = require('socket.io')(server);

server.listen(80);

app.get('/', function (req, res) {
  res.sendfile(__dirname + '/build/index.html');
});

io.on('connection', function (socket) {
  console.log(socket.id + 'connection...')
  socket.on('join', function(data){
    console.log("Welcome"+data.name)
  });
  socket.on('disconnect', function () {
    console.log("Bye");
  });
});
