/*
Crie um novo array chamado "numeros" com alguns números. Imprima o array no console.
*/

const input = require("prompt-sync")();

let numeros = [];

function digitaNumeros(numeros){
    for(let i = 0; i < 3; i++){
        let numero = parseInt(input(`Digite o ${i+1}º número: `));
        numeros.push(numero);
    }
    return numeros;
}

console.log(digitaNumeros(numeros));

/*
Use o método join() para transformar o array "numeros" em uma string separada por vírgulas. Imprima
a string resultante no console.
*/

console.log(numeros.join(","));

/* 
Use o método reverse() para inverter a ordem dos elementos do array "numeros". Imprima o array
atualizado no console.
*/

console.log(numeros.reverse());

/* 
Use o método slice() para criar um novo array que contenha apenas os dois primeiros elementos do
array "numeros". Imprima o novo array no console.
*/

console.log(numeros.slice(0, 2));

/* 
Use o método sort() para ordenar o array "nomes" em ordem alfabética. Imprima o array atualizado no
console.
*/

console.log(numeros.sort());

/* 
Use o método map() para criar um novo array que contenha o quadrado de cada elemento do array
"numeros". Imprima o novo array no console.
*/

console.log(numeros.map((numero) =>{
    return numero * numero;
}));

/* 
Use o método reduce() para calcular a soma de todos os elementos do array "numeros". Imprima o
resultado no console.
*/

console.log(numeros.reduce((numero) => {
    return numero + numero;
}));

/*
Use o método filter() para criar um novo array que contenha apenas os números pares do array
"numeros". Imprima o novo array no console.
*/

console.log(numeros.filter((numero) => {
    return numero % 2 === 0;
}))

/*
Use o método forEach() para imprimir cada elemento do array "nomes" no console.
*/

numeros.forEach((numero, indice) => {
    console.log(`${indice + 1} - ${numero}`);
});