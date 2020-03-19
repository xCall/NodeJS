//carrega modulos
var http = require('http');
var url = require('url');
var fs = require('fs');

//função para ler um arquivo e escrevê-lo na response
function readFile(res, file) {

  //faz a leitura do arquivo de forma assíncrona
  fs.readFile(file, function(err, data) {

    //quando ler escreve na response o conteúdo do JSON
    res.end(data);

  })

}

//função de callback para o servidro HTTP
function callback(req, res) {

  //cabeçalho (header) com o tipo da resposta + utf8
  res.writeHead(200,{"Content-Type":"application/json; charset=utf-8"});

  //faz o parser do url separando o caminho (rota)
  var parts = url.parse(req.url);
  var path = parts.path;

  //verifica a rota
  if(path == '/carros/classicos') {

    //Retorna o json dos carros clássicos
    readFile(res, "carros_classicos.json");

  } else if(path == '/carros/esportivos') {

    //retorna o json dos carros esportivos
    readFile(res, "carros_esportivos.json");

  } else if(path == '/carros/luxo') {

    //Retorna o json dos carros de luxo
    readFile(res, "carros_luxo.json");

    console.log("sucesso");

  } else {

    res.end("Path não mapeado: " + path);

  }

}

//servidor http
var server = http.createServer(callback);

//porta que o servidor vai escutar
server.listen(3000);

//mensagem ao iniciar o servidor
console.log("servidor iniciado em http://localhost:3000/");
