var numeros = [1,2,3];
//aqui nao foi informado o valor inicial
//nesse caso, o primeiro item do array será ignorado e passado como o valor inicial 

var s = numeros.reduce((valorAcumulado, n) => valorAcumulado + n * 2);

console.log(s);

s = numeros.reduce((valorAcumulado, n) => valorAcumulado + n * 2, 0);

console.log(s);