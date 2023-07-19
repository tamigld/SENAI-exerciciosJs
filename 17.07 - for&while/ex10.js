let prompt = require('prompt-sync')()

// Faça um programa que receba um número do usuário e continue
// a pedir o número se o numero for diferente de 0.

let num = parseInt(prompt("Digite o número: "))

while(num != 0){
    num = parseInt(prompt("Digite o número: "))
}