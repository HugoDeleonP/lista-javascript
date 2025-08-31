const input = require("prompt-sync")();

let nota1 = input("Escreva a primeira nota: ");

let nota2 = input("Escreva a segunda nota: ");

let nota3 = input("Escreva a terceira nota: ");

verificaSituacao(nota1, nota2, nota3);


function verificaSituacao(nota1, nota2, nota3){

    nota1 = parseInt(nota1);
    nota2 = parseInt(nota2);
    nota3 = parseInt(nota3);

    const soma = nota1 + nota2 + nota3;
    const media = soma/3;

    if(media >= 7){
        console.log("Aprovado");
    }
    else if(media >= 5){
        console.log("Em exame");
    }

    else if(media < 5){
        console.log("Reprovado");
    }

}