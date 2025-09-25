/*
Dado o objeto livro abaixo, use os métodos Object.keys(), Object.values() e Object.entries()
para obter:
1. Um array com todas as suas chaves.
2. Um array com todos os seus valores.
3. Um array de arrays, onde cada subarray é um par [chave, valor].
Imprima cada um dos três arrays resultantes no console.
let livro = {
titulo: "1984",
autor: "George Orwell",

paginas: 328
};
*/

let livro = {
titulo: "1984",
autor: "George Orwell",
paginas: 328
};

let chaves = Object.keys(livro);
let valores = Object.values(livro);
let chave_valor = Object.entries(livro);

console.log(chaves, valores, chave_valor);