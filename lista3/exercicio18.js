/*
Crie um objeto pessoa com as propriedades nome e anoNascimento. Adicione um método
chamado apresentar que calcula a idade da pessoa (de forma simplificada, 2025 -
anoNascimento) e retorna uma string de apresentação. Exemplo: "Olá, meu nome é [nome] e
eu tenho [idade] anos." Use a palavra-chave this.
*/

function Pessoa(nome, anoNascimento){
    this.nome = nome;
    this.anoNascimento = anoNascimento;
}

let pessoa = new Pessoa("hugo", 2007);

function calculaIdade(pessoa){
    idade = parseInt(2025 - pessoa.anoNascimento );

    return `Olá, me chamo ${pessoa.nome} e tenho ${idade} anos.`
}

console.log(calculaIdade(pessoa));