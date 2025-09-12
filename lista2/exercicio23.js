const input = require("prompt-sync")();

/*
23 - Crie uma função chamada "gerarSenha" que recebe um número como parâmetro e retorna uma
senha aleatória com esse número de caracteres.
*/
const caracteres = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789";

let tamanho = digitarTamanho();

function digitarTamanho() {
    let tamanho = parseInt(input("Digite o tamanho da senha que deseja: "));
    return tamanho;
}

function gerarSenha(tamanho){
    let resultado = '';
    for(let i = 0; i < tamanho; i++){
        resultado += caracteres.charAt(Math.floor(Math.random() * tamanho));
    }

    return resultado;
}

console.log(gerarSenha(tamanho));