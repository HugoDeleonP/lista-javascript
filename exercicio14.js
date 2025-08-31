/*

14 - Declare uma variável com um texto, por exemplo, "JavaScript". Exiba no console o texto invertido ("tpircSavaJ").

*/

const input = require("prompt-sync")();

let palavra = input("Digite uma palavra: ");

console.log(inverterPalavra(palavra));

function inverterPalavra(palavra){

    let palavraInvertida = Array.from(palavra);

    palavraInvertida = palavraInvertida.reverse();

    palavraInvertida = palavraInvertida.join("");

    return palavraInvertida;
}