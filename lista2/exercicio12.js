/*
12 - Criar uma função que junte dois arrays e retorno o resultado como um novo array
*/

const input = require("prompt-sync")();

let quantidadeVezes = parseInt(input("Digite a quantidade de elementos que deseja digitar: "));
let quantidadeInicial = parseInt(1);
let primeiroArray = new Array();
let segundoArray = new Array();

while(quantidadeInicial <= quantidadeVezes){
    let elemento = input("Digite o primeiro grupo de elementos: ");
    primeiroArray.push(elemento);
    quantidadeInicial++;
}

quantidadeInicial = parseInt(1);

while(quantidadeInicial <= quantidadeVezes){
    let elemento = input("Digite o segundo grupo de elemento: ");
    segundoArray.push(elemento);
    quantidadeInicial++;
}

console.log(juntaArrays(primeiroArray, segundoArray));

function juntaArrays(primeiroArray, segundoArray){
    return primeiroArray.concat(segundoArray);
}