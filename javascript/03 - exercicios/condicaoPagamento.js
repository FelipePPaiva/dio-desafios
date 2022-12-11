/*Elabore um algoritmo que calcule o que deve ser pago por um produto, considerando o preço normal de etiqueta e a escolha da condição de pagamento.
Utilize os códigos da tabela a seguir para ler qual a condição de pagamento escolhida e efetuar o calculo adequado.

Código Condição de pagamento:
    - A vista Débito, recebe 10% de desconto;
    - A vista PIX ou Dinheiro, recebe 15% de desconto;
    - EM 2x, preço normal de etiqueta sem juros.
    - Acima de 2x, preço normal de etiqueta mais 10% de juros.
*/

let precoProduto = 250.00;
const condicaoPagamento = 'Dinheiro';
const totalParcela = 2;

if (condicaoPagamento === 'debito'){
    precoProduto = precoProduto - (precoProduto*0.10);
    console.log('O valor do produto com desconto de 10% fica em R$:' + precoProduto);
}else if (condicaoPagamento === 'Dinheiro' || condicaoPagamento === 'Pix'){
    precoProduto = precoProduto - (precoProduto*0.15);
    console.log('O valor do produto com desconto de 15% fica em R$:' + precoProduto);
}else if (condicaoPagamento === 'cartão' && totalParcela <= 2){
    let valorParcela = (precoProduto / totalParcela);
    console.log('O valor do produto fica em R$:' + precoProduto);
    console.log('O valor da Parcela é de R$' + valorParcela.toFixed(2));  
}else{
    precoProduto = precoProduto + (precoProduto * 0.10);
    let valorParcela = (precoProduto / totalParcela)
    console.log('O valor do produto fica em R$:' + precoProduto +' com os 10% de juros');
    console.log('O valor da Parcela é de R$' + valorParcela.toFixed(2));
}
