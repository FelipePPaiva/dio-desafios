// Faça um algoritimo que dado as 3 notas tiradas por um aluno em um semestre da faculdade calcule e imprima a sua media e a sua classificação conforme tabela abaixo:

// classificação
//     - Média menor que 5, reprovação;
//     - Média entre 5 e 7, recuperação;
//     - Média acima de 7, passou de semestre;

const nota1 = 9;
const nota2 = 8.9;
const nota3 = 5;

const mediaNota = (nota1 + nota2 + nota3)/3;

if (mediaNota > 7){
    console.log('O aluno passou de semestre com a nota ' + mediaNota.toFixed(2));
}else if (mediaNota < 5) {
    console.log('O aluno não passou de semestre com a nota ' + mediaNota.toFixed(2));
}else{
    console.log('O aluno ficou de recuperação com a nota ' + mediaNota.toFixed(2));
}