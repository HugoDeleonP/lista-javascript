let lanche = {
    nome: "X-Burger",
    preco: 15.00,
    ingredientes: [
        "pa~o",
        "hambu´rguer",
        "queijo",
        "alface"
    ]
}

console.log(`O lanche ${lanche.nome} custa ${lanche.preco} R$ e apresenta os seguintes ingredientes: ${lanche.ingredientes}`);

lanche.preco = 17.50;
lanche.vegano = false;
console.log(lanche)