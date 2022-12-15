/* 1- Crie uma classe para representar carros. Os carros possuem uma marca, uma cor e um gasto médio de combustivel por KM rodado. Crie um método que dado a quantidade de KM e o preço do combustivel nos de o valor gasto em reais para realizar este percurso */

class Carros {
    marca;
    cor;
    kmPorLitro;
    kmViagem;
    valorCombustivel;

    constructor(marca, cor, kmPorLitro, kmViagem, valorCombustivel){
        this.marca = marca;
        this.cor = cor;
        this.kmPorLitro = kmPorLitro;
        this.kmViagem = kmViagem;
        this.valorCombustivel = valorCombustivel;
    }

    gasto(){
        return (this.valorCombustivel * (this.kmViagem/this.kmPorLitro));
    }
}

const carro = new Carros('Ford','Preto',10.5, 600, 5.74);
const bmw = new Carros('Mercedes','Prata',16.5, 900, 4.74);

console.log(carro);
console.log(bmw);

console.log(`O valor gasto para percorrer é de R$` + carro.gasto().toFixed(2));
console.log(`O valor gasto para percorrer é de R$` + bmw.gasto().toFixed(2));