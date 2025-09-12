/*
24 - Crie uma função chamada "gerarNumeroAleatorio" que recebe um número mínimo e um número
máximo como parâmetros e retorna um número aleatório entre esses dois números.
*/
const input = require("prompt-sync")();

let minimo = parseInt(input("Digite o número mínimo: "));
let maximo = parseInt(input("Digite o número máximo: "));

function gerarNumeroAleatorio(minimo, maximo){
    return Math.random() * (maximo - minimo) + minimo;
}

console.log(gerarNumeroAleatorio(minimo, maximo));