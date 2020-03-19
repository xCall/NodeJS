var http = require('http');
var url = require('url');

const Pessoa = require('./pessoa');

function callback(req, res) {

  var parts = url.parse(req.url);
  var path = parts.path;

  res.writeHead(200, {"Content-type":"application/json; charset=utf-8"});

  if(path == '/teste') {

    //res.end("{\"nome\":\"Ricardo\",\"sobrenome\":\"lecheta\"}");

    var pessoa = {'nome':'Ricardo', 'sobrenome':'Lecheta'};
    var json = JSON.stringify(pessoa);

    res.end(json);

  } else {

    res.end("Not found: " + path);

  }

}

var server = http.createServer(callback);

server.listen(3000);

console.log("Servidor iniciado em http://localhost:3000/");