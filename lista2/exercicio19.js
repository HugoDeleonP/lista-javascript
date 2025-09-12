/*
19 - Crie um novo array chamado "idades" com algumas idades. Use o método every() para verificar se
todos os elementos do array são maiores que 18. Imprima o resultado no console.
*/

const input = require("prompt-sync")();

let idades = [];

function digitaNumeros(idades){
    for(let i = 0; i < 3; i++){
        let idade = parseInt(input(`Digite a ${i+1}ª idade: `));
        idades.push(idade);
    }
    return idades;
}

console.log(digitaNumeros(idades));

const verifica18 = idades.every((numero) => {
    return numero > 18;
});

console.log(verifica18);