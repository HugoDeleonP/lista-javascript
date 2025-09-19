/*
Crie um objeto aluno com as propriedades nome e matricula. A propriedade matricula deve
ser um objeto contendo numero e curso.
1. Crie o objeto aluno.
2. O número da matrícula está desatualizado. Modifique o numero da matrícula para um
novo valor.
3. Imprima o objeto aluno completo para confirmar a alteração.
*/

let aluno = {
    nome: "Marco",
    matricula: {
        numero: 241,
        curso: "Sistemas de informação"
    }
}

aluno.matricula.numero = 96;

console.log(aluno);