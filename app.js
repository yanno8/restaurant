var express = require('express'),
    app = express(),
    http = require('http').Server(app),
    path = require('path'),
    engines = require('consolidate'),
    index = require('./routes/index');
    mongoose = require('mongoose'),
    session = require('express-session'),
    io = require('socket.io')(http);

mongoose.connect('mongodb://localhost/restaurant',
{ useNewUrlParser: true})
.then(() => console.log('Connexion à MongoDB réussie !'))
.catch(() => console.log('Connexion à MongoDB échouée !'));

app.use(session({secret: 'your secret', saveUninitialized: false, resave: true}));

app.use(express.static(path.join('views')));

app.use(express.urlencoded({ extended: true }))
app.use(express.json());

app.set('views', __dirname + '/views');
app.engine('html', engines.mustache);
app.set('view engine', 'html');

app.use('/', index);

  // ajouter et supprimer un socket.id de la sauvegarde apres une nouvelle connexion

io.on('connection', function (socket) {
  socket.join('room1')
  // console.log('new client connected: ' + socket.id);

  // reception of booking information

  socket.on('booking', function (message) {
  // console.log('from booking: ', message);
  socket.to('room1').emit('book', message);
  });

  // reception of ordering information

  socket.on('ordering', function (message) {
  // console.log('from booking: ', message);
  socket.to('room1').emit('order', message);
  });
});

http.listen(8080, function() {
  console.log('Server is listening on *:8080'); 
});