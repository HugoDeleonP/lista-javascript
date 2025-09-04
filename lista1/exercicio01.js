const input = require('prompt-sync')();

let number = input("Write a number: ");

function verifyNumber(number){

    if(number > 0){
        console.log("The number is positive.");
    }

    else if(number < 0){
        console.log("The number is negative");
    }

    else if(number == 0){
        console.log("The number is zero");
    }
}

verifyNumber(number);