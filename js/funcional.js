/*
function soma(a, b) {

  return a + b;

}

function multiplicacao(a, b) {

  return a * b;

}

//esta função recebe outra função como parametro
function executar(funcao, a, b) {

  return funcao(a, b);

}

//a função soma() será executada
let resultado = executar(soma, 1, 2);

console.log(resultado);

function executar2(funcao, a, b) {

  return funcao(a, b)

}

let resultado2 = executar2(function(a, b) { return a + b }, 1, 2);

console.log(resultado2);
*/

function executar(funcao, a, b) {

  return funcao(a, b);

} 

var funcao = function(a, b) {

  return a + b;

}

let resultado = executar(funcao, 1, 2);

console.log(resultado);


















