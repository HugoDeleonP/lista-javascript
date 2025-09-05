/*
Desenvolva um algoritmo que leia um número e se for maior que 20 imprima a
metade desse número.
*/ 

const input = require("prompt-sync")();

numero = parseInt(input("Digite um número: "));

verificaMaior20(numero);

function verificaMaior20(numero){

    if(numero > 20){
        console.log(numero/2);
    }

    else{
        console.log(numero);
    }
}