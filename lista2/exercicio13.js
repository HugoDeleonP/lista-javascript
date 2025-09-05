/* 
13 - Escreva uma função que informe o retorno de um investimento (montante) com base nos
valores do capital inicial, tempo em meses e taxa de juros mensal.
Use a fórmula: M = C * (1+i)t
Onde:

C = Capital inicial investido
i = Taxa de juros, em percentual
t = Tempo do investimento, em meses
Exiba o resultado com duas casas decimais.
*/

const input = require("prompt-sync")();

let capitalInicial = parseFloat(input("Digite o valor de capital inicial investido: "));
let taxaJuros = parseFloat(input("Digite a taxa de juros em percentual: "));
let tempo = parseFloat(input("Digite o tempo de investimento, em meses: "))

console.log(montante(capitalInicial, taxaJuros, tempo));

function montante(capitalInicial, taxaJuros, tempo){
    return capitalInicial * (1 + taxaJuros) * tempo;
}