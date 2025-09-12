/*
25 - Crie uma função chamada "calculadora" que recebe uma string como parâmetro contendo uma
expressão matemática (ex: "2+3*4") e retorna o resultado dessa expressão.
*/

const input = require("prompt-sync")();

let expressao = input("Digite uma expressão matemática: ");

function calculadora(expressao){
    console.log(eval(expressao));
}

calculadora(expressao);