const input = require("prompt-sync")();

let numero = parseFloat(input("Digite um valor: "));
reajuste(numero);

function reajuste(numero){
    numero = numero + numero * 0.15;
    console.log(numero);
}