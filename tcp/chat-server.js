var net = require('net');
var sockets = [];
var port = 8000;
var guestId = 0;
var server = net.createServer(function(socket) {

  //Increment
  guestId++;
  socket.nickname = "Guest" + guestId;

  var clientName = socket.nickname;

  sockets.push(socket);

  //log it to the server output
  console.log(clientName + 'joined this chat.');

  //welcome user to the socket
  socket.write("Welcome to telnet chat\n");

  //broadcast to the other excludin this socket
  broadcast(clientName, clientName + ' joined this chat.\n');

  //when client send data
  socket.on('data', function(data) {

    var message = clientName + '> ' + data.toString();

    broadcast(clientName, message);

    //log it to the server output
    process.stdout.write(message);
    
    //Remove client from socket array
    removeSocket(socket);

    //notify all clients
    broadcast(clientName, message);

  });

  //when socket gets erros
  socket.on('error', function(error) {

    console.log('Socket got problems: ', error.message);

  });

});

//broadcas to others, excluding the sender
function broadcast(from, message) {

  //if there are no sockets, then don't broadcast any messages
  if(sockets.length === 0) {

    process.stdout.write('Everyone left the chat');

    return;

  }

  //if there are clients remainig then broadcast message
  sockets.forEach(function(socket, index, array) {

    //dont send any message to the sender
    if(socket.nickname === from) return;

    socket.write(message);

  });

};

//remove disconnected client from sockets array
function removeSocket(socket) {

  socket.splice(socket.indexOf(socket), 1);

};

//listening for any problems with the server
server.on('error', function(error) {

  console.log("so we got problems!", error.message);

});

//listen for a port to telnet to
//then in the terminal just run 'telnet localhost [port]'
server.listen(port, function() {

  console.log("server listening at http://localhost: " + port);

});