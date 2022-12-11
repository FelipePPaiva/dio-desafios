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

const peso = 40;
const altura = 1.65;

const imc = peso / (altura * altura);

if (imc < 18.5){
    console.log('O indice de massa corporea é de ' + imc.toFixed(2) + ' - Abaixo do peso!');
}else if (imc > 18.5 && imc <= 25){
    console.log('O indice de massa corporea é de ' + imc.toFixed(2) + ' - No peso Normal!');
}else if (imc > 25 && imc <= 30){
    console.log('O indice de massa corporea é de ' + imc.toFixed(2) + ' - Acima do Peso!');
}else if (imc > 30 && imc <= 40){
    console.log('O indice de massa corporea é de ' + imc.toFixed(2) + ' - Obeso!');
}else{
    console.log('O indice de massa corporea é de ' + imc.toFixed(2) + ' - Obessidade GRAVE!')
}