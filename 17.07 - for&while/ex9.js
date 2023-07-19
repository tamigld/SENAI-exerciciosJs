let prompt = require('prompt-sync')()

// Faça um programa que receba um número do usuário e mostre
// no console a contagem regressiva até 0.

let num = parseInt(prompt("Digite um número para contar regressivamente até o 0: "))

console.log(num)
while(num > 0){
    num = num - 1
    console.log(num)
}