//carrega o modulo HTTP
var http = require('http');

//cria um servidor HTTP que vai responder para todas as requisiçoes
var server = http.createServer(function(req, res) {

  //Define o cabeçalho (header) com o tipo da resposta
  res.writeHead(200, {"Content-Type": "text/plain"});
  //Mensagem de retorno
  res.end("Hello Word Node!\n");

});

//Porta que o servidor vai escutar
server.listen(3000);

//Mensagem ao iniciar o servidor
console.log("Servidor iniciado em http://localhost:3000/");