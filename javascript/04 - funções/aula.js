//Entendendo como funciona uma função

function teste(){
    console.log('teste');
}

teste();

function sayMyName(nome){
    console.log('Your Name is '+ nome);
}


sayMyName('Felipe');

function quadrado(valor){
    return valor * valor;
}

let raiz = quadrado(10);
console.log(raiz);

function incrementaJuros (valor, percentualJuros){
    let valorAdicional = (percentualJuros /100) * valor;
    return valorAdicional + valor;
}

console.log(incrementaJuros(250,15));