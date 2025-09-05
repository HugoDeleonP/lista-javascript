/*
Desenvolva um algoritmo que leia a idade de uma pessoa e informe a sua classe eleitoral.

A - Não-eleitor (abaixo de 16 anos)
B - Eleitor obrigatório (entre 18 e 65 anos)
C - Eleitor facultativo (entre 16 e 18 e maior de 65 anos)

*/

const input = require("prompt-sync")();

let idade = parseInt(input("Digite a idade: "));

verificaIdade(idade);

function verificaIdade(idade){
    if(idade > 65 || (idade >= 16 && idade <= 18)){
        console.log("Eleitor facultativo.");
    }
    else if(idade > 18 && idade <= 65){
        console.log("Eleitor obrigatório")
    }
    else{
        console.log("Não eleitor");
    }
}