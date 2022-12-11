// Faça um algoritimo que dado as 3 notas tiradas por um aluno em um semestre da faculdade calcule e imprima a sua media e a sua classificação conforme tabela abaixo:

// classificação
//     - Média menor que 5, reprovação;
//     - Média entre 5 e 7, recuperação;
//     - Média acima de 7, passou de semestre;

let media = calcularMediaNota(10, 4.4, 5.3);
let mediaFinal = classificacaoMedia(media);


console.log(media.toFixed(2));
console.log(mediaFinal);



function calcularMediaNota(nota1, nota2, nota3){
    let mediaNota = (nota1 + nota2 + nota3)/3;
    return mediaNota;
}

function classificacaoMedia(media){
    if (media > 7){
        return ('O aluno passou de semestre com a nota ' + media.toFixed(2));
    }else if (media < 5) {
        return ('O aluno não passou de semestre com a nota ' + media.toFixed(2));
    }else{
        return ('O aluno ficou de recuperação com a nota ' + media.toFixed(2));
    }
}

/*O IMC - Indice de massa corporea é um criterio da organização mundial de saude para dar uma indicação sobre a condição de peso de uma pessoa adulta.

Formula do IMC:
IMC = peso / (altura *altura)

Elabore um algoritmo que dado o peso e a altura de um adulto mostre sua condição de acordo com a tabela abaixo.

IMC em adultos Condição:
    -Abaixo de 18.5 Abaixo do peso;
    -Entre 18.5 e 25 Peso Normal;
    -Entre 25 e 30 Acima do peso;
    -Entre 30 e 40 obeso;
    -Acima de 40 Obessidade Grave;
*/
let dadosImc = calcularImc(40, 1.65);
console.log(classificarImc(dadosImc));

function calcularImc(peso, altura){
    let imc = peso / (altura * altura);
    return imc; 
}

function classificarImc(imc){
    if (imc < 18.5){
        return('O indice de massa corporea é de ' + imc.toFixed(2) + ' - Abaixo do peso!');
    }else if (imc > 18.5 && imc <= 25){
        return('O indice de massa corporea é de ' + imc.toFixed(2) + ' - No peso Normal!');
    }else if (imc > 25 && imc <= 30){
        return('O indice de massa corporea é de ' + imc.toFixed(2) + ' - Acima do Peso!');
    }else if (imc > 30 && imc <= 40){
        return('O indice de massa corporea é de ' + imc.toFixed(2) + ' - Obeso!');
    }else{
        return('O indice de massa corporea é de ' + imc.toFixed(2) + ' - Obessidade GRAVE!');
    }
}