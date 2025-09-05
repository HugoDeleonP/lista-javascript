/*
14 - Escreva uma função em JavaScript que conte quantas vezes um caractere aparece em uma string.
Tanto o caractere quanto a string devem ser informadas.
*/

const input = require("prompt-sync")();

let palavra = input("Digite uma palavra: ");
let caractere = input("Digite um caractere que compõe a palavra.");

contadorCaractere(palavra, caractere);

function contadorCaractere(palavra, caractere){
    palavra = Array.from(palavra);

    while(palavra.includes(caractere)){
        let index = palavra.findIndex( function(){
            return caractere;
        });

        console.log(palavra);

        palavra.splice()
        
    }
}

