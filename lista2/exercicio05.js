/*
5 - Desenvolva um algoritmo que leia 2 números inteiros e some. Se a soma for
maior que 10, mostre o resultado da soma.
*/

const input = require("prompt-sync")();

let numero1 = parseInt(input("Digite o primeiro numero: "));
let numero2 = parseInt(input("Digite o segundo numero: "));

console.log(soma(numero1, numero2));

function soma(numero1, numero2){

    if(numero1 + numero2 > 10){
        return numero1 + numero2;
    }

    else{
        return undefined;
    }
}