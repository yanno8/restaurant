var express = require('express'),
    app = express(),
    http = require('http').Server(app),
    io = require('socket.io')(http);

app.use("/", express.static(__dirname + "/public"));

  // ajouter et supprimer un socket.id de la sauvegarde apres une nouvelle connexion

io.on('connection', function (socket) {
  socket.join('room1')
  // console.log('new client connected: ' + socket.id);

  // reception et émission du message et full-name

  socket.on('chat-message', function (message) {
  // console.log('from booking: ', message);
  socket.to('room1').emit('char-message', message);
  });

  // reception et emission du nombre de places choisis

  socket.on('users', function(infos) {
    socket.to('room1').emit('use', infos);
  });
});

http.listen(8080, function() {
  console.log('Server is listening on *:8080'); 
});