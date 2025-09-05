/*
11 - Faça uma função que recebe um array de qualquer tamanho e ordene seus elementos na
ordem crescente.
*/

const input = require("prompt-sync")();

let quantidadeVezes = parseInt(input("Digite a quantidade de elementos que deseja digitar: "));
let quantidadeInicial = parseInt(1);
let array = new Array();

while(quantidadeInicial <= quantidadeVezes){
    let elemento = input("Digite o elemento: ");
    array.push(elemento);
    quantidadeInicial++;
}

console.log(ordenaArray(array));

function ordenaArray(array){
    console.log(array);
    return array.sort();
}