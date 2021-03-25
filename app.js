var express = require('express'),
    app = express(),
    http = require('http').Server(app),
    path = require('path'),
    ejs = require('ejs'),
    index = require('./routes/index'),
    mongoose = require('mongoose'),
    session = require('express-session'),
    io = require('socket.io')(http);

mongoose.connect('mongodb://localhost/restaurant',
{ useNewUrlParser: true})
.then(() => console.log('Connexion à MongoDB réussie !'))
.catch(() => console.log('Connexion à MongoDB échouée !'));

app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'ejs');

app.use(express.urlencoded({ extended: true }))
app.use(express.json());

app.use(express.static(path.join(__dirname + '/public')));

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