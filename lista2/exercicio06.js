/*
6 - Desenvolva um algoritmo que solicite salário e prestação. Se a prestação for
maior que 20% do salário, imprimir: Empréstimo não pode ser concedido.
Senão imprimir: Empréstimo pode ser concedido.
*/

const input = require("prompt-sync")();

let salario = parseFloat(input("Digite o salário: "));
let prestacao = parseFloat(input("Digite o valor da prestação: "));

analisaEmprestimo(salario, prestacao);

function analisaEmprestimo(salario, prestacao){
    if(prestacao > (salario * 0.2 )){
        console.log("Empréstimo não pode ser concedido.");
    }
    else{
        console.log("Empréstimo pode ser concedido.");
    }

}