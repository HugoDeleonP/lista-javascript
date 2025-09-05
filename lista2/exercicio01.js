const input = require("prompt-sync")();

let numero = parseInt(input("Digite um número inteiro: "));

sucessorAntecessor(numero);

function sucessorAntecessor(numero){    
    let antecessor = numero - 1;
    let sucessor = numero + 1;

    console.log(`Antecessor: ${antecessor}`);
    console.log(`Sucessor: ${sucessor}`);
    
}
