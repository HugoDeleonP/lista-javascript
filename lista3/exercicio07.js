/*
Detalhes do Usuário
Crie um objeto usuario que tenha uma propriedade nome e uma propriedade endereco. O
valor de endereco deve ser outro objeto com as propriedades rua, numero e cidade.
1. Crie o objeto usuario com dados fictícios.
2. Usando console.log, imprima a seguinte frase, acessando as propriedades aninhadas:
"O usuário mora em cidade, na rua."
*/

let usuario = {
    nome: "Antônio",
    endereco: {
        rua: "Governador",
        numero: "102",
        cidade: "Rio de Janeiro"
    } 
}

console.log(`O usuário ${usuario.nome} mora na cidade ${usuario.endereco.cidade}, na rua ${usuario.endereco.rua} de número ${usuario.endereco.numero}`);