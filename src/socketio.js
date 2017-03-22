import io from 'socket.io-client'
var Socket = io.connect('http://localhost:80')


Socket.on('connect', () => {
    Socket.emit('join',{name: 'dus'})
  });
