var http = require('http');
var url = require('url');
var callback = function(req, res) {

  res.writeHead(200, {"Content-Type": "text/plain; charset=utf-8"});

  var parts = url.parse(req.url);

  if(parts.path == '/') {

    res.end("Site na raiz");

  } else if(parts.path == '/carros') {

    res.end("Voce digitou a rota /carros");

  } else {

    res.end("Rota invalida: " + parts.path);

  }

}

var server = http.createServer(callback);

server.listen(3000);

console.log("servidor iniciado em http://localhost:3000/");