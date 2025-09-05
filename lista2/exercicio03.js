const input = require("prompt-sync")();

let tempoHora = parseFloat(input("Digite o tempo em horas: "));
let velocidadeMedia = parseFloat(input("Digite a velocidade média, em km/h: "));

console.log(`Distância percorrida: ${calculaDistancia(tempoHora, velocidadeMedia)} km`)

function calculaDistancia(tempoHora, velocidadeMedia){

    return tempoHora * velocidadeMedia;
}