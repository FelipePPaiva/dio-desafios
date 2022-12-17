// Crie um programa que seja capaz de percorrer um lista de números e impra cada número Par encontrado

const listaNumero = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

for(let i = 0; i < listaNumero.length; i++){
    let numero = listaNumero[i];

    if(numero % 2 == 0){
        console.log(numero);
    } 
}

