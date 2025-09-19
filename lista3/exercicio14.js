/*
Crie uma função mostrarNumeros que aceita três argumentos (a, b, c) e os imprime. Crie um
array meusNumeros com os valores [10, 20, 30]. Use o operador de espalhamento para
passar os elementos do array como argumentos para a função mostrarNumeros.
*/

function mostrarNumeros(a, b, c){
    console.log(a);
    console.log(b);
    console.log(c);
}

let meusNumeros = [10, 20, 30];

mostrarNumeros(...meusNumeros);