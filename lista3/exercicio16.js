/*
Crie uma função construtora chamada Produto que aceite nome e preco como
argumentos e os atribua ao this.
2. Adicione um método chamado descrever ao Produto.prototype. Este método deve
imprimir uma string como: "Nomedoproduto
custa R$preço
".
3. Crie uma nova instância de Produto (por exemplo, let livro = new Produto("O Senhor dos
Anéis", 80);).
4. Chame o método descrever() no seu novo objeto livro.
*/

function Produto(nome, preco){
    this.nome = nome;
    this.preco = preco;
}

function descrever(produto){
    return `${nome} custa R$${preco}`;
}

let livro = new Produto("A república - Platão", 65.99);

console.log(descrever(livro));