/*

class Retangulo{

  constructor(altura, largura) {

    this.altura = altura;
    this.largura = largura;

  }

  get area() {

    return this.calculaArea();

  }

  calculaArea() {

    return this.altura * this.largura;

  }

}

const quadrado = new Retangulo(10, 10);

console.log(quadrado.area);

let Quadrado = class{

  constructor(altura, largura) {

    this.altura = altura;
    this.largura = largura;

  }

};

let Retangulo2 = class Retangulo2 {

  constructor(altura, largura) {

      this.altura = altura;
      this.largura = largura;

  }

};

class Ponto {

  constructor(x, y) {

    this.x = x;
    this.y = y;

  }

  static distancia(a, b) {

    const dx = a.x - b.x;
    const dy = a.y - b.y;

    return Math.hypot(dx, dy);

  }

}

const p1 = new Ponto(5, 5);
const p2 = new Ponto(10,10);

p1.distancia;
p2.distancia;

console.log(Ponto.distancia(p1, p2));

class Animal {

  falar() {

    return this;

  }

  static comer() {

    return this;

  }

}

let obj = new Animal();

obj.falar();

let falar = obj.falar;

falar();

Animal.comer();

let comer = Animal.comer;

comer();

console.log(comer(), falar());

*/

function Animals() {

  Animals.prototype.falar = function() {

    return this;

  }

  Animals.comer = function() {

    return this;

  }

  let obj2 = new Animals();

  let falar = obj2.falar;

  falar();

  let comer = Animals.comer;

  comer();

  console.log(comer, falar);


}