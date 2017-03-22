import io from 'socket.io-client'
var Socket = io.connect('http://localhost:80')

Socket.on('news', (data) => {
    console.log(data);
    Socket.emit('my other event', { my: 'data' });
  });
