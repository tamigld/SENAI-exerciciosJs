let prompt = require('prompt-sync')()

// Escreva um programa que solicita ao usuário um número de 1 a 7 representando um dia da
// semana e exibe o nome correspondente a esse dia. Considere que 1 representa segunda-feira,
// 2 representa terça-feira e assim por diante.

let num = parseInt(prompt("Digite um número entre 1 e 7: "))

switch(num){
    case 1:
        console.log("É segunda-feira!")
        break
    case 2:
        console.log("É terça-feira!")
        break
    case 3:
        console.log("É quarta-feira!")
        break
    case 4:
        console.log("É quinta-feira!")
        break
    case 5:
        console.log("É sexta-feira!")
        break
    case 6:
        console.log("É sábado!")
        break
    case 7:
        console.log("É domingo!")
        break
    default:
        console.log("Esse não é um número entre 1 e 7.")
}