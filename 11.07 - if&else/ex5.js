let prompt = require('prompt-sync')();

// Faça um programa receba dois valores e imprima qual é o maior
// número digitado.

let num1 = parseFloat(prompt("Digite o primeiro número: "))
let num2 = parseFloat(prompt("Digite o segundo número: "))

if(num1 > num2){
    console.log("O maior número é: " + num1)
} else if(num1 < num2){
    console.log("O maior número é: " + num2)
} else{
    console.log("Os números são iguais!")
}