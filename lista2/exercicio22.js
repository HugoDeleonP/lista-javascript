/*
22 - Crie um array chamado "frutas" com as frutas: maçã, banana e laranja. Imprima o array no
console.
*/

let frutas = ["maçã", "banana", "laranja"];
console.log(frutas);

/*
Acesse o segundo elemento do array "frutas" e imprima no console.
*/

console.log(frutas[1]);

/*
Adicione a fruta "morango" ao final do array "frutas". Imprima o array atualizado no console.
*/

frutas.push("morango");
console.log(frutas);

/*
Remova o primeiro elemento do array "frutas". Imprima o array atualizado no console.
*/

frutas.shift()
console.log(frutas);

/*
Crie um novo array chamado "numeros" com alguns números. Use o método push() para adicionar um
novo número ao final do array. Imprima o array atualizado no console.
*/

let numeros = [21, 144, 64, 128];
numeros.push(1822);

console.log(numeros);

/*
Use o método pop() para remover o último elemento do array "numeros". Imprima o array atualizado no
console.
*/

numeros.pop();
console.log(numeros);

/*
Use o método unshift() para adicionar um novo número no início do array "numeros". Imprima o array
atualizado no console.
*/

numeros.unshift(49);
console.log(numeros);

/*
Use o método shift() para remover o primeiro elemento do array "numeros". Imprima o array atualizado
no console.
*/

numeros.shift();
console.log(numeros);

/*
Crie um novo array chamado "frutas2" com as frutas: manga, abacaxi e melancia. Use o método
concat() para unir os arrays "frutas" e "frutas2" em um único array chamado "todasFrutas". Imprima o
array "todasFrutas" no console.
*/

let frutas2 = ["manga", "abacaxi", "melancia"];

let todasFrutas = frutas.concat(frutas2);
console.log(todasFrutas);

/*
Use o método slice() para criar um novo array que contenha apenas os dois primeiros elementos do
array "todasFrutas". Imprima o novo array no console.
*/

let doisPrimeirosElementos = todasFrutas.slice(2);
console.log(doisPrimeirosElementos);

/*
Use o método splice() para remover o segundo elemento do array "todasFrutas". Imprima o array
atualizado no console.
*/

let removeSegundoElemento = todasFrutas.splice(0, 2);

console.log(removeSegundoElemento);
console.log(todasFrutas);


/*
Use o método indexOf() para encontrar o índice da fruta "banana" no array "todasFrutas". Imprima o
índice no console.
*/

let index = todasFrutas.indexOf("banana");
console.log(index);

/*
Use o método filter() para criar um novo array que contenha apenas as frutas que começam com a letra
"m". Imprima o novo array no console.
*/

let frutas_letraM = todasFrutas.filter( () => {
    todasFrutas.map( () => {
        todasFrutas.findIndex(() =>{
            return todasFrutas.includes("m");
        });
    });
});

/*
Use o método map() para criar um novo array que contenha o dobro de cada elemento do array
"numeros". Imprima o novo array no console.
*/

let numerosDobro =
     numeros.map( (numero) => {
        return numero * 2;
    });

console.log(numerosDobro);

/*
Use o método forEach() para imprimir cada elemento do array "todasFrutas" no console.
*/

todasFrutas.forEach( (numero, indice) => {
    console.log(`${indice + 1} - ${numero}`);
});