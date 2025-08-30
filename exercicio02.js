const input = require('prompt-sync')();

let nota1 = input("Escreva a primeira nota: ");

let nota2 = input("Escreva a segunda nota: ");

let nota3 = input("Escreva a terceira nota: ");


function verificaSituacao(nota1, nota2, nota3){

    const media = (nota1 + nota2 + nota3)/3;

    let situacaoAluno = function(media){
        if(media < 5){
            situacao = "Reprovado";
        }

        else if(media <= 7){
            situacao = "Em exame";
        }

        else if(media <= 10){
            situacao = "Aprovado";
        }

        return situacao;
    }

    console.log(situacaoAluno);
}

verificaSituacao(nota1, nota2, nota3);

