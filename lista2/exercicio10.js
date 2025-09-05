/*
10 - Crie um script que pergunte 3 números ao usuário, coloque em um array, depois exiba tal
array.
Modifique os elementos do array de modo a a sequência de números ficar do contrário.
Ou seja, se digitou: 1,2,3
Vai aparecer: 3,2,1
*/

const input = require("prompt-sync")();

let numero1 = parseFloat(input("Digite o primeiro número: "));
let numero2 = parseFloat(input("Digite o segundo número: "));
let numero3 = parseFloat(input("Digite o terceiro número: "));

console.log(inverteSequencia(numero1, numero2, numero3));

function inverteSequencia(numero1, numero2, numero3){
    let numeros = [numero1, numero2, numero3];

    return numeros.reverse();
}