import socket from 'socket.io-client'
var io = socket('http://localhost:80')

io.on('news', function (data) {
    console.log(data);
    io.emit('my other event', { my: 'data' });
  });
export default io