//Escreva uma função que receba a idade e diga se é maior de idade ou não

function main(){
    let idade = 33;
    console.log(verificarIdade(idade));
}

function verificarIdade(idade){
    if (idade >= 18){
        return ('Você já é maior de idade');
    }else{
        return ('Você não atingiu a maior idade');
    }
}

main();