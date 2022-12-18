const numerosAlunos = [5, 50, 10, 98, 34];
let i = 0;

function gets(){
    const valor = numerosAlunos[i];
    i++;
    return valor;
}

function print(texto){
    console.log(texto);
}

module.exports = {gets, print};