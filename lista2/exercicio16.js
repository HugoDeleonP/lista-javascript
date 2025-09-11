const input = require("prompt-sync")();

class Pessoa{
    nome;
    idade;
    profissao;
    hobbies = new Array();

    constructor(nome, idade, profissao, hobbies){
        this.nome = nome;
        this.idade = idade;
        this.profissao = profissao;
        this.hobbies = hobbies;
    }
}

criaPessoa();

function criaPessoa(){
    let nome = input("Digite o nome: ")

    let idade = parseInt(input("Digite a idade: "));

    let profissao = input("Digite a profissão: ");

    let hobbies = criaHobbies();
    
    let pessoa = formerPessoa(nome, idade, profissao, hobbies);

    console.log(pessoa);
}

function criaHobbies(){
    let hobbies = new Array();
    let quantidadeVezes = parseInt(input("Digite a quantidade de hobbies que queira adicionar: "));
    for(let i = 0; i < quantidadeVezes; i++){
        var hobbieAdicionado = input(`Digite o ${i + 1}º hobbie: `);
        hobbies.push(hobbieAdicionado);
    }

    return hobbies;
}

function formerPessoa(nome, idade, profissao, hobbies){
    return new Pessoa(nome, idade, profissao, hobbies);
}