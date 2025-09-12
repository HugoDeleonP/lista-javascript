/*
26 - Crie uma função chamada "converterMorse" que recebe uma string em código Morse como
parâmetro e retorna a mesma string em letras.
*/

const input = require("prompt-sync")();

const tradutor = new Map([
    [".-", "a"], ["-...", "b"], ["-.-.", "c"], ["-..","d"], [".", "e"], ["..-.", "f"], ["--.", "g"],
    ["....", "h"], ["..", "i"], [".---", "j"], ["-.-", "k"], [".-..", "l"], ["--", "m"], ["-.", "n"],
    ["---", "o"], [".--.", "p"], ["--.-", "q"], [".-.", "r"], ["...", "s"], ["-", "t"], ["..-", "u"],
    ["...-", "v"], [".--", "w"], ["-..-", "x"], ["-.--", "y"], ["--..", "z"], [" ", " "]
]
);

function converterMorse(expressao){
    console.log(tradutor.get(expressao));
}

function analisarMorse(expressao){
    let continuarAnalisando = true;
    letraUnit = Array.from(expressao);
    letraUnit.forEach((element) => {
        if(element == " "){
            let novoArray = letraUnit.map( 
                return letraUnit < element.index();
            )
        }
    });
}

let palavra = input("Digite em código morse: ");
converterMorse(palavra);

//pegar por for loop até o espaço e reconstituir cada letra