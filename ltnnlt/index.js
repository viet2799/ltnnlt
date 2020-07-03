var express = require('express');
var app = express();
var http = require('http').createServer(app);
var io = require('socket.io')(http);
var path = require('path');
app.use(express.static(path.join(__dirname, '/snake')));
app.get('/', (req, res) => {
  res.sendFile(__dirname + '/snake/snake.html');
});

io.on('connection', (socket) => {
  socket.on('direction',function(direction){
    console.log(direction);
    socket.emit('directionFromServer',direction)
  })
});

http.listen(3000, () => {
  console.log('listening on *:3000');
});