/*
17 - Crie um array chamado "nomes" com os nomes de algumas pessoas que você conhece. Imprima o
array no console.
*/

const input = require("prompt-sync")();

let nomes = new Array();

console.log(digitaNome(nomes));

function digitaNome(nomes){
    console.log("Digite o nome de três pessoas.")
    for(let i = 0; i < 3; i++){
        let nome = input(`Digite o nome da ${i + 1}ª pessoa: `);
        nomes.push(nome);
    }
    
    return nomes;
}

//Adicione um novo nome ao final do array "nomes". Imprima o array atualizado no console.
nomes.push(input("Digite o nome da 4ª pessoa: "));
console.log(nomes);

//Remova o último nome do array "nomes". Imprima o array atualizado no console.
nomes.pop();
console.log(nomes);

//Adicione um novo nome ao início do array "nomes". Imprima o array atualizado no console.
nomes.unshift(input("Digite o nome de uma pessoa para ser a primeira da lista: "));
console.log(nomes);

//Remova o primeiro nome do array "nomes". Imprima o array atualizado no console.
nomes.shift();
console.log(nomes);
