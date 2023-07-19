let prompt = require('prompt-sync')()

// Escreva um programa que solicita três números ao usuário e verifica se eles estão em ordem
// crescente. Exibindo uma mensagem indicando se os números estão em ordem crescente ou
// não.

console.log("Digite três números em ordem e verificamos se está em ordem crescente ou decrescente.")

let num1 = parseInt(prompt("Digite o primeiro número: "))
let num2 = parseInt(prompt("Digite o segundo número: "))
let num3 = parseInt(prompt("Digite o terceiro número: "))

if(num1 < num2 && num2 < num3){
    console.log("Os números estão em ordem crescente.")
} else if(num1 > num2 && num2 > num3){
    console.log("Os números estão em ordem decrescente.")
} else{
    console.log("OS números não estão ordenados.")
}