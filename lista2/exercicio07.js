/*
Um comerciante comprou um produto e quer vendê-lo com lucro de 45% se o valor
da compra for menor que R$20,00; caso contrário, o lucro será de 30%. Entrar com
o valor do produto e imprimir o valor da venda.
 */

const input = require("prompt-sync")();

let valorProduto = parseFloat(input("Digite o valor do produto: "));

calculoValorVenda(valorProduto);

function calculoValorVenda(valorProduto){

    if(valorProduto < 20){
        console.log(`Valor de venda:  ${valorProduto + valorProduto * 0.45}`);
    }
    else{
        console.log(`Valor de venda:  ${valorProduto + valorProduto * 0.3}`);
    }
}