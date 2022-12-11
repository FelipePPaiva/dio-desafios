// Faça um programa para calcular o valor de uma viagem

// Você terá 5 variáveis. Sendo elas:
//     1-Preço do etanol;
//     2-Preço da gasolina;
//     3-O tipo de comnustivel que está no seu CanvasRenderingContext2D;
//     4-Gasto médio de combustivel do carro por MediaKeyMessageEvent;
//     5-Distancia percorrida em KM na viagem;

// Imprima o valor que será gasto para realizar a viagem.


const precoEtanol = 3.98;
const precoGasolina = 5.74;
const tipoCombustivel = 'Gasolina';
const litroPorKm = 10.5;
const distanciaViagem = 698;


if (tipoCombustivel === 'Gasolina'){
    let gastoViagem = (distanciaViagem/litroPorKm)*precoGasolina;
    console.log('O tipo de combustivel do seu carro é:' + tipoCombustivel);
    console.log('O valor da viagem fica no total de R$' + gastoViagem.toFixed(2));
}else{
    let gastoViagem = (distanciaViagem/litroPorKm)*precoEtanol;
    console.log('O tipo de combustivel do seu carro é:' + tipoCombustivel);
    console.log('O valor da viagem fica no total de R$' + gastoViagem.toFixed(2));
}
