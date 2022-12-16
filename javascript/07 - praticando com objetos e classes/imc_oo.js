/*Crie uma classe para representar pessoas. Para cada pessoa teremos os atributos nome, peso e altura. As pessoas devem ter a capacidade de dizer o valor do seu IMC (IMC = peso / (altura * altura)); Instancie uma pessoa chamada José que tenha 70Kg de peso e 1,75 de altura e peça para José dizer o valor do seu IMC. */

class Imc {
    nome;
    peso;
    altura;

    constructor(nome, peso, altura){
        this.nome = nome;
        this.peso = peso;
        this.altura = altura;
    }

    calcularImc(){
        let imc = this.peso / (this.altura * this.altura);
        if (imc < 18.5){
            return(imc.toFixed(2) + ' - Abaixo do peso!');
        }else if (imc > 18.5 && imc <= 25){
            return(imc.toFixed(2) + ' - No peso Normal!');
        }else if (imc > 25 && imc <= 30){
            return(imc.toFixed(2) + ' - Acima do Peso!');
        }else if (imc > 30 && imc <= 40){
            return(imc.toFixed(2) + ' - Obeso!');
        }else{
            return(imc.toFixed(2) + ' - Obessidade GRAVE!')
        }
    }
}

const rosi = new Imc('Rosi', 58, 1.63);
const felipe = new Imc('Felipe', 105, 1.65);

console.log(`${rosi.nome} tem ${rosi.altura} e pesa ${rosi.peso} e seu IMC é de ` + rosi.calcularImc());
console.log(`${felipe.nome} tem ${felipe.altura} e pesa ${felipe.peso} e seu IMC é de ` + felipe.calcularImc());