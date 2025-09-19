/*
1. Crie um objeto veiculo com uma propriedade rodas com o valor 4.
2. Crie um objeto carro usando Object.create(veiculo). O objeto carro deve ter uma
propriedade própria marca com o valor "Ford".
3. Imprima a marca do carro.
4. Imprima a quantidade de rodas do carro. (Note que rodas não está diretamente em
carro, mas no seu protótipo).
*/

let veiculo = {
    rodas: 4
};

let carro = Object.create(veiculo);
carro.marca = "Ford";

console.log(carro.marca);
console.log(carro.rodas);