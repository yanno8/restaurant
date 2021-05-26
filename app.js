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

// catch 404 and forward to error handler
app.use((req, res, next) => {
  const err = new Error('File Not Found');
  err.status = 404;
  next(err);
});

// error handler
// define as the last app.use callback
app.use((err, req, res, next) => {
  res.status(err.status || 500);
  res.send(err.message);
});

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