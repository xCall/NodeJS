//carrega o modulo do MySQL
var mysql = require('mysql');

//cria a conexao com o MySQL
var connection = mysql.createConnection({

  host: 'localhost',
  user: 'livronode',
  password: 'livro123',
  database: 'livro'

});

//conecta no banco de dados
connection.connect();

//cria uma consulta
let sql = "SELECT id, nome, tipo FROM carro";

connection.query(sql, function(error, results, fields) {

  if(error) throw error;

  let carros = results;

  //exemplo 1 para fazer o for
 /*
  for(let i = 0; carros.length > 1; i++) {

    console.log(carros[i].id + ": " + carros[i].nome);

  }

  carros.map(c => console.log(c.id + ": " + c.nome));

  */ 

  for(let i in carros) {

    let carro = carros[i];

    console.log(carro.id + ": " + carro.nome);

  }
  
});

//fecha conexao
connection.end();