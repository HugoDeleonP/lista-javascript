/*
Crie um array chamado carrinhoDeCompras. Cada item do array deve ser um objeto com
duas propriedades: produto e quantidade. A propriedade produto, por sua vez, deve ser um
objeto com nome e preco.
1. Crie o array com pelo menos dois itens.
2. Acesse e imprima o nome do primeiro produto no carrinho.
3. Acesse e imprima o preço do segundo produto no carrinho.
*/

let carrinhoDeCompras = [];

let item = [{
    produto: {
        nome: "História da filosofia - Giovanni Reale",
        preco: 89.99
    },
    quantidade: 3
},
{
    produto: {
        nome: "Crime e Castigo - Fiodor Dostoievski",
        preco: 85.79
    },
    quantidade: 6
}];

console.log(item[0].produto.nome);
console.log(item[1].produto.preco);