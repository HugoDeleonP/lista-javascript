/*15 - Crie um objeto chamado "pessoa" que tenha as propriedades "nome", "idade" e "profissão".
Atribua valores a essas propriedades e imprima o objeto no console.*/

const input = require("prompt-sync")();

class Pessoa{
    nome;
    idade;
    profissao;

    constructor(nome, idade, profissao){
        this.nome = nome;
        this.idade = idade;
        this.profissao = profissao;
    }
}

criaPessoa();

function criaPessoa(){
    let nome = input("Digite o nome: ")

    let idade = parseInt(input("Digite a idade: "));

    let profissao = input("Digite a profissão: ");

    let pessoa = formerPessoa(nome, idade, profissao);

    console.log(pessoa);
}

function formerPessoa(nome, idade, profissao){
    return new Pessoa(nome, idade, profissao);
}