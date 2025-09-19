/*
Crie dois objetos: dadosPessoais com as propriedades nome e idade, e dadosProfissionais
com cargo e empresa. Use o operador de espalhamento para criar um novo objeto
funcionarioCompleto que mescle as propriedades de ambos. Imprima o resultado.
*/

let dadosPessoais = {
    nome: "Macabeu",
    idade: 26
};

let dadosProfissionais = {
    cargo: "Arquiteto de sistemas",
    empresa: "WEG"
};

let funcionarioCompleto = {...dadosPessoais, ...dadosProfissionais};

console.log(funcionarioCompleto);