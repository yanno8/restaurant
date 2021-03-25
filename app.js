var express = require('express'),
    app = express(),
    http = require('http').Server(app),
    bcrypt = require('bcrypt')
    mysql = require('mysql'),
    io = require('socket.io')(http);

const users = []

const db = mysql.createConnection({
  host: "localhost",
  user: "root",
  password: "",
  database : "restaurant"
});

db.connect(function(err) {
  if (err) throw err;
  console.log("Connecté à la base de données!");
});

app.use(express.urlencoded({ extended: false}))
app.use("/", express.static(__dirname + "/public"));

app.post('/pages/admin/login.html', async function(req, res) {
  try{
    const hashedPassword = bcrypt.hash(req.body.password, 10)
    users.push({
      id: Date.now().toString(),
      name: req.body.name,
      email: req.body.email,
      password: hashedPassword
    })
  } catch {
    res.redirect('/pages/admin/admin.html')
  }
  console.log(users);
})

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