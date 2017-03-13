var express = require('express')
var app = express()
var url = require('url');
//部署
var server = app.listen(80, function() {
    var host = server.address().address;
    var port = server.address().port;
    console.log('Running');
})
var db = require('./db.js');

io = require('socket.io').listen(server);
app.use(express.static('public'));

app.get('/',
    function(req, res) {
        res.sendfile(__dirname + '/index.html');
    }
);
app.get('/:path',
    function(req, res) {
        res.sendfile(__dirname + '/' + req.params.path);
    }
);

var clients = new Array();

io.on('connection', function(socket) {
    console.log('connect...');
    //console.log('connection ' + socket+'  '+socketId);
    //新的客户端
    socket.on('join', function(data) {
        socket.nickname = data.nickname;
        clients.push(socket);
        console.log('nickname为'+ data.nickname + '的人加入了');
        db.getRecords(function(data){
            console.log(data)
            socket.emit('joinsuccess',{
                records: data,
                onlineClients: clients.map(function(value, index){
                    return value.nickname;
                })

            });
            socket.broadcast.emit('hasPersonJoin', socket.nickname);
        });
    });

    socket.on('say', function(content) {
        var saytime = new Date();
        console.log('say');
        //存库
        db.insertRecord({
            nickname: socket.nickname,
            content: content,
            saytime: saytime
        },function(){
            console.log('插入成功');
        });

        io.of('/').clients(function(error, clients){
              if (error) throw error;
              console.log(clients); // => [PZDoMHjiu8PYfRiKAAAF, Anw2LatarvGVVXEIAAAD]
        });

        //有人说话，广播出去
        io.sockets.emit('sayBoard',{
            nickname: socket.nickname,
            content: content,
            time: saytime
        });
    });
});


