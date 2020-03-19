//carrega o modulo net
var net = require('net');

//contador para testes
var cont = 1;

//listener do servidor TCP quando algum cliente conectar
var server = net.createServer(function(socket) {

  //Mensagem de log quando algum cliente conectar
  console.log("Cliente conectou do IP: " + socket.remoteAddress);
  
  //Escreve a resposta e termina a conexao do cliente
  socket.end("Hello Word TCP!!" + (cont++) + "\n");

});

//Inicia o servidor
server.listen(3000);

//Mensagem ao iniciar o servidor
console.log("Servidor TCP iniciado");