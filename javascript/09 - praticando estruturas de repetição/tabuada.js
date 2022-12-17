//Crie um programa que dado um número imprima a sua tabuada

const tabuada = [];

let numero = 9;


for(let i = 1; i <= 10; i++){
    let tabu = numero * i;
    tabuada.push(tabu);
}

console.log(tabuada);

